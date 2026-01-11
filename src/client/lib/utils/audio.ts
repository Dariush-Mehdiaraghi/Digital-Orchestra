import * as Tone from 'tone';
import { NOTE_NAMES, COLORS } from '$shared/types';

export class AudioManager {
  private sampler: Tone.Sampler | null = null;
  private oscillator: Tone.Oscillator | null = null;
  private isPlaying = false;
  private colorIndex = 0;
  private samplerLoaded = false;

  /**
   * Initialize the audio context (must be called on user interaction)
   */
  async initialize(): Promise<void> {
    await Tone.start();
    console.log('🎵 Audio context started');
  }

  /**
   * Load sampler for a specific color index
   */
  async loadSampler(colorIndex: number): Promise<void> {
    this.colorIndex = colorIndex;
    this.samplerLoaded = false;
    
    // Dispose of old sampler if it exists
    if (this.sampler) {
      this.sampler.dispose();
    }
    
    return new Promise((resolve, reject) => {
      const urls = {
        'F#3': `1.mp3`,
        'E3': `2.mp3`,
        'C#3': `3.mp3`,
        'A3': `4.mp3`,
      };
      
      const baseUrl = `/audio/s${colorIndex}/`;
      
      // Set a timeout in case the onload never fires
      const timeout = setTimeout(() => {
        this.samplerLoaded = true;
        resolve();
      }, 5000);
      
      // Tone.Sampler(urls, onload, baseUrl)
      this.sampler = new Tone.Sampler(
        urls,
        () => {
          clearTimeout(timeout);
          this.samplerLoaded = true;
          console.log(`✅ Sampler loaded for color ${COLORS[colorIndex]}`);
          resolve();
        },
        baseUrl
      ).toDestination();
    });
  }

  /**
   * Play notes at a specific time
   */
  playNotes(notes: string[], time: number): void {
    if (!this.sampler || !this.samplerLoaded) {
      return;
    }

    try {
      this.sampler.triggerAttack(notes, time);
    } catch (error) {
      console.error('❌ Error playing notes:', error);
    }
  }

  /**
   * Start playing (starts transport)
   */
  startPlaying(): void {
    if (!this.isPlaying) {
      Tone.Transport.start();
      this.isPlaying = true;
      console.log('▶️ Transport started');
    }
  }

  /**
   * Stop playing (pauses transport)
   */
  stopPlaying(): void {
    if (this.isPlaying) {
      Tone.Transport.pause();
      this.isPlaying = false;
      console.log('⏸️ Transport paused');
    }
  }

  /**
   * Create and start beeping oscillator at frequency
   */
  async startBeeping(frequency: number): Promise<void> {
    // Ensure audio context is started
    await Tone.start();
    
    if (this.oscillator) {
      this.oscillator.stop();
      this.oscillator.dispose();
    }

    this.oscillator = new Tone.Oscillator(frequency, 'sine').toDestination();
    this.oscillator.start();
    console.log(`🐝 Beeping at ${frequency}Hz`);
  }

  /**
   * Stop beeping oscillator
   */
  stopBeeping(): void {
    if (this.oscillator) {
      this.oscillator.stop();
      this.oscillator.dispose();
      this.oscillator = null;
      console.log('🔇 Stopped beeping');
    }
  }

  /**
   * Set BPM
   */
  setBPM(bpm: number): void {
    Tone.Transport.bpm.rampTo(bpm, 0.5);
    console.log(`🎼 BPM set to ${bpm}`);
  }

  /**
   * Get current BPM
   */
  getBPM(): number {
    return Tone.Transport.bpm.value;
  }

  /**
   * Get current Tone.js time
   */
  now(): number {
    return Tone.now();
  }

  /**
   * Check if sampler is ready to play
   */
  isSamplerReady(): boolean {
    return this.samplerLoaded && this.sampler !== null;
  }

  /**
   * Clean up resources
   */
  dispose(): void {
    if (this.sampler) {
      this.sampler.dispose();
      this.sampler = null;
    }
    
    if (this.oscillator) {
      this.oscillator.stop();
      this.oscillator.dispose();
      this.oscillator = null;
    }
    
    Tone.Transport.stop();
    this.isPlaying = false;
    this.samplerLoaded = false;
    console.log('🧹 Audio manager disposed');
  }
}
