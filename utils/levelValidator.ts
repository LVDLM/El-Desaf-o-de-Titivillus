import { LevelData } from "../types";

export interface ValidationIssue {
  levelTitle: string;
  issue: string;
  type: 'error-count-mismatch' | 'word-multiple-errors' | 'density-out-of-range' | 'consecutive-error-kinds' | 'identical-correction';
}

/**
 * Validador de niveles (solo activo en entorno de desarrollo).
 * Comprueba:
 * 1. totalErrors coincide con el número real de tokens con isError: true.
 * 2. Ninguna palabra contiene dos errores contiguos.
 * 3. Densidad ajustada: 1 error cada 15-25 palabras (perfiles 1-2) o 1 cada 25-40 palabras (perfiles 3-4).
 * 4. No hay más de 2 errores consecutivos con el mismo errorKind.
 * 5. La corrección es estrictamente distinta del texto erróneo.
 */
export const validateLevel = (level: LevelData): ValidationIssue[] => {
  const issues: ValidationIssue[] = [];
  const title = level.bookTitle ? `${level.bookTitle} (${level.description})` : level.description;

  // 1. totalErrors coincide con tokens con isError
  const actualErrorTokens = level.tokens.filter(t => t.isError);
  if (level.totalErrors !== actualErrorTokens.length) {
    issues.push({
      levelTitle: title,
      type: 'error-count-mismatch',
      issue: `totalErrors indicado (${level.totalErrors}) no coincide con los tokens con isError: true (${actualErrorTokens.length})`
    });
  }

  // 2. Ninguna palabra contiene dos errores contiguos sin espacio
  for (let i = 0; i < level.tokens.length - 1; i++) {
    const cur = level.tokens[i];
    const next = level.tokens[i + 1];
    if (cur.isError && next.isError && cur.kind !== 'space' && next.kind !== 'space') {
      issues.push({
        levelTitle: title,
        type: 'word-multiple-errors',
        issue: `Tokens contiguos sin espacio con error: "${cur.text}" y "${next.text}" (posible doble error en una misma palabra)`
      });
    }
  }

  // 3. Densidad dentro de rango objetivo
  // 1 error cada 15-25 palabras en perfiles 1-2; 1 cada 25-40 en perfiles 3-4.
  const wordCount = level.originalText.trim().split(/\s+/).filter(Boolean).length;
  if (actualErrorTokens.length > 0) {
    const wordsPerError = wordCount / actualErrorTokens.length;
    const isProfile1Or2 = (level.profile === 'perfil_1' || level.profile === 'perfil_2' || level.difficultyLevel <= 2);
    const minWords = isProfile1Or2 ? 15 : 25;
    const maxWords = isProfile1Or2 ? 25 : 40;

    if (wordsPerError < minWords || wordsPerError > maxWords) {
      issues.push({
        levelTitle: title,
        type: 'density-out-of-range',
        issue: `Densidad fuera de rango: 1 error cada ${wordsPerError.toFixed(1)} palabras (${wordCount} palabras / ${actualErrorTokens.length} errores). Objetivo: ${minWords}-${maxWords}.`
      });
    }
  }

  // 4. No más de 2 errores consecutivos del mismo errorKind
  let consecutiveCount = 1;
  for (let i = 1; i < actualErrorTokens.length; i++) {
    const prevKind = actualErrorTokens[i - 1].errorKind;
    const curKind = actualErrorTokens[i].errorKind;
    if (prevKind && curKind && prevKind === curKind) {
      consecutiveCount++;
      if (consecutiveCount > 2) {
        issues.push({
          levelTitle: title,
          type: 'consecutive-error-kinds',
          issue: `Más de 2 errores consecutivos con el mismo errorKind: "${curKind}" repetido ${consecutiveCount} veces seguidas`
        });
      }
    } else {
      consecutiveCount = 1;
    }
  }

  // 5. correction distinta del texto erróneo
  actualErrorTokens.forEach((t, idx) => {
    const isIdentical = t.kind === 'space'
      ? t.text === t.correction
      : t.text.trim() === t.correction.trim();

    if (isIdentical) {
      issues.push({
        levelTitle: title,
        type: 'identical-correction',
        issue: `Token ${idx} con isError: true tiene texto idéntico a su corrección: "${t.text}"`
      });
    }
  });

  return issues;
};

export const runLevelsValidation = (allLevels: LevelData[]): void => {
  // Solo se ejecuta en entorno de desarrollo (import.meta.env.DEV)
  if (typeof window === 'undefined' || !import.meta.env.DEV) return;

  const allIssues: ValidationIssue[] = [];
  allLevels.forEach(level => {
    const issues = validateLevel(level);
    allIssues.push(...issues);
  });

  if (allIssues.length > 0) {
    console.group(`[Validador de Manuscritos Titivillus] Se detectaron ${allIssues.length} avisos en los niveles:`);
    allIssues.forEach(item => {
      console.warn(`[${item.type}] ${item.levelTitle}: ${item.issue}`);
    });
    console.groupEnd();
  } else {
    console.info(`[Validador de Manuscritos Titivillus] Todos los niveles validados correctamente. Cero inconsistencias.`);
  }
};
