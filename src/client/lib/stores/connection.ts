import { writable } from 'svelte/store';
import type { PeerConnection } from '../utils/webrtc';
import { ConnectionState } from '$shared/types';

export interface ConnectionStore {
  connections: PeerConnection[];
  myPeerId: string | null;
}

function createConnectionStore() {
  const { subscribe, set, update } = writable<ConnectionStore>({
    connections: [],
    myPeerId: null
  });

  return {
    subscribe,
    
    setMyPeerId: (peerId: string) => {
      update(store => ({ ...store, myPeerId: peerId }));
    },
    
    addConnection: (connection: PeerConnection) => {
      update(store => {
        const exists = store.connections.find(c => c.peerId === connection.peerId);
        if (exists) {
          return store;
        }
        return {
          ...store,
          connections: [...store.connections, connection]
        };
      });
    },
    
    updateConnectionState: (peerId: string, state: ConnectionState) => {
      update(store => ({
        ...store,
        connections: store.connections.map(conn =>
          conn.peerId === peerId ? { ...conn, state } : conn
        )
      }));
    },
    
    removeConnection: (peerId: string) => {
      update(store => ({
        ...store,
        connections: store.connections.filter(conn => conn.peerId !== peerId)
      }));
    },
    
    clearConnections: () => {
      update(store => ({
        ...store,
        connections: []
      }));
    },
    
    reset: () => {
      set({
        connections: [],
        myPeerId: null
      });
    }
  };
}

export const connectionStore = createConnectionStore();
