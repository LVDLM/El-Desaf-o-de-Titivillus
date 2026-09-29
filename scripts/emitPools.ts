import fs from 'fs';
import path from 'path';
import { NEW_POOL_5_SPECS } from './newPool5Specs';
import { NEW_POOL_6_SPECS } from './newPool6Specs';
import { generateTypeScriptCode } from './generateAllPools';

const d5Code = generateTypeScriptCode('LEVEL_5_POOL', NEW_POOL_5_SPECS);
const d6Code = generateTypeScriptCode('LEVEL_6_POOL', NEW_POOL_6_SPECS);

fs.writeFileSync(path.join(process.cwd(), 'data/levels/difficulty5.ts'), d5Code, 'utf-8');
console.log('Successfully wrote data/levels/difficulty5.ts');

fs.writeFileSync(path.join(process.cwd(), 'data/levels/difficulty6.ts'), d6Code, 'utf-8');
console.log('Successfully wrote data/levels/difficulty6.ts');
