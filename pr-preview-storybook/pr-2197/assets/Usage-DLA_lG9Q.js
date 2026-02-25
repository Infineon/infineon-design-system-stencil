import{j as e,M as r}from"./blocks-Bht2ZrXC.js";import{useMDXComponents as i}from"./index-BpbRR6oJ.js";import{P as s}from"./popover.stories-VxPO45xd.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CeSR5tSk.js";const a=""+new URL("popover-anatomy-Dufxffps.png",import.meta.url).href,c=""+new URL("popover-mouse-interaction-DN17wxF0.png",import.meta.url).href,h=""+new URL("popover-compact-wTnr0PWD.png",import.meta.url).href,l=""+new URL("popover-interactive-elements-D4TlWy7c.png",import.meta.url).href,p=""+new URL("popover-directions-Cn9chssL.png",import.meta.url).href,d=""+new URL("popover-feature-comparison-tjp1150_.png",import.meta.url).href,m=""+new URL("popover-dismissible-iO--29HJ.png",import.meta.url).href;function o(t){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s}),`
`,e.jsx(n.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(n.p,{children:"Popover reveals brief helper content anchored to a specific element. It is activated by a user click and stays attached to that element without disabling the main window. It provides short, contextual guidance and can be closed again by the user."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsx(n.tr,{children:e.jsx(n.th,{children:"Resources"})})}),e.jsx(n.tbody,{children:e.jsx(n.tr,{children:e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=88820-67",rel:"nofollow",children:"Figma popover component →"})})})})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx("img",{src:d,alt:"Popover Feature Comparison",width:"50%"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"When you need to present brief, contextual information tied to a specific element, shown on user click."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"When you want to provide lightweight actions (buttons or links) closely related to the trigger."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"When the content should appear adjacent to its anchor and be easily dismissible without blocking the main interface."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"When you want to reduce visual clutter by deferring secondary details until the user requests them."}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"For critical alerts or actions that require focused attention or confirmation."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"For complex or multi-step interactions, long or scrollable content, or forms with multiple fields."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"When the information isn't tied to a specific anchor element or needs to remain persistent on the screen."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"For navigation menus, option lists or purely passive hints that appear on hover."}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:a,alt:"Popover Anatomy",width:"50%"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Title (1)"}),"\\"]}),`
`,e.jsx(n.p,{children:"A short, descriptive heading that names the popover's purpose. Keep it brief to support quick scanning."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Support text (2)"}),"\\"]}),`
`,e.jsx(n.p,{children:"Support text provides brief, contextual guidance or explanation related to the trigger. Use one or two sentences; avoid long paragraphs, lists, or complex layouts."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Container (3)"}),"\\"]}),`
`,e.jsx(n.p,{children:"The container is the anchored surface that holds all popover content and controls. It appears adjacent to the trigger element, aligns to the chosen placement, remains non-blocking and can be closed by clicking the close icon. The width of the container can be set individually."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Close (Dismiss) Icon (4)"}),"\\"]}),`
`,e.jsx(n.p,{children:"The close icon appears in the top-right corner of the popover when enabled. If it is shown, users dismiss the popover by clicking it; if it is hidden, provide a close button in the action area, as the popover will not close automatically."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Indicator (5)"}),"\\"]}),`
`,e.jsx(n.p,{children:"A directional arrow that visually connects the popover to its trigger."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Additional interactive elements (6)"}),"\\"]}),`
`,e.jsx(n.p,{children:"Optional action area placed at the bottom of the popover. Add either buttons or links that relate directly to the popover content."}),`
`,e.jsx(n.h2,{id:"positioning",children:"Positioning"}),`
`,e.jsx(n.p,{children:"The popover responsively repositions to stay within the viewport as screen size changes, and its directional indicator (arrow) updates to match the current placement. You can choose between Top, Left, Right, Bottom and Auto. If a fixed placement (Top, Left, Right, Bottom) would place the popover outside the visible area due to the scroll view, the default behaviour applies and the popover is automatically shown in a visible area."}),`
`,e.jsx(n.h2,{id:"directions",children:"Directions"}),`
`,e.jsx("img",{src:p,alt:"Popover Directions"}),`
`,e.jsx(n.h2,{id:"mouse-interaction",children:"Mouse Interaction"}),`
`,e.jsx(n.p,{children:"Users dismiss the popover by clicking the close icon in the top-right corner. When present, buttons or links can be clicked to perform actions or navigate."}),`
`,e.jsx("img",{src:c,alt:"Popover Mouse Interaction",width:"50%"}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.p,{children:"This is the default for brief, contextual help, which shows only the required title and support text."}),`
`,e.jsx("img",{src:h,alt:"Popover Compact",width:"50%"}),`
`,e.jsx(n.h3,{id:"dismissible",children:"Dismissible"}),`
`,e.jsx(n.p,{children:"Use this option when you don’t want a button in the action area to serve as the close control. The popover remains open until the user dismisses it."}),`
`,e.jsx("img",{src:m,alt:"Popover Dismissible"}),`
`,e.jsx(n.h4,{id:"with-interactive-elements",children:"With Interactive Elements"}),`
`,e.jsx(n.p,{children:"This variant adds a bottom action area with buttons and links. There is no limit on the number of actions, but we recommend using no more than four, as the popover is not intended for complex interactions. To keep the popover lightweight, only the tertiary button can be used."}),`
`,e.jsx("img",{src:l,alt:"Popover Interactive Elements"})]})}function w(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{w as default};
