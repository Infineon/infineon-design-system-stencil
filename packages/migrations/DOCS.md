# migrations — Architecture

## Execution flow

```text
CLI
→ project/version resolution
→ manifest and release selection
→ executor registry
→ operation executor
→ framework adapter
→ virtual workspace
→ migration plan
→ apply
```

The CLI builds a full `MigrationPlan` before any file is written. Each step is
executed by a registered operation executor, which delegates to a framework
adapter for file analysis. Adapters return `FileAnalysis` objects containing text
edits and diagnostics. The virtual workspace collects these analyses, detects
conflicts, and only then applies the plan.

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

    Executor -->|applies to| Workspace
    Workspace -->|produces| Plan["MigrationPlan"]

    Manifest -.->|references| Types
```

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
