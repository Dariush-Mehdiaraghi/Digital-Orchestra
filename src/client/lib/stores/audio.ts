import { writable } from 'svelte/store';

export interface AudioStore {
  isPlaying: boolean;
  bpm: number;
  colorIndex: number;
  isBeeping: boolean;
}

function createAudioStore() {
  const { subscribe, set, update } = writable<AudioStore>({
    isPlaying: false,
    bpm: 120,
    colorIndex: 0,
    isBeeping: false
  });

  return {
    subscribe,
    
    setPlaying: (playing: boolean) => {
      update(store => ({ ...store, isPlaying: playing }));
    },
    
    setBPM: (bpm: number) => {
      update(store => ({ ...store, bpm }));
    },
    
    setColorIndex: (index: number) => {
      update(store => ({ ...store, colorIndex: index }));
    },
    
    setBeeping: (beeping: boolean) => {
      update(store => ({ ...store, isBeeping: beeping }));
    },
    
    reset: () => {
      set({
        isPlaying: false,
        bpm: 120,
        colorIndex: 0,
        isBeeping: false
      });
    }
  };
}

export const audioStore = createAudioStore();
