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

// Returns null if no levels are available (Game Completed)
export const getStaticLevel = async (levelNumber: number, playedTexts: string[] = []): Promise<LevelData | null> => {
  // Simulate network delay strictly for effect (300ms)
  await new Promise(resolve => setTimeout(resolve, 300));

  // Special case for Tutorial
  if (levelNumber === 0) {
    const level = JSON.parse(JSON.stringify(TUTORIAL_LEVEL));
    return level;
  }
  
  // Calculate difficulty. If levelNumber exceeds normal bounds, it stays at 5.
  const difficulty = Math.min(levelNumber, 5);
  
  // Find a valid pool
  let currentDiff = difficulty;
  let selectedTemplate: LevelData | null = null;

  // Try to find a text in the current difficulty or higher if current is exhausted
  while (currentDiff <= 5 && !selectedTemplate) {
    const pool = DIFFICULTY_POOLS[currentDiff] || LEVEL_5_POOL;
    
    // Filter out texts that have already been played in this session
    const availableLevels = pool.filter(l => !playedTexts.includes(l.originalText));

    if (availableLevels.length > 0) {
      // Pick a random one from the available unique texts
      const randomIndex = Math.floor(Math.random() * availableLevels.length);
      selectedTemplate = availableLevels[randomIndex];
    } else {
      // If this difficulty tier is exhausted, try the next one
      currentDiff++;
    }
  }

  // If we ran out of texts even in difficulty 5
  if (!selectedTemplate) {
    return null;
  }

  // Deep copy to avoid mutating the static definition between replays
  const level = JSON.parse(JSON.stringify(selectedTemplate));
  
  // Recalculate total errors dynamically to ensure accuracy matches the tokens provided
  level.totalErrors = level.tokens.filter((t: any) => t.isError).length;

  // If we bumped difficulty due to exhaustion, ensure the returned level object reflects the actual difficulty of the text
  level.difficultyLevel = currentDiff;

  return level;
};