# Infineon Design System Property Rename Migration MVP

**Status:** Active MVP contract
**Package:** `@infineon/design-system-migrations`
**CLI:** `dds-migrate`
**Angular execution:** `ng update @infineon/infineon-design-system-angular`

---

# 1. Purpose

The migration capability updates consumer code when an Infineon Design System component property is renamed in a design-system release.

The first production version supports property renames across:

* React applications using the official React wrapper;
* Vue applications using the official Vue wrapper;
* Angular applications using the official Angular wrapper;
* plain HTML applications using the Web Components package.

The MVP deliberately supports common, direct syntax first.

> Cut sophisticated coverage, not safety.

The tool must modify only usages that can be associated confidently with the configured design-system component. Ambiguous or indirect usages may remain unchanged.

---

# 2. MVP operation

The first supported semantic operation is:

```ts
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
  "id": "v40-text-field-success-to-valid",
  "type": "rename-prop",
  "component": "ifx-text-field",
  "from": "success",
  "to": "valid"
}
```

The manifest groups operations by the release that introduced them:

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
```

There is one canonical semantic manifest:

```text
packages/migrations/migrations/manifest.json
```

Angular consumes a packaged copy of the same manifest. It must not maintain independently authored migration definitions.

---

# 3. Scope

## 3.1 Included

The MVP includes:

* versioned migration releases;
* source-to-target release selection;
* direct React JSX property renames;
* direct Vue template property renames;
* direct Vue JSX and render-function property renames where component identity is known;
* Angular template property renames through `ng update`;
* plain HTML attribute renames;
* component identity and alias resolution where required;
* blocking source/target conflict detection;
* structured diagnostics;
* dry-run support for the standalone CLI;
* ordered in-memory composition across releases;
* analyse-before-write execution;
* idempotency;
* source-range edits that preserve unrelated formatting.

## 3.2 Deferred or excluded

The MVP does not automatically migrate:

* JSX spread objects;
* argumentless Vue `v-bind` objects;
* local prop-object declarations;
* imported or helper-returned prop objects;
* cross-file prop-object dataflow;
* `v-for` or `v-slot` scope relationships for prop-object resolution;
* object contamination/reference propagation;
* package renames;
* component, event or slot renames;
* property removal or splitting;
* arbitrary custom migration scripts;
* generic JavaScript/TypeScript property access;
* receiver-unaware `setAttribute`, `Object.assign` or similar APIs;
* markup stored in arbitrary strings or `innerHTML`;
* dependency or lockfile modification;
* reverse migrations.

Indirect syntax may be supported later when production use demonstrates sufficient demand.

---

# 4. User commands

## 4.1 React, Vue and HTML

Default:

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

Supported options are:

```text
--cwd
--framework
--from
--to
--dry-run
--config
--help
```

## 4.2 Angular

Angular users run:

```bash
ng update @infineon/infineon-design-system-angular
```

The standalone CLI must not directly migrate Angular projects. When Angular is selected or detected, it redirects the user to the Angular-native command without modifying source files.

---

# 5. Architecture

## 5.1 Standalone execution

For React, Vue and HTML:

```text
detect project/framework
        ↓
resolve source and target versions
        ↓
load and validate manifest
        ↓
select crossed releases
        ↓
order operations
        ↓
preflight executor registry
        ↓
framework analysis
        ↓
compose against current in-memory content
        ↓
build combined migration plan
        ↓
validate diagnostics and edits
        ↓
dry-run or transactional apply
```

Selected releases execute in ascending semantic-version order. Operations retain manifest order within a release.

Later operations analyse the projected output of earlier operations without writing intermediate state to disk.

## 5.2 Angular execution

Angular uses its normal migration collection:

```text
Angular CLI
   ↓
migration collection
   ↓
release factory
   ↓
canonical release operations
   ↓
static executor registry
   ↓
Angular framework analysis
   ↓
in-memory staged content
   ↓
