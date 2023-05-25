
# Vue + Stencil

Stencil generates standard web components that are framework-agnostic. These are "vanilla" components that can be used with any JavaScript framework, or without a framework at all.

Vue Wrappers: A Vue wrapper is a Vue-specific interface for a Stencil-generated web component. It offers a bridge between Stencil and Vue, enabling more native Vue syntax, such as Vue's event handling and property binding. This makes it easier to use Stencil components in a Vue app. Stencil generates these wrappers when configured to do so.

The wrapper components are not a necessity but they provide a more idiomatic and pleasant developer experience within the respective frameworks. They translate the native framework usage to the underlying Stencil component.


## Installation

### With NPM

1. ```npm install @infineon/infineon-design-system-vue```

#### With Yarn

1. ```yarn add @infineon/infineon-design-system-vue```

#### Import the module inside your entry point file.