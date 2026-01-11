<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { SEQUENCE_LENGTH, NOTE_COUNT, NOTE_NAMES } from '$shared/types';

  export let peerId: string;
  export let color: string;
  export let sequence: boolean[][] = Array.from({ length: NOTE_COUNT }, () => 
    Array(SEQUENCE_LENGTH).fill(false)
  );
  export let currentStep: number = -1;

  const dispatch = createEventDispatcher<{
    update: boolean[][];
  }>();

  function toggleStep(noteIndex: number, stepIndex: number) {
    sequence[noteIndex][stepIndex] = !sequence[noteIndex][stepIndex];
    sequence = sequence; // Trigger reactivity
    dispatch('update', sequence);
  }
</script>

<div class="sequencer" style="--seq-color: {color}">
  <div class="sequencer-header">
    <div class="peer-id">{peerId.substring(0, 8)}...</div>
    <div class="color-indicator" style="background-color: {color}"></div>
  </div>

  <div class="sequencer-grid">
    {#each Array(NOTE_COUNT) as _, noteIndex}
      <div class="note-row">
        <div class="note-label">{NOTE_NAMES[noteIndex]}</div>
        <div class="steps">
          {#each Array(SEQUENCE_LENGTH) as _, stepIndex}
            <button
              class="step"
              class:active={sequence[noteIndex][stepIndex]}
              class:current={stepIndex === currentStep}
              on:click={() => toggleStep(noteIndex, stepIndex)}
              aria-label="Note {NOTE_NAMES[noteIndex]}, Step {stepIndex + 1}"
            >
              <span class="step-inner"></span>
            </button>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .sequencer {
    background: var(--bg-secondary);
    border-radius: 0.75rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border: 2px solid var(--border-color);
  }

  .sequencer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .peer-id {
    font-family: monospace;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .color-indicator {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid var(--border-color);
  }

  .sequencer-grid {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .note-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .note-label {
    width: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-align: right;
  }

  .steps {
    display: flex;
    gap: 4px;
    flex: 1;
  }

  .step {
    flex: 1;
    aspect-ratio: 1;
    min-width: 0;
    padding: 0;
    border: 1px solid var(--border-color);
    background: var(--bg-primary);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.15s ease;
    position: relative;
    overflow: hidden;
  }

  .step:hover {
    border-color: var(--seq-color);
    transform: scale(1.1);
  }

  .step.active {
    background: var(--seq-color);
    border-color: var(--seq-color);
  }

  .step.current {
    box-shadow: 0 0 0 2px var(--primary-color);
    z-index: 1;
  }

  .step-inner {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .note-label {
      width: 40px;
      font-size: 0.75rem;
    }

    .steps {
      gap: 2px;
    }

    .step {
      border-radius: 2px;
    }
  }
</style>