tree.overwrite only after successful analysis
```

Angular does not reproduce the standalone CLI's complete project/version-selection flow.

The Angular migration factory executes the release chosen by Angular CLI.

## 5.3 Static executor registry

Selected operations resolve through a small internal registry.

The MVP registers:

```text
rename-prop → RenamePropExecutor
```

The registry:

* contains trusted package-owned executors only;
* rejects duplicate registrations;
* rejects unsupported selected operation types before file analysis;
* is not a public plugin API;
* performs no manifest-controlled dynamic imports.

The shared platform may later support another trusted operation such as `rename-prop-value` without redesigning release selection, diagnostics or transactional application.

## 5.4 Staged content

The standalone migration needs only:

```ts
interface StagedFile {
  filePath: string;
  originalContent: string;
  currentContent: string;
  operationIds: string[];
}
```

Each operation analyses `currentContent`.

Validated edits update `currentContent` only.

Disk writes happen after all selected operations succeed.

The MVP does not require:

* revision counters;
* stale-analysis detection;
* generic create/delete file intents;
* a general project-mutation framework.

## 5.5 Source edits

Framework adapters return exact source-range edits:

```ts
interface TextEdit {
  start: number;
  end: number;
  replacement: string;
  operationId: string;
}
```

Edits must modify only the affected property or attribute name wherever possible.

The migration must preserve:

* expressions and values;
* quotes;
* comments;
* whitespace;
* line endings;
* unrelated source code.

---

# 6. Component identity

A property is eligible only when the framework adapter can associate the containing element or call with the configured DDS component.

The manifest always uses the Web Component tag:

```text
ifx-text-field
```

Framework adapters derive the appropriate representation:

```text
HTML / Angular   ifx-text-field
React            IfxTextField
Vue template     ifx-text-field or IfxTextField
Vue JSX          IfxTextField
```

React and script-based Vue syntax must preserve the TypeScript/import analysis required to prove official wrapper identity and aliases.

This requirement does not extend into prop-object origin or reference analysis.

---

# 7. React contract

## 7.1 Supported

Direct JSX props on proven official wrapper components are migrated:

```tsx
<IfxTextField success />
<IfxTextField success="true" />
<IfxTextField success={true} />
<IfxTextField success={isValid} />
```

become:

```tsx
<IfxTextField valid />
<IfxTextField valid="true" />
<IfxTextField valid={true} />
<IfxTextField valid={isValid} />
```

Official aliases are supported:

```tsx
import {
  IfxTextField as Field
} from "@infineon/infineon-design-system-react";

<Field success />
```

becomes:

```tsx
<Field valid />
```

The same property on another component remains unchanged.

## 7.2 Direct conflicts

An element containing both direct source and target props is a blocking conflict:

```tsx
<IfxTextField success={oldValue} valid={newValue} />
```

No project file may be written while such a conflict exists.

## 7.3 JSX spreads

JSX spreads are opaque in the MVP:

```tsx
const props = {
  success: isValid
};

<IfxTextField {...props} />
```

The object and spread remain unchanged.

The adapter must not classify the spread as:

* local;
* imported;
* exported;
* mutable;
* helper-produced;
* shared.

It must not trace references or edit object keys.

Direct syntax remains independent of spreads:

```tsx
<IfxTextField success {...props} />
```

The explicit `success` prop remains eligible for migration.

The MVP does not attempt to determine whether the spread also provides `valid`. This is a documented limitation of deferring spread analysis.

A cheap structured warning may be emitted for an indirect provider, but no dataflow analysis is required to produce one.

---

# 8. Vue contract

## 8.1 Direct template syntax

The following forms are migrated on the configured component:

```vue
<ifx-text-field success />
<ifx-text-field success="true" />
<ifx-text-field :success="isValid" />
<IfxTextField :success="isValid" />
```

The result uses `valid` while preserving the expression or value.

Native elements, other DDS components and third-party components remain unchanged.

## 8.2 Template traversal

Direct target elements remain eligible when nested inside normal Vue template structures, including:

```text
v-if
v-for
v-slot
template
```

The adapter only needs to traverse these structures.

It does not need to model their lexical scopes for indirect prop-object resolution.

## 8.3 Argumentless `v-bind`

Argumentless bindings are opaque:

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

The declaration and binding remain unchanged.

The adapter must not:

* resolve the identifier to a declaration;
* track `v-for` aliases;
* track `v-slot` bindings;
* classify local/imported/helper origins;
* analyse all references to the object;
* propagate contamination;
* project multiple object providers.

Direct static or statically named bindings elsewhere still migrate normally.

As with JSX spreads, the MVP does not attempt to determine whether an argumentless `v-bind` supplies the target property.

## 8.4 Vue JSX

Vue JSX follows the React JSX rule:

* direct props on proven DDS wrapper components are migrated;
* JSX spread objects remain unchanged;
* no spread-object dataflow or origin analysis is performed.

## 8.5 Render functions

Existing direct support may be retained for statically known component identity:

```ts
h(IfxTextField, {
  success: isValid
});

createVNode(IfxTextField, {
  success: isValid
});
```

The direct object-literal prop key may be renamed.

The migration must not trace objects passed indirectly to render functions.

## 8.6 Direct conflicts

Explicit source and target props on the same target element are blocking:

```vue
<ifx-text-field success :valid="value" />
```

---

# 9. Angular contract

Angular property renames execute through `ng update`.

## 9.1 External templates

The migration supports direct target-component forms including:

```html
<ifx-text-field show-delete-icon></ifx-text-field>

