import { TextToken } from "../types";

// Helper to generate unique IDs
export const generateId = () => Math.random().toString(36).substr(2, 9);

// Helper to create a token easily
export const t = (text: string, correction?: string): TextToken => ({
  id: generateId(),
  text,
  isError: !!correction && correction !== text,
  correction: correction || text,
  userFixed: false,
  revealed: false
});

// Helper to create space
export const s = (): TextToken => ({
  id: generateId(),
  text: " ",
  isError: false,
  correction: " ",
  userFixed: false,
  revealed: false
});