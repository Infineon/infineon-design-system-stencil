import{j as n,M as t}from"./blocks-Dc-nzrTi.js";import{useMDXComponents as o}from"./index-CVRxTw-F.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-hin-E07E.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Setup & installation/Icons Only Usage"}),`
`,n.jsx(e.h1,{id:"using-only-the-icons",children:"Using Only the Icons"}),`
`,n.jsxs(e.p,{children:["If you only want to use the Infineon Design System icons without loading all components, you can import just the ",n.jsx(e.code,{children:"ifx-icon"})," component. This reduces bundle size and improves performance when you don't need the full component library."]}),`
`,n.jsx(e.h2,{id:"benefits",children:"Benefits"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Smaller bundle size"})," - Only load what you need"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Faster loading"})," - Reduce initial page load time"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Selective imports"})," - Keep your application lean"]}),`
`]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:"First, install the package following the instructions for your framework:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"./?path=/docs/setup-installation-installation-angular--docs",children:"Angular Installation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"./?path=/docs/setup-installation-installation-react--docs",children:"React Installation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"./?path=/docs/setup-installation-installation-vue--docs",children:"Vue Installation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"./?path=/docs/setup-installation-installation-html--docs",children:"HTML Installation"})}),`
`]}),`
`,n.jsx(e.h2,{id:"setup",children:"Setup"}),`
`,n.jsxs(e.p,{children:["Import only the ",n.jsx(e.code,{children:"ifx-icon"})," component in your entry point file:"]}),`
`,n.jsx(e.h3,{id:"angular",children:"Angular"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// main.ts
import { defineCustomElement as defineCustomElementIfxIcon } from '@infineon/infineon-design-system-stencil/dist/components/ifx-icon';

defineCustomElementIfxIcon(window);
`})}),`
`,n.jsx(e.h3,{id:"react",children:"React"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// index.js or index.ts
import { defineCustomElement as defineCustomElementIfxIcon } from '@infineon/infineon-design-system-stencil/dist/components/ifx-icon';

defineCustomElementIfxIcon(window);
`})}),`
`,n.jsx(e.h3,{id:"vue",children:"Vue"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.js or main.ts
import { defineCustomElement as defineCustomElementIfxIcon } from '@infineon/infineon-design-system-stencil/dist/components/ifx-icon';

defineCustomElementIfxIcon(window);
`})}),`
`,n.jsx(e.h3,{id:"html--vanilla-javascript",children:"HTML / Vanilla JavaScript"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.js
import { defineCustomElement as defineCustomElementIfxIcon } from '@infineon/infineon-design-system-stencil/dist/components/ifx-icon';

defineCustomElementIfxIcon(window);
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"Once imported, use the icon component in your templates:"}),`
`,n.jsx(e.h3,{id:"angular-1",children:"Angular"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- app.component.html -->
<ifx-icon icon="c-check-16"></ifx-icon>
<ifx-icon icon="c-info-24"></ifx-icon>
`})}),`
`,n.jsx(e.h3,{id:"react-1",children:"React"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// App.jsx
function App() {
  return (
    <div>
      <ifx-icon icon="c-check-16"></ifx-icon>
      <ifx-icon icon="c-info-24"></ifx-icon>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"vue-1",children:"Vue"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<!-- App.vue -->
<template>
  <div>
    <ifx-icon icon="c-check-16"></ifx-icon>
    <ifx-icon icon="c-info-24"></ifx-icon>
  </div>
</template>
`})}),`
`,n.jsx(e.h3,{id:"html",children:"HTML"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Icons Only</title>
</head>
<body>
  <ifx-icon icon="c-check-16"></ifx-icon>
  <ifx-icon icon="c-info-24"></ifx-icon>
  
  <script type="module" src="/src/main.js"><\/script>
</body>
</html>
`})}),`
`,n.jsx(e.h2,{id:"available-icons",children:"Available Icons"}),`
`,n.jsxs(e.p,{children:["Browse all available icons in the ",n.jsx(e.a,{href:"./?path=/docs/icon-library--docs",children:"Icon documentation"}),"."]}),`
`,n.jsx(e.h2,{id:"adding-more-components-later",children:"Adding More Components Later"}),`
`,n.jsx(e.p,{children:"If you later decide you need additional components, you can either:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Add individual components"})," using the same selective import pattern"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Switch to full library"})," by following the complete installation guide for your framework"]}),`
`]}),`
`,n.jsx(e.h2,{id:"note",children:"Note"}),`
`,n.jsx(e.p,{children:"When using selective imports, make sure to only import the components you actually use to maintain the benefits of reduced bundle size."})]})}function h(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{h as default};