<ifx-text-field
  [showDeleteIcon]="value">
</ifx-text-field>

<ifx-text-field
  [show-delete-icon]="value">
</ifx-text-field>

<ifx-text-field
  bind-showDeleteIcon="value">
</ifx-text-field>

<ifx-text-field
  bind-show-delete-icon="value">
</ifx-text-field>

<ifx-text-field
  [attr.show-delete-icon]="value">
</ifx-text-field>
```

Only the property-name range changes.

Binding expressions remain unchanged.

## 9.2 Inline templates

Static inline templates in proven Angular `@Component` decorators receive equivalent migration behavior.

Supported component detection includes normal, aliased and namespace Angular `Component` imports.

Dynamic inline template literals are not partially migrated and produce:

```text
DDS011
```

## 9.3 Unsupported bindings

Unsupported source/target binding forms such as two-way bindings remain unchanged and produce:

```text
DDS010
```

An unrelated unsupported binding must not suppress a safe property rename.

## 9.4 Conflicts and writes

An explicit source/target conflict produces:

```text
DDS001
```

No `tree.overwrite` may occur if a blocking diagnostic exists anywhere in the migration plan.

## 9.5 TypeScript programmatic access

Angular class-body or general TypeScript property access is excluded.

Examples that remain unchanged:

```ts
response.success
element.success
element.setAttribute("success", value)
renderer.setProperty(element, "success", value)
```

---

# 10. Plain HTML contract

The HTML adapter operates only on:

```text
.html
.htm
```

It migrates exact attributes on the exact configured custom-element tag:

```html
<ifx-text-field success="true"></ifx-text-field>
```

becomes:

```html
<ifx-text-field valid="true"></ifx-text-field>
```

It must traverse normal descendants and `<template>` content.

It must not modify:

```html
<input success="true">
<ifx-button success="true"></ifx-button>
<other-field success="true"></other-field>
```

Nor may it modify JavaScript APIs or markup strings:

```ts
response.success
element.success
element["success"]
element.setAttribute("success", "true")

const html =
  `<ifx-text-field success="true"></ifx-text-field>`;
```

Programmatic Web Component receiver analysis is not part of the MVP.

An element containing both source and target attributes produces `DDS001`.

---

# 11. Version and project resolution

For React, Vue and HTML, releases are selected using:

```text
fromVersion < releaseVersion <= toVersion
```

Selected releases execute in semantic-version order.

Downgrades are rejected.

## 11.1 Source version

Resolve the source version in this order:

1. explicit `--from`;
2. supported project lockfile;
3. exact dependency declaration;
4. otherwise request explicit `--from`.

The MVP requires `pnpm-lock.yaml` support.

A broad dependency range without a supported lockfile is not a concrete installed version.

## 11.2 Target version

Resolve the target version from:

1. explicit `--to`;
2. the installed migration-package version.

## 11.3 Framework detection

Framework detection uses official DDS package dependencies.

If multiple official framework packages make automatic selection ambiguous, require:

```text
--framework
```

## 11.4 File collection

Source collection must exclude generated or dependency directories such as:

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

The standalone collector also respects the project-root `.gitignore`.

Binary files are skipped.

---

# 12. Diagnostics

Diagnostics use:

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

Relevant MVP codes are:

```text
DDS001  target property already exists
DDS002  ambiguous/indirect prop provider
DDS005  invalid manifest
DDS006  version resolution failed
DDS007  parse failed
DDS008  overlapping incompatible edits
DDS010  unsupported Angular binding
DDS011  dynamic Angular inline template unsupported
```

The MVP does not require separate diagnostic categories for local, imported and helper-returned prop objects because it does not classify their origins.

## 12.1 Errors

Blocking errors prevent every planned write.

Examples:

* invalid manifest;
* unresolved required version;
* parser failure;
* explicit source/target conflict;
* incompatible overlapping edits.

## 12.2 Warnings

Warnings do not block unrelated safe changes.

Indirect JSX spreads or Vue argumentless bindings may produce warnings when they can be identified cheaply, but warning generation must not require dataflow machinery.

## 12.3 Ordering

Diagnostics are deterministic:

1. file path;
2. start;
3. end;
4. operation ID;
5. diagnostic code;
6. message.

---

# 13. Analysis and application

## 13.1 Analyse before writing

No adapter writes files.

Every selected operation contributes analyses to one migration plan.

No filesystem or Angular Tree write occurs until all relevant analysis succeeds.

## 13.2 In-memory composition

For chained operations:

```text
operation 1
    ↓
