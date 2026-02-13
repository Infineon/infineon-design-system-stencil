import{j as e,M as s}from"./blocks-BlYqE6iC.js";import{useMDXComponents as t}from"./index-D-Kmgx3n.js";import{B as o}from"./breadcrumb.stories-LoWxlyjz.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DQE2zg3a.js";import"./icons-C_9-zI1i.js";const a=""+new URL("breadcrumb-anatomy-DLg5M6GN.png",import.meta.url).href,c=""+new URL("breadcrumb-mouse-interaction-DtNaHYK3.png",import.meta.url).href,d=""+new URL("breadcrumb-positioning-desktop-BLn88AZD.png",import.meta.url).href,h=""+new URL("breadcrumb-positioning-mobile-C9iW2d6A.png",import.meta.url).href;function i(r){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o}),`
`,e.jsx(n.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsx(n.p,{children:"Breadcrumbs are a navigational aid that provides users with a hierarchical trail of links, allowing them to understand their current location within a website or application."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsx(n.tr,{children:e.jsx(n.th,{children:"Resources"})})}),e.jsx(n.tbody,{children:e.jsx(n.tr,{children:e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2549-3262",rel:"nofollow",children:"Figma breadcrumb component →"})})})})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When your website or application has a hierarchical structure, such as categories, subcategories, and pages."}),`
`,e.jsx(n.li,{children:"If users need to navigate through multiple levels to access specific information."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If your website has a simple and shallow structure with only a few levels."}),`
`]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:a,alt:"Breadcrumb Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parent Link (1)"}),e.jsx(n.br,{}),`
`,"Guides users to the parent-level page."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Separator (2)"}),e.jsx(n.br,{}),`
`,"A visual divider that separates each breadcrumb element."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Dropdown Icon (3)"}),e.jsx(n.br,{}),`
`,"Serves as an indicator for a dropdown menu."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Current Page (4)"}),e.jsx(n.br,{}),`
`,"Shows which page the user is currently on."]}),`
`,e.jsx(n.h2,{id:"positioning",children:"Positioning"}),`
`,e.jsx(n.p,{children:"The breadcrumb navigation is displayed under the navigation bar and is aligned with the grid or the brand logo."}),`
`,e.jsx(n.h3,{id:"desktop",children:"Desktop"}),`
`,e.jsx("img",{src:d,alt:"Breadcrumb Position Desktop"}),`
`,e.jsx(n.h3,{id:"mobile",children:"Mobile"}),`
`,e.jsx("img",{src:h,alt:"Breadcrumb Position Mobile"}),`
`,e.jsx(n.h2,{id:"mouse-interaction",children:"Mouse interaction"}),`
`,e.jsx(n.p,{children:"Every single breadcrumb link is clickable. The page the user is currently on is not clickable. This page is characterised by the fact that it does not have an underlined style. The click area corresponds to the text width and line height. Dropdown icons have a separate link area."}),`
`,e.jsx("img",{src:c,alt:"Breadcrumb Mouse Interaction"})]})}function j(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{j as default};
