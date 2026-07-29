# Property Rename Migration MVP — Implementation Tasks

## Tracking status

**Last reviewed:** 2026-07-29

Checkboxes reflect the repository state at the time of review. `[x]` means verified complete, `[ ]` means not complete, and `PARTIAL`/`BLOCKED` notes explain work that exists but does not satisfy the task yet.

### Current repository blockers

- [x] The markup-only HTML runner is restored as `packages/migrations/lib/adapters/html-adapter.ts`.
- [x] `pnpm --dir packages/migrations check` passes.
- [x] `package-rename` types, manifest handling, CLI rewriting, JSX adapter paths, fixtures, and tests are removed.
- [ ] **PARTIAL:** The canonical release-based `migrations/manifest.json` exists and loads by default, but `migrations/v1.json` is still generated as a legacy export for `wrapper-angular` and has not been fully replaced yet.
- [x] The CLI now analyses all files and builds a `MigrationPlan` before `applyMigrationPlan()` writes anything; transactional apply is implemented.

## Dependency overview

### Dependency changes in this revision

* **New F5:** Introduce migration step executors.
* **Renumbered:** Former F5, “Replace transformations with an analysis plan,” is now F6.
* **Renumbered:** Former F6, “Harden file collection and package execution,” is now F7.
* **Changed dependency:** U1 and U5 now depend on F7 instead of former F6.
* **Changed dependency:** U6 now depends on F6 so Angular uses the shared executor and combined-plan boundary.
* S1–S3, F2–F7, U1–U3, and U5 are complete; F1 is partially complete (legacy `v1.json` export remains); U4, U6, and P1–P4 remain in progress.

```text
Setup
S1 → S2 → S3
          ↓
Foundation
F1 → F2 → F3 → F4 → F5 → F6 → F7
                              ↓
User stories
U1 → U2 → U3 → U4 → U5 → U6
                         ↓
Polish
P1 → P2 → P3 → P4
```

Some tasks can be implemented in parallel where explicitly noted, but their pull requests should respect the listed dependency order.

---

# Phase 1 — Setup

## S1 — Reduce the branch to MVP scope

**Depends on:** None

### Goal

Remove unrelated and deferred functionality so the branch represents one clear capability: versioned component property renames.

### Current status

- [x] No unrelated `.vscode` or component-demo changes are present in the current worktree.
- [x] Remove `package-rename` from types, manifests, transformers, CLI logic, fixtures, and tests.
- [x] Restore the HTML runner as a markup-only implementation.
- [x] Remove receiver-unaware JavaScript/TypeScript property, bracket, `setAttribute`, and `Object.assign` rewrites.
- [x] Preserve direct React, Vue, HTML, and Angular-template property-rename coverage.
- [x] Make the migration package and Angular migration tests pass after the scope reduction.
- [x] **Status: COMPLETE.** S1 is reduced to component-associated property renames.

### Work

* Revert unrelated `.vscode` changes.
* Revert unrelated component demo changes.
* Remove package-renaming rules from the MVP manifest.
* Remove package.json dependency-renaming logic.
* Remove package-import rewriting from React, Vue and HTML runners.
* Remove package-rename fixtures and documentation.
* Disable or remove global JavaScript and TypeScript property renames.
* Disable or remove receiver-unaware:

  * Property access changes.
  * Bracket property changes.
  * `setAttribute` changes.
  * `Object.assign` changes.
  * Angular class-body property changes.
* Retain useful code in Git history rather than keeping dormant production paths.

### Existing code to retain

* Migration package scaffolding.
* CLI argument parsing.
* Framework detection.
* React, Vue and HTML runner setup.
* Angular schematic setup.
* Direct property-rename fixtures.
* Vue and HTML parser initialization.
* Naming utilities.

### Acceptance criteria

- [x] All S1 production and test paths compile after the scope reduction.
- [x] `package-rename` no longer appears in MVP types, manifests, transformers, or tests.
- [x] `response.success` remains unchanged in React, Vue, HTML, and Angular fixtures.
- [x] `element.setAttribute("success", value)` remains unchanged.
- [x] Existing direct property-rename tests compile and pass in the new test structure.

* The branch contains no unrelated editor or component-example changes.
* `package-rename` no longer appears in MVP types, manifests, transformers or tests.
* `response.success` remains unchanged in React, Vue, HTML and Angular fixtures.
* `element.setAttribute("success", value)` remains unchanged.
* Existing direct property-rename tests still compile or are temporarily marked for migration to the new test structure.

---

## S2 — Add and configure required dependencies

**Depends on:** S1

### Goal

Introduce the minimal dependencies needed for production-grade versioning, lockfile parsing and ignored-path handling.

### Current status

- [x] Add `semver` as a direct migration-package dependency.
- [x] Add the YAML parser required for `pnpm-lock.yaml` resolution.
- [x] Add `ignore` as a direct migration-package dependency.
- [x] Confirm required type packages and runtime dependencies are declared directly.
- [x] Confirm no `ts-morph`, formatter, public/dynamic codemod registry, or premature schema framework is added; F5’s static internal executor registry requires no dependency.
- [x] **Status: COMPLETE.** `package.json` declares `semver`, `yaml`, `ignore`, and their type packages directly.

### Work

Add:

* `semver`.
* Type definitions for `semver` when required.
* A YAML parser for `pnpm-lock.yaml`.
* `ignore` for root `.gitignore` support.

Do not add:

* `ts-morph`.
* A project-wide TypeScript program.
* A formatter.
* A public or dynamically extensible codemod registry.
* A generic schema framework unless manifest validation becomes unreasonably complex without one.

### Acceptance criteria

- [x] The migration package builds with all required dependencies.
- [x] Required dependencies are direct declarations, not transitive reliance.
- [x] The packed package contains every runtime dependency.
- [x] New implementation code uses a standard semantic-version library rather than a custom comparator.

* The migration package builds with the new dependencies.
* All dependencies are declared in the migration package rather than relying on transitive monorepo dependencies.
* The published package contains every required runtime dependency.
* No custom semantic-version comparator is used by new implementation code.