currentContent
    ↓
operation 2
```

Operation 2 sees operation 1's projected result.

Disk still contains the original source until the complete plan succeeds.

## 13.3 Edit validation

Edits must:

* have valid ranges;
* not contain incompatible overlaps;
* apply deterministically.

Edits are applied from the end of the file toward the beginning.

## 13.4 Dry run

Standalone dry-run uses the same migration plan as apply mode.

Dry-run never writes files.

## 13.5 Idempotency

Running the same migration against already migrated source produces no additional edits.

## 13.6 File integrity

Unchanged files remain byte-identical.

Changed files preserve unrelated formatting and their existing line-ending convention.

---

# 14. Output and exit behavior

The standalone CLI summary should report:

* framework;
* source version;
* target version;
* applied releases;
* processed files;
* modified files;
* applied operation IDs;
* warnings;
* errors;
* dry-run status.

Expected exit behavior:

```text
0  successful apply, dry-run or no-op
1  migration/validation failure
2  CLI usage error or Angular redirection
```

---

# 15. Packaging and validation

## 15.1 Automated tests

Portable migration logic should run on:

```text
Linux
Windows
```

This includes:

* manifest handling;
* release selection;
* diagnostics;
* edit handling;
* framework parsing and direct syntax;
* executor registry;
* staged composition;
* transaction behavior.

Packaging and installed-tool integration may run on Linux only.

This includes:

* package contents;
* installed dependency resolution;
* packed CLI execution;
* Angular packed migration execution;
* real `ng update`;
* idempotency integration;
* representative consumer builds.

Do not add Windows-specific package-manager infrastructure solely to make packaging tests cross-platform.

## 15.2 Publication

Migration test failures must block package publication.

The Angular publish flow must verify that the packaged canonical migration manifest is synchronized before publication.

Verification must detect drift; CI must not silently repair it.

## 15.3 Canary validation

The published canary is the final manual end-to-end confidence check.

For releases containing migrations, manually verify representative migration behavior against the canary before stable release, including:

* install the published package;
* run the framework-appropriate migration command;
* inspect changed files;
* rerun to confirm idempotency;
* build the representative consumer.

Full manual canary validation is a release practice, not another CI framework.

---

# 16. Documentation

User documentation must explain:

* the command for each framework;
* source and target version resolution;
* dry-run behavior;
* supported direct syntax;
* unsupported indirect syntax;
* conflict behavior;
* diagnostic meaning;
* known safety limitations.

The support matrix should distinguish:

```text
automatically migrated
reported/left for manual review
unsupported and not analysed
```

Contributor documentation should explain how to add another property rename:

1. add the operation to the canonical release manifest;
2. add direct positive coverage;
3. add non-target and conflict coverage;
4. add framework-specific syntax tests where required;
5. run package and integration validation.

---

# 17. Success criteria

The MVP is ready for first production use when:

* direct property renames work for React, Vue, Angular and HTML;
* component identity is proven where required;
* aliases remain supported;
* indirect spreads and argumentless bindings are never automatically edited;
* explicit source/target conflicts block all writes;
* unrelated application properties remain unchanged;
* chained releases compose correctly in memory;
* dry-run and apply use the same analysis;
* positive migrations are idempotent;
* changed files preserve unrelated source formatting;
* the packed migration package executes outside the repository;
* Angular migration assets are packaged correctly;
* automated migration CI passes;
* a representative published-canary migration has been manually verified before stable release.

---

# 18. Future extension constraints

## 18.1 Additional operation types

The manifest envelope may later support trusted operation types such as:

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

Adding another operation type must not require redesigning:

* release grouping;
* release selection;
* executor dispatch;
* diagnostics;
* staged composition;
* dry-run;
* transactional application.

Do not implement future operation schemas before they are needed.

## 18.2 Indirect syntax

JSX spread objects and Vue argumentless `v-bind` objects may be reconsidered after real consumer migrations provide evidence that the additional coverage justifies its complexity.

A future implementation must be designed from those observed cases rather than preserving speculative MVP dataflow machinery.

## 18.3 No public plugin system

The migration platform must not introduce:

* consumer-provided executors;
* manifest-controlled executable paths;
* dynamic migration imports;
* generic lifecycle hooks;
* a public migration SDK;
* a general-purpose migration language.

Executors remain trusted package-owned implementations.

## 18.4 Manifest evolution

Breaking changes to the manifest envelope require a new `schemaVersion`.

New trusted operation types may extend `MigrationOperation` without changing the release structure.