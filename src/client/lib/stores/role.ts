import { writable } from 'svelte/store';
import { UserRole } from '$shared/types';

export interface RoleStore {
  role: UserRole;
  assignedFrequency: number | null;
  assignedColor: string | null;
}

function createRoleStore() {
  const { subscribe, set, update } = writable<RoleStore>({
    role: UserRole.None,
    assignedFrequency: null,
    assignedColor: null
  });

  return {
    subscribe,
    
    setRole: (role: UserRole) => {
      update(store => ({ ...store, role }));
    },
    
    setFrequency: (frequency: number) => {
      update(store => ({ ...store, assignedFrequency: frequency }));
    },
    
    setColor: (color: string) => {
      update(store => ({ ...store, assignedColor: color }));
    },
    
    reset: () => {
      set({
        role: UserRole.None,
        assignedFrequency: null,
        assignedColor: null
      });
    }
  };
}

export const roleStore = createRoleStore();
