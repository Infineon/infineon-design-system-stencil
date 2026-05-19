# @infineon/dds-tooling

Shared tooling for the Infineon Design System (DDS). This package provides:

- **Story Parsing**: Parse and extract information from Storybook stories (CSF2 & CSF3)
- **HTML Rendering**: Server-side rendering of Lit templates to HTML  
- **Code Generation**: Format components as HTML, React, Vue, or Angular code snippets
- **Framework Utilities**: String helpers, DOM manipulation, and type definitions

Used by both the MCP server and example-generator to provide consistent code output across tools.

## Features

### Story Parsing & Rendering
- DOM Setup for server-side story rendering with jsdom
- CSF2 (function exports) and CSF3 (object with render) support
- Lit SSR with `@lit-labs/ssr`
- HTML cleanup (removes Lit-specific syntax: ?, ., @)
- Component unwrapping (extracts `ifx-*` components from wrapper divs)

### Code Formatters
- **HTML/Web Components** - Vanilla HTML with event listeners
- **React** - JSX with TypeScript, hooks, and event handlers
- **Vue** - SFC (Single File Components) with `<script setup>`
- **Angular** - Standalone components with signals

### Utilities
- Event extraction from Storybook argTypes
- Structure parsing (recursive DOM to object tree)
- String formatting (PascalCase, camelCase, escape functions)

## Usage

### Story Parsing (for MCP Server)

```typescript
import { setupDOM, renderStoriesToHTML } from '@infineon/dds-tooling';

// Setup DOM once
setupDOM();

// Import and render a story module
const storyModule = await import('./button.stories.ts');
const stories = await renderStoriesToHTML(storyModule, {
  preferredStories: ['Default'], // Optional: which stories to render
  renderAll: false,              // Optional: render all stories
});

// stories = [{ name: 'Default', html: '<ifx-button>...</ifx-button>' }]
```

### Component Info Extraction (for Example Generator)

```typescript
import { extractComponentInfo } from '@infineon/dds-tooling';

// Extract structured component information
const components = await extractComponentInfo(
  './button.stories.ts',
  ['Default', 'Primary'] // Optional: specific story names
);

// components = [{
//   component: 'ifx-button',
//   title: 'Button',
//   storyName: 'Default',
//   structure: { tag: 'ifx-button', attributes: {...}, children: [...] },
//   events: [...],
//   defaultArgs: {...},
//   argTypes: {...}
// }]
```

### Code Formatting

```typescript
import {
  HTMLCodeFormatter,
  ReactCodeFormatter,
  VueCodeFormatter,
  AngularCodeFormatter,
} from '@infineon/dds-tooling';

// Use any formatter
const htmlFormatter = new HTMLCodeFormatter();
const reactFormatter = new ReactCodeFormatter();
const vueFormatter = new VueCodeFormatter();
const angularFormatter = new AngularCodeFormatter();

// Format a component
const htmlCode = htmlFormatter.formatComponent(componentInfo, { indent: '  ' });
const reactCode = reactFormatter.formatComponent(componentInfo, { indent: '  ' });
const vueCode = vueFormatter.formatComponent(componentInfo, { indent: '  ' });
const angularCode = angularFormatter.formatComponent(componentInfo, { indent: '  ' });

// Get imports
const imports = reactFormatter.formatImports(componentInfo);

// Get event handlers
const handlers = reactFormatter.formatEventHandlers(componentInfo, { indent: '  ' });
```

### Utilities

```typescript
import {
  toPascalCase,
  toCamelCase,
  toReactEventName,
  cleanLitHTML,
  unwrapComponent,
  parseElement,
  extractEvents,
} from '@infineon/dds-tooling';

// String transformations
toPascalCase('ifx-button'); // 'IfxButton'
toCamelCase('aria-label'); // 'ariaLabel'
toReactEventName('ifxChange'); // 'onIfxChange'

// HTML cleaning  
cleanLitHTML('<div ?hidden="false">...</div>'); // '<div>...</div>'

// DOM manipulation
const element = document.querySelector('div');
const unwrapped = unwrapComponent(element);

// Structure parsing
const structure = parseElement(element);

// Event extraction
const events = extractEvents(storyMetadata.argTypes);
```

## API Reference

### Core Functions

#### `setupDOM()`
Sets up jsdom environment for story parsing. Call once before parsing stories.

