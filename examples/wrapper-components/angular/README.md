# Consuming Angular Wrapper Components

This example application demonstrates the usage of the Angular Wrapper Components based on our Stencil web components. Additionally, it serves for testing purposes.

## Run locally

### Using Stencil components from npm package (symlink to local Stencil library)

Current solution using symlinks to test the local Angular wrapper library: (not possible to create symlinks outside of the Angular workspace)

Go to:
[Angular Components Workspace](../../../packages/components-angular)

Within this folder, run:

```bash
npm i
npm run test:local
```

### Using Stencil components from npm registry (use latest version or specify canary version in package.json)

```bash
npm i
npm run start
```

The application will be served on http://localhost:4200.