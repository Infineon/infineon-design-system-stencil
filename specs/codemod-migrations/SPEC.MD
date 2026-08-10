# Infineon Design System Property Rename Migration MVP

**Status:** Proposed
**Target:** First production-ready migration capability
**Package:** `@infineon/design-system-migrations`
**CLI:** `dds-migrate`
**Angular execution:** `ng update @infineon/infineon-design-system-angular`

---

# 1. Overview

## 1.1 Purpose

The Property Rename Migration MVP automatically updates consumer code when an Infineon Design System component property is renamed in a new design-system release.

The tool must support property renames across:

* React applications using the official React wrapper.
* Vue applications using the official Vue wrapper.
* Angular applications using the official Angular wrapper.
* Plain HTML and JavaScript applications using the Web Components package.

The MVP must provide one complete, production-usable operation on a generic internal migration platform. Property-value rename is the concrete planned second operation, but it is not implemented partially in this release.

## 1.2 Problem statement

Property renames require consumers to update every affected component usage when upgrading the design system.

Manual migration is:

* Time-consuming.
* Error-prone.
* Difficult to review in large applications.
* Inconsistent across frameworks.
* Particularly risky when an old property name is also a common application-level property, such as `success`, `value`, `type` or `variant`.

The migration tool must automate usages that can be associated confidently with a specific design-system component while leaving ambiguous application code unchanged.

## 1.3 Primary user outcome

A consumer upgrading across a release containing property renames can run one framework-appropriate command and receive:

* Safe component property renames applied automatically.
* A preview of changes before files are written.
* A summary of changed files and applied operations.
* Actionable diagnostics for unsupported or ambiguous usages.
* No partial migration if a blocking conflict is detected.
* Source code that remains syntactically valid and buildable.

## 1.4 MVP scope

The MVP supports one semantic operation:

```ts
interface RenamePropOperation {
  id: string;
  type: "rename-prop";
  component: string;
  from: string;
  to: string;
}
```

Example:

```json
{
  "id": "v40-text-field-success-to-valid",
  "type": "rename-prop",
  "component": "ifx-text-field",
  "from": "success",
  "to": "valid"
}
```

The MVP includes:

* Versioned migration releases.
* Explicit source-to-target version selection.
* React property renames.
* Vue property renames.
* Angular property renames through `ng update`.
* Plain HTML property renames.
* Component import and alias resolution.
* Conflict detection.
* Dry-run support.
* Transactional writes.
* Structured internal diagnostics.
* Idempotency.
* Published-package integration tests.
* Documented supported and unsupported patterns.

## 1.5 Out of scope

The MVP does not support:

* Executing property-value renames in this first release. The operation is planned and drives the executor boundary.
* Splitting one property into multiple properties.
* Removing properties.
* Renaming components.
* Renaming events or slots.
* Package renames.
* Arbitrary custom migration scripts.
* JSX spread-object migration and local object reference tracking.
* Argumentless Vue `v-bind` object migration and template-scope dataflow.
* Cross-file prop-object tracing.
* Imported helper-function analysis.
* General TypeScript type analysis across a complete workspace.
* Receiver-unaware JavaScript property renaming.
* Markup stored in arbitrary strings or `innerHTML`.
* Dependency installation.
* Lockfile modification.
* Reverse migrations or downgrades.
* Automated Git commits.

Indirect syntax coverage may be reconsidered after production consumer runs identify valuable unsupported patterns. The internal registry, shared analysis plan and transactional apply path are the supported architecture for adding trusted package-owned operations such as property-value rename.

## 1.6 User commands

### React, Vue and plain Web Components

Default execution:

```bash
npx dds-migrate
```

Explicit upgrade range:

```bash
npx dds-migrate --from 39.5.0 --to 40.0.0
```

Preview:

```bash
npx dds-migrate --from 39.5.0 --to 40.0.0 --dry-run
```

Explicit framework:

```bash
npx dds-migrate --framework react
```

### Angular

Angular users run:

```bash
ng update @infineon/infineon-design-system-angular
```

The standalone CLI must not directly modify Angular projects. It must redirect Angular users to the framework-native update command.

The existing codemod branch already implements this redirection behavior and should retain it.

## 1.7 Design principles

### Safety over maximum coverage

The tool must automatically modify only usages associated confidently with the configured design-system component.

Unsupported or ambiguous usages may remain unchanged. Unrelated application code must never be changed solely because a property name matches a migration rule.

### Shared semantics, framework-specific syntax

The meaning of a property rename is defined once.

Each framework adapter determines how that semantic operation appears in:

* JSX.
* Vue templates.
* Angular templates.
* HTML.

### Minimal source changes

The tool should replace only the affected source ranges and avoid reprinting complete files wherever possible.

### Analyse before writing

All selected files must be analysed before any file is modified.

### Idempotency

Running the same migration against already migrated source code must produce no further changes.

### Generic internal migration platform

The public MVP manifest and schema support only property renames:

```ts
type MigrationOperation =
  | RenamePropOperation;
```

Selected operations resolve through a static internal executor registry. The MVP registers `RenamePropExecutor`; `RenamePropValueExecutor` is the planned second executor. Shared release selection, diagnostics, staged composition, plan validation, dry-run and transactional apply are operation-neutral.

Executors are trusted package-owned code and may define operation-specific framework adapter contracts. This generic internal platform is not a public plugin SDK and does not load executable paths from the manifest.

