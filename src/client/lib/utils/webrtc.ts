import Peer, { DataConnection } from 'peerjs';
import type { RTCMessage } from '$shared/types';
import { ConnectionState } from '$shared/types';

export type MessageHandler = (message: RTCMessage, conn: DataConnection) => void;
export type ConnectionStateHandler = (state: ConnectionState, peerId: string) => void;

export interface PeerConnection {
  connection: DataConnection;
  state: ConnectionState;
  peerId: string;
  connectedAt: number;
}

export class WebRTCManager {
  private peer: Peer | null = null;
  private connections: Map<string, PeerConnection> = new Map();
  private messageHandler: MessageHandler | null = null;
  private stateHandler: ConnectionStateHandler | null = null;
  private myPeerId: string | null = null;

  /**
   * Initialize PeerJS
   */
  async initialize(onMessage: MessageHandler, onStateChange: ConnectionStateHandler): Promise<string> {
    this.messageHandler = onMessage;
    this.stateHandler = onStateChange;

    return new Promise((resolve, reject) => {
      this.peer = new Peer({
        debug: 2,
      });

      this.peer.on('open', (id) => {
        this.myPeerId = id;
        console.log('🆔 My peer ID:', id);
        resolve(id);
      });

      this.peer.on('connection', (conn) => {
        console.log('📞 Incoming connection from:', conn.peer);
        this.setupConnection(conn);
      });

      this.peer.on('disconnected', () => {
        console.log('⚰️ Peer server disconnected, attempting reconnect...');
        this.peer?.reconnect();
      });

      this.peer.on('error', (error) => {
        console.error('⛔ Peer error:', error);
        reject(error);
      });
    });
  }

  /**
   * Connect to a peer
   */
  connectToPeer(peerId: string): void {
    if (this.connections.has(peerId)) {
      console.log('Already have connection to', peerId);
      return;
    }

    if (!this.peer) {
      console.error('Peer not initialized');
      return;
    }

    const conn = this.peer.connect(peerId, { serialization: 'json' });
    this.setupConnection(conn);
  }

  /**
   * Setup a connection with event handlers
   */
  private setupConnection(conn: DataConnection): void {
    const peerConnection: PeerConnection = {
      connection: conn,
      state: ConnectionState.Connecting,
      peerId: conn.peer,
      connectedAt: Date.now()
    };

    this.connections.set(conn.peer, peerConnection);
    this.notifyStateChange(ConnectionState.Connecting, conn.peer);

    conn.on('open', () => {
      console.log('💞 Connection open to:', conn.peer);
      peerConnection.state = ConnectionState.Connected;
      this.notifyStateChange(ConnectionState.Connected, conn.peer);
    });

    conn.on('data', (data) => {
      if (this.messageHandler && typeof data === 'object') {
        this.messageHandler(data as RTCMessage, conn);
      }
    });

    conn.on('close', () => {
      console.log('💔 Connection closed to:', conn.peer);
      this.connections.delete(conn.peer);
      this.notifyStateChange(ConnectionState.Disconnected, conn.peer);
    });

    conn.on('error', (error) => {
      console.error('⛔ Connection error:', error);
      peerConnection.state = ConnectionState.Failed;
      this.notifyStateChange(ConnectionState.Failed, conn.peer);
    });
  }

  /**
   * Send message to a specific peer
   */
  send(peerId: string, message: RTCMessage): void {
    const peerConn = this.connections.get(peerId);
    
    if (peerConn && peerConn.state === ConnectionState.Connected) {
      peerConn.connection.send(message);
    } else {
      console.warn('Cannot send to', peerId, '- not connected');
    }
  }

  /**
   * Broadcast message to all connected peers
   */
  broadcast(message: RTCMessage): void {
    this.connections.forEach((peerConn) => {
      if (peerConn.state === ConnectionState.Connected) {
        peerConn.connection.send(message);
      }
    });
  }

  /**
   * Get all connections
   */
  getConnections(): PeerConnection[] {
    return Array.from(this.connections.values());
  }

  /**
   * Get connection by peer ID
   */
  getConnection(peerId: string): PeerConnection | undefined {
    return this.connections.get(peerId);
  }

  /**
   * Get my peer ID
   */
  getMyPeerId(): string | null {
    return this.myPeerId;
  }

  /**
   * Close a specific connection
   */
  closeConnection(peerId: string): void {
    const peerConn = this.connections.get(peerId);
    
    if (peerConn) {
      peerConn.connection.close();
      this.connections.delete(peerId);
    }
  }

  /**
   * Close all connections and destroy peer
   */
  destroy(): void {
    this.connections.forEach((peerConn) => {
      peerConn.connection.close();
    });
    
    this.connections.clear();
    
    if (this.peer) {
      this.peer.destroy();
      this.peer = null;
    }
    
    this.myPeerId = null;
    console.log('🧹 WebRTC manager destroyed');
  }

  /**
   * Notify state change handler
   */
  private notifyStateChange(state: ConnectionState, peerId: string): void {
    if (this.stateHandler) {
      this.stateHandler(state, peerId);
    }
  }
}
