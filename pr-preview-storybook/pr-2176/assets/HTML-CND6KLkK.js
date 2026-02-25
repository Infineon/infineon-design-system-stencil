import{j as n,M as o}from"./blocks-DMAsFmEf.js";import{useMDXComponents as s}from"./index-wOzC4uJh.js";import{M as r}from"./PackageManagerTabs-DKQAICLO.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DaxZZngD.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Setup & installation/Framework Integration/HTML"}),`
`,n.jsx(e.h1,{id:"html--vanilla-javascript",children:"HTML / Vanilla JavaScript"}),`
`,n.jsx(e.p,{children:"Use the Infineon Design System web components in plain HTML and JavaScript projects without any framework. Choose between CDN (fastest setup) or Bundler (more control) approach."}),`
`,n.jsx(e.h2,{id:"cdn-approach-recommended-for-quick-start",children:"CDN Approach (Recommended for Quick Start)"}),`
`,n.jsx(e.p,{children:"The CDN approach is perfect for prototypes, demos, static websites, or when you want to get started quickly without a build process."}),`
`,n.jsx(e.h3,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.p,{children:["Add the following tags to your HTML ",n.jsx(e.code,{children:"<head>"})," section:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Infineon Design System</title>
  
  <!-- Infineon Design System - CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.css">
  
  <!-- Infineon Design System - JavaScript -->
  <script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"><\/script>
</head>
<body>
  <!-- Your content here -->
</body>
</html>
`})}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"Once included, you can use any Infineon component directly in your HTML:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<body>
  <ifx-alert variant="primary" icon="c-info-16">
    Welcome to Infineon Design System!
  </ifx-alert>

  <ifx-button variant="primary" onclick="handleClick()">
    Click Me
  </ifx-button>

  <ifx-search-bar 
    placeholder="Search..." 
    show-close-button="true">
  </ifx-search-bar>

  <script>
    function handleClick() {
      console.log('Button clicked!');
    }

    // Listen to component events
    const searchBar = document.querySelector('ifx-search-bar');
    searchBar.addEventListener('ifxChange', (event) => {
      console.log('Search value:', event.detail);
    });
  <\/script>
</body>
`})}),`
`,n.jsx(e.h2,{id:"bundler-approach-npmyarnpnpm",children:"Bundler Approach (npm/yarn/pnpm)"}),`
`,n.jsx(e.p,{children:"The bundler approach gives you more control over versioning, enables tree-shaking, and works offline. Use this if you already use a build tool like Webpack, Vite, Rollup, or Parcel."}),`
`,n.jsx(e.h3,{id:"installation-1",children:"Installation"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. Install the package"})}),`
`,n.jsx(r,{packageName:"@infineon/infineon-design-system-stencil"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Import in your JavaScript entry file"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// main.js or index.js
import { defineCustomElements } from '@infineon/infineon-design-system-stencil/loader';
import '@infineon/infineon-design-system-stencil/styles.css';

// Register all components
defineCustomElements(window);
`})}),`
`,n.jsx(e.h3,{id:"usage-1",children:"Usage"}),`
`,n.jsx(e.p,{children:"Now you can use the components in your HTML files:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<body>
    <ifx-alert variant="primary" icon="c-info-16">
        Welcome to Infineon Design System!
    </ifx-alert>
    <ifx-button variant="primary" onclick="handleClick()">
        Click Me
    </ifx-button>
    <ifx-search-bar 
        placeholder="Search..." 
        show-close-button="true">
    </ifx-search-bar>
    <script>
        function handleClick() {
            console.log('Button clicked!');
        }

        // Listen to component events
        const searchBar = document.querySelector('ifx-search-bar');
        searchBar.addEventListener('ifxChange', (event) => {
            console.log('Search value:', event.detail);
        });
    <\/script>
</body>
`})})]})}function m(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{m as default};
