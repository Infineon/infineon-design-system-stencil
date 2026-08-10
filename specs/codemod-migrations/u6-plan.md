# U6 — Implementation Slices

# S0 — Diagnostic parity

### Changes

* Add `DDS010` — unsupported Angular binding.
* Add `DDS011` — dynamic inline template unsupported.
* Export `DiagnosticCode` from `@infineon/design-system-migrations`.
* Change diagnostic ordering to:

  1. file
  2. start
  3. end
  4. operation ID
  5. code
  6. message
* Update `SPEC.MD`.

### Tests

* Diagnostic code values.
* Deterministic ordering.

### Validate

```bash
pnpm -F @infineon/design-system-migrations test
pnpm -F @infineon/design-system-migrations build
```

### Commit

```text
feat(migrations): reserve Angular diagnostics and align ordering
```

---

# S1 — Audit legacy Angular manifest artifacts

### Check usages of

```text
export-legacy-manifest.cjs
migrations/v1.json
shared/v1.json
update-v40
update-to-v40
```

### Decide

* Delete artifacts with no remaining consumer.
* Document any artifact that must remain and its consumer.
* Check whether `packages/migrations` contains an obsolete Angular `ng-update` collection.

### Historical audit outcome

At the time of the audit, the legacy manifest files and `update-v40` path still had packaging consumers. S2 and S3 supersede those findings by moving Angular to the canonical `shared/manifest.json` and removing the legacy export path. The registered migration name `update-to-v40` remains part of the Angular update contract even when its factory moves to `releases/v40`.

No obsolete Angular `ng-update` collection exists outside the wrapper.

### No functional refactor in this slice.

---

# S2 — Canonical Angular manifest

### Changes

Rewrite:

```text
packages/wrapper-angular/migrations/lib/manifest.js
```

Use only:

```text
migrations/shared/manifest.json
```

Add:

```js
loadManifestFromPath(path)
loadReleaseOperations(version, optionalPath)
```

Release selection:

```js
release.version === "40.0.0"
```

Remove:

* custom semver;
* fallback paths;
* `manifest.migrations`;
* grouped `rule.operations`;
* `targetVersion` filtering.

Validate:

* schema version;
* releases;
* duplicate releases;
* operation IDs;
* supported operation type;
* non-empty component/from/to;
* `from !== to`;
* conflicting component/from mappings.

### Adapt existing migrators

Update existing Angular template/TS migration code to consume canonical operations directly:

```js
operation.id
operation.component
operation.from
operation.to
```

Consume canonical operations through the shared static executor architecture; do not add a separate Angular-specific operation model.

### Replace fixture

Convert:

```text
tests/fixtures/test-manifest.json
```

to canonical:

```json
{
  "schemaVersion": 1,
  "releases": [
    {
      "version": "40.0.0",
      "operations": []
    }
  ]
}
```

### Tests

* Default manifest path.
* Missing manifest.
* Directory instead of manifest.
* Exact v40 selection.
* Invalid manifest.
* Existing Angular migration tests remain green.

---

# S3 — Manifest sync and legacy cleanup

### Add

```text
scripts/sync-migration-manifest.js
scripts/verify-migration-manifest.js
migrations/shared/manifest.json
```

### Sync

Copy bytes from:

```text
packages/migrations/migrations/manifest.json
```

to:

```text
packages/wrapper-angular/migrations/shared/manifest.json
```

Validate through `manifest.js` before copying.

### Verify

* Compare both files byte-for-byte.
* Validate copied manifest.
* Never modify files.

### Update Wireit

Replace legacy export with sync script.

Update:

* `command`;
* `files`;
* `output`.

Output becomes:

```text
migrations/shared/manifest.json
```

### Cleanup

Delete, when no remaining consumer exists:

```text
packages/migrations/scripts/export-legacy-manifest.cjs
packages/migrations/migrations/v1.json
packages/wrapper-angular/migrations/shared/v1.json
```

Remove obsolete Angular migration collection outside the wrapper if found.

### Tests

* Manifest copies are byte-identical.
* Verification detects stale copy.
* Sync restores equality.

### Commit S2 + S3 together if separating them would leave tests/build broken.

```text
refactor(migrations): use canonical Angular migration manifest
```

---

# S4 — Angular diagnostics and edits

### Add

```text
migrations/lib/diagnostic-codes.js
migrations/lib/diagnostics.js
migrations/lib/edits.js
```

### Diagnostics

Mirror:

```text
DDS001
DDS005
DDS007
DDS008
DDS010
DDS011
```

Add drift test against canonical `DiagnosticCode`.

### Edits

Use:

```js
{
  start,
  end,
  replacement,
  operationId,
  description
}
```

Implement:

```js
deduplicateEdits()
validateEdits()
applyEdits()
```

Reject overlapping incompatible edits with `DDS008`.

### Tests

