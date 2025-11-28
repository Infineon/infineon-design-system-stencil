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
# Install pnpm globally if you haven't already
npm install -g pnpm
```

### Initial Setup

1. **Clone the repository**

```bash
git clone https://github.com/Infineon/infineon-design-system-stencil.git
cd infineon-design-system-stencil
```

2. **Install dependencies**

```bash
pnpm install
```

This will install dependencies for all packages and examples in the monorepo.

3. **Build the core components**

```bash
pnpm build:components
```

This builds the core Stencil component library that other packages depend on.

## 🏗️ Development Setup

### Monorepo Structure

This project uses **pnpm workspaces** and **Lerna** for monorepo management. The workspace is defined in `pnpm-workspace.yaml`:

```yaml
packages:
  - 'packages/*'
  - 'examples/*'
  - 'example-generator'
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

## 📁 Project Structure

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
│
└── docs/                        # Additional documentation
```

## 🔄 Development Workflow

### 1. Working on Core Components

```bash
# Navigate to components package
cd packages/components

# Start Storybook for component development
pnpm storybook
# Open http://localhost:6262

# Build components
pnpm build:components

# Run tests
pnpm run test

# Watch mode for tests
pnpm run test.watch
```

### 2. Creating a New Component

You can create a new component either manually or using Stencil's component generator.

#### Option A: Using Stencil Generator (Recommended)

The Stencil CLI can scaffold a new component with all necessary files:

```bash
cd packages/components
pnpm exec stencil generate ifx-my-component
# or shorthand:
pnpm exec stencil g ifx-my-component
```

This will:
- Create the component directory in `src/components/ifx-my-component/`
- Generate `ifx-my-component.tsx` with boilerplate code
- Generate `ifx-my-component.scss` for styles (choose SCSS when prompted)
- Generate `ifx-my-component.spec.ts` for tests
- Prompt you for component options (tag name, stylesheet type, etc.)

**Important:** When prompted for stylesheet type, select **SCSS** to maintain consistency with the project.

#### 3. Create a Storybook Story

Create a story file in the same component directory (`src/components/ifx-my-component/`):

```typescript
// ifx-my-component.stories.ts
export default {
  title: 'Components/IfxMyComponent',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    // Component props
  },
};
```

#### 4. Build and Verify

```bash
pnpm build:components
pnpm storybook
```

### 3. Testing Example Apps

After making changes to components, test them in example applications:

```bash
# Rebuild components first
pnpm build:components

# Start an example app
pnpm example:react
# Open http://localhost:3005

# Or start other examples
pnpm example:html-vite   # http://localhost:3002
pnpm example:vue         # http://localhost:3006
pnpm example:angular-standalone  # http://localhost:3003
```

### 4. Using the Example Generator

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

## 📝 Code Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Provide explicit types for public APIs
- Avoid `any` types

```typescript
// ✅ Good
interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
}

// ❌ Bad
interface ButtonProps {
  label: any;
  disabled: any;
  onClick: any;
}
```

### Component Guidelines

1. **Use functional components** in Stencil with decorators

```typescript
@Component({
  tag: 'ifx-button',
  styleUrl: 'ifx-button.scss',
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

Emit custom events:

```typescript
@Event() ifxChange: EventEmitter<string>;

handleChange(value: string) {
  this.ifxChange.emit(value);
}
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
