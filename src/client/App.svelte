<script lang="ts">
  import { onMount } from 'svelte';
  import RoleSelector from './lib/components/RoleSelector.svelte';
  import Sender from './lib/components/Sender.svelte';
  import Receiver from './lib/components/Receiver.svelte';
  import { UserRole, ConnectionState, COLORS, type RTCMessage, type NoteMessage } from '$shared/types';
  import { roleStore } from './lib/stores/role';
  import { connectionStore } from './lib/stores/connection';
  import { audioStore } from './lib/stores/audio';
  import { WebRTCManager } from './lib/utils/webrtc';
  import { AudioManager } from './lib/utils/audio';
  import { FrequencyDetector } from './lib/utils/frequency-detector';
  import { getTimeSync } from './lib/utils/time-sync';

  let role = UserRole.None;
  let ws: WebSocket | null = null;
  let webrtc = new WebRTCManager();
  let audioManager = new AudioManager();
  let frequencyDetector = new FrequencyDetector();
  let timeSync = getTimeSync();
  let timeDelta: number | undefined;

  $: roleStore.subscribe(store => {
    role = store.role;
  });

  onMount(async () => {
    // Start time sync
    await timeSync.start();
    
    // Connect to WebSocket
    connectWebSocket();
  });

  function connectWebSocket() {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = import.meta.env.DEV 
      ? 'ws://localhost:3000/ws'
      : `${protocol}//${window.location.host}/ws`;

    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('🌐 WebSocket connected');
    };

    ws.onmessage = (event) => {
      handleWebSocketMessage(JSON.parse(event.data));
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket closed, attempting reconnect...');
      setTimeout(connectWebSocket, 2000);
    };
  }

  async function handleWebSocketMessage(message: any) {
    switch (message.type) {
      case 'room-created':
        const frequency = message.payload.frequency;
        roleStore.setFrequency(frequency);
        audioManager.startBeeping(frequency);
        audioStore.setBeeping(true);
        console.log(`🐝 Beeping at ${frequency}Hz`);
        break;

      case 'room-found':
        const senderPeerId = message.payload.senderPeerId;
        console.log('🚪 Joining room of sender:', senderPeerId);
        webrtc.connectToPeer(senderPeerId);
        frequencyDetector.stop();
        break;

      case 'room-not-found':
        console.log('❌ Room not found for detected frequency');
        break;

      case 'error':
        console.error('Server error:', message.payload.message);
        break;
    }
  }

  async function selectRole(event: CustomEvent<UserRole>) {
    const selectedRole = event.detail;
    roleStore.setRole(selectedRole);

    // Initialize WebRTC
    const peerId = await webrtc.initialize(handleRTCMessage, handleConnectionStateChange);
    connectionStore.setMyPeerId(peerId);

    // Register with server
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'register-peer',
        payload: { peerId }
      }));

      if (selectedRole === UserRole.Sender) {
        // Create room
        ws.send(JSON.stringify({
          type: 'create-room',
          payload: { peerId }
        }));
      }
    }
  }

  function handleRTCMessage(message: RTCMessage, conn: any) {
    switch (message.type) {
      case 'note':
        const noteMsg = message as NoteMessage;
        if (timeDelta === undefined) {
          timeDelta = noteMsg.payload.time - audioManager.now();
        }
        const timeToPlay = noteMsg.payload.time - timeDelta + 0.8;
        audioManager.playNotes(noteMsg.payload.notes, timeToPlay);
        
        // Visual feedback
        if ($roleStore.assignedColor) {
          flashBackground($roleStore.assignedColor);
        }
        break;

      case 'start-playing':
        audioManager.initialize().then(() => {
          audioManager.startPlaying();
          audioStore.setPlaying(true);
        });
        break;

      case 'color-assignment':
        const color = message.payload.color;
        roleStore.setColor(color);
        const colorIndex = COLORS.indexOf(color);
        if (colorIndex >= 0) {
          audioManager.loadSampler(colorIndex);
        }
        break;

      case 'ping':
        conn.send({ type: 'pong', payload: { timestamp: Date.now() } });
        break;
    }
  }

  function handleConnectionStateChange(state: ConnectionState, peerId: string) {
    if (state === ConnectionState.Connected) {
      connectionStore.addConnection({
        connection: webrtc.getConnection(peerId)!.connection,
        state,
        peerId,
        connectedAt: Date.now()
      });

      // If we're a sender, assign color to new receiver
      if ($roleStore.role === UserRole.Sender) {
        const connections = $connectionStore.connections;
        const colorIndex = (connections.length - 1) % COLORS.length;
        webrtc.send(peerId, {
          type: 'color-assignment',
          payload: { color: COLORS[colorIndex] }
        });
      }
    } else if (state === ConnectionState.Disconnected) {
      connectionStore.removeConnection(peerId);
      
      // If receiver lost sender, restart frequency detection
      if ($roleStore.role === UserRole.Receiver && $connectionStore.connections.length === 0) {
        frequencyDetector.start(handleFrequencyDetected);
        timeDelta = undefined;
        audioManager.stopPlaying();
      }
    }

    connectionStore.updateConnectionState(peerId, state);
  }

  function handleFrequencyDetected(frequency: number) {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'find-room',
        payload: { frequency }
      }));
    }
  }

  function flashBackground(color: string) {
    const root = document.documentElement;
    root.style.setProperty('--flash-color', color);
    document.body.classList.add('flash');
    setTimeout(() => {
      document.body.classList.remove('flash');
    }, 900);
  }
</script>

<main>
  {#if role === UserRole.None}
    <RoleSelector on:selectRole={selectRole} />
  {:else if role === UserRole.Sender}
    <Sender {webrtc} {audioManager} />
  {:else if role === UserRole.Receiver}
    <Receiver {frequencyDetector} onFrequencyDetected={handleFrequencyDetected} />
  {/if}
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.9s ease;
  }

  :global(body.flash) {
    background-color: var(--flash-color) !important;
  }

  main {
    min-height: 100vh;
  }

  :global(button) {
    font-family: inherit;
  }
</style>
