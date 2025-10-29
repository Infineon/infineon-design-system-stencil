# HTML NPM Example
This example app demonstrates the usage of the Infineon Design System Stencil components using plain HTML and installing the components via npm.

## Installation and Setup
First, install the Infineon Design System Stencil components in your project.
```bash
npm install @infineon/infineon-design-system-stencil
```

Then, you can import the components in javascript/typescript.

[index.js](./src/index.ts):
```javascript
import '@infineon/infineon-design-system-stencil';
```

> Note, that you also need to include the corresponding script in you HTML file (see [index.html](./src/index.html)):


Then you can use the components in your HTML as shown in the [index.html](./src/index.html) file:

```html
<ifx-alert variant="primary" icon="c-info-16">Attention! This is an alert message!</ifx-alert>
```

## Running the Example App
To run the example app in development mode, use the following command:
```bash
pnpm run -F html-npm-example dev
```
This will start a development server and you can access the app at `http://localhost:3002`.

To build the example app for production, use:
```bash
pnpm run -F html-npm-example build
```

To preview the built example app, use:
```bash
pnpm run -F html-npm-example preview
```
This will start a static file server and you can access the built app at `http://localhost:4002`.
