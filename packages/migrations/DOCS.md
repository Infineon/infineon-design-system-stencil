# migrations — Architecture

## Execution flow

```text
operation 1
↓
analyse currentContent
↓
apply validated TextEdits to workspace
↓
operation 2 analyses projected currentContent
↓
...
↓
final MigrationPlan
↓
disk write
```

The CLI follows an analyse-before-write discipline: a full `MigrationPlan` is
built before any file is written. Each step is executed by a registered operation
executor, which delegates to a framework adapter for file analysis. Adapters
return `FileAnalysis` objects containing `TextEdit`s and diagnostics. The
executor aggregates adapter analyses into a step analysis; the migration
orchestrator validates the complete step diagnostics and asks the virtual
workspace to atomically apply accepted file analyses. Only then is the plan
finalised.

### Atomicity boundaries

**Within a step:** all `FileAnalysis` results are validated before any workspace
`currentContent` is updated. Either all edits for the step are committed or none
are.

**Across the migration:** the disk is untouched until all selected operations
have completed without blocking diagnostics. The plan is applied as a single
batch write at the end.

## Building Blocks

```mermaid
flowchart TD
    CLI["CLI\nrunMigration()"]
    Manifest["Manifest\nloadManifest() · selectReleases()"]
    Project["Project\ndetectProject()"]
    Types["Types\nMigrationStep\nRenamePropStepDefinition"]

    subgraph core["Core"]
        Registry["ExecutorRegistry"]
        Executor["RenamePropExecutor"]
        Orchestrator["Migration Orchestrator"]
        Workspace["VirtualWorkspace"]
    end

    subgraph adapters["Framework Adapters"]
        HTML["HTML Adapter"]
        React["React Adapter"]
        Vue["Vue Adapter"]
    end

    subgraph engines["Transform Engines"]
        JSX["JSX Engine\n(TypeScript Compiler API)"]
        VueSFC["Vue SFC Parser"]
        Parse5["parse5"]
    end

    CLI -.->|calls| Manifest
    CLI -.->|calls| Project
    CLI -.->|uses| Registry

    Registry -->|resolves| Executor
    Executor -->|uses| HTML
    Executor -->|uses| React
    Executor -->|uses| Vue

    HTML -.->|uses| Parse5
    React -.->|uses| JSX
    Vue  -.->|uses| JSX
    Vue  -.->|uses| VueSFC

    Executor -->|aggregates analyses| Orchestrator
    Orchestrator -->|applies to| Workspace
    Workspace -->|produces| Plan["MigrationPlan"]

    Manifest -.->|references| Types
```

## Responsibility split

- **Adapter** (`ReactRenamePropAdapter`, `VueRenamePropAdapter`,
  `HtmlRenamePropAdapter`): parses a single file and produces a `FileAnalysis`
  with text edits and diagnostics. It decides what is safe to rewrite within the
  file but does not know about other files or the final write plan.
- **Executor** (`RenamePropExecutor`): runs one migration operation across all
  files in the project by invoking the appropriate adapter for each file. It
  returns a `MigrationAnalysis` that aggregates all file analyses for that step.
- **Orchestrator** (`analyseMigration`): validates the complete step diagnostics
  and decides whether the step can be applied. It owns the lifecycle decision:
  warnings are accepted, errors stop execution before the next release step.
- **Virtual workspace** (`VirtualWorkspace`): receives accepted file analyses,
  validates and applies their `TextEdit`s atomically per step, and maintains
  `originalContent` and `currentContent` for composition across operations.
- **Plan application** (`applyMigrationPlan`): performs the final disk writes
  from the accumulated `MigrationPlan` when no error diagnostics are present.

## Execution Sequence

```mermaid
sequenceDiagram
  actor User
  participant CLI as CLI (runMigration)
  participant Project as detectProject
  participant Manifest as loadManifest / selectReleases
  participant Registry as ExecutorRegistry
  participant Executor as RenamePropExecutor
  participant Adapter as Framework Adapter
  participant Orchestrator as Migration Orchestrator
  participant Workspace as VirtualWorkspace
  participant FS as File System

  User->>CLI: dds-migrate [--framework] [--config] [--dry-run]

  CLI->>Project: detectProject(cwd, framework?)
  Project->>FS: readNearestPackageJson(cwd)
  FS-->>Project: package.json
  Project-->>CLI: { framework, installedPackage, installedVersion }

  CLI->>Manifest: loadManifest(configPath?)
  Manifest->>FS: read manifest.json
  FS-->>Manifest: raw JSON
  Manifest-->>CLI: MigrationManifest (validated)

  CLI->>Manifest: selectMigrationReleases(manifest, from, to)
  Manifest-->>CLI: SelectedMigrationRelease[]

  CLI->>Registry: getExecutor("rename-prop")
  Registry-->>CLI: RenamePropExecutor

  CLI->>Executor: analyse(step, context)

  loop each file
    Executor->>Adapter: analyseFile(filePath, content, ...)
    Adapter->>Adapter: parse + collect diagnostics
    Adapter-->>Executor: FileAnalysis | null
  end

  Executor-->>Orchestrator: MigrationAnalysis

  Orchestrator->>Orchestrator: aggregate file diagnostics
  Orchestrator->>Orchestrator: validate the complete step
  Orchestrator->>Workspace: atomically applyStep(fileAnalyses)
  Workspace-->>Orchestrator: workspace diagnostics
  Orchestrator->>Orchestrator: create final MigrationPlan
  Orchestrator-->>CLI: MigrationPlan

  alt not dry-run and no error diagnostics
    CLI->>Workspace: applyMigrationPlan(plan)
    Workspace->>FS: write planned changes
  end

  CLI-->>User: MigrationResult (summary printed)
```
