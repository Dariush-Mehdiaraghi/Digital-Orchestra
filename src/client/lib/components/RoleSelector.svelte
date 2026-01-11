<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { UserRole } from '$shared/types';

  const dispatch = createEventDispatcher<{
    selectRole: UserRole;
  }>();

  function selectSender() {
    dispatch('selectRole', UserRole.Sender);
  }

  function selectReceiver() {
    dispatch('selectRole', UserRole.Receiver);
  }
</script>

<div class="role-selector">
  <h1>Digital Orchestra</h1>
  <p class="subtitle">Choose your role</p>
  
  <div class="button-container">
    <button class="role-button sender" on:click={selectSender}>
      <span class="icon">📢</span>
      <span class="label">Sender</span>
      <span class="description">Control and send notes</span>
    </button>
    
    <button class="role-button receiver" on:click={selectReceiver}>
      <span class="icon">🙇</span>
      <span class="label">Receiver</span>
      <span class="description">Receive and play notes</span>
    </button>
  </div>
</div>

<style>
  .role-selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 99vh;
  }

  h1 {
    font-size: 1em;
    margin-bottom: 0;
  }

  .subtitle {
    display: none;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: center;
  }

  .role-button {
    background: none;
    border: none;
    color: var(--secondaryColor);
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 0;
    transition: opacity 0.2s ease;
  }

  .role-button:hover {
    opacity: 0.6;
  }

  .icon {
    display: none;
  }

  .label {
    font-size: 1em;
    font-weight: normal;
  }

  .description {
    display: none;
  }
</style>
