import { LevelData } from "../types";

export interface ValidationIssue {
  levelTitle: string;
  issue: string;
  type: 
    | 'error-count-mismatch' 
    | 'word-multiple-errors' 
    | 'density-out-of-range' 
    | 'consecutive-error-kinds' 
    | 'identical-correction'
    | 'length-out-of-range'
    | 'missing-punct-space-error'
    | 'insufficient-error-types'
    | 'insufficient-distractors'
    | 'reconstructed-text-mismatch';
}

/**
 * Validador de niveles (solo activo en entorno de desarrollo).
 * Comprueba:
 * 1. totalErrors coincide con el número real de tokens con isError: true.
 * 2. Ninguna palabra contiene dos errores contiguos.
 * 3. Densidad ajustada: 1 error cada 15-25 palabras (perfiles 1-2) o 1 cada 20-40 palabras (perfiles 3-4).
 * 4. No más de 2 errores consecutivos con el mismo errorKind.
 * 5. La corrección es estrictamente distinta del texto erróneo.
 * 6. Longitud dentro de rango según perfil:
 *    - Perfil 1: 50-80 palabras, 3-4 errores.
 *    - Perfil 2: 80-130 palabras, 4-6 errores, con al menos 1 error de puntuación o espaciado.
 *    - Perfil 3: 130-200 palabras, 6-8 errores, con al menos 3 tipos de puntuación/espaciado/palabra.
 *    - Perfil 4: 180-250 palabras, 8-10 errores, con 2-3 distractores.
 */
export const validateLevel = (level: LevelData): ValidationIssue[] => {
  // El tutorial está exento de los requisitos de longitud y densidad
  if (level.isTutorial) return [];

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

  const wordCount = level.originalText.trim().split(/\s+/).filter(Boolean).length;
  const isProfile1 = level.profile === 'perfil_1' || level.difficultyLevel <= 2;
  const isProfile2 = level.profile === 'perfil_2' || (level.difficultyLevel >= 3 && level.difficultyLevel <= 4);
  const isProfile3 = level.profile === 'perfil_3' || (level.difficultyLevel >= 5 && level.difficultyLevel <= 9);
  const isProfile4 = level.profile === 'perfil_4' || level.difficultyLevel >= 10;

  // 3. Densidad dentro de rango objetivo
  // 1 error cada 15-25 palabras en perfiles 1-2; 1 cada 25-40 en perfiles 3-4.
  if (actualErrorTokens.length > 0) {
    const wordsPerError = wordCount / actualErrorTokens.length;
    const isP1Or2 = isProfile1 || isProfile2;
    const minWords = isP1Or2 ? 15 : 20;
    const maxWords = isP1Or2 ? 25 : 40;

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

  // 6. Validaciones estructurales por perfil
  if (isProfile1) {
    if (wordCount < 50 || wordCount > 80) {
      issues.push({
        levelTitle: title,
        type: 'length-out-of-range',
        issue: `Perfil 1 requiere 50-80 palabras (actual: ${wordCount})`
      });
    }
    if (actualErrorTokens.length < 3 || actualErrorTokens.length > 4) {
      issues.push({
        levelTitle: title,
        type: 'error-count-mismatch',
        issue: `Perfil 1 requiere 3-4 errores (actual: ${actualErrorTokens.length})`
      });
    }
  } else if (isProfile2) {
    if (wordCount < 80 || wordCount > 130) {
      issues.push({
        levelTitle: title,
        type: 'length-out-of-range',
        issue: `Perfil 2 requiere 80-130 palabras (actual: ${wordCount})`
      });
    }
    if (actualErrorTokens.length < 4 || actualErrorTokens.length > 6) {
      issues.push({
        levelTitle: title,
        type: 'error-count-mismatch',
        issue: `Perfil 2 requiere 4-6 errores (actual: ${actualErrorTokens.length})`
      });
    }
    // Al menos 1 error de puntuación o espaciado
    const hasPunctOrSpace = actualErrorTokens.some(t => 
      t.kind === 'punct' || 
      t.kind === 'space' || 
      (t.errorKind && ['punct-missing', 'punct-extra', 'punct-wrong', 'space-extra', 'space-missing', 'word-split'].includes(t.errorKind))
    );
    if (!hasPunctOrSpace) {
      issues.push({
        levelTitle: title,
        type: 'missing-punct-space-error',
        issue: `Perfil 2 requiere al menos 1 error de puntuación o espaciado`
      });
    }
  } else if (isProfile3) {
    if (wordCount < 130 || wordCount > 200) {
      issues.push({
        levelTitle: title,
        type: 'length-out-of-range',
        issue: `Perfil 3 requiere 130-200 palabras (actual: ${wordCount})`
      });
    }
    if (actualErrorTokens.length < 6 || actualErrorTokens.length > 8) {
      issues.push({
        levelTitle: title,
        type: 'error-count-mismatch',
        issue: `Perfil 3 requiere 6-8 errores (actual: ${actualErrorTokens.length})`
      });
    }
    // Al menos 3 tipos entre space-extra, space-missing, punct-missing, punct-wrong, word-missing y word-extra
    const specialTypes = new Set(
      actualErrorTokens
        .map(t => t.errorKind)
        .filter(k => k && ['space-extra', 'space-missing', 'punct-missing', 'punct-wrong', 'word-missing', 'word-extra'].includes(k))
    );
    if (specialTypes.size < 3) {
      issues.push({
        levelTitle: title,
        type: 'insufficient-error-types',
        issue: `Perfil 3 requiere al menos 3 tipos especiales distintos (actuales: ${Array.from(specialTypes).join(', ') || 'ninguno'})`
      });
    }
  } else if (isProfile4) {
    if (wordCount < 180 || wordCount > 250) {
      issues.push({
        levelTitle: title,
        type: 'length-out-of-range',
        issue: `Perfil 4 requiere 180-250 palabras (actual: ${wordCount})`
      });
    }
    if (actualErrorTokens.length < 8 || actualErrorTokens.length > 10) {
      issues.push({
        levelTitle: title,
        type: 'error-count-mismatch',
        issue: `Perfil 4 requiere 8-10 errores (actual: ${actualErrorTokens.length})`
      });
    }
    const distractors = level.tokens.filter(t => t.isDistractor);
    if (distractors.length < 2 || distractors.length > 3) {
      issues.push({
        levelTitle: title,
        type: 'insufficient-distractors',
        issue: `Perfil 4 requiere 2-3 distractores (actual: ${distractors.length})`
      });
    }
  }

  // 7. La unión de correcciones de todos los tokens debe ser idéntica a originalText (con normalización de espacios)
  let reconstructed = '';
  for (const t of level.tokens) {
    if (t.isError) {
      reconstructed += t.correction !== undefined ? t.correction : t.text;
    } else {
      reconstructed += t.text;
    }
  }
  const normReconstructed = reconstructed.replace(/\s+/g, ' ').trim();
  const normOriginal = level.originalText.replace(/\s+/g, ' ').trim();

  if (normReconstructed !== normOriginal) {
    issues.push({
      levelTitle: title,
      type: 'reconstructed-text-mismatch',
      issue: `La unión de correcciones de tokens difiere de originalText.`
    });
  }

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
