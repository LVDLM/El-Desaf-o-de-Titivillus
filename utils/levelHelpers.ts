import { TextToken, ErrorKind, TokenKind } from "../types";

// Helper to generate unique IDs
export const generateId = () => Math.random().toString(36).substring(2, 11);

// Helper to create a word token
export const w = (
  text: string,
  correction?: string,
  errorKind?: ErrorKind,
  isDistractor: boolean = false
): TextToken => ({
  id: generateId(),
  text,
  isError: correction !== undefined && correction !== text,
  correction: correction !== undefined ? correction : text,
  userFixed: false,
  revealed: false,
  kind: 'word',
  errorKind,
  isDistractor
});

// Helper to create a punctuation token
export const p = (
  text: string,
  correction?: string,
  errorKind?: ErrorKind
): TextToken => ({
  id: generateId(),
  text,
  isError: correction !== undefined && correction !== text,
  correction: correction !== undefined ? correction : text,
  userFixed: false,
  revealed: false,
  kind: 'punct',
  errorKind
});

// Helper to create an interactive space/gap token
export const sp = (
  isError: boolean = false,
  correction: string = " ",
  errorKind?: ErrorKind,
  text: string = " "
): TextToken => ({
  id: generateId(),
  text,
  isError,
  correction,
  userFixed: false,
  revealed: false,
  kind: 'space',
  errorKind
});

// Backward-compatible helper to create tokens
export const t = (
  text: string, 
  correction?: string, 
  errorKind?: ErrorKind
): TextToken => {
  const isPurePunct = /^[,.;:¿?¡!()«»—"'\-]+$/.test(text);
  const isPureSpace = text === " ";
  const kind: TokenKind = isPureSpace ? 'space' : isPurePunct ? 'punct' : 'word';
  
  return {
    id: generateId(),
    text,
    isError: correction !== undefined && correction !== text,
    correction: correction !== undefined ? correction : text,
    userFixed: false,
    revealed: false,
    kind,
    errorKind
  };
};

// Backward-compatible helper to create space
export const s = (): TextToken => ({
  id: generateId(),
  text: " ",
  isError: false,
  correction: " ",
  userFixed: false,
  revealed: false,
  kind: 'space'
});

// Calculate proportional timeLimit:
// Reading speed (~1.2s per word) + inspection time (~10-15s per error)
export const calculateLevelTimeLimit = (
  originalText: string,
  totalErrors: number,
  difficultyLevel: number = 1
): number => {
  const wordCount = originalText.trim().split(/\s+/).filter(Boolean).length;
  const readingSeconds = Math.round(wordCount * 1.25);
  const errorSeconds = totalErrors * (10 + Math.min(difficultyLevel, 5) * 1.5);
  // Ensure a reasonable minimum and bounds
  return Math.max(35, Math.round(readingSeconds + errorSeconds));
};

// Helper to extract ~5 words of surrounding context from the original text
export const extractContext = (
  originalText: string, 
  targetWord: string, 
  contextRadius: number = 5
): { before: string; match: string; after: string } => {
  // Normalize whitespace
  const cleanTarget = targetWord.trim();
  if (!cleanTarget) {
    return { before: '', match: originalText.slice(0, 30), after: '...' };
  }

  // Find target in text, case-insensitive if exact match fails
  let index = originalText.indexOf(cleanTarget);
  if (index === -1) {
    index = originalText.toLowerCase().indexOf(cleanTarget.toLowerCase());
  }

  if (index === -1) {
    // If still not found (e.g. punct or omitted word), return beginning of text
    return { before: '', match: cleanTarget, after: '' };
  }

  const prefix = originalText.substring(0, index);
  const match = originalText.substring(index, index + cleanTarget.length);
  const suffix = originalText.substring(index + cleanTarget.length);

  const prefixWords = prefix.trim().split(/\s+/).filter(Boolean);
  const suffixWords = suffix.trim().split(/\s+/).filter(Boolean);

  const beforeContext = prefixWords.slice(-contextRadius).join(' ');
  const afterContext = suffixWords.slice(0, contextRadius).join(' ');

  return {
    before: beforeContext ? (prefixWords.length > contextRadius ? '... ' : '') + beforeContext : '',
    match,
    after: afterContext ? afterContext + (suffixWords.length > contextRadius ? ' ...' : '') : ''
  };
};