---

## S3 — Establish the target package structure

**Depends on:** S2

### Goal

Create the intended module boundaries before moving core behavior.

### Current status

- [x] Create `lib/cli`, `lib/core`, `lib/project`, `lib/operations/rename-prop`, and framework adapter subdirectories.
- [x] Move CLI, project, operation, and framework code into the target boundaries.
- [x] Keep the public `runMigration` export working through the move.
- [x] Check dependency direction and circular-import behavior.
- [x] **Status: COMPLETE.** The intended boundaries exist; framework adapters live under `lib/adapters/` rather than `lib/runners/`, and legacy runner helpers remain temporarily under `lib/runners/`.

### Work

Create the following structure:

```text
packages/migrations/lib/
├── cli/
├── core/
│   ├── executor.ts
│   ├── executor-registry.ts
│   └── execute-steps.ts
├── project/
├── operations/
│   └── rename-prop/
│       └── executor.ts
└── runners/
    ├── shared/
    ├── react/
    ├── vue/
    └── html/
```

Move existing code without materially changing behavior where practical:

* CLI parsing into `lib/cli`.
* Shared types into `lib/core`.
* Project detection into `lib/project`.
* Rename-property types into `lib/operations/rename-prop`.
* Framework code into framework directories.
* Naming utilities may remain at `lib/naming.ts`.

### Acceptance criteria

- [x] The migration package compiles after the module move.
- [x] CLI, core, and framework adapters have no circular dependencies.
- [x] Framework adapters depend on core types, not the reverse.
- [x] `runMigration` remains publicly exported.

* The migration package compiles after the move.
* No circular dependencies exist between CLI, core and framework adapters.
* Framework adapters depend on core domain types.
* Core modules do not depend on framework adapters.
* Public exports continue to expose `runMigration`.

---

# Phase 2 — Foundational architecture

## F1 — Introduce the canonical release manifest

**Depends on:** S3

### Goal

Replace the flat manifest with a versioned, extensible release model.

### Current status

- [x] Define `MigrationManifest`, `MigrationRelease`, `MigrationOperation`, and `RenamePropOperation` with the specified fields.
- [ ] **PARTIAL:** `migrations/manifest.json` is the canonical release-based manifest, but `migrations/v1.json` is still generated as a legacy flat export for `wrapper-angular` and has not been fully removed yet.
- [x] Add operation-specific validation under `operations/rename-prop/validate.ts`.
- [x] Validate schema version, release versions, operation IDs, names, self-renames, unknown types, and conflicting operations.
- [x] Normalize valid manifests into immutable objects.
- [x] **Status: PARTIAL.** The canonical loader, types, and validation are complete; only the legacy `v1.json` export remains.

### Work

Define:

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

Replace:

```text
migrations/v1.json
```

with:

```text
migrations/manifest.json
```

Move operation-specific validation into:

```text
operations/rename-prop/validate.ts
```

Validate:

* Schema version.
* Release shape.
* Semantic release versions.
* Unique release versions.
* Unique operation IDs.
* Non-empty component, source and target names.
* `from !== to`.
* Unknown operation types.
* Conflicting operations for the same component and source property.

### Design constraint

Do not define property-value or property-split schemas yet.

The manifest envelope must allow them to be added later without redesigning release grouping.

### Acceptance criteria

- [x] Valid release manifests load through one default and custom-config path.
- [x] Invalid manifests fail before project file collection.
- [x] Duplicate release versions fail.
- [x] Duplicate operation IDs fail.
- [x] Self-renames fail.
- [x] Conflicting targets for the same component/source property fail.

* Valid manifests load into normalized immutable objects.
* Invalid manifests fail before project file collection.
* Duplicate release versions fail.
* Duplicate operation IDs fail.
* Self-renames fail.
* Conflicting target names for the same source property fail.
* A custom manifest supplied by `--config` uses the same loader and validation path.

---

## F2 — Implement source-to-target release selection

**Depends on:** F1

### Goal

Correctly select migration releases crossed by an upgrade.

### Current status

- [x] Add `semver`-based `selectMigrationReleases`.
- [x] Implement the exclusive-source/inclusive-target range rule.
- [x] Sort selected releases semantically while preserving operation order.
- [x] Reject invalid versions and downgrades.
- [x] Handle equal versions, prereleases, canaries, and build metadata.
- [x] Remove `lib/version.ts` after migration of all consumers.
- [x] **Status: COMPLETE.** Release selection uses `semver`, rejects downgrades, and treats canary/prerelease versions as part of their base release.

### Work

Use `semver` to implement:

```text
fromVersion < releaseVersion <= toVersion
```

Add:

```ts
selectMigrationReleases(
  manifest,
  fromVersion,
  toVersion
): SelectedMigrationRelease[];
```

Behavior:

* Sort selected releases in ascending semantic-version order.
* Preserve operation order within each release.
* Reject invalid versions.
* Reject downgrades.
* Treat equal source and target versions as a no-op.
* Cover prereleases, canaries and build metadata.

Remove the old custom `version.ts` implementation after all consumers have migrated.

### Acceptance criteria

- [x] `39.5.0 → 40.0.0` selects v40.
- [x] `38.0.0 → 40.0.0` selects all crossed releases.
- [x] Equal versions select no releases.
- [x] `40.0.0 → 41.0.0` does not rerun v40.
- [x] Reverse-ordered manifest entries execute in ascending order.
- [x] Downgrades fail before source analysis.
- [x] Canary behavior is covered by tests.

* `39.5.0 → 40.0.0` selects v40.
* `38.0.0 → 40.0.0` selects all crossed releases.
* `40.0.0 → 40.0.0` selects none.
* `40.0.0 → 41.0.0` does not rerun v40.
* Reverse-ordered manifest entries still execute ascending.
* Downgrades fail before source analysis.
* Canary-version behavior is covered by tests.

---

## F3 — Refactor project detection and version resolution

**Depends on:** F2

### Goal

Resolve framework, source version and target version without confusing dependency declarations with installed versions.

