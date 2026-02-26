import{j as e,M as s,C as o,a as d}from"./blocks-CERx25n9.js";import{useMDXComponents as i}from"./index-HlHJfxpl.js";import{T as a,D as x}from"./text-field.stories-Bsch8Joj.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B2pKNNw0.js";import"./icons-DyNdhNdc.js";function l(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"text-field",children:"Text field"}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsx(n.p,{children:`See the examples below for general usage of events in different JS frameworks.
For more information, please refer to our example applications.`}),`
`,e.jsx("b",{children:"Angular"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//app.component.js
handleTextField(event: any) {
  console.log("searchField value change: ", event.detail)
}
//app.component.html
<ifx-text-field (ifxInput)="handleTextField($event)"></ifx-search-field>
`})}),`
`,e.jsx("b",{children:"React"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//MyComponent.js
const handleText = (event) => {
  console.log("handling input: ", event.detail)
};
...
<IfxTextField onIfxInput={handleText}></IfxTextField>
`})}),`
`,e.jsx("b",{children:"Vanilla"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//index.html
const textField = document.querySelector('#text-field');
textField.addEventListener('ifxInput', (event) => {
  console.log("text field value", event.detail);
});
<ifx-text-field id="text-field"></ifx-text-field>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx("b",{children:"Vue"})," (using v-model)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//MyComponent.vue
let textValue = ref('');
...
<ifx-text-field v-model="textValue"></ifx-text-field>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx("b",{children:"Vue"})," (combining value binding and event listening)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//MyComponent.vue
<ifx-text-field @ifxInput="event => console.log(event.detail)">
</ifx-text-field>
`})})]})}function u(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{u as default};
