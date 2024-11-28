import { Personality } from './personality';

export interface UserStore {
  username: string;
  selectedPersonalities: Personality[];
  setUsername: (username: string) => void;
  addPersonality: (personality: Personality) => void;
  removePersonality: (personalityId: string) => void;
}