### Cut sophisticated coverage, not safety

Use real parsers and preserve parse-error safety, TypeScript import/symbol resolution for component identity, exact source ranges, conflict detection, dry-run, analyse-before-write and idempotency. Indirect syntax remains unchanged and may produce a warning; it does not justify speculative dataflow machinery before the first production use.

---

# 2. Architecture

## 2.1 Canonical migration model

Migrations are grouped by the design-system release that introduced them.

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

Example:

```json
{
  "schemaVersion": 1,
  "releases": [
    {
      "version": "40.0.0",
      "operations": [
        {
          "id": "v40-text-field-success-to-valid",
          "type": "rename-prop",
          "component": "ifx-text-field",
          "from": "success",
          "to": "valid"
        }
      ]
    }
  ]
}
```

## 2.2 Execution model *(changed)*

```text
Resolve project and framework
        ↓
Resolve source and target versions
        ↓
Load and validate manifest
        ↓
Select crossed migration releases
        ↓
Produce ordered migration operations
        ↓
Preflight and resolve operation executor
  ↓
Delegate framework syntax analysis to the operation adapter
        ↓
Compose analyses in an original/current content map
  ↓
Build the combined migration plan
  ↓
Validate edits and blocking conflicts
  ↓
Transactionally apply all planned changes
        ↓
Print summary
```

Operation order follows ascending selected release order and manifest order within each release. Every selected operation is analysed against current projected content and merged into one plan before any write begins.

## 2.3 Migration executor registry

The orchestrator dispatches ordered operations through a static registry keyed by operation type. The registry rejects duplicate registrations and unsupported selected types before file analysis. The MVP registers only `RenamePropExecutor`.

The generic boundary is:

```ts
interface MigrationExecutor<T extends MigrationOperation> {
  readonly type: T["type"];
  analyse(
    operation: T,
    context: MigrationExecutionContext
  ): Promise<MigrationAnalysis>;
}
```

Framework-specific AST and template logic remains in operation-specific adapters. A property-value executor is not required to use the property-name adapter contract.

Each staged file needs only:

```ts
interface StagedFile {
  filePath: string;
  originalContent: string;
  currentContent: string;
  operationIds: string[];
}
```

An operation is analysed against `currentContent`; validated edits update `currentContent` only. Disk or Angular Tree writes occur once, after every operation succeeds. Revisions, stale-analysis detection and generic create/delete intents are deferred.

## 2.4 Framework adapters *(changed)*

The shared package owns:

* CLI parsing.
* Project detection.
* Version selection.
* Manifest validation.
* Release selection.
* Diagnostics.
* Change planning.
* Transactional writes.
* Reporting.

Framework adapters own:

* Framework parsing.
* Component identity resolution.
* Property occurrence detection.
* Source replacements.
* Framework-specific conflict detection.
* File-level analysis requested by the operation executor.

The existing codemod branch already defines a `CodemodRunner` interface with file collection and transformation boundaries. It should be refined into the property-name executor’s adapter, returning edits and diagnostics without writing. It is not the universal adapter contract for every operation.

The existing React, Vue and HTML runner dispatch should also remain.

## 2.5 Angular integration *(changed)*

Angular uses a separate execution mechanism but the same migration definitions.

The Angular wrapper package must:

* Publish Angular update metadata.
* Load the canonical migration manifest.
* Select the relevant release operations.
* Resolve operations through the Angular package’s static executor registry.
* Delegate syntax analysis to operation-specific Angular adapters using Angular and TypeScript parsers.
* Compose ordered operations in memory.
* Modify the Angular schematic tree only after analysis succeeds.

The existing schematic traversal and `tree.overwrite` structure should be retained.

## 2.6 Existing codemod branch reuse *(changed)*

### Retain

* `@infineon/design-system-migrations` package structure.
* `dds-migrate` executable concept.
* `CodemodRunner` abstraction.
* React, Vue and HTML runners.
* Framework file-extension lists.
* Existing filesystem helpers.
* Existing framework detection.
* Existing Vue SFC and template parsing.
* Existing parse5 HTML parsing.
* Existing TypeScript AST helpers.
* Existing source-range replacement strategy.
* Existing Angular schematic traversal.
* Existing positive and negative fixtures.
* Existing dry-run CLI behavior.

The current Vue implementation already uses Vue SFC and template parsers and performs source-range replacements.

The current HTML implementation already uses parse5 and the TypeScript compiler API.

### Refactor

* Flat manifest into release-based manifest.
* Plain string warnings into structured diagnostics.
* Existing CLI result model into an analysis plan.
* Installed-version handling into explicit source and target version handling.
* Framework transformers to consume one operation from its executor instead of the complete flat manifest.
* Selected-operation orchestration through the static registry against current in-memory content.

### Replace or disable

* Custom semantic-version implementation.
* Installed dependency declaration treated as target version.
* Per-file immediate writes.
* Separate Angular manifest representation.
* Global JavaScript property access renaming.
* Global `setAttribute` argument renaming.
* Receiver-unaware `Object.assign` migration.

The current CLI writes files immediately after each transformation, which must be replaced by analyse-first execution.

The current HTML implementation renames property accesses and attribute API arguments based on their names without proving component identity. That behavior must not be included in the MVP.

---

# 3. Functional requirements

Every requirement is mandatory and must be covered by an automated test unless explicitly stated otherwise.

## 3.1 Manifest and schema

