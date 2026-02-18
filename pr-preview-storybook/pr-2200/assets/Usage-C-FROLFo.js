import{j as e,M as i}from"./blocks-BoFVtf_Y.js";import{useMDXComponents as a}from"./index-DPw7gB8J.js";import{T as o}from"./tabs.stories-B_SETxun.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D_ica_UD.js";import"./icons-DyNdhNdc.js";const r=""+new URL("tabs-anatomy-GvP5f5cF.png",import.meta.url).href,l=""+new URL("tabs-desktop-horizontal-HW9VZwC_.png",import.meta.url).href,h=""+new URL("tabs-desktop-vertical-KjcIP_Tf.png",import.meta.url).href,c=""+new URL("tabs-mobile-horizontal-B3V-SVRR.png",import.meta.url).href,d=""+new URL("tabs-states-D1XGmyHJ.png",import.meta.url).href,m=""+new URL("tabs-size-CH7W4IaW.png",import.meta.url).href,b=""+new URL("tabs-mouse-interaction-BmGJali2.png",import.meta.url).href;function s(n){const t={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o}),`
`,e.jsx(t.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx(t.p,{children:"The tab component guides the user step-by-step through the user interface and allows them to access more specific content without overwhelming them with all the available options at once."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsx(t.tr,{children:e.jsx(t.th,{children:"Resources"})})}),e.jsx(t.tbody,{children:e.jsx(t.tr,{children:e.jsx(t.td,{children:e.jsx(t.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2434-3008",rel:"nofollow",children:"Figma tabs component →"})})})})]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"If you have a significant amount of content organized into distinct sections or categories and you want to provide users with a structured way to navigate through them."}),`
`]}),`
`,e.jsx(t.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"If your interface has only a small amount of content that doesn't require a hierarchical navigation structure."}),`
`,e.jsx(t.li,{children:"If the navigation hierarchy is shallow or flat, and the content sections or categories are easily scannable or accessible without the need for tabs."}),`
`,e.jsx(t.li,{children:"If the available screen space is extremely limited and cannot accommodate the content navigation component without compromising the overall user experience."}),`
`]}),`
`,e.jsx(t.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:r,alt:"Tabs Anatomy"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Selected Tab Item (1)"}),e.jsx(t.br,{}),`
`,"As default the first tab item should be selected."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Tab Item (2)"}),e.jsx(t.br,{}),`
`,"The unselected state of a tab navigation."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Tab Container (3)"}),e.jsx(t.br,{}),`
`,"The parent element that holds all the individual tab items and the content area associated with each tab."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Content Area(4)"}),e.jsx(t.br,{}),`
`,"The content area is the part where the actual content related to the active tab is displayed. When a user clicks on a tab, the content area updates to show the corresponding content associated with that tab."]}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.h3,{id:"horizontal",children:"Horizontal"}),`
`,e.jsx(t.p,{children:"This variant is intended for use in layouts with a horizontal orientation. Each tab represents a specific section or content, and users can click on them to switch between the different sections seamlessly."}),`
`,e.jsx("img",{src:l,alt:"Tabs Desktop Horizontal"}),`
`,e.jsx(t.h3,{id:"vertical",children:"Vertical"}),`
`,e.jsx(t.p,{children:"This variant is designed for use in layouts with a vertical orientation. In this variant, the tabs are stacked vertically, typically on the left of the content area. Users can click on each tab to navigate to the respective content or section."}),`
`,e.jsx("img",{src:h,alt:"Tabs Desktop Vertical"}),`
`,e.jsx(t.h4,{id:"mobile",children:"Mobile"}),`
`,e.jsx("img",{src:c,alt:"Tabs Mobile Use",width:"50%"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"For mobile devices, it is recommended to use the horizontal tab variant exclusively."}),`
`,e.jsx(t.li,{children:"The small size should be used."}),`
`,e.jsx(t.li,{children:"If the tabs become too long for mobile screens, they can be wiped."}),`
`]}),`
`,e.jsx(t.h2,{id:"size",children:"Size"}),`
`,e.jsx(t.p,{children:"Only one size is available for the vertical tab variant, which should primarily be used for desktop and not for mobile. The vertical tab variant can be used for all viewports."}),`
`,e.jsx("img",{src:m,alt:"Tabs Size"}),`
`,e.jsx(t.h2,{id:"mouse-interaction",children:"Mouse Interaction"}),`
`,e.jsx(t.p,{children:"The whole tab item area should be clickable."}),`
`,e.jsx("img",{src:b,alt:"Tabs Mouse Interaction"}),`
`,e.jsx(t.h2,{id:"state",children:"State"}),`
`,e.jsx("img",{src:d,alt:"Tabs States"})]})}function v(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{v as default};
