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

The MVP must provide one complete, production-usable migration capability rather than a general migration platform with partially implemented operations.

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
* Safe same-file local prop-object migration.
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

* Renaming property values.
* Splitting one property into multiple properties.
* Removing properties.
* Renaming components.
* Renaming events or slots.
* Package renames.
* Arbitrary custom migration scripts.
* Cross-file prop-object tracing.
* Imported helper-function analysis.
* General TypeScript type analysis across a complete workspace.
* Receiver-unaware JavaScript property renaming.
* Markup stored in arbitrary strings or `innerHTML`.
* Dependency installation.
* Lockfile modification.
* Reverse migrations or downgrades.
* Automated Git commits.

These capabilities may be added later without changing the release model, executor boundary, shared planning model or framework-adapter boundaries established by the MVP.

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
* Local prop objects.
* Supported programmatic APIs.

### Minimal source changes

The tool should replace only the affected source ranges and avoid reprinting complete files wherever possible.

### Analyse before writing

All selected files must be analysed before any file is modified.

### Idempotency

Running the same migration against already migrated source code must produce no further changes.

### Future extensibility without premature abstraction *(changed)*

The public MVP manifest and schema support only property renames:

```ts
type MigrationOperation =
  | RenamePropOperation;
```

Selected manifest operations are treated internally as ordered migration-step definitions and resolved through a small executor registry. The MVP registers only the `rename-prop` executor.

Future releases may add declarative operation types or trusted, package-owned code-backed migration steps. Such steps may require project-level or multi-file analysis and must not be forced through a file-by-file property-rename interface.

Release selection, diagnostics, planning, conflict detection, reporting and transactional application must remain independent of whether a migration step is declarative or feature-specific. The MVP must not define schemas, execution semantics, lifecycle hooks or a public extension API for future steps.

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
Produce ordered migration-step definitions
        ↓
Resolve each step through the executor registry
        ↓
Execute RenamePropExecutor
        ↓
Delegate framework syntax analysis to the selected adapter
        ↓
Aggregate project-level migration analyses
  ↓
Build the combined migration plan
  ↓
Validate cross-step edits and blocking conflicts
  ↓
Transactionally apply all planned changes
        ↓
Print summary
```

Step execution order follows ascending selected release order and manifest order within each release. Every selected step is analysed and merged into one plan before any write begins.

## 2.3 Migration executor boundary *(new)*

The orchestrator must resolve selected migration-step definitions through an internal registry of trusted executors. It must not contain property-specific AST or template logic.

The core boundary is similar to:

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

The exact types may be refined during implementation, but the boundary must preserve these properties:

* Executors may inspect one file, several related files or the complete project.
* Executors return shared file analyses and diagnostics and perform no writes.
* Results from several ordered steps are merged before writes begin.
* Cross-step overlapping or otherwise incompatible edits are detected centrally.
* Missing executor registrations fail deterministically before writes.
* Duplicate executor registrations fail deterministically during registry initialization.
* Executors are statically registered trusted package code.

The MVP registry contains only `RenamePropExecutor`. It handles the `rename-prop` semantic step, selects the appropriate framework adapter, requests or collects relevant source files, aggregates file-level results and returns one project-level `MigrationAnalysis`.

This boundary is internal. It does not create a public custom-migration SDK, plugin mechanism, manifest-provided module path, `"code-migration"` operation or consumer-code execution facility.

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
* File-level rename analysis requested by `RenamePropExecutor`.

The existing codemod branch already defines a `CodemodRunner` interface with file collection and transformation boundaries. It should be refined into the framework-adapter abstraction used by `RenamePropExecutor`; it must not become the interface for every future migration step.

The existing React, Vue and HTML runner dispatch should also remain.

## 2.5 Angular integration *(changed)*

Angular uses a separate execution mechanism but the same migration definitions.

The Angular wrapper package must:

* Publish Angular update metadata.
* Load the canonical migration manifest.
* Select the relevant release operations.
* Resolve `rename-prop` through the trusted executor registration used by the Angular migration path.
* Delegate Angular syntax analysis to the Angular adapter using Angular and TypeScript parsers.
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
* Framework transformers to consume rename-property steps from `RenamePropExecutor` instead of the complete flat manifest.
* Selected-step orchestration to resolve implementations through the internal executor registry.
* Local spread support to check whether the object is used exclusively with compatible target components.

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

### FR-032 — React local prop object

A same-file `const` object directly spread into the target component may be migrated.

**Acceptance test**

```tsx
const props = {
  success: isValid,
};

<IfxTextField {...props} />
```

becomes an object containing `valid`.

### FR-033 — Shared React prop object

A local prop object used by both the target component and an unrelated component shall not be modified automatically.

**Acceptance test**

```tsx
const props = { success: true };

<>
  <IfxTextField {...props} />
  <ThirdPartyField {...props} />
