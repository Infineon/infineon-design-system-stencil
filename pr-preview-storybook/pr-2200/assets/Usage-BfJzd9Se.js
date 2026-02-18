import{j as t,M as i}from"./blocks-BoFVtf_Y.js";import{useMDXComponents as r}from"./index-DPw7gB8J.js";import{C as o}from"./content-switcher.stories-HPsTGXwX.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D_ica_UD.js";import"./icons-DyNdhNdc.js";const a=""+new URL("content-switcher-anatomy-LL2dglav.png",import.meta.url).href,c=""+new URL("content-switcher-mouse-interaction-Dpkm47uq.png",import.meta.url).href,h=""+new URL("content-switcher-states-D8-NYDwM.png",import.meta.url).href,l=""+new URL("content-switcher-variants-C8-vmase.png",import.meta.url).href;function s(n){const e={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:o}),`
`,t.jsx(e.h1,{id:"content-switcher",children:"Content Switcher"}),`
`,t.jsx(e.p,{children:"The Content switcher component allows users to toggle between two or more content sections within the entire content area."}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsx(e.tr,{children:t.jsx(e.th,{children:"Resources"})})}),t.jsx(e.tbody,{children:t.jsx(e.tr,{children:t.jsx(e.td,{children:t.jsx(e.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=63857-4879",rel:"nofollow",children:"Figma Content Switcher component →"})})})})]}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.h3,{id:"when-to-use",children:"When to use"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"When you need to switch between different content views or layouts dynamically, often in more complex or interactive scenarios."}),`
`]}),`
`,t.jsx(e.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"If you only want to switch between on/off. For this scenario use the switcher component instead."}),`
`]}),`
`,t.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,t.jsx("img",{src:a,alt:"Content Switcher Anatomy"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Selected Content Tab(1)"}),t.jsx(e.br,{}),`
`,"Only one tab can be selected at a time."]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Content Tab(2)"}),t.jsx(e.br,{}),`
`,"This shows a selectable item which switches the content."]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Label Text(3)"}),t.jsx(e.br,{}),`
`,"This is the primary text that describes the selected tab."]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Content Area(4)"}),t.jsx(e.br,{}),`
`,"The content area is the part where the actual content related to the active tab is displayed. When a user clicks on a tab, the content area updates to show the corresponding content associated with that tab."]}),`
`,t.jsx(e.h2,{id:"mouse-interaction",children:"Mouse interaction"}),`
`,t.jsx(e.p,{children:"Users can activate and navigate between content switcher tabs by clicking a content tab."}),`
`,t.jsx("img",{src:c,alt:"Content Switcher Mouse Interaction",width:"50%"}),`
`,t.jsx(e.h2,{id:"states",children:"States"}),`
`,t.jsx("img",{src:h,alt:"Content Switcher States"}),`
`,t.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(e.p,{children:"The content switcher allows a various amount of tabs. Consider using max. 5 tabs to ensure a suitable user experience."}),`
`,t.jsx("img",{src:l,alt:"Content Switcher Variants"})]})}function b(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{b as default};
