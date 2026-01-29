import { JSDOM } from 'jsdom';
import { mkdir, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Setup jsdom for DOM globals
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost',
  pretendToBeVisual: true,
});

global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.customElements = dom.window.customElements;

// Map component tags to their story modules (will be imported dynamically)
const STORY_FILES = {
  'ifx-button': '../../components/dist/collection/components/button/button.stories.js',
  'ifx-card': '../../components/dist/collection/components/card/card.stories.js',
  'ifx-checkbox': '../../components/dist/collection/components/checkbox/checkbox.stories.js',
  'ifx-text-field': '../../components/dist/collection/components/text-field/text-field.stories.js',
  'ifx-modal': '../../components/dist/collection/components/modal/modal.stories.js',
  'ifx-tabs': '../../components/dist/collection/components/tabs/tabs.stories.js',
  'ifx-accordion': '../../components/dist/collection/components/accordion/accordion.stories.js',
  'ifx-alert': '../../components/dist/collection/components/alert/alert.stories.js',
  'ifx-badge': '../../components/dist/collection/components/badge/badge.stories.js',
  'ifx-breadcrumb': '../../components/dist/collection/components/breadcrumb/breadcrumb.stories.js',
  'ifx-chip': '../../components/dist/collection/components/chip/chip.stories.js',
  'ifx-content-switcher': '../../components/dist/collection/components/content-switcher/content-switcher.stories.js',
  'ifx-date-picker': '../../components/dist/collection/components/date-picker/date-picker.stories.js',
  'ifx-dropdown': '../../components/dist/collection/components/dropdown/dropdown.stories.js',
  'ifx-file-upload': '../../components/dist/collection/components/file-upload/file-upload.stories.js',
  'ifx-footer': '../../components/dist/collection/components/footer/footer.stories.js',
  'ifx-icon': '../../components/dist/collection/components/icon/infineonIconStencil.stories.js',
  'ifx-icon-button': '../../components/dist/collection/components/icon-button/icon-button.stories.js',
  'ifx-link': '../../components/dist/collection/components/link/link.stories.js',
  'ifx-number-indicator': '../../components/dist/collection/components/number-indicator/number-indicator.stories.js',
  'ifx-pagination': '../../components/dist/collection/components/pagination/pagination.stories.js',
  'ifx-progress-bar': '../../components/dist/collection/components/progress-bar/progress-bar.stories.js',
  'ifx-radio-button-group': '../../components/dist/collection/components/radio-button-group/radio-button-group.stories.js',
  'ifx-search-bar': '../../components/dist/collection/components/search-bar/search-bar.stories.js',
  'ifx-search-field': '../../components/dist/collection/components/search-field/search-field.stories.js',
  'ifx-segmented-control': '../../components/dist/collection/components/segmented-control/segmented-control.stories.js',
  'ifx-select': '../../components/dist/collection/components/select/select.stories.js',
  'ifx-spinner': '../../components/dist/collection/components/spinner/spinner.stories.js',
  'ifx-status': '../../components/dist/collection/components/status/status.stories.js',
  'ifx-stepper': '../../components/dist/collection/components/stepper/stepper.stories.js',
  'ifx-switch': '../../components/dist/collection/components/switch/switch.stories.js',
  'ifx-table': '../../components/dist/collection/components/table-basic-version/table.stories.js',
  'ifx-textarea': '../../components/dist/collection/components/textarea/textarea.stories.js',
  'ifx-toast': '../../components/dist/collection/components/toast/toast.stories.js',
  'ifx-tree-view': '../../components/dist/collection/components/tree-view/tree-view.stories.js',
  'ifx-action-list': '../../components/dist/collection/components/action-list/action-list.stories.js',
};

async function renderStoriesToHTML(storyModule, tag) {
  const renderedStories = [];
  
  try {
    // Get the default export (story metadata)
    const storyMeta = storyModule.default;
    
    // Get all exported stories (excluding 'default')
    const storyExports = Object.keys(storyModule).filter(key => key !== 'default');
    
    if (storyExports.length === 0) {
      console.warn(`No stories found for ${tag}`);
      return [];
    }

    // Render each story
    for (const storyName of storyExports) {
      try {
        const storyFn = storyModule[storyName];
        
        // Get default args from story metadata
        const args = storyMeta?.args || {};
        
        // Call the story function with args - it returns either string or DOM element
        const result = typeof storyFn === 'function' ? storyFn(args) : storyFn;
        
        let html;
        if (typeof result === 'string') {
          // String template - use directly
          html = result;
        } else if (result && typeof result === 'object' && result.outerHTML) {
          // DOM element - extract outerHTML
          html = result.outerHTML;
        } else {
          console.warn(`Story ${storyName} returned unexpected type for ${tag}: ${typeof result}`);
          continue;
        }
        
        renderedStories.push({ name: storyName, html });
      } catch (error) {
        console.error(`Error rendering story ${storyName} for ${tag}:`, error.message);
      }
    }
    
    return renderedStories;
  } catch (error) {
    console.error(`Error processing stories for ${tag}:`, error);
    return [];
  }
}

async function main() {
  const assetsDir = join(__dirname, '..', 'assets', 'examples');
  
  // Create examples directory
  await mkdir(assetsDir, { recursive: true });
  
  console.log(`Rendering ${Object.keys(STORY_FILES).length} component stories...`);
  
  for (const [tag, filePath] of Object.entries(STORY_FILES)) {
    try {
      console.log(`Rendering ${tag}...`);
      
      // Dynamic import of story module
      const storyModule = await import(filePath);
      
      // Render all stories to HTML
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
      }
    } catch (error) {
      console.error(`Failed to render ${tag}:`, error.message);
    }
  }
  
  console.log('Story rendering complete!');
}

main().catch(console.error);

