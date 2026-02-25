# React Example
This example app demonstrates the usage of the Infineon Design System Stencil components using React.

## Installation and Setup
First, install the Infineon Design System React components in your project.
```bash
npm install @infineon/infineon-design-system-react
```

Then, you can import and use the components in your React component.
[App.tsx](./src/App.tsx):
```javascript
import { IfxAlert } from '@infineon/infineon-design-system-react';

function App() {
  return (
    <>
      <h1>Infineon Design System - React Example</h1>
      <IfxAlert variant="primary" icon="c-info-16">Attention! This is an alert message — check it out!</IfxAlert>
    </>
  )
} 
```

## Running the Example App
To run the example app in development mode, use the following command:
```bash
pnpm run -F react-example dev
```
This will start a development server and you can access the app at `http://localhost:3005`.

To build the example app for production, use:
```bash
pnpm run -F react-example build
```

To preview the built example app, use:
```bash
pnpm run -F react-example preview
```
This will start a static file server and you can access the built app at `http://localhost:4005`.
