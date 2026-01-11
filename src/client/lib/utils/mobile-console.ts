/**
 * Mobile console for debugging on mobile devices
 * Captures console.log output and displays it on screen
 */

let output: HTMLElement | null = null;
let oldLog: (...args: any[]) => void;
let oldError: (...args: any[]) => void;
let oldWarn: (...args: any[]) => void;

export function initMobileConsole() {
  // Only enable on mobile or when explicitly requested
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  
  if (!isMobile && !localStorage.getItem('debugConsole')) {
    return;
  }

  // Create output element
  output = document.createElement('console');
  document.body.appendChild(output);

  // Save original methods
  oldLog = console.log;
  oldError = console.error;
  oldWarn = console.warn;

  // Override console methods
  console.log = function (...items: any[]) {
    oldLog.apply(console, items);
    appendToConsole('log', items);
  };

  console.error = function (...items: any[]) {
    oldError.apply(console, items);
    appendToConsole('error', items);
  };

  console.warn = function (...items: any[]) {
    oldWarn.apply(console, items);
    appendToConsole('warn', items);
  };
}

function appendToConsole(type: string, items: any[]) {
  if (!output) return;

  const formatted = items.map(item =>
    typeof item === 'object' ? JSON.stringify(item, null, 2) : String(item)
  ).join(' ');

  const color = type === 'error' ? '#ff5555' : type === 'warn' ? '#ffaa55' : '#00ff00';
  
  output.innerHTML += `<div style="color: ${color}">[${type}] ${formatted}</div>`;
  output.scrollTop = output.scrollHeight;

  // Limit output length
  const lines = output.children;
  if (lines.length > 100) {
    lines[0].remove();
  }
}

export function disableMobileConsole() {
  if (output) {
    output.remove();
    output = null;
  }

  if (oldLog) console.log = oldLog;
  if (oldError) console.error = oldError;
  if (oldWarn) console.warn = oldWarn;
}