### Current status

- [x] Split project detection into package JSON, pnpm lockfile, and version-resolution modules.
- [x] Add explicit `--from` and `--to` handling to the project/version model.
- [x] Resolve source versions from explicit input, pnpm lockfile, exact declaration, or actionable failure.
- [x] Resolve target versions from explicit input or the installed migration package version.
- [x] Return the specified `DetectedProject` and `UpgradeRange` shapes.
- [x] **Status: COMPLETE.** Framework detection, lockfile resolution, and explicit upgrade-range resolution are implemented and tested.

### Work

Split current project logic into:

```text
project/
├── detect-project.ts
├── package-json.ts
├── pnpm-lockfile.ts
└── resolve-versions.ts
```

Retain current official-package framework detection.

Resolve the source version in this order:

1. Explicit `--from`.
2. Resolved version from `pnpm-lock.yaml`.
3. Exact package.json dependency declaration.
4. Otherwise fail and request `--from`.

Resolve the target version in this order:

1. Explicit `--to`.
2. Installed migration package version.

Return:

```ts
interface DetectedProject {
  rootDirectory: string;
  framework: CodemodFramework;
  designSystemPackage: string;
  declaredVersion?: string;
}

interface UpgradeRange {
  fromVersion: string;
  toVersion: string;
}
```

### Informed MVP default

Only `pnpm-lock.yaml` is required.

npm and Yarn lockfiles are deferred.

### Acceptance criteria

- [x] React, Vue, Angular, and HTML fixtures select the expected framework.
- [x] Multiple official wrappers require `--framework`.
- [x] A pnpm lockfile version overrides a broad dependency range.
- [x] Exact declarations work without a lockfile.
- [x] Broad ranges without a lockfile fail with an actionable `--from` request.
- [x] Explicit `--from` and `--to` override automatic resolution.
- [x] Consumer dependency ranges are not used as the target version.

* React, Vue, Angular and HTML package fixtures select the correct framework.
* Multiple official wrapper packages require `--framework`.
* A pnpm lockfile version overrides a broad dependency range.
* An exact dependency declaration works without a lockfile.
* `^39.0.0` without a lockfile fails with an actionable message.
* Explicit `--from` and `--to` override automatic resolution.
* The target version is not inferred from the consumer dependency range.

---

## F4 — Add structured diagnostics and edit primitives

**Depends on:** F3

### Goal

Establish reusable analysis output before refactoring framework transformations.

### Current status

- [x] Define `MigrationDiagnostic` and `TextEdit`.
- [x] Implement range validation, duplicate-edit removal, overlap detection, reverse-order application, and line-ending preservation.
- [x] Add the DDS diagnostic codes listed in the specification.
- [x] Include operation IDs and source locations where available.
- [x] **Status: COMPLETE.** `MigrationDiagnostic`, `TextEdit`, `applyEdits`, and the DDS diagnostic codes are implemented and tested.

### Work

Define:

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

interface TextEdit {
  start: number;
  end: number;
  replacement: string;
  operationId: string;
}
```

Implement edit validation:

* Reject negative ranges.
* Reject out-of-bounds ranges.
* Deduplicate identical edits.
* Reject overlapping non-identical edits.
* Apply edits from the end of the source toward the beginning.
* Preserve all text outside edited ranges.

Add initial diagnostic codes:

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

### Acceptance criteria

- [x] Non-overlapping edits produce the expected output.
- [x] Exact duplicate edits apply once.
- [x] Conflicting overlaps produce an error.
- [x] LF and CRLF remain unchanged outside edited ranges.
- [x] Diagnostics include operation IDs and locations where applicable.
- [x] Diagnostic ordering is deterministic.

* Non-overlapping edits produce expected output.
* Exact duplicate edits are applied once.
* Conflicting overlaps produce an error.
* LF and CRLF are preserved.
* Diagnostics include operation IDs and source locations where applicable.
* Diagnostic ordering is deterministic.

---

## F5 — Introduce migration step executors **(NEW FOUNDATIONAL TASK)**

**Depends on:** F4

### Goal

Decouple selected migration definitions from their implementation so future feature-specific migration code can use the same release, planning, diagnostic, conflict and transactional-write systems.

### Current status

- [x] Define the executor interface and ordered internal migration-step definition.
- [x] Define the project-level `MigrationAnalysis` result.
- [x] Add a static internal executor registry.
- [x] Register only `rename-prop`.
- [x] Implement `RenamePropExecutor` and framework-adapter selection.
- [x] Add deterministic duplicate- and missing-registration failures.
- [x] Add ordered multi-step aggregation and central cross-step conflict tests.
- [x] **Status: COMPLETE.** `RenamePropExecutor` receives adapters via constructor injection, the registry rejects duplicates and missing types, and cross-step conflicts are validated centrally.

### Work

Define an internal boundary similar to:

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

interface MigrationAnalysis {
  fileAnalyses: FileAnalysis[];
  diagnostics: MigrationDiagnostic[];
}
```

Implement:

* The executor interface.
* The project-level migration analysis result.
* A read-only execution context that permits multi-file or whole-project analysis.
* An internal registry of statically registered trusted executors.
* Deterministic duplicate-registration rejection during initialization.
* Deterministic failure for an unregistered selected step type.
* Registry preflight for all selected steps before analysis proceeds.
* `RenamePropExecutor` as the only MVP registration.
* Framework-adapter selection inside `RenamePropExecutor`.
* Relevant source-file collection or requests inside `RenamePropExecutor`.
* Aggregation of adapter file analyses into one project-level result.
* Step execution in release and manifest order.
* Aggregation of results from multiple steps into an in-memory project view.
* Central detection of cross-step overlapping, stale or incompatible edits.

### Design constraints

* The orchestrator contains no rename-property AST or template logic.
* Framework adapters remain responsible only for framework syntax, component provenance, exact edits and diagnostics.
* Executors and adapters perform no writes.
* A future executor may inspect multiple files or the whole project without implementing the rename-property adapter interface.
* The registry is internal trusted package infrastructure, not a public custom-migration API.
* Do not add a plugin system, dynamic manifest import, consumer-code execution, `"code-migration"` operation, generic lifecycle hooks or dependency-injection infrastructure.
* The public MVP manifest continues to accept only `rename-prop`.