* Diagnostic drift.
* Ordering.
* Single/multiple edits.
* Duplicate edits.
* Invalid ranges.
* Overlap.

---

# S5 — Core Angular template rename

Refactor:

```text
migrations/lib/migrate-template.js
```

API:

```js
analyseTemplateContent(
  content,
  filePath,
  step
)
```

Return:

```js
{
  edits,
  diagnostics
}
```

### Support

```html
<ifx-text-field show-delete-icon>
<ifx-text-field show-delete-icon="true">
<ifx-text-field show-delete-icon="{{ value }}">
<ifx-text-field [showDeleteIcon]="value">
<ifx-text-field [show-delete-icon]="value">
<ifx-text-field bind-showDeleteIcon="value">
<ifx-text-field bind-show-delete-icon="value">
<ifx-text-field [attr.show-delete-icon]="value">
<ifx-text-field [attr.showDeleteIcon]="value">
```

### Requirements

* Exact component selector only.
* Modify only property-name range.
* Preserve expressions and formatting.
* Parser failures → `DDS007`.

### Tests

* Every syntax above.
* Native element unchanged.
* Other DDS component unchanged.
* Third-party element unchanged.
* Multiple/nested targets.
* Idempotency.

---

# S6 — Angular template conflicts and edge syntax

### Conflict detection

Emit `DDS001` for source + target combinations:

```html
<ifx-text-field show-delete-icon clearable>
<ifx-text-field [showDeleteIcon]="a" [clearable]="b">
<ifx-text-field show-delete-icon [clearable]="b">
<ifx-text-field [attr.show-delete-icon]="a" clearable>
```

Also block duplicate source providers:

```html
<ifx-text-field
  show-delete-icon
  [showDeleteIcon]="value">
```

### Two-way bindings

Do not migrate:

```html
[(showDeleteIcon)]="value"
bindon-showDeleteIcon="value"
```

Emit `DDS010` warning.

Only suppress when the unsupported binding concerns the current operation's source or target.

This must still migrate:

```html
<ifx-text-field
  [(value)]="model"
  show-delete-icon>
```

### Traversal

Support targets inside:

```text
ng-template
@if
@for
@switch
@defer
```

### Tests

* Conflict combinations.
* Duplicate sources.
* Relevant DDS010.
* Unrelated two-way binding does not suppress migration.
* Control-flow traversal.

---

# S7 — Real Angular `@Component` detection

Refactor:

```text
migrations/lib/migrate-typescript.js
```

### Resolve

```ts
import { Component } from "@angular/core";
import { Component as NgComponent } from "@angular/core";
import * as ng from "@angular/core";
```

Recognize:

```ts
@Component(...)
@NgComponent(...)
@ng.Component(...)
```

Use:

```js
ts.canHaveDecorators()
ts.getDecorators()
```

### Only process

`template` inside proven Angular `@Component({...})`.

### Ignore

* arbitrary object property called `template`;
* class field called `template`;
* non-Angular decorator;
* `templateUrl`.

### Tests

* Direct import.
* Alias.
* Namespace import.
* False-positive cases.

---

# S8 — Inline template source mapping

### Support

* single-quoted templates;
* double-quoted templates;
* no-substitution backtick templates.

### Implement

Decoded-template-offset → raw-TypeScript-offset mapping.

Handle:

* escaped quotes;
* escaped newlines;
* escaped backslashes.

Apply only mapped property-name edits to the TS file.

### Dynamic templates

For a dynamic template literal inside a proven Angular `@Component`, do not migrate it and emit `DDS011`:

```ts
template: `
  <ifx-text-field show-delete-icon="${value}">
`
```

Do not inspect substitutions or attempt partial template analysis.

### Tests

* All literal types.
* Escaped offsets.
* Correct mapped diagnostic offsets.
* Dynamic component template remains unchanged and emits `DDS011`.
* Idempotency.

---

# S9 — Transactional Angular orchestration

### Add

```text
migrations/lib/angular-adapter.js
migrations/lib/executor-registry.js
migrations/lib/rename-prop-executor.js
migrations/lib/staged-files.js
migrations/releases/v40/index.js
```

Update:

```text
migrations/migrations.json
```

Delete:

```text
migrations/update-v40/
```

### Adapter

Collect `.html` and `.ts` files, sort paths, and exclude:

```text
.angular
.git
dist
node_modules
*.d.ts
```

Analyse external templates with `analyseTemplateContent()` and TypeScript files with `analyseTypeScriptContent()`.

### Registry and executor

* Register trusted package-owned executors by operation type.
* Register `RenamePropExecutor` for the MVP.
* Reject duplicate registrations and preflight selected operations.
* Delegate file collection and analysis to the operation-specific Angular adapter.
* Keep public plugins, dynamic imports and consumer-provided executors out of scope.

### Staged files

Store only:

