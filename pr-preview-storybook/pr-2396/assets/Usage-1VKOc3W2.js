import{u as i,j as e,M as o}from"./blocks-2P0Y8Pxh.js";import{T as a}from"./toast.stories-CNEaiU3U.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BGGcq6eW.js";function t(s){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(n.h1,{id:"toast",children:"Toast"}),`
`,e.jsx(n.p,{children:"A toast is a brief, non-blocking notification that appears at the edge of the interface. It communicates quick updates such as confirmations, hints, or errors and automatically disappears after a short, predefined duration."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'To confirm that an action succeeded (e.g. "Saved").'}),`
`,e.jsx(n.li,{children:"To surface a short, low-priority hint or a recoverable error."}),`
`,e.jsx(n.li,{children:"To report the result of a background or asynchronous task."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For critical messages that require a decision or block the workflow — use the modal component instead."}),`
`,e.jsx(n.li,{children:"For persistent, page-level information — use the alert or notification component instead."}),`
`]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Status icon (1)"}),e.jsx(n.br,{}),`
`,"A filled status icon (success, warning, danger) or a spinner (loading) on the left."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Message (2)"}),e.jsx(n.br,{}),`
`,"A short, concise text describing the update."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Action (3)"}),e.jsx(n.br,{}),`
`,"An optional trailing button. Clicking it dismisses the toast and emits ",e.jsx(n.code,{children:"ifxToastAction"}),', so it doubles as the manual-dismiss control (e.g. "Dismiss", "Undo"). When ',e.jsx(n.code,{children:"actionText"})," is empty the toast has no action and relies on auto-dismiss."]}),`
`,e.jsx(n.h2,{id:"status-variants",children:"Status variants"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"loading"})," – an ocean spinner for in-progress operations. Never auto-dismisses; transition it to another status when the operation finishes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"success"})," – a green circle with a check."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"warning"})," – an orange circle with an exclamation mark."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"danger"})," – a red circle with a cross; announced assertively to assistive technologies."]}),`
`]}),`
`,e.jsx(n.h2,{id:"placement--stacking",children:"Placement & stacking"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ifx-toast-container"})," positions toasts in one of six placements on desktop (",e.jsx(n.code,{children:"top-left"}),", ",e.jsx(n.code,{children:"top-center"}),", ",e.jsx(n.code,{children:"top-right"}),", ",e.jsx(n.code,{children:"bottom-left"}),", ",e.jsx(n.code,{children:"bottom-center"}),", ",e.jsx(n.code,{children:"bottom-right"}),") and collapses to two (top or bottom) on mobile. Multiple toasts stack with a gap. Top placements automatically stay clear of the ",e.jsx(n.code,{children:"ifx-navbar"}),", whose height is measured at runtime, so a toast never overlaps the navbar/header."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:["Toasts animate in with a subtle slide-up and fade out automatically after ~5 seconds (",e.jsx(n.code,{children:"duration"}),", in ms; ",e.jsx(n.code,{children:"0"})," disables auto-dismiss). The animation respects ",e.jsx(n.code,{children:"prefers-reduced-motion"}),"."]}),`
`,e.jsx(n.h2,{id:"showing-toasts",children:"Showing toasts"}),`
`,e.jsx(n.h3,{id:"imperative-recommended",children:"Imperative (recommended)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ifxToast"})," helper is the recommended way for event/status-driven notifications. It lazily mounts a singleton container per placement and returns a handle to update or dismiss the toast."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { ifxToast } from '@infineon/infineon-design-system-stencil';

// Fire-and-forget
ifxToast.success('Saved');
ifxToast.danger('Could not save', { placement: 'top-center', actionText: 'Retry' });

// Update an in-progress toast (loading → success). Keep a manual dismiss control
// visible by carrying an action through the update.
const handle = ifxToast.loading('Saving…');
await save();
handle.update({ status: 'success', message: 'Saved', actionText: 'Dismiss' });

// Cap how many toasts stack in a placement (oldest are dismissed first)
ifxToast.success('Saved', { max: 3 });
`})}),`
`,e.jsx(n.h3,{id:"declarative",children:"Declarative"}),`
`,e.jsx(n.p,{children:"Use the components directly for full control, SSR, or custom layouts:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ifx-toast-container placement="bottom-right">
  <ifx-toast status="success" message="Saved" action-text="Undo"></ifx-toast>
</ifx-toast-container>
`})})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