### Acceptance criteria

- [x] `rename-prop` is executed through the registry.
- [x] The orchestrator contains no rename-property AST logic.
- [x] An unknown or unregistered step type fails before writes.
- [x] Duplicate registrations fail during initialization.
- [x] Multiple steps execute in deterministic release and manifest order.
- [x] Results from multiple executors can be merged.
- [x] Cross-step overlapping edits are detected centrally.
- [x] The executor interface permits project-level or multi-file analysis.
- [x] No public custom-migration API or JSON type is introduced.

* `rename-prop` is the only registered MVP executor.
* The executor delegates framework syntax work to React, Vue, HTML or Angular adapters.
* Missing and duplicate registrations produce deterministic failures.
* Multi-step results use the shared diagnostics and migration-plan model.
* No executor or adapter writes project files.

---

## F6 — Replace transformations with a combined analysis plan **(RENUMBERED FROM F5)**

**Depends on:** F5

### Goal

Ensure all selected migration steps and source files are analysed, merged and conflict-validated before any file is modified.

### Current status

- [x] Define `FileAnalysis`, `PlannedFileChange`, `MigrationPlan`, and the in-memory project view.
- [x] Replace `transformFile` with `analyseFile` on the rename-adapter contract.
- [x] Implement ordered `executeMigrationSteps`, combined plan creation, conflict validation, and `applyMigrationPlan`.
- [x] Merge project-level results from every selected executor.
- [x] Validate cross-step edits centrally before writes.
- [x] Block all writes when any analysed file has an error diagnostic.
- [x] Make dry-run and apply use the same plan and diagnostics.
- [x] **Status: COMPLETE.** `analyseMigration()` builds an in-memory `MigrationPlan`; `applyMigrationPlan()` writes only after successful analysis and is skipped on `--dry-run`.

### Work

Define:

```ts
interface FileAnalysis {
  kind: "modify";
  filePath: string;
  baseRevision: number;
  originalContent: string;
  edits: TextEdit[];
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
  processedFileCount: number;
  fileChanges: PlannedFileChange[];
  diagnostics: MigrationDiagnostic[];
}
```

Replace the transformation-oriented runner contract with the rename-property adapter contract used by `RenamePropExecutor`:

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

Implement:

```ts
executeMigrationSteps(steps, registry, context): Promise<MigrationAnalysis[]>
analyseMigration(options): Promise<MigrationPlan>
applyMigrationPlan(plan): Promise<void>
```

Rules:

* Analysis performs no writes.
* Every selected executor type is preflighted before step execution.
* Steps execute in release and manifest order against the in-memory project view.
* Project-level executor results are merged into one plan.
* Cross-step overlapping, stale and incompatible edits are validated centrally.
* Any error diagnostic blocks every write.
* Dry-run returns and prints the same plan without applying it.
* Warnings do not block safe changes.
* Files are written only after complete successful analysis.

### Acceptance criteria

- [x] A conflict in a later file prevents writes to earlier files.
- [x] Results from multiple ordered steps produce one deterministic plan.
- [x] Cross-step edit conflicts are reported by central plan validation.
- [x] Dry-run and apply produce identical plans and diagnostics.
- [x] Dry-run changes no files.
- [x] No-op migrations produce no file changes.
- [x] Reapplying a migration is a no-op.

* A conflict in the final analysed file prevents writes to earlier files.
* Executor analyses are aggregated before apply begins.
* Dry-run and apply produce identical planned changes and diagnostics.
* Dry-run changes no files.
* A no-op migration produces an empty change list.
* A second application of the same migration produces no changes.

---

## F7 — Harden file collection and package execution **(RENUMBERED FROM F6)**

**Depends on:** F6

### Goal

Make the shared execution environment production-safe before implementing framework stories.

### Current status

- [x] Add `.angular` and `.nuxt` to built-in exclusions.
- [x] Respect the root `.gitignore` during deterministic file collection.
- [x] Skip binary files safely while retaining framework extension lists.
- [x] Binary-safe file reading helper exists in the current runner helpers.
- [x] Binary, `bin`, and `migrations` package inclusion is declared in `package.json`.
- [x] The binary imports `../dist/index.js` relatively.
- [x] Add the migration package to the root build graph.
- [x] Verify packed execution from a clean consumer project.
- [x] **Status: COMPLETE.** File collection respects `.gitignore` and built-in exclusions, the binary is packaged correctly, and the packed CLI smoke test passes.

### Work

File collection:

* Preserve deterministic path ordering.
* Retain current built-in exclusions.
* Add:

  * `.angular`.
  * `.nuxt`.
* Respect root `.gitignore`.
* Skip binary files safely.
* Keep framework-specific extension lists.

Package execution:

* Change the binary to import `../dist/index.js` relatively.
* Add package `exports`.
* Ensure `dist`, `bin` and `migrations` are included in the published tarball.
* Add the migration package to the root build graph.

### Acceptance criteria

- [x] Ignored directories and root `.gitignore` patterns are not processed.
- [x] Binary files do not fail migration analysis.
- [x] `pnpm pack` includes the executable, manifest, and runtime output.
- [x] A clean tarball consumer can run `npx dds-migrate --help`.
- [x] A clean consumer can import the package entry point.
- [x] The root build includes the migration package.

* Ignored directories are not processed.
* Root `.gitignore` patterns are respected.
* Binary files do not fail the migration.
* `pnpm pack` includes the executable and manifest.
* Installing the tarball into a clean project allows:

  * `npx dds-migrate --help`.
  * Importing the package entry point.
* The root build includes the migration package.

---

# Phase 3 — User stories in priority order

## U1 — React direct property rename

**Depends on:** F7 **(CHANGED FROM F6)**

### User story

As a React consumer, I can migrate direct properties on official DDS wrapper components while unrelated components remain untouched.

