[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsdXN0cmF0b3IgMTkuMi4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0%2BCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDM3My45YzAsMzcuNi01NS4xLDY4LjYtOTIuNyw2OC42SDE4MC40Yy0zNy45LDAtOTIuNy0zMC43LTkyLjctNjguNnYtMy42aDMzNi45VjM3My45eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMjkyLjFIMTgwLjRjLTM3LjYsMC05Mi43LTMxLTkyLjctNjguNnYtMy42SDMzMmMzNy42LDAsOTIuNywzMSw5Mi43LDY4LjZWMjkyLjF6Ii8%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywxNDEuN0g4Ny43di0zLjZjMC0zNy42LDU0LjgtNjguNiw5Mi43LTY4LjZIMzMyYzM3LjksMCw5Mi43LDMwLjcsOTIuNyw2OC42VjE0MS43eiIvPgo8L3N2Zz4K&colorA=16161d&style=flat-square)](https://stenciljs.com)
[![npm version](https://img.shields.io/npm/v/@infineon/design-system?style=flat-square)](https://www.npmjs.com/package/@infineon/design-system)
[![npm downloads](https://img.shields.io/npm/dm/@infineon/design-system?style=flat-square)](https://www.npmjs.com/package/@infineon/design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/Infineon/infineon-design-system-stencil/blob/master/LICENSE)

# Infineon Design System

> 45+ production-ready web components built with Stencil. Framework-agnostic components that work everywhere: Vanilla JS, React, Angular, Vue, and more.

**[📚 View Live Storybook](https://infineon.github.io/infineon-design-system-stencil/)** | **[🎯 Example Apps](https://github.com/Infineon/infineon-design-system-stencil/tree/master/examples)** | **[📖 Full Documentation](https://github.com/Infineon/infineon-design-system-stencil)**

## ✨ Features

- ✅ **45+ Production-Ready Components** - Buttons, forms, tables, modals, navigation, and more
- ✅ **Framework Agnostic** - Works with React, Angular, Vue, or vanilla JavaScript
- ✅ **TypeScript Support** - Full type definitions included
- ✅ **Accessible** - WCAG 2.1 compliant components
- ✅ **Themeable** - Customizable with CSS custom properties
- ✅ **Tree-Shakeable** - Import only what you need
- ✅ **CDN Ready** - Use directly from jsDelivr with zero build setup

<details>
<summary><strong>📦 View All Components</strong></summary>

### Layout & Navigation
Accordion • Breadcrumb • Footer • Navigation • Tabs • Tree View

### Forms & Input
Button • Icon Button • Checkbox • Radio Button • Text Field • Textarea • Select • Dropdown • Switch • Slider • Search Bar • Search Field • Date Picker • File Upload

### Data Display
Table • Advanced Table • Overview Table • Card • Status • Indicator • Progress Bar • Chip • Tooltip

### Feedback & Messaging
Alert • Modal • Notification • Spinner

### Actions & Controls
Action List • Content Switcher • Segmented Control • Stepper • Pagination

</details>

## 🚀 Installation

```bash
npm install @infineon/design-system
```

## 📖 Usage

### Vanilla JavaScript / HTML

**Option 1: CDN (Easiest)**

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/design-system"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@infineon/design-system/dist/infineon-design-system-stencil/infineon-design-system-stencil.css">
</head>
<body>
  <ifx-button variant="primary">Click Me</ifx-button>
  <ifx-switch checked></ifx-switch>
  <ifx-text-field label="Email" type="email"></ifx-text-field>
</body>
</html>
```

**Option 2: NPM with Bundler (Tree-Shakeable)**

```javascript
// Import only the components you need
import '@infineon/design-system/dist/components/ifx-button';
import '@infineon/design-system/dist/components/ifx-switch';
```

### React

```bash
npm install @infineon/design-system-react
```

```jsx
import { IfxButton, IfxSwitch } from '@infineon/design-system-react';

function App() {
  return (
    <>
      <IfxButton variant="primary" onIfxClick={() => console.log('clicked')}>
        Click Me
      </IfxButton>
      <IfxSwitch checked />
    </>
  );
}
```

### Angular

```bash
npm install @infineon/design-system-angular
```

```typescript
// app.module.ts
import { IfxComponentsModule } from '@infineon/design-system-angular';

@NgModule({
  imports: [IfxComponentsModule]
})
export class AppModule {}
```

```html
<!-- app.component.html -->
<ifx-button variant="primary" (ifxClick)="handleClick()">Click Me</ifx-button>
<ifx-switch [checked]="true"></ifx-switch>
```

### Vue

```bash
npm install @infineon/design-system-vue
```

```javascript
// main.js
import { ComponentLibrary } from '@infineon/design-system-vue';

app.use(ComponentLibrary);
```

```vue
<template>
  <ifx-button variant="primary" @ifxClick="handleClick">Click Me</ifx-button>
  <ifx-switch :checked="true" />
</template>
```

## 🎨 Theming

Customize components using CSS custom properties:

```css
ifx-button {
  --ifx-button-primary-background: #006699;
  --ifx-button-primary-color: #ffffff;
}
```

All design tokens are provided by `@infineon/design-system-tokens`.

## 📖 TypeScript Support

Full TypeScript definitions are included:

```typescript
import type { Components } from '@infineon/design-system';

// Get component interface
type ButtonProps = Components.IfxButton;

const buttonConfig: Partial<ButtonProps> = {
  variant: 'primary',
  disabled: false,
  size: 'medium'
};
```

## 🤝 Contributing

We welcome contributions! Please see the main [Contributing Guide](../../CONTRIBUTING.md) for:

- Development setup
- Code standards
- Component creation guidelines
- Pull request process

## 📄 License

MIT License - see [LICENSE](../../LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/Infineon/infineon-design-system-stencil)
- [npm Package](https://www.npmjs.com/package/@infineon/design-system)
- [Storybook Documentation](https://infineon.github.io/infineon-design-system-stencil/)
- [Issue Tracker](https://github.com/Infineon/infineon-design-system-stencil/issues)
- [Stencil Documentation](https://stenciljs.com/)

## 📞 Support

- **Email**: dds@infineon.com
- **Issues**: [GitHub Issues](https://github.com/Infineon/infineon-design-system-stencil/issues)## 📖 TypeScript

Full TypeScript definitions included:

```typescript
import type { Components } from '@infineon/design-system';

type ButtonProps = Components.IfxButton;
```

## 📚 Resources

- **[Live Storybook →](https://infineon.github.io/infineon-design-system-stencil/)** - Interactive component playground
- **[GitHub Repository →](https://github.com/Infineon/infineon-design-system-stencil)** - Source code & documentation
- **[Example Apps →](https://github.com/Infineon/infineon-design-system-stencil/tree/master/examples)** - React, Angular, Vue examples
- **[Contributing Guide →](https://github.com/Infineon/infineon-design-system-stencil/blob/master/CONTRIBUTING.md)** - How to contribute

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions welcome! See our [Contributing Guide](https://github.com/Infineon/infineon-design-system-stencil/blob/master/CONTRIBUTING.md).

## 📄 License

MIT - see [LICENSE](https://github.com/Infineon/infineon-design-system-stencil/blob/master/LICENSE)

## 📞 Support

- **Email**: dds@infineon.com
- **Issues**: [GitHub Issues](https://github.com/Infineon/infineon-design-system-stencil/issues)