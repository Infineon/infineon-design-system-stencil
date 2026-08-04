# U4 Implementation Plan — Vue same-file `v-bind` objects

Status: IN PROGRESS

## Goal

Add safe migration support for Vue SFC prop objects used through argumentless `v-bind`, while preserving the existing U3 behavior for direct template props.

Supported MVP shape:

```vue
<script setup lang="ts">
const props = {
  success: true,
};
</script>

<template>
  <IfxTextField v-bind="props" />
</template>
```

The migration may rename `success` to `valid` only when the binding can be resolved safely and every use of the object is compatible. Malformed Vue parser input remains blocking `DDS007`; only custom scope-analysis uncertainty is warning-only `DDS002`.

## Scope decisions

1. Only unique top-level bindings declared in `<script setup>` are eligible.
2. The declaration must be a non-exported `const` with a plain object-literal initializer.
3. Parentheses, `as const`, type assertions, and `satisfies` may be unwrapped when the underlying initializer is still a plain object literal.
4. Classic `<script>`, `setup()` return values, Options API state, imports, calls, member expressions, and cross-file tracing remain unsupported.
5. Every script and template reference to the binding must be understood and safe.
6. Direct template props and all `v-bind` providers on the same target element must be projected together before edits are generated.
7. If one use of a shared object is unsafe or conflicting, the declaration is not edited for any use.
8. Component instances are independent: providers on separate elements do not conflict unless they share a contaminated declaration.

## Commit 1 — Lock the U4 contract in specs and tests

### Changes

- Update `specs/codemod-migrations/SPEC.MD` and `TASKS.MD` with the scope decisions above.
- Clarify that U4 supports top-level `<script setup>` bindings only.
- Document per-element conflict projection and declaration contamination.
- Add an empty `vue-u4.integration.test.ts` suite with named test groups for:
  - safe migrations;
  - unsupported bindings;
  - reference safety;
  - conflicts;
  - chained releases;
  - idempotency and formatting.
- Remove `void directorySearchProps` from the existing positive local-spread fixture.

### Acceptance

- Documentation no longer implies that arbitrary same-file `const` declarations are supported.
- Test names describe the complete expected behavior before implementation begins.
- Existing tests remain green.

## Commit 2 — Refactor Vue template handling into collection and emission

### Changes

Refactor `adapters/vue/template.ts` so it no longer emits U3 edits during the first traversal.

Introduce a template analysis model containing, per element:

- element range;
- resolved target-component identity;
- direct source prop range;
- direct target prop range;
- argumentless `v-bind` expressions;
- dynamic or otherwise unsupported bindings;
- template-scope information required for shadowing checks.

Split the flow into functions similar to:

```ts
collectVueTemplate(...): VueTemplateCollection
projectVueTemplate(...): FileAnalysis | null
```

For this commit, projection should reproduce existing U3 direct-prop behavior exactly when no argumentless object binding participates.

### Acceptance

- All existing U3 adapter and integration tests pass unchanged.
- Direct static and bound props still produce exact range edits.
- Existing direct source/target conflicts still produce `DDS001`.
- No U4 object declaration is edited yet.

## Commit 3 — Resolve eligible `<script setup>` bindings and object shapes

### Changes

Add `adapters/vue/local-bindings.ts`.

Implement resolution for exact `v-bind="identifier"` expressions:

- Resolve only a unique top-level declaration in `<script setup>`.
- Reject bindings shadowed by `v-for`, `v-slot`, or shorthand slot scopes.
- Require `const`.
- Reject exported declarations.
- Unwrap transparent TypeScript wrappers.
- Require a plain object literal.

Inspect object keys using both framework spellings:

- camelCase keys for JavaScript-facing props;
- quoted camelCase keys;
- quoted kebab-case keys.

Support:

- property assignments;
- quoted keys while preserving quote style;
- shorthand properties by rewriting `{ success }` to `{ valid: success }`.

Classify unsupported origins:

- imported binding → `DDS003`;
- call/compiler-macro/parameter/non-literal initializer → `DDS004`;
- unresolved or ambiguous local binding → `DDS002`.

Reject unsupported object shapes with `DDS002`:

- spread assignments;
- any computed key, including `["success"]`;
- methods and accessors;
- duplicate source or duplicate target keys.

### Acceptance

- Safe object declarations are resolved but not yet edited.
- Imported, call-produced, mutable, exported, and malformed objects emit the expected warning code.
- Source and target keys are detected across camelCase and kebab-case spellings.
- Existing Vue parsing failures still produce blocking `DDS007` with absolute SFC offsets.

