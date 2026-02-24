import{j as e,M as r}from"./blocks-aW1ifBV4.js";import{useMDXComponents as o}from"./index-DTmMpVYM.js";import{P as s}from"./popover.stories-VxPO45xd.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-4JBD4P7b.js";function t(i){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s}),`
`,e.jsx(n.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(n.p,{children:"The Popover component is a lightweight, versatile overlay that can contain interactive elements like buttons and links. It's perfect for confirmation dialogs and contextual actions that should stay close to the trigger element."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For confirmation dialogs to ask users to confirm destructive actions."}),`
`,e.jsx(n.li,{children:"For contextual overlays that provide additional details without navigation."}),`
`,e.jsx(n.li,{children:"For quick actions that should stay close to the trigger element."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For long or complex content that needs dedicated space."}),`
`,e.jsx(n.li,{children:"For critical alerts that require immediate attention (use Alert or Modal)."}),`
`,e.jsx(n.li,{children:"When content must persist across navigation."}),`
`]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Title (1)"}),e.jsx(n.br,{}),`
`,"Displays a short descriptive title for the popover content."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Content text (2)"}),e.jsx(n.br,{}),`
`,"Body text that provides detailed information or instructions."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Close icon (3)"}),e.jsx(n.br,{}),`
`,"Close button allowing users to dismiss the popover manually."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Actions (4)"}),e.jsx(n.br,{}),`
`,"Optional action buttons or links placed in the ",e.jsx(n.code,{children:"content"})," slot (there is no actions prop)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Arrow indicator (5)"}),e.jsx(n.br,{}),`
`,"Visual indicator pointing to the trigger element."]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(n.p,{children:"The standard popover with title and text content. Triggered by click and includes a close icon."}),`
`,e.jsx(n.h3,{id:"with-actions",children:"With Actions"}),`
`,e.jsxs(n.p,{children:["Includes action buttons for user interaction. Add them via the ",e.jsx(n.code,{children:"content"})," slot."]}),`
`,e.jsx(n.h2,{id:"positioning",children:"Positioning"}),`
`,e.jsx(n.p,{children:"The popover supports multiple positions relative to its trigger element:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"auto"})," (default) - Automatically determines the best position based on available viewport space"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"top"}),", ",e.jsx(n.code,{children:"top-start"}),", ",e.jsx(n.code,{children:"top-end"})," - Above the trigger element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bottom"}),", ",e.jsx(n.code,{children:"bottom-start"}),", ",e.jsx(n.code,{children:"bottom-end"})," - Below the trigger element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"left"})," - To the left of the trigger element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"right"})," - To the right of the trigger element"]}),`
`]}),`
`,e.jsx(n.h2,{id:"interaction",children:"Interaction"}),`
`,e.jsx(n.h3,{id:"click-trigger-default",children:"Click Trigger (default)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Popover opens when the trigger element is clicked"}),`
`,e.jsx(n.li,{children:"Closes when clicking the close icon"}),`
`,e.jsx(n.li,{children:"Best for actions requiring deliberate interaction"}),`
`]}),`
`,e.jsx(n.h2,{id:"width",children:"Width"}),`
`,e.jsxs(n.p,{children:["The default popover width is 240px. You can override it using the CSS custom property ",e.jsx(n.code,{children:"--ifx-popover-width"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`ifx-popover {
  --ifx-popover-width: 320px;
}
`})}),`
`,e.jsx(n.h2,{id:"initial-open-state",children:"Initial Open State"}),`
`,e.jsxs(n.p,{children:["You can render the popover initially open using the ",e.jsx(n.code,{children:"open"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ifx-popover
  popover-title="Initially Open"
  text="This popover starts open."
  open
>
  <ifx-button>Trigger</ifx-button>
</ifx-popover>
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"content-guidelines",children:"Content Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep it concise"})," - Popovers should contain focused, actionable content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clear hierarchy"})," - Use title for the main message, text for details"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Limit actions"})," - Include 2-3 actions maximum to avoid overwhelming users"]}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Include meaningful ",e.jsx(n.code,{children:"aria-label"})," for screen readers"]}),`
`,e.jsx(n.li,{children:"Ensure keyboard navigation works properly"}),`
`,e.jsx(n.li,{children:"Actions should be keyboard accessible"}),`
`,e.jsx(n.li,{children:"Close button should be focusable"}),`
`]}),`
`,e.jsx(n.h3,{id:"mobile-considerations",children:"Mobile Considerations"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Account for smaller screens when positioning"}),`
`,e.jsx(n.li,{children:"Ensure touch targets are appropriately sized"}),`
`,e.jsx(n.li,{children:"Consider using modals for complex interactions on mobile"}),`
`]}),`
`,e.jsx(n.h2,{id:"common-patterns",children:"Common Patterns"}),`
`,e.jsx(n.h3,{id:"confirmation-dialog",children:"Confirmation Dialog"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ifx-popover
  popover-title="Delete Item"
  text="This action cannot be undone. Are you sure?"
  id="confirm-delete"
>
  <ifx-button variant="danger">Delete</ifx-button>
  <div slot="content" style="display: flex; gap: 8px;">
    <ifx-button>Confirm</ifx-button>
    <ifx-button variant="secondary">Cancel</ifx-button>
  </div>
</ifx-popover>
`})}),`
`,e.jsx(n.h2,{id:"programmatic-control",children:"Programmatic Control"}),`
`,e.jsx(n.p,{children:"The popover can be controlled programmatically using methods:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const popover = document.querySelector('ifx-popover');

// Show the popover
await popover.show();

// Hide the popover
await popover.hide();

// Toggle visibility
await popover.toggle();
`})}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Event"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Detail"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ifxOpen"})}),e.jsx(n.td,{children:"Emitted when the popover opens"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ trigger: HTMLElement | null }"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ifxClose"})}),e.jsx(n.td,{children:"Emitted when the popover closes"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"void"})})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`document.querySelector('ifx-popover').addEventListener('ifxOpen', (event) => {
  console.log('Popover opened, trigger:', event.detail.trigger);
});
`})})]})}function p(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{p as default};
