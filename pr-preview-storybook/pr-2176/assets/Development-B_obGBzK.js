import{j as e,M as c,C as s,a as r}from"./blocks-BjIMDSN5.js";import{useMDXComponents as l}from"./index-BUWltnSP.js";import{S as h,D as o}from"./select.stories-CpqL7LuF.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C96EdJSF.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsx(n.h1,{id:"single-select",children:"Single Select"}),`
`,e.jsx(s,{of:o,sourceState:"shown"}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(s,{of:o,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsx(n.h3,{id:"options",children:"Options"}),`
`,e.jsx(n.p,{children:"The Single Select component takes an array of objects in the following format as input:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const options = [{
  value: "a",
  label: "option a",
  selected: false
},
{
  value: "b",
  label: "option b",
  selected: false
},
{
  value: "c",
  label: "option c",
  selected: false
}];
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"selected"}),` property can be used to predefine an option as selected.
(`,e.jsx(n.code,{children:"selected: true"}),`)
This property is only changed, when a new option is selected, as the single-select only allows for one selected option.
However, the component only creates a shallow copy of the input array, so the original input array does not change.`]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom events"}),`
`,e.jsx(n.p,{children:"This component emits two custom events:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ìfxInput"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Accessing the detail property of this custom event returns the search string"}),`
`,e.jsx(n.li,{children:"gets emitted every time the user types into the search field"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ifxSelect"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Accessing the detail property of this custom event returns an object, containing the ",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"label"})," property of the selected option"]}),`
`,e.jsx(n.li,{children:"gets emitted when an item is selected"}),`
`]}),`
`]}),`
`]})]})}function m(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{m as default};
