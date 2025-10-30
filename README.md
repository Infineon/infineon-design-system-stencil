# Infineon Design System

## Example Apps
This monorepo contains several example applications demonstrating the usage of the Infineon Design System Stencil components in different environments:
- **HTML CDN Example**: An example app using plain HTML and loading the components via CDN.
- **HTML NPM Example**: An example app using plain HTML and installing the components via npm.
- **Angular Standalone Example App**: An Angular application demonstrating the usage of the components in standalone mode.
- **Angular Module Example App**: An Angular application demonstrating the usage of the components as part of an Angular module.
-- TODO

## Building and Running Example Apps
All example apps support the following commands:
- `dev`: Starts a development server for the example app.
- `build`: Builds the example app for production.
- `preview`: Previews the built example app using a static file server.

They can either be run from anywhere using `pnpm run -F <example-app-name> <command>` or by navigating to the respective example app directory and running the commands directly.

The following table summarizes the example apps along with their development and preview ports:

| Example App                      | Dev On Port | Preview On Port |
|----------------------------------|-------------|-----------------|
| HTML CDN Example                 | 3001        | 4001            |
| HTML NPM Example                 | 3002        | 4002            |
| Angular Standalone Example App   | 3003        | 4003            |
| Angular Module Example App       | 3004        | 4004            |
| React Example App                | 3005        | 4005            |