### FR-001 — Release-based manifest

The migration manifest shall group operations by the release that introduced them.

**Acceptance test**

Given a valid manifest with release entries for `39.0.0` and `40.0.0`, loading the manifest returns two release objects, each containing its own operations.

### FR-002 — Schema validation

The manifest shall be validated before project files are collected or parsed.

**Acceptance test**

Provide manifests with:

* Missing `schemaVersion`.
* Unsupported `schemaVersion`.
* Missing `releases`.
* Non-array `releases`.
* Missing release version.
* Invalid release version.
* Missing operations.
* Unsupported operation type.

Each case must fail before a framework runner is invoked.

### FR-003 — Unique release versions

Each release version shall appear at most once.

**Acceptance test**

A manifest containing two `40.0.0` release entries fails validation with an error that identifies the duplicate version.

### FR-004 — Stable operation IDs

Every operation shall define a non-empty ID that is unique across the complete manifest.

**Acceptance test**

A manifest containing two operations with the same ID fails validation and reports the duplicate ID.

### FR-005 — Property rename validation

A property rename operation shall require:

* `id`.
* `type`.
* `component`.
* `from`.
* `to`.

All string values must be non-empty.

**Acceptance test**

Omit each required property individually and verify validation failure.

### FR-006 — No self-renames

A property rename operation shall reject identical `from` and `to` values.

**Acceptance test**

A rule defining `from: "success"` and `to: "success"` fails validation.

### FR-007 — Conflicting manifest operations

The selected upgrade path shall reject incompatible property renames for the same component and source property.

**Acceptance test**

The following selected operations must fail before source analysis:

```json
{
  "component": "ifx-text-field",
  "from": "success",
  "to": "valid"
}
```

and:

```json
{
  "component": "ifx-text-field",
  "from": "success",
  "to": "state"
}
```

### FR-008 — Framework-independent semantics

React, Vue, HTML and Angular shall receive the same normalized operation objects.

**Acceptance test**

Load one manifest through all execution paths and compare the normalized selected operation list.

---

## 3.2 Version resolution

### FR-009 — Explicit source version

The CLI shall support:

```bash
--from <version>
```

**Acceptance test**

Run with `--from 39.5.0` and verify that the resolved source version is exactly `39.5.0`.

### FR-010 — Explicit target version

The CLI shall support:

```bash
--to <version>
```

**Acceptance test**

Run with `--to 40.0.0` and verify that the resolved target version is exactly `40.0.0`.

### FR-011 — Default target version

When `--to` is omitted, the target version shall default to the installed version of `@infineon/design-system-migrations`.

**Acceptance test**

Install a packed migration package with version `40.0.0` and verify that `40.0.0` is selected as the target.

### FR-012 — Source version from lockfile

When `--from` is omitted, the tool shall attempt to resolve the installed DDS wrapper or Web Components package version from the project lockfile.

The MVP must support the repository’s primary package manager lockfile.

**Informed default:** `pnpm-lock.yaml` is required for the MVP. Additional package-manager lockfiles may be added later.

**Acceptance test**

Provide a project declaring `^39.0.0` with a lockfile resolving `39.7.2`. Verify that the source version is `39.7.2`.

### FR-013 — Exact declaration fallback

When no supported lockfile exists, an exact dependency version may be used as the source version.

**Acceptance test**

Provide a project declaring `"39.7.2"` without a lockfile and verify that the source version is `39.7.2`.

### FR-014 — Ambiguous source range

A non-exact dependency range without a supported lockfile shall not be treated as a concrete source version.

**Acceptance test**

Provide `^39.0.0` without a lockfile. Execution must stop before source analysis and instruct the user to pass `--from`.

### FR-015 — Release selection

A release shall be selected when:

```text
sourceVersion < releaseVersion <= targetVersion
```

**Acceptance test**

For a release introduced in `40.0.0`:

* `39.5.0 → 40.0.0` selects it.
* `40.0.0 → 40.0.0` does not select it.
* `40.0.0 → 41.0.0` does not select it again.
* `38.0.0 → 40.0.0` selects it.

### FR-016 — Release order

Selected releases shall execute in ascending semantic-version order regardless of manifest order.

**Acceptance test**

Store releases in reverse order and verify their operations are applied in ascending version order.

### FR-017 — Standard semantic-version library

Version parsing and comparison shall use a maintained semantic-version library.

**Acceptance test**

Unit tests must cover:

* Stable versions.
* Prereleases.
* Canary versions.
* Build metadata.
* Equal versions.
* Invalid versions.

### FR-018 — Downgrade rejection

The MVP shall not perform reverse migrations.

**Acceptance test**

Running from `40.0.0` to `39.0.0` stops before file analysis and reports that downgrades are unsupported.

---

## 3.3 CLI and project detection

### FR-019 — Executable package

The published package shall expose the `dds-migrate` executable.

**Acceptance test**

Pack the package, install it into a clean fixture and run:

```bash
npx dds-migrate --help
```

The command must exit successfully and display usage information.

### FR-020 — Supported CLI options

The MVP CLI shall support:

* `--cwd`.
* `--framework`.
* `--from`.
* `--to`.
* `--dry-run`.
* `--config`.
* `--help`.

**Acceptance test**

Each option must have a CLI integration test verifying its effect.

### FR-021 — Framework values

`--framework` shall accept:

* `react`.
* `vue`.
* `html`.
* `angular`.

**Acceptance test**

