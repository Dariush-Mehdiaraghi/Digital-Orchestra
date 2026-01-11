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
      alert('Microphone access is required to detect pairing frequency');
    }
  });

  onDestroy(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  });

  function updateSpectrum() {
    spectrum = frequencyDetector.getSpectrum();
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

  <div class="visualizer-wrapper">
    <FrequencyVisualizer {spectrum} {detectedFrequency} />
  </div>

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
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .status {
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    display: inline-block;
  }

  .status.listening {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
  }

  .status.connected {
    background: rgba(76, 255, 76, 0.2);
    color: rgb(0, 200, 0);
    border: 1px solid rgb(76, 255, 76);
  }

  .color-display {
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    max-width: 200px;
  }

  .visualizer-wrapper {
    margin: 2rem 0;
  }

  .instructions {
    text-align: center;
    color: var(--text-secondary);
    margin-top: 2rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  ol {
    text-align: left;
    display: inline-block;
    margin: 0 auto;
  }

  li {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    .receiver {
      padding: 1rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
</style>
