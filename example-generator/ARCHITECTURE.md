# Example Generator - Architecture Documentation

## Overview

The Example Generator is a tool that automatically generates framework-specific example code from Storybook stories. It uses an interface-based architecture that makes it easy to add support for new frameworks.

## Architecture

### Core Design Principles

1. **Interface-Based Design**: All generators implement the `IExampleGenerator` interface
2. **Separation of Concerns**: Formatting, file operations, and generation logic are separated
3. **Single Responsibility**: Each class has one clear purpose
4. **Open/Closed Principle**: Easy to extend with new frameworks without modifying existing code

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         index.ts                            │
│                   (Main Entry Point)                        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ├──────────────────────────────────┐
                         │                                  │
                         ▼                                  ▼
        ┌────────────────────────────┐    ┌────────────────────────────┐
        │  HTMLExampleGenerator      │    │  ReactExampleGenerator     │
        │  implements                │    │  implements                │
        │  IExampleGenerator         │    │  IExampleGenerator         │
        └────────────┬───────────────┘    └────────────┬───────────────┘
                     │                                  │
                     ├──────────────┐                   ├──────────────┐
                     ▼              ▼                   ▼              ▼
        ┌──────────────────┐  ┌──────────┐  ┌──────────────────┐  ┌──────────┐
        │ HTMLCodeFormatter│  │   File   │  │ReactCodeFormatter│  │   File   │
        │   implements     │  │ Updater  │  │   implements     │  │ Updater  │
        │ ICodeFormatter   │  │          │  │ ICodeFormatter   │  │          │
        └──────────────────┘  └──────────┘  └──────────────────┘  └──────────┘
                     │              │                   │              │
                     └──────────────┴───────────────────┴──────────────┘
                                    │
                                    ▼
                        ┌────────────────────────┐
                        │   Utility Functions    │
                        │  - string-utils.ts     │
                        │  - file-updater.ts     │
                        └────────────────────────┘
```

## Directory Structure

```
example-generator/
├── src/
│   ├── index.ts                    # Main entry point
│   ├── interfaces.ts               # Core interfaces
│   ├── types.ts                    # Type definitions
│   ├── parser.ts                   # Story parsing logic
│   ├── dom-setup.ts               # DOM environment setup
│   ├── generators/                 # Framework-specific generators
│   │   ├── html-generator.ts      # HTML/Web Components
│   │   └── react-generator.ts     # React
│   ├── formatters/                 # Code formatters
│   │   ├── html-formatter.ts      # HTML formatting
│   │   └── react-formatter.ts     # React/JSX formatting
│   └── utils/                      # Shared utilities
│       ├── string-utils.ts        # String manipulation
│       └── file-updater.ts        # File update operations
├── package.json
└── README.md
```

## Core Interfaces

### IExampleGenerator

Main interface that all framework generators must implement.

```typescript
interface IExampleGenerator {
  generate(components: ComponentInfo[], config: GeneratorConfig): GenerationResult;
  getName(): string;
  validate(config: GeneratorConfig): boolean;
}
```

### ICodeFormatter

Interface for formatting component code in different frameworks.

```typescript
interface ICodeFormatter {
  formatComponent(component: ComponentInfo, options: FormatOptions): string;
  formatEventHandlers(component: ComponentInfo, options: FormatOptions): string;
  formatImports(component: ComponentInfo): string;
}
```

### IFileUpdater

Interface for updating files with generated content.

```typescript
interface IFileUpdater {
  updateFile(filePath: string, regions: Record<string, string>): boolean;
  hasMarkers(filePath: string, markers: string[]): boolean;
}
```

## Key Components

### Generators

**HTMLExampleGenerator** (`generators/html-generator.ts`)
- Generates HTML/Web Component examples
- Updates `index.html` with component sections and event handlers
- Uses HTMLCodeFormatter for code generation

**ReactExampleGenerator** (`generators/react-generator.ts`)
- Generates React component examples
- Creates individual `.tsx` files for each component
- Updates `App.tsx` with imports and usage
- Uses ReactCodeFormatter for JSX generation

### Formatters

**HTMLCodeFormatter** (`formatters/html-formatter.ts`)
- Converts component structure to HTML
- Generates vanilla JavaScript event handlers
- Escapes HTML for display in code blocks

**ReactCodeFormatter** (`formatters/react-formatter.ts`)
- Converts component structure to JSX
- Handles prop conversion (kebab-case → camelCase)
- Generates TypeScript event handlers
- Manages imports from React wrapper library

### Utilities

**string-utils.ts**
- `toPascalCase()`: ifx-switch → IfxSwitch
- `toCamelCase()`: aria-level → ariaLevel
- `toReactEventName()`: ifxChange → onIfxChange
- `toHandlerFunctionName()`: ifxChange → handleChange
- `escapeHTML()`: Escapes HTML for display
- `indent()`: Adds indentation to text
- `escapeRegex()`: Escapes regex special characters

**file-updater.ts**
- Implements `IFileUpdater` interface
- Updates files in marked regions
- Preserves user code outside markers
- Handles indentation automatically

## Adding a New Framework

To add support for a new framework (e.g., Vue, Angular):

### 1. Create a Formatter

```typescript
// formatters/vue-formatter.ts
import type { ICodeFormatter } from '../interfaces.js';

