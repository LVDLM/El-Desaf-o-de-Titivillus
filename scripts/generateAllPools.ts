import fs from 'fs';
import { TextToken, ErrorKind, LevelData } from '../types';
import { w, p, sp, s } from '../utils/levelHelpers';
import { validateLevel } from '../utils/levelValidator';

export interface LevelSource {
  difficultyLevel: number;
  profile: 'perfil_3' | 'perfil_4';
  description: string;
  bookTitle: string;
  bookAuthor: string;
  authorComment: string;
  obraComment: string;
  edicionComment: string;
  derechosComment: string;
  annotatedText: string;
}

export function parseAnnotatedText(annotated: string): { tokens: TextToken[]; originalText: string } {
  const tokens: TextToken[] = [];
  let originalText = '';

  const regex = /\[\[(.*?)\]\]|\{\{(.*?)\}\}|([,.;:¿?¡!()«»—"'\-]+)|(\s+)|([^\s,.;:¿?¡!()«»—"'\-\[\]{}]+)/gu;

  let match: RegExpExecArray | null;
  while ((match = regex.exec(annotated)) !== null) {
    if (match[1] !== undefined) {
      // Error token [[corrupted|correction|errorKind]]
      const parts = match[1].split('|');
      const corrupted = parts[0];
      const correction = parts[1] !== undefined ? parts[1] : '';
      const errorKind = (parts[2] || '') as ErrorKind;

      if (corrupted === '__2' && errorKind === 'space-extra') {
        tokens.push(sp(true, ' ', 'space-extra', '  '));
        originalText += ' ';
      } else if (corrupted === '__p' && errorKind === 'space-extra') {
        tokens.push(sp(true, '', 'space-extra', ' '));
      } else if (errorKind === 'punct-wrong') {
        tokens.push(p(corrupted, correction, errorKind));
        originalText += correction;
      } else if (errorKind === 'punct-missing') {
        tokens.push(p('', correction, errorKind));
        originalText += correction;
      } else if (errorKind === 'word-missing') {
        tokens.push(sp(true, correction, errorKind, ' '));
        originalText += correction;
      } else if (errorKind === 'word-extra') {
        tokens.push(w(corrupted, '', errorKind));
      } else if (errorKind === 'space-missing') {
        tokens.push(w(corrupted, correction, errorKind));
        originalText += correction;
      } else {
        tokens.push(w(corrupted, correction, errorKind));
        originalText += correction;
      }
    } else if (match[2] !== undefined) {
      // Distractor {{palabra}}
      const word = match[2];
      tokens.push(w(word, undefined, undefined, true));
      originalText += word;
    } else if (match[3] !== undefined) {
      const punct = match[3];
      tokens.push(p(punct));
      originalText += punct;
    } else if (match[4] !== undefined) {
      tokens.push(s());
      originalText += ' ';
    } else if (match[5] !== undefined) {
      const word = match[5];
      tokens.push(w(word));
      originalText += word;
    }
  }

  return { tokens, originalText: originalText.trim() };
}

export function generateTypeScriptCode(poolName: string, levels: LevelSource[]): string {
  let code = `import { LevelData } from "../../types";\nimport { w, p, sp, s } from "../../utils/levelHelpers";\n\nexport const ${poolName}: LevelData[] = [\n`;

  levels.forEach((lvl, idx) => {
    const { tokens, originalText } = parseAnnotatedText(lvl.annotatedText);
    const wordCount = originalText.split(/\s+/).filter(Boolean).length;
    const errors = tokens.filter(t => t.isError).length;

    code += `  // Autor: ${lvl.authorComment}\n`;
    code += `  // Obra: ${lvl.obraComment}\n`;
    code += `  // Edición o traducción: ${lvl.edicionComment}\n`;
    code += `  // Situación de derechos: ${lvl.derechosComment}\n`;
    code += `  {\n`;
    code += `    difficultyLevel: ${lvl.difficultyLevel},\n`;
    code += `    profile: "${lvl.profile}",\n`;
    code += `    description: "${lvl.description.replace(/"/g, '\\"')}",\n`;
    code += `    totalErrors: ${errors},\n`;
    code += `    timeLimit: 120,\n`;
    code += `    originalText: ${JSON.stringify(originalText)},\n`;
    code += `    bookTitle: "${lvl.bookTitle.replace(/"/g, '\\"')}",\n`;
    code += `    bookAuthor: "${lvl.bookAuthor.replace(/"/g, '\\"')}",\n`;
    code += `    tokens: [\n`;

    tokens.forEach((t, tIdx) => {
      const isLast = tIdx === tokens.length - 1;
      const comma = isLast ? '' : ',';

      if (t.kind === 'space') {
        if (t.isError) {
          const txt = JSON.stringify(t.text);
          const cor = JSON.stringify(t.correction);
          const ek = JSON.stringify(t.errorKind);
          code += `      sp(true, ${cor}, ${ek}, ${txt})${comma}\n`;
        } else {
          code += `      s()${comma}\n`;
        }
      } else if (t.kind === 'punct') {
        const txt = JSON.stringify(t.text);
        if (t.isError) {
          const cor = JSON.stringify(t.correction);
          const ek = JSON.stringify(t.errorKind);
          code += `      p(${txt}, ${cor}, ${ek})${comma}\n`;
        } else {
          code += `      p(${txt})${comma}\n`;
        }
      } else {
        const txt = JSON.stringify(t.text);
        if (t.isError) {
          const cor = JSON.stringify(t.correction);
          const ek = JSON.stringify(t.errorKind);
          code += `      w(${txt}, ${cor}, ${ek})${comma}\n`;
        } else if (t.isDistractor) {
          code += `      w(${txt}, undefined, undefined, true)${comma}\n`;
        } else {
          code += `      w(${txt})${comma}\n`;
        }
      }
    });

    code += `    ]\n  }${idx === levels.length - 1 ? '' : ','}\n\n`;
  });

  code += `];\n`;
  return code;
}
