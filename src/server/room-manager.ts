import type { Room } from '../shared/types';
import { FREQUENCY_BASE, FREQUENCY_INCREMENT } from '../shared/types';

export class RoomManager {
  private rooms: Map<number, Room> = new Map();
  private peerToRoom: Map<string, number> = new Map();
  private maxRooms = 100; // Support up to 100 concurrent rooms

  /**
   * Create a new room for a sender
   */
  createRoom(senderPeerId: string): number | null {
    // Check if sender already has a room
    if (this.peerToRoom.has(senderPeerId)) {
      const existingFreq = this.peerToRoom.get(senderPeerId)!;
      console.log(`🔄 Sender ${senderPeerId} already has room at ${existingFreq}Hz`);
      return existingFreq;
    }

    // Find an available frequency
    for (let i = 0; i < this.maxRooms; i++) {
      const frequency = FREQUENCY_BASE + (FREQUENCY_INCREMENT * i);
      
      if (!this.rooms.has(frequency)) {
        const room: Room = {
          frequency,
          senderPeerId,
          createdAt: Date.now()
        };
        
        this.rooms.set(frequency, room);
        this.peerToRoom.set(senderPeerId, frequency);
        
        console.log(`👨‍👩‍👧‍👦 Room created with ${senderPeerId} as sender at ${frequency}Hz`);
        return frequency;
      }
    }

    console.error('❌ No available frequencies for new room');
    return null;
  }

  /**
   * Find a room by frequency
   */
  findRoom(frequency: number): string | null {
    const room = this.rooms.get(frequency);
    if (room) {
      console.log(`🚪 Room found at ${frequency}Hz with sender ${room.senderPeerId}`);
      return room.senderPeerId;
    }
    console.log(`❌ No room found at ${frequency}Hz`);
    return null;
  }

  /**
   * Delete a room
   */
  deleteRoom(peerId: string): boolean {
    const frequency = this.peerToRoom.get(peerId);
    
    if (frequency !== undefined) {
      this.rooms.delete(frequency);
      this.peerToRoom.delete(peerId);
      console.log(`😵 Deleted room from sender: ${peerId} at ${frequency}Hz`);
      return true;
    }
    
    return false;
  }

  /**
   * Get all active rooms
   */
  getActiveRooms(): Room[] {
    return Array.from(this.rooms.values());
  }

  /**
   * Get room count
   */
  getRoomCount(): number {
    return this.rooms.size;
  }

  /**
   * Check if a peer has a room
   */
  hasSender(peerId: string): boolean {
    return this.peerToRoom.has(peerId);
  }
}
