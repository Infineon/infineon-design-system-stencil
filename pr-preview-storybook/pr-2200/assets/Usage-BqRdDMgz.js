import{j as n,M as o}from"./blocks-BoFVtf_Y.js";import{useMDXComponents as s}from"./index-DPw7gB8J.js";import{P as a}from"./pagination.stories-P6Ma0RVc.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D_ica_UD.js";const r=""+new URL("pagination-desktop-B1fdjCtQ.png",import.meta.url).href,l=""+new URL("pagination-mobile-DmqYQKHO.png",import.meta.url).href,h=""+new URL("pagination-more-anatomy-DNUDFXrO.png",import.meta.url).href,d=""+new URL("pagination-positioning-desktop-o-SOm1u5.png",import.meta.url).href,c=""+new URL("pagination-positioning-mobile-Du2jzE1e.png",import.meta.url).href,p=""+new URL("pagination-states-C9imtLhq.png",import.meta.url).href;function i(t){const e={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:a}),`
`,n.jsx(e.h1,{id:"pagination",children:"Pagination"}),`
`,n.jsx(e.p,{children:"The pagination provides a user-friendly way to navigate through a set of data or content that is divided into multiple pages. It allows users to easily move between pages and access the desired information."}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsx(e.tr,{children:n.jsx(e.th,{children:"Resources"})})}),n.jsx(e.tbody,{children:n.jsx(e.tr,{children:n.jsx(e.td,{children:n.jsx(e.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2393-3987",rel:"nofollow",children:"Figma pagination component →"})})})})]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"when-to-use",children:"When to use"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"When presenting a large dataset or content that needs to be divided into multiple pages like tables or product lists."}),`
`]}),`
`,n.jsx(e.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"When the data or content is small enough to fit comfortably on a single page without causing visual clutter."}),`
`,n.jsx(e.li,{children:"If the content is best consumed in a continuous or uninterrupted flow, such as articles or long-form text."}),`
`]}),`
`,n.jsx(e.h2,{id:"behaviour",children:"Behaviour"}),`
`,n.jsx(e.h3,{id:"desktop",children:"Desktop"}),`
`,n.jsx("img",{src:r,alt:"Pagination Desktop"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The maximum number of visible page elements at any given time is limited to 7. If more pages need to be displayed, all additional elements are truncated."}),`
`,n.jsx(e.li,{children:"The last number of pages is always displayed at the last position of the pagination to ensure that users are aware of all the content available."}),`
`]}),`
`,n.jsx(e.h3,{id:"mobile",children:"Mobile"}),`
`,n.jsx("img",{src:l,alt:"Pagination Mobile"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Similar to the desktop version, the mobile pagination will display a maximum of 5 page items at a time."}),`
`]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx("img",{src:h,alt:"Pagination Anatomy"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Results per page (1)"}),n.jsx(e.br,{}),`
`,"Utilize the select component to enable users to specify the number of results displayed per page."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Navigational Controls (2)"}),n.jsx(e.br,{}),`
`,"Users are enabled to navigate through the available pages using controls that inherit styling and interactions from our Secondary Icon Button."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Current page (3)"}),n.jsx(e.br,{}),`
`,"Shows the current active page."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Truncation (4)"}),n.jsx(e.br,{}),`
`,"The hidden or less relevant pages are displayed with an ellipsis (...)"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Maximum Page (5)"}),n.jsx(e.br,{}),`
`,"Provides a clear endpoint, allowing users to understand the full scope of available content."]}),`
`,n.jsx(e.h2,{id:"ui-examples",children:"UI Examples"}),`
`,n.jsx(e.h3,{id:"desktop-1",children:"Desktop"}),`
`,n.jsx("img",{src:d,alt:"Pagination Positioning Desktop"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The pagination is aligned at the bottom right of the parent container."}),`
`,n.jsx(e.li,{children:"Users have the option to select the number of results they want to display per page via a dropdown menu."}),`
`]}),`
`,n.jsx(e.h3,{id:"mobile-1",children:"Mobile"}),`
`,n.jsx("img",{src:c,alt:"Pagination Positioning Mobile"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"In the mobile version the select option for choosing the number of results per page is disabled."}),`
`,n.jsx(e.li,{children:"The mobile pagination will be center-aligned within its parent container, and it dynamically takes up 100% of the grid container's width."}),`
`]}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsx("img",{src:p,alt:"Pagination States"})]})}function f(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{f as default};
