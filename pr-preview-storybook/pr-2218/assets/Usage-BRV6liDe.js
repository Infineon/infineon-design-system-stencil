import{j as e,M as o}from"./blocks-CERx25n9.js";import{useMDXComponents as i}from"./index-HlHJfxpl.js";import{D as s}from"./dropdown.stories-CmtK0Agz.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B2pKNNw0.js";import"./icons-DyNdhNdc.js";const a=""+new URL("dropdown-menu-variants-nj_ehdMx.png",import.meta.url).href,d=""+new URL("dropdown-menu-trigger-GnLGIp1v.png",import.meta.url).href,h=""+new URL("dropdown-menu-states-BzE357yv.png",import.meta.url).href,l=""+new URL("dropdown-menu-sizes-j7IIyYqG.png",import.meta.url).href,c=""+new URL("dropdown-menu-scroll-behavior-uVmLXrsy.png",import.meta.url).href,p=""+new URL("dropdown-menu-filter-search-agY7clb3.png",import.meta.url).href,u=""+new URL("dropdown-menu-filter-search-flow-Cp6OFgpu.png",import.meta.url).href;function t(r){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
`,e.jsx(n.h1,{id:"dropdown-menu",children:"Dropdown Menu"}),`
`,e.jsx(n.p,{children:"The dropdown menu drops-down when a trigger is clicked. There are different dropdown menu items that are used dependent on the function."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsx(n.tr,{children:e.jsx(n.th,{children:"Resources"})})}),e.jsx(n.tbody,{children:e.jsx(n.tr,{children:e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2602-6446",rel:"nofollow",children:"Figma dropdown menu component →"})})})})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When you want to avoid cluttering the screen with numerous options."}),`
`,e.jsx(n.li,{children:"When you want to present a list of options which can be opened with any trigger."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When you want to present a list of options which can be opened with a select field. Use a select instead."}),`
`,e.jsx(n.li,{children:"When you want to provide additional menu links in the navbar. Use a submenu instead."}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx("img",{src:a,alt:"Dropdown Menu Variants"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Default"}),e.jsx(n.br,{}),`
`,"Our default menu items which can be used or combined with different properties."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icons"}),e.jsx(n.br,{}),`
`,"It is possible to use icons on the left side of the menu item."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Divider"}),e.jsx(n.br,{}),`
`,"Use a divider to provide a clear distinction between different categories of options."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Header"}),e.jsx(n.br,{}),`
`,"It is possible to use a descriptive heading that summarizes the actions that can be made in the drop-down menu."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Error/Remove"}),e.jsx(n.br,{}),`
`,"Indicates options that no longer reflect the latest data (e.g., previously deleted or changed but still shown) and enables discarding items during editing."]}),`
`,e.jsx(n.h3,{id:"filter-search",children:"Filter search"}),`
`,e.jsx(n.p,{children:"The Filter Search feature offers the possibility to filter inside a dropdown menu. This is very helpful if there is a lot of data which can be filtered in order to e.g. filter the output of a data table. The Filter Search feature can be applied to any other trigger like a simple icon or a link."}),`
`,e.jsx("img",{src:p,alt:"Dropdown Menu Filter Search"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The Filter Search variant is always located at the top of a drop-down menu."}),`
`,e.jsx(n.li,{children:"Due to the scrolling behavior, the Filter Search is fixed at the top."}),`
`]}),`
`,e.jsx(n.h5,{id:"autocomplete",children:"Autocomplete"}),`
`,e.jsx(n.p,{children:"The system suggests possible search queries or completions as users type in their search terms."}),`
`,e.jsx("img",{src:u,alt:"Dropdown Menu Filter Search Flow"}),`
`,e.jsx(n.h2,{id:"trigger",children:"Trigger"}),`
`,e.jsx(n.p,{children:"A dropdown menu is placed directly under it’s triggers bounding box. A trigger can be for example a button, a text link or an icon button."}),`
`,e.jsx("img",{src:d,alt:"Dropdown Menu Trigger"}),`
`,e.jsx(n.h2,{id:"scrolling-behavior",children:"Scrolling behavior"}),`
`,e.jsx(n.p,{children:"To enhance user experience, it is advisable to display a portion equal to 50% of the container height for the last item, even when scroll bars are not enabled. This serves as a visual cue that there is additional content within the menu. Starting the scroll at the sixth option in the menu is a suggested approach. In some cases the optimal starting point may differ depending on your specific use case."}),`
`,e.jsx("img",{src:c,alt:"Dropdown Menu Scroll Behavior",width:"50%"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Scroll bar (1)"}),e.jsx(n.br,{}),`
`,"Can be optionally displayed if there are lots of menu items in the dropdown. The bar is browser native."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipped menu(2)"}),e.jsx(n.br,{}),`
`,"Indicates that there is more to scroll."]}),`
`,e.jsx(n.h2,{id:"size",children:"Size"}),`
`,e.jsx(n.p,{children:"There are two dropdown menu sizes: 40px (Large) and 36px (Small)."}),`
`,e.jsx("img",{src:l,alt:"Dropdown Menu Sizes"}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx("img",{src:h,alt:"Dropdown Menu States"})]})}function v(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{v as default};
