import{j as e,M as s}from"./blocks-BmSlsq4y.js";import{useMDXComponents as r}from"./index-CMxXKWBX.js";import{S as a}from"./sidebar.stories-Bb2Jq7x2.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BmfNKPJW.js";import"./icons-DyNdhNdc.js";const o=""+new URL("sidebar-sections-CVr8Rq8S.png",import.meta.url).href,d=""+new URL("sidebar-anatomy-BYvPHLpi.png",import.meta.url).href,h=""+new URL("sidebar-expanded-anatomy-B_NFSkt2.png",import.meta.url).href,l=""+new URL("navigation-bar-variant-g2SDCAQk.png",import.meta.url).href;function i(t){const n={a:"a",br:"br",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"sidebar",children:"Sidebar"}),`
`,e.jsx(n.p,{children:"For dashboards or similar functional application we provide a different and usually common variant of navigation. The sidebar gives users an easy access to different sections."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsx(n.tr,{children:e.jsx(n.th,{children:"Resources"})})}),e.jsx(n.tbody,{children:e.jsx(n.tr,{children:e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=23998-13854",rel:"nofollow",children:"Figma sidebar navigation component →"})})})})]}),`
`,e.jsx(n.h2,{id:"anatomy-of-default-sidebar",children:"Anatomy of default sidebar"}),`
`,e.jsx("img",{src:d,alt:"Sidebar Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Logo (1)"}),e.jsx(n.br,{}),`
`,"The header always starts with the brand logo."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Application name (2)"}),e.jsx(n.br,{}),`
`,"The application name is always shown below the brand logo."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Main Menu item list (3)"}),e.jsx(n.br,{}),`
`,"To navigate through different sections and pages. It is possible to attach a supportive icon before the menu item-labels."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Divider (4)"}),e.jsx(n.br,{}),`
`,"To visually cluster different sub menus or to differentiate the sticky footer from the rest above."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Cluster Title (5)"}),e.jsx(n.br,{}),`
`,"This menu item opens another subordinate menu. It is always denoted with a chevron-down icon to the right. The cluster title has always a divider above. Do not use any icons before this menu item."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Footer (6)"}),e.jsx(n.br,{}),`
`,"The footer at the bottom can be displayed optionally. The text links within the footer are displayed in one line and wrapped if they become too long. A dividing line at the top indicates the margin of the footer."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Border (7)"}),e.jsx(n.br,{}),`
`,"A 1px border indicates the right edge of the sidebar at anytime."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Number Indicator (8)"}),e.jsx(n.br,{}),`
`,"Informs the user about the amount of unseen content inside the menu item's page."]}),`
`,e.jsx(n.h2,{id:"anatomy-of-expanded-sidebar-navigation",children:"Anatomy of expanded sidebar navigation"}),`
`,e.jsx("img",{src:h,alt:"Sidebar Expanded Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Hidden overflow header (1)"}),e.jsx(n.br,{}),`
`,"As with the footer, if the content in the sidebar becomes too large, the further overflow is clipped."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Search field (2)"}),e.jsx(n.br,{}),`
`,"If needed the search field can be displayed inside the sidebar's navigation bar."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Scroll bar (3)"}),e.jsx(n.br,{}),`
`,"A scroll bar appears as the sidebar's height increases."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Expanded menu item (4)"}),e.jsx(n.br,{}),`
`,"The chevron-up icon indicates that the menu item is expanded."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Subordinated menu (5)"}),e.jsx(n.br,{}),`
`,"Opens a subordinated menu when you click on the referenced cluster title. It is possible to attach a supportive icon before the menu item-labels."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Intended subordinate menu (6)"}),e.jsx(n.br,{}),`
`,"Shows another subordinate menu in an intended style. Avoid using icons in this menu-depth. Up to here the maximum available menu-depth is reached."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Hidden overflow footer(7)"}),e.jsx(n.br,{}),`
`,"When the content in the sidebar gets too big than the further overflow is clipped."]}),`
`,e.jsx(n.h2,{id:"anatomy-of-navigation-bar-variant",children:"Anatomy of navigation bar variant"}),`
`,e.jsx("img",{src:l,alt:"Navigation Bar Variant"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Navigation bar (1)"}),e.jsx(n.br,{}),`
`,"Can be displayed optionally. If displayed the navigation bar is sticky."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Secondary navigation (2)"}),e.jsx(n.br,{}),`
`,"Crucial functions can be placed here. Please pay attention to the placement by priority."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Border (3)"}),e.jsx(n.br,{}),`
`,"A 1px border indicates the bottom edge of the navigation bar at anytime."]}),`
`,e.jsx(n.h2,{id:"areas",children:"Areas"}),`
`,e.jsx("img",{src:o,alt:"Sidebar Areas"})]})}function f(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{f as default};
