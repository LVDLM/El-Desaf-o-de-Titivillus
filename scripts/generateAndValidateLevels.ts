import fs from 'fs';
import path from 'path';

// Helper to generate TS tokens code from simplified definition
export interface ErrorDef {
  target: string; // word or punct in text to replace or insert before
  errorText: string;
  corr: string;
  kind: string;
  isPunct?: boolean;
  isSpace?: boolean;
}

console.log("Ready to generate levels");
