import { create } from 'zustand';
import { UserStore } from '../types/store';
import { Personality } from '../types/personality';

export const useUserStore = create<UserStore>((set) => ({
  username: '',
  selectedPersonalities: [],
  setUsername: (username: string) => set({ username }),
  addPersonality: (personality: Personality) => 
    set((state) => ({
      selectedPersonalities: [...state.selectedPersonalities, personality]
    })),
  removePersonality: (personalityId: string) =>
    set((state) => ({
      selectedPersonalities: state.selectedPersonalities.filter(p => p.id !== personalityId)
    })),
}));