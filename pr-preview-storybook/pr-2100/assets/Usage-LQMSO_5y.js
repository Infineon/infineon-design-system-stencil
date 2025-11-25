import{j as e,M as s}from"./WithTooltip-SK46ZJ2J-DFS1GOK_.js";import{useMDXComponents as r}from"./index-DPVndWBa.js";import{D as a}from"./date-picker.stories-BB2MaKUj.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-D9lRGvzE.js";import"./_commonjsHelpers-CqkleIqs.js";const o=""+new URL("date-picker-anatomy-B2fPMv8G.png",import.meta.url).href,d=""+new URL("date-picker-sizes-C_88WSmN.png",import.meta.url).href,c=""+new URL("date-picker-states-BTrB45zR.png",import.meta.url).href,l=""+new URL("date-picker-mouse-interaction-C9xbnBLq.png",import.meta.url).href;function i(t){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(n.h1,{id:"date-picker",children:"Date Picker"}),`
`,e.jsx(n.p,{children:"The date picker allows users to select a date from a combination of an input field and a calendar view. It is essential for our applications where date input is required."}),`
`,e.jsxs(n.p,{children:[`| Resources                                                                                                                      |
|--------------------------------------------------------------------------------------------------------------------------------|
| `,e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=53965-18132",rel:"nofollow",children:"Figma date picker component →"})," |"]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If you want to select a date or a range of dates by allow users to navigate through months and years."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If the date options are limited to a few predefined values, a dropdown menu or a set of radio buttons might be more appropriate than a date picker."}),`
`]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:o,alt:"Date Picker Anatomy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Label (1)"}),e.jsx(n.br,{}),`
`,"Use a label to describe the purpose of the date field to the user."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Required field (2)"}),e.jsx(n.br,{}),`
`,"Mark a date field as required when the information is necessary for the user to proceed with a specific action, such as submitting a form. It is indicated with an asterisk (*) next to the label."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Input field (3)"}),e.jsx(n.br,{}),`
`,"For this ",e.jsx(n.code,{children:"<input>"})," we use the ",e.jsx(n.code,{children:'type="date"'})," which enables users to enter a date."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date icon (4)"}),e.jsx(n.br,{}),`
`,"By clicking the date icon a calendar view will appear."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Date element (5)"}),e.jsx(n.br,{}),`
`,"Each date element (e.g. DD, MM, YYYY) is clickable and editable via keyboard."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Caption text (6)"}),e.jsx(n.br,{}),`
`,"If required, use caption text to provide additional context or information about the date field."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Time element (7)"}),e.jsx(n.br,{}),`
`,"Each time element (e.g. --:--) is clickable and editable via keyboard."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Calendar view (8)"}),e.jsx(n.br,{}),`
`,"The calendar view provides a visual representation of a calendar, enabling users to navigate through months and years to select a specific date."]}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx("img",{src:c,alt:"Date Picker States"}),`
`,e.jsx(n.h2,{id:"size",children:"Size"}),`
`,e.jsx(n.p,{children:"There are two date field sizes: 36px and 40px. This will give you more flexibility in structuring layouts due to e.g. different button heights. It's important to maintain uniform field height while combining form elements on a single page."}),`
`,e.jsx("img",{src:d,alt:"Date Picker Sizes"}),`
`,e.jsx(n.h2,{id:"mouse-interaction",children:"Mouse interaction"}),`
`,e.jsx("img",{src:l,alt:"Date Picker Mouse Interaction"})]})}function f(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{f as default};
