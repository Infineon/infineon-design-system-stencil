import { renderStoriesToHTML, setupDOM } from '@infineon/dds-tooling';
import { mkdir, readdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Setup DOM environment for story parsing
setupDOM();

/**
 * Auto-discovers story files from the components directory
 * Returns a map of component tags to their story file paths
 */
async function discoverStoryFiles() {
  const storyFiles = new Map();
  const componentsDir = join(__dirname, '../../components/src/components');
  
  try {
    const entries = await readdir(componentsDir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const componentDir = join(componentsDir, entry.name);
        
        // Look for .stories.ts files in the component directory
        try {
          const files = await readdir(componentDir);
          const storyFile = files.find(f => f.endsWith('.stories.ts') && !f.includes('.mdx'));
          
          if (storyFile) {
            // Derive component tag from directory name
            const tag = `ifx-${entry.name}`;
            const relativePath = `../../components/src/components/${entry.name}/${storyFile}`;
            storyFiles.set(tag, relativePath);
          }
        } catch {
          // Directory not accessible, skip
        }
      }
    }
    
    // Handle special cases with nested directories
    storyFiles.set('ifx-select', '../../components/src/components/select/single-select/select.stories.ts');
    storyFiles.set('ifx-multiselect', '../../components/src/components/select/multi-select/multiselect.stories.ts');
    storyFiles.set('ifx-navbar', '../../components/src/components/navigation/navbar/navbar.stories.ts');
    storyFiles.set('ifx-sidebar', '../../components/src/components/navigation/sidebar/sidebar.stories.ts');
    storyFiles.set('ifx-table', '../../components/src/components/table-basic-version/table.stories.ts');
    storyFiles.set('ifx-table-advanced', '../../components/src/components/table-advanced-version/table.stories.ts');
    
  } catch (error) {
    console.error('Error discovering story files:', error.message);
  }
  
  return storyFiles;
}

async function main() {
  const assetsDir = join(__dirname, '..', 'assets', 'examples');
  
  // Create examples directory
  await mkdir(assetsDir, { recursive: true });
  
  // Auto-discover story files
  console.log('Discovering story files...');
  const storyFiles = await discoverStoryFiles();
  
  console.log(`Rendering ${storyFiles.size} component stories...`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const [tag, filePath] of storyFiles.entries()) {
    try {
      console.log(`Rendering ${tag}...`);
      
      // Dynamic import of story module
      const storyModule = await import(filePath);
      
      // Render selected stories to HTML
      const stories = await renderStoriesToHTML(storyModule, tag);
      
      if (stories.length > 0) {
        // Combine all stories into a single file with headers
        const combinedHTML = stories.map(({ name, html }) => 
          `<!-- Story: ${name} -->\n${html}`
        ).join('\n\n');
        
        // Write to file
        const outputPath = join(assetsDir, `${tag}.html`);
        await writeFile(outputPath, combinedHTML, 'utf-8');
        console.log(`  ✓ Written ${stories.length} ${stories.length === 1 ? 'story' : 'stories'} to ${outputPath}`);
        successCount++;
      } else {
        console.warn(`  ⚠ No stories rendered for ${tag}`);
        failCount++;
      }
    } catch (error) {
      console.error(`  ✗ Failed to render ${tag}:`, error.message);
      failCount++;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(`Story rendering complete!`);
  console.log(`  ✓ Success: ${successCount}`);
  if (failCount > 0) {
    console.log(`  ✗ Failed: ${failCount}`);
  }
}

main().catch(console.error);

