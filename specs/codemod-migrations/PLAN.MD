# Implementation Plan: Property Rename Migration MVP

## 1. Goal

Deliver the first production-ready automated migration capability for the Infineon Design System:

> Safely rename component properties across React, Vue, Angular and plain HTML projects when consumers upgrade across a design-system release.

The implementation must retain the useful parser, runner and fixture work from the existing `codemod` branch while replacing the areas that are not safe or extensible enough for production.

The MVP supports only:

```ts
type MigrationOperation = RenamePropOperation;
```

The architecture must allow future declarative operation types and trusted package-owned feature-specific migration steps to be added without replacing:

* Version resolution.
* Release selection.
* Manifest loading.
* Ordered step orchestration.
* Analysis planning.
* Diagnostics.
* Conflict validation.
* Transactional execution.
* CLI reporting.
* Angular migration packaging.

The public MVP manifest still accepts only `rename-prop`. The architectural preparation is an internal executor boundary, not a public custom-migration capability.

---

# 2. Technical context

## 2.1 Repository and build environment

The project is a pnpm monorepo.

The repository currently declares:

* pnpm `10.23.0`.
* Node.js `>=18`.
* TypeScript `5.9.3`.
* Biome for repository formatting and checks.
* Wireit for the root build graph.

The migration package already exists at:

```text
packages/migrations
```

It is an ESM package using:

* TypeScript.
* `NodeNext` module resolution.
* ES2022 as compilation target.
* Declaration output.
* Node’s built-in test runner with `tsx`.

## 2.2 Current migration dependencies

The existing branch already uses:

| Dependency          | Purpose                           |
| ------------------- | --------------------------------- |
| `jscodeshift`       | React JSX parsing and traversal   |
| `@vue/compiler-sfc` | Vue Single File Component parsing |
| `@vue/compiler-dom` | Vue template parsing              |
| `parse5`            | Plain HTML parsing                |
| `typescript`        | JavaScript/TypeScript AST parsing |
| `tsx`               | Running TypeScript tests directly |

These dependencies are already declared in the migration package.

## 2.3 Dependencies to add

### `semver`

Add a maintained semver package for:

* Validating manifest release versions.
* Validating CLI `--from` and `--to` values.
* Comparing source, release and target versions.
* Sorting migration releases.
* Handling prereleases and canary versions.

Remove the current custom version parser and comparator.

### `yaml`

Add a YAML parser to read `pnpm-lock.yaml`.

The MVP supports source-version resolution from:

1. Explicit `--from`.
2. `pnpm-lock.yaml`.
3. Exact `package.json` version declaration.

Parsing must support the pnpm lockfile shape used by the repository’s current pnpm version. Support for npm and Yarn lockfiles is deferred.

### `ignore`

Add an ignore-pattern implementation to apply the project-root `.gitignore` during source collection.

The MVP needs to support:

* Built-in directory exclusions.
* Patterns from the project-root `.gitignore`.

Nested `.gitignore` files are deferred unless the chosen implementation supports them without significant additional complexity.

## 2.4 Dependencies not required for the MVP

Do not add:

* `ts-morph`.
* A project-wide TypeScript program.
* A public or dynamically extensible codemod registry. A small static internal executor registry is required by this plan.
* A schema language or custom-migration framework.
* A formatter dependency.
* A database or persistent migration state.

Cross-file symbol analysis is not required for direct property renames and conservative same-file prop-object handling.

---

# 3. Current project structure

The current migration package broadly has this structure:

```text
packages/migrations/
├── bin/
│   └── dds-migrate.mjs
├── lib/
│   ├── cli.ts
│   ├── file-system.ts
│   ├── index.ts
│   ├── manifest.ts
│   ├── naming.ts
│   ├── project.ts
│   ├── types.ts
│   ├── version.ts
│   └── runners/
│       ├── helpers.ts
│       ├── html.ts
│       ├── index.ts
│       ├── jsx.ts
│       ├── react-jscodeshift.ts
│       ├── react.ts
│       └── vue.ts
├── migrations/
│   └── v1.json
├── tests/
│   ├── fixtures/
│   ├── helpers.ts
│   ├── integration.test.ts
│   ├── manifest.test.ts
│   ├── naming.test.ts
│   └── project.test.ts
├── package.json
└── tsconfig.json
```

Angular migrations currently live separately:

```text
packages/wrapper-angular/
├── migrations/
│   ├── lib/
│   │   ├── manifest.js
│   │   ├── migrate-template.js
│   │   ├── migrate-typescript.js
│   │   └── replacements.js
│   ├── update-v40/
│   │   └── index.js
│   ├── migrations.json
│   └── shared
├── scripts/
│   └── prepack.js
└── tests/
    ├── fixtures/
    └── migrations.test.js
```

The current shared runner interface is useful as the basis of the rename-property framework adapter:

```ts
interface CodemodRunner {
  framework: CodemodFramework;
  collectFiles(cwd: string): Promise<string[]>;
  transformFile(
    filePath: string,
    context: RunnerContext
  ): Promise<FileChange | null>;
}
```

However, `transformFile` should evolve into an analysis operation returning planned edits and diagnostics rather than directly representing a writable file change. The resulting runner must not become the universal interface for future migration steps; `RenamePropExecutor` owns that adapter boundary.

---

# 4. Design decisions *(changed)*

## 4.1 Keep one canonical semantic manifest

There must be exactly one source of truth for migration definitions:

```text
packages/migrations/migrations/manifest.json
```

The manifest is grouped by release:

```ts
interface MigrationManifest {
  schemaVersion: 1;
  releases: MigrationRelease[];
}

interface MigrationRelease {
  version: string;
  operations: MigrationOperation[];
}

type MigrationOperation = RenamePropOperation;

interface RenamePropOperation {
  id: string;
  type: "rename-prop";
  component: string;
  from: string;
  to: string;
  notes?: string;
}
```

Angular receives a copied version of this same file during package preparation. It must not maintain an independently authored manifest.

