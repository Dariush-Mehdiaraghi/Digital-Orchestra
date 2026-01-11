/**
 * Time synchronization utility to sync client time with server
 * Uses multiple samples to calculate accurate offset
 */
export class TimeSync {
  private offset = 0;
  private samples: number[] = [];
  private readonly sampleCount = 10;
  private readonly resyncInterval = 30000; // Re-sync every 30 seconds
  private resyncTimer: number | null = null;
  private serverUrl: string;

  constructor(serverUrl: string = '') {
    this.serverUrl = serverUrl || window.location.origin;
  }

  /**
   * Start time synchronization
   */
  async start(): Promise<void> {
    await this.sync();
    
    // Set up periodic re-sync
    this.resyncTimer = window.setInterval(() => {
      this.sync();
    }, this.resyncInterval);
    
    console.log('⏱️ Time sync started');
  }

  /**
   * Stop time synchronization
   */
  stop(): void {
    if (this.resyncTimer) {
      clearInterval(this.resyncTimer);
      this.resyncTimer = null;
    }
    console.log('⏱️ Time sync stopped');
  }

  /**
   * Perform synchronization with server
   */
  private async sync(): Promise<void> {
    const newSamples: number[] = [];

    // Take multiple samples
    for (let i = 0; i < this.sampleCount; i++) {
      try {
        const sample = await this.takeSample();
        newSamples.push(sample);
      } catch (error) {
        console.warn('Failed to take time sample:', error);
      }

      // Small delay between samples
      await this.delay(50);
    }

    if (newSamples.length > 0) {
      // Use median to filter out outliers
      this.samples = newSamples;
      this.offset = this.calculateMedian(newSamples);
      console.log(`⏱️ Time offset updated: ${this.offset.toFixed(2)}ms`);
    }
  }

  /**
   * Take a single time sample
   */
  private async takeSample(): Promise<number> {
    const t0 = performance.now();
    
    const response = await fetch(`${this.serverUrl}/api/time`);
    const data = await response.json();
    
    const t1 = performance.now();
    const rtt = t1 - t0; // Round-trip time
    
    const serverTime = data.serverTime;
    const clientTime = Date.now();
    
    // Adjust for network delay (assume symmetric)
    const adjustedServerTime = serverTime + (rtt / 2);
    const offset = adjustedServerTime - clientTime;
    
    return offset;
  }

  /**
   * Calculate median of an array
   */
  private calculateMedian(values: number[]): number {
    const sorted = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
  }

  /**
   * Get synchronized time in milliseconds
   */
  now(): number {
    return Date.now() + this.offset;
  }

  /**
   * Get current offset
   */
  getOffset(): number {
    return this.offset;
  }

  /**
   * Utility delay function
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Singleton instance
let timeSyncInstance: TimeSync | null = null;

/**
 * Get or create the time sync singleton
 */
export function getTimeSync(): TimeSync {
  if (!timeSyncInstance) {
    timeSyncInstance = new TimeSync();
  }
  return timeSyncInstance;
}
