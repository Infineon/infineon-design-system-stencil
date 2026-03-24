import{j as n,M as a,C as i,a as d}from"./blocks-mX1R_aUL.js";import{useMDXComponents as s}from"./index-DwfWjhCd.js";import{R as u,D as t}from"./radio-button.stories-CaW4IgXQ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BnzxB8Ni.js";function r(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:u}),`
`,n.jsx(o.h1,{id:"radio-button",children:"Radio Button"}),`
`,n.jsx(i,{of:t,sourceState:"shown"}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(d,{of:t}),`
`,n.jsxs(o.p,{children:[n.jsx("b",{children:"Hint for Vue Developers:"}),`
The Radio Button component is not usable in combination with v-model. Instead, use v-bind/v-on.`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-js",children:`<ifx-radio-button :disabled="disabled" @ifxChange="handleRadioButtonChange" :value="radioButtonValue" :error="error" name="name">label</ifx-radio-button>
`})})]})}function j(e={}){const{wrapper:o}={...s(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};