## 4.2 Use the Web Component tag as canonical component identity

The manifest uses the Stencil custom-element tag:

```json
{
  "component": "ifx-text-field"
}
```

Framework adapters derive their framework-specific representation:

```text
HTML/Angular: ifx-text-field
React:        IfxTextField
Vue:          ifx-text-field or IfxTextField
```

Reuse the existing naming utilities for kebab-case and wrapper-component-name conversion.

Do not introduce a separate component registry in the MVP.

An optional framework-specific identity override can be added later if a component cannot be derived through the standard naming convention.

## 4.3 Share semantics, not AST implementations

The shared core selects:

```text
release → operation → target component → old property → new property
```

Each adapter remains responsible for recognizing its own syntax.

This prevents framework-specific concerns from leaking into the manifest.

## 4.4 Separate analysis from application

The existing CLI transforms and writes each file sequentially.

Replace this with a two-phase model:

```text
Phase 1: analyse
- collect files
- parse files
- collect planned replacements
- collect warnings
- collect conflicts
- validate replacement ranges

Phase 2: apply
- stop if blocking diagnostics exist
- return plan unchanged in dry-run
- otherwise write all changed files
```

No file may be written during adapter analysis.

## 4.5 Resolve migration steps through internal executors *(new)*

Release selection produces ordered migration-step definitions. For the MVP, every selected definition is a normalized `RenamePropOperation` with release and order metadata.

The orchestrator resolves each step through a static internal registry:

```text
Selected release steps
  ↓
Migration executor registry
  ↓
Step executor
  ↓
Project-level migration analysis
```

The registry contains only `RenamePropExecutor` in the MVP.

Registry behavior must be deterministic:

* Duplicate type registrations fail during initialization.
* Every selected step type is preflighted before step analysis begins.
* Missing registrations fail before writes.
* Registry resolution performs no dynamic imports.
* Registry APIs are not a supported public extension surface.

`RenamePropExecutor` selects the framework adapter, requests or collects relevant files, delegates framework syntax analysis and aggregates file-level results into one project-level analysis.

The orchestrator must not contain rename-property AST or template logic. A future trusted feature-specific executor may analyse several files or the complete project without implementing the rename-property runner interface.

## 4.6 Execute ordered steps against an in-memory project view *(new)*

Steps execute in ascending selected-release order and manifest order within each release.

After each successful step analysis, central planning validates and merges its results into an in-memory project view. Later steps read the projected content produced by earlier steps, while disk or schematic-tree content remains unchanged.

The merger, not an executor or adapter, detects cross-step overlaps, stale analyses and incompatible file intents. All executor results contribute to one final plan before writes begin.

## 4.7 Use source-range replacements

All adapters should return edits:

```ts
interface TextEdit {
  start: number;
  end: number;
  replacement: string;
  operationId: string;
}
```

Edits are applied from the end of the file toward the beginning.

This preserves:

* Existing formatting.
* Quote style.
* Line endings.
* Unrelated source code.

The Vue and HTML implementations already use this approach and should be retained.

The React implementation currently mutates the jscodeshift tree and reprints the file with explicit formatting options.

Refactor React to use jscodeshift for structural analysis but generate range-based property-name replacements.

## 4.8 Make component provenance mandatory

A direct property rename is safe only when the adapter proves that the containing element represents the configured DDS component.

Examples:

```tsx
import { IfxTextField } from
  "@infineon/infineon-design-system-react";

<IfxTextField success />
```

is safe.

```ts
response.success
```

is not safe.

The existing HTML transformer globally matches property names and attribute API calls without proving the receiver. That behavior must be removed from the MVP.

## 4.9 Keep local spread support conservative

A local object may be edited only when:

* It is declared with `const`.
* Its initializer is a plain object literal.
* The relevant property key is statically present.
* All detected references to the object are supported prop-spread usages.
* Every supported usage targets the same compatible DDS component operation.
* The object is not exported.
* The object is not passed into arbitrary functions.
* The object is not used by a non-target component.

Otherwise:

* Leave the object unchanged.
* Emit a warning.

This tightens the current implementation, which locates a same-file object and mutates it without verifying all other usages.

## 4.10 Let Angular CLI control Angular release sequencing

For React, Vue and HTML, the CLI selects all releases satisfying:

```text
from < release <= to
```

For Angular:

* `migrations.json` determines which Angular migration factory runs.
* `update-v40/index.js` loads exactly the operations declared for release `40.0.0`.
* Angular does not independently reproduce the standalone CLI’s full source/target selection algorithm.
* The release factory constructs the trusted registry with only `RenamePropExecutor` and the Angular adapter.
* Executor analyses are merged and validated before the first `tree.overwrite`.

This keeps Angular aligned with normal `ng update` semantics while using the same canonical operation definitions.

## 4.11 Keep diagnostics structured internally

Use:

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

Suggested MVP diagnostic codes:

```text
DDS001 TARGET_PROP_ALREADY_EXISTS
DDS002 AMBIGUOUS_LOCAL_PROP_OBJECT
DDS003 IMPORTED_PROP_OBJECT_UNSUPPORTED
DDS004 HELPER_PROP_OBJECT_UNSUPPORTED
DDS005 INVALID_MANIFEST
DDS006 VERSION_RESOLUTION_FAILED
DDS007 PARSE_FAILED
DDS008 OVERLAPPING_EDITS
```

Public JSON output is not required yet. The internal model must nevertheless be structured so JSON output can be added later.

## 4.12 Keep the shared plan open to project-level file intents *(new)*

The rename-property MVP emits edits to existing text files only.

The internal file-analysis and plan model should distinguish modify, create and delete intents so a future trusted executor can reorganize project files or generate configuration without replacing orchestration, diagnostics, conflict validation or transactional application. No public MVP manifest operation may request those intents.

## 4.13 Do not retain package rename in the MVP

Remove `package-rename` from:

* Manifest types.
* React transformation.
* Vue transformation.
* HTML transformation.
* CLI package.json mutation.
* Current MVP fixtures and documentation.

