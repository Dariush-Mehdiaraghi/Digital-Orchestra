import './styles/global.css';
import { mount } from 'svelte';
import App from './App.svelte';
import { initMobileConsole } from './lib/utils/mobile-console';

// Initialize mobile console for debugging
initMobileConsole();

const app = mount(App, {
  target: document.getElementById('app')!,
});

export default app;
