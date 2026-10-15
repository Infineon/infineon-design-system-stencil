import{u as l,j as e,M as c,C as s,a as r}from"./blocks-BeTgadLo.js";import{S as d,D as o,W as h}from"./select.stories-hYFF3tOn.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CoTuxfSi.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(n.h1,{id:"single-select",children:"Single Select"}),`
`,e.jsx(s,{of:o,sourceState:"shown"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(s,{of:o,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"with-groups",children:"With Groups"}),`
`,e.jsx(s,{of:h,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsx(n.h3,{id:"options",children:"Options"}),`
`,e.jsxs(n.p,{children:["Options are provided as slotted ",e.jsx(n.code,{children:"ifx-select-option"}),` children. Wrap options in an
`,e.jsx(n.code,{children:"ifx-select-group"})," to render a non-selectable, greyed group header (like HTML ",e.jsx(n.code,{children:"<optgroup>"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ifx-select label="KPI" show-search="true">
  <ifx-select-option value="all">All KPIs</ifx-select-option>

  <ifx-select-group label="Revenue">
    <ifx-select-option value="rev-total">Total revenue</ifx-select-option>
    <ifx-select-option value="rev-region" selected>Revenue by region</ifx-select-option>
  </ifx-select-group>

  <ifx-select-group label="Costs" disabled>
    <ifx-select-option value="cost-op">Operating costs</ifx-select-option>
  </ifx-select-group>
</ifx-select>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Preselect an option by setting ",e.jsx(n.code,{children:"value"})," on ",e.jsx(n.code,{children:"ifx-select"}),", or by adding the ",e.jsx(n.code,{children:"selected"}),`
attribute to an `,e.jsx(n.code,{children:"ifx-select-option"}),"."]}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:"disabled"})," on an ",e.jsx(n.code,{children:"ifx-select-option"})," (or on a whole ",e.jsx(n.code,{children:"ifx-select-group"}),`) to make it
non-interactive.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"custom-events",children:"Custom events"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ifxSelect"})," — emitted when the selection changes. ",e.jsx(n.code,{children:"event.detail"}),` is an object with the
`,e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"label"})," of the selected option, or ",e.jsx(n.code,{children:"null"})," when the selection is cleared."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ifxClear"}),` — emitted before the clear control removes the current selection. Call
`,e.jsx(n.code,{children:"event.preventDefault()"})," to cancel the clear operation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ifxInput"})," — emitted every time the user types into the search field; ",e.jsx(n.code,{children:"event.detail"}),` is
the search string.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ifxOpen"})," — emitted when the dropdown opens (",e.jsx(n.code,{children:"true"}),") or closes (",e.jsx(n.code,{children:"false"}),")."]}),`
`]})]})}function f(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{f as default};