#### `renderStoriesToHTML(storyModule, options)`
Renders story module to HTML strings.
- **storyModule**: Imported story module
- **options.preferredStories**?: Array of story names to render
- **options.renderAll**?: Render all stories (default: false)
- **Returns**: `Promise<ParsedStory[]>` - Array of `{ name, html }`

#### `extractComponentInfo(storyPath, storyNames?)`
Extracts structured component information.
- **storyPath**: Path to story file
- **storyNames**?: Optional array of story names
- **Returns**: `Promise<ComponentInfo[]>`

### Code Formatters

All formatters implement the `ICodeFormatter` interface:

```typescript
interface ICodeFormatter {
  formatComponent(component: ComponentInfo, options: FormatOptions): string;
  formatEventHandlers(component: ComponentInfo, options: FormatOptions): string;
  formatImports(component: ComponentInfo): string;
}
```

#### `HTMLCodeFormatter`
Generates vanilla HTML/Web Component code with event listeners.

#### `ReactCodeFormatter`  
Generates React/TSX code with hooks and TypeScript types.
- Additional method: `formatComponentFile(component)` - Complete file with imports

#### `VueCodeFormatter`
Generates Vue 3 SFC with `<script setup>` and Composition API.
- Additional method: `formatComponentFile(component)` - Complete SFC

#### `AngularCodeFormatter`
Generates Angular standalone components.
- Additional methods:
  - `formatComponentTypeScript(component)` - .ts file
  - `formatComponentTemplate(component)` - .html file
  - `formatComponentStyles()` - .scss file

### Utility Functions

#### String Utilities
- `toPascalCase(str)` - Convert kebab-case to PascalCase
- `toCamelCase(str)` - Convert kebab-case to camelCase
- `toReactEventName(event)` - Convert event to React handler prop
- `toHandlerFunctionName(event)` - Generate handler function name
- `toAngularEventName(event)` - Convert to Angular event binding
- `escapeHTML(html)` - Escape HTML for display
- `formatTitle(title, component, storyName?)` - Format display title
- `escapeForTemplateLiteral(str)` - Escape for JS template literals
- `escapeForSingleQuotedAttr(str)` - Escape for single-quoted attributes

#### HTML Utilities
- `cleanLitHTML(html)` - Remove Lit SSR markers and syntax
- `unwrapComponent(element)` - Extract core component from wrapper div
- `parseElement(element)` - Parse DOM to ComponentStructure
- `extractEvents(argTypes)` - Parse event metadata from argTypes

### Types

```typescript
interface ComponentStructure {
  tag: string;
  attributes: Record<string, string>;
  textContent: string;
  children: ComponentStructure[];
}

interface ComponentEvent {
  name: string;
  description: string;
  patterns?: string;
  sourceComponent: string | null;
}

interface ComponentInfo {
  component: string;
  title?: string;
  storyName: string;
  structure: ComponentStructure;
  events: ComponentEvent[];
  defaultArgs: Record<string, unknown>;
  argTypes: Record<string, unknown>;
}

interface ParsedStory {
  name: string;
  html: string;
}

interface FormatOptions {
  indent: string;
  baseIndent?: string;
  maxLineLength?: number;
}
```

## Architecture

### Package Structure
```
packages/dds-tooling/
├── src/
│   ├── index.ts                     # Main exports
│   ├── types.ts                     # Type definitions
│   ├── formatter-interface.ts       # Formatter interface
│   ├── dom-utils.ts                 # DOM setup (jsdom)
│   ├── html-utils.ts                # HTML manipulation
│   ├── story-renderer.ts            # Story rendering
│   ├── story-parser.ts              # Story parsing
│   ├── formatters/                  # Code formatters
│   │   ├── html-formatter.ts
│   │   ├── react-formatter.ts
│   │   ├── vue-formatter.ts
│   │   └── angular-formatter.ts
│   └── utils/
│       └── string-utils.ts
└── package.json
```

### Design Principles

1. **Separation of Concerns**: Parsing, rendering, and formatting are distinct
2. **Framework Agnostic**: Core parsing works for all frameworks
3. **Type Safety**: Full TypeScript support with strict types
4. **Extensibility**: Easy to add new formatters
5. **Shared Code**: Single source of truth for both MCP and example-generator

## Dependencies

- `@lit-labs/ssr` - Lit server-side rendering
- `jsdom` - DOM implementation for Node.js

## License

MIT
