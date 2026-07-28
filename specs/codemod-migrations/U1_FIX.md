
# Stabilization Plan: Foundations and React U1

## Goal

Complete the migration foundations and React direct prop renaming before starting U2.

Target flow:

```text
CLI
→ project/version resolution
→ release selection
→ executor registry
→ virtual workspace
→ React adapter
→ combined plan
→ conflict gate
→ apply
```

## Dependency order

```text
FX1 Diagnostics ─┐
FX2 Manifest path ├─→ FX4 Virtual workspace → FX5 Accounting → FX6 Legacy cleanup → FX7 CI
FX3 pnpm version ┘
```

FX1–FX3 can be implemented in parallel.

---

## FX1 — Propagate file diagnostics

**Files**

- `lib/core/plan.ts`
- `lib/operations/rename-prop/executor.ts`
- `tests/plan.test.ts`
- `tests/react-adapter.test.ts`

**Changes**

- Add every `FileAnalysis.diagnostics` entry to `MigrationPlan.diagnostics`.
- Keep project-level and file-level diagnostics separate until plan aggregation.
- Sort diagnostics in the final plan.
- Preserve analyses that contain diagnostics but no edits.

**Tests**

- `<IfxTextField success valid />` produces `DDS001`.
- The diagnostic contains file, range, and operation ID.
- One conflict prevents writes to all safe files.

**Done when**

React conflicts reach the CLI and `applyMigrationPlan()` rejects the plan.

---

## FX2 — Fix built-in manifest resolution

**Files**

- `lib/core/manifest.ts`
- `tests/manifest.test.ts`
- `tests/smoke.test.ts`

**Changes**

Resolve the package-root manifest from both source and build output:

```ts
fileURLToPath(
  new URL("../../migrations/manifest.json", import.meta.url)
);
```

Wrap load and parse failures with the attempted path.

**Tests**

- `loadManifest()` works without arguments.
- Built package loads the default manifest.
- Packed CLI runs without `--config`.
- Custom manifest execution still works.

**Done when**

The documented default CLI command can start from the installed package.

---

## FX3 — Fix pnpm installed-version resolution

**Files**

- `lib/project/pnpm-lockfile.ts`
- `lib/project/resolve-versions.ts`
- `tests/pnpm-lockfile.test.ts`
- `tests/resolve-versions.test.ts`

**Changes**

- Locate the nearest `pnpm-lock.yaml`.
- Derive the importer relative to the lockfile directory:
  - root project → `.`
  - `/repo/apps/demo` → `apps/demo`
- Read the dependency entry's resolved `version`, never its `specifier`.
- Normalize peer suffixes and validate with `semver`.
- Use the packages map only if exactly one version matches.
- Replace the exact-version regex fallback with strict `semver.valid()`.

**Tests**

```yaml
specifier: ^39.0.0
version: 39.21.0
```

must resolve to `39.21.0`.

Also cover nested importers, peer suffixes, ambiguous package-map entries, invalid versions, and explicit `--from`.

**Done when**

Release selection is based on the actual installed consumer version.

---

## FX4 — Execute steps through an in-memory workspace

**Files**

- `lib/core/workspace.ts` — new
- `lib/core/types.ts`
- `lib/core/plan.ts`
- `lib/operations/rename-prop/executor.ts`
- `lib/adapters/react/index.ts`
- `lib/adapters/react/jsx.ts`
- `tests/plan.test.ts`

**Changes**

Introduce:

```ts
interface WorkspaceFile {
  filePath: string;
  originalContent: string;
  currentContent: string;
  revision: number;
  operationIds: string[];
  changes: string[];
}
```

Execution per step:

1. Read current virtual content.
2. Analyse against its revision.
3. Aggregate diagnostics.
4. Stop on errors.
5. Apply edits in memory.
6. Increment the revision.
7. Continue to the next step.

Adapters receive content and revision instead of reading files themselves.

Generate the final plan from:

```text
original disk content → final virtual content
```

Add `DDS009 STALE_FILE_ANALYSIS`.

**Tests**

- `foo → bar`, then `bar → baz` produces `baz`.
- The same works across two releases.
- Analysis performs no disk writes.
- A failed step prevents later steps.
- Stale analyses are rejected.

**Done when**

A multi-release upgrade equals running each release sequentially.

---

## FX5 — Correct processed-file accounting

**Files**

- `lib/core/types.ts`
- `lib/core/workspace.ts`
- `lib/core/plan.ts`
- `lib/operations/rename-prop/executor.ts`
- `lib/cli/index.ts`

**Changes**

Add `processedFilePaths` to executor analysis.

Calculate:

```ts
processedFileCount =
  new Set(allProcessedFilePaths).size;
```

Definitions:

- Processed: unique non-binary files inspected.
- Modified: unique files whose final content differs.
- A file scanned by several steps counts once.

**Tests**

- One changed and one unchanged file → processed `2`, modified `1`.
- One file affected by two operations counts once.
- Binary files are excluded.
- No crossed releases → processed `0`.

**Done when**

CLI counts match actual files rather than matching analyses.

---

## FX6 — Remove the legacy React path

**Files to review/remove**

- `lib/adapters/react-adapter.ts`
- `lib/runners/react-jscodeshift.ts`
- `lib/runners/react/index.ts`
- `lib/runners/jsx.ts`

**Changes**

- Keep only the range-based `ReactRenamePropAdapter`.
- Remove `flattenManifest()`.
- Remove public exports for:
  - `PropRenameMigration`
  - `MigrationRule`
  - `RunnerContext`
  - `CodemodRunner`
  - legacy `FileChange`
- Move any temporary Vue/HTML compatibility types into private modules.
- Rewrite integration tests through `analyseMigration()` or the CLI.

**Done when**

There is one React production path and no React full-file AST reprinting.

---

## FX7 — Repository cleanup and final validation

**Files**

- `.vscode/settings.json`
- migration tests
- CI/build configuration
- `specs/codemod-migrations/TASKS.MD`

**Changes**

- Revert the unrelated HTML formatter change.
- Fix the current failing test workflow.
- Add `react-u1.integration.test.ts`.
- Extend packed tests to cover:
  - default manifest
  - direct React rename
  - dry-run
  - conflict
  - idempotency
  - generic `response.success` unchanged
  - chained releases
- Update task statuses only after tests pass.

**Required commands**

```bash
pnpm --dir packages/migrations check
pnpm --dir packages/migrations test
pnpm build
pnpm test
pnpm --dir packages/migrations pack
```

**Done when**

- CI is green.
- Packed CLI works without `--config`.
- React conflict causes zero writes.
- Chained rename reaches the final prop.
- U1 can be marked complete.

---

## Recommended commits

1. `fix(migrations): propagate file diagnostics into plans`
2. `fix(migrations): resolve packaged default manifest`
3. `fix(migrations): resolve installed pnpm importer versions`
4. `refactor(migrations): execute steps in virtual workspace`
5. `fix(migrations): report unique processed files`
6. `refactor(migrations): remove legacy React migration path`
7. `test(migrations): complete React U1 acceptance coverage`

## Final acceptance examples

Must migrate:

```tsx
<IfxTextField success={isValid} />
```

to:

```tsx
<IfxTextField valid={isValid} />
```

Must fail without writing:

```tsx
<IfxTextField success={oldValue} valid={newValue} />
```

Must remain unchanged:

```ts
const response = { success: true };
```

Chained upgrade:

```text
v40: success → valid
v41: valid → state
```

must produce:

```tsx
<IfxTextField state />
```
