export enum GameState {
  MENU = 'MENU',
  LOADING = 'LOADING',
  PLAYING = 'PLAYING',
  REVIEW = 'REVIEW', // Screen to review correct forms in context
  LEVEL_COMPLETE = 'LEVEL_COMPLETE',
  GAME_OVER = 'GAME_OVER',
  VICTORY = 'VICTORY',
  ERROR = 'ERROR'
}

export type TokenKind = 'word' | 'punct' | 'space';

export type ErrorKind = 
  | 'letter'          // letra cambiada, añadida u omitida
  | 'accent'          // tilde ausente, sobrante o mal colocada
  | 'homophone'       // b/v, h, g/j, ll/y, c/s/z, x/s...
  | 'punct-missing'   // signo de puntuación ausente
  | 'punct-extra'     // signo de puntuación sobrante
  | 'punct-wrong'     // signo de puntuación incorrecto
  | 'space-extra'     // doble espacio o espacio antes de signo
  | 'space-missing'   // dos palabras unidas
  | 'word-split'      // palabra partida indebidamente
  | 'word-missing'    // palabra omitida (clic en el hueco)
  | 'word-extra';     // palabra sobrante (clic en la palabra)

export interface TextToken {
  id: string;
  text: string;
  isError: boolean;
  correction: string;
  userFixed: boolean; // State to track if user clicked it
  revealed: boolean;  // State if user failed to find it
  kind?: TokenKind;   // 'word' | 'punct' | 'space' (defaults to 'word')
  errorKind?: ErrorKind;
  isDistractor?: boolean; // Palabras raras pero correctas (clicar cuenta como falsa alarma)
}

export interface LevelData {
  originalText: string; // The correct text to display on the left
  tokens: TextToken[];  // The corrupted text tokens for the right
  totalErrors: number;
  timeLimit: number;    // in seconds
  description: string;
  difficultyLevel: number;
  bookTitle?: string;
  bookAuthor?: string;
  isTutorial?: boolean;
  profile?: string;     // Difficulty profile identifier
}

export interface PlayerStats {
  score: number;
  level: number;
  errorsCaught: number;
  mistakesMade: number;
}

export interface LeaderboardEntry {
  id?: number;
  username: string;
  score: number;
  created_at?: string;
}

export interface TitivillusNotebookEntry {
  incorrect: string;
  correct: string;
  failCount: number;
  lastFailedAt: number;
}

export interface ScribeDiscrepancy {
  incorrect: string;
  correct: string;
}
