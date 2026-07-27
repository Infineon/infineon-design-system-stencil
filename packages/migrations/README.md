# @infineon/design-system-migrations

Shared migration engine for Infineon Design System codemods. Provides the `dds-migrate` CLI and the underlying transform logic used to automate component property renames across React, Vue, and HTML projects.

## Usage

Run without installing via `npx`:

```bash
npx @infineon/design-system-migrations [--framework react|vue|html|angular] [--dry-run] [--config <path>]
```

If the package is installed locally, the shorter `npx dds-migrate` form also works.

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
- Safe same-file local prop objects used by supported component spreads

| Pattern | Example | Handled |
|---|---|---|
| HTML markup attribute | `<ifx-text-field success="true">` | ✅ |

JavaScript and TypeScript property access, `setAttribute`, `Object.assign`, inline scripts, and markup stored in strings are unchanged.

## Known limitations

### Cross-file imports are not traced

All frameworks only trace spread sources **defined in the same file**. When the prop object or helper function is imported from another module, the migrator does not follow the import — regardless of framework:

```ts
// NOT migrated in React, Vue, or HTML
import { fieldProps } from './config';
import { getFieldProps } from './helpers';
```

Rename the key in the source file manually.

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

### Angular

Angular projects are not handled by `dds-migrate`. Use `ng update` instead:

```bash
ng update @infineon/infineon-design-system-angular
```

Running `dds-migrate` in an Angular project will exit with an error and print the correct command. Angular schematic changes are maintained by the Angular wrapper and are outside this package's S1 scope.


