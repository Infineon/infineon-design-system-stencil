# @infineon/design-system-migrations

Shared migration engine for Infineon Design System codemods. Provides the `dds-migrate` CLI and the underlying parser logic used to automate component property renames across React, Vue, and HTML projects.

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
| Inline static object spread | `<IfxTextField {...{ success: true }} />` | ✅ |
| Mutable local spread object | `let p = { success: true }; <IfxTextField {...p} />` | ❌ |
| Exported local spread object | `export const p = { success: true }; <IfxTextField {...p} />` | ❌ |
| Shared local spread object | `<><IfxTextField {...p} /><OtherComponent {...p} /></>` | ❌ |
| Mapped config array spread | `items.map(i => <IfxTextField {...i} />)` | ❌ |
| Helper-returned spread (same file) | `function f() { return { success }; } <IfxTextField {...f()} />` | ❌ |
| Imported object spread | `import { p } from './c'; <IfxTextField {...p} />` | ❌¹ |
| Imported helper spread | `import { f } from './h'; <IfxTextField {...f()} />` | ❌ |
| Duplicate keys in inline object | `<IfxTextField {...{ success: true, success: false }} />` | ❌² |

¹ Imported, helper-produced, and parameter spreads are diagnosed (`DDS003`,
`DDS004`, or `DDS002`) but not modified. When such an unresolved spread appears
on an element, the migrator also leaves any direct `success` prop on that same
element unchanged, because the spread may already provide `valid`. Safe sibling
elements are still migrated.

² Inline objects with duplicate source or target keys, spread assignments,
computed keys, methods, or accessors are diagnosed (`DDS002`) and left
unchanged. A single source key together with a single target key in the same
object is treated as a definite migration conflict (`DDS001`) and blocks all
disk writes for the step.

### Vue

Prop renames are applied across SFC templates, `<script setup>` blocks, render functions (`h`, `createVNode`), and JSX files. Aliased imports are supported.

| Pattern | Example | Handled |
|---|---|---|
| Explicit attribute binding | `:success="isValid"` | ✅ |
| Static attribute | `success="true"` | ✅ |
| Inline expression | `:success="a.length > 0"` | ✅ |
| Local const `v-bind` object | `const p = { success: true }; <IfxTextField v-bind="p" />` | ✅¹ |
| Helper-returned spread | `v-bind="getProps(values)"` | ❌ |
| Imported object spread | `import { p } from './c'; v-bind="p"` | ❌ |

¹ Vue local `v-bind` object migration applies only to eligible `<script setup>`
bindings. The object must be a non-exported `const` initialized with a plain
object literal (parentheses, `as const`, type assertions, and `satisfies` are
unwrapped). Supported keys are identifier-style, quoted camelCase, quoted
kebab-case, and shorthand properties. The replacement preserves the original
quote style and identifier spelling (for example, `successIndicator` becomes
`validIndicator` and `"success-indicator"` becomes `"valid-indicator"`). The
object must be used only through argumentless `v-bind="obj"` on compatible
target components. Normal multi-alias `v-for` forms such as `(item, index)` and
`(item, key, index)` are parsed, binding-pattern default/computed expressions
participate in reference analysis, and malformed Vue parser input remains
blocking `DDS007`.

| Unsupported Vue pattern | Example | Status |
|---|---|---|
| Mutable local object | `let p = { success: true }; v-bind="p"` | ❌² |
| Exported local object | `export const p = { success: true }; v-bind="p"` | ❌² |
| Imported object | `import { p } from './c'; v-bind="p"` | ❌³ |
| Helper or compiler-macro result | `v-bind="getProps(values)"` | ❌⁴ |
| Member expression | `v-bind="props.success"` | ❌ |
| Inline object | `v-bind="{ success: true }"` | ❌ |
| Classic `<script>` declaration | `<script>const p = { success: true }</script>` | ❌ |
| Spread, computed, method, or duplicate key | `const p = { ...base, success: true }` | ❌² |
| Shared with non-target usage | `<OtherComponent v-bind="p" />` | ❌² |
| Script property read or destructuring | `const { success } = p` | ❌² |
| Template interpolation / directive | `{{ p.success }}`, `:title="p.success"` | ❌² |
| Shadowed by `v-for` / `v-slot` | `<div v-for="p in list">` | ❌² |
| Ambiguous `v-for` / `v-slot` pattern | `<div v-for="{ field: } in list">` | ❌² |

