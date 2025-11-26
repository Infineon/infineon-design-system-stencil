import{j as e,M as s}from"./blocks-Ce55-waZ.js";import{useMDXComponents as i}from"./index-BNaeAJxb.js";import{S as o}from"./search-bar.stories-Bp--T2EB.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DWlMgzeF.js";const t=""+new URL("search-bar-interaction-CCvjVhBT.png",import.meta.url).href,h=""+new URL("search-bar-mobile-CMqnyNR2.png",import.meta.url).href;function a(r){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o}),`
`,e.jsx(n.h1,{id:"search-bar",children:"Search Bar"}),`
`,e.jsx(n.p,{children:"The search bar component offers our users a focused and simple use of search."}),`
`,e.jsxs(n.p,{children:[`| Resources                                                                                                                                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `,e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=19589-15068&amp;t=aY9BfRC7bLZytmWu-4",rel:"nofollow",children:"Figma search bar component →"})," |"]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If you need a global search function in your navbar."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If you use want to use a search function inside a component, like a table. Use a basic search field instead."}),`
`]}),`
`,e.jsx(n.h2,{id:"search-bar-trigger",children:"Search Bar Trigger"}),`
`,e.jsx(n.p,{children:"The bar is only displayed when the user has clicked/tapped a placeholder trigger. This can either be a search field, a search icon with a label or, if the viewport is getting smaller, simply a search icon. The bar is immediately displayed in its focus state, which includes the Cancel Link to cancel the search process and get back to the previous view. It is also possible to cancel the search process by clicking or tapping the dark overlay."}),`
`,e.jsx("img",{src:t,alt:"Search Bar Trigger"}),`
`,e.jsx(n.h2,{id:"mobile",children:"Mobile"}),`
`,e.jsx(n.p,{children:"On mobile devices the keyboard should appear if the user hit a trigger, for example a search icon. While the keyboard is displayed, a dark overlay lies over the content."}),`
`,e.jsx("img",{src:h,alt:"Search Bar Mobile"})]})}function f(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{f as default};