Preserve useful package-rename code in branch history or a follow-up branch rather than mixing it into the first capability.

---

# 5. Target architecture *(changed)*

## 5.1 Component view

```text
CLI
│
├── Option Parser
├── Project Detector
├── Version Resolver
├── Manifest Loader
├── Release Selector
└── Migration Orchestrator
      │
      ├── Ordered Migration Steps
      ├── Executor Registry
      └── RenamePropExecutor
        │
        ├── React Adapter
        ├── Vue Adapter
        └── HTML Adapter
          │
          └── Project-level Migration Analysis
            ├── File Analyses
            └── Diagnostics
              │
              └── Combined Plan
                ├── Conflict Validation
                └── Transactional Apply

Angular CLI
│
└── Angular Update Schematic
      ├── Canonical Manifest Copy
      ├── Release Operation Loader
      ├── Executor Registry
      ├── RenamePropExecutor
      ├── Angular Template Adapter
      ├── Combined Plan and Conflict Validation
      └── Transactional Tree Overwrite
```

## 5.2 Core execution flow

```text
parseCliOptions()
        ↓
detectProject()
        ↓
resolveUpgradeRange()
        ↓
loadAndValidateManifest()
        ↓
selectReleases(from, to)
        ↓
createOrderedStepDefinitions()
        ↓
createExecutorRegistry()
        ↓
preflightSelectedStepTypes()
        ↓
executeStepsInOrder()
        ↓
RenamePropExecutor → framework adapter
  ↓
mergeProjectLevelAnalyses()
  ↓
createCombinedMigrationPlan()
  ↓
validateCrossStepConflicts()
        ↓
dry-run?
  ├── yes → print summary
  └── no  → applyMigrationPlan()
```

The exact core path is:

```text
Manifest and release selection
  ↓
Ordered migration-step definitions
  ↓
Executor registry
  ↓
RenamePropExecutor
  ↓
Framework adapter
  ↓
Project-level migration analysis
  ↓
Combined migration plan
  ↓
Conflict validation
  ↓
Transactional apply
```

## 5.3 Core domain types

```ts
interface MigrationStepDefinition {
  readonly id: string;
  readonly type: string;
  readonly releaseVersion: string;
  readonly order: number;
}

interface RenamePropStepDefinition
  extends MigrationStepDefinition,
    RenamePropOperation {
  readonly type: "rename-prop";
}

interface MigrationExecutionContext {
  project: DetectedProject;
  fromVersion: string;
  toVersion: string;
  projectFiles: ProjectFileView;
}

interface ProjectFileView {
  readonly revision: number;
  listFiles(request: FileCollectionRequest): Promise<string[]>;
  readText(filePath: string): Promise<string | null>;
}

interface MigrationStepExecutor<
  TStep extends MigrationStepDefinition
> {
  readonly type: TStep["type"];

  analyse(
    step: TStep,
    context: MigrationExecutionContext
  ): Promise<MigrationAnalysis>;
}

interface TextFileAnalysis {
  kind: "modify";
  filePath: string;
  baseRevision: number;
  originalContent: string;
  edits: TextEdit[];
  diagnostics: MigrationDiagnostic[];
}

interface CreateFileAnalysis {
  kind: "create";
  filePath: string;
  content: string;
  diagnostics: MigrationDiagnostic[];
}

interface DeleteFileAnalysis {
  kind: "delete";
  filePath: string;
  baseRevision: number;
  originalContent: string;
  diagnostics: MigrationDiagnostic[];
}

type FileAnalysis =
  | TextFileAnalysis
  | CreateFileAnalysis
  | DeleteFileAnalysis;

interface MigrationAnalysis {
  fileAnalyses: FileAnalysis[];
  diagnostics: MigrationDiagnostic[];
}

interface PlannedFileChange {
  filePath: string;
  originalContent: string | null;
  updatedContent: string | null;
  operationIds: string[];
}

interface MigrationPlan {
  framework: SupportedStandaloneFramework;
  fromVersion: string;
  toVersion: string;
  appliedReleases: string[];
  processedFiles: number;
  fileChanges: PlannedFileChange[];
  diagnostics: MigrationDiagnostic[];
}
```

The public MVP manifest produces only `RenamePropStepDefinition`, and `RenamePropExecutor` emits only `TextFileAnalysis`. Create/delete variants reserve a shared project-level planning boundary for future trusted code; they do not add public MVP behavior.

## 5.4 Executor registry

The registry is an internal map from step type to one trusted executor.

```ts
interface MigrationExecutorRegistry {
  register(executor: MigrationStepExecutor<MigrationStepDefinition>): void;
  resolve(type: string): MigrationStepExecutor<MigrationStepDefinition>;
  preflight(steps: readonly MigrationStepDefinition[]): void;
}
```

Construction fails for duplicate `type` values. `preflight` fails when any selected step lacks an executor, before analysis and before writes.

The registry has no framework-parser dependencies and no API for consumer registration.

## 5.5 Rename-property adapter interface

Replace the current transformation-oriented interface with:

```ts
interface RenamePropAdapter {
  readonly framework: CodemodFramework;

  collectFiles(
    context: MigrationExecutionContext
  ): Promise<string[]>;

  analyseFile(
    filePath: string,
    step: RenamePropStepDefinition,
    context: MigrationExecutionContext
  ): Promise<FileAnalysis>;
}
```

`RenamePropExecutor` selects this adapter and aggregates its file analyses. The adapter does not write files or apply edits itself.

This interface is intentionally specific to rename-property syntax. A future feature-specific executor may use different framework implementations or no adapter at all while returning the same `MigrationAnalysis` type.

## 5.6 Responsibility boundaries

### Orchestrator

* Select releases and ordered steps.
* Resolve all selected executors before analysis.
* Execute steps in release and manifest order.
* Maintain the in-memory project view.
* Aggregate executor results.
* Validate combined edits centrally.
* Apply the final plan.

