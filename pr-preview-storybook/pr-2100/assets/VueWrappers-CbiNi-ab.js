import{j as e,M as o}from"./blocks-CNj5F94U.js";import{useMDXComponents as s}from"./index-BccjehuR.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CaTikuGJ.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Setup & installation/Framework integration/Vue + Stencil"}),`
`,e.jsx(n.h1,{id:"vue--stencil",children:"Vue + Stencil"}),`
`,e.jsx(n.p,{children:"Vue Wrappers: A Vue wrapper is a Vue-specific interface for a Stencil-generated web component. It offers a bridge between Stencil and Vue, enabling more native Vue syntax, such as Vue's event handling and property binding. This makes it easier to use Stencil components in a Vue app. Stencil generates these wrappers when configured to do so."}),`
`,e.jsxs(n.p,{children:[`We have added some additional configuration to support the use of Vue's v-model.
Currently this works with the `,e.jsx(n.code,{children:"IfxProgressBar"}),", the ",e.jsx(n.code,{children:"IfxSearchBar"})," and the ",e.jsx(n.code,{children:"IfxSearchField"}),"."]}),`
`,e.jsx(n.h2,{id:"recommended-build-setup-for-vue-applications-using-the-vue-wrapper-components",children:"Recommended build setup for Vue Applications Using the Vue wrapper components"}),`
`,e.jsx(n.h3,{id:"issues-with-commonjs-in-vue-cli",children:"Issues with CommonJS in Vue CLI"}),`
`,e.jsx(n.p,{children:`Users of Vue applications built with the Vue CLI may encounter issues when integrating Stencil web components, particularly when the project relies on the CommonJS module system. Common problems include v-model bindings not updating correctly and certain ES Module features not functioning as expected. This is often due to differences in how CommonJS and ES Modules handle this context, dynamic imports, and other language features critical to Stencil web components' functionality.
While there are potential workarounds to address these issues in a Vue CLI setup, they can be complex and may not cover all edge cases. Therefore, we recommend transitioning to a build setup that better supports ES Modules for a more seamless integration of Stencil web components.`}),`
`,e.jsx(n.h3,{id:"transitioning-to-vite-and-es-modules",children:"Transitioning to Vite and ES Modules"}),`
`,e.jsx(n.p,{children:`We strongly recommend using Vite as the build tool and adopting the ES Module (ESM) format for Vue applications that utilize Stencil web components. Vite provides out-of-the-box support for ES Modules, which aligns closely with the design and capabilities of Stencil web components.
For existing projects, transitioning from Vue CLI to Vite typically involves updating the project configuration and build scripts. The Vite website provides a Migration Guide to assist with this process.
By adopting Vite and ES Modules, your Vue applications will benefit from improved performance, better compatibility with web components, and a smoother development experience.`}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"1."})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"- with NPM"})}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"npm install @infineon/infineon-design-system-vue"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"- with Yarn"})}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"yarn add @infineon/infineon-design-system-vue"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"2. Installation of SASS"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install sass
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"3. Import the module inside your entry point file"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//main.js/main.ts
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';
//...

createApp(App).use(ComponentLibrary).mount('#app');
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"4. Register the components globally"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//vite.config.js
...
plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('ifx-'),
        },
      },
    }),
  ],
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//vue.config.js
module.exports = {
  transpileDependencies: true,
  ...
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            isCustomElement: (tag) => tag.includes('ifx-'),
          },
        };
      });
  }
};
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"components",children:"Components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<ifx-progress-bar v-model="progress" size="m" show-label="true"></ifx-progress-bar>
`})}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsx(n.h4,{id:"two-way-data-binding",children:"Two way data binding"}),`
`,e.jsx(n.p,{children:`Two-way binding means that any data-related changes affecting the model are immediately propagated to the matching view(s).
And any changes made in the view(s) are immediately reflected in the underlying model.
When app data changes, so does the UI, and conversely.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//MyComponent.vue
let textValue = ref('');
...
<ifx-text-field @ifxInput="event => textValue = event.detail" :value="textValue">
</ifx-text-field>
`})}),`
`,e.jsxs(n.p,{children:["In Vue, the ",e.jsx("b",{children:"v-model"})," directive helps to simplify this."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//MyComponent.vue
let textValue = ref('');
...
<ifx-text-field v-model="textValue"></ifx-text-field>
`})}),`
`,e.jsx(n.h3,{id:"assets",children:"Assets"}),`
`,e.jsx(n.p,{children:`To include images or other assets in your web application, there are different possiblities to achieve this in Vue.
Some of these possibilities are listed below.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Assets need to be in the public directory.
Images in this directory will be served at the root path, so you only need:`}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// '/' + your image path
<img src="/circle.svg">
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Import files individually"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import img from '../assets/coffee_unsplash.jpg'

 <img :src="img">
`})})]})}function h(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{h as default};
