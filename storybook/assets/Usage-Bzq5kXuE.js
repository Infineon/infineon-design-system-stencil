import{j as e,M as s}from"./blocks-DnfXKuNL.js";import{useMDXComponents as o}from"./index-fASNx1Lf.js";import{T as r}from"./tooltip.stories-DypeD1VT.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CAkk9qRm.js";import"./icons-DyNdhNdc.js";const a=""+new URL("tooltip-anatomy-DLfM2XdK.png",import.meta.url).href,l=""+new URL("tooltip-compact-uYXKNUX_.png",import.meta.url).href,h=""+new URL("tooltip-dismissible-BRw7KcP9.png",import.meta.url).href,d=""+new URL("tooltip-extended-BTsA4Yz_.png",import.meta.url).href,c=""+new URL("tooltip-direction-Dj3X5M9g.png",import.meta.url).href;function n(t){const i={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r}),`
`,e.jsx(i.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(i.p,{children:"The Tooltip is a text label that appears when users interact with an element, offering additional information or describing its function. Tooltips are triggered on hover or focus, and automatically disappear after a short duration. They are always positioned near the associated element, providing context and enhancing the user experience."}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsx(i.tr,{children:e.jsx(i.th,{children:"Resources"})})}),e.jsx(i.tbody,{children:e.jsx(i.tr,{children:e.jsx(i.td,{children:e.jsx(i.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2393-3990",rel:"nofollow",children:"Figma tooltip component →"})})})})]}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"When you want to provide users with additional information or describe the function of an element."}),`
`,e.jsx(i.li,{children:"To enhance the user experience and provide contextual guidance."}),`
`,e.jsx(i.li,{children:"For elements that require brief, descriptive text to assist users in understanding their purpose or functionality."}),`
`,e.jsx(i.li,{children:"For interactive elements such as buttons, links, or icons to provide users with relevant information when interacting with those elements."}),`
`]}),`
`,e.jsx(i.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"When the additional information provided is lengthy or requires extensive reading."}),`
`,e.jsx(i.li,{children:"When there is complex content or multiple pieces of information."}),`
`,e.jsx(i.li,{children:"For non-interactive elements or elements that do not have relevant information to display."}),`
`]}),`
`,e.jsx(i.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:a,alt:"Tooltip Anatomy"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Tooltip title (1)"}),e.jsx(i.br,{}),`
`,"Displays a short descriptive title."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Tooltip text (2)"}),e.jsx(i.br,{}),`
`,"Longer text content that for example clarify the purpose or function of a UI element."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Direction (3)"}),e.jsx(i.br,{}),`
`,"If needed, different directions are available to align with any use case."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Dismiss (4)"}),e.jsx(i.br,{}),`
`,"A close icon to allow users to dismiss the tooltip if they choose to do so."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Icon (5)"}),e.jsx(i.br,{}),`
`,"An icon can be displayed to improve the tooltips' message."]}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i.h3,{id:"compact",children:"Compact"}),`
`,e.jsx(i.p,{children:"This variant contains only text, providing a concise and minimalistic tooltip for displaying brief information or descriptions."}),`
`,e.jsx("img",{src:l,alt:"Tooltip Compact",width:"50%"}),`
`,e.jsx(i.h3,{id:"dismissible",children:"Dismissible"}),`
`,e.jsx(i.p,{children:"This variant includes a dismiss icon, allowing users to manually dismiss the tooltip if needed. It is useful when the tooltip content requires users to read or interact with it for a longer duration, and automatic disappearance may not be suitable."}),`
`,e.jsx("img",{src:h,alt:"Tooltip Dismissible",width:"50%"}),`
`,e.jsx(i.h3,{id:"extended",children:"Extended"}),`
`,e.jsx(i.p,{children:"This variant combines an icon placed on the left side with text on the right side. It is helpful when the tooltip content is associated with a specific action or has a visual representation conveyed by the icon. It has no dismiss icon."}),`
`,e.jsx("img",{src:d,alt:"Tooltip Extended",width:"50%"}),`
`,e.jsx(i.h2,{id:"directions",children:"Directions"}),`
`,e.jsx("img",{src:c,alt:"Tooltip Direction"}),`
`,e.jsx(i.h2,{id:"trigger-delay",children:"Trigger delay"}),`
`,e.jsx(i.p,{children:"Tooltips should appear after a short delay when the user hovers their cursor over or interacts with an UI element. This delay should be in the range of 300 milliseconds."}),`
`,e.jsx(i.h2,{id:"display-duration",children:"Display duration"}),`
`,e.jsx(i.p,{children:"Once a tooltip appears, it should remain visible for long enough to allow users to read and comprehend the information. Depending on the variant of the tooltip, it should remain visible for about 3 to 5 seconds after it appears. The dismissible variant should remain visible for at least 5 seconds."}),`
`,e.jsx(i.h2,{id:"mouse-movement",children:"Mouse movement"}),`
`,e.jsx(i.p,{children:"The tooltip disappear immediately when the user moves their cursor away from the triggering element. This behavior prevents the tooltip from obstructing the user's view as they continue navigating the interface."})]})}function b(t={}){const{wrapper:i}={...o(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{b as default};
