// WebSocket Message Types
export type WSMessageType = 
  | 'register-peer'
  | 'create-room'
  | 'find-room'
  | 'leave-room'
  | 'room-created'
  | 'room-found'
  | 'room-not-found'
  | 'error';

export interface WSMessage {
  type: WSMessageType;
  payload?: any;
}

export interface RegisterPeerMessage extends WSMessage {
  type: 'register-peer';
  payload: {
    peerId: string;
  };
}

export interface CreateRoomMessage extends WSMessage {
  type: 'create-room';
  payload: {
    peerId: string;
  };
}

export interface RoomCreatedMessage extends WSMessage {
  type: 'room-created';
  payload: {
    frequency: number;
  };
}

export interface FindRoomMessage extends WSMessage {
  type: 'find-room';
  payload: {
    frequency: number;
  };
}

export interface RoomFoundMessage extends WSMessage {
  type: 'room-found';
  payload: {
    senderPeerId: string;
  };
}

export interface RoomNotFoundMessage extends WSMessage {
  type: 'room-not-found';
}

export interface ErrorMessage extends WSMessage {
  type: 'error';
  payload: {
    message: string;
  };
}

// Room Management Types
export interface Room {
  frequency: number;
  senderPeerId: string;
  createdAt: number;
}

export interface Client {
  peerId: string;
  socketId: string;
  connectedAt: number;
}

// WebRTC Data Channel Message Types
export type RTCMessageType =
  | 'note'
  | 'start-playing'
  | 'stop-playing'
  | 'ping'
  | 'pong'
  | 'color-assignment';

export interface RTCMessage {
  type: RTCMessageType;
  payload?: any;
}

export interface NoteMessage extends RTCMessage {
  type: 'note';
  payload: {
    notes: string[];
    time: number;
  };
}

export interface StartPlayingMessage extends RTCMessage {
  type: 'start-playing';
}

export interface StopPlayingMessage extends RTCMessage {
  type: 'stop-playing';
}

export interface PingMessage extends RTCMessage {
  type: 'ping';
  payload: {
    timestamp: number;
  };
}

export interface PongMessage extends RTCMessage {
  type: 'pong';
  payload: {
    timestamp: number;
  };
}

export interface ColorAssignmentMessage extends RTCMessage {
  type: 'color-assignment';
  payload: {
    color: string;
  };
}

// Audio Types
export interface Note {
  name: string;
  time: number;
}

export interface SequenceStep {
  active: boolean;
}

export interface Sequence {
  steps: SequenceStep[][];
  length: number;
  noteCount: number;
}

// Connection State
export enum ConnectionState {
  Disconnected = 'disconnected',
  Connecting = 'connecting',
  Connected = 'connected',
  Failed = 'failed'
}

// User Role
export enum UserRole {
  None = 'none',
  Sender = 'sender',
  Receiver = 'receiver'
}

// Constants
export const FREQUENCY_BASE = 2000;
export const FREQUENCY_INCREMENT = 100;
export const SEQUENCE_LENGTH = 16;
export const NOTE_COUNT = 4;
export const NOTE_NAMES = ['F#3', 'E3', 'C#3', 'A3'];
export const COLORS = [
  '#FBA500',
  '#2671BC',
  '#F15A24',
  '#096836',
  '#A344A7',
  '#00AD99'
];