</>
```

The object remains unchanged and a warning identifies the ambiguous object.

### FR-034 — Imported React prop object

Imported prop objects and imported helper-returned objects shall remain unchanged.

**Acceptance test**

An imported prop object used in a target component produces no automatic source change.

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

### FR-039 — Vue local `v-bind` object

A top-level `<script setup>` `const` object referenced by a simple `v-bind` expression on the target component may be migrated.

Only bindings declared directly in `<script setup>` are eligible. The declaration must be a non-exported `const` with a plain object-literal initializer. Parentheses, `as const`, type assertions, and `satisfies` are unwrapped when the underlying initializer is still a plain object literal.

Supported object keys include identifier-style, quoted camelCase, and quoted kebab-case properties; shorthand source properties are rewritten to explicit target/value pairs. The replacement preserves the original quote style and identifier spelling.

Normal multi-alias `v-for` forms such as `(item, index)` and `(item, key, index)` are supported. Binding-pattern default initializers and computed property expressions participate in reference analysis.

Per-element conflict projection considers direct props and every resolved local object together. If one use of a shared object is unsafe or conflicting, the declaration must not be edited for any use. Component instances are independent: providers on separate elements do not conflict unless they share a contaminated declaration.

Template scopes (`v-for`, `v-slot`) that shadow an eligible script identifier make that identifier unknown for the affected element. Unsupported or ambiguous scope patterns are diagnosed with `DDS002` and suppress local prop-object migration for the affected subtree. An ambiguous use contaminates any possible same-name script declaration instead of proving that declaration unrelated.

Malformed Vue parser input remains blocking `DDS007`, and no edits are produced until the template parses successfully.

When an element contains an unresolved, unsafe, or conflicting provider, only that element is suppressed; safe sibling and child target elements that do not depend on the contaminated declaration are still migrated.

Diagnostics for the same logical issue are deduplicated.

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

must rename the object key.

Also verify:

* mutable (`let`/`var`) and exported objects are left unchanged with `DDS002`;
* imported objects are left unchanged with `DDS003`;
* helper or compiler-macro results are left unchanged with `DDS004`;
* member expressions and inline objects are left unchanged with `DDS002`;
* direct source plus direct target, object target, or object source on the same element produces `DDS001`;
* a safe sibling/child element is still migrated when another element is suppressed;
* normal multi-alias `v-for` syntax is parsed without ambiguity;
* `v-for` and `v-slot` shadowing prevents the declaration edit for shadowed uses;
* binding-pattern defaults and computed keys are analyzed as references;
* duplicate warnings for the same binding are emitted only once.

### FR-040 — Ambiguous Vue prop object

A local object used in any unsupported way shall remain unchanged and produce a `DDS002` warning. Unsupported uses include sharing the object with a non-target component, referencing it in interpolation or directive expressions, destructuring it, reassigning or mutating it, aliasing it, returning it, passing it as an argument, or using it on a native element. The declaration is contaminated: it is not edited for any element, even safe ones, unless the contamination is removed. A same-name ambiguous template use contaminates the possible script declaration without proving that declaration unrelated.

**Acceptance test**

Use one object in `v-bind` on the target and a third-party component. Verify no automatic object change and that a warning is emitted.

### FR-041 — Imported Vue prop object

Imported prop objects and helper-returned `v-bind` expressions shall remain unchanged.

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

## US-007 — Safe local prop object

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

The local object key becomes `valid`.

---

## US-008 — Ambiguous shared prop object

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

A warning identifies the ambiguous shared object.

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

A project containing safe property renames and one unsupported imported prop object,

**When**

The user runs:

```bash
npx dds-migrate --dry-run
```

**Then**

The planned safe changes are listed,

**And**

The unsupported object is reported,

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
* Safe same-file local prop objects are supported.
* Existing target properties produce blocking conflicts.
* Crossed releases execute in correct order.
* Dry-run accurately predicts apply behavior.

## 5.2 Safety

* No known unrelated application property is modified.
* Generic `.success`, bracket access and `setAttribute` usages remain unchanged by default.
* A blocking error prevents every planned write.
* Shared or imported prop objects are not changed without sufficient evidence.
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

The following constraints are part of the MVP architecture but do not require additional migration operations now.

## 6.1 Migration-step extensibility *(changed)*

The orchestrator must dispatch ordered migration-step definitions through the internal executor registry rather than assume every step is a property rename or file-local transformation.

The only registered MVP operation is:

```ts
"rename-prop"
```

Adding a future trusted executor must not require replacing:

* Release selection.
* Version resolution.
* Analysis planning.
* Transactional writes.
* Diagnostics.
* Cross-step conflict validation.
* CLI reporting.
* Angular manifest loading.

A future feature-specific executor may analyse several related files, modify project configuration, propose file creation or removal, use different framework-specific implementations or perform project-level validation. It must still return the shared analysis model and participate in the same combined plan, conflict validation and transactional apply pipeline.

These capabilities are architectural constraints only. They do not add MVP functional requirements, accepted public manifest types or user scenarios.

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

Future migration-step executors must use the same diagnostic, plan and conflict model.

## 6.5 Trusted code-backed migrations *(changed)*

The MVP must not implement a generic custom-migration API.

Future releases may require feature-specific migration implementations that cannot be expressed safely through the public JSON operation schema. Those implementations must be statically registered as trusted code inside the published migration package and resolved through the same internal executor boundary.

The MVP must not introduce:

* A public plugin or custom-migration SDK.
* Dynamic imports from manifest-provided paths.
* Execution of consumer-provided code.
* A `"code-migration"` JSON operation.
* Generic lifecycle hooks or dependency-injection infrastructure.
* A general-purpose migration language.

The public MVP manifest continues to accept only `rename-prop`. Release selection, diagnostics, planning, conflict detection, transactional application and reporting must not depend on every future migration step being JSON-only, generic-operation-driven or file-local.
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

Property value renames and property splitting begin only after this MVP has been used successfully for a real design-system upgrade.