### Current status

- [x] Split React parsing into `lib/adapters/react/index.ts`, `imports.ts`, and `jsx.ts`.
- [x] Existing React code uses the official wrapper import source and alias lookup.
- [x] Existing React code uses tag-name-to-wrapper-name conversion.
- [x] Detect target-property conflicts and emit blocking diagnostics.
- [x] Replace full AST printing with exact property-name text edits.
- [x] Re-establish direct React fixtures after the current integration test file deletion.
- [x] **Status: COMPLETE.** React direct JSX props are renamed with exact text edits; conflicts produce blocking diagnostics and the integration tests pass.

### Work

Refactor React parsing into:

```text
runners/react/
├── index.ts
├── imports.ts
└── jsx.ts
```

Reuse:

* jscodeshift TSX parser.
* Existing official-wrapper import lookup.
* Existing alias resolution.
* Existing tag-name-to-wrapper-name conversion.

Implement:

1. Collect named imports from the official React wrapper.
2. Resolve local aliases.
3. Match JSX opening elements using those local names.
4. Find the old property.
5. Detect whether the target property already exists.
6. Emit a blocking conflict when both exist.
7. Otherwise emit a text edit covering only the property name.
8. Avoid full AST reprinting.

### Supported cases

```tsx
<IfxTextField success />
<IfxTextField success="true" />
<IfxTextField success={true} />
<IfxTextField success={isValid} />
<IfxTextField success={expression} />
```

Aliased import:

```tsx
import { IfxTextField as Field } from "...";

<Field success />
```

### Explicit non-targets

* Same component name imported from another package.
* Third-party components.
* JSX member expressions unless explicitly supported later.
* Unimported matching component names.

### Acceptance criteria

- [x] All direct JSX property forms migrate.
- [x] Official aliases migrate.
- [x] Third-party same-name components remain unchanged.
- [x] Non-target components remain unchanged.
- [x] Existing target properties produce blocking conflicts.
- [x] Only property-name ranges change.
- [x] Formatting and line endings remain unchanged.
- [x] A second execution is a no-op.

* All direct property forms migrate.
* Official aliases migrate.
* Third-party same-name components remain unchanged.
* Non-target components remain unchanged.
* Existing target property produces a blocking conflict.
* Only the property-name range changes.
* Formatting and line endings remain unchanged.
* Second execution is a no-op.

---

## U2 — React same-file local prop objects

**Depends on:** U1

### User story

As a React consumer, I can migrate a local static prop object when it is used only as props for the affected DDS component.

### Current status

- [x] Legacy code recognizes same-file `const` object literals used by JSX spreads.
- [x] Move local-spread analysis into `lib/adapters/react/local-spreads.ts`.
- [x] Verify every object reference is a compatible target spread.
- [x] Reject exported, imported, helper-returned, shared, and ambiguous objects with structured diagnostics.
- [x] Preserve safe direct-property edits alongside local-spread edits.
- [x] **Status: COMPLETE.** Same-file spread rewriting is implemented in `lib/adapters/react/local-spreads.ts`, wired into `ReactRenamePropAdapter`, and covered by adapter tests.

### Work

Create:

```text
lib/adapters/react/local-spreads.ts
```

Support:

```tsx
const props = {
  success: isValid
};

<IfxTextField {...props} />
```

Safety conditions:

* Declaration uses `const`.
* Initializer is a plain object literal.
* Object is declared in the same file.
* Property key is statically identifiable.
* Object is not exported.
* All detected references are supported JSX spreads.
* Every spread target is compatible with the operation.
* Object is not passed to arbitrary functions.

Behavior:

* Safe object: edit the object property key.
* Shared or ambiguous object: leave unchanged and emit `DDS002`.
* Imported object: leave unchanged and optionally emit `DDS003`.
* Helper result: leave unchanged and optionally emit `DDS004`.

### Acceptance criteria

- [x] One safe local spread migrates.
- [x] Multiple compatible spreads migrate the object once.
- [x] Mixed target/third-party usage remains unchanged.
- [x] Exported objects remain unchanged.
- [x] Imported objects remain unchanged.
- [x] Helper-returned objects remain unchanged.
- [x] Warning locations identify the spread or declaration.
- [x] Direct safe properties still migrate.

* One safe local spread migrates.
* Multiple spreads into the same target component migrate once.
* A spread into a target and third-party component remains unchanged.
* Exported objects remain unchanged.
* Imported objects remain unchanged.
* Helper-returned objects remain unchanged.
* Warning location points to the spread or declaration.
* Direct safe properties in the same file still migrate.

---

## U3 — Vue direct property rename

**Depends on:** U1
**Can run in parallel with:** U2 after shared React behavior is stable

### User story

As a Vue consumer, I can migrate direct properties in Vue templates, JSX and render functions.

### Current status

- [x] Existing Vue code initializes Vue SFC and template parsers.
- [x] Existing Vue code handles template attributes, bindings, JSX, and `h`/`createVNode` render calls in legacy form.
- [x] Existing Vue code supports official wrapper import lookup and aliases through shared JSX handling.
- [x] Split the runner into the specified template, JSX, and render-function modules.
- [x] Add target-property conflict diagnostics and exact source edits.
- [x] Re-establish and run the complete Vue direct-property fixture set.
- [x] **Status: COMPLETE.** Vue direct props in SFC templates, JSX, and `h`/`createVNode` render functions are renamed with exact source edits; conflicts produce blocking diagnostics and the adapter and integration tests pass.

### Work

Split current Vue runner into:

```text
runners/vue/
├── index.ts
├── template.ts
├── jsx.ts
└── render-functions.ts
```

Template support:

```vue
<ifx-text-field success />
<ifx-text-field success="true" />
<ifx-text-field :success="isValid" />
<IfxTextField :success="isValid" />
```

JSX support:

* Reuse the shared JSX analysis approach.
* Use the official Vue wrapper import source.
* Preserve alias resolution.

Render-function support:

