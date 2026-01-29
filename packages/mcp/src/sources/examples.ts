import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFile, readdir } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function loadBundledExamples(): Promise<Map<string, string>> {
  const examples = new Map<string, string>();
  
  // Examples are bundled at build time in assets/examples/
  // After tsc, this file is at dist/sources/examples.js
  // Assets are at dist/assets/examples/
  const examplesDir = join(__dirname, '../../assets/examples');
  
  try {
    const files = await readdir(examplesDir);
    
    for (const file of files) {
      if (file.endsWith('.html')) {
        const tag = file.replace('.html', '');
        const filePath = join(examplesDir, file);
        const html = await readFile(filePath, 'utf-8');
        examples.set(tag, html);
      }
    }
  } catch (error) {
    // Directory doesn't exist or can't be read - return empty map
  }
  
  return examples;
}
