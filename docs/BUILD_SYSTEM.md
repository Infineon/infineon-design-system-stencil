# Build System

This document explains how the DDS monorepo is built and why the current build structure exists. 

For package ownership and sources of truth, see [`ARCHITECTURE.md`](./ARCHITECTURE.md). For publishing and deployment, see [`CI_CD.md`](./CI_CD.md).

## Overview

The main tools have separate responsibilities:

| Tool | Responsibility |
| --- | --- |
| **pnpm** | Workspace and dependency management |
| **Wireit** | Task dependencies, caching, and development-service orchestration |
| **Stencil** | Compiles Web Components and generates framework bindings and documentation |
| **TypeScript / ng-packagr** | Build the React, Vue, and Angular wrapper packages |
| **Lerna / Auto** | Versioning and release orchestration |

A simplified build flow is:

```text
pnpm
  ↓
Wireit
  ↓
Stencil
  ↓
generated wrapper bindings
  ↓
React / Vue / Angular builds
  ↓
dist/**
```

The build setup is mainly optimized for two goals:

- avoid rebuilding unchanged packages;
- keep local development feedback loops short.

## Root Build

Running:

```bash
pnpm build
```

currently builds:

```text
components
├── React wrapper
├── Vue wrapper
├── Angular wrapper
└── MCP
```

Wireit resolves the dependencies between those tasks.

Example generation is separate:

```bash
pnpm generate:examples
```

Local workspace dependencies use pnpm's `workspace:*` protocol. During development, pnpm requires a matching package in the monorepo and links it directly, so a wrapper or example uses the current local build rather than a published registry version. When packages are packed or published, pnpm converts the protocol to a normal package version for external consumers. See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for the dependency boundary between workspace and registry packages.

## Wireit

Wireit wraps selected package scripts and describes their task dependencies, inputs, and outputs.

The most important configuration fields are:

| Field | Purpose |
| --- | --- |
| `command` | Command executed by the task |
| `dependencies` | Tasks that must run first |
| `files` | Inputs that invalidate the cached result |
| `output` | Generated output owned by the task |
| `service` | Long-running development process |
| `readyWhen` | Defines when a service is ready for dependents |

### Why Wireit?

Wireit combines **caching** with **development orchestration**: it avoids repeating expensive work when task inputs have not changed and coordinates dependent long-running processes so that, for example, a wrapper watcher does not start before the initial Stencil build has produced usable output.

Stencil development tasks therefore use:

```json
"service": {
  "readyWhen": {
    "lineMatches": "build finished"
  }
}
```

This allows a development chain such as:

```text
Stencil watcher starts
        ↓
initial build finishes
        ↓
Wireit sees "build finished"
        ↓
wrapper watcher starts
        ↓
example dev server starts
```

The combination of caching and output-based service readiness was an important reason for using Wireit in the current build setup.

Lerna and Auto are separate from this decision. They are historical release tooling used for versioning and publishing.

## Stencil Build

The component package runs:

```bash
stencil build
```

through Wireit.

Important Stencil outputs include:

| Output | Purpose |
| --- | --- |
| `dist/**` | Main distributable Web Component package |
| `loader/**` | Stencil loader |
| `dist/docs.json` | Component API information used by tooling such as MCP |
| `dist/cem.json` | Custom Elements Manifest used by DDS tooling |
| generated README sections | Component API documentation |
| `www` | Development/Storybook browser output |
| `build-wrapper/**` | Intermediate React, Vue, and Angular bindings |

The normal production build generates all configured output targets.

## Framework Wrapper Generation

Stencil does not directly produce the final framework packages.

The production flow is:

```text
Stencil component source
        ↓
Stencil build
        ↓
packages/components/build-wrapper/**
        ↓
wrapper prebuild
        ↓
stencil-generated/**
        ↓
framework compiler
        ↓
wrapper dist/**
```

The framework builds are:

- **React:** `tsc`
- **Vue:** `tsc`
- **Angular:** `ng-packagr`

Wrapper packages also contain intentional hand-written integration code and should not be treated as fully generated.

### Why `build-wrapper/**` exists

Originally, Stencil generated bindings directly into the React, Vue, and Angular package directories.

That worked functionally, but the component build then modified files belonging to several other workspace packages. This made it difficult to establish clean task boundaries for Wireit caching.

Wrapper generation was therefore changed to first write into:

```text
packages/components/build-wrapper/**
```

Each wrapper then copies its generated bindings during an explicit `prebuild` task.

The dependency becomes:

```text
components:build
      ↓
wrapper:prebuild
      ↓
wrapper:build
```

This gives the Stencil build a self-contained output and lets Wireit model the generated wrapper files as an explicit boundary between tasks.

`build-wrapper/**` is therefore an intermediate generated artifact, not maintained source.

If this flow is changed, the caching and invalidation implications should be considered as part of the change.

## Caching and Invalidation

Wireit determines whether a task needs to run from its declared inputs and outputs.

For example:

```text
component source
      ↓
components:build
      ↓
generated wrapper bindings
      ↓
wrapper:prebuild
      ↓
wrapper:build
```

If the relevant inputs have not changed, Wireit can reuse the task output instead of executing the command again.

The component build currently tracks inputs including:

```text
src/**
stencil.config.ts
tsconfig.json
package.json
pnpm-lock.yaml
```

Because `src/**` is broad, Storybook stories currently also invalidate the component build.

The local Wireit cache is stored under `.wireit`. CI additionally persists Wireit cache entries across GitHub Actions runs; see [`CI_CD.md`](./CI_CD.md) for details.

## Targeted Development Builds

A full Stencil build generates outputs for every supported framework. This is unnecessary during normal local development.

The `BUILD_TARGET` environment variable limits Stencil to the outputs required for the active workflow:

| Target | Main output |
| --- | --- |
| `www` | Browser development output |
| `html` | Stencil distribution |
| `react` | Stencil distribution + React bindings |
| `vue` | Stencil distribution + Vue bindings |
| `angular` | Stencil distribution + Angular bindings |
| unset | Full production output |

For example, React development roughly follows:

```text
react-example
      ↓
wrapper-react
      ↓
Stencil BUILD_TARGET=react
```

The main reason for targeted builds is faster development: changing a React integration should not also require generating Vue and Angular output.

Storybook similarly uses the minimum `www` Stencil development target during local development.

Watch-mode implementations differ slightly between frameworks. These differences should be treated as implementation details rather than assuming every framework has an identical development graph.

## Notes

A few relationships are useful to keep in mind when changing the build system:

- Keep Wireit `files`, `output`, and `dependencies` aligned with what commands actually read and generate.
- `build-wrapper/**` is part of the current boundary between the Stencil and wrapper build caches.
- Framework binding configuration lives primarily in `packages/components/stencil.config.ts`.
- Generated `stencil-generated/**` files should normally be changed through their upstream Stencil configuration or component API.
- `BUILD_TARGET` exists primarily to keep development builds fast.
- Production builds and watch-mode builds optimize for different workflows and do not have to be identical.

## Common Commands

```bash
pnpm build
pnpm build:components
pnpm build:wrappers

pnpm dev
pnpm dev:react
pnpm dev:vue
pnpm dev:angular-module
pnpm dev:angular-standalone

pnpm storybook
pnpm generate:examples
```

## Related Documentation

- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — package architecture and sources of truth
- [`CI_CD.md`](./CI_CD.md) — CI, publishing, package validation, and deployment
- [`CONTRIBUTING.md`](../CONTRIBUTING.md) — contributor workflow
- [`AGENTS.md`](../AGENTS.md) — concise source/generated-file guidance
