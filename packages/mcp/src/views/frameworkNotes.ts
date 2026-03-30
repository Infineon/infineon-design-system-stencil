import type { Framework } from '../runtime/types.js';

export function getFrameworkNotes(framework: Framework, tag: string): string {
  const componentName = tagToComponentName(tag);
  
  switch (framework) {
    case 'react':
      return `### React

Import the component:
\`\`\`tsx
import { ${componentName} } from '@infineon/infineon-design-system-react';
\`\`\`

Usage:
- Use **PascalCase** component names: \`<${componentName}>\` instead of \`<${tag}>\`
- Use **camelCase** for props: \`onClick\`, \`className\`, etc. (aria-label stays the same)
- Event handlers use \`on\` prefix: \`onIfxChange\`, \`onIfxClose\`, etc.
- Boolean props don't need explicit value: \`<${componentName} disabled />\``;

    case 'vue':
      return `### Vue

Import and register the library:

\`\`\`ts
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';
app.use(ComponentLibrary);
\`\`\`

Usage:
- Use **kebab-case** in templates: \`<${tag}>\`
- Event handlers use \`@\` syntax: \`@ifx-change="handler"\`
- v-model binding can be used where supported`;

    case 'angular':
      return `### Angular

**Module-based approach:**
\`\`\`ts
import { InfineonDesignSystemModule } from '@infineon/infineon-design-system-angular';
// For ngModel support on form components:
import { BooleanValueAccessor, TextValueAccessor } from '@infineon/infineon-design-system-angular';

@NgModule({
  imports: [InfineonDesignSystemModule, FormsModule],
})
\`\`\`

**Standalone approach:**
\`\`\`ts
import { ${componentName} } from '@infineon/infineon-design-system-angular/standalone';
// For ngModel support on form components:
import { BooleanValueAccessor, TextValueAccessor } from '@infineon/infineon-design-system-angular/standalone';
\`\`\`

Usage:
- Use **kebab-case** in templates: \`<${tag}>\`
- Event handlers use parentheses: \`(ifxChange)="handler($event)"\`
- Property binding uses square brackets: \`[disabled]="isDisabled"\`
- Two-way binding with \`[(ngModel)]\` requires importing the appropriate ValueAccessor`;

    case 'html':
      return `### Vanilla HTML/JavaScript

Include via CDN:
\`\`\`html
<script type="module" src="https://unpkg.com/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.css">
\`\`\`

Or install via npm:
\`\`\`bash
npm install @infineon/infineon-design-system-stencil
\`\`\`

and import in your JavaScript:
\`\`\`js
import '@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js';
import '@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.css';
\`\`\`

Usage:
- Use **kebab-case**: \`<${tag}>\`
- Event listeners: \`element.addEventListener('ifxChange', handler)\`
- Properties via JavaScript: \`element.disabled = true\``;

    default:
      return '';
  }
}

export function tagToComponentName(tag: string): string {
  // Convert ifx-button -> IfxButton, ifx-text-field -> IfxTextField
  return tag
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

export function normalizeComponentName(input: string): string {
  // If already kebab-case (contains hyphens), return as-is
  if (input.includes('-')) {
    return input.toLowerCase();
  }
  
  // Convert PascalCase to kebab-case: IfxButton -> ifx-button
  return input
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, ''); // Remove leading hyphen
}
