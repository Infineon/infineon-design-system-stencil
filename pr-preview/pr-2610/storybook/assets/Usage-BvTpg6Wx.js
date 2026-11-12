import{u as t,j as e,M as s}from"./blocks-BUBP6lEd.js";import{B as o}from"./breadcrumb.stories-C-4K_U5I.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DnRE-M9A.js";import"./icons-B3WZ8sqF.js";const a=""+new URL("breadcrumb-anatomy-yLEwqF4M.png",import.meta.url).href,h=""+new URL("breadcrumb-home-B96cgv9d.png",import.meta.url).href,c=""+new URL("breadcrumb-sibling-navigation-C-KWwv90.png",import.meta.url).href,l=""+new URL("breadcrumb-overflow-DzM_9ZBx.png",import.meta.url).href,d=""+new URL("breadcrumb-item-states-WHlcCXe6.png",import.meta.url).href,m=""+new URL("breadcrumb-icon-states-CvmZnN4g.png",import.meta.url).href,u=""+new URL("breadcrumb-positioning-desktop-DDqSPHNa.png",import.meta.url).href,b=""+new URL("breadcrumb-positioning-mobile-B39e5BFO.png",import.meta.url).href,p=""+new URL("breadcrumb-mouse-interaction-BIBKw6_r.png",import.meta.url).href;function i(r){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o}),`
`,e.jsx(n.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsx(n.p,{children:"Breadcrumbs are a navigational aid that provides users with a hierarchical trail of links, allowing them to understand their current location within a website or application."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsx(n.tr,{children:e.jsx(n.th,{children:"Resources"})})}),e.jsx(n.tbody,{children:e.jsx(n.tr,{children:e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=118445-33340",rel:"nofollow",children:"Figma breadcrumb component →"})})})})]}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Home (1)"}),e.jsx(n.br,{}),`
`,"Optional. Links to the start page of the website or application."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Home divider (2)"}),e.jsx(n.br,{}),`
`,"A vertical divider that separates the home icon from the breadcrumb trail. Only shown together with the home icon."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parent link (3)"}),e.jsx(n.br,{}),`
`,"Guides users to a parent-level page."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Chevron (4)"}),e.jsx(n.br,{}),`
`,"Optional. Opens a dropdown menu with the sibling pages of a breadcrumb."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Separator (5)"}),e.jsx(n.br,{}),`
`,"A visual divider that separates each breadcrumb element."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Overflow (6)"}),e.jsx(n.br,{}),`
`,"Optional. Collapses the breadcrumbs between the first breadcrumb and the current page into a dropdown menu."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Current page (7)"}),e.jsx(n.br,{}),`
`,"Shows which page the user is currently on. It is set in semibold, has no underline and is not clickable."]}),`
`,e.jsx(n.h2,{id:"options",children:"Options"}),`
`,e.jsx(n.h3,{id:"home",children:"Home"}),`
`,e.jsx(n.p,{children:"The home icon is optional and always links to the start page. It counts as the first breadcrumb of the trail. If the home icon is not shown, the first breadcrumb takes over its role."}),`
`,e.jsx("img",{src:h,alt:"Breadcrumb Home",width:"50%"}),`
`,e.jsx(n.h3,{id:"sibling-navigation",children:"Sibling navigation"}),`
`,e.jsx(n.p,{children:"A chevron can optionally be added to the right of a breadcrumb. It opens a dropdown menu that lists the sibling pages on the same level, so users can switch between them without going back up the hierarchy. The label itself stays a link to its page; the chevron has its own click area."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The current page can also have a chevron."}),`
`,e.jsx(n.li,{children:"In the dropdown menu, the page the user is currently on is shown in the selected state."}),`
`]}),`
`,e.jsx("img",{src:c,alt:"Breadcrumb Sibling Navigation"}),`
`,e.jsx(n.h3,{id:"overflow",children:"Overflow"}),`
`,e.jsxs(n.p,{children:["For deep hierarchies, the breadcrumbs in the middle of the trail can optionally be collapsed into an overflow menu (",e.jsx(n.code,{children:"•••"}),"). Clicking it opens a dropdown menu that lists the hidden breadcrumbs as links."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always visible: the home icon (if shown), the first breadcrumb and the current page."}),`
`,e.jsx(n.li,{children:"The overflow menu is only offered if at least one breadcrumb lies in between. With the home icon, this applies from four breadcrumbs (including home); without the home icon, from three breadcrumbs."}),`
`,e.jsx(n.li,{children:"The overflow does not depend on the available width."}),`
`]}),`
`,e.jsx("img",{src:l,alt:"Breadcrumb Overflow"}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx(n.h3,{id:"breadcrumb-item",children:"Breadcrumb item"}),`
`,e.jsx("img",{src:d,alt:"Breadcrumb Item States"}),`
`,e.jsx(n.h3,{id:"icons",children:"Icons"}),`
`,e.jsx(n.p,{children:"Applies to the home, overflow, back and chevron icons."}),`
`,e.jsx("img",{src:m,alt:"Breadcrumb Icon States"}),`
`,e.jsx(n.h2,{id:"positioning",children:"Positioning"}),`
`,e.jsx(n.p,{children:"The breadcrumb navigation is displayed under the navigation bar and is aligned with the grid or the brand logo."}),`
`,e.jsx(n.h3,{id:"desktop",children:"Desktop"}),`
`,e.jsx("img",{src:u,alt:"Breadcrumb Position Desktop"}),`
`,e.jsx(n.h3,{id:"mobile",children:"Mobile"}),`
`,e.jsx(n.p,{children:"On mobile, only the home icon (if shown) and the current page are displayed. If the current page is not on the first level, a back icon follows the current page and links to the parent page."}),`
`,e.jsx("img",{src:b,alt:"Breadcrumb Position Mobile"}),`
`,e.jsx(n.h2,{id:"mouse-interaction",children:"Mouse interaction"}),`
`,e.jsx(n.p,{children:"Every breadcrumb link is clickable, including the home icon. The current page is not clickable. The click area corresponds to the text width and line height. Chevrons and the overflow icon have their own click area and open a dropdown menu."}),`
`,e.jsx("img",{src:p,alt:"Breadcrumb Mouse Interaction"})]})}function B(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{B as default};
