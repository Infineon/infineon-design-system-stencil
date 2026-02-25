import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Setup minimal jsdom globals for stories with side effects (event listeners, etc.)
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost',
  pretendToBeVisual: true,
});

global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.Element = dom.window.Element;

// Mock querySelector/querySelectorAll to return safe objects
const originalQuerySelector = dom.window.document.querySelector.bind(dom.window.document);
const originalQuerySelectorAll = dom.window.document.querySelectorAll.bind(dom.window.document);

const mockElement = {
  addEventListener: () => {},
  removeEventListener: () => {},
  querySelector: () => mockElement,
  querySelectorAll: () => [],
};

dom.window.document.querySelector = (selector) => {
  const element = originalQuerySelector(selector);
  return element || mockElement;
};

dom.window.document.querySelectorAll = (selector) => {
  const elements = originalQuerySelectorAll(selector);
  // Return empty array that still has array methods but items have addEventListener
  return elements.length > 0 ? elements : [];
};

// Stub out setTimeout to prevent async event listener attachments during SSR
const originalSetTimeout = global.setTimeout;
global.setTimeout = (fn, delay) => {
  // Don't execute setTimeout callbacks during SSR
  return 0;
};

// Map component tags to their story modules (will be imported dynamically)
const STORY_FILES = {
  'ifx-button': '../../components/src/components/button/button.stories.ts',
  'ifx-card': '../../components/src/components/card/card.stories.ts',
  'ifx-checkbox': '../../components/src/components/checkbox/checkbox.stories.ts',
  'ifx-text-field': '../../components/src/components/text-field/text-field.stories.ts',
  'ifx-modal': '../../components/src/components/modal/modal.stories.ts',
  'ifx-tabs': '../../components/src/components/tabs/tabs.stories.ts',
  'ifx-accordion': '../../components/src/components/accordion/accordion.stories.ts',
  'ifx-alert': '../../components/src/components/alert/alert.stories.ts',
  'ifx-breadcrumb': '../../components/src/components/breadcrumb/breadcrumb.stories.ts',
  'ifx-chip': '../../components/src/components/chip/chip.stories.ts',
  'ifx-content-switcher': '../../components/src/components/content-switcher/content-switcher.stories.ts',
  'ifx-date-picker': '../../components/src/components/date-picker/date-picker.stories.ts',
  'ifx-dropdown': '../../components/src/components/dropdown/dropdown.stories.ts',
  'ifx-file-upload': '../../components/src/components/file-upload/file-upload.stories.ts',
  'ifx-footer': '../../components/src/components/footer/footer.stories.ts',
  'ifx-icon': '../../components/src/components/icon/infineonIconStencil.stories.ts',
  'ifx-icon-button': '../../components/src/components/icon-button/icon-button.stories.ts',
  'ifx-link': '../../components/src/components/link/link.stories.ts',
  'ifx-indicator': '../../components/src/components/indicator/indicator.stories.ts',
  'ifx-pagination': '../../components/src/components/pagination/pagination.stories.ts',
  'ifx-progress-bar': '../../components/src/components/progress-bar/progress-bar.stories.ts',
  'ifx-radio-button-group': '../../components/src/components/radio-button-group/radio-button-group.stories.ts',
  'ifx-search-bar': '../../components/src/components/search-bar/search-bar.stories.ts',
  'ifx-search-field': '../../components/src/components/search-field/search-field.stories.ts',
  'ifx-segmented-control': '../../components/src/components/segmented-control/segmented-control.stories.ts',
  'ifx-select': '../../components/src/components/select/single-select/select.stories.ts',
  'ifx-multiselect': '../../components/src/components/select/multi-select/multiselect.stories.ts',
  'ifx-spinner': '../../components/src/components/spinner/spinner.stories.ts',
  'ifx-status': '../../components/src/components/status/status.stories.ts',
  'ifx-stepper': '../../components/src/components/stepper/stepper.stories.ts',
  'ifx-switch': '../../components/src/components/switch/switch.stories.ts',
  'ifx-table': '../../components/src/components/table-basic-version/table.stories.ts',
  'ifx-textarea': '../../components/src/components/textarea/textarea.stories.ts',
  'ifx-toast': '../../components/src/components/toast/toast.stories.ts',
  'ifx-tree-view': '../../components/src/components/tree-view/tree-view.stories.ts',
  'ifx-action-list': '../../components/src/components/action-list/action-list.stories.ts',
};

// Clean up Lit SSR hydration markers
function cleanLitSSRMarkers(html) {
  return html
    // Remove lit-part and lit-node comments
    .replace(/<!--lit-part[^>]*?-->|<!--lit-node[^>]*?-->|<!--\/lit-part-->/g, '')
    // Clean up multiple spaces
    .replace(/\s+/g, ' ')
    // Clean up space before closing tags
    .replace(/\s+>/g, '>')
    // Clean up space after opening tags
    .replace(/>\s+</g, '><')
    // Restore newlines for readability (optional, remove this line if you want completely compact HTML)
    .replace(/></g, '>\n<')
    .trim();
}

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
        
        // Call the story function with args - it returns either string, DOM element, or Lit TemplateResult
        const result = typeof storyFn === 'function' ? storyFn(args) : storyFn;
        
        let html;
        if (typeof result === 'string') {
          // String template - use directly
          html = result;
        } else if (result && typeof result === 'object' && result._$litType$) {
          // Lit TemplateResult - use SSR to render to string
          const ssrResult = render(result);
          html = collectResultSync(ssrResult);
          // Clean up Lit SSR hydration markers
          html = cleanLitSSRMarkers(html);
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

