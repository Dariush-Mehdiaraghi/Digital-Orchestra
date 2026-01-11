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
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
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
    if (!ctx || !canvas) {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Clear canvas with fallback color
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim() || '#0a0a0a';
    ctx.fillRect(0, 0, width, height);

    if (spectrum && spectrum.length > 0) {
      // Draw full spectrum from 20Hz to 20kHz
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim() || '#FBA500';
      ctx.lineWidth = 1.5;
      ctx.beginPath();

      // Scale entire spectrum to fit canvas height
      const yScale = height / spectrum.length;
      
      for (let i = 0; i < spectrum.length; i++) {
        const db = spectrum[i];
        
        // Convert dB (-100 to 0) to positive amplitude (0 to 255)
        let amplitude = Math.abs(db);
        
        // Clamp to 0-255 range
        amplitude = Math.min(255, Math.max(0, amplitude));
        
        // Maps low amplitude (0) to right (width), high amplitude (255) to left (0)
        const x = ((255 - amplitude) / 255) * width;
        
        // Scale Y to fit full canvas height
        const y = i * yScale;
        
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
        const yScale = height / spectrum.length;
        
        if (freqIndex < spectrum.length) {
          const db = spectrum[freqIndex];
          let amplitude = Math.abs(db);
          amplitude = Math.min(255, Math.max(0, amplitude));
          const x = ((255 - amplitude) / 255) * width;
          const y = freqIndex * yScale;

          // Draw circle at detected frequency
          ctx.fillStyle = 'rgba(76, 255, 76, 0.8)';
          ctx.beginPath();
          ctx.arc(x, y, 10, 0, Math.PI * 2);
          ctx.fill();

          // Draw frequency label
          ctx.fillStyle = 'rgba(76, 255, 76, 1)';
          ctx.font = 'bold 16px monospace';
          ctx.textAlign = 'left';
          ctx.fillText(`Freq: ${detectedFrequency}Hz`, width / 2, y);
          
          // Draw amplitude
          ctx.font = '12px monospace';
          ctx.fillText(`Amp: ${db.toFixed(1)}dB`, width / 2, y + 20);
        }
      }

      // Draw frequency scale (vertical, on right side)
      // Full spectrum 0Hz to 22.05kHz (Nyquist frequency)
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#a0a0a0';
      ctx.font = '10px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('0Hz', width - 5, 15);
      ctx.fillText('5kHz', width - 5, height * 0.25);
      ctx.fillText('10kHz', width - 5, height * 0.5);
      ctx.fillText('15kHz', width - 5, height * 0.75);
      ctx.fillText('22kHz', width - 5, height - 5);
    } else {
      // Draw placeholder
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#a0a0a0';
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Listening for frequency...', width / 2, height / 2);
    }

    animationFrame = requestAnimationFrame(draw);
  }

  // Handle window resize
  function handleResize() {
    if (canvas && ctx) {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
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
    height: 100%;
  }

  canvas {
    width: 100vw;
    height: 100vh;
    display: block;
  }
</style>
