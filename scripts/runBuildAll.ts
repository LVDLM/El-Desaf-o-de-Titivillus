import fs from 'fs';
import path from 'path';
import { POOL_5_SPECS } from './dataPool5';
import { POOL_6_SPECS } from './dataPool6';
import { parseAnnotatedText, generateTypeScriptCode } from './generateAllPools';
import { validateLevel, ValidationIssue } from '../utils/levelValidator';
import { LevelData } from '../types';

function run() {
  console.log("=== COMPILING AND VALIDATING POOL 5 ===");
  const pool5Levels: LevelData[] = [];
  let pool5Issues: ValidationIssue[] = [];

  POOL_5_SPECS.forEach((spec, i) => {
    const { tokens, originalText } = parseAnnotatedText(spec.annotatedText);
    const lvl: LevelData = {
      difficultyLevel: spec.difficultyLevel,
      profile: spec.profile,
      description: spec.description,
      totalErrors: tokens.filter(t => t.isError).length,
      timeLimit: 120,
      originalText,
      bookTitle: spec.bookTitle,
      bookAuthor: spec.bookAuthor,
      tokens
    };
    pool5Levels.push(lvl);
    const issues = validateLevel(lvl);
    const words = originalText.split(/\s+/).filter(Boolean).length;
    const errors = lvl.totalErrors;
    const density = (words / errors).toFixed(1);
    console.log(`[P5 - ${i + 1}] ${lvl.bookTitle}: ${words} palabras, ${errors} errores (1 error / ${density} pal) -> ${issues.length === 0 ? 'OK' : 'FAIL: ' + JSON.stringify(issues)}`);
    pool5Issues.push(...issues);
  });

  console.log("\n=== COMPILING AND VALIDATING POOL 6 ===");
  const pool6Levels: LevelData[] = [];
  let pool6Issues: ValidationIssue[] = [];

  POOL_6_SPECS.forEach((spec, i) => {
    const { tokens, originalText } = parseAnnotatedText(spec.annotatedText);
    const lvl: LevelData = {
      difficultyLevel: spec.difficultyLevel,
      profile: spec.profile,
      description: spec.description,
      totalErrors: tokens.filter(t => t.isError).length,
      timeLimit: 120,
      originalText,
      bookTitle: spec.bookTitle,
      bookAuthor: spec.bookAuthor,
      tokens
    };
    pool6Levels.push(lvl);
    const issues = validateLevel(lvl);
    const words = originalText.split(/\s+/).filter(Boolean).length;
    const errors = lvl.totalErrors;
    const distractors = tokens.filter(t => t.isDistractor).length;
    const density = (words / errors).toFixed(1);
    console.log(`[P6 - ${i + 1}] ${lvl.bookTitle}: ${words} palabras, ${errors} errores, ${distractors} distractores (1 error / ${density} pal) -> ${issues.length === 0 ? 'OK' : 'FAIL: ' + JSON.stringify(issues)}`);
    pool6Issues.push(...issues);
  });

  console.log(`\nTOTAL POOL 5 ISSUES: ${pool5Issues.length}`);
  console.log(`TOTAL POOL 6 ISSUES: ${pool6Issues.length}`);

  if (pool5Issues.length === 0 && pool6Issues.length === 0) {
    console.log("\nAll levels passed validation! Generating TypeScript files...");
    const tsCode5 = generateTypeScriptCode('LEVEL_5_POOL', POOL_5_SPECS);
    fs.writeFileSync(path.resolve('./data/levels/difficulty5.ts'), tsCode5, 'utf-8');
    console.log("Successfully wrote ./data/levels/difficulty5.ts");

    const tsCode6 = generateTypeScriptCode('LEVEL_6_POOL', POOL_6_SPECS);
    fs.writeFileSync(path.resolve('./data/levels/difficulty6.ts'), tsCode6, 'utf-8');
    console.log("Successfully wrote ./data/levels/difficulty6.ts");
  } else {
    console.error("Fix issues before writing files.");
  }
}

run();
