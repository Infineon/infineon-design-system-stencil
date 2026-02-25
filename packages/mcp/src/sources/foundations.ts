import { readdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export interface FoundationStory {
  title: string;
  category: string;
  content: string;
}

export async function loadFoundationStories(): Promise<Map<string, FoundationStory>> {
  const stories = new Map<string, FoundationStory>();
  
  const storiesBaseDir = join(__dirname, '../../../components/src/storybook/stories');
  
  try {
    // Load foundations
    const foundationsDir = join(storiesBaseDir, 'foundations');
    const foundationFiles = await readdir(foundationsDir);
    
    for (const file of foundationFiles) {
      if (file.endsWith('.mdx')) {
        const slug = file.replace('.mdx', '').toLowerCase();
        const content = await readFile(join(foundationsDir, file), 'utf-8');
        const title = file.replace('.mdx', '').replace(/([A-Z])/g, ' $1').trim();
        
        stories.set(`foundations/${slug}`, {
          title,
          category: 'Foundations',
          content: stripMDXImports(content),
        });
      }
    }
    
    // Load setup and installation guides
    const setupDir = join(storiesBaseDir, 'setup-and-installation');
    const setupFiles = await readdir(setupDir);
    
    for (const file of setupFiles) {
      if (file.endsWith('.mdx')) {
        const slug = file.replace('.mdx', '').toLowerCase();
        const content = await readFile(join(setupDir, file), 'utf-8');
        const title = file.replace('.mdx', '').replace(/([A-Z])/g, ' $1').trim();
        
        stories.set(`setup/${slug}`, {
          title,
          category: 'Setup & Installation',
          content: stripMDXImports(content),
        });
      }
    }
    
    // Load root-level stories
    const rootFiles = await readdir(storiesBaseDir);
    for (const file of rootFiles) {
      if (file.endsWith('.mdx')) {
        const slug = file.replace('.mdx', '').toLowerCase();
        const content = await readFile(join(storiesBaseDir, file), 'utf-8');
        const title = file.replace('.mdx', '');
        
        stories.set(slug, {
          title,
          category: 'General',
          content: stripMDXImports(content),
        });
      }
    }
  } catch (error) {
    // Directory doesn't exist or can't be read - return empty map
  }
  
  return stories;
}

function stripMDXImports(content: string): string {
  // Remove MDX import statements and Meta tags for cleaner output
  return content
    .split('\n')
    .filter(line => !line.startsWith('import '))
    .filter(line => !line.includes('<Meta '))
    .join('\n')
    .trim();
}
