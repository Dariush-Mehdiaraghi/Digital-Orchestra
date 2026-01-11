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
  private readonly peakMinAmplitude = 0.5;
  private readonly frequencyThreshold = 1900; // Minimum frequency to detect
  
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
      this.mic = new Tone.UserMedia();
      this.fft = new Tone.FFT(this.fftSize);
      
      this.mic.connect(this.fft);
      await this.mic.open();
      
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
    const sampleRate = 44100; // Standard sample rate
    const peakFreq = this.roundToPrecision(
      (indexOfMaxValue * (sampleRate / 2)) / spectrum.length,
      100
    );

    // Get amplitude at peak
    const amplitude = Math.abs(spectrum[indexOfMaxValue] as number);

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
      // 3. Amplitude is strong enough
      // 4. It's a new frequency (not already detected)
      if (
        Math.abs(avgFreq - peakFreq) < 10 && // Stable within 10Hz
        peakFreq > this.frequencyThreshold &&
        amplitude > this.peakMinAmplitude &&
        this.lastDetectedFreq !== peakFreq
      ) {
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
   */
  private findPeakIndex(spectrum: Float32Array): number {
    let maxIndex = 0;
    let maxValue = spectrum[0];

    for (let i = 1; i < spectrum.length; i++) {
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
