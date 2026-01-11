<script lang="ts">
  import { onDestroy } from 'svelte';
  import Sequencer from './Sequencer.svelte';
  import { connectionStore } from '../stores/connection';
  import { audioStore } from '../stores/audio';
  import { roleStore } from '../stores/role';
  import { SEQUENCE_LENGTH, NOTE_NAMES, COLORS, type NoteMessage } from '$shared/types';
  import type { WebRTCManager } from '../utils/webrtc';
  import type { AudioManager } from '../utils/audio';
  import * as Tone from 'tone';

  export let webrtc: WebRTCManager;
  export let audioManager: AudioManager;

  let sequences: Map<string, boolean[][]> = new Map();
  let currentSteps: Map<string, number> = new Map();
  let isPlaying = false;
  let bpm = 120;
  let loopScheduled = false;

  $: connections = $connectionStore.connections;
  $: assignedFrequency = $roleStore.assignedFrequency;

  // Initialize sequences for each connection
  $: {
    connections.forEach(conn => {
      if (!sequences.has(conn.peerId)) {
        sequences.set(conn.peerId, Array.from({ length: 4 }, () => 
          Array(SEQUENCE_LENGTH).fill(false)
        ));
        currentSteps.set(conn.peerId, -1);
      }
    });
  }

  function togglePlay() {
    if (!isPlaying) {
      startPlaying();
    } else {
      stopPlaying();
    }
  }

  async function startPlaying() {
    await audioManager.initialize();
    audioManager.startPlaying();
    audioManager.setBPM(bpm);
    
    // Stop beeping
    audioManager.stopBeeping();
    audioStore.setBeeping(false);
    
    // Tell receivers to start
    webrtc.broadcast({ type: 'start-playing' });
    
    // Schedule loop
    if (!loopScheduled) {
      Tone.Transport.scheduleRepeat(loop, `${SEQUENCE_LENGTH}n`);
      Tone.Transport.scheduleRepeat(updatePosition, `${SEQUENCE_LENGTH}n`);
      loopScheduled = true;
    }
    
    isPlaying = true;
    audioStore.setPlaying(true);
  }

  function stopPlaying() {
    audioManager.stopPlaying();
    isPlaying = false;
    audioStore.setPlaying(false);
    
    // Reset positions
    currentSteps.forEach((_, peerId) => {
      currentSteps.set(peerId, -1);
    });
    currentSteps = currentSteps;
  }

  let index = 0;
  function loop(time: number) {
    const step = index % SEQUENCE_LENGTH;

    connections.forEach(conn => {
      const sequence = sequences.get(conn.peerId);
      if (!sequence) return;

      const notesToPlay: string[] = [];
      
      for (let i = 0; i < 4; i++) {
        if (sequence[i][step]) {
          notesToPlay.push(NOTE_NAMES[i]);
        }
      }

      if (notesToPlay.length > 0) {
        const message: NoteMessage = {
          type: 'note',
          payload: {
            notes: notesToPlay,
            time
          }
        };
        webrtc.send(conn.peerId, message);
      }
    });

    index++;
  }

  let posIndex = 0;
  function updatePosition() {
    const step = posIndex % SEQUENCE_LENGTH;
    
    connections.forEach(conn => {
      currentSteps.set(conn.peerId, step);
    });
    currentSteps = currentSteps;
    
    posIndex++;
  }

  function incrementBPM() {
    bpm++;
    audioManager.setBPM(bpm);
    audioStore.setBPM(bpm);
  }

  function decrementBPM() {
    if (bpm > 40) {
      bpm--;
      audioManager.setBPM(bpm);
      audioStore.setBPM(bpm);
    }
  }

  onDestroy(() => {
    if (isPlaying) {
      stopPlaying();
    }
  });
</script>

<div class="sender">
  <div class="header">
    <h2>Sender Mode</h2>
    {#if assignedFrequency}
      <p class="frequency">Broadcasting at {assignedFrequency}Hz</p>
    {/if}
  </div>

  <div class="controls">
    <button class="play-button" class:playing={isPlaying} on:click={togglePlay}>
      {isPlaying ? '⏸ Stop' : '▶ Play'}
    </button>

    <div class="bpm-control">
      <button class="bpm-btn" on:click={decrementBPM}>−</button>
      <span class="bpm-display">{bpm} BPM</span>
      <button class="bpm-btn" on:click={incrementBPM}>+</button>
    </div>
  </div>

  <div class="connections-status">
    <p>Connected devices: {connections.length}</p>
  </div>

  <div class="sequencers">
    {#each connections as conn, i}
      {@const sequence = sequences.get(conn.peerId) || []}
      {@const currentStep = currentSteps.get(conn.peerId) || -1}
      {@const color = COLORS[i % COLORS.length]}
      <Sequencer 
        peerId={conn.peerId}
        {color}
        {sequence}
        {currentStep}
        on:update={(e) => sequences.set(conn.peerId, e.detail)}
      />
    {/each}
  </div>

  {#if connections.length === 0}
    <div class="empty-state">
      <p>No receivers connected yet</p>
      <p class="hint">Receivers will appear here once they pair with your frequency</p>
    </div>
  {/if}
</div>

<style>
  .sender {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .frequency {
    color: var(--text-secondary);
    font-family: monospace;
  }

  .controls {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .play-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    background: var(--primary-color);
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .play-button:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .play-button.playing {
    background: var(--danger-color);
  }

  .bpm-control {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    border-radius: 0.5rem;
    border: 1px solid var(--border-color);
  }

  .bpm-btn {
    width: 36px;
    height: 36px;
    border: none;
    background: var(--primary-color);
    color: white;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .bpm-btn:hover {
    transform: scale(1.1);
  }

  .bpm-display {
    font-weight: 600;
    font-size: 1.1rem;
    min-width: 80px;
    text-align: center;
  }

  .connections-status {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text-secondary);
  }

  .sequencers {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--text-secondary);
  }

  .hint {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .sender {
      padding: 1rem;
    }

    .controls {
      flex-direction: column;
      gap: 1rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
</style>
