# Property Rename Migration MVP — Architecture Plan

## 1. Goal

Provide a maintainable migration architecture for safe, versioned design-system property renames across:

* React;
* Vue;
* Angular;
* plain HTML.

The architecture should support the first production migration without carrying machinery for syntax or operation types that are not currently needed.

The guiding rule is:

> Keep the safety architecture. Remove speculative coverage.

The normative behavior is defined in `SPEC.MD`. This document describes the intended implementation structure.

---

# 2. Architecture principles

## 2.1 One canonical migration manifest

The canonical migration definitions live at:

```text
packages/migrations/migrations/manifest.json
```

The manifest groups operations by release:

```ts
interface MigrationManifest {
  schemaVersion: 1;
  releases: MigrationRelease[];
}

interface MigrationRelease {
  version: string;
  operations: MigrationOperation[];
}
```

The MVP supports:

```ts
type MigrationOperation = RenamePropOperation;
```

Angular receives a packaged copy of the canonical manifest.

Do not maintain separate semantic migration definitions for Angular.

---

## 2.2 Keep the executor boundary

Selected operations are dispatched through a small static registry:

```text
rename-prop
    ↓
RenamePropExecutor
```

The registry exists so the core execution flow is not coupled directly to property-name renames.

It must remain:

* internal;
* static;
* package-owned;
* deterministic.

Do not add:

* public registration;
* manifest-provided executable paths;
* dynamic executor loading;
* plugin APIs;
* dependency injection.

A future operation such as `rename-prop-value` may add its own executor and adapter contract without changing the release-selection or plan infrastructure.

---

## 2.3 Framework adapters own syntax

The shared core defines migration semantics:

```text
release
  ↓
operation
  ↓
component
  ↓
source property
  ↓
target property
```

Framework adapters determine how that operation appears in source code.

The rename-property adapters are responsible for:

* file collection;
* framework parsing;
* component identity;
* locating direct property occurrences;
* producing exact source edits;
* detecting framework-specific direct conflicts;
* producing diagnostics.

They do not write files.

The core must not contain React-, Vue-, Angular- or HTML-specific AST logic.

---

# 3. Standalone execution model

React, Vue and HTML use the standalone migration package.

The execution flow is:

```text
CLI
 ↓
detect project/framework
 ↓
resolve upgrade range
 ↓
load canonical manifest
 ↓
select releases
 ↓
flatten ordered operations
 ↓
preflight executor registry
 ↓
execute each operation against staged content
 ↓
build final migration plan
 ↓
validate diagnostics
 ↓
dry-run or apply
```

No adapter writes files during analysis.

---

# 4. Release selection

For the standalone CLI, select releases satisfying:

```text
from < release <= to
```

Execute selected releases in ascending semantic-version order.

Preserve operation order within each release.

The version model must distinguish:

```text
declared dependency range
installed/source version
migration target version
```

Source-version resolution is:

```text
explicit --from
    ↓
pnpm-lock.yaml
    ↓
exact package.json declaration
    ↓
failure requesting --from
```

Target resolution is:

```text
explicit --to
    ↓
installed migration-package version
```

Do not infer an installed version from a broad dependency range.

---

# 5. In-memory operation composition

Multiple operations may affect the same file.

Keep one staged representation per file:

```ts
interface StagedFile {
  filePath: string;
  originalContent: string;
  currentContent: string;
  operationIds: string[];
  changes: string[];
}
```

Execution is:

```text
originalContent
      ↓
operation 1 analyses
      ↓
currentContent
      ↓
operation 2 analyses
      ↓
currentContent
      ↓
...
      ↓
final planned content
```

Later operations must see earlier projected edits.

Disk remains unchanged until all selected operations have been analysed successfully.

This composition model is required.

The following are not:

```text
revision counters
stale-analysis detection
generic create/delete intents
file mutation subclasses
rollback snapshots per operation
persistent migration state
```

---

# 6. File analysis model

The rename-property adapters return:

```ts
interface FileAnalysis {
  filePath: string;
  content: string;
  edits: TextEdit[];
  changes: string[];
  diagnostics: MigrationDiagnostic[];
}
```

The intended simplified model does not require:

```ts
kind: "modify"
baseRevision
```

because the MVP only modifies existing text files and operations are analysed sequentially against the current staged content.

Edits use exact source ranges:

```ts
interface TextEdit {
  start: number;
  end: number;
  replacement: string;
  operationId: string;
}
```

The core validates and applies these edits.

---