All valid values parse successfully. An unknown value produces a usage error and no file analysis.

### FR-022 — Automatic framework detection

When `--framework` is omitted, the framework shall be detected from official DDS packages in project dependencies.

**Acceptance test**

Provide one fixture for each official wrapper or Web Components package and verify the selected framework.

### FR-023 — Multiple DDS frameworks

If multiple official DDS framework packages are detected, automatic selection shall stop and require `--framework`.

**Acceptance test**

A project with both React and Vue wrappers produces an error before file collection.

### FR-024 — Angular redirection

When Angular is selected or detected, `dds-migrate` shall not modify the project.

It shall print:

```bash
ng update @infineon/infineon-design-system-angular
```

**Acceptance test**

Run the CLI in an Angular fixture and verify:

* No source files change.
* No Angular source transformer runs.
* The output includes the update command.

### FR-025 — File exclusions

File collection shall exclude at least:

* `.git`.
* `node_modules`.
* `dist`.
* `build`.
* `coverage`.
* `.angular`.
* `.next`.
* `.nuxt`.

The collector shall also respect `.gitignore`.

**Acceptance test**

Place matching source files under every excluded path and one custom ignored path. Verify none are processed.

### FR-026 — Binary file handling

Binary files shall be skipped without failing the migration.

**Acceptance test**

Place a binary file with a supported extension in the fixture and verify it is skipped and unchanged.

---

## 3.4 React migration

### FR-027 — Official wrapper identity

A React component shall be eligible only when imported from the official React wrapper package.

**Acceptance test**

The same component name imported from the official wrapper and a third-party package appears in one fixture. Only the official component usage changes.

### FR-028 — Direct JSX property rename

The tool shall rename direct JSX properties on the target component.

**Acceptance test**

Verify all of the following:

```tsx
<IfxTextField success />
<IfxTextField success="true" />
<IfxTextField success={true} />
<IfxTextField success={isValid} />
<IfxTextField success={value.length > 0} />
```

become equivalent usages with `valid`.

### FR-029 — Aliased React import

Aliased imports shall retain their design-system component identity.

**Acceptance test**

```tsx
import { IfxTextField as Field } from
  "@infineon/infineon-design-system-react";

<Field success={isValid} />
```

must become:

```tsx
<Field valid={isValid} />
```

### FR-030 — Non-target React component

The same property on another component shall remain unchanged.

**Acceptance test**

```tsx
<IfxTextField success />
<IfxButton success />
<ThirdPartyField success />
```

Only the configured `IfxTextField` property changes.

### FR-031 — React target-property conflict

When both old and new properties exist on the same JSX element, the tool shall emit a blocking conflict.

**Acceptance test**

```tsx
<IfxTextField success={a} valid={b} />
```

produces an error and no project file is written.

### FR-032 — React spread objects are deferred

JSX spread objects shall remain unchanged in the first production release.

**Acceptance test**

```tsx
const props = {
  success: isValid,
};

<IfxTextField {...props} />
```

remains unchanged. A structured warning may be emitted when the spread is identified without reference tracking.

### FR-033 — Direct React props remain independent

Direct props on proven DDS components shall still migrate when a spread is present, unless a direct source/target conflict exists.

**Acceptance test**

```tsx
const props = { success: true };

<>
  <IfxTextField {...props} />
  <ThirdPartyField {...props} />
</>
```

The object remains unchanged. The direct syntax behavior is deterministic and does not depend on classifying every object reference.

### FR-034 — No React object-origin classification

The MVP shall not classify spread objects as local, exported, mutable, imported or helper-returned.

**Acceptance test**

Local, imported and helper-returned spreads all produce no automatic source change.

---

## 3.5 Vue migration

### FR-035 — Vue template property rename

The tool shall rename static and bound properties on the target component.

**Acceptance test**

Verify:

```vue
<ifx-text-field success />
<ifx-text-field success="true" />
<ifx-text-field :success="isValid" />
<IfxTextField :success="isValid" />
```

are migrated to `valid`.

### FR-036 — Vue target identity

The property shall change only on the configured Vue component.

**Acceptance test**

The same property appears on:

* `ifx-text-field`.
* `IfxTextField`.
* `ifx-button`.
* A native input.
* A third-party component.

Only both text-field representations change.

### FR-037 — Vue JSX identity

Vue JSX usages imported from the official wrapper shall be migrated.

**Acceptance test**

A Vue JSX fixture with an official import and a third-party import changes only the official component.

### FR-038 — Vue render functions

The MVP shall retain existing support for direct component props in `h` and `createVNode` when the component identity is statically known.

**Acceptance test**

Test:

```ts
h(IfxTextField, { success: isValid })
createVNode(IfxTextField, { success: isValid })
```

and verify the object key is renamed.

String-tag render calls may be supported only when the tag exactly matches the target component.

### FR-039 — Vue argumentless `v-bind` objects are deferred

Argumentless `v-bind` objects shall remain unchanged in the first production release. The adapter shall not perform `v-for` alias tracking, `v-slot` scope tracking, contamination propagation, complex object analysis or helper/imported binding reasoning.

Malformed Vue parser input remains blocking `DDS007`, and no edits are produced until the template parses successfully.

**Acceptance test**

```vue
<script setup>
const props = {
  success: true
};
</script>

<template>
  <ifx-text-field v-bind="props" />
</template>
```

must leave the object key unchanged. A structured warning may be emitted when the ambiguous provider is identified cheaply.

