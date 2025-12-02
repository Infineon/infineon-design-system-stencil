import{j as n,M as l}from"./blocks-DyZiDzlb.js";import{useMDXComponents as t}from"./index-B6GgOJeP.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CwB_fbFB.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Setup & installation/Getting started"}),`
`,n.jsx(e.h1,{id:"infineon-design-system-stencil-web-components",children:"Infineon Design System Stencil Web Components"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://github.com/Infineon/infineon-design-system-stencil/issues",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/github/issues/Infineon/infineon-design-system-stencil?style=plastic",alt:"GitHub Repo Issues"})}),`
`,n.jsx(e.a,{href:"https://github.com/Infineon/infineon-design-system-stencil/pulls",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/github/issues-pr-raw/Infineon/infineon-design-system-stencil?style=plastic",alt:"GitHub Pull Requests"})}),`
`,n.jsx(e.a,{href:"https://www.npmjs.com/package/@infineon/infineon-design-system-stencil",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/npm/v/@infineon/infineon-design-system-stencil",alt:"GitHub Repo Version"})}),`
`,n.jsx(e.a,{href:"https://github.com/Infineon/infineon-design-system-stencil/tree/master",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/github/commit-activity/w/Infineon/infineon-design-system-stencil/master?style=plastic",alt:"GitHub Master Branch Weekly Commits"})}),`
`,n.jsx(e.a,{href:"https://github.com/Infineon/infineon-design-system-stencil/graphs/contributors",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/github/contributors/Infineon/infineon-design-system-stencil?style=plastic",alt:"GitHub Repo Contributors"})}),`
`,n.jsx(e.a,{href:"https://github.com/Infineon/infineon-design-system-stencil/",rel:"nofollow",children:n.jsx(e.img,{src:"https://img.shields.io/github/discussions/Infineon/infineon-design-system-stencil",alt:"GitHub Repo Discussions"})})]}),`
`,n.jsxs("details",{id:"tableContent",children:[n.jsx("summary",{children:"Table of Contents"}),n.jsxs("ol",{children:[n.jsx("li",{children:n.jsx(e.p,{children:n.jsx(e.a,{href:"#getting-started",children:"Getting started"})})}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx(e.p,{children:n.jsx(e.a,{href:"#prerequisites",children:"Prerequisites"})})}),n.jsx("li",{children:n.jsx(e.p,{children:n.jsx(e.a,{href:"#installation",children:"Installation of the component library"})})}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx(e.p,{children:n.jsx(e.a,{href:"#angular",children:"Angular"})})}),n.jsx("li",{children:n.jsx(e.p,{children:n.jsx(e.a,{href:"#react/vue",children:"React/Vue"})})}),n.jsx("li",{children:n.jsx(e.p,{children:n.jsx(e.a,{href:"#vanilla",children:"Vanilla"})})})]}),n.jsx("li",{children:n.jsx(e.p,{children:n.jsx(e.a,{href:"#icons-only",children:"Using only the icons"})})})]})]})]}),`
`,n.jsx(e.h2,{id:"getting-started",children:n.jsx("h2",{id:"getting-started",children:"Getting Started"})}),`
`,n.jsx(e.h3,{id:"prerequisites",children:n.jsx("h3",{id:"prerequisites",children:"Prerequisites"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://nodejs.org/en/",rel:"nofollow",children:"Node"})," v16 or newer."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://classic.yarnpkg.com/en/",rel:"nofollow",children:"Yarn"})," v1.22.10 or newer, or ",n.jsx(e.a,{href:"https://www.npmjs.com/",rel:"nofollow",children:"Npm"})," v8 or newer."]}),`
`]}),`
`,n.jsx(e.h3,{id:"installation-of-the-component-library",children:n.jsx("h3",{id:"installation",children:"Installation of the component library"})}),`
`,n.jsx(e.h4,{id:"angular",children:n.jsx("h4",{id:"angular",children:"Angular"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1."})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"with NPM"})}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:"npm install --save @infineon/infineon-design-system-stencil"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"with Yarn"})}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:"yarn add @infineon/infineon-design-system-stencil"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Installation of SASS"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install sass
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3. Import the module inside your entry point file"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`#main.ts
import { defineCustomElements } from "@infineon/infineon-design-system-stencil/loader";

defineCustomElements(window);
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"4. Additional steps only for Angular"})}),`
`,n.jsxs(e.p,{children:["Inside ",n.jsx("b",{children:"app.modules.ts"})," file:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
 ...
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
 ...
})
`})}),`
`,n.jsx(e.h5,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`//app.component.html

<ifx-alert color="primary" icon="c-info-16">Attention! This is an alert message — check it out!</ifx-alert>
`})}),`
`,n.jsx("p",{align:"right",children:n.jsx("a",{href:"#tableContent",children:"back to top"})}),`
`,n.jsx(e.h4,{id:"react--vue",children:n.jsx("h4",{id:"react/vue",children:"React / Vue"})}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"./?path=/docs/setup-installation-framework-integration-wrapper-components--development",children:"How to use wrapper components"})}),`
`,n.jsx(e.h4,{id:"vanilla",children:n.jsx("h4",{id:"vanilla",children:"Vanilla"})}),`
`,n.jsx(e.p,{children:"Include the following script tag in your index.html"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"><\/script>'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.css">
`})}),`
`,n.jsx(e.h2,{id:"using-only-the-icons",children:n.jsx("h2",{id:"icons-only",children:"Using only the Icons"})}),`
`,n.jsx(e.p,{children:"For the case in which you only want to use our icons, please follow these steps:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"install the package by following the instructions for the respective framework"}),`
`,n.jsx(e.li,{children:"Import only the ifx-icon component inside your entry point file as explained below;"}),`
`]}),`
`,n.jsxs(e.p,{children:["For React: ",n.jsx("b",{children:"index.js/index.ts"})," ",n.jsx("br",{}),`
For Vue: `,n.jsx("b",{children:"main.js/main.ts"})," ",n.jsx("br",{}),`
For Angular: `,n.jsx("b",{children:"main.ts"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`import { defineCustomElement as defineCustomElementIfxIcon } from "@infineon/infineon-design-system-stencil/dist/components/ifx-icon";

defineCustomElementIfxIcon(window);
`})}),`
`,n.jsx("p",{align:"right",children:n.jsx("a",{href:"#tableContent",children:"back to top"})}),`
`,n.jsx(e.h2,{id:"custom-font",children:n.jsx("h2",{id:"font",children:"Custom font"})}),`
`,n.jsx(e.p,{children:`It is recommended to use the default font-family (Source Sans 3).
However, if your application requires a custom font, it is possible to override the default one using CSS custom properties.`}),`
`,n.jsxs(e.p,{children:["In this case, ",n.jsx(e.code,{children:"--ifx-font-family"}),` is a CSS custom property.
If the user doesn't set `,n.jsx(e.code,{children:"--ifx-font-family"})," in the global stylesheet, the font family will default to ",n.jsx(e.code,{children:"tokens.$ifxFontFamilyBody"}),"."]}),`
`,n.jsx("p",{align:"right",children:n.jsx("a",{href:"#tableContent",children:"back to top"})})]})}function a(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{a as default};
