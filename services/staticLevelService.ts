import { LevelData } from "../types";
import { LEVEL_1_POOL } from "../data/levels/difficulty1";
import { LEVEL_2_POOL } from "../data/levels/difficulty2";
import { LEVEL_3_POOL } from "../data/levels/difficulty3";
import { LEVEL_4_POOL } from "../data/levels/difficulty4";
import { LEVEL_5_POOL } from "../data/levels/difficulty5";
import { LEVEL_6_POOL } from "../data/levels/difficulty6";
import { TUTORIAL_LEVEL } from "../data/levels/tutorial";
import { prioritizeLevelsByNotebook } from "./notebookService";
import { calculateLevelTimeLimit } from "../utils/levelHelpers";
import { runLevelsValidation } from "../utils/levelValidator";

// Única fuente canónica de niveles: difficulty1.ts a difficulty6.ts
export const ALL_LEVELS: LevelData[] = [
  ...LEVEL_1_POOL,
  ...LEVEL_2_POOL,
  ...LEVEL_3_POOL,
  ...LEVEL_4_POOL,
  ...LEVEL_5_POOL,
  ...LEVEL_6_POOL
];

// Validación de auditoría de niveles (activa únicamente en modo de desarrollo)
runLevelsValidation(ALL_LEVELS);

/**
 * Mapeo de perfiles de dificultad por nivel:
 * - Niveles 1-2: LEVEL_1_POOL y LEVEL_2_POOL (Perfil 1: visibles, 3-4 errores)
 * - Niveles 3-4: LEVEL_3_POOL y LEVEL_4_POOL (Perfil 2: homófonos y puntuación simple, 4-5 errores)
 * - Niveles 5-9: LEVEL_5_POOL (Perfil 3: espacios, omisiones y adiciones, 6 errores)
 * - Niveles 10+: LEVEL_6_POOL (Perfil 4: mezcla completa con distractores léxicos, 8-10 errores)
 */
const getPoolForLevel = (levelNumber: number): LevelData[] => {
  if (levelNumber <= 2) {
    return levelNumber === 1 ? LEVEL_1_POOL : LEVEL_2_POOL;
  } else if (levelNumber <= 4) {
    return levelNumber === 3 ? LEVEL_3_POOL : LEVEL_4_POOL;
  } else if (levelNumber <= 9) {
    return LEVEL_5_POOL;
  } else {
    return LEVEL_6_POOL;
  }
};

/**
 * Obtiene el manuscrito para el nivel actual.
 * Devuelve null si se han agotado todos los textos disponibles (lo que activa el estado de Victoria Absoluta).
 */
export const getStaticLevel = async (levelNumber: number, playedTexts: string[] = []): Promise<LevelData | null> => {
  // Simulación de pausa sutil de carga (300 ms)
  await new Promise(resolve => setTimeout(resolve, 300));

  // Caso especial: Nivel 0 (Tutorial)
  if (levelNumber === 0) {
    const level = JSON.parse(JSON.stringify(TUTORIAL_LEVEL));
    level.totalErrors = level.tokens.filter((t: any) => t.isError).length;
    return level;
  }

  let selectedTemplate: LevelData | null = null;
  let targetDifficulty = levelNumber;

  if (levelNumber < 10) {
    // Para niveles 1 a 9: buscar progresivamente desde el pool del nivel hacia arriba hasta el pool 6
    let currentPoolIndex = levelNumber;
    while (currentPoolIndex <= 10 && !selectedTemplate) {
      const pool = getPoolForLevel(currentPoolIndex);
      const availableLevels = pool.filter(l => !playedTexts.includes(l.originalText));

      if (availableLevels.length > 0) {
        const prioritized = prioritizeLevelsByNotebook(availableLevels);
        const topCount = Math.min(3, prioritized.length);
        const randomIndex = Math.floor(Math.random() * topCount);
        selectedTemplate = prioritized[randomIndex];
        targetDifficulty = currentPoolIndex;
      } else {
        currentPoolIndex++;
      }
    }
  }

  // Si levelNumber >= 10, o si se agotaron los pools hacia arriba en la búsqueda normal:
  if (!selectedTemplate) {
    // 1. Los niveles 10+ deben tomar textos de LEVEL_6_POOL
    const pool6Available = LEVEL_6_POOL.filter(l => !playedTexts.includes(l.originalText));
    if (pool6Available.length > 0) {
      const prioritized = prioritizeLevelsByNotebook(pool6Available);
      const topCount = Math.min(3, prioritized.length);
      const randomIndex = Math.floor(Math.random() * topCount);
      selectedTemplate = prioritized[randomIndex];
      targetDifficulty = Math.max(10, levelNumber);
    } else {
      // 2. Al agotarse LEVEL_6_POOL, seguir con los restantes de pools inferiores aún no jugados
      const lowerPools = [
        LEVEL_5_POOL,
        LEVEL_4_POOL,
        LEVEL_3_POOL,
        LEVEL_2_POOL,
        LEVEL_1_POOL
      ];

      for (const pool of lowerPools) {
        const available = pool.filter(l => !playedTexts.includes(l.originalText));
        if (available.length > 0) {
          const prioritized = prioritizeLevelsByNotebook(available);
          const topCount = Math.min(3, prioritized.length);
          const randomIndex = Math.floor(Math.random() * topCount);
          selectedTemplate = prioritized[randomIndex];
          targetDifficulty = Math.max(10, levelNumber);
          break;
        }
      }
    }
  }

  // Si no queda ningún texto por jugar en todo el banco: Victoria Absoluta
  if (!selectedTemplate) {
    return null;
  }

  // Copia profunda para no mutar las definiciones estáticas
  const level: LevelData = JSON.parse(JSON.stringify(selectedTemplate));
  
  // Garantiza correspondencia matemática 100% exacta del total de errores
  level.totalErrors = level.tokens.filter((t: any) => t.isError).length;

  // Cálculo proporcional de tiempo según longitud y errores
  level.timeLimit = calculateLevelTimeLimit(level.originalText, level.totalErrors, targetDifficulty);

  level.difficultyLevel = targetDifficulty;

  return level;
};