## Commit 4 — Add complete reference-safety analysis

### Changes

For every resolved local object, collect all references in both script setup and template.

Allow only:

- the declaration identifier itself;
- argumentless `v-bind="identifier"` usages on compatible target components.

Treat all other references as unsafe, including:

- use on native, third-party, or different DDS components;
- interpolation or directive expressions;
- property reads such as `props.success`;
- destructuring such as `const { success } = props`;
- function arguments, returns, aliases, spreads, assignments, watchers, or exposure;
- template-local bindings that shadow the script identifier.

Mark the declaration as contaminated when any unsupported reference exists. Emit one deterministic `DDS002` warning per declaration, pointing to the first unsupported use or declaration as appropriate.

### Acceptance

- One object used by several compatible target elements remains eligible.
- One incompatible use prevents editing the declaration everywhere.
- Separate safe objects on separate component instances do not affect one another.
- Warnings do not block unrelated safe file changes.

## Commit 5 — Implement combined per-element conflict projection

### Changes

Project all property providers for each target element before emitting edits:

- direct source prop;
- direct target prop;
- each resolved local binding containing the source prop;
- each resolved local binding containing the target prop;
- unresolved or unsafe bindings.

Emit `DDS001` when the same element would receive duplicate target providers after migration, including:

- direct source plus direct target;
- direct source plus object target;
- direct target plus object source;
- direct source plus object source;
- two source-providing objects;
- source-providing and target-providing objects;
- one object containing both source and target.

Suppress edits on an element containing an unresolved or unsafe binding because it may already provide the target prop.

Apply the contamination rule:

- if a local declaration participates in any suppressed or conflicting element, do not edit that declaration for any other element;
- a conflict produces a blocking error for the full migration plan;
- a warning-only unsafe element may coexist with safe sibling edits that do not depend on the contaminated declaration.

### Acceptance

- Conflict projection is element-local.
- Objects used on separate elements do not conflict merely because their keys match.
- A shared object is withheld globally when one of its uses is unsafe.
- One `DDS001` blocks all project writes through the existing transactional plan.
- U3 direct edits are no longer emitted on elements suppressed by U4 analysis.

## Commit 6 — Generate declaration edits and integrate the adapter

### Changes

Generate exact source-range edits only after collection, resolution, reference analysis, and conflict projection succeed.

- Edit each eligible declaration key once, even when used by several elements.
- Preserve quote style, comments, whitespace, and line endings.
- Convert shorthand source keys to explicit target/value pairs.
- Deduplicate change labels and diagnostics.
- Adjust script-block edits and diagnostic locations to absolute SFC offsets.
- Integrate `local-bindings.ts` into `VueRenamePropAdapter.analyseVueSfc()`.
- Keep JSX and render-function analyses unchanged, but merge them with the completed template/local-binding analysis.

### Acceptance

- The basic U4 scenario migrates.
- Multiple compatible uses produce exactly one declaration edit.
- Existing U3, JSX, and render-function behavior remains green.
- No overlapping edits are generated.
- Running the same migration again is a no-op.

## Commit 7 — Complete integration coverage, fixtures, and documentation

### Tests

Add integration coverage for:

### Safe behavior

- basic local object;
- PascalCase and kebab-case components;
- repeated compatible uses;
- identifier, quoted, kebab-case, camelCase, and shorthand keys;
- `as const`, type assertion, and `satisfies` wrappers;
- `<script setup generic="...">`;
- TSX script content plus template-bound local object;
- chained release migration;
- full-plan idempotency.

### Warning-only behavior

- `let`/`var`;
- exported object;
- imported object;
- helper or compiler-macro result;
- member-expression and inline-object bindings;
- classic `<script>` declaration;
- unsupported object shape;
- shared non-target usage;
- script property read or destructuring;
- template interpolation/directive use;
- `v-for` and `v-slot` shadowing;
- unresolved declaration.

### Blocking conflicts

- source and target in one object;
- direct source/object target;
- direct target/object source;
- direct source/object source;
- two bound objects on the same element;
- conflict in one file blocking a safe file;
- later chained release discovering an intermediate conflict.

For the chained conflict, verify that disk content remains at the original source state:

```text
40.0.0: success → valid
41.0.0: valid → state
```

with an existing `state` key in the object.

### Documentation

- Mark Vue local `v-bind` objects as supported in `packages/migrations/README.md`.
- Document the exact supported shape and unsupported patterns.
- Explain warning codes and the contamination rule.
- Keep cross-file tracing, classic `<script>`, Options API, helper-return tracing, and dynamic component identity listed as limitations.