# 7. Edit handling

Source-range edits are the common mutation representation.

They must:

* use valid offsets;
* avoid incompatible overlaps;
* preserve unaffected source bytes;
* apply deterministically.

Edits are applied from highest offset to lowest offset.

Do not introduce complete-file AST printing when a property-name range is sufficient.

Framework parsers are used for recognition and safety, not for broad source regeneration.

---

# 8. Diagnostics

Diagnostics remain structured:

```ts
interface MigrationDiagnostic {
  code: string;
  severity: "warning" | "error";
  message: string;
  operationId?: string;
  filePath?: string;
  start?: number;
  end?: number;
  suggestion?: string;
}
```

The core owns:

* deterministic ordering;
* blocking-error detection;
* plan-level aggregation.

Framework adapters own framework-specific diagnostic production.

Blocking errors prevent all writes.

Warnings do not block independent safe changes.

After indirect object analysis is removed, the core does not need separate runtime behavior for:

```text
local prop object
imported prop object
helper-produced prop object
```

Those distinctions belong to the deferred feature, not the MVP.

---

# 9. React adapter

Target structure:

```text
adapters/react/
├── index.ts
├── imports.ts
└── jsx.ts
```

Retain:

* TypeScript parsing;
* official wrapper import resolution;
* aliased import resolution;
* direct JSX prop analysis;
* exact source-range edits;
* direct source/target conflict detection.

Remove from the active MVP:

```text
local-spreads.ts
shared spread-object analysis
object declaration editing
spread origin classification
spread reference tracking
multi-provider projection
spread contamination
element suppression caused by spread contents
```

A JSX spread is opaque.

Example:

```tsx
<IfxTextField {...props} />
```

produces no spread edit.

Direct syntax remains independently analysable:

```tsx
<IfxTextField success {...props} />
```

The explicit `success` prop may still become `valid`.

---

# 10. Vue adapter

Target responsibilities should be separated by syntax:

```text
adapters/vue/
├── index.ts
├── imports.ts
├── template.ts
├── jsx.ts
└── render-functions.ts
```

Retain:

* Vue SFC parsing;
* direct template props;
* statically named `v-bind`;
* direct JSX props;
* direct render-function object-literal props;
* wrapper component identity;
* aliases;
* source-range edits;
* direct source/target conflicts.

Remove from the active MVP:

```text
local-bindings.ts
argumentless v-bind resolution
script-setup prop-object editing
reference-safety analysis
origin classification
v-for alias modelling
v-slot scope modelling
contamination propagation
multi-provider projection
indirect object conflict reasoning
```

Vue template traversal must still descend through constructs such as:

```text
v-if
v-for
v-slot
template
```

but it does not need to understand their lexical scope merely to migrate direct props.

Argumentless:

```vue
<ifx-text-field v-bind="props" />
```

is opaque.

---

# 11. HTML adapter

Keep the HTML implementation narrow.

Target structure:

```text
adapters/html/
├── index.ts
└── template.ts
```

Retain:

* `.html` and `.htm` collection;
* parse5;
* exact custom-element matching;
* exact attribute-name ranges;
* nested traversal;
* `<template>` traversal;
* direct source/target conflict detection.

Do not restore:

```text
JavaScript property access
setAttribute rewriting
Object.assign rewriting
inline script analysis
markup-string analysis
receiver inference
```

The HTML adapter should remain the simplest framework adapter.

---

# 12. Angular architecture

Angular remains a separate package integration because Angular CLI owns update sequencing.

Structure:

```text
wrapper-angular/
└── migrations/
    ├── migrations.json
    ├── shared/
    │   └── manifest.json
    ├── lib/
    │   ├── manifest.js
    │   ├── diagnostics.js
    │   ├── edits.js
    │   ├── angular-adapter.js
    │   ├── executor-registry.js
    │   ├── rename-prop-executor.js
    │   └── staged-files.js
    └── releases/
        └── v40/
            └── index.js
```

Angular uses the same architecture concepts:

```text
release operations
    ↓
static registry
    ↓
rename-prop executor
    ↓
Angular adapter
    ↓
staged content
    ↓
tree overwrites after successful analysis
```

Do not force Angular through the standalone CLI's full version-resolution model.

Angular CLI decides which migration factory executes.

The release factory loads the operations for its exact release.

---

# 13. Angular packaging

The wrapper package must contain:

```text
migrations/migrations.json
migrations/shared/manifest.json
release factory
required migration runtime files
```

