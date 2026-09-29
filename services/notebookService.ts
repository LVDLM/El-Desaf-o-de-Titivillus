import { TitivillusNotebookEntry, TextToken, LevelData } from "../types";

const NOTEBOOK_KEY = 'titivillus_notebook';

// Helper to normalize words for token comparison (removes punctuation, lowercases)
const normalizeWord = (w: string): string => {
  return w.toLowerCase().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
};

export const getNotebook = (): TitivillusNotebookEntry[] => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return [];
    const raw = localStorage.getItem(NOTEBOOK_KEY);
    if (!raw) return [];
    const parsed: TitivillusNotebookEntry[] = JSON.parse(raw);
    
    // Deduplica por par (incorrecto, correcto) e ignora entradas con corrección vacía o de 1 letra
    const deduplicatedMap = new Map<string, TitivillusNotebookEntry>();
    parsed.forEach(entry => {
      const correctNorm = entry.correct?.trim() || '';
      const incorrectNorm = entry.incorrect?.trim() || '(omisión)';
      if (!correctNorm || correctNorm.length <= 1) return;

      const key = `${incorrectNorm.toLowerCase()}|||${correctNorm.toLowerCase()}`;
      const existing = deduplicatedMap.get(key);
      if (existing) {
        existing.failCount = Math.max(existing.failCount, entry.failCount);
        existing.lastFailedAt = Math.max(existing.lastFailedAt, entry.lastFailedAt || 0);
      } else {
        deduplicatedMap.set(key, {
          incorrect: incorrectNorm,
          correct: correctNorm,
          failCount: entry.failCount || 1,
          lastFailedAt: entry.lastFailedAt || Date.now()
        });
      }
    });

    return Array.from(deduplicatedMap.values());
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
    // Si fue un error no detectado por el jugador
    if (token.isError && !token.userFixed) {
      const correctNorm = token.correction.trim();
      const incorrectNorm = token.text.trim() || '(omisión)';

      // 6. Ignorar entradas con corrección vacía o de una sola letra
      if (!correctNorm || correctNorm.length <= 1) {
        return;
      }

      // 6. Deduplicar por par (incorrecto, correcto)
      const existingIndex = notebook.findIndex(
        entry => entry.correct.toLowerCase() === correctNorm.toLowerCase() &&
                 entry.incorrect.toLowerCase() === incorrectNorm.toLowerCase()
      );

      if (existingIndex >= 0) {
        notebook[existingIndex].failCount += 1;
        notebook[existingIndex].lastFailedAt = Date.now();
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

// Extrae el conjunto de palabras individuales de un manuscrito a partir de sus tokens de palabra
const extractLevelWordTokens = (level: LevelData): Set<string> => {
  const wordsSet = new Set<string>();
  level.tokens.forEach(t => {
    // Solo tokens de tipo palabra (o tokens con texto válido no vacío ni signo puro)
    if (t.kind === 'word' || (!t.kind && t.text.trim() && !/^[,.;:¿?¡!()«»—"'\-]+$/.test(t.text))) {
      const wTarget = normalizeWord(t.correction || t.text);
      if (wTarget.length > 1) {
        wordsSet.add(wTarget);
      }
    }
  });
  return wordsSet;
};

// Prioriza manuscritos comparando contra tokens de palabra (no subcadenas)
export const prioritizeLevelsByNotebook = (levels: LevelData[]): LevelData[] => {
  const notebook = getNotebook();
  if (notebook.length === 0) return levels;

  // Palabras falladas con longitud > 1 (normalizadas)
  const failedWords = notebook
    .filter(n => n.failCount > 0 && n.correct && n.correct.trim().length > 1)
    .map(n => normalizeWord(n.correct))
    .filter(Boolean);

  if (failedWords.length === 0) return levels;

  // Mapa de palabras por nivel para no recalcular en cada comparación
  const wordsCache = new Map<LevelData, Set<string>>();
  levels.forEach(lvl => {
    wordsCache.set(lvl, extractLevelWordTokens(lvl));
  });

  return [...levels].sort((a, b) => {
    const wordsA = wordsCache.get(a) || new Set<string>();
    const wordsB = wordsCache.get(b) || new Set<string>();

    const scoreA = failedWords.filter(fw => wordsA.has(fw)).length;
    const scoreB = failedWords.filter(fw => wordsB.has(fw)).length;
    return scoreB - scoreA; // Orden descendente por coincidencias de palabras falladas
  });
};