### Executor registry

* Register trusted internal executors.
* Reject duplicate registrations.
* Fail on unregistered selected types.
* Remain independent of framework AST details.

### RenamePropExecutor

* Handle the `rename-prop` semantic step.
* Select the framework adapter.
* Collect or request relevant files.
* Aggregate file-level analyses.
* Return a project-level result.

### Framework adapter

* Understand framework syntax and component provenance.
* Generate exact edits and diagnostics.
* Perform no writes.

### Future feature-specific executor

* May analyse multiple files or the whole project.
* May use dedicated framework-specific implementations.
* Returns the same shared analysis model.
* Uses the same conflict and transactional-apply pipeline.

---

# 6. Target file structure *(changed)*

```text
packages/migrations/
├── bin/
│   └── dds-migrate.mjs
│
├── lib/
│   ├── index.ts
│   │
│   ├── cli/
│   │   ├── options.ts
│   │   ├── output.ts
│   │   └── run.ts
│   │
│   ├── core/
│   │   ├── types.ts
│   │   ├── diagnostics.ts
│   │   ├── manifest.ts
│   │   ├── release-selection.ts
│   │   ├── edits.ts
│   │   ├── executor.ts
│   │   ├── executor-registry.ts
│   │   ├── execute-steps.ts
│   │   ├── plan.ts
│   │   ├── conflict-validation.ts
│   │   └── apply-plan.ts
│   │
│   ├── project/
│   │   ├── detect-project.ts
│   │   ├── package-json.ts
│   │   ├── resolve-versions.ts
│   │   ├── pnpm-lockfile.ts
│   │   ├── project-file-view.ts
│   │   └── ignored-paths.ts
│   │
│   ├── operations/
│   │   └── rename-prop/
│   │       ├── executor.ts
│   │       ├── types.ts
│   │       ├── validate.ts
│   │       └── index.ts
│   │
│   ├── runners/
│   │   ├── index.ts
│   │   ├── types.ts
│   │   ├── shared/
│   │   │   ├── files.ts
│   │   │   ├── source.ts
│   │   │   └── local-objects.ts
│   │   ├── react/
│   │   │   ├── index.ts
│   │   │   ├── imports.ts
│   │   │   ├── jsx.ts
│   │   │   └── local-spreads.ts
│   │   ├── vue/
│   │   │   ├── index.ts
│   │   │   ├── template.ts
│   │   │   ├── jsx.ts
│   │   │   ├── render-functions.ts
│   │   │   └── local-bindings.ts
│   │   └── html/
│   │       ├── index.ts
│   │       └── template.ts
│   │
│   └── naming.ts
│
├── migrations/
│   └── manifest.json
│
├── tests/
│   ├── unit/
│   │   ├── manifest.test.ts
│   │   ├── release-selection.test.ts
│   │   ├── resolve-versions.test.ts
│   │   ├── edits.test.ts
│   │   └── project-detection.test.ts
│   │
│   ├── contracts/
│   │   └── rename-prop.contract.ts
│   │
│   ├── integration/
│   │   ├── cli.test.ts
│   │   ├── dry-run.test.ts
│   │   ├── transactional.test.ts
│   │   └── packed-package.test.ts
│   │
│   └── fixtures/
│       ├── react/
│       ├── vue/
│       ├── html/
│       ├── versions/
│       └── manifests/
│
├── package.json
├── tsconfig.json
└── README.md
```

Angular target structure:

```text
packages/wrapper-angular/
├── migrations/
│   ├── lib/
│   │   ├── manifest.js
│   │   ├── diagnostics.js
│   │   ├── edits.js
│   │   ├── executor-registry.js
│   │   ├── execute-steps.js
│   │   ├── plan.js
│   │   └── angular-rename-prop-adapter.js
│   ├── releases/
│   │   └── v40/
│   │       └── index.js
│   ├── shared/
│   │   └── manifest.json
│   └── migrations.json
│
├── scripts/
│   └── prepack.js
│
└── tests/
    ├── migrations.test.js
    └── fixtures/
        ├── external-template/
        ├── inline-template/
        ├── conflict/
        └── non-target/
```

Use `releases/v40` rather than `update-v40` so subsequent release migrations have a consistent structure.

---

# 7. Detailed implementation steps

## Step 1 — Remove unrelated and deferred scope

### Files

* `.vscode/settings.json`
* `packages/components/src/index.html`
* Package-rename fixtures and code.
* Unsafe HTML/TypeScript property-access fixtures.
* Documentation describing package rename or generic property access as MVP features.

### Changes

1. Revert unrelated editor and component-demo changes.
2. Remove package rename from the MVP manifest.
3. Remove package rename branches from framework runners.
4. Remove package.json dependency mutation from `cli.ts`.
5. Disable receiver-unaware JavaScript and TypeScript property renaming.
6. Keep removed logic recoverable through Git history.

### Verification

* PR diff contains only migration feature changes.
* No package-rename operation remains in MVP types or tests.
* `response.success` and equivalent generic code remain unchanged.

---

## Step 2 — Introduce the core operation and release types

### Files

Create:

```text
lib/operations/rename-prop/types.ts
lib/operations/rename-prop/validate.ts
lib/core/types.ts
```

Refactor:

```text
lib/types.ts
```

### Changes

1. Move generic execution types into `core/types.ts`.
2. Define `RenamePropOperation` under its operation module.
3. Define `MigrationOperation` as a union containing only `RenamePropOperation`.
4. Define release and manifest types.
5. Define `TextEdit`, `FileAnalysis`, `MigrationPlan` and diagnostics.
6. Remove `PackageRenameMigration`.
7. Remove `targetVersion` from individual operations.

### Design constraint

Release applicability belongs to `MigrationRelease.version`, not to every operation.

### Tests

* Valid operation.
* Empty fields.
* Self-rename.
* Duplicate ID.
* Conflicting source-property mappings.

---

## Step 3 — Replace manifest loading and validation

### Files

Refactor:

