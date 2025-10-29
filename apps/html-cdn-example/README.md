# HTML CDN Example
This example app demonstrates the usage of the Infineon Design System Stencil components using plain HTML and loading the components via CDN.

## Installation and Setup
To use the components via CDN, you don't need to install any packages. You can simply include the following script tag in your HTML file:

```html
<script type="module" src="https://unpkg.com/@infineon/infineon-design-system-stencil"></script>
```

> Note that this example app does not load the components via CDN for demonstration purposes. Instead, it uses a local build of the components for faster development and testing.

Then you can use the components in your HTML as shown in the [index.html](./src/index.html) file:

```html
<ifx-alert variant="primary" icon="c-info-16">Attention! This is an alert message!</ifx-alert>
```

## Running the Example App
To run the example app in development mode, use the following command:
```bash
pnpm run -F html-cdn-example dev
```
This will start a development server and you can access the app at `http://localhost:3001`.

To build the example app for production, use:
```bash
pnpm run -F html-cdn-example build
```

To preview the built example app, use:
```bash
pnpm run -F html-cdn-example preview
```
This will start a static file server and you can access the built app at `http://localhost:4001`.