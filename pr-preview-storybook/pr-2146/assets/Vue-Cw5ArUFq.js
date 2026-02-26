import{j as n,M as r}from"./blocks-CERx25n9.js";import{useMDXComponents as o}from"./index-HlHJfxpl.js";import{M as s}from"./PackageManagerTabs-P3d0rwCL.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B2pKNNw0.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Setup & installation/Framework Integration/Vue"}),`
`,n.jsx(e.h1,{id:"vue",children:"Vue"}),`
`,n.jsx(e.p,{children:"Use the Infineon Design System web components in Vue 3 applications. The Vue wrapper provides a Vue-specific interface for Stencil web components, enabling native Vue syntax like event handling, property binding, and v-model support."}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. Install the package"})}),`
`,n.jsx(s,{packageName:"@infineon/infineon-design-system-vue"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Register the component library plugin in your Vue application"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// main.ts
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(ComponentLibrary).mount('#app');
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3. Configure Vite to recognize custom elements"})}),`
`,n.jsxs(e.p,{children:["Add this configuration to your ",n.jsx(e.code,{children:"vite.config.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// vite.config.ts
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat all tags with 'ifx-' prefix as custom elements
          isCustomElement: (tag) => tag.includes('ifx-'),
        },
      },
    }),
  ],
};
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"Once configured, you can use the components directly in your Vue templates:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<template>
  <div>
    <h1>Infineon Design System - Vue Example</h1>
    
    <ifx-alert variant="primary" icon="c-info-16">
      Welcome to Infineon Design System!
    </ifx-alert>

    <ifx-button variant="primary" @click="handleClick">
      Click Me
    </ifx-button>

    <ifx-search-bar 
      v-model="searchValue"
      placeholder="Search..." 
      show-close-button="true"
      @ifxChange="handleSearch">
    </ifx-search-bar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchValue = ref('');

const handleClick = () => {
  console.log('Button clicked!');
};

const handleSearch = (event: CustomEvent) => {
  console.log('Search value:', event.detail);
};
<\/script>
`})})]})}function d(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{d as default};
