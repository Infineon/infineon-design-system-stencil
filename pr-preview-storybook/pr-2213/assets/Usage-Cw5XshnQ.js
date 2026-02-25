import{j as e,M as s}from"./blocks-Dhrk5atU.js";import{useMDXComponents as r}from"./index-DvzeZqEi.js";import{D as a}from"./date-picker.stories-DlJMGz1D.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BS584tZU.js";const o=""+new URL("date-picker-anatomy-B2fPMv8G.png",import.meta.url).href,d=""+new URL("date-picker-sizes-C_88WSmN.png",import.meta.url).href,c=""+new URL("date-picker-states-BTrB45zR.png",import.meta.url).href,l=""+new URL("date-picker-mouse-interaction-C9xbnBLq.png",import.meta.url).href;function i(n){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a}),`
`,e.jsx(t.h1,{id:"date-picker",children:"Date Picker"}),`
`,e.jsx(t.p,{children:"The date picker allows users to select a date from a combination of an input field and a calendar view. It is essential for our applications where date input is required."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsx(t.tr,{children:e.jsx(t.th,{children:"Resources"})})}),e.jsx(t.tbody,{children:e.jsx(t.tr,{children:e.jsx(t.td,{children:e.jsx(t.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=53965-18132",rel:"nofollow",children:"Figma date picker component →"})})})})]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"If you want to select a date or a range of dates by allow users to navigate through months and years."}),`
`]}),`
`,e.jsx(t.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"If the date options are limited to a few predefined values, a dropdown menu or a set of radio buttons might be more appropriate than a date picker."}),`
`]}),`
`,e.jsx(t.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:o,alt:"Date Picker Anatomy"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Label (1)"}),e.jsx(t.br,{}),`
`,"Use a label to describe the purpose of the date field to the user."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Required field (2)"}),e.jsx(t.br,{}),`
`,"Mark a date field as required when the information is necessary for the user to proceed with a specific action, such as submitting a form. It is indicated with an asterisk (*) next to the label."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Input field (3)"}),e.jsx(t.br,{}),`
`,"For this ",e.jsx(t.code,{children:"<input>"})," we use the ",e.jsx(t.code,{children:'type="date"'})," which enables users to enter a date."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Date icon (4)"}),e.jsx(t.br,{}),`
`,"By clicking the date icon a calendar view will appear."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Date element (5)"}),e.jsx(t.br,{}),`
`,"Each date element (e.g. DD, MM, YYYY) is clickable and editable via keyboard."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Caption text (6)"}),e.jsx(t.br,{}),`
`,"If required, use caption text to provide additional context or information about the date field."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Time element (7)"}),e.jsx(t.br,{}),`
`,"Each time element (e.g. --:--) is clickable and editable via keyboard."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Calendar view (8)"}),e.jsx(t.br,{}),`
`,"The calendar view provides a visual representation of a calendar, enabling users to navigate through months and years to select a specific date."]}),`
`,e.jsx(t.h2,{id:"states",children:"States"}),`
`,e.jsx("img",{src:c,alt:"Date Picker States"}),`
`,e.jsx(t.h2,{id:"size",children:"Size"}),`
`,e.jsx(t.p,{children:"There are two date field sizes: 36px and 40px. This will give you more flexibility in structuring layouts due to e.g. different button heights. It's important to maintain uniform field height while combining form elements on a single page."}),`
`,e.jsx("img",{src:d,alt:"Date Picker Sizes"}),`
`,e.jsx(t.h2,{id:"mouse-interaction",children:"Mouse interaction"}),`
`,e.jsx("img",{src:l,alt:"Date Picker Mouse Interaction"})]})}function f(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{f as default};