```text
lib/manifest.ts
```

into:

```text
lib/core/manifest.ts
lib/operations/rename-prop/validate.ts
```

Rename:

```text
migrations/v1.json
```

to:

```text
migrations/manifest.json
```

### Changes

1. Parse JSON.
2. Validate `schemaVersion`.
3. Validate release array.
4. Validate each semantic version.
5. Validate unique release versions.
6. Validate operation IDs globally.
7. Dispatch operation validation through an exhaustive switch:

```ts
switch (candidate.type) {
  case "rename-prop":
    return validateRenameProp(candidate);
}
```

8. Detect conflicts across the selected upgrade path.
9. Return immutable normalized data.

### Extensibility

Future operation types add:

* One type.
* One validator.
* One switch case.
* Framework handlers.

They do not change the manifest envelope.

### Tests

* All invalid schema cases.
* Reverse manifest order.
* Duplicate releases.
* Duplicate IDs.
* Unsupported operation type.
* Custom manifest path.

---

## Step 4 — Implement release selection

### Files

Create:

```text
lib/core/release-selection.ts
```

Delete:

```text
lib/version.ts
```

### Changes

1. Use `semver.valid`.
2. Use `semver.gt` and `semver.lte`.
3. Select releases satisfying:

```text
from < release <= to
```

4. Sort selected releases ascending.
5. Flatten operations while preserving:

   * Release ordering.
   * Operation order within a release.
6. Reject downgrades.

### Tests

* Same-version no-op.
* One-release upgrade.
* Multi-release upgrade.
* Prerelease and canary handling.
* Build metadata.
* Invalid versions.
* Downgrade.

---

## Step 5 — Refactor project detection and version resolution

### Files

Split:

```text
lib/project.ts
```

into:

```text
lib/project/detect-project.ts
lib/project/package-json.ts
lib/project/resolve-versions.ts
lib/project/pnpm-lockfile.ts
```

### Changes

#### Project detection

Retain the existing official-package detection and multiple-framework guard. The current logic already detects React, Angular, Vue and HTML packages and errors when multiple official wrappers are present.

Return:

```ts
interface DetectedProject {
  rootDirectory: string;
  framework: CodemodFramework;
  designSystemPackage: string;
  declaredVersion?: string;
}
```

#### Source version resolution

Resolution precedence:

```text
--from
→ pnpm-lock.yaml resolved package version
→ exact package.json declaration
→ error
```

Do not extract the first semantic-looking substring from `^39.0.0`.

#### Target version resolution

Resolution precedence:

```text
--to
→ migration package version
```

Read the migration package version from its own package metadata during build/runtime.

### Tests

* Every framework package.
* Multiple framework packages.
* pnpm lockfile resolution.
* Exact declaration.
* Ambiguous range.
* Explicit override.
* Missing package.json.
* HTML explicit framework without a package manifest.

---

## Step 6 — Introduce structured diagnostics and edit planning

### Files

Create:

```text
lib/core/diagnostics.ts
lib/core/edits.ts
lib/core/plan.ts
```

### Changes

#### Diagnostics

Implement constructors for:

* Warning.
* Conflict.
* Parse failure.
* Invalid edit ranges.

#### Edit validation

For each file:

1. Sort edits by start offset.
2. Reject negative or out-of-range offsets.
3. Merge exact duplicate edits.
4. Reject overlapping non-identical edits.
5. Apply edits in descending offset order.
6. Preserve original text outside edited ranges.

#### Plan creation

Aggregate:

* Processed files.
* Changed files.
* Operation IDs.
* Diagnostics.
* Applied releases.
* Counts.

### Tests

* Non-overlapping edits.
* Duplicate edits.
* Overlapping conflicts.
* LF and CRLF.
* No-op file.
* Deterministic diagnostics and file ordering.

---

## Step 7 — Introduce migration step executors *(new)*

### Files

Create:

```text
lib/core/executor.ts
lib/core/executor-registry.ts
lib/core/execute-steps.ts
lib/project/project-file-view.ts
lib/operations/rename-prop/executor.ts
```

### Changes

1. Define `MigrationStepDefinition` and the generic `MigrationStepExecutor` interface.
2. Define project-level `MigrationAnalysis` containing file analyses and diagnostics.
3. Define a read-only `MigrationExecutionContext` backed by the current in-memory project view.
4. Implement a static internal executor registry.
5. Reject duplicate executor types during registry initialization.
6. Preflight all selected step types and fail deterministically for an unregistered type.
7. Register only `RenamePropExecutor`.
8. Make `RenamePropExecutor` select the framework adapter and aggregate its file analyses.
9. Execute steps in release and manifest order.
10. Merge accepted analyses into the in-memory project view without disk writes.
11. Detect cross-step overlapping, stale or incompatible edits through the shared planner.

### Design constraints

* The orchestrator contains no rename-property AST logic.
* Executors may request several files or the whole project.
* The registry contains trusted package code only.
* No public registration API, plugin loading, manifest code path or `"code-migration"` operation is added.
* Framework adapters remain syntax-only and perform no writes.

### Tests

* `rename-prop` resolves through the registry.
* Duplicate registration fails during initialization.
* Missing registration fails before analysis writes.
* Multiple steps execute in deterministic order.
* Results from multiple steps merge into one project view.
* Cross-step overlapping edits are detected centrally.
* A test executor can inspect multiple files through the execution context.

---

## Step 8 — Refactor the runner contract *(renumbered from Step 7)*

### Files

Refactor:

```text
lib/runners/index.ts
lib/runners/helpers.ts
lib/types.ts
```

Create:

```text
lib/runners/types.ts
lib/runners/shared/source.ts
lib/runners/shared/files.ts
```

### Changes

1. Replace `transformFile()` with the rename-adapter `analyseFile()` contract.
2. Make every rename adapter return the original content, edits and diagnostics to `RenamePropExecutor`.
3. Move binary detection to shared source helpers.
4. Extend built-in ignored directories with:

   * `.angular`.
   * `.nuxt`.
