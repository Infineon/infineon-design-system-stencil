# Vue Example
This example app demonstrates the usage of the Infineon Design System Stencil components using Vue 3.

## Installation and Setup
First, install the Infineon Design System Vue components in your project.
```bash
npm install @infineon/infineon-design-system-vue
```

Then, you need to register the component library plugin in your Vue application.
[main.ts](./src/main.ts):
```typescript
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(ComponentLibrary).mount('#app');
```

Now you can use the components in your Vue templates.
[App.vue](./src/App.vue):
```vue
<script setup lang="ts">
import { IfxAlert } from '@infineon/infineon-design-system-vue';
</script>
<template>
  <ifx-alert variant="primary" icon="c-info-16">Attention! This is an alert message!</ifx-alert>
</template>
```

> Important: Make sure to import the component in the script to ensure that the v-model bindings work correctly. Without the import, Vue will use the plain web component, which will render correctly but v-model will not function as expected. 

## Running the Example App
To run the example app in development mode, use the following command:
```bash
pnpm run -F vue-example dev
```
This will start a development server and you can access the app at `http://localhost:3006`.

To build the example app for production, use:
```bash
pnpm run -F vue-example build
```

To preview the built example app, use:
```bash
pnpm run -F vue-example preview
```
This will start a static file server and you can access the built app at `http://localhost:4006`.
