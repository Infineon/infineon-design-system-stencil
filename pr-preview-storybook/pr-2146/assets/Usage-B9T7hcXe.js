import{j as e,M as s}from"./blocks-aW1ifBV4.js";import{useMDXComponents as i}from"./index-DTmMpVYM.js";import{S as t}from"./search-bar.stories-CfcfmKIg.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-4JBD4P7b.js";const h=""+new URL("search-bar-interaction-CCvjVhBT.png",import.meta.url).href,o=""+new URL("search-bar-mobile-CMqnyNR2.png",import.meta.url).href;function a(n){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t}),`
`,e.jsx(r.h1,{id:"search-bar",children:"Search Bar"}),`
`,e.jsx(r.p,{children:"The search bar component offers our users a focused and simple use of search."}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsx(r.tr,{children:e.jsx(r.th,{children:"Resources"})})}),e.jsx(r.tbody,{children:e.jsx(r.tr,{children:e.jsx(r.td,{children:e.jsx(r.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=19589-15068&amp;t=aY9BfRC7bLZytmWu-4",rel:"nofollow",children:"Figma search bar component →"})})})})]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"If you need a global search function in your navbar."}),`
`]}),`
`,e.jsx(r.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"If you use want to use a search function inside a component, like a table. Use a basic search field instead."}),`
`]}),`
`,e.jsx(r.h2,{id:"search-bar-trigger",children:"Search Bar Trigger"}),`
`,e.jsx(r.p,{children:"The bar is only displayed when the user has clicked/tapped a placeholder trigger. This can either be a search field, a search icon with a label or, if the viewport is getting smaller, simply a search icon. The bar is immediately displayed in its focus state, which includes the Cancel Link to cancel the search process and get back to the previous view. It is also possible to cancel the search process by clicking or tapping the dark overlay."}),`
`,e.jsx("img",{src:h,alt:"Search Bar Trigger"}),`
`,e.jsx(r.h2,{id:"mobile",children:"Mobile"}),`
`,e.jsx(r.p,{children:"On mobile devices the keyboard should appear if the user hit a trigger, for example a search icon. While the keyboard is displayed, a dark overlay lies over the content."}),`
`,e.jsx("img",{src:o,alt:"Search Bar Mobile"})]})}function b(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(a,{...n})}):a(n)}export{b as default};
