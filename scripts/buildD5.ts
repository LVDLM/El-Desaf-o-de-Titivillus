import fs from 'fs';
import path from 'path';

interface LevelSpec {
  meta: string[];
  description: string;
  bookTitle: string;
  bookAuthor: string;
  originalText: string;
  // Tokens representation
  tokensCode: string;
  totalErrors: number;
}

// We will construct the file content and validate
console.log("Helper loaded");