```ts
h(IfxTextField, { success: value })
createVNode(IfxTextField, { success: value })
h("ifx-text-field", { success: value })
```

Only statically known target components are eligible.

Conflict behavior:

* Old and new property on the same component produce a blocking error.

### Acceptance criteria

- [x] Static and bound Vue attributes migrate.
- [x] PascalCase and kebab-case target names migrate.
- [x] Non-target and native elements remain unchanged.
- [x] Official Vue JSX imports and aliases migrate.
- [x] Third-party imports remain unchanged.
- [x] Supported render-function calls migrate.
- [x] Existing target properties block writes.
- [x] Only required source ranges change.
- [x] All cases are idempotent.

* Static Vue attributes migrate.
* Bound Vue attributes migrate.
* PascalCase and kebab-case target names migrate.
* Non-target and native elements remain unchanged.
* Vue JSX official imports migrate.
* Vue JSX third-party imports remain unchanged.
* Supported `h` and `createVNode` usages migrate.
* Existing target properties block all writes.
* Only required source ranges change.
* All cases are idempotent.

---

## U4 — Vue same-file `v-bind` objects

**Depends on:** U3

### User story

As a Vue consumer, I can migrate a local static prop object used through `v-bind` on the affected component.

### Current status

- [x] Legacy Vue code identifies simple `v-bind="identifier"` expressions on target elements.
- [x] Legacy Vue code finds same-file `const` object literals for those bindings.
- [ ] Move binding analysis into `runners/vue/local-bindings.ts`.
- [ ] Add reference-safety checks for all uses and target compatibility.
- [ ] Add conflict diagnostics and exact edits.
- [ ] **Status: PARTIAL.** Basic local binding support exists, but safety, diagnostics, and transactional planning are absent.

### Work

Create:

```text
runners/vue/local-bindings.ts
```

Reuse the current logic that identifies:

```vue
<ifx-text-field v-bind="props" />
```

and same-file `const` object declarations.

Add reference-safety analysis equivalent to React:

* Same-file `const`.
* Plain object literal.
* Simple identifier binding.
* No export.
* No arbitrary calls.
* All uses target compatible components.

### Acceptance criteria

- [ ] A safe local `v-bind` object migrates.
- [ ] Multiple compatible target instances migrate once.
- [ ] Shared third-party usage remains unchanged.
- [ ] Imported bindings remain unchanged.
- [ ] Function-call bindings remain unchanged.
- [ ] Target conflicts block all writes.
- [ ] Output is idempotent.

* A safe local `v-bind` object migrates.
* An object used by multiple compatible target instances migrates once.
* An object shared with a third-party component remains unchanged.
* Imported bindings remain unchanged.
* Function-call bindings remain unchanged.
* Target conflict in the object or element blocks writes.
* Output is idempotent.

---

## U5 — Plain HTML property rename

**Depends on:** F7 **(CHANGED FROM F6)**
**Can run in parallel with:** U3 and U4

### User story

As a plain Web Components consumer, I can migrate attributes on the exact affected custom element without changing JavaScript application properties.

### Current status

- [x] The intended MVP boundary is documented: HTML markup only, no JavaScript property/API rewriting.
- [x] The current repository still has parse5 available as a package dependency.
- [x] Restore the missing HTML runner using the markup-only implementation.
- [x] Restrict collection to `.html` and `.htm`.
- [x] Match exact custom-element tags and rename only static attribute names.
- [x] Detect existing target attributes and emit blocking conflicts.
- [x] **Status: COMPLETE.** The markup-only HTML runner is implemented in `lib/adapters/html-adapter.ts`, collects `.html`/`.htm`, and emits exact attribute-name edits with blocking conflict diagnostics.

### Work

Reduce the HTML runner to:

```text
runners/html/
├── index.ts
└── template.ts
```

For the MVP:

* Collect `.html` and `.htm`.
* Parse with parse5.
* Match exact custom-element tags.
* Rename static attribute names.
* Detect existing target attributes.
* Record exact attribute-name edits.

Do not migrate:

* JavaScript property access.
* Bracket property access.
* `setAttribute`.
* `Object.assign`.
* Inline script contents.
* External `.js` or `.ts`.
* `innerHTML` and template strings.

### Acceptance criteria

- [x] Target custom-element attributes migrate.
- [x] Native, other DDS, and unrelated custom elements remain unchanged.
- [x] Existing target attributes block all writes.
- [x] Inline scripts remain unchanged.
- [x] Markup strings remain unchanged.
- [x] Only attribute-name ranges change.
- [x] Output is idempotent.

* Target custom-element attributes migrate.
* Native elements remain unchanged.
* Other DDS components remain unchanged.
* Other custom elements remain unchanged.
* Existing target attribute blocks all writes.
* Inline script code remains unchanged.
* Markup strings remain unchanged.
* Only attribute-name ranges change.
* Output is idempotent.

---

## U6 — Angular `ng update` property rename

**Depends on:** F6 **(CHANGED FROM F1, F2 AND F4)**
**Recommended after:** U3 and U5, so template conflict behavior is established

### User story

As an Angular consumer, I can apply the same property-renaming definitions through the framework-native `ng update` workflow.

### Current status

- [x] Angular migration scaffolding and `ng update` metadata exist under `packages/wrapper-angular/migrations`.
- [ ] Restructure Angular migration files into the specified `lib`, `releases`, `shared`, and metadata layout.
- [ ] Package and validate the canonical manifest in `shared/manifest.json`.
- [ ] Load only the exact release operations for v40.
- [ ] Construct the trusted executor registry with only `RenamePropExecutor`.
- [ ] Delegate Angular syntax analysis through the Angular rename-property adapter.
- [ ] Implement template-only static, property, and attribute binding edits.
- [ ] Merge executor results and validate conflicts before any tree overwrite.
- [ ] Verify packed Angular execution and both Angular consumer fixtures.
- [ ] **Status: PARTIAL.** Template and class-body behavior are covered by legacy tests, but the wrapper still reads `shared/v1.json`, lacks the executor registry, and does not validate conflicts before `tree.overwrite`.