5. Read root `.gitignore` using the ignore dependency.
6. Ensure deterministic file ordering.

The existing file collector already has deterministic sorting and several built-in exclusions; reuse that implementation as the basis.

The adapter contract remains specific to `rename-prop`. Do not route unrelated future executors through it.

### Tests

* Built-in exclusions.
* Root `.gitignore`.
* Supported extensions.
* Binary file.
* Deterministic order.

---

## Step 9 — Refactor React migration *(renumbered from Step 8)*

### Files

Replace the broad current split with:

```text
lib/runners/react/index.ts
lib/runners/react/imports.ts
lib/runners/react/jsx.ts
lib/runners/react/local-spreads.ts
```

Reuse logic from:

```text
react-jscodeshift.ts
react.ts
jsx.ts
```

### Direct JSX flow

1. Parse through jscodeshift’s TSX parser.
2. Collect official wrapper import declarations.
3. Map imported DDS component names to local aliases.
4. Identify JSX opening elements using those local names.
5. For each applicable operation:

   * Find the old property.
   * Check for the target property.
   * Emit conflict if both exist.
   * Otherwise record a text edit covering only the old property name.

The existing import-alias resolution is already useful and should be extracted.

### Local spread flow

1. Detect simple identifier spreads:

```tsx
<IfxTextField {...props} />
```

2. Resolve one same-file `const` object declaration.
3. Collect all identifier references.
4. Permit editing only when every relevant reference is a supported spread into the same target component.
5. Emit a key-range edit for the object property.
6. Warn for shared, exported or otherwise ambiguous objects.

### Remove

* Full AST reprinting.
* Package import source mutation.
* Unchecked object mutation.
* Imported object tracing.
* Helper-return tracing.

### Tests

* Boolean prop.
* Literal prop.
* Expression prop.
* Alias import.
* Third-party same-name component.
* Member-expression component remains unchanged.
* Target-property conflict.
* Safe local spread.
* Multiple target uses.
* Shared non-target use warning.
* Imported object unchanged.
* Idempotency.
* Formatting preservation.

---

## Step 10 — Refactor Vue migration *(renumbered from Step 9)*

### Files

Split existing `vue.ts` into:

```text
lib/runners/vue/index.ts
lib/runners/vue/template.ts
lib/runners/vue/jsx.ts
lib/runners/vue/render-functions.ts
lib/runners/vue/local-bindings.ts
```

### Template flow

Reuse the current Vue compiler traversal:

1. Parse SFC.
2. Parse template.
3. Match:

   * `ifx-text-field`.
   * `IfxTextField`.
4. Detect static attribute.
5. Detect `v-bind` with a static argument.
6. Check target-property conflict.
7. Record exact argument/name edits.

The current implementation already performs component-scoped template replacement and can be separated cleanly.

### JSX flow

Reuse the shared JSX analyser with the Vue wrapper package as import source.

### Render-function flow

Support only statically known components:

```ts
h(IfxTextField, { success: value })
createVNode(IfxTextField, { success: value })
h("ifx-text-field", { success: value })
```

The operation edits only the direct props object key.

### Local `v-bind` flow

Reuse the current same-file simple identifier logic, then add complete reference-safety checks before modifying its declaration. The current branch already finds simple `v-bind="identifier"` bindings and local `const` object declarations.

### Tests

* Static template prop.
* Bound template prop.
* PascalCase and kebab-case components.
* Vue JSX alias.
* `h`.
* `createVNode`.
* String tag.
* Safe local binding.
* Shared object warning.
* Imported object unchanged.
* Target conflict.
* Idempotency.

---

## Step 11 — Narrow the HTML migration *(renumbered from Step 10)*

### Files

Replace current broad `html.ts` with:

```text
lib/runners/html/index.ts
lib/runners/html/template.ts
```

### Changes

1. Collect `.html` and `.htm` only for prop-rename MVP behavior.
2. Parse through parse5.
3. Match the exact configured custom-element tag.
4. Find the old attribute.
5. Check whether the new attribute already exists.
6. Record only the old attribute-name range.
7. Do not inspect external JavaScript or TypeScript for property renames.
8. Do not modify inline script contents.
9. Do not parse arbitrary strings or `innerHTML`.

### Remove or disable

* Property access migration.
* Bracket access migration.
* `setAttribute` migration.
* `Object.assign` migration.
* Function-return object analysis.

### Tests

* Exact target element.
* Native element unchanged.
* Other DDS component unchanged.
* Other custom element unchanged.
* Target conflict.
* Inline script unchanged.
* `innerHTML` string unchanged.
* Idempotency.

---

## Step 12 — Refactor Angular integration *(renumbered from Step 11)*

### Files

Replace:

```text
migrations/update-v40/
```

with:

```text
migrations/releases/v40/
```

Refactor:

```text
migrations/lib/manifest.js
migrations/lib/migrate-template.js
migrations/lib/migrate-typescript.js
migrations/shared
scripts/prepack.js
```

### Manifest packaging

1. Make `migrations/shared` a directory.
2. Copy the canonical file to:

```text
migrations/shared/manifest.json
```

3. Remove fallback paths that treat `shared` as both a file and directory.
4. Add a prepack assertion that the copied file exists and parses.

The current manifest loader checks conflicting path shapes and contains its own semver implementation; replace both.

### Release loader

Implement:

```js
loadReleaseOperations("40.0.0")
```

It:

1. Loads the copied manifest.
2. Validates the schema needed by Angular.
3. Selects exactly the requested release.
4. Rejects unsupported operation types.
5. Returns normalized `rename-prop` operations.

### Template migration

Retain Angular compiler parsing for:

* Static attributes.
* Property bindings.
* `attr.` bindings.
* Inline templates.
* External templates.

Add target-property conflict detection before tree overwrites.

### TypeScript migration

For the MVP:

* Process inline Angular templates in decorators.
* Do not migrate class-body property access.
* Remove or disable receiver-unaware TypeScript rules.

