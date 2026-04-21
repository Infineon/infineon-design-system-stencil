# @infineon/design-system-migrations

Shared migration engine for Infineon Design System codemods. Provides the `dds-migrate` CLI and the underlying AST transform logic used to automate breaking-change prop renames across React, Vue, and HTML projects.

## Usage

```bash
npx dds-migrate [--framework react|vue|html|angular] [--dry-run] [--config <path>]
```

Options are auto-detected from the installed DDS package when omitted.

## Supported patterns

### React

The migrator rewrites JSX prop names on target components. The following usage patterns are handled:

| Pattern | Example | Handled |
|---|---|---|
| Boolean shorthand | `<IfxTextField success />` | ✅ |
| Literal value | `<IfxTextField success={true} />` | ✅ |
| Variable reference | `<IfxTextField success={isValid} />` | ✅ |
| Inline expression | `<IfxTextField success={a \|\| b} />` | ✅ |
| Local const spread object | `const p = { success: true }; <IfxTextField {...p} />` | ✅ |
| Mapped config array spread | `items.map(i => <IfxTextField {...i} />)` | ❌ |
| Helper-returned spread (same file) | `function f() { return { success }; } <IfxTextField {...f()} />` | ❌ |
| Imported object spread | `import { p } from './c'; <IfxTextField {...p} />` | ❌ |
| Imported helper spread | `import { f } from './h'; <IfxTextField {...f()} />` | ❌ |

### Vue

Prop renames are applied across SFC templates, `<script setup>` blocks, render functions (`h`, `createVNode`), and JSX files. Aliased imports are supported.

| Pattern | Example | Handled |
|---|---|---|
| Explicit attribute binding | `:success="isValid"` | ✅ |
| Static attribute | `success="true"` | ✅ |
| Inline expression | `:success="a.length > 0"` | ✅ |
| Local const spread object | `const p = { success: true }; v-bind="p"` | ✅ |
| Helper-returned spread | `v-bind="getProps(values)"` | ❌ |
| Imported object spread | `import { p } from './c'; v-bind="p"` | ❌ |

### HTML / Web Components

Prop renames are applied to:
- HTML attribute names in markup (`success="true"` → `valid="true"`)
- Property and attribute access in JavaScript/TypeScript files (`el.success`, `el['success']`, `setAttribute('success', ...)`, etc.)
- Object literal keys in `Object.assign(el, { success: ... })` (inline objects)
- Object literal keys in `const` local variables spread via `Object.assign(el, localObj)`

| Pattern | Example | Handled |
|---|---|---|
| Direct property assignment | `el.success = true` | ✅ |
| Bracket notation | `el['success'] = true` | ✅ |
| Attribute API calls | `el.setAttribute('success', 'true')` | ✅ |
| HTML markup attribute | `<ifx-text-field success="true">` | ✅ |
| Inline `Object.assign` object | `Object.assign(el, { success: true })` | ✅ |
| Local const spread via `Object.assign` | `const p = { success: true }; Object.assign(el, p)` | ✅ |
| Function return spread via `Object.assign` (same file) | `Object.assign(el, getProps())` | ✅ |
| Function return spread via `Object.assign` (imported) | `import { getProps } from './h'; Object.assign(el, getProps())` | ❌ |
| Imported const object spread via `Object.assign` | `import { p } from './c'; Object.assign(el, p)` | ❌ |
| `innerHTML` / template literal attributes | `` el.innerHTML = `<ifx-text-field success>` `` | ❌ |

## Known limitations

### Cross-file imports are not traced

All frameworks only trace spread sources **defined in the same file**. When the prop object or helper function is imported from another module, the migrator does not follow the import — regardless of framework:

```ts
// NOT migrated in React, Vue, or HTML
import { fieldProps } from './config';
import { getFieldProps } from './helpers';
```

Rename the key in the source file manually.

> **Exception (HTML only):** same-file helper functions spread via `Object.assign` *are* traced. See the HTML table above.

### Non-const and dynamically-constructed spread targets

The local const spread rewrite requires the spread target to be a `const` variable with a plain object literal initializer in the same file. `let` bindings and conditional initializers are not traced in any framework:

```ts
// NOT migrated — let binding
let props = { success: true };

// NOT migrated — conditional initializer
const props = condition ? { success: true } : { success: false };
```

### React: helper-returned JSX spread

The React migrator does not trace function return values at all — neither same-file nor imported helpers are followed when their result is spread directly into JSX:

```tsx
function getFieldProps(values) {
  return { label: 'Subject', success: values.subject.length > 0 };
}

<IfxTextField {...getFieldProps(values)} />  // NOT migrated
```

### React: mapped config arrays

When the renamed prop appears inside an array of config objects that are spread into the component, the migrator leaves those object properties unchanged because tracing the array index to a JSX element requires data-flow analysis:

```jsx
const fields = [
  { label: 'Username', success: true },
  { label: 'Password', success: false },
];

fields.map((field) => <IfxTextField {...field} />);  // NOT migrated
```

### Vue: helper-returned `v-bind`

The Vue migrator does not trace function return values when they are spread via `v-bind`:

```vue
<IfxTextField v-bind="getFieldProps(values)" />  <!-- NOT migrated -->
```

### HTML: `Object.assign` with nested function calls

When a same-file function returns another function's result rather than a direct object literal, the migrator does not trace further:

```ts
const getProps = () => buildProps(values);  // NOT migrated — buildProps not traced
Object.assign(el, getProps());
```

### HTML: `innerHTML` and template literal attributes

Attribute names inside string or template literals are not parsed:

```ts
el.innerHTML = `<ifx-text-field success="true"></ifx-text-field>`;  // NOT migrated
el.innerHTML = '<ifx-text-field success></ifx-text-field>';          // NOT migrated
```

Switch to setting the property directly (`el.valid = true`) before appending the element, or rename the attribute name inside the string manually.

### Angular

Angular projects are not handled by `dds-migrate`. Use `ng update` instead:

```bash
ng update @infineon/infineon-design-system-angular
```

Running `dds-migrate` in an Angular project will exit with an error and print the correct command.