### Work

Restructure Angular migrations:

```text
packages/wrapper-angular/migrations/
├── lib/
│   ├── manifest.js
│   ├── edits.js
│   ├── diagnostics.js
│   └── migrate-template.js
├── releases/
│   └── v40/
│       └── index.js
├── shared/
│   └── manifest.json
└── migrations.json
```

Manifest packaging:

* Make `shared` a directory.
* Copy the canonical manifest to `shared/manifest.json`.
* Remove ambiguous file/directory fallback logic.
* Validate the copied file during prepack.

Release loading:

* `releases/v40/index.js` loads operations for exactly `40.0.0`.
* Reject unsupported operation types.
* Do not duplicate the standalone CLI’s complete source-version logic.

Template support:

```html
<ifx-text-field success="true"></ifx-text-field>
<ifx-text-field [success]="isValid"></ifx-text-field>
<ifx-text-field [attr.success]="value"></ifx-text-field>
```

Support:

* External templates.
* Inline component templates.
* Angular binding expressions without modifying their contents.

Exclude:

* Angular class-body property access.
* `nativeElement.success`.
* Renderer property calls.
* Generic `setAttribute`.
* `Object.assign`.

Transactional tree behavior:

1. Normalize the exact release operations into ordered step definitions.
2. Preflight the trusted executor registry.
3. Execute `RenamePropExecutor` with the Angular adapter.
4. Analyse all `.html` and `.ts` files into a project-level result.
5. Merge proposed overwrites and validate cross-step conflicts centrally.
6. Throw before `tree.overwrite` when a conflict exists.
7. Otherwise apply the combined plan.

### Acceptance criteria

- [ ] Angular package contains `shared/manifest.json`.
- [ ] v40 operations match the canonical manifest.
- [x] External and inline templates migrate.
- [x] Static, property, and attribute bindings migrate.
- [x] Binding expressions remain unchanged.
- [x] Non-target selectors remain unchanged.
- [ ] Existing target bindings block all schematic overwrites.
- [ ] Angular `rename-prop` runs through the executor registry.
- [x] Class-body property accesses remain unchanged.
- [x] Packed `ng update` executes successfully.
- [ ] Standalone and module-based Angular fixtures build afterward.

* Angular package contains `shared/manifest.json`.
* v40 operations match the standalone canonical manifest.
* External templates migrate.
* Inline templates migrate.
* Static, property and attribute bindings migrate.
* Binding expressions remain unchanged.
* Non-target selectors remain unchanged.
* Existing target bindings block all schematic overwrites.
* Class-body property accesses remain unchanged.
* Packed `ng update` executes successfully.
* Standalone and module-based Angular fixtures build afterward.

---

# Phase 4 — Polish and production hardening

## P1 — Complete CLI behavior and reporting

**Depends on:** U1–U6

### Goal

Expose the MVP through a clear, stable command-line experience.

### Current status

- [x] Legacy CLI supports `--cwd`, `--framework`, `--config`, `--dry-run`, and `--help` parsing.
- [x] Add explicit `--from` and `--to` parsing and version reporting.
- [ ] Split CLI options, output, and execution into the specified modules.
- [ ] Report selected releases, rename counts, operation IDs, locations, warnings, and errors.
- [ ] Implement the specified exit-code categories.
- [x] Redirect Angular users without modifying files.
- [ ] **Status: PARTIAL.** `--from`/`--to`, framework detection, dry-run, and Angular redirection work, but the CLI is still monolithic and does not report selected releases, operation IDs, locations, or exit-code categories.

### Work

Split CLI code into:

```text
cli/
├── options.ts
├── output.ts
└── run.ts
```

Support:

```text
--cwd
--framework
--from
--to
--config
--dry-run
--help
```

Behavior:

* Automatically detect framework where unambiguous.
* Redirect Angular users to `ng update`.
* Print source and target versions.
* Print selected releases.
* Print processed and modified file counts.
* Print rename count.
* List changed files and operation IDs.
* Print warnings and errors with locations.
* Clearly report no-op migrations.

Exit codes:

```text
0 success, dry-run or no-op
1 validation, version, parse or migration conflict
2 invalid invocation or Angular redirection
```

### Acceptance criteria

- [ ] Every CLI option has an integration test.
- [x] Invalid values stop before analysis.
- [x] Angular execution changes no files and prints the exact update command.
- [x] Dry-run and apply summaries match.
- [ ] No-op output is clear.
- [x] Diagnostic output ordering is deterministic.
- [ ] Exit-code categories are covered.

* Every option has an integration test.
* Invalid values do not start analysis.
* Angular execution changes no files and prints the exact update command.
* Dry-run summary matches apply summary.
* No-op output is clear.
* Diagnostic output ordering is deterministic.
* Exit-code tests cover all categories.

---

## P2 — Build packed-package and consumer integration tests

**Depends on:** P1

### Goal

Test the same artifacts and commands that consumers will use.

### Current status

- [x] A legacy packed CLI smoke test exists for the migration package.
- [ ] Expand packed tests to clean React, Vue, HTML/Vite, and Angular consumers.
- [ ] Test installed tarballs rather than source-level imports only.
- [ ] Verify migration output, production builds, and second-run no-ops for every fixture.
- [x] Add conflict fixtures proving zero writes.
- [x] Add dry-run fixtures proving byte-identical files.
- [ ] **Status: PARTIAL.** The packed CLI smoke test passes and conflict/dry-run fixtures exist, but the full consumer build matrix is not covered yet.

### Work

Packed CLI:

```text
pnpm pack
install generated tarball
npx dds-migrate
```

Packed Angular wrapper:

* Install source and target package artifacts.
* Execute real `ng update`.

Consumer fixtures:

* React.
* Vue.
* HTML/Vite.
* Angular standalone.
* Angular module-based.

For each:

1. Install target design-system package.
2. Run migration.
3. Verify expected source changes.
4. Run production build.
5. Run migration again and verify no-op.

### Acceptance criteria

