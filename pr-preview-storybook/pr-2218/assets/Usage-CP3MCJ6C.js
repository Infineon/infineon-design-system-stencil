import{j as e,M as r}from"./blocks-CERx25n9.js";import{useMDXComponents as o}from"./index-HlHJfxpl.js";import{S as i}from"./segmented-control.stories-C8fsOCab.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B2pKNNw0.js";import"./icons-DyNdhNdc.js";const l=""+new URL("segmented-control-states-DpnLILBn.png",import.meta.url).href,a=""+new URL("segmented-control-anatomy-lWP0fyM7.png",import.meta.url).href;function s(t){const n={a:"a",blockquote:"blockquote",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i}),`
`,e.jsx(n.h1,{id:"segmented-control",children:"Segmented Control"}),`
`,e.jsx(n.p,{children:"A segmented control is a horizontal set of three or more segments, each functioning as a mutually exclusive button. It allows users to toggle between different views or states within the same context without leaving the current screen."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsx(n.tr,{children:e.jsx(n.th,{children:"Resources"})})}),e.jsx(n.tbody,{children:e.jsx(n.tr,{children:e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=63374-105",rel:"nofollow",children:"Figma segmented control component →"})})})})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When users need to select one option from a small set (up to six) of related, mutually exclusive choices."}),`
`,e.jsx(n.li,{children:"When toggling between different views or data representations within the same context."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When the number of options exceeds six. Use a dropdown menu instead."}),`
`,e.jsx(n.li,{children:'For actions that perform functions like "Add" or "Edit". Use buttons for such actions instead.'}),`
`,e.jsx(n.li,{children:"When each option leads to entirely different views or pages."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"We recommend to use a maximum set of six controls."}),`
`]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:a,alt:"Segmented Control Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Group label (1)"}),e.jsx(n.br,{}),`
`,"The group label is optional. It is located above the segmented control component."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Segment container (2)"}),e.jsx(n.br,{}),`
`,'The container that holds the segments and the active indicator."']}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Single segment (3)"}),e.jsx(n.br,{}),`
`,"A single segment item container."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Label (4)"}),e.jsx(n.br,{}),`
`,"Use a label to describe the purpose of the single segment to the user."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icon (5)"}),e.jsx(n.br,{}),`
`,"If needed an icon can be used to provide supportive information. It is also possible to provide an icon only segmented control. Icons should be self-explanatory e.g. a star rating."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Caption text (6)"}),e.jsx(n.br,{}),`
`,"Use an optional caption text to provide additional context or information about the segmented control."]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx("img",{src:l,alt:"Segmented Control States"}),`
`,e.jsx(n.h2,{id:"use-case-examples",children:"Use case examples"}),`
`,e.jsx(n.h3,{id:"task-complexety",children:"Task complexety"}),`
`,e.jsx(n.p,{children:"Segmented controls can be used to quickly categorize tasks by their level of complexity. Selectable segments are: Low, Medium, High"}),`
`,e.jsx(n.h3,{id:"task-location",children:"Task location"}),`
`,e.jsx(n.p,{children:"Use a segmented control to define the priority or suitability of a task’s location. Selectable segments are: Best, Mid, High"}),`
`,e.jsx(n.h3,{id:"time-range",children:"Time range"}),`
`,e.jsx(n.p,{children:"A segmented control can offer users a fast way to switch between different time intervals in charts, reports, or data views. Selectable segments are: Day, Week, Month, Year, 3 Years, 5 Years"})]})}function j(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{j as default};
