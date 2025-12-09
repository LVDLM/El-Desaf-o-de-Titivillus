import { LevelData } from "../types";
import { LEVEL_1_POOL } from "../data/levels/difficulty1";
import { LEVEL_2_POOL } from "../data/levels/difficulty2";
import { LEVEL_3_POOL } from "../data/levels/difficulty3";
import { LEVEL_4_POOL } from "../data/levels/difficulty4";
import { LEVEL_5_POOL } from "../data/levels/difficulty5";
import { TUTORIAL_LEVEL } from "../data/levels/tutorial";

// Map difficulty levels to their respective data pools
const DIFFICULTY_POOLS: { [key: number]: LevelData[] } = {
  1: LEVEL_1_POOL,
  2: LEVEL_2_POOL,
  3: LEVEL_3_POOL,
  4: LEVEL_4_POOL,
  5: LEVEL_5_POOL
};

export const getStaticLevel = async (levelNumber: number): Promise<LevelData> => {
  // Simulate network delay strictly for effect (300ms)
  await new Promise(resolve => setTimeout(resolve, 300));

  // Special case for Tutorial
  if (levelNumber === 0) {
    // Return a fresh copy of the tutorial
    const level = JSON.parse(JSON.stringify(TUTORIAL_LEVEL));
    // NOTE: We do NOT recalculate totalErrors for tutorial because we want it to be 4 
    // (3 real errors + 1 lesson about penalties), even though there are only 3 error tokens.
    return level;
  }
  
  // Determine difficulty based on level number.
  // Level 1 -> Difficulty 1
  // Level 2 -> Difficulty 2
  // Level 3 -> Difficulty 3
  // Level 4 -> Difficulty 4
  // Level 5+ -> Difficulty 5
  const difficulty = Math.min(levelNumber, 5);

  const pool = DIFFICULTY_POOLS[difficulty] || LEVEL_5_POOL;
  
  // Select a random level from the pool
  const randomIndex = Math.floor(Math.random() * pool.length);
  const selectedTemplate = pool[randomIndex];

  // Deep copy to avoid mutating the static definition between replays
  const level = JSON.parse(JSON.stringify(selectedTemplate));
  
  // Recalculate total errors dynamically to ensure accuracy matches the tokens provided
  level.totalErrors = level.tokens.filter((t: any) => t.isError).length;

  return level;
};