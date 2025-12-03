import { LevelData } from "../types";
import { LEVEL_1_POOL } from "../data/levels/difficulty1";
import { LEVEL_2_POOL } from "../data/levels/difficulty2";
import { LEVEL_3_POOL } from "../data/levels/difficulty3";
import { LEVEL_4_POOL } from "../data/levels/difficulty4";

// Map difficulty levels to their respective data pools
const DIFFICULTY_POOLS: { [key: number]: LevelData[] } = {
  1: LEVEL_1_POOL,
  2: LEVEL_2_POOL,
  3: LEVEL_3_POOL,
  4: LEVEL_4_POOL
};

export const getStaticLevel = async (levelNumber: number): Promise<LevelData> => {
  // Simulate network delay strictly for effect (300ms)
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Determine difficulty based on level number.
  // Level 1 -> Difficulty 1
  // Level 2 -> Difficulty 2
  // Level 3 -> Difficulty 3
  // Level 4+ -> Difficulty 4 (Cap at max difficulty available)
  const difficulty = Math.min(levelNumber, 4);

  const pool = DIFFICULTY_POOLS[difficulty] || LEVEL_4_POOL;
  
  // Select a random level from the pool
  const randomIndex = Math.floor(Math.random() * pool.length);
  const selectedTemplate = pool[randomIndex];

  // Deep copy to avoid mutating the static definition between replays
  const level = JSON.parse(JSON.stringify(selectedTemplate));
  
  // Recalculate total errors dynamically to ensure accuracy matches the tokens provided
  level.totalErrors = level.tokens.filter((t: any) => t.isError).length;

  return level;
};