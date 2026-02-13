# Contributing to Infineon Design System

Thank you for your interest in contributing to the Infineon Design System! This guide will help you get started with development, testing, and submitting contributions.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Building and Testing](#building-and-testing)
- [Code Standards](#code-standards)
- [Working with Components](#working-with-components)
- [Working with Wrappers](#working-with-wrappers)
- [Example Generator](#example-generator)
- [Submitting Changes](#submitting-changes)
- [Release Process](#release-process)

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0 (required for workspace management)

```bash
# Option 1: Use Corepack (recommended, comes with Node.js >= 16.10)
# Run this within the repository directory after cloning
# Corepack will automatically use the version specified in package.json
corepack enable

# Option 2: Install pnpm globally
npm install -g pnpm
```

### Initial Setup

1. **Fork and clone the repository**

If you plan to contribute changes, first fork the repository on GitHub to your own account, then clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/infineon-design-system-stencil.git
cd infineon-design-system-stencil
```

Alternatively, to just explore the code, you can clone the main repository directly:

```bash
git clone https://github.com/Infineon/infineon-design-system-stencil.git
cd infineon-design-system-stencil
```

2. **Enable Corepack** (if using Option 1 above)

```bash
corepack enable
```

3. **Install dependencies**

```bash
pnpm install
```

This will install dependencies for all packages and examples in the monorepo.

4. **Build the core components**

```bash
pnpm build:components
```

This builds the core Stencil component library that other packages depend on.

## 🏗️ Development Setup

### Project Structure

```
infineon-design-system-stencil/
├── packages/
│   ├── components/               # Core Stencil component library
│   │   ├── src/
│   │   │   ├── components/      # Component implementations
│   │   │   ├── stories/         # Storybook stories
│   │   │   ├── global/          # Global styles and utilities
│   │   │   └── shared/          # Shared utilities and types
│   │   ├── stencil.config.ts    # Stencil configuration
│   │   └── package.json
│   │
│   ├── wrapper-react/           # React wrapper
│   │   ├── lib/                 # Generated React components
│   │   └── package.json
│   │
│   ├── wrapper-angular/         # Angular wrapper
│   │   ├── src/                 # Module-based wrapper
│   │   ├── standalone/          # Standalone wrapper
│   │   └── package.json
│   │
│   └── wrapper-vue/             # Vue wrapper
│       ├── lib/                 # Generated Vue components
│       └── package.json
│
├── examples/
│   ├── html-cdn-example/        # Plain HTML using CDN
│   ├── html-vite-example/       # Plain HTML with Vite
│   ├── react-example/           # React integration
│   ├── angular-standalone-example/  # Angular standalone
│   ├── angular-module-example/      # Angular module
│   └── vue-example/             # Vue integration
│
├── example-generator/           # Automated example generator
│   ├── src/
│   │   ├── generators/          # Framework-specific generators
│   │   ├── formatters/          # Code formatters
│   │   └── utils/               # Shared utilities
│   └── ARCHITECTURE.md          # Detailed architecture docs
```

### Running Commands

You can run commands in specific packages using the `-F` (filter) flag:

```bash
# Run a command in a specific package
pnpm -F <package-name> <command>

# Examples:
pnpm -F @infineon/infineon-design-system-stencil build
pnpm -F react-example dev
```

Or navigate to the package directory and run commands directly:

```bash
cd packages/components
pnpm run build
```

#### Key NPM Scripts

The following scripts in the root `package.json` are the most commonly used for development and maintenance:

| Script | Description |
|--------|-------------|
| `pnpm build` | Builds both the core components and all wrappers. |
| `pnpm build:components` | Builds only the core Stencil component library. |
| `pnpm build:wrappers` | Builds all framework wrappers (Angular, React, Vue). |
| `pnpm storybook` | Starts Storybook for component development and documentation. |
| `pnpm dev` | Starts the development server for the core Stencil components. [index.html](packages/components/src/index.html) will be served at http://localhost:3333 and can be used to test components during development. |
| `pnpm test` | Runs the test suite for the core components. |
| `pnpm generate:examples` | Runs the example generator to update framework example apps. |
| `pnpm example:<name>` | Starts the specified example app (e.g., `pnpm example:react`). |
| `pnpm dev:<name>` | Starts the dev servers for the Stencil components, relevant wrapper (if any), and the specified example app in parallel for live development. Replace `<name>` with the example name, e.g., `vue`, `react`, `angular-standalone`, `angular-module`, `html-cdn`, or `html-vite`. |
| `pnpm format` | Formats all files in the workspace using Biome. |
| `pnpm lint` | Lints the workspace using Biome and ESLint (for Stencil-specific rules). |
| `pnpm lint:fix` | Attempts to auto-fix linting issues. |
| `pnpm check` | Runs both linting and formatting checks. |

See the [scripts section in package.json](package.json) for the full list and details. Most scripts can be run from the root or filtered to a specific package using the `-F` flag (see above).

#### Live Example Development Scripts

For rapid development and live updates across the Stencil components, wrappers, and example apps, use the dynamic `dev:<name>` scripts. These run all relevant dev servers in parallel using `concurrently`:

```bash
# Usage pattern:
pnpm dev:<name>

# Example: Vue (Stencil, wrapper-vue, vue-example)
pnpm dev:vue

# Example: React (Stencil, wrapper-react, react-example)
pnpm dev:react

# Example: Angular standalone (Stencil, wrapper-angular, angular-standalone-example)
pnpm dev:angular-standalone

# Example: HTML CDN (Stencil, html-cdn-example)
pnpm dev:html-cdn
```

Replace `<name>` with the example name (e.g., `vue`, `react`, `angular-standalone`, `angular-module`, `html-cdn`, `html-vite`).

These scripts ensure that changes to the core components or wrappers are immediately reflected in the example apps for fast feedback during development.

## 🔄 Development Workflow

### 1. Working on Core Components

The components are all located in `packages/components/`.

You can see your changes live during development in two ways:

- **Storybook**: Run `pnpm storybook` to launch Storybook at http://localhost:6262 for interactive component development and documentation.
- **Stencil Dev Server**: Run `pnpm dev` to start the Stencil dev server. Open [index.html](packages/components/src/index.html) at http://localhost:3333 to test components directly in a browser.

### 2. Creating a New Component

You can create a new component either manually or using Stencil's component generator.

#### Option A: Using Stencil Generator (Recommended)

The Stencil CLI can scaffold a new component with all necessary files:

```bash
cd packages/components
pnpm exec stencil generate my-component
# or shorthand:
pnpm exec stencil g my-component
```

This will:
- Create the component directory in `src/components/my-component/`
- Generate `my-component.tsx` with boilerplate code
- Generate `my-component.scss` for styles (choose SCSS when prompted)
- Generate `my-component.spec.ts` for tests
- Prompt you for component options (tag name, stylesheet type, etc.)

**Important:** When prompted for stylesheet type, select **SCSS** to maintain consistency with the project.

**Example:** See [src/components/switch/](packages/components/src/components/switch/) for a complete component implementation following best practices.

### 3. Create a Storybook Story

Create a story file in the same component directory (`src/components/my-component/`):

```typescript
// my-component.stories.ts
export default {
  title: 'Components/MyComponent',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    // Component props
  },
};
```

**Example:** See [switch.stories.ts](packages/components/src/components/switch/switch.stories.ts) for a complete story using CSF3 format with Lit templates.

### 4. Write Tests and Run Them
Add tests in `my-component.spec.ts` using Jest.
You can refer to existing component tests for examples.


Run tests with:

```bash
pnpm test
```

### 5. Using the Example Generator

The example generator automatically creates example code from Storybook stories:

```bash
cd example-generator
pnpm start
```

This will:
- Extract component information from stories
- Generate HTML, React, Vue, and Angular examples
- Update example app files with auto-generated markers

See [example-generator/ARCHITECTURE.md](./example-generator/ARCHITECTURE.md) for detailed information.

### 6. Testing in Example Apps
After making changes, always build the components and test them in the example apps:

```bash
# Build the Stencil component library
pnpm build:components
pnpm build:wrappers

# Build and run an example app to test your changes (e.g., React example)
pnpm example:react
# Open http://localhost:3005

# Or run other examples as needed
pnpm example:vue
pnpm example:html-vite
pnpm example:angular-standalone
 
# For Vue development, you can run all relevant dev servers in parallel (Stencil, Vue wrapper, and Vue example) for live updates:

```bash
pnpm dev:vue-all
```

This requires `npm-run-all` (or `concurrently`) to be installed as a devDependency. It will start all three servers and display their output in parallel, making it easy to develop and test changes across the Stencil components, Vue wrapper, and Vue example app simultaneously.
```

You can also run all examples in parallel:

```bash
pnpm examples:all
```

### 7. Code Quality Checks

This project uses two complementary tools for code quality:

- **[Biome](https://biomejs.dev/)** - Fast, all-in-one linter and formatter for the entire workspace
- **[ESLint](https://eslint.org/)** with **[@stencil-community/eslint-plugin](https://github.com/stencil-community/stencil-eslint)** - Stencil-specific linting rules for web components

**Why both tools?**
- **Biome** handles general code quality, formatting, and best practices across all files (fast, modern replacement for ESLint + Prettier)
- **ESLint + Stencil plugin** enforces Stencil-specific rules that Biome doesn't know about (e.g., component decorators, lifecycle methods, shadow DOM patterns)

**Main commands:**
```bash
# Format all files (Biome formatting only)
pnpm format

# Lint entire workspace (Biome + ESLint for components)
pnpm lint

# Fix linting issues in entire workspace
pnpm lint:fix

# Check all files (Biome lint + format together)
pnpm check
```

**Working on components only:**
```bash
cd packages/components

# Lint components (Biome + ESLint)
pnpm lint

# Fix linting issues in components (Biome + ESLint)
pnpm lint:fix
```

**Single file commands:**
```bash
# Format a single file
pnpm exec biome format --write path/to/file.ts

# Lint a single file
pnpm exec biome lint path/to/file.ts

# Auto-fix lint for a single file
pnpm exec biome lint --write path/to/file.ts

# Check (lint + format) a single file
pnpm exec biome check --write path/to/file.ts
```

**Tool breakdown:**
- `biome format` - Formatting only (indentation, quotes, line breaks)
- `biome lint` - General linting (code quality, best practices)
- `biome check` - Both linting AND formatting together
- `eslint` - Stencil-specific linting (component decorators, lifecycle methods, etc.)

**Editor Integration**: Install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) and [ESLint VS Code extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to automatically check files on save. This is the recommended workflow for day-to-day development.
For other editors, refer to the [Biome editor integration guide](https://biomejs.dev/guides/editors/first-party-extensions/) and [ESLint editor integration guide](https://eslint.org/docs/latest/use/integrations).

**Pre-commit Hooks**: The project uses [Husky](https://typicode.github.io/husky/) to automatically run quality checks before each commit. The pre-commit hook (`.husky/pre-commit`) will run linting on staged files (Biome for all files + ESLint for component files)

If checks fail, the commit will be blocked. Fix the issues and try again.

**Bypassing hooks** (not recommended):
```bash
git commit --no-verify -m "your message"
```
⚠️ Only use `--no-verify` when absolutely necessary, as the hooks ensure code quality.

## 🧪 Building and Testing

### Building Packages

```bash
# Build everything (components + wrappers)
pnpm build

# Build only core components
pnpm build:components

# Build only wrappers
pnpm build:wrappers

# Build a specific package
pnpm -F @infineon/infineon-design-system-react build
```

### Running Tests

```bash
# Run tests for components (from root)
pnpm test

# Watch mode for active development
pnpm test:watch

# Or run from components directory
cd packages/components
pnpm test

# Run specific test file
pnpm test -- my-component.spec.ts
```

### Building Example Apps

```bash
# Build specific example
pnpm -F react-example build

# Preview built example
pnpm -F react-example preview
# Open http://localhost:4005
```

### Linting and Formatting

See [Code Quality Checks](#7-code-quality-checks) in the Development Workflow section for detailed information.

**Quick reference:**
```bash
pnpm format    # Format all files (Biome)
pnpm lint      # Lint workspace (Biome + ESLint)
pnpm lint:fix  # Auto-fix linting issues
pnpm check     # Biome lint + format together
```

**Configuration:**
- **Biome** (`biome.json`): Tabs for indentation, double quotes, recommended rules, auto-organize imports
- **ESLint** (`eslint.config.mjs`): Stencil-specific rules for components only

**Tip**: Use the Biome and ESLint editor extensions for automatic checking on save instead of running commands manually.

## 📝 Code Standards

### Stencil.js Style Guide

When working with Stencil components, follow the [official Stencil.js Style Guide](https://stenciljs.com/docs/style-guide). This guide covers best practices for component design, naming conventions, and architectural patterns.

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Provide explicit types for public APIs
- Avoid `any` types

### Component Guidelines

1. **Define components** using Stencil decorators

```typescript
@Component({
  tag: 'ifx-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class IfxButton {
  @Prop() label: string;
  @Event() ifxClick: EventEmitter<MouseEvent>;

  render() {
    return <button>{this.label}</button>;
  }
}
```

**Real Example:** See [switch.tsx](packages/components/src/components/switch/switch.tsx) for a complete implementation including form association, accessibility, and framework integration.

2. **Follow naming conventions**:
   - Component tags: `ifx-component-name` (kebab-case)
   - Component classes: `IfxComponentName` (PascalCase)
   - Events: `ifxEventName` (camelCase with ifx prefix)
   - Props: `propName` (camelCase)

3. **Provide documentation**:
   - JSDoc comments for props, events, and methods
   - readme.md for each component
   - Storybook stories with examples

4. **Accessibility**:
   - Include ARIA attributes where appropriate
   - Ensure keyboard navigation works
   - Test with screen readers

### Styling

- Use SCSS for component styles
- Follow BEM naming conventions
- Scope styles to component using shadow DOM
- Use CSS custom properties for theming

```scss
:host {
  --button-bg: var(--ifx-color-primary);
  --button-text: var(--ifx-color-white);
}

.button {
  background: var(--button-bg);
  color: var(--button-text);

  &--disabled {
    opacity: 0.5;
  }
}
```

### Git Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

**Examples**:

```
feat(button): add disabled state
fix(switch): correct toggle animation timing
docs(readme): update installation instructions
refactor(accordion): simplify state management
```

### Linting and Formatting
See [Code Quality Checks](#7-code-quality-checks) in the Development Workflow section for detailed information on using Biome and ESLint for linting and formatting.

## 🔧 Working with Components

### Component Lifecycle

Stencil components follow standard web component lifecycle:

1. `connectedCallback()` - Component added to DOM
2. `componentWillLoad()` - Before first render
3. `componentDidLoad()` - After first render
4. `componentWillUpdate()` - Before re-render
5. `componentDidUpdate()` - After re-render
6. `disconnectedCallback()` - Component removed from DOM

### State Management

Use Stencil decorators:

```typescript
@State() private isOpen: boolean = false;

@Watch('isOpen')
handleIsOpenChange(newValue: boolean) {
  console.log('isOpen changed to:', newValue);
}
```

### Events

Emit events:

```typescript
@Event() ifxChange: EventEmitter<string>;

handleChange(value: string) {
  this.ifxChange.emit(value);
}
```

**Event details:**

Stencil uses standard DOM `CustomEvent` for all component events. For simple values, emit the value directly:

```typescript
// Simple boolean value (like switch component)
@Event() ifxChange: EventEmitter<boolean>;

private toggleSwitch(): void {
  this.checked = !this.checked;
  this.ifxChange.emit(this.checked);  // Emit boolean directly
}
```

For complex data, use an object:

```typescript
interface ChangeDetail {
  value: string;
  checked: boolean;
}

@Event() ifxChange: EventEmitter<ChangeDetail>;

handleChange(value: string, checked: boolean) {
  this.ifxChange.emit({ value, checked });
}
```

**Real Example:** The switch component emits a simple boolean - see [switch.tsx](packages/components/src/components/switch/switch.tsx)

### Framework Integration
If your component exposes a value (e.g., for use with v-model in Vue or ngModel in Angular), ensure you update the componentModels (for Vue) and valueAccessorConfigs (for Angular) in the [stencil.config.ts](packages/components/stencil.config.ts). This enables proper two-way binding and integration with framework-specific features. See the Stencil documentation for [Vue integration](https://stenciljs.com/docs/vue#componentmodels) and [Angular integration](https://stenciljs.com/docs/angular#valueaccessorconfigs).

**Example:** The switch component is configured for Vue v-model and Angular forms in `stencil.config.ts`:

```typescript
const componentModels: ComponentModelConfig[] = [
  {
    elements: ["ifx-switch"],
    event: "ifxChange",
    targetAttr: "checked",
  },
];

const valueAccessorConfigs: ValueAccessorConfig[] = [
  {
    elementSelectors: ["ifx-switch"],
    event: "ifxChange",
    targetAttr: "checked",
    type: "boolean",
  },
];
```

### Props

Define props with validation:

```typescript
@Prop() variant: 'primary' | 'secondary' = 'primary';
@Prop() size: 'small' | 'medium' | 'large' = 'medium';
```

## 🎨 Working with Wrappers

### React Wrapper

Generated automatically by Stencil. If you need to add custom React-specific logic:

1. Edit `packages/wrapper-react/lib/index.ts`
2. Rebuild: `pnpm -F @infineon/infineon-design-system-react build`

### Angular Wrapper

Located in `packages/wrapper-angular/`:
- `src/` - Module-based wrapper (NgModule)
- `standalone/` - Standalone components

### Vue Wrapper

Located in `packages/wrapper-vue/lib/`

All wrappers are automatically generated from the core Stencil components. Manual changes should be minimal.

## 🤖 Example Generator

The example generator is a sophisticated tool that automatically generates framework-specific examples from Storybook stories.

### How It Works

1. Reads Storybook story files
2. Extracts component information (props, events, etc.)
3. Generates framework-specific code (HTML, React, Vue, Angular)
4. Updates example apps with generated code

### Running the Generator

```bash
cd example-generator
pnpm run start
```

### Output

The generator updates files marked with special comments:

```html
<!-- <AUTO-GENERATED-COMPONENTS> -->
<!-- Generated code appears here -->
<!-- </AUTO-GENERATED-COMPONENTS> -->
```

### Adding Support for New Frameworks

See [example-generator/ARCHITECTURE.md](./example-generator/ARCHITECTURE.md) for detailed instructions on extending the generator.

## 🚀 Submitting Changes

### Pull Request Process

1. **Create a feature branch**

```bash
git checkout -b feat/my-new-feature
```

2. **Make your changes**
   - Write clean, well-documented code
   - Add tests for new functionality
   - Update documentation as needed

3. **Test thoroughly**

```bash
# Build components
pnpm build:components

# Run tests
pnpm test

# Test in example apps
pnpm example:react
pnpm example:vue
```

4. **Commit your changes**

```bash
git add .
git commit -m "feat(component): add new feature"
```

5. **Push and create PR**

```bash
git push origin feat/my-new-feature
```

Then create a pull request on GitHub.

### PR Guidelines

- **Clear description**: Explain what changes were made and why
- **Link issues**: Reference any related issues
- **Screenshots**: Include screenshots for UI changes
- **Tests**: Ensure all tests pass
- **Documentation**: Update docs if needed

### Code Review

All submissions require review. Reviewers will check:

- Code quality and style
- Test coverage
- Documentation
- Accessibility
- Performance
- Breaking changes

## 📦 Release Process

The project uses [Lerna](https://lerna.js.org/) and [Auto](https://intuit.github.io/auto/) for automated releases.
auto handles versioning, changelogs, publishing and notifications in Webex.

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project. See [LICENSE](./LICENSE) for details.

---

Thank you for contributing to the Infineon Design System! 🎉
