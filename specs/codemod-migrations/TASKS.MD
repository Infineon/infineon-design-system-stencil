# Migration MVP — Remaining Tasks

## Goal

Bring the current implementation in line with the reduced MVP defined in `SPEC.MD` and `PLAN.MD`.

The cleanup should:

* remove deferred JSX spread-object migration;
* remove deferred Vue argumentless `v-bind` analysis;
* remove unnecessary revision/mutation abstractions;
* remove code and tests left unused by those cuts;
* preserve direct React, Vue, Angular and HTML migration behavior.

Do not add new migration capabilities during this cleanup.

---

# C1 — Simplify React JSX spread handling

## C1.1 Remove local spread-object migration

Delete:

```text
packages/migrations/lib/adapters/react/local-spreads.ts
```

Remove its use from:

```text
packages/migrations/lib/adapters/react/index.ts
```

React analysis should consist of:

```text
parse file
→ resolve official wrapper imports
→ analyse direct JSX props
```

Remove:

* local spread declaration resolution;
* spread object-key edits;
* reference tracking;
* object-origin classification;
* spread contamination;
* spread-based element suppression;
* projected spread conflicts.

### Keep

```tsx
<IfxTextField success />
```

→ migrate.

```tsx
<IfxTextField {...props} />
```

→ spread remains unchanged.

```tsx
<IfxTextField success {...props} />
```

→ direct `success` still migrates.

### Tests

Update React adapter/unit tests to cover:

* direct property migration;
* alias migration;
* non-target component unchanged;
* direct source + target conflict;
* identifier spread unchanged;
* inline object spread unchanged;
* imported/helper spread unchanged;
* direct prop still migrates when a spread is present.

Remove tests whose purpose is proving:

* local spread resolution;
* reference safety;
* object editing;
* contamination;
* spread-provider projection.

### Done when

```text
local-spreads.ts no longer exists
React adapter does not inspect spread contents
React adapter does not resolve spread origins
all direct React behavior remains green
```

---

# C2 — Simplify Vue JSX spread handling

## C2.1 Remove spread-object editing from Vue JSX

Update:

```text
packages/migrations/lib/adapters/vue/jsx.ts
```

Remove:

* `inspectJsxSpread`;
* inline spread-object property edits;
* spread source/target counting;
* spread-based conflict projection;
* spread-based suppression.

A JSX spread is opaque.

### Required behavior

```tsx
<IfxTextField success />
```

→ migrate.

```tsx
<IfxTextField {...props} />
```

→ unchanged.

```tsx
<IfxTextField {...{ success: true }} />
```

→ unchanged.

```tsx
<IfxTextField success {...props} />
```

→ direct prop migrates.

```tsx
<IfxTextField success valid />
```

→ blocking `DDS001`.

### Tests

Keep/add tests for:

* direct Vue JSX property migration;
* wrapper alias;
* third-party component unchanged;
* spread unchanged;
* inline spread unchanged;
* direct prop + spread;
* direct source/target conflict.

Remove spread-object edit/projection tests.

### Done when

Vue JSX contains no spread-object migration logic.

---

# C3 — Remove shared JSX spread machinery

After C1 and C2, check remaining imports of:

```text
packages/migrations/lib/adapters/shared/jsx-spreads.ts
```

If none remain, delete it.

Remove associated types and tests.

Do not replace it with another abstraction.

### Done when

```text
jsx-spreads.ts no longer exists
no spread-object analysis helper replaces it
```

---

# C4 — Simplify Vue template collection

## C4.1 Stop collecting data for indirect `v-bind`

Update:

```text
packages/migrations/lib/adapters/vue/template.ts
```

Reduce template analysis to what direct property migration needs:

* element identity;
* direct source prop;
* direct target prop;
* statically named `v-bind`;
* traversal of descendants;
* parser diagnostics.

Remove data structures used only by deferred object analysis, including where no longer needed:

```text
ArgumentlessBinding
UnsupportedArgumentlessBinding
ObservedTemplateExpression
PatternExpression
PatternAnalysis
scopeBindings
scopeAmbiguous
```

Argumentless:

```vue
<ifx-text-field v-bind="props" />
```

should simply be ignored for migration purposes.

A cheap warning may remain only if it requires no scope/dataflow model.

### Important

Still traverse:

```vue
<template v-for="item in items">
  <ifx-text-field :success="item.valid" />
</template>
```

The expression is irrelevant to the migration.

Only rename the statically known binding name.

### Done when

`template.ts` does not model Vue lexical scope.

---

# C5 — Remove Vue `v-for` / `v-slot` scope analysis

Delete all code whose only purpose is determining visibility/shadowing of indirect prop-object bindings.

Remove:

* `analyseBindingPattern`;
* `parseVForExpression`;
* `v-for` alias extraction;
* `v-slot` binding extraction;
* dynamic slot argument scope handling;
* default/computed slot expression reference tracking;
* same-node `v-for`/`v-slot` ordering logic;
* scope ambiguity propagation.