- [x] Packed CLI starts from a clean fixture.
- [x] Built-in manifest loads from the installed package.
- [ ] Every framework fixture builds after migration.
- [ ] Every fixture is idempotent.
- [x] Conflict fixtures confirm zero writes.
- [x] Dry-run fixtures confirm byte-identical files.

* Tests do not rely only on source-level imports.
* Packed CLI starts from a clean fixture.
* Built-in manifest loads from the installed package.
* Every framework fixture builds after migration.
* Every fixture is idempotent.
* A conflict fixture confirms zero writes.
* Dry-run fixture confirms byte-identical files.

---

## P3 — Add CI and publication coverage

**Depends on:** P2

### Goal

Make migration correctness part of normal repository validation and release publication.

### Current status

- [x] Add the migration package to the root Wireit/build graph.
- [ ] Add CI jobs for typecheck, unit, adapter, contract, packed, consumer, platform, and Node-version coverage.
- [ ] Add canary publication for the migration package.
- [ ] Ensure Angular canary packages contain the matching canonical manifest.
- [ ] Run a canary consumer migration smoke test.
- [ ] **Status: PARTIAL.** The migration package is in the root Wireit graph and `pnpm -r test` runs its tests, but dedicated migration CI jobs and canary publication do not exist yet.

### Work

Add migration package to the root Wireit build.

CI jobs:

* Type-check.
* Unit tests.
* Adapter tests.
* Contract tests.
* Packed CLI integration.
* Packed Angular integration.
* Consumer builds.
* Linux execution.
* Windows execution.
* All officially supported Node versions.

Canary publication:

* Publish the migration package with the related DDS canary.
* Ensure Angular package contains the matching canonical manifest.
* Run a canary consumer migration smoke test.

### Acceptance criteria

- [x] Root build includes migrations.
- [ ] Linux and Windows packed execution pass.
- [ ] Supported Node matrix passes.
- [ ] Canary workflow publishes the migration package.
- [ ] Canary Angular package contains the expected manifest.
- [ ] CI fails on manifest, adapter, or packed-execution regressions.

* Root build includes migrations.
* Linux and Windows packed execution pass.
* Supported Node matrix passes.
* Canary workflow publishes the migration package.
* Canary Angular package contains the expected manifest.
* CI fails when manifest validation, adapter behavior or packed execution regresses.

---

## P4 — Finalize documentation and real-project validation

**Depends on:** P3

### Goal

Prove the tool against representative consumers and accurately document its boundaries.

### Current status

- [ ] Document the canonical release manifest and release selection.
- [ ] Document the executor registry, `RenamePropExecutor`, framework adapters, combined analysis planning, conflict validation, apply phase, and Angular packaging.
- [ ] Document supported, manual-review, and unsupported patterns with tested examples.
- [ ] Run and review dry-runs on three representative internal repositories.
- [ ] Add regression fixtures for recurring unsupported patterns.
- [ ] Build at least one real consumer per framework after migration.
- [ ] Complete the PR description with architecture, scope, examples, and evidence.
- [ ] **Status: NOT STARTED.** Existing README/DOCS describe legacy flat-manifest behavior and do not prove the specified production workflow.

### Work

README:

* Purpose.
* React/Vue/HTML command.
* Angular command.
* Automatic version resolution.
* Explicit `--from` and `--to`.
* Dry-run.
* Supported patterns.
* Manual-review patterns.
* Unsupported patterns.
* Conflict behavior.
* Exit behavior.
* Adding a new property rename.

Architecture documentation:

* Canonical manifest.
* Release selection.
* Ordered migration-step definitions.
* Internal executor registry.
* `RenamePropExecutor`.
* Framework adapters.
* Project-level analyses and combined plan.
* Central cross-step conflict validation.
* Apply phase.
* Angular packaging.

Real-project validation:

* Run dry-run on at least three representative internal repositories.
* Review every planned change.
* Record recurring unsupported patterns.
* Add regression fixtures for discovered patterns.
* Apply and build at least one available real consumer per framework.
* Confirm zero known false positives.

PR description:

* Problem.
* MVP scope.
* Architecture.
* Reused codemod-branch code.
* Supported syntax.
* Known limitations.
* Before/after examples.
* Test evidence.
* Real-project validation evidence.

### Acceptance criteria

- [ ] Documentation matches tested behavior.
- [ ] Generic property access is explicitly documented as unchanged.
- [ ] Contributor instructions explain how to add another property rename.
- [ ] Three internal dry-runs have been reviewed.
- [ ] No known false positive remains.
- [ ] Recurring unsafe cases have negative fixtures.
- [ ] PR description is complete and ready for production review.

* Documentation matches tested behavior.
* Generic property access is explicitly documented as unchanged.
* Contributor instructions are sufficient to add another property rename.
* Three internal dry-runs have been reviewed.
* No known false positive remains.
* Every discovered recurring unsafe case has a negative fixture.
* PR description is complete and ready for production review.

---

# MVP cut line

The MVP is complete after P4.

The following must not be added before the MVP is validated through a real upgrade:

* Property-value renames.
* Property splitting.
* Package renames.
* Concrete feature-specific migration implementations.
* Cross-file prop-object resolution.
* Project-wide TypeScript symbol analysis.
* General programmatic DOM property migration.
* npm and Yarn lockfile support.
* JSON CLI output.
* Strict CI-warning mode.
* Automatic formatting.
* Automatic dependency installation.

The architecture is ready for future declarative operations or trusted feature-specific steps when adding one requires only:

1. A new internal step definition source and validator where applicable.
2. A statically registered trusted executor.
3. Framework-specific implementations where required.
4. Contract fixtures.
5. Documentation.

It must not require redesigning release selection, ordered step orchestration, analysis planning, diagnostics, cross-step conflict validation, transactional apply, CLI reporting or Angular packaging.

The MVP public manifest remains limited to `rename-prop`. Do not add a public custom-migration API, plugin system, dynamic manifest imports, consumer-code execution, a `"code-migration"` operation, lifecycle hooks, dependency-injection infrastructure or a general-purpose migration language.