### Acceptance

- `pnpm --dir packages/migrations check` passes.
- All U1–U4 integration suites pass.
- Packed-package smoke coverage still passes.
- README examples match tested behavior.

## Follow-up fixes applied after initial implementation

The following refinements were made to the U4 adapter after the first
implementation pass to make the safety model explicit and to fix regressions
found in review.

### Binding safety explicitness

`ResolvedLocalBinding` now carries explicit `safeToProject` and `editable`
flags. The previous `observable` flag was removed because it conflated
"can participate in conflict projection" with "can be edited". A binding is
projectable when it is a `const`, non-exported, plain object; it is editable
only when it additionally contains exactly one source key.

### Conflict ordering

Per-element conflict projection now checks for known conflicts (`DDS001`)
before falling back to unknown-provider suppression (`DDS002`). This keeps
blocking errors blocking and prevents an unsafe provider from downgrading a
definite conflict to a warning.

### JavaScript key spelling

`buildDeclarationPropertyEdit` uses the source property name node to decide
whether the replacement should be camelCase (for identifiers) or the exact
target spelling (for quoted kebab-case keys). Quoted camelCase keys keep their
quotes. Shorthand properties are expanded to `target: value`.

### Template scope parsing

`v-for` and `v-slot` scope patterns are parsed by wrapping the pattern source
in a TypeScript variable declaration and inspecting the resulting AST. Patterns
that cannot be parsed emit one `DDS002` diagnostic and suppress local
prop-object migration for the affected subtree. Rest, default-value, and nested
destructuring patterns are supported; malformed patterns are diagnosed.

Dynamic `v-slot` arguments normally use the surrounding parent scope and
participate in reference safety. When `v-slot` shares a non-conditional
`<template>` element with `v-for`, the `v-for` aliases are visible to the
dynamic slot argument and to slot-prop default/computed expressions. Slot-prop
binding patterns are analyzed structurally, so static property names are not
references. For conditional slot branches using `v-if`, `v-else-if`, or
`v-else`, the dynamic slot argument remains in the conditional branch's parent
scope. On an element containing both `v-if` and `v-for`, the conditional
expression is evaluated in the parent scope, while expressions on descendant
elements see the aliases introduced by `v-for` and `v-slot` normally.

### Exact element suppression

Suppression uses stable element IDs rather than source ranges. This allows a
suppressed element to coexist with safe siblings and children: only the
suppressed element is withheld from direct-prop edits, and safe target elements
elsewhere in the template still migrate.

### Diagnostic deduplication

Diagnostics produced by the adapter are deduplicated in `mergeAnalyses` using a
key built from code, operation ID, file path, start, end, and message. This
prevents duplicate `DDS002` warnings when the same unsafe binding is referenced
multiple times.

### Same-node `v-for` and `v-slot` scope

`ElementScopeExtraction` now keeps `v-for` and `v-slot` bindings in separate
sets. Directives are parsed in deterministic phases (`v-for` first, then
`v-slot`) so attribute order does not affect scope analysis. `v-for` aliases are
visible to the dynamic slot argument and to slot-prop default/computed
expressions on the same non-conditional `<template>` element. The final child
scope merges both sets so the slot body sees `v-for` aliases and slot-prop
bindings. Conditional branches (`v-if`, `v-else-if`, `v-else`) keep the dynamic
slot argument in the parent scope. Template-local aliases used as argumentless
`v-bind` on target components cannot be migrated automatically and emit one
`DDS002` warning per affected element; they are not linked to same-named script
declarations, so safe outer script objects can still migrate.

### Regression coverage

New integration tests were added for:

- provider safety (`let`, exported, malformed, safe unrelated);
- known conflicts (direct source + object target/source);
- property spelling preservation;
- complex template scopes (destructuring, shadowing, malformed scopes);
- nested element suppression (parent/child and sibling independence);
- diagnostic deduplication;
- same-node `v-for` and `v-slot` scope (dynamic slot argument, slot defaults,
  conditional precedence, and directive-order independence).

## Review guidance

Review the commits in order. The highest-risk commits are:

1. Commit 2, because it changes when U3 edits are emitted.
2. Commit 5, because it defines the safety and conflict semantics.
3. Commit 6, because it combines template and script edits in one SFC analysis.

Avoid combining these commits. Keeping the refactor, safety model, and edit generation separate makes regressions easier to identify and keeps each review focused.
