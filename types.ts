export enum GameState {
  MENU = 'MENU',
  LOADING = 'LOADING',
  PLAYING = 'PLAYING',
  LEVEL_COMPLETE = 'LEVEL_COMPLETE',
  GAME_OVER = 'GAME_OVER',
  ERROR = 'ERROR'
}

export interface TextToken {
  id: string;
  text: string;
  isError: boolean;
  correction: string;
  userFixed: boolean; // State to track if user clicked it
  revealed: boolean; // State if user failed to find it
}

export interface LevelData {
  originalText: string; // The correct text to display on the left
  tokens: TextToken[]; // The corrupted text tokens for the right
  totalErrors: number;
  timeLimit: number; // in seconds
  description: string; // "Copia de un tratado de botánica, siglo XII"
  difficultyLevel: number;
  bookTitle?: string;
  bookAuthor?: string;
}

export interface PlayerStats {
  score: number;
  level: number;
  errorsCaught: number;
  mistakesMade: number; // Clicking correct words
}

export interface LeaderboardEntry {
  id?: number;
  username: string;
  score: number;
  created_at?: string;
}