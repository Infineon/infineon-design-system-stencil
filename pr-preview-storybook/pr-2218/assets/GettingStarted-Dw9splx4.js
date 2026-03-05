import{j as e,M as o}from"./blocks-CERx25n9.js";import{useMDXComponents as i}from"./index-HlHJfxpl.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B2pKNNw0.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Setup & installation/Getting started"}),`
`,e.jsx(n.h1,{id:"infineon-design-system-stencil-web-components",children:"Infineon Design System Stencil Web Components"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/Infineon/infineon-design-system-stencil/issues",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/github/issues/Infineon/infineon-design-system-stencil?style=flat-square",alt:"GitHub Issues"})}),`
`,e.jsx(n.a,{href:"https://github.com/Infineon/infineon-design-system-stencil/pulls",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/github/issues-pr-raw/Infineon/infineon-design-system-stencil?style=flat-square",alt:"GitHub Pull Requests"})}),`
`,e.jsx(n.a,{href:"https://github.com/Infineon/infineon-design-system-stencil/blob/master/packages/components/package.json",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/github/package-json/v/Infineon/infineon-design-system-stencil?style=flat-square",alt:"GitHub Version"})}),`
`,e.jsx(n.a,{href:"https://github.com/Infineon/infineon-design-system-stencil/tree/master",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/github/commit-activity/w/Infineon/infineon-design-system-stencil/master?style=flat-square",alt:"GitHub Commits"})}),`
`,e.jsx(n.a,{href:"https://github.com/Infineon/infineon-design-system-stencil/graphs/contributors",rel:"nofollow",children:e.jsx(n.img,{src:"https://img.shields.io/github/contributors/Infineon/infineon-design-system-stencil?style=flat-square",alt:"GitHub Contributors"})})]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:"The Infineon Design System provides web components that work with any modern JavaScript framework or plain HTML."}),`
`,e.jsx(n.h3,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://nodejs.org/en/",rel:"nofollow",children:"Node.js"})," v16 or newer"]}),`
`,e.jsxs(n.li,{children:["Package manager: ",e.jsx(n.a,{href:"https://www.npmjs.com/",rel:"nofollow",children:"npm"})," v8+, ",e.jsx(n.a,{href:"https://classic.yarnpkg.com/en/",rel:"nofollow",children:"Yarn"})," v1.22.10+, or ",e.jsx(n.a,{href:"https://pnpm.io/",rel:"nofollow",children:"pnpm"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"wrapper-components-vs-vanilla-web-components",children:'Wrapper Components vs "Vanilla" Web Components'}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:'"Vanilla" Web Components'})," are reusable custom HTML elements built using the native Custom Elements and Shadow DOM APIs provided by the browser. They're platform-agnostic and can be used in any JavaScript environment that supports these APIs."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Wrapper components"})," are adaptations of these standard Web Components for specific JavaScript frameworks, like Angular, React, or Vue. They allow the Web Components to interact more seamlessly with the patterns and APIs of these frameworks, enhancing their usability and compatibility in these contexts."]}),`
`,e.jsx(n.h3,{id:"why-use-wrapper-components",children:"Why Use Wrapper Components?"}),`
`,e.jsx(n.p,{children:"Wrapper components are not a necessity, but they provide a more idiomatic and pleasant developer experience within the respective frameworks. They translate the native framework usage to the underlying Stencil component, offering benefits such as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Better TypeScript support"})," - Full type definitions for props, events, and methods"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Framework-native patterns"})," - Use familiar patterns like ",e.jsx(n.code,{children:"v-model"})," in Vue, ",e.jsx(n.code,{children:"ngModel"})," in Angular, or controlled components in React"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Improved developer experience"})," - IDE autocomplete, prop validation, and better debugging"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Seamless integration"})," - Proper handling of properties, events, and two-way data binding within the framework's ecosystem"]}),`
`]}),`
`,e.jsx(n.h2,{id:"choose-your-installation-method",children:"Choose Your Installation Method"}),`
`,e.jsx(n.p,{children:"Select the approach that best fits your project:"}),`
`,e.jsx(n.h3,{id:"framework-specific-wrappers-recommended",children:"Framework-Specific Wrappers (Recommended)"}),`
`,e.jsx(n.p,{children:"Use these if you're working with Angular, React, or Vue for the best developer experience:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"./?path=/docs/setup-installation-framework-integration-angular--development",children:"Angular"})})," - Supports both Standalone Components and NgModule approaches"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"./?path=/docs/setup-installation-framework-integration-react--development",children:"React"})})," - Provides React-specific interfaces with proper prop and event handling"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"./?path=/docs/setup-installation-framework-integration-vue--development",children:"Vue"})})," - Includes v-model support and Vue 3 composition API compatibility"]}),`
`]}),`
`,e.jsx(n.h3,{id:"html--vanilla-javascript",children:"HTML / Vanilla JavaScript"}),`
`,e.jsx(n.p,{children:"Use these if you're building without a framework or want maximum flexibility:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"./?path=/docs/setup-installation-framework-integration-html--development",children:"HTML"})})," - CDN or bundler approach for plain HTML/JavaScript projects"]}),`
`]}),`
`,e.jsx(n.h2,{id:"custom-font",children:"Custom font"}),`
`,e.jsx(n.p,{children:`It is recommended to use the default font-family (Source Sans 3).
However, if your application requires a custom font, it is possible to override the default one using CSS custom properties.`}),`
`,e.jsxs(n.p,{children:["In this case, ",e.jsx(n.code,{children:"--ifx-font-family"}),` is a CSS custom property.
If the user doesn't set `,e.jsx(n.code,{children:"--ifx-font-family"})," in the global stylesheet, the font family will default to ",e.jsx(n.code,{children:"tokens.$ifxFontFamilyBody"}),"."]})]})}function d(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{d as default};
