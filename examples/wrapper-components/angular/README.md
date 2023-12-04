# Consuming Angular Wrapper Components

This example application demonstrates the usage of the Angular Wrapper Components based on our Stencil web components. Additionally, it serves for testing purposes.

## Run locally

### Using web components from local package (symlinks to local Stencil and Angular wrapper library)

Current solution using symlinks to test the local Angular wrapper library: (Using a symlink - the wrapper library - inside of another symlink - the core component library - while being outside of the Angular workspace can cause issues.)

Go to:
[Angular Components Workspace](../../../packages/components-angular)

Within this folder, run:

```bash
npm i
npm run test:local
```

This runs the application located in ```./projects/my-app``` within the Angular Workspace.


### Using web components from npm registry (use latest version or specify canary version in package.json)

Within the ``components-angular`` workspace, run:

```bash
npm i
npm run start
```

The application will be served on http://localhost:4200.