### Schematic execution

1. Normalize the exact release operations into ordered step definitions.
2. Initialize the trusted registry with only `RenamePropExecutor`.
3. Preflight all selected step registrations.
4. Let `RenamePropExecutor` delegate syntax analysis to the Angular adapter.
5. Analyse and retain proposed content changes in the in-memory tree view.
6. Merge all executor results through central conflict validation.
7. If conflicts exist, throw before `tree.overwrite`.
8. Otherwise apply the combined plan to the tree.

### Tests

* Manifest copied during pack.
* v40 release selected.
* External template.
* Inline template.
* Static attribute.
* Property binding.
* Attribute binding.
* Non-target selector.
* Target conflict blocks all overwrites.
* Class-body properties unchanged.
* Real packed `ng update`.

---

## Step 13 — Implement orchestration and apply *(renumbered from Step 12)*

### Files

Create:

```text
lib/core/execute-steps.ts
lib/core/conflict-validation.ts
lib/core/apply-plan.ts
lib/cli/run.ts
```

### Changes

Implement:

```ts
analyseMigration(options): Promise<MigrationPlan>
applyMigrationPlan(plan): Promise<void>
```

#### Analysis

1. Detect project.
2. Redirect Angular.
3. Resolve versions.
4. Load manifest.
5. Select releases.
6. Normalize ordered migration-step definitions.
7. Initialize the trusted executor registry.
8. Preflight every selected step type.
9. Execute each step in release and manifest order.
10. Let `RenamePropExecutor` collect files and delegate to the selected adapter.
11. Merge project-level analyses into the in-memory project view.
12. Detect cross-step conflicts centrally.
13. Create one combined migration plan.
14. Aggregate and sort diagnostics.

#### Apply

1. Return without writing for dry-run.
2. Stop when any error diagnostic exists.
3. Write changed files sequentially.
4. Report write failures with exact path.
5. Do not run formatters automatically.

### Extensibility

The orchestrator receives ordered step definitions and does not switch on operation types itself.

Executor resolution remains inside the trusted internal registry. Rename-property syntax dispatch remains inside `RenamePropExecutor`; adapters do not dispatch unrelated migration types.

---

## Step 14 — Refactor CLI and package exports *(renumbered from Step 13)*

### Files

Split `cli.ts` into:

```text
lib/cli/options.ts
lib/cli/output.ts
lib/cli/run.ts
```

Update:

```text
bin/dds-migrate.mjs
package.json
lib/index.ts
```

### CLI parsing

Extend existing `node:util.parseArgs` usage with:

```text
--from
--to
```

Retain:

```text
--cwd
--framework
--config
--dry-run
--help
```

### Binary

Change the binary from package-name self-import:

```js
import { runMigration } from
  "@infineon/design-system-migrations";
```

to a stable relative import:

```js
import { runMigration } from "../dist/index.js";
```

The current bin imports the package by its own name.

### Package exports

