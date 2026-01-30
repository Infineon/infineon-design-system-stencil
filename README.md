# Infineon Design System


[![GitHub Issues](https://img.shields.io/github/issues/Infineon/infineon-design-system-stencil?style=flat-square)](https://github.com/Infineon/infineon-design-system-stencil/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/Infineon/infineon-design-system-stencil?style=flat-square)](https://github.com/Infineon/infineon-design-system-stencil/pulls)
[![GitHub Version](https://img.shields.io/github/package-json/v/Infineon/infineon-design-system-stencil?style=flat-square)](https://github.com/Infineon/infineon-design-system-stencil/blob/master/packages/components/package.json)
[![GitHub Commits](https://img.shields.io/github/commit-activity/w/Infineon/infineon-design-system-stencil/master?style=flat-square)](https://github.com/Infineon/infineon-design-system-stencil/tree/master)
[![GitHub Contributors](https://img.shields.io/github/contributors/Infineon/infineon-design-system-stencil?style=flat-square)](https://github.com/Infineon/infineon-design-system-stencil/graphs/contributors)
[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

A comprehensive design system built with [Stencil](https://stenciljs.com/) providing web components and framework-specific wrappers for React, Angular, and Vue.

## 🚀 Quick Start
> For more detailed instructions, see the [Installation & Usage Guide](./USAGE.md).

### Installation

```bash
# Using npm
npm install @infineon/infineon-design-system-stencil

# Using yarn
yarn add @infineon/infineon-design-system-stencil

# Using pnpm
pnpm add @infineon/infineon-design-system-stencil
```

### Usage

#### Vanilla JavaScript / HTML

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil"></script>

<ifx-button>Click Me</ifx-button>
```

#### React

```bash
npm install @infineon/infineon-design-system-react
```

```tsx
import { IfxButton } from '@infineon/infineon-design-system-react';

function App() {
  return <IfxButton>Click Me</IfxButton>;
}
```

#### Angular

```bash
npm install @infineon/infineon-design-system-angular
```

```typescript
import { IfxComponentsModule } from '@infineon/infineon-design-system-angular';

@NgModule({
  imports: [IfxComponentsModule]
})
export class AppModule {}
```

#### Vue

```bash
npm install @infineon/infineon-design-system-vue
```

```javascript
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';

app.use(ComponentLibrary);
```

## 📦 Packages

This monorepo contains the following packages:

| Package | Description | Version |
|---------|-------------|---------|
| `@infineon/infineon-design-system-stencil` | Core Stencil component library | [![npm](https://img.shields.io/npm/v/@infineon/infineon-design-system-stencil?style=flat-square)](https://www.npmjs.com/package/@infineon/infineon-design-system-stencil) |
| `@infineon/infineon-design-system-react` | React wrapper | [![npm](https://img.shields.io/npm/v/@infineon/infineon-design-system-react?style=flat-square)](https://www.npmjs.com/package/@infineon/infineon-design-system-react) |
| `@infineon/infineon-design-system-angular` | Angular wrapper | [![npm](https://img.shields.io/npm/v/@infineon/infineon-design-system-angular?style=flat-square)](https://www.npmjs.com/package/@infineon/infineon-design-system-angular) |
| `@infineon/infineon-design-system-vue` | Vue wrapper | [![npm](https://img.shields.io/npm/v/@infineon/infineon-design-system-vue?style=flat-square)](https://www.npmjs.com/package/@infineon/infineon-design-system-vue) |

## 🏗️ Repository Structure

```
infineon-design-system-stencil/
├── packages/
│   ├── components/           # Core Stencil component library
│   ├── wrapper-react/        # React wrapper
│   ├── wrapper-angular/      # Angular wrapper
│   └── wrapper-vue/          # Vue wrapper
├── examples/
│   ├── html-cdn-example/     # HTML with CDN
│   ├── html-vite-example/    # HTML with Vite bundler
│   ├── react-example/        # React integration example
│   ├── angular-standalone-example/  # Angular standalone example
│   ├── angular-module-example/      # Angular module example
│   └── vue-example/          # Vue integration example
└── example-generator/        # Tool for generating examples from stories
```

## 💻 Development
> For detailed development instructions, see [CONTRIBUTING.md](./CONTRIBUTING.md).

### Prerequisites

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0

### Setup

```bash
# Install dependencies
pnpm install

# Build the core components
pnpm run build:components
```

## 📚 Documentation

### Quick Links
- **[Storybook (Live Demo)](https://infineon.github.io/infineon-design-system-stencil/)** - Interactive component documentation with live examples
- **[Usage Guide](./USAGE.md)** - Detailed usage instructions for all frameworks
- **[Contributing Guidelines](./CONTRIBUTING.md)** - How to contribute to this project

### Additional Resources
- [Example Generator Architecture](./example-generator/ARCHITECTURE.md) - Technical details of the example generator
- [Security Policy](./SECURITY.md) - Security and vulnerability reporting
- [Changelog](./CHANGELOG.md) - Version history and changes

## 🎨 Storybook

**[View Live Storybook →](https://infineon.github.io/infineon-design-system-stencil/)**

Or run locally:

```bash
cd packages/components
pnpm run storybook
```

The Storybook will be available at http://localhost:6262

## 🧪 Example Applications
All example applications demonstrate real-world usage of the design system:

| Example App | Live Demo | Dev Port | Command |
|-------------|-----------|----------|---------|
| HTML CDN Example | [View →](https://infineon.github.io/infineon-design-system-stencil/html-cdn-example/) | 3001 | `pnpm -F html-cdn-example dev` |
| HTML Vite Example | [View →](https://infineon.github.io/infineon-design-system-stencil/html-vite-example/) | 3002 | `pnpm -F html-vite-example dev` |
| Angular Standalone Example | [View →](https://infineon.github.io/infineon-design-system-stencil/angular-standalone-example/) | 3003 | `pnpm -F angular-standalone-example dev` |
| Angular Module Example | [View →](https://infineon.github.io/infineon-design-system-stencil/angular-module-example/) | 3004 | `pnpm -F angular-module-example dev` |
| React Example | [View →](https://infineon.github.io/infineon-design-system-stencil/react-example/) | 3005 | `pnpm -F react-example dev` |
| Vue Example | [View →](https://infineon.github.io/infineon-design-system-stencil/vue-example/) | 3006 | `pnpm -F vue-example dev` |

Each example supports:
- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for details on:

- Setting up your development environment
- Code standards and best practices
- Submitting pull requests
- Running tests and linting

## 📄 License

See [LICENSE](./LICENSE) file for details.

## 🔒 Security

For security concerns, please see our [Security Policy](./SECURITY.md).

## 🔗 Links

- [Stencil Documentation](https://stenciljs.com/)
- [Web Components Standards](https://www.webcomponents.org/)

## 📞 Contact
Email: dds@infineon.com
