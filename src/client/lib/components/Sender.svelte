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
      <div style="display: flex; flex-direction: column;">
        <button class="bpm-btn" on:click={incrementBPM}>+</button>
        <button class="bpm-btn" on:click={decrementBPM}>−</button>
      </div>
      <span class="bpm-display">{bpm}</span>
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
    margin-top: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: min-content;
    margin-left: auto;
    margin-right: auto;
  }

  .header {
    display: none;
  }

  .controls {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 0;
    margin-bottom: 0;
  }

  .play-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border: solid 1px var(--secondaryColor);
    border-radius: 7px;
    padding: 7px;
    margin: 3px;
    cursor: pointer;
    background: transparent;
    color: var(--secondaryColor);
    font-size: 0.4em;
    transition: opacity 0.2s ease;
  }

  .play-button:hover {
    opacity: 0.6;
  }

  .bpm-control {
    display: flex;
    align-items: center;
    margin: 3px;
    gap: 0;
  }

  .bpm-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    font-size: 0.7em;
    background: none;
    border: none;
    color: var(--secondaryColor);
    padding: 0;
    transition: opacity 0.2s ease;
  }

  .bpm-btn:hover {
    opacity: 0.6;
  }

  .bpm-btn:first-child {
    margin-bottom: 5px;
  }

  .bpm-display {
    display: flex;
    height: 100%;
    font-size: 1em;
    margin-left: 5px;
    font-weight: normal;
  }

  .connections-status {
    display: none;
  }

  .sequencers {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .empty-state {
    font-size: 0.5em;
    text-align: center;
    padding: 2em;
    color: var(--secondaryColor);
  }

  .hint {
    display: none;
  }
</style>
