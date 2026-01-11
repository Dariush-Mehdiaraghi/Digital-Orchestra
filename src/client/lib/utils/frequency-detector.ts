import * as Tone from 'tone';

export type FrequencyCallback = (frequency: number) => void;

export class FrequencyDetector {
  private mic: Tone.UserMedia | null = null;
  private fft: Tone.FFT | null = null;
  private isRunning = false;
  private animationFrame: number | null = null;
  
  // Detection parameters
  private readonly fftSize = 8192;
  private readonly peakBufferSize = 80;
  private readonly peakMinAmplitude = -60; // Minimum dB threshold (FFT returns dB values, -60 is more sensitive)
  private readonly frequencyThreshold = 1800; // Minimum frequency to detect (lowered to catch edge cases)
  
  private peakBuffer: number[] = [];
  private peakCount = 0;
  private lastDetectedFreq = 0;
  
  private onFrequencyDetected: FrequencyCallback | null = null;

  /**
   * Start microphone input and frequency detection
   */
  async start(onFrequencyDetected: FrequencyCallback): Promise<void> {
    this.onFrequencyDetected = onFrequencyDetected;
    
    try {
      // Start Tone.js audio context first
      await Tone.start();
      console.log('🎵 Tone.js audio context started');
      
      this.mic = new Tone.UserMedia();
      this.fft = new Tone.FFT(this.fftSize);
      
      this.mic.connect(this.fft);
      await this.mic.open();
      
      // Wait a bit for mic to stabilize
      await new Promise(resolve => setTimeout(resolve, 100));
      
      this.isRunning = true;
      this.detect();
      
      console.log('🎙️ Microphone started for frequency detection');
    } catch (error) {
      console.error('❌ Failed to start microphone:', error);
      throw new Error('Microphone access denied');
    }
  }

  /**
   * Stop frequency detection
   */
  stop(): void {
    this.isRunning = false;
    
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    
    if (this.mic) {
      this.mic.close();
      this.mic.dispose();
      this.mic = null;
    }
    
    if (this.fft) {
      this.fft.dispose();
      this.fft = null;
    }
    
    this.peakBuffer = [];
    this.peakCount = 0;
    this.lastDetectedFreq = 0;
    
    console.log('🔇 Frequency detector stopped');
  }

  /**
   * Main detection loop
   */
  private detect(): void {
    if (!this.isRunning || !this.fft) {
      return;
    }

    const spectrum = this.fft.getValue();
    
    // Find peak frequency
    const indexOfMaxValue = this.findPeakIndex(spectrum);
    const sampleRate = Tone.context.sampleRate;
    const exactFreq = (indexOfMaxValue * (sampleRate / 2)) / spectrum.length;
    const peakFreq = this.roundToPrecision(exactFreq, 100);

    // Get amplitude at peak (FFT returns dB values, which are negative)
    const amplitudeDB = spectrum[indexOfMaxValue] as number;

    // Add to buffer
    if (peakFreq > 0) {
      this.peakBuffer[this.peakCount % this.peakBufferSize] = peakFreq;
      this.peakCount++;
    }

    // Check if we have a stable frequency detection
    if (this.peakBuffer.length >= this.peakBufferSize) {
      const bufferSum = this.peakBuffer.reduce((sum, freq) => sum + freq, 0);
      const avgFreq = bufferSum / this.peakBuffer.length;

      // Frequency is detected if:
      // 1. Buffer average equals current peak (stable detection)
      // 2. Peak frequency is above threshold
      // 3. Amplitude is strong enough (dB value is above threshold, meaning louder)
      // 4. It's a new frequency (not already detected)
      const isStable = Math.abs(avgFreq - peakFreq) < 50;
      const isLoudEnough = amplitudeDB > this.peakMinAmplitude;
      const isInRange = peakFreq >= this.frequencyThreshold;
      const isNew = this.lastDetectedFreq !== peakFreq;
      
      if (isStable && peakFreq > 0 && isLoudEnough && isInRange && isNew) {
        this.lastDetectedFreq = peakFreq;
        
        if (this.onFrequencyDetected) {
          this.onFrequencyDetected(peakFreq);
          console.log(`〰️ Detected frequency: ${peakFreq}Hz`);
        }
      }
    }

    // Schedule next detection
    this.animationFrame = requestAnimationFrame(() => this.detect());
  }

  /**
   * Find the index of the maximum value in the spectrum
   * Only search in the relevant frequency range (1800Hz - 12000Hz for beeps)
   */
  private findPeakIndex(spectrum: Float32Array): number {
    const sampleRate = Tone.context.sampleRate;
    const minFreq = 1800;
    const maxFreq = 12000;
    
    // Convert frequencies to bin indices
    const minBin = Math.floor((minFreq / (sampleRate / 2)) * spectrum.length);
    const maxBin = Math.ceil((maxFreq / (sampleRate / 2)) * spectrum.length);
    
    let maxIndex = minBin;
    let maxValue = spectrum[minBin];

    // Only search in the relevant range
    for (let i = minBin; i < maxBin && i < spectrum.length; i++) {
      if (spectrum[i] > maxValue) {
        maxValue = spectrum[i];
        maxIndex = i;
      }
    }

    return maxIndex;
  }

  /**
   * Round a number to a specific precision
   */
  private roundToPrecision(value: number, precision: number): number {
    const rounded = value + precision / 2;
    return rounded - (rounded % precision);
  }

  /**
   * Get current spectrum data (for visualization)
   */
  getSpectrum(): Float32Array | null {
    return this.fft ? this.fft.getValue() : null;
  }

  /**
   * Check if detector is running
   */
  isActive(): boolean {
    return this.isRunning;
  }
}