² Diagnosed as `DDS002` and left unchanged. If a local object is used in any
unsupported way, it is marked **contaminated** and the declaration is not edited
for any element — even safe ones. An ambiguous use contaminates any possible
same-name script declaration without proving that declaration unrelated.
Suppression is per-element, so safe sibling and child target elements that do
not depend on the contaminated declaration are still migrated.

Dynamic `v-slot` arguments are parent-scope expressions and participate in
reference safety. Slot-prop binding patterns are analyzed structurally, so
static property names are not treated as references. On an element containing
both `v-if` and `v-for`, the `v-if` expression is evaluated in the parent
scope; expressions on descendant elements see `v-for` and `v-slot` aliases
normally.

³ Imported objects are diagnosed as `DDS003`.

⁴ Helper-returned or compiler-macro objects are diagnosed as `DDS004`.

Per-element conflict projection considers direct props and every resolved local
object together. When an element would receive duplicate target providers after
migration (for example, `success` plus `:valid`, or `success` plus
`v-bind="{ valid: true }"`), the migrator emits `DDS001` and blocks all writes
for that step. Duplicate diagnostics for the same logical issue are emitted
only once.

### HTML / Web Components

Prop renames are applied to HTML attribute names in markup (`success="true"` → `valid="true"`).

| Pattern | Example | Handled |
|---|---|---|
| HTML markup attribute | `<ifx-text-field success="true">` | ✅ |
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

### Non-const and shared spread targets

The React local const spread rewrite requires the spread target to be a non-exported `const` variable with a plain object literal initializer in the same file, used only in supported JSX spreads on target components. `let`/`var` bindings, exported objects, objects shared with non-target components, and conditional initializers are not edited:

```ts
// NOT edited — let binding, but still observed for conflict projection
let props = { success: true };

// NOT edited — exported object, but still observed for conflict projection
export const props = { success: true };

// NOT edited — shared with a non-target component, but still observed
const props = { success: true };
<>
  <IfxTextField {...props} />
  <OtherComponent {...props} />
</>;

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

The `ng update` schematic scans HTML templates (via the Angular compiler) and TypeScript class bodies (via the TypeScript compiler). The remaining limitation is the same cross-file import gap shared by all frameworks: if the prop object or helper function is imported from another module, the migrator does not follow that import.

The `ng update` schematic (`update-v40/index.js`) processes two kinds of files:

- **External HTML templates** (`.html`) — parsed with Angular's own compiler; component attribute bindings and property bindings are renamed.
- **TypeScript files** (`.ts`) — currently only **inline `template` strings** inside component decorators are processed; the component _class body_ is not scanned.

#### Angular — covered patterns

| Location | Pattern | Example | Handled |
|---|---|---|---|
| HTML template | Static attribute | `success="true"` → `valid="true"` | ✅ |
| HTML template | Property binding (literal) | `[success]="true"` | ✅ |
| HTML template | Property binding (variable) | `[success]="showSuccess"` | ✅ |
| HTML template | Property binding (expression) | `[success]="alias().trim().length > 0"` | ✅ |
| HTML template | Property binding (ternary) | `[success]="x ? true : false"` | ✅ |
| HTML template | Property binding (method call) | `[success]="getPasswordSuccess()"` | ✅ |
| HTML template | Property binding (computed signal) | `[success]="computedSuccess()"` | ✅ |
| HTML template | Attribute binding (literal string) | `[attr.success]="'true'"` | ✅ |
| HTML template | Attribute binding (ternary string) | `[attr.success]="x ? '' : null"` | ✅ |
| HTML template | Attribute binding (ternary string 2) | `[attr.success]="x ? 'true' : null"` | ✅ |
| TypeScript | Inline `template` string in decorator | `@Component({ template: '...' })` | ✅ |
Angular TypeScript class bodies are intentionally left unchanged. Use template bindings and attributes for automatic migration; direct DOM APIs and arbitrary property access require manual review.


