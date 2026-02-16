# Usage Guide

This guide provides detailed instructions on how to use the Infineon Design System in different frameworks and environments.

> 💡 **Looking for more examples?**
> - **[Storybook](https://infineon.github.io/infineon-design-system-stencil/)** - Interactive component documentation with live examples
> - **[Example Applications](#-example-applications)** - Full working examples for each framework (see links below)

## Table of Contents

- [Code Examples](#code-examples)
- [Vanilla JavaScript / HTML](#vanilla-javascript--html)
- [React](#react)
- [Angular](#angular)
- [Vue](#vue)
- [TypeScript Support](#typescript-support)
- [Troubleshooting](#troubleshooting)
- [Additional Resources](#additional-resources)

## Code Examples

The best way to learn is by exploring working examples:

### 📚 Storybook (Interactive Documentation)

**[View Live Storybook →](https://infineon.github.io/infineon-design-system-stencil/)**

View all components with interactive controls and documentation.

**Or run locally:**
```bash
pnpm storybook
# Opens at http://localhost:6262
```

Storybook provides:
- Live component previews
- Interactive prop controls
- Code examples for each component

### 🎯 Example Applications

Complete working applications demonstrating real-world usage:

| Framework | Live Demo | Source Code | Run Locally |
|-----------|-----------|-------------|-------------|
| **HTML (CDN)** | [View Demo](https://infineon.github.io/infineon-design-system-stencil/html-cdn-example/) | [`examples/html-cdn-example/`](examples/html-cdn-example/) | `pnpm example:html-cdn` |
| **HTML (Vite)** | [View Demo](https://infineon.github.io/infineon-design-system-stencil/html-vite-example/) | [`examples/html-vite-example/`](examples/html-vite-example/) | `pnpm example:html-vite` |
| **Angular (Standalone)** | [View Demo](https://infineon.github.io/infineon-design-system-stencil/angular-standalone-example/) | [`examples/angular-standalone-example/`](examples/angular-standalone-example/) | `pnpm example:angular-standalone` |
| **Angular (Module)** | [View Demo](https://infineon.github.io/infineon-design-system-stencil/angular-module-example/) | [`examples/angular-module-example/`](examples/angular-module-example/) | `pnpm example:angular-module` |
| **React** | [View Demo](https://infineon.github.io/infineon-design-system-stencil/react-example/) | [`examples/react-example/`](examples/react-example/) | `pnpm example:react` |
| **Vue** | [View Demo](https://infineon.github.io/infineon-design-system-stencil/vue-example/) | [`examples/vue-example/`](examples/vue-example/) | `pnpm example:vue` |

## Vanilla JavaScript / HTML

The Infineon Design System provides two distribution formats for vanilla JavaScript usage:

> 📖 **See it in action:** Check out the [HTML CDN example](examples/html-cdn-example/) or [HTML Vite example](examples/html-vite-example/) for complete working implementations.

### Option 1: CDN (Lazy Loading)

The simplest way to get started. Components are loaded on-demand as they appear on the page.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
  <!-- Load the component library -->
  <script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil"></script>
</head>
<body>
  <!-- Use components directly -->
  <ifx-button variant="primary">Click Me</ifx-button>
  <ifx-switch checked></ifx-switch>
</body>
</html>
```

**Pros:**
- Simple setup
- Automatic lazy loading
- Smaller initial bundle

**Cons:**
- Requires internet connection
- No tree-shaking

### Option 2: Custom Elements (Bundle Optimization)

For production apps using bundlers like Vite, Webpack, or Rollup. Enables better tree-shaking.

```bash
npm install @infineon/infineon-design-system-stencil
```

```javascript
// main.js
// Import only the components you need
import '@infineon/infineon-design-system-stencil/dist/components/ifx-button';
import '@infineon/infineon-design-system-stencil/dist/components/ifx-switch';
```

```html
<!-- index.html -->
<ifx-button variant="primary">Click Me</ifx-button>
<ifx-switch checked></ifx-switch>
```

**Pros:**
- Better tree-shaking
- Optimized bundle size
- Works offline

**Cons:**
- More setup required
- Need to import each component

### Event Handling

```javascript
// Get reference to component
const button = document.querySelector('ifx-button');

// Listen to custom events
button.addEventListener('ifxClick', (event) => {
  console.log('Button clicked!', event.detail);
});

// Set properties
button.disabled = true;

// Call methods (if available)
button.focus();
```

## React

> 📖 **See it in action:** Check out the [React example app](https://infineon.github.io/infineon-design-system-stencil/react-example/) ([source code](examples/react-example/)) for complete working implementations.

### Installation

```bash
npm install @infineon/infineon-design-system-react
```

### Basic Usage

```tsx
import { IfxButton, IfxSwitch } from '@infineon/infineon-design-system-react';
import { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(false);

  const handleButtonClick = (event: CustomEvent) => {
    console.log('Button clicked!', event.detail);
  };

  const handleSwitchChange = (event: CustomEvent<boolean>) => {
    setChecked(event.detail);
  };

  return (
    <div>
      <IfxButton 
        variant="primary"
        onIfxClick={handleButtonClick}
      >
        Click Me
      </IfxButton>

      <IfxSwitch 
        checked={checked}
        onIfxChange={handleSwitchChange}
      />
    </div>
  );
}
```

### TypeScript Support

All React components come with full TypeScript definitions:

```tsx
import { IfxButton } from '@infineon/infineon-design-system-react';
import type { Components } from '@infineon/infineon-design-system-stencil';

// Type for button variant
type ButtonVariant = Components.IfxButton['variant'];

// Fully typed component
const MyButton: React.FC<{ variant: ButtonVariant }> = ({ variant }) => {
  return <IfxButton variant={variant}>Click Me</IfxButton>;
};
```

### Common Patterns

#### Form Handling

```tsx
import { IfxInput, IfxButton } from '@infineon/infineon-design-system-react';
import { useState, FormEvent } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <IfxInput
        type="email"
        value={email}
        placeholder="Email"
        onIfxInput={(e) => setEmail(e.detail)}
      />
      <IfxInput
        type="password"
        value={password}
        placeholder="Password"
        onIfxInput={(e) => setPassword(e.detail)}
      />
      <IfxButton type="submit">Login</IfxButton>
    </form>
  );
}
```

## Angular

> 📖 **See it in action:** 
> - [Angular Standalone example](https://infineon.github.io/infineon-design-system-stencil/angular-standalone-example/) ([source code](examples/angular-standalone-example/))
> - [Angular Module example](https://infineon.github.io/infineon-design-system-stencil/angular-module-example/) ([source code](examples/angular-module-example/))

### Installation

```bash
npm install @infineon/infineon-design-system-angular
```

### Module-Based Setup

For applications using NgModule:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IfxComponentsModule } from '@infineon/infineon-design-system-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IfxComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Standalone Setup

For modern standalone Angular applications:

```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideIfxComponents } from '@infineon/infineon-design-system-angular/standalone';

bootstrapApplication(AppComponent, {
  providers: [
    provideIfxComponents()
  ]
});
```

### Component Usage

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ifx-button 
      variant="primary"
      (ifxClick)="handleClick($event)"
    >
      Click Me
    </ifx-button>

    <ifx-switch 
      [checked]="isChecked"
      (ifxChange)="handleChange($event)"
    ></ifx-switch>
  `
})
export class AppComponent {
  isChecked = false;

  handleClick(event: CustomEvent) {
    console.log('Button clicked!', event.detail);
  }

  handleChange(event: CustomEvent<boolean>) {
    this.isChecked = event.detail;
  }
}
```

### Forms Integration

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <ifx-input
        type="email"
        [(ngModel)]="email"
        name="email"
        placeholder="Email"
      ></ifx-input>

      <ifx-input
        type="password"
        [(ngModel)]="password"
        name="password"
        placeholder="Password"
      ></ifx-input>

      <ifx-button type="submit">Login</ifx-button>
    </form>
  `
})
export class LoginComponent {
  email = '';
  password = '';

  onSubmit() {
    console.log('Login:', { email: this.email, password: this.password });
  }
}
```

## Vue

> 📖 **See it in action:** Check out the [Vue example app](https://infineon.github.io/infineon-design-system-stencil/vue-example/) ([source code](examples/vue-example/)) for complete working implementations.

### Installation

```bash
npm install @infineon/infineon-design-system-vue
```

### Setup

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';

const app = createApp(App);
app.use(ComponentLibrary);
app.mount('#app');
```

### Component Usage

```vue
<template>
  <div>
    <ifx-button 
      variant="primary"
      @ifxClick="handleClick"
    >
      Click Me
    </ifx-button>

    <ifx-switch 
      :checked="isChecked"
      @ifxChange="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IfxButton, IfxSwitch } from '@infineon/infineon-design-system-vue';
const isChecked = ref(false);

const handleClick = (event: CustomEvent) => {
  console.log('Button clicked!', event.detail);
};

const handleChange = (event: CustomEvent<boolean>) => {
  isChecked.value = event.detail;
};
</script>
```

> Important: Make sure to import the component in the script to ensure that the v-model bindings work correctly. Without the import, Vue will use the plain web component, which will render correctly but v-model will not function as expected. 

## TypeScript Support

All packages include TypeScript definitions.

### Component Types

```typescript
import type { Components } from '@infineon/infineon-design-system-stencil';

// Get component interface
type ButtonProps = Components.IfxButton;

// Use in your code
const buttonConfig: Partial<ButtonProps> = {
  variant: 'primary',
  disabled: false,
  size: 'medium'
};
```

### Event Types

```typescript
import type { Components, JSX } from '@infineon/infineon-design-system-stencil';

// Get event types
type ButtonEvents = JSX.IfxButton;

// Use in event handlers
const handleClick: ButtonEvents['onIfxClick'] = (event) => {
  console.log(event.detail);
};
```

## Troubleshooting

### Components Not Rendering

1. Verify the package is installed
2. Check that components are properly imported
3. Ensure build tools support web components
4. Check browser console for errors

### TypeScript Errors

```bash
# Clear TypeScript cache
rm -rf node_modules/.cache

# Reinstall dependencies
pnpm install
```

### Style Issues

1. Check CSS custom properties are defined
2. Verify no global CSS is conflicting
3. Use browser DevTools to inspect styles

## Additional Resources

- **[Storybook (Live)](https://infineon.github.io/infineon-design-system-stencil/)** - Interactive component documentation
- [Component Documentation](../packages/components/readme.md) - Core component library docs
- [Stencil Documentation](https://stenciljs.com/) - Learn about Stencil framework
- [Contributing Guide](../CONTRIBUTING.md) - How to contribute to this project

---

For more help, please open an issue on [GitHub](https://github.com/Infineon/infineon-design-system-stencil/issues).
