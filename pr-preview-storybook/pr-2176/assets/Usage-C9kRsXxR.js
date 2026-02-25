import{j as e,M as i}from"./blocks-BjIMDSN5.js";import{useMDXComponents as s}from"./index-BUWltnSP.js";import{T as a}from"./tree-view.stories-B1DeZw-w.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C96EdJSF.js";const o=""+new URL("tree-view-anatomy-PABvETN7.png",import.meta.url).href,h=""+new URL("tree-view-example-with-checkboxes-yEigrrfE.png",import.meta.url).href,l=""+new URL("tree-view-states-with-checkboxes-jS9qAv-a.png",import.meta.url).href;function r(t){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(n.h1,{id:"tree-view",children:"Tree View"}),`
`,e.jsx(n.p,{children:"The tree view component presents hierarchical data in a structured, expandable format. It enables users to navigate complex information architectures by expanding or collapsing nodes, revealing nested content as needed."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsx(n.tr,{children:e.jsx(n.th,{children:"Resources"})})}),e.jsx(n.tbody,{children:e.jsx(n.tr,{children:e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=71476-1851",rel:"nofollow",children:"Figma tree view component →"})})})})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When users need to display data with multiple levels, such as directories, categories, or organizational structures."}),`
`,e.jsx(n.li,{children:"When users need to explore data incrementally, expanding only the sections relevant to them."}),`
`,e.jsx(n.li,{children:"If applications requiring navigation through deeply nested information."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Using tree view as the main navigation. Use dedicated navigation patterns for primary site navigation."}),`
`]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:o,alt:"Tree View Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Branch node (1)"}),e.jsx(n.br,{}),`
`,"This node is any item in the tree hierarchy that has at least one child nodes beneath it."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Leaf node (2)"}),e.jsx(n.br,{}),`
`,"Leaf nodes are the final items you can’t expand anymore—theyn’t have any further levels under them."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Chevron (3)"}),e.jsx(n.br,{}),`
`,"Used to either expand or collapse a child tree view."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox (4)"}),e.jsx(n.br,{}),`
`,"Use a checkbox to select multiple items across the tree structure."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icon (5)"}),e.jsx(n.br,{}),`
`,"Icons clarify tree view entries by signaling content types, making the hierarchy more navigable."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Label (6)"}),e.jsx(n.br,{}),`
`,"Use a label to describe the purpose of the tree view item to the user."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Subordinate branch node (7)"}),e.jsx(n.br,{}),`
`,"Another branch node which is under its parental branch node."]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx("img",{src:h,alt:"Tree View With Checkboxes"}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx("img",{src:l,alt:"Tree View States With Checkboxes"})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{u as default};
