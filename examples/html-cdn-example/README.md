# HTML CDN Example
This example app demonstrates the usage of the Infineon Design System Stencil components using plain HTML and loading the components via CDN.

## Installation and Setup
To use the components via CDN, you don't need to install any packages. You can simply include the following script and link tags in your HTML file:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.css" media="all">
```

> Note that this example app does not load the components via CDN for demonstration purposes. Instead, it uses a local build of the components for faster development and testing.

Then you can use the components in your HTML as shown in the [index.html](./index.html) file:

```html
<ifx-alert variant="primary" icon="c-info-16">Attention! This is an alert message!</ifx-alert>
```

## Running the Example App
To run the example app in development mode, use the following command:
```bash
pnpm run -F html-cdn-example dev
```
This will start a development server using local node_modules and you can access the app at http://localhost:3001.

To prepare the example for deployment, use:
```bash
pnpm run -F html-cdn-example build
```

This copies the HTML file to the dist/ folder for consistency with other examples. Note that there isn't a real "build" step for this CDN example as it's just a simple file copy.
Additionally, the `preview` command is also available, but does the same as `dev` in this case:
```bash
pnpm run -F html-cdn-example preview
```
