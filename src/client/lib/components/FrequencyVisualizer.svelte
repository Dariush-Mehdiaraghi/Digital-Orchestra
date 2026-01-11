<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let spectrum: Float32Array | null = null;
  export let detectedFrequency: number | null = null;

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null;
  let animationFrame: number;

  onMount(() => {
    ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      draw();
    }
  });

  onDestroy(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  });

  function draw() {
    if (!ctx || !canvas) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // Clear canvas
    ctx.fillStyle = 'var(--bg-primary)';
    ctx.fillRect(0, 0, width, height);

    if (spectrum && spectrum.length > 0) {
      // Draw spectrum
      ctx.strokeStyle = 'var(--primary-color)';
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let i = 0; i < spectrum.length; i++) {
        const x = (i / spectrum.length) * width;
        const amplitude = Math.abs(spectrum[i]);
        const y = height - (amplitude * height);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      // Highlight detected frequency
      if (detectedFrequency && detectedFrequency > 0) {
        const sampleRate = 44100;
        const freqIndex = Math.floor((detectedFrequency / (sampleRate / 2)) * spectrum.length);
        const x = (freqIndex / spectrum.length) * width;
        const amplitude = Math.abs(spectrum[freqIndex]);
        const y = height - (amplitude * height);

        // Draw circle at detected frequency
        ctx.fillStyle = 'rgba(76, 255, 76, 0.8)';
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Draw frequency label
        ctx.fillStyle = 'rgba(76, 255, 76, 1)';
        ctx.font = 'bold 14px monospace';
        ctx.fillText(`${detectedFrequency}Hz`, x + 12, y);
      }
    } else {
      // Draw placeholder
      ctx.fillStyle = 'var(--text-secondary)';
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Listening for frequency...', width / 2, height / 2);
    }

    animationFrame = requestAnimationFrame(draw);
  }

  // Handle window resize
  function handleResize() {
    if (canvas && ctx) {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }
</script>

<svelte:window on:resize={handleResize} />

<div class="visualizer-container">
  <canvas bind:this={canvas}></canvas>
</div>

<style>
  .visualizer-container {
    width: 100%;
    height: 300px;
    border-radius: 0.5rem;
    overflow: hidden;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
  }

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