The wrapper build copies the canonical manifest.

CI verifies that the copy is synchronized.

Verification must not modify repository files.

Packaging validation remains generic and should not hardcode the current migration release into production prepack logic.

Synthetic/current release versions may be used by tests.

---

# 14. Testing strategy

Tests should mirror architectural risk.

## 14.1 Fast portable tests

Run on Linux and Windows:

```text
manifest
release selection
version resolution
diagnostics
edit application
framework direct syntax
component identity
registry
staged composition
transaction behavior
```

These tests should not require package-manager process orchestration.

## 14.2 Linux integration tests

Run packaging and installed execution on Linux:

```text
npm package contents
prepack validation
installed runtime resolution
packed CLI execution
packed Angular factory
real ng update
idempotency
representative consumer builds
```

Do not create Windows-specific npm/pnpm process-launch infrastructure solely for this test layer.

## 14.3 Manual canary validation

Before a stable release containing migrations:

```text
publish PR canary
 ↓
install actual published artifact
 ↓
run migration
 ↓
inspect changes
 ↓
run migration again
 ↓
build consumer
```

This verifies the real publication artifact without making CI responsible for every possible packaging environment.

---

# 15. File collection

Standalone adapters use the shared collector where possible.

Exclude generated and dependency directories:

```text
.git
node_modules
dist
build
coverage
.angular
.next
.nuxt
```

Respect the project-root `.gitignore`.

Skip binary files.

Framework adapters then narrow by extension.

Do not add framework-specific filesystem walkers unless necessary.

---

# 16. Target package structure

After simplification, the migration package should approximately converge toward:

```text
packages/migrations/
├── bin/
│   └── dds-migrate.mjs
├── lib/
│   ├── cli/
│   ├── core/
│   │   ├── diagnostic.ts
│   │   ├── edit.ts
│   │   ├── executor-registry.ts
│   │   ├── manifest.ts
│   │   ├── plan.ts
│   │   ├── select-releases.ts
│   │   └── workspace.ts
│   ├── project/
│   ├── operations/
│   │   └── rename-prop/
│   └── adapters/
│       ├── shared/
│       ├── react/
│       ├── vue/
│       └── html/
├── migrations/
│   └── manifest.json
└── tests/
```

The exact filenames are not contractual.

The important dependency direction is:

```text
CLI
 ↓
core + project
 ↓
executor
 ↓
operation-specific adapters
```

Core modules must not depend on framework implementations.

---

# 17. Cleanup targets

The branch still contains functionality that predates the reduced MVP.

Simplification should happen in this order.

## C1 — JSX spread cleanup

Remove automatic spread-object handling from:

```text
React JSX
Vue JSX
```

Delete unused shared spread helpers and spread-specific fixtures/tests.

Keep direct JSX migration behavior unchanged.

## C2 — Vue indirect-binding cleanup

Remove:

```text
local binding resolution
argumentless v-bind object editing
v-for/v-slot scope analysis
reference analysis
contamination
provider projection
```

Keep direct Vue template behavior unchanged.

## C3 — Core staging cleanup

Remove:

```text
baseRevision
WorkspaceFile.revision
DDS009 stale-analysis behavior
kind: "modify"
nullable content used for hypothetical create/delete operations
```

Keep:

```text
originalContent
currentContent
operationIds
changes
transactional analyse-before-write behavior
```

## C4 — Legacy cleanup

After C1–C3:

* remove unused legacy runners;
* remove obsolete helpers;
* remove deferred-feature fixtures;
* remove obsolete diagnostics if no longer referenced;
* remove compatibility types that no production path consumes.

Do this after the feature cuts so dead-code removal follows actual imports rather than prediction.

---

# 18. What not to simplify

Do not remove these merely to reduce line count:

```text
canonical release manifest
semver release selection
component provenance
exact source-range edits
structured diagnostics
blocking conflict handling
static executor registry
original/current staged composition
analyse-before-write
dry-run
idempotency
Angular ng update integration
```

These solve current safety or extensibility requirements.

The simplification target is unsupported syntax analysis and hypothetical mutation infrastructure, not the safety model.

---

# 19. Future evolution

Future features should be added only from concrete requirements.

Possible examples:

```text
rename-prop-value
JSX spread-object migration
Vue argumentless v-bind migration
additional package-manager lockfiles
additional operation types
```

Each future feature should justify its own complexity from real migration cases.

Do not preserve unused infrastructure in anticipation of those features.

Git history is sufficient to recover removed experimental implementations.