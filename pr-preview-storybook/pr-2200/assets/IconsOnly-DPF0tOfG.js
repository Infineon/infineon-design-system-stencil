import{j as n,M as t}from"./blocks-BoFVtf_Y.js";import{useMDXComponents as s}from"./index-DPw7gB8J.js";import{M as l}from"./PackageManagerTabs-BbPDyM7h.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D_ica_UD.js";function o(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Setup & installation/Icons Only Usage"}),`
`,n.jsx(e.h1,{id:"icons-only-usage",children:"Icons Only Usage"}),`
`,n.jsx(e.p,{children:"If you only need icons, you have three approaches. Choose the one that matches your performance, customization, and bundle size goals."}),`
`,n.jsxs(e.h2,{id:"option-1-ifx-icon-web-component-selective-import",children:["Option 1: ",n.jsx(e.code,{children:"ifx-icon"})," web component (selective import)"]}),`
`,n.jsxs(e.p,{children:["Use this when you want the Design System icon API and consistency without loading all components. This setup uses the web component ",n.jsx(e.code,{children:"defineCustomElement"})," import (not a framework wrapper)."]}),`
`,n.jsx(e.h3,{id:"benefits",children:"Benefits"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Smaller bundle size when only icons are needed"}),`
`,n.jsx(e.li,{children:"Easy to scale to more components later"}),`
`]}),`
`,n.jsx(e.h3,{id:"setup",children:"Setup"}),`
`,n.jsx(e.p,{children:"First, install the package:"}),`
`,n.jsx(l,{packageName:"@infineon/infineon-design-system-stencil"}),`
`,n.jsxs(e.p,{children:["Then import only the ",n.jsx(e.code,{children:"ifx-icon"})," web component in your entry point file:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// main.ts, main.js, or index.ts
import { defineCustomElement as defineCustomElementIfxIcon } from '@infineon/infineon-design-system-stencil/dist/components/ifx-icon';

defineCustomElementIfxIcon(window);
`})}),`
`,n.jsx(e.h2,{id:"option-2-svg",children:"Option 2: SVG"}),`
`,n.jsx(e.p,{children:"Use this when you want fine-grained control over icon color or when you only need a few icons. The example below shows CDN usage; bundler setup depends on your bundler."}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<img
  src="https://cdn.jsdelivr.net/npm/@infineon/infineon-icons/svg/chip-16.svg"
  width="16"
  height="16"
  alt=""
/>
`})}),`
`,n.jsx(e.h3,{id:"pros",children:"Pros"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Color customization is possible with SVG"}),`
`,n.jsx(e.li,{children:"Better performance on initial load when only a few icons are used"}),`
`]}),`
`,n.jsx(e.h3,{id:"cons",children:"Cons"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"One HTTP request per icon (even when cached, still needs validation)"}),`
`]}),`
`,n.jsx(e.h2,{id:"option-3-icon-font",children:"Option 3: Icon font"}),`
`,n.jsx(e.p,{children:"Use this when you want to load many icons with minimal markup and a single cached asset. The example below shows CDN usage; bundler setup depends on your bundler."}),`
`,n.jsx(e.h3,{id:"usage-1",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@infineon/infineon-icons/dist/chipfonts/infineon-icons.css"
  />
</head>
<body>
  <span class="icon icon-chip" aria-hidden="true"></span>
</body>
`})}),`
`,n.jsx(e.h3,{id:"pros-1",children:"Pros"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Font gets cached"}),`
`,n.jsx(e.li,{children:"Reduced amount of code per icon"}),`
`]}),`
`,n.jsx(e.h3,{id:"cons-1",children:"Cons"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Risk of icon flickering while the font loads"}),`
`,n.jsx(e.li,{children:"Risk of rendering as a random character if the font download fails"}),`
`,n.jsxs(e.li,{children:["Accessibility requires ",n.jsx(e.code,{children:'aria-hidden="true"'})," on decorative icons"]}),`
`]}),`
`,n.jsx(e.h2,{id:"available-icons",children:"Available Icons"}),`
`,n.jsxs(e.p,{children:["Browse all available icons in the ",n.jsx(e.a,{href:"./?path=/docs/icon-library--development",children:"Icon documentation"}),"."]}),`
`,n.jsx(e.h2,{id:"adding-more-components-later",children:"Adding More Components Later"}),`
`,n.jsx(e.p,{children:"If you later decide you need additional components, you can either:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Add individual components using the same selective import pattern"}),`
`,n.jsx(e.li,{children:"Switch to the full library by following the complete installation guide for your framework"}),`
`]}),`
`,n.jsx(e.h2,{id:"note",children:"Note"}),`
`,n.jsx(e.p,{children:"When using selective imports, only import the components you actually use to maintain the benefits of reduced bundle size."})]})}function m(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{m as default};
