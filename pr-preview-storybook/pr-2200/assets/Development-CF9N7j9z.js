import{j as n,M as s,C as a,a as i}from"./blocks-HxHjSIyb.js";import{useMDXComponents as r}from"./index-CY_WKOz0.js";import{R as d,D as u}from"./radio-button.stories-BVxFqf0T.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DPRjjmHm.js";function t(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:d}),`
`,n.jsx(o.h1,{id:"radio-button",children:"Radio Button"}),`
`,n.jsx(a,{of:u,sourceState:"shown"}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(i,{}),`
`,n.jsxs(o.p,{children:[n.jsx("b",{children:"Hint for Vue Developers:"}),`
The Radio Button component is not usable in combination with v-model. Instead, use v-bind/v-on.`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-js",children:`<ifx-radio-button :disabled="disabled" @ifxChange="handleRadioButtonChange" :value="radioButtonValue" :error="error" name="name">label</ifx-radio-button>
`})})]})}function j(e={}){const{wrapper:o}={...r(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{j as default};