```js
{
  originalContent,
  currentContent,
  operationIds,
  changes
}
```

For each operation in manifest order:

1. Analyse all files against `currentContent`.
2. Collect diagnostics.
3. On error, stage none of that operation.
4. Otherwise apply edits.
5. Next operation reads updated content.

The migration factory is:

```text
./releases/v40/index.js#updateToV40
```

It loads v40 operations, preflights the registry, analyses against staged content, logs warnings, aborts on errors and calls `tree.overwrite` only after all operations succeed.

### Logging

Use `context.logger` for:

* release version;
* operation IDs;
* changed files;
* warnings;
* modified-file count.

### Tests

* Exact-segment exclusions; `src/app/distro` is not excluded.
* `.d.ts` ignored and paths sorted.
* Duplicate and missing executor failures.
* Operation 2 reads operation 1's staged content.
* A later failure leaves the full project plan unapplied.
* A project containing safe external and inline templates plus one conflict emits `DDS001` and calls `tree.overwrite` zero times.
* Removing the conflict writes only changed files.

### Commit

```text
refactor(migrations): stage Angular updates before tree writes
```

---

# S10 — Packaging and installed execution

### Package changes

`@angular/compiler`:

* peer dependency aligned with Angular wrapper support.

`typescript`:

* regular runtime dependency;
* keep development dependency as required.

### Prepack

Validate:

```text
shared/manifest.json exists
is regular file
parses successfully
contains v40 release
dist copy remains valid
```

### Tests

Install package in temporary directory outside repository hierarchy.

Verify:

```js
require.resolve("@angular/compiler", {
  paths: [wrapperRoot]
})

require.resolve("typescript", {
  paths: [wrapperRoot]
})
```

Ensure resolution does not come from repository `node_modules`.

### Update packaging tests

Assert tarball contains:

```text
migrations/migrations.json
migrations/shared/manifest.json
migrations/releases/v40/index.js
migrations/lib/manifest.js
migrations/lib/angular-adapter.js
migrations/lib/executor-registry.js
migrations/lib/rename-prop-executor.js
migrations/lib/staged-files.js
```

Assert absence of:

```text
migrations/shared/v1.json
migrations/update-v40/
```

Inspect the archive through a cross-platform Node API rather than relying on system `tar`.

### Installed factory test

1. Pack wrapper.
2. Create temporary consumer outside repo.
3. Install tarball + Angular peers.
4. Require installed `releases/v40/index.js`.
5. Run factory on in-memory Angular Tree.
6. Use default manifest path.
7. Verify both real v40 operations.

### Packed `ng update`

Add one helper:

```text
tests/helpers/create-versioned-angular-package.js
```

Build wrapper, copy `dist`, set temporary package version to:

```text
40.0.0
```

and pack without changing repository files.

Run:

```bash
ng update \
  @infineon/infineon-design-system-angular \
  --migrate-only \
  --from <source-version> \
  --to 40.0.0 \
  --allow-dirty \
  --force
```

Assert:

* migration discovered automatically;
* release logged;
* both canonical operation IDs logged;
* external template changed;
* inline template changed;
* exit 0.

### Idempotency

Run identical command again.

Assert:

```text
Modified files: 0
files byte-identical
```

### Consumer builds

Add minimal fixtures:

```text
tests/fixtures/standalone-consumer/
tests/fixtures/module-consumer/
```

Each contains:

* external template;
* inline template;
* minimal Angular build.

### For each

1. Copy fixture.
2. Install packed v40 wrapper.
3. Run migration.
4. Verify property changes.
5. Run `ng build`.

Both must pass.

Full example dogfooding is an optional manual release check, not a U6 or CI gate.

### Commit

```text
test(migrations): verify packed Angular v40 updates
```

---

# S11 — CI

### Before generated-file check

```bash
node packages/wrapper-angular/scripts/verify-migration-manifest.js
```

### Linux + Windows

Run fast:

```text
manifest
diagnostics
edits
template
typescript
registry
staged files
transaction
packaging
```

### Linux

Run:

```text
installed factory
packed ng update
idempotency
standalone consumer build
module consumer build
```

### Publication

Block publishing when Angular migration tests fail.

---

# S12 — Documentation and U6 completion

Update:

```text
packages/migrations/README.md
packages/wrapper-angular/README.md
specs/codemod-migrations/SPEC.MD
specs/codemod-migrations/TASKS.MD
release notes
PR description
```

Document:

* Angular uses `ng update`;
* supported binding forms;
* DDS010;
* DDS011;
* class-body/DOM APIs excluded;
* warnings do not block safe changes;
* conflicts block all writes;
* migration is idempotent;
* TypeScript runtime dependency rationale;
* `ifxDeleteIconClick → ifxClear` must be migrated manually.

Mark U6 complete.

### Commit

```text
chore(migrations): finalize Angular v40 migration path
```