Also verify:

* direct static and named bound props still migrate;
* direct source plus direct target on the same element produces `DDS001`;
* `v-for` and `v-slot` bodies are still traversed for direct target elements;
* no object declaration or indirect binding origin is edited.

### FR-040 — Vue scope dataflow is deferred

The MVP shall not resolve whether a `v-bind` identifier is shadowed, shared, mutated or otherwise contaminated.

**Acceptance test**

Use one object in `v-bind` on the target and a third-party component. Verify no automatic object change.

### FR-041 — No Vue binding-origin classification

Imported, local and helper-returned `v-bind` expressions shall remain unchanged without deep origin reasoning.

**Acceptance test**

Test both imported objects and function-call expressions and verify no automatic source changes.

### FR-042 — Vue target-property conflict

When both old and new properties exist on the same Vue component, the migration shall fail before writes.

**Acceptance test**

Test static and bound combinations, including:

```vue
<ifx-text-field success :valid="value" />
```

---

## 3.6 Angular migration

### FR-043 — Angular execution through `ng update`

Angular property renames shall execute through the Angular wrapper package’s migration collection.

**Acceptance test**

Install packed source and target Angular wrapper versions into a fixture and verify that `ng update` discovers and runs the migration.

### FR-044 — Shared manifest

Angular shall load the same canonical release manifest used by the standalone migration package.

**Acceptance test**

Compare the operation IDs selected by Angular and the standalone CLI for the same source and target versions.

### FR-045 — External Angular templates

The Angular migration shall rename:

* Static attributes.
* Property bindings.
* Attribute bindings.

**Acceptance test**

Verify:

```html
<ifx-text-field success="true"></ifx-text-field>
<ifx-text-field [success]="isValid"></ifx-text-field>
<ifx-text-field [attr.success]="attributeValue"></ifx-text-field>
```

are migrated to `valid`.

### FR-046 — Inline Angular templates

Inline templates in Angular component decorators shall receive the same transformations as external templates.

Unsupported dynamic inline templates shall emit diagnostic code `DDS011`.

**Acceptance test**

Use equivalent external and inline templates and verify equivalent output.

### FR-047 — Angular component scoping

The property shall be renamed only on the configured selector.

**Acceptance test**

Place the same property on the target selector, another DDS component and a native element. Only the target selector changes.

### FR-048 — Angular target-property conflict

An Angular element containing both old and new inputs shall produce a blocking conflict.

**Acceptance test**

```html
<ifx-text-field [success]="a" [valid]="b"></ifx-text-field>
```

must prevent all schematic tree overwrites.

### FR-049 — Angular template expressions

The content of Angular binding expressions shall remain unchanged.

Unsupported Angular bindings shall emit diagnostic code `DDS010`.

**Acceptance test**

```html
<ifx-text-field
  [success]="form.valid && checkSuccess()">
</ifx-text-field>
```

must change only the binding name.

### FR-050 — Angular TypeScript programmatic access

Receiver-unaware Angular TypeScript property changes are excluded from the MVP.

**Acceptance test**

The following remain byte-identical:

```ts
response.success
element.success
element.setAttribute("success", value)
renderer.setProperty(element, "success", value)
```

This restriction applies even though the current branch contains broader TypeScript handling.

---

## 3.7 Plain HTML and Web Components

### FR-051 — HTML target element

HTML attributes shall be renamed on the exact target custom-element tag.

**Acceptance test**

```html
<ifx-text-field success="true"></ifx-text-field>
```

becomes:

```html
<ifx-text-field valid="true"></ifx-text-field>
```

### FR-052 — HTML non-target elements

Matching attributes on native elements and other custom elements shall remain unchanged.

**Acceptance test**

```html
<input success="true">
<other-field success="true"></other-field>
<ifx-button success="true"></ifx-button>
```

must remain byte-identical.

### FR-053 — HTML target-property conflict

If the old and new attributes both exist on one target element, the migration shall produce a blocking conflict.

**Acceptance test**

```html
<ifx-text-field success="true" valid="false"></ifx-text-field>
```

must prevent all writes.

### FR-054 — JavaScript property access excluded by default

The MVP shall not globally rename property access, element access or attribute API arguments.

**Acceptance test**

All of the following remain unchanged:

```ts
response.success
formState.success
element.success
element["success"]
element.setAttribute("success", "true")
```

### FR-055 — Proven Web Component receiver optional support

The MVP may retain programmatic property migration only when component identity can be proven directly from the same file.

Supported proof forms are limited to:

```ts
const field = document.createElement("ifx-text-field");
```

and an exact selector:

```ts
const field = document.querySelector("ifx-text-field");
```

**Acceptance test**

When this optional capability is implemented, matching property access on the proven variable changes, while generic variables remain unchanged.

The MVP may ship without this optional capability.

### FR-056 — Markup strings excluded

Attributes inside arbitrary strings or template literals shall remain unchanged.

**Acceptance test**

```ts
element.innerHTML =
  `<ifx-text-field success="true"></ifx-text-field>`;
```

must remain unchanged.

---

## 3.8 Diagnostics and conflicts

### FR-057 — Structured diagnostics

Internal diagnostics shall use a structured model:

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

**Acceptance test**

Trigger one warning and one error and verify all applicable fields.

### FR-058 — Source locations

Every diagnostic concerning a specific source occurrence shall contain:

* File path.
* Start offset or line and column.
* Operation ID.

**Acceptance test**

Trigger an ambiguous spread and a target-property conflict and verify both locations.

### FR-059 — Blocking errors

Errors shall prevent every planned project write.

Blocking errors include:

* Target property already present.
* Invalid manifest.
* Overlapping incompatible replacements.
* Parser failure in a selected source file.
* Unresolvable required version information.

**Acceptance test**

Create two safe planned files and one conflicting file. Verify all files remain unchanged.

### FR-060 — Warnings

Warnings shall not block safe changes.

Warnings include:

* Ambiguous shared local prop object.
* Unsupported imported prop object.
* Unsupported helper-returned prop object.

**Acceptance test**

A project containing one safe direct property rename and one ambiguous spread must apply the safe change and report the warning.

### FR-061 — Deterministic ordering

Diagnostics shall be sorted deterministically by:

1. File path.
2. Start offset.
3. End offset.
4. Operation ID.
5. Diagnostic code.
6. Message.

**Acceptance test**

Run the same analysis twice and compare diagnostic output byte-for-byte.

### FR-062 — Human-readable output

CLI output shall include:

* Diagnostic severity.
* Diagnostic code.
* File path and source location.
* Message.
* Suggested manual action where available.

**Acceptance test**

Snapshot representative warning and error output.

---

## 3.9 Analysis and writes

### FR-063 — Analyse-first execution *(changed)*

All selected migration steps shall execute in release and manifest order, and all resulting file changes shall be analysed and combined in memory before any file is written.

**Acceptance test**

Inject an error into the final processed file and verify no earlier planned change was written.

### FR-064 — Transactional apply

When analysis completes without blocking errors, all planned changes shall be written.

If a write fails, the tool shall report the affected file and return a failure.

**Acceptance test**

Mock one failed write and verify failure reporting.

Full filesystem rollback after an external write failure is not required for the MVP, but no write may begin before analysis succeeds.

### FR-065 — Dry-run equivalence

Dry-run and apply shall use the same analysis result.

**Acceptance test**

Run dry-run and apply against identical fixture copies. Planned files, operation counts and diagnostics must match.

### FR-066 — Dry-run no writes

Dry-run shall never modify project files.

**Acceptance test**

Hash all fixture files before and after dry-run and verify all hashes remain equal.

### FR-067 — Idempotency

Applying the same migration twice shall produce no changes during the second run.

**Acceptance test**

Every positive fixture must pass:

```text
transform(input) = expectedOutput
transform(expectedOutput) = expectedOutput
```

### FR-068 — Unchanged-file integrity

Files without applicable changes shall remain byte-identical.

**Acceptance test**

Compare hashes of all unchanged fixture files before and after apply.

### FR-069 — Line-ending preservation

Changed files shall preserve their original LF or CRLF line-ending convention.

**Acceptance test**

Run equivalent LF and CRLF fixtures and verify line-ending style remains unchanged.

### FR-070 — Minimal replacements

Unrelated formatting shall remain unchanged.

**Acceptance test**

Use fixtures with unusual spacing, quote styles and multiline formatting. Verify only property-name ranges differ.

---

## 3.10 Summary and exit behavior

### FR-071 — Migration summary

The final summary shall include:

* Framework.
* Source version.
* Target version.
* Applied release versions.
* Processed-file count.
* Modified-file count.
* Property-rename count.
* Warning count.
* Error count.
* Dry-run status.

**Acceptance test**

Snapshot a known migration result and verify all values.

### FR-072 — Changed-file details

The summary shall list every changed file and the operation IDs applied to it.

**Acceptance test**

Apply two operations across multiple files and verify the mapping between files and operations.

### FR-073 — No-op result

An already migrated project shall produce a successful no-op result.

**Acceptance test**

Run against target-version source code and verify:

* Exit code `0`.
* Zero modified files.
* Summary indicating no changes were necessary.

### FR-074 — Successful exit

A completed apply or dry-run without blocking errors shall exit with code `0`.

**Acceptance test**

Verify successful apply, successful dry-run and no-op.

### FR-075 — Migration failure exit

Manifest errors, version errors, parser errors and source conflicts shall exit with code `1`.

**Acceptance test**

Trigger each failure category.

### FR-076 — Usage error exit

Invalid CLI arguments and use of the standalone CLI for Angular shall exit with code `2`.

**Acceptance test**

Test an invalid framework and an Angular project.

---

## 3.11 Packaging and end-to-end validation

### FR-077 — Packed CLI test

Integration tests shall install and execute the packed migration package.

They shall not validate only repository-relative source imports.

**Acceptance test**

CI runs:

```bash
pnpm pack
npm install <generated-tarball>
npx dds-migrate
```

inside a clean fixture project.

### FR-078 — Published package content

The packed migration package shall contain:

* Compiled library files.
* CLI executable.
* Default migration manifest.
* Required runtime dependencies.
* README.

**Acceptance test**

Inspect `npm pack --json` output and verify all required paths.

### FR-079 — React consumer build

A migrated React fixture shall build successfully.

**Acceptance test**

Install the target DDS React wrapper, run the packed migration tool and execute the fixture’s production build.

### FR-080 — Vue consumer build

A migrated Vue fixture shall build successfully.

**Acceptance test**

Install the target DDS Vue wrapper, run the packed migration tool and execute the production build.

### FR-081 — HTML consumer build

A migrated plain Web Components/Vite fixture shall build successfully.

