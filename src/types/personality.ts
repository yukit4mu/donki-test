export interface Personality {
  id: string;
  name: string;
  nameJa: string;
  color: string;
}

export interface UserState {
  username: string;
  selectedPersonalities: Personality[];
}

export const MAX_SELECTIONS = 5;