export class VueCodeFormatter implements ICodeFormatter {
  formatComponent(component: ComponentInfo, options: FormatOptions): string {
    // Convert to Vue template syntax
  }
  
  formatEventHandlers(component: ComponentInfo, options: FormatOptions): string {
    // Generate Vue event handlers
  }
  
  formatImports(component: ComponentInfo): string {
    // Generate Vue imports
  }
}
```

### 2. Create a Generator

```typescript
// generators/vue-generator.ts
import type { IExampleGenerator } from '../interfaces.js';

export class VueExampleGenerator implements IExampleGenerator {
  generate(components: ComponentInfo[], config: GeneratorConfig): GenerationResult {
    // Generate Vue example files
  }
  
  getName(): string {
    return 'Vue';
  }
  
  validate(config: GeneratorConfig): boolean {
    // Validate Vue project structure
  }
}
```

### 3. Register in index.ts

```typescript
import { VueExampleGenerator } from './generators/vue-generator.js';

const generators: IExampleGenerator[] = [
  new HTMLExampleGenerator(),
  new ReactExampleGenerator(),
  new VueExampleGenerator()  // Add new generator
];
```

## Usage

### Running the Generator

```bash
# From example-generator directory
pnpm run start
```

### Output

```
🚀 Example Generator v2.0
══════════════════════════════════════════════════
Extracting component information...

✅ Extracted: Switch
✅ Extracted: Accordion

──────────────────────────────────────────────────

🔨  Generating HTML/Web Components examples...
   📝 Generated 0 file(s)
   ✏️  Updated 1 file(s)

⚛️  Generating React examples...
   📝 Generated 2 file(s)
   ✏️  Updated 1 file(s)

══════════════════════════════════════════════════
✨ Generation complete!
```

## Configuration

Each generator uses a simple `GeneratorConfig`:

```typescript
interface GeneratorConfig {
  outputDir: string;  // Output directory path
}
```

## Marked Regions

The generator uses HTML/JS comments as markers to identify where to insert generated code:

### HTML Files
```html
<!-- <AUTO-GENERATED-COMPONENTS> -->
  <!-- Generated component examples appear here -->
<!-- </AUTO-GENERATED-COMPONENTS> -->

<script>
  /* <AUTO-GENERATED-SCRIPTS> */
  // Generated event handlers appear here
  /* </AUTO-GENERATED-SCRIPTS> */
</script>
```

### React Files
```tsx
/* <AUTO-GENERATED-IMPORTS> */
// Generated imports appear here
/* </AUTO-GENERATED-IMPORTS> */

/* <AUTO-GENERATED-COMPONENTS> */
// Generated JSX components appear here
/* </AUTO-GENERATED-COMPONENTS> */
```

## Benefits of This Architecture

### 1. **Maintainability**
- Each class has a single, well-defined responsibility
- Easy to locate and fix bugs
- Clear separation between concerns

### 2. **Extensibility**
- Add new frameworks without modifying existing code
- Implement the interface, register the generator, done!
- Formatters can be reused across generators

### 3. **Testability**
- Each component can be unit tested independently
- Mock implementations easy to create
- Interfaces define clear contracts

### 4. **Readability**
- Clear structure and naming conventions
- Self-documenting code through interfaces
- Comprehensive type safety

### 5. **Reusability**
- Utility functions shared across all generators
- Common formatting logic in one place
- File operations abstracted

## Type Safety

The entire codebase is fully typed with TypeScript:
- No `any` types used
- Strict null checks
- Comprehensive interface definitions
- Type-safe DOM operations

## Future Enhancements

Potential improvements to the architecture:

1. **Plugin System**: Allow external plugins to register new generators
2. **Configuration File**: Support `.generator.config.js` for customization
3. **Template System**: Support custom templates per framework
4. **Validation**: Pre-generation validation of story structure
5. **Incremental Generation**: Only regenerate changed components
6. **Multi-format Output**: Generate multiple variants (TypeScript, JavaScript, etc.)

## Contributing

When contributing to this codebase:

1. Follow the existing architecture patterns
2. Implement appropriate interfaces
3. Add comprehensive type annotations
4. Write clear, self-documenting code
5. Update this README for architectural changes

## License

Part of the Infineon Design System. See main LICENSE file.
