import type { ServerWebSocket } from 'bun';
import type { 
  WSMessage, 
  RegisterPeerMessage, 
  CreateRoomMessage, 
  FindRoomMessage 
} from '../shared/types';
import { RoomManager } from './room-manager';

interface WebSocketData {
  peerId?: string;
  connectedAt: number;
}

export class WebSocketHandler {
  private roomManager: RoomManager;
  private clients: Map<string, ServerWebSocket<WebSocketData>> = new Map();

  constructor(roomManager: RoomManager) {
    this.roomManager = roomManager;
  }

  handleOpen(ws: ServerWebSocket<WebSocketData>) {
    console.log('💞 New WebSocket connection');
  }

  handleMessage(ws: ServerWebSocket<WebSocketData>, message: string) {
    try {
      const data: WSMessage = JSON.parse(message);
      
      switch (data.type) {
        case 'register-peer':
          this.handleRegisterPeer(ws, data as RegisterPeerMessage);
          break;
          
        case 'create-room':
          this.handleCreateRoom(ws, data as CreateRoomMessage);
          break;
          
        case 'find-room':
          this.handleFindRoom(ws, data as FindRoomMessage);
          break;
          
        case 'leave-room':
          this.handleLeaveRoom(ws);
          break;
          
        default:
          console.warn('Unknown message type:', data.type);
      }
    } catch (error) {
      console.error('Error handling message:', error);
      this.sendError(ws, 'Invalid message format');
    }
  }

  handleClose(ws: ServerWebSocket<WebSocketData>) {
    const peerId = ws.data.peerId;
    
    if (peerId) {
      console.log('💔 User disconnected:', peerId);
      this.clients.delete(peerId);
      this.roomManager.deleteRoom(peerId);
    }
  }

  private handleRegisterPeer(ws: ServerWebSocket<WebSocketData>, message: RegisterPeerMessage) {
    const { peerId } = message.payload;
    ws.data.peerId = peerId;
    this.clients.set(peerId, ws);
    console.log('🆔 Peer registered:', peerId);
  }

  private handleCreateRoom(ws: ServerWebSocket<WebSocketData>, message: CreateRoomMessage) {
    const { peerId } = message.payload;
    const frequency = this.roomManager.createRoom(peerId);
    
    if (frequency !== null) {
      this.send(ws, {
        type: 'room-created',
        payload: { frequency }
      });
    } else {
      this.sendError(ws, 'Failed to create room - no available frequencies');
    }
  }

  private handleFindRoom(ws: ServerWebSocket<WebSocketData>, message: FindRoomMessage) {
    const { frequency } = message.payload;
    const senderPeerId = this.roomManager.findRoom(frequency);
    
    if (senderPeerId) {
      this.send(ws, {
        type: 'room-found',
        payload: { senderPeerId }
      });
    } else {
      this.send(ws, {
        type: 'room-not-found'
      });
    }
  }

  private handleLeaveRoom(ws: ServerWebSocket<WebSocketData>) {
    const peerId = ws.data.peerId;
    if (peerId) {
      this.roomManager.deleteRoom(peerId);
    }
  }

  private send(ws: ServerWebSocket<WebSocketData>, message: WSMessage) {
    ws.send(JSON.stringify(message));
  }

  private sendError(ws: ServerWebSocket<WebSocketData>, message: string) {
    this.send(ws, {
      type: 'error',
      payload: { message }
    });
  }

  getStats() {
    return {
      connectedClients: this.clients.size,
      activeRooms: this.roomManager.getRoomCount()
    };
  }
}
