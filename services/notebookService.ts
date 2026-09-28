import { TitivillusNotebookEntry, TextToken, LevelData } from "../types";

const NOTEBOOK_KEY = 'titivillus_notebook';

export const getNotebook = (): TitivillusNotebookEntry[] => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return [];
    const raw = localStorage.getItem(NOTEBOOK_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading Titivillus notebook from localStorage", e);
    return [];
  }
};

export const saveNotebook = (entries: TitivillusNotebookEntry[]): void => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    localStorage.setItem(NOTEBOOK_KEY, JSON.stringify(entries));
  } catch (e) {
    console.error("Error saving Titivillus notebook to localStorage", e);
  }
};

export const recordNotebookReview = (tokens: TextToken[]): void => {
  const notebook = getNotebook();
  let updated = false;

  tokens.forEach(token => {
    // If it was an error and the player did NOT find it
    if (token.isError && !token.userFixed) {
      const correctNorm = token.correction.trim();
      const incorrectNorm = token.text.trim() || '(omisión)';

      const existingIndex = notebook.findIndex(
        entry => entry.correct.toLowerCase() === correctNorm.toLowerCase()
      );

      if (existingIndex >= 0) {
        notebook[existingIndex].failCount += 1;
        notebook[existingIndex].lastFailedAt = Date.now();
        notebook[existingIndex].incorrect = incorrectNorm;
      } else {
        notebook.push({
          incorrect: incorrectNorm,
          correct: correctNorm,
          failCount: 1,
          lastFailedAt: Date.now()
        });
      }
      updated = true;
    }
  });

  if (updated) {
    saveNotebook(notebook);
  }
};

export const clearNotebook = (): void => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    localStorage.removeItem(NOTEBOOK_KEY);
  } catch (e) {
    console.error("Error clearing Titivillus notebook", e);
  }
};

// Prioritize candidate levels whose texts contain forms the player has previously failed
export const prioritizeLevelsByNotebook = (levels: LevelData[]): LevelData[] => {
  const notebook = getNotebook();
  if (notebook.length === 0) return levels;

  // Words that have been failed at least once
  const failedWords = notebook
    .filter(n => n.failCount > 0)
    .map(n => n.correct.toLowerCase());

  if (failedWords.length === 0) return levels;

  return [...levels].sort((a, b) => {
    const scoreA = failedWords.filter(word => a.originalText.toLowerCase().includes(word)).length;
    const scoreB = failedWords.filter(word => b.originalText.toLowerCase().includes(word)).length;
    return scoreB - scoreA; // descending
  });
};