**Acceptance test**

Install the target Web Components package, run the migration and execute the production build.

### FR-082 — Angular consumer build

A packed Angular migration shall complete through `ng update`, after which the fixture shall build successfully.

**Acceptance test**

Test at least:

* One Angular standalone application.
* One Angular module-based application.

### FR-083 — Platform coverage

The packed CLI shall be tested on Linux and Windows.

**Acceptance test**

CI matrix jobs execute at least one positive migration fixture on both operating systems.

### FR-084 — Supported Node versions

The packed migration package shall be tested on every Node version officially supported by the design-system repository.

**Acceptance test**

The CI matrix derives or matches the repository’s documented Node support.

### FR-085 — Canary publishing

The migration package shall be included in the existing canary publication workflow.

**Acceptance test**

A PR canary build publishes a migration-package version aligned with the related design-system canary release.

---

## 3.12 Documentation

### FR-086 — Usage documentation

The package README shall document:

* React, Vue and HTML commands.
* Angular command.
* Automatic version resolution.
* Explicit `--from` and `--to`.
* Dry-run behavior.
* Exit behavior.

**Acceptance test**

A documentation test or review checklist verifies all required sections.

### FR-087 — Support matrix

Documentation shall classify patterns as:

* Automatically migrated.
* Reported for manual review.
* Unsupported and not detected.

**Acceptance test**

The support matrix includes every framework and every pattern covered by contract fixtures.

### FR-088 — Safety limitations

Documentation shall explicitly state that generic property accesses are not renamed.

**Acceptance test**

The README contains examples including:

```ts
response.success
element.success
element.setAttribute("success", value)
```

and states that they remain unchanged unless a future migration can prove component identity.

### FR-089 — Adding a property rename

Contributor documentation shall describe how to add a new property rename.

It shall include:

1. Add the operation to the release manifest.
2. Add shared contract fixtures.
3. Add framework-specific fixtures where syntax differs.
4. Add negative and conflict fixtures.
5. Run package and consumer integration tests.

**Acceptance test**

A reviewer can add a sample property rename using only the documented process.

---

# 4. User scenarios

## US-001 — React direct property rename

**Given**

```tsx
import { IfxTextField } from
  "@infineon/infineon-design-system-react";

export function Form() {
  return <IfxTextField success={isValid} />;
}
```

**When**

The user upgrades across the release containing the property rename and runs:

```bash
npx dds-migrate
```

**Then**

The output becomes:

```tsx
import { IfxTextField } from
  "@infineon/infineon-design-system-react";

export function Form() {
  return <IfxTextField valid={isValid} />;
}
```

**And**

The summary reports one property rename.

---

## US-002 — React alias

**Given**

```tsx
import {
  IfxTextField as Field
} from "@infineon/infineon-design-system-react";

<Field success />
```

**When**

The migration runs,

**Then**

The alias remains unchanged and the property becomes `valid`.

---

## US-003 — Unrelated React component

**Given**

```tsx
<IfxTextField success />
<ThirdPartyField success />
```

**When**

The migration runs,

**Then**

Only `IfxTextField` changes.

---

## US-004 — Vue template migration

**Given**

```vue
<template>
  <ifx-text-field :success="isValid" />
</template>
```

**When**

The migration runs,

**Then**

The output contains:

```vue
<ifx-text-field :valid="isValid" />
```

---

## US-005 — Angular template migration

**Given**

```html
<ifx-text-field [success]="isValid"></ifx-text-field>
```

**When**

The user runs:

```bash
ng update @infineon/infineon-design-system-angular
```

**Then**

The binding becomes `[valid]`,

**And**

The Angular application builds successfully.

---

## US-006 — Plain HTML migration

**Given**

```html
<ifx-text-field success="true"></ifx-text-field>
<input success="true">
```

**When**

The HTML migration runs,

**Then**

Only the custom element becomes:

```html
<ifx-text-field valid="true"></ifx-text-field>
```

---

## US-007 — JSX spread object is deferred

**Given**

```tsx
const fieldProps = {
  success: isValid
};

<IfxTextField {...fieldProps} />
```

**When**

The migration runs,

**Then**

The local object remains unchanged. Direct JSX props elsewhere still migrate.

---

## US-008 — Shared JSX spread remains unchanged

**Given**

```tsx
const props = {
  success: true
};

<>
  <IfxTextField {...props} />
  <ThirdPartyField {...props} />
</>
```

**When**

The migration runs,

**Then**

The object remains unchanged,

**And**

The MVP does not classify or trace the shared object.

---

## US-009 — Target-property conflict

**Given**

```tsx
<IfxTextField success={oldValue} valid={newValue} />
```

**When**

The migration runs,

**Then**

A blocking conflict is reported,

**And**

No project file is written.

---

## US-010 — Unrelated application property

**Given**

```ts
const response = await submit();

if (response.success) {
  showConfirmation();
}
```

**When**

The text-field `success` property migration runs,

**Then**

The file remains byte-identical.

---

## US-011 — Dry run

**Given**

A project containing safe direct property renames and one indirect spread,

**When**

The user runs:

```bash
npx dds-migrate --dry-run
```

**Then**

The planned safe changes are listed,

**And**

The indirect spread remains unchanged,

**And**

No source file changes.

---

## US-012 — Multi-release upgrade

**Given**

A project upgrades from DDS 38 to DDS 40,

**And**