Do not replace this with a simpler custom scope model.

### Preserve

Traversal must still find direct target elements inside these constructs.

### Tests

Delete scope-analysis tests.

Replace them with a few traversal tests:

```text
direct prop inside v-for migrates
direct prop inside v-slot migrates
nested template direct prop migrates
```

### Done when

Vue template migration does not need TypeScript parsing merely to understand template scopes.

---

# C6 — Remove Vue local `v-bind` resolution

Delete:

```text
packages/migrations/lib/adapters/vue/local-bindings.ts
```

Remove imports and integration from:

```text
packages/migrations/lib/adapters/vue/index.ts
```

Delete behavior for:

* resolving `<script setup>` declarations;
* identifying `const` object literals;
* unwrapping `as const`, assertions or `satisfies`;
* object key inspection;
* shorthand rewriting;
* imported/helper/local classification;
* reference-safety analysis;
* contamination propagation;
* declaration edits;
* per-element provider projection.

The Vue SFC flow should become approximately:

```text
parse SFC
   ↓
analyse direct template syntax
   ↓
analyse supported script JSX/render syntax
   ↓
merge analyses
```

### Done when

Argumentless `v-bind` objects cannot cause declaration edits.

---

# C7 — Simplify Vue diagnostics

After removing local-binding analysis, review:

```text
DDS002
DDS003
DDS004
```

Expected target:

```text
DDS002
```

may remain as the generic warning for an indirect/ambiguous provider.

Remove:

```text
DDS003 IMPORTED_PROP_OBJECT_UNSUPPORTED
DDS004 HELPER_PROP_OBJECT_UNSUPPORTED
```

if no remaining production path emits them.

Update:

```text
packages/migrations/lib/core/diagnostic.ts
```

and corresponding tests.

Do not keep diagnostic codes solely because historical tests reference them.

### Done when

Diagnostic codes correspond to actual MVP behavior.

---

# C8 — Remove spread / indirect-binding fixtures and tests

Clean:

```text
packages/migrations/tests/
packages/migrations/tests/fixtures/
```

Delete fixtures whose only purpose is testing automatic indirect object migration.

Likely candidates include the current:

```text
react-text-field-success-local-spread-project
react-text-field-success-spread-noop-project
vue-sfc-success-local-spread-project
vue-sfc-success-import-spread-noop-project
react-u2.integration.test.ts
vue-u4.integration.test.ts
```

Do not blindly delete every no-op spread fixture.

Retain or replace a minimal fixture proving:

```text
spread remains unchanged
direct syntax elsewhere still migrates
```

Target coverage should be much smaller:

### React

```text
direct
alias
non-target
direct conflict
opaque spread
```

### Vue template

```text
direct static
direct named binding
PascalCase/kebab-case target
nested traversal
direct conflict
opaque argumentless v-bind
```

### Vue JSX/render

```text
direct JSX
alias
opaque spread
direct render object
```

### Done when

Tests describe supported behavior, not deferred implementation internals.

---

# C9 — Remove stale revision checking from the core

Update:

```text
packages/migrations/lib/core/types.ts
packages/migrations/lib/core/workspace.ts
```

Remove:

```ts
FileAnalysis.baseRevision
WorkspaceFile.revision
```

Remove:

```text
DDS009 STALE_FILE_ANALYSIS
```

Delete revision mismatch validation.

The operation execution model remains sequential:

```text
read currentContent
→ analyse operation
→ validate edits
→ update currentContent
→ next operation
```

Because analysis and application happen synchronously within the orchestrator, an explicit revision token is unnecessary for the MVP.

### Update adapters

Remove `baseRevision` parameters and properties from:

```text
React
Vue
HTML
rename-prop adapter contract
executor
tests
```

Angular has its own staged-file implementation; do not change it merely for symmetry unless it contains the same unused revision abstraction.

### Tests

Keep tests proving:

* operation 2 sees operation 1 output;
* later operation failure leaves disk unchanged;
* conflict prevents all writes.

Remove stale-revision tests.

### Done when

No `baseRevision`, `.revision` or `DDS009` remains in standalone migration production code.

---

# C10 — Remove generic `"modify"` file intent

The standalone MVP modifies existing files only.

Update:

```text
FileAnalysis
```

from:

```ts
{
  kind: "modify";
  ...
}
```

to:

```ts
{
  filePath: string;
  content: string;
  edits: TextEdit[];
  changes: string[];
  diagnostics: MigrationDiagnostic[];
}
```

Remove:

```text
kind: "modify"
```

from all adapters and tests.

Do not add a replacement file-operation enum.

### Done when

The analysis model represents exactly what the MVP does: analyse edits to existing text files.

---

# C11 — Remove nullable create/delete-style plan state

Review:

```text
PlannedFileChange
```

Current nullable forms such as:

```ts
originalContent: string | null;
updatedContent: string | null;
```

should become:

```ts
originalContent: string;
updatedContent: string;
```

if no current production path creates or deletes files.

Update plan/application logic accordingly.

Do not introduce:

```text
create
delete
rename
move
```

intents.

### Tests

Keep:

* planned modifications;
* dry-run;
* transactional apply;
* unchanged files;
* write failure reporting.

Remove hypothetical create/delete cases if they exist.

### Done when

The standalone plan model only represents modifications to existing files.

---

# C12 — Simplify `VirtualWorkspace`

After C9–C11, review:

```text
packages/migrations/lib/core/workspace.ts
```

Target state:

```ts
interface WorkspaceFile {
  filePath: string;
  originalContent: string;
  currentContent: string;
  operationIds: string[];
  changes: string[];
}
```

`VirtualWorkspace` only needs to support:

```text
load/read current content
apply validated operation edits
reset if still required
return staged files
```

Check whether both interface definitions currently living in:

```text
core/types.ts
core/workspace.ts
```

are still necessary.

Keep one canonical type definition.

Do not turn this into another generic workspace framework.

### Done when

`workspace.ts` is a small in-memory content composer rather than a versioned mutation engine.

---

# C13 — Remove legacy runners

After adapter simplification, inspect:

```text
packages/migrations/lib/runners/
```

Current branch still contains:

```text
runners/jsx.ts
runners/legacy-types.ts
runners/shared/
runners/vue/
```

Check imports.

Delete anything no longer used by production or retained tests.

If an adapter still relies on a useful helper, move that specific helper into:

```text
lib/adapters/shared/
```

rather than retaining a legacy runner architecture.

### Done when

There is one framework architecture:

```text
operations
→ adapters
```

not both `runners` and `adapters`.

---

# C14 — Remove dead helpers/types after the feature cuts

Run an import/use audit after C1–C13.

Remove:

* unused source-range/provider types;
* obsolete diagnostic helpers;
* old spread utilities;
* legacy fixtures;
* unused test helpers;
* unused exports;
* duplicate interfaces.

Do not perform speculative refactoring of code that is still actively used.

This task should mostly be deletion.

---

# C15 — Simplify documentation structure

Keep only:

```text
specs/codemod-migrations/
├── SPEC.MD
├── PLAN.MD
└── TASKS.MD
```

Delete:

```text
u4-plan.md
u5-plan.md
u6-plan.md
```

Do not create replacement `uX-plan.md` files.

Git history preserves the implementation plans.

Update:

```text
packages/migrations/README.md
packages/wrapper-angular/README.md
```

so the documented support matrix matches the reduced MVP.

Explicitly document:

```text
React JSX spreads              unchanged
Vue JSX spreads                unchanged
Vue argumentless v-bind        unchanged
v-for/v-slot direct props      supported
generic JS property access     unchanged
Angular dynamic inline template DDS011
Angular unsupported binding     DDS010
```

---

# C16 — Final regression pass

Run the complete migration-package test suite.

Verify:

## React

```text
direct JSX
alias
third-party/non-target
direct conflict
opaque spread
idempotency
```

## Vue

```text
direct template
named v-bind
nested traversal
PascalCase/kebab-case
direct conflict
opaque argumentless v-bind
direct JSX
direct render function
idempotency
```

## HTML

```text
direct attribute
nested/template traversal
non-target
conflict
idempotency
```

## Angular

Keep the completed U6 tests green:

```text
manifest
diagnostics
edits
template
TypeScript
registry
staging
packaging
installed factory
ng update
idempotency
consumer builds
```

## Core

Verify:

```text
ordered release execution
operation 2 sees operation 1 output
blocking error prevents writes
dry-run matches apply plan
unchanged files remain byte-identical
```

---

# C17 — Manual canary verification

After the cleanup is complete and CI is green:

1. publish/use the PR canary;
2. test at least one representative direct property rename;
3. include a file containing an indirect spread or `v-bind`;
4. verify indirect syntax remains unchanged;
5. verify direct syntax still changes;
6. run the migration again;
7. verify no additional changes;
8. build the consumer.

Do not add new CI infrastructure solely to automate this release check.

---

# Recommended commit order

```text
C1  React spread cleanup
C2  Vue JSX spread cleanup
C3  shared spread helper deletion

C4  Vue template collection simplification
C5  Vue scope-analysis deletion
C6  Vue local-binding deletion
C7  diagnostic cleanup
C8  fixture/test cleanup

C9  revision removal
C10 modify-kind removal
C11 nullable plan-state removal
C12 workspace simplification

C13 legacy runners
C14 dead-code cleanup

C15 docs/spec cleanup
C16 final regression
C17 canary
```

The important review boundaries are:

```text
1. JSX simplification
2. Vue template simplification
3. Core model simplification
4. Dead-code/documentation cleanup
```

Do not mix those four groups into one large commit.