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
    min-height: 100vh;
    padding: 2rem;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
  }

  .button-container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .role-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 2.5rem 3rem;
    border: 2px solid var(--border-color);
    border-radius: 1rem;
    background: var(--bg-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 200px;
  }

  .role-button:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: var(--primary-color);
  }

  .role-button:active {
    transform: translateY(-2px);
  }

  .icon {
    font-size: 3rem;
  }

  .label {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .description {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 2rem;
    }

    .button-container {
      flex-direction: column;
      gap: 1.5rem;
    }

    .role-button {
      width: 100%;
      max-width: 300px;
    }
  }
</style>