Add:

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    }
  }
}
```

Retain:

* `main`.
* `types`.
* `bin`.
* Published `dist`, `bin` and `migrations` directories.

### Exit codes

Use:

```text
0 successful apply, dry-run or no-op
1 migration, validation, parse or conflict failure
2 invalid invocation or Angular redirection
```

### Tests

* Help.
* Invalid option.
* Framework parsing.
* Angular redirection.
* Explicit versions.
* Dry-run.
* Packed binary execution.
* Package import execution.

---

## Step 15 — Reorganize tests around contracts *(renumbered from Step 14)*

### Shared contract

Create a framework-neutral rename-property contract defining:

* Direct static property.
* Direct bound/expression property.
* Non-target component.
* Target-property conflict.
* No-op.
* Idempotency.

Adapters provide syntax-specific fixtures.

### Fixture organization

```text
tests/fixtures/
├── react/
│   └── rename-prop/
│       ├── direct/
│       ├── alias/
│       ├── local-spread/
│       ├── shared-spread/
│       ├── conflict/
│       └── non-target/
├── vue/
│   └── rename-prop/
├── html/
│   └── rename-prop/
├── versions/
└── manifests/
```

Each positive fixture contains:

```text
input/
expected/
```

Each warning or error fixture contains:

```text
input/
expected-diagnostics.json
```

### Required test layers

1. Unit tests.
2. Adapter tests.
3. Contract tests.
4. CLI integration tests.
5. Packed-package tests.
6. Angular schematic tests.
7. Consumer build tests.

---

## Step 16 — Integrate build and publishing *(renumbered from Step 15)*

### Build graph

Add the migration package to the repository’s normal build graph rather than relying only on an isolated workflow command.

The current root Wireit build lists components and wrapper packages but not the migration package.

Add:

```text
./packages/migrations:build
```

to the appropriate root build dependencies.

### CI

Add jobs for:

* Migration package type-check.
* Unit and integration tests.
* `pnpm pack`.
* Clean packed CLI installation.
* Linux execution.
* Windows execution.
* React example migration and build.
* Vue example migration and build.
* HTML/Vite example migration and build.
* Angular standalone `ng update` and build.
* Angular module `ng update` and build.

### Canary publishing

Confirm that:

* `@infineon/design-system-migrations` receives the same canary release identifier.
* The packed Angular package contains the corresponding canonical manifest.
* Canary consumer fixtures can migrate to the canary target.

---

## Step 17 — Rewrite documentation *(renumbered from Step 16)*

### `README.md`

Include:

1. Purpose.
2. Installation and execution.
3. React/Vue/HTML command.
4. Angular command.
5. Version resolution.
6. `--from` and `--to`.
7. Dry-run.
8. Supported patterns.
9. Warning patterns.
10. Unsupported patterns.
11. Conflict behavior.
12. Adding a new property rename.

### Architecture document

Update `DOCS.md` to match the actual architecture:

* Release manifest.
* Operation selection.
* Adapter analysis.
* Migration plan.
* Apply phase.
* Angular packaging.

Remove:

* Package rename claims.
* Generic JavaScript property rename claims.
* Claims that the manifest uses the old flat model.
* Claims that files are written during the per-file transform loop.

---

# 8. Recommended implementation sequence

## Slice 1 — Core model and versioning

Deliver:

* New types.
* Release manifest.
* Validation.
* Semver-based selection.
* Version resolution.
* Tests.

No framework behavior changes yet.

## Slice 2 — Executor boundary, analysis plan and adapter contract *(changed)*

Deliver:

* Structured diagnostics.
* Text edits.
* Executor interface and project-level analysis result.
* Static registry with duplicate and missing-registration failures.
* `RenamePropExecutor` as the only registration.
* Ordered step execution and in-memory project view.
* Migration plan.
* Cross-step conflict validation.
* Analyse-first rename-adapter API.
* Transaction-free dry-run.
* Shared file collection.

Adapt existing direct transformations to compile.

## Slice 3 — React vertical slice

Deliver:

* Direct JSX property rename.
* Aliases.
* Conflict detection.
* Safe local spread.
* Negative cases.
* Minimal diffs.

At this point, the standalone architecture is proven.

## Slice 4 — Vue vertical slice

Deliver:

* SFC templates.
* JSX.
* Render functions.
* Safe local `v-bind`.
* Conflicts and negative cases.

## Slice 5 — HTML vertical slice

Deliver:

* Exact custom-element attributes only.
* Remove unsafe JavaScript behavior.
* Conflicts and negative cases.

## Slice 6 — Angular vertical slice

Deliver:

* Canonical manifest copy.
* Version-specific release loader.
* External and inline templates.
* Conflict-safe schematic tree application.
* Packed `ng update` test.

## Slice 7 — CLI and package hardening

Deliver:

* `--from` and `--to`.
* Fixed binary import.
* Package exports.
* Exit codes.
* Packed CLI test.
* Output summaries.

## Slice 8 — Consumer validation and documentation

Deliver:

* Framework builds.
* Windows CI.
* Canary validation.
* Support matrix.
* Contributor instructions.
* Final PR description.

---

# 9. Files to retain, refactor and remove

## Retain largely as-is

```text
packages/migrations/tsconfig.json
packages/migrations/lib/naming.ts
packages/migrations/lib/runners/helpers.ts
Vue parser initialization
HTML parse5 parser initialization
Angular schematic tree traversal
Most existing direct-use fixtures
```

## Refactor substantially

```text
packages/migrations/lib/cli.ts
packages/migrations/lib/types.ts
packages/migrations/lib/manifest.ts
packages/migrations/lib/project.ts
packages/migrations/lib/file-system.ts
packages/migrations/lib/runners/react-jscodeshift.ts
packages/migrations/lib/runners/vue.ts
packages/migrations/lib/runners/html.ts
packages/wrapper-angular/migrations/lib/manifest.js
packages/wrapper-angular/migrations/lib/migrate-template.js
packages/wrapper-angular/migrations/update-v40/index.js
packages/wrapper-angular/scripts/prepack.js
```

## Remove from the MVP

```text
packages/migrations/lib/version.ts
Package-rename operation types and execution
Package-rename fixtures
Global HTML/JS property access replacement
Global setAttribute replacement
Receiver-unaware Object.assign replacement
Angular class-body programmatic property replacement
Unrelated .vscode changes
Unrelated component index.html changes
```

---

# 10. Completion checkpoints

## Checkpoint A — Core correctness

* Canonical release manifest implemented.
* All manifest validation tests pass.
* Correct upgrade range selected.
* No custom semver remains.
* Source and target versions are distinguishable.

## Checkpoint B — Safe framework behavior

* Direct property renames pass in all frameworks.
* Alias support passes.
* Target-property conflicts block changes.
* Generic application properties remain unchanged.
* Same-file spreads are conservative.
* All adapters are idempotent.

## Checkpoint C — Execution safety

* All files are analysed before writes.
* Dry-run and apply share one plan.
* Overlapping edits are rejected.
* Unchanged files remain byte-identical.
* Line endings are preserved.

## Checkpoint D — Published-package usability

* Packed CLI starts.
* Built-in manifest loads from the tarball.
* Packed Angular migration runs through `ng update`.
* All consumer fixtures build.
* Linux and Windows pass.

## Checkpoint E — Production readiness

* Support matrix matches tests.
* Three representative internal repositories have been reviewed in dry-run.
* At least one real consumer per available framework has been migrated and built.
* PR description contains architecture, supported behavior, limitations and validation evidence.

---

# 11. Final architectural boundary *(changed)*

The public MVP manifest finishes with this closed operation union:

```ts
type MigrationOperation =
  | RenamePropOperation;
```

Internally, selected definitions cross this stable boundary:

```ts
interface MigrationStepExecutor<
  TStep extends MigrationStepDefinition
> {
  readonly type: TStep["type"];

  analyse(
    step: TStep,
    context: MigrationExecutionContext
  ): Promise<MigrationAnalysis>;
}
```

A future trusted feature-specific migration should require:

* An internal step definition source associated with a release.
* One statically registered executor.
* Framework-specific implementation where required.
* Contract fixtures.
* Documentation.

It must not require changes to:

* Manifest release grouping.
* Version selection.
* Project detection.
* Ordered step orchestration.
* Analysis planning.
* Diagnostic aggregation.
* Cross-step conflict validation.
* Apply behavior.
* CLI execution.
* Angular manifest packaging.

The future executor may inspect multiple files, resolve file relationships, modify project configuration, propose file creation or removal and perform project-level validation. It must return the shared analysis model and use the same combined plan and transactional-apply path.

The MVP introduces no public custom-migration SDK, plugin system, dynamic manifest import, consumer-code execution, `"code-migration"` operation, generic lifecycle hooks, dependency-injection infrastructure or general-purpose migration language.

That is the required level of extensibility for the MVP: stable release selection, executor orchestration, diagnostics, planning, conflict validation and transactional application without implementing any feature-specific migration now.