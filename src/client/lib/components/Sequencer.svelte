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
    width: min-content;
    border: solid 1px var(--secondaryColor);
    border-radius: 7px;
    padding: 5px;
    margin-bottom: 3px;
    margin-left: 3px;
    margin-right: 3px;
  }

  .sequencer-header {
    display: none;
  }

  .sequencer-grid {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .note-row {
    display: flex;
    align-items: center;
    gap: 0;
  }

  .note-label {
    display: none;
  }

  .steps {
    display: flex;
    gap: 0;
  }

  .step {
    transition: all 0.1s ease-in-out;
    width: 14px;
    height: 14px;
    display: flex;
    margin: 5px 3px;
    justify-content: center;
    align-items: center;
    border: solid 1px var(--secondaryColor);
    border-radius: 100%;
    cursor: pointer;
    background: transparent;
    padding: 0;
    position: relative;
  }

  .step:hover {
    opacity: 0.7;
  }

  .step.active {
    background-color: var(--seq-color);
  }

  .step.current {
    background-color: var(--secondaryColor);
  }

  .step-inner {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
