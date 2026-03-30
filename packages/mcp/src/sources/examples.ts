import { readdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ComponentInfo } from '@infineon/dds-tooling';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function loadBundledExamples(): Promise<Map<string, ComponentInfo>> {
  const examples = new Map<string, ComponentInfo>();
  
  // Examples are bundled at build time in assets/examples/
  // After tsc, this file is at dist/sources/examples.js
  // Assets are at dist/assets/examples/
  const examplesDir = join(__dirname, '../../assets/examples');
  
  try {
    const files = await readdir(examplesDir);
    
    for (const file of files) {
      if (file.endsWith('.json')) {
        const tag = file.replace('.json', '');
        const filePath = join(examplesDir, file);
        const json = await readFile(filePath, 'utf-8');
        const componentInfo = JSON.parse(json) as ComponentInfo;
        examples.set(tag, componentInfo);
      }
    }
  } catch (_error) {
    // Directory doesn't exist or can't be read - return empty map
  }
  
  return examples;
}