Both DDS 39 and DDS 40 contain property rename operations,

**When**

The migration runs,

**Then**

Both release migrations execute in ascending order.

---

## US-013 — Already migrated project

**Given**

The project contains only the new property names,

**When**

The migration runs,

**Then**

No files change,

**And**

The command exits successfully.

---

## US-014 — Angular user invokes standalone CLI

**Given**

An Angular project,

**When**

The user runs:

```bash
npx dds-migrate
```

**Then**

The project remains unchanged,

**And**

The CLI prints:

```bash
ng update @infineon/infineon-design-system-angular
```

---

## US-015 — Published package execution

**Given**

The migration package is installed from its packed artifact into a clean project,

**When**

The user invokes the binary,

**Then**

The executable starts,

**And**

The built-in manifest loads,

**And**

The migration completes without repository-relative source access.

---

# 5. Success criteria

The MVP is production-ready only when all criteria below are satisfied.

## 5.1 Functional completeness

* Every mandatory functional requirement passes.
* Property rename works for direct component usages in React, Vue, Angular and HTML.
* Official wrapper aliases are supported.
* Indirect spread and argumentless binding objects remain unchanged and are documented as deferred.
* Existing target properties produce blocking conflicts.
* Crossed releases execute in correct order.
* Dry-run accurately predicts apply behavior.

## 5.2 Safety

* No known unrelated application property is modified.
* Generic `.success`, bracket access and `setAttribute` usages remain unchanged by default.
* A blocking error prevents every planned write.
* Spread and argumentless binding objects are not changed.
* Unchanged files remain byte-identical.
* Changed files retain line endings and unrelated formatting.
* Every positive fixture is idempotent.

## 5.3 Framework validation

* The React fixture builds after migration.
* The Vue fixture builds after migration.
* The HTML/Vite fixture builds after migration.
* The Angular standalone fixture builds after `ng update`.
* The Angular module-based fixture builds after `ng update`.
* External and inline Angular templates produce equivalent results.

## 5.4 Packaging validation

* The packed CLI starts successfully.
* The packed package contains its manifest and executable.
* The packed Angular wrapper exposes the migration collection.
* Integration tests use installed tarballs rather than source imports.
* Linux and Windows tests pass.
* All supported Node-version tests pass.
* Canary publishing includes the migration package.

## 5.5 Real-project validation

Before stable release:

* Run dry-runs against at least three representative internal consumer projects.
* Review every changed file.
* Confirm that no unrelated property is modified.
* Record unsupported patterns encountered.
* Add fixtures for each newly discovered recurring supported or unsafe pattern.
* Successfully apply the migration and build at least one real consumer project for every supported framework available internally.

## 5.6 Documentation validation

* The README gives one clear command per framework.
* The support matrix matches the tested implementation.
* Unsupported patterns are documented explicitly.
* Contributor documentation explains how to add a new property rename.
* The PR description contains:

  * Problem statement.
  * MVP scope.
  * Architecture.
  * Supported patterns.
  * Known limitations.
  * Test evidence.
  * Example before-and-after migrations.

---

# 6. Future extension constraints

## 6.1 Generic executor platform

The orchestrator must not assume every selected operation is `rename-prop`. It resolves operations through the static internal executor registry and shared analysis/plan/apply contracts.

Property-value rename is the planned second operation. It must be addable with an operation schema, validator, executor and framework adapters without replacing release selection, registry dispatch, structured diagnostics, staged composition, dry-run or transactional apply.

The initial planned operation targets direct string values of a proven component property:

```ts
interface RenamePropValueOperation {
  id: string;
  type: "rename-prop-value";
  component: string;
  property: string;
  from: string;
  to: string;
  notes?: string;
}
```

Its schema may be extended when implementation evidence requires additional literal types; dynamic expressions are not part of the initial value-rename scope.

## 6.2 Schema evolution

Future operation types may be added to `MigrationOperation` without changing the structure of:

```ts
MigrationManifest
MigrationRelease
```

A breaking change to the manifest structure requires incrementing `schemaVersion`.

## 6.3 Framework parity

A future operation must declare its framework support explicitly.

An operation may not silently execute on some frameworks while being ignored on others.

## 6.4 Diagnostics reuse

All executors use the shared structured diagnostic and migration-plan contracts.

## 6.5 Trusted code-backed migrations *(changed)*

The MVP must not implement a generic custom-migration API.

Future releases may require feature-specific migration implementations that cannot be expressed safely through one generic JSON schema. Each trusted executor may define and validate its own manifest operation shape.

The MVP must not introduce:

* A public plugin or consumer executor SDK.
* Dynamic imports from manifest-provided paths.
* Execution of consumer-provided code.
* A `"code-migration"` JSON operation.
* Generic lifecycle hooks or dependency-injection infrastructure.
* A general-purpose migration language.

The public MVP manifest accepts only `rename-prop`.

---

# 7. MVP completion definition

The MVP is complete when a design-system release can introduce one or more component property renames, publish the migration package and Angular update schematic, and enable consumers to migrate safe usages across all supported frameworks with:

* Correct release selection.
* Component-scoped transformations.
* No receiver-unaware application-property changes.
* Conflict detection.
* Dry-run.
* Transactional analysis.
* Idempotent output.
* Build-verified packed artifacts.
* Accurate documentation.

Property-value rename is the planned next executor after this MVP. Property splitting remains deferred until its concrete semantics and safety requirements are known.