# Angular Module Example App
This Angular application demonstrates the usage of the Infineon Design System Stencil components as part of an Angular module.

## Installation and Setup
First, install the Infineon Design System Stencil components in your Angular application.
```bash
npm install @infineon/infineon-design-system-angular
```

Then, you need to load the global styles for the Infineon Design System in your `styles.css` or `styles.scss` file:
```css
@import '@infineon/infineon-design-system-angular/styles/infineon-design-system.css';
```

Now, you need to import the `InfineonDesignSystemModule` into your Angular module.

[app-module.ts](./src/app/app.module.ts):
```typescript
import { InfineonDesignSystemModule } from '@infineon/infineon-design-system-angular';
// ...
@NgModule({
  imports: [
    // ...
    InfineonDesignSystemModule.forRoot()
  ],
  // ...
})
export class AppModule { }
```

Finally, you can use the components in your Angular templates as you would with any other Angular component.

[app.component.html](./src/app/app.component.html):
```html
<ifx-alert  variant="primary" icon="c-info-16">Attention! This is an alert message!</ifx-alert>
```

## Running the Example App
To run the example app in development mode, use the following command:
```bash
pnpm run -F angular-module-example dev
```

This will start a development server and you can access the app at `http://localhost:3004`.

To build the example app for production, use:
```bash
pnpm run -F angular-module-example build
```

To preview the built example app, use:
```bash
pnpm run -F angular-module-example preview
```

This will start a static file server and you can access the built app at `http://localhost:4004`.
