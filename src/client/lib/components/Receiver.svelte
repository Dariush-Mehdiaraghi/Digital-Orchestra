<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import FrequencyVisualizer from './FrequencyVisualizer.svelte';
  import { roleStore } from '../stores/role';
  import { connectionStore } from '../stores/connection';
  import type { FrequencyDetector } from '../utils/frequency-detector';
  import type { AudioManager } from '../utils/audio';

  export let frequencyDetector: FrequencyDetector;
  export let onFrequencyDetected: (freq: number) => void;

  let spectrum: Float32Array | null = null;
  let detectedFrequency: number | null = null;
  let isListening = false;
  let animationFrame: number;
  let audioStarted = false;

  $: assignedColor = $roleStore.assignedColor;
  $: hasSender = $connectionStore.connections.length > 0;

  onMount(async () => {
    try {
      await frequencyDetector.start((freq) => {
        detectedFrequency = freq;
        onFrequencyDetected(freq);
      });
      isListening = true;
      updateSpectrum();
    } catch (error) {
      console.error('Failed to start frequency detection:', error);
      alert('Microphone access is required to detect pairing frequency. Please allow microphone access and refresh.');
    }
  });

  onDestroy(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
    frequencyDetector.stop();
  });

  function updateSpectrum() {
    const newSpectrum = frequencyDetector.getSpectrum();
    if (newSpectrum && newSpectrum.length > 0) {
      spectrum = newSpectrum;
    }
    animationFrame = requestAnimationFrame(updateSpectrum);
  }
</script>

<div class="receiver">
  <div class="header">
    <h2>Receiver Mode</h2>
    {#if hasSender}
      <p class="status connected">✓ Connected to sender</p>
    {:else}
      <p class="status listening">🎙️ Listening for pairing signal...</p>
    {/if}
  </div>

  {#if assignedColor}
    <div class="color-display" style="background-color: {assignedColor}">
      <span>Your Color</span>
    </div>
  {/if}

  {#if !hasSender}
    <div class="visualizer-wrapper">
      <FrequencyVisualizer {spectrum} {detectedFrequency} />
    </div>
  {/if}

  <div class="instructions">
    {#if !hasSender}
      <h3>How to pair:</h3>
      <ol>
        <li>Make sure your device can hear the sender</li>
        <li>The sender will emit a beeping sound</li>
        <li>Once detected, you'll be automatically connected</li>
      </ol>
    {:else}
      <p>You're connected! Notes will play automatically.</p>
    {/if}
  </div>
</div>

<style>
  .receiver {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
  }

  .header {
    display: none;
  }

  .color-display {
    transition: all 2s ease-in-out;
    width: 14px;
    height: 14px;
    display: flex;
    margin: 5px 3px;
    justify-content: center;
    align-items: center;
    border: solid 1px var(--secondaryColor);
    border-radius: 100%;
    position: relative;
  }

  .color-display span {
    display: none;
  }

  .visualizer-wrapper {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
  }

  .instructions {
    display: none;
  }
</style>
