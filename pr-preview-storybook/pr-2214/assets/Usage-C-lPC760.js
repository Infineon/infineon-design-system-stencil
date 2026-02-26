import{j as e,M as s}from"./blocks-s8V8vAPY.js";import{useMDXComponents as o}from"./index-_RPSzgFa.js";import{M as r}from"./modal.stories-CSSKXmzo.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DhuzaRAJ.js";import"./icons-DyNdhNdc.js";const a=""+new URL("modal-alert-desktop-1BTLoSxu.png",import.meta.url).href,d=""+new URL("modal-default-desktop-J64utPUB.png",import.meta.url).href,l=""+new URL("modal-mobile-360-CnPUBXaO.png",import.meta.url).href,h=""+new URL("modal-anatomy-BwiW9-sD.png",import.meta.url).href,c=""+new URL("modal-alert-status-DdD8sR71.png",import.meta.url).href;function i(n){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r}),`
`,e.jsx(t.h1,{id:"modal",children:"Modal"}),`
`,e.jsx(t.p,{children:"Modal creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsx(t.tr,{children:e.jsx(t.th,{children:"Resources"})})}),e.jsx(t.tbody,{children:e.jsx(t.tr,{children:e.jsx(t.td,{children:e.jsx(t.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2424-2513",rel:"nofollow",children:"Figma modal component →"})})})})]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"When you need to present content or interactions that require the user's immediate attention or action, while temporarily disabling the main window."}),`
`,e.jsx(t.li,{children:"When you want to display information, request user input, or guide users through a specific task within a centralized and focused modal window."}),`
`,e.jsx(t.li,{children:"When you need to convey critical or important information that requires the user's immediate attention, often associated with alerts or notifications."}),`
`]}),`
`,e.jsx(t.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"For non-critical or non-essential information that does not require the user's immediate attention or interaction."}),`
`,e.jsx(t.li,{children:"If it creates a disruptive or intrusive experience for the user."}),`
`]}),`
`,e.jsx(t.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:h,alt:"Modal Anatomy"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Title (1)"}),e.jsx(t.br,{}),`
`,"The title is an optional element at the top of the modal that provides a brief, descriptive heading for the content inside the modal. It helps users understand the purpose of the modal."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Content (2)"}),e.jsx(t.br,{}),`
`,"The content section contains the main information that the modal intends to display to the user."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Container (3)"}),e.jsx(t.br,{}),`
`,"This is the main container that holds all the content and controls within the modal. It is positioned at the center of the viewport and can have a fixed width and height or be responsive to the content it contains."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Close (Dismiss) Icon (4)"}),e.jsx(t.br,{}),`
`,"A close icon placed at the top right corner of the modal. Clicking on this icon dismisses the modal. The dismiss function should be avoided for critical alarms or notifications that require immediate action or confirmation by the user."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Divider (5)"}),e.jsx(t.br,{}),`
`,"The divider visually separates the title and content areas."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Buttons (6)"}),e.jsx(t.br,{}),`
`,"If required, buttons can be displayed to confirm an action by the user. The primary button is used to confirm an action and is always aligned to the right in the modal. The secondary button is used in addition to the Dismiss icon to close the modal again / to cancel the action."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Backdrop (7)"}),e.jsx(t.br,{}),`
`,"The backdrop is a semi-transparent overlay ",e.jsx(t.code,{children:"$ifxColorOverlayDark"})," that covers the rest of the page when the modal is open. Clicking on the backdrop dismisses the modal."]}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(t.p,{children:"The default variant is a simple, clean, and unobtrusive design suitable for general information display or non-critical actions."}),`
`,e.jsx("img",{src:d,alt:"Modal Default Desktop"}),`
`,e.jsx(t.h3,{id:"alert",children:"Alert"}),`
`,e.jsx(t.p,{children:"The alert variant is designed for important messages and errors, or critical actions that require users' immediate attention."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Consider that with a modal error status, the buttons should also have the error variant."}),`
`]}),`
`,e.jsx("img",{src:a,alt:"Modal Alert Desktop"}),`
`,e.jsx(t.h4,{id:"status",children:"Status"}),`
`,e.jsx("img",{src:c,alt:"Modal Alert Desktop"}),`
`,e.jsx(t.h2,{id:"mobile",children:"Mobile"}),`
`,e.jsx("img",{src:l,alt:"Modal Mobile < 360px"})]})}function g(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{g as default};
