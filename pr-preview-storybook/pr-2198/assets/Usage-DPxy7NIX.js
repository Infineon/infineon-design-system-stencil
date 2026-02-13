import{j as e,M as r}from"./blocks-BlYqE6iC.js";import{useMDXComponents as s}from"./index-D-Kmgx3n.js";import{T as o}from"./text-field.stories-BWkzF7G2.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DQE2zg3a.js";import"./icons-C_9-zI1i.js";const a=""+new URL("text-field-anatomy-CAQhsBgJ.png",import.meta.url).href,l=""+new URL("text-field-sizes-fJcVDrvy.png",import.meta.url).href,d=""+new URL("text-field-states-eknAHqkS.png",import.meta.url).href;function i(n){const t={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o}),`
`,e.jsx(t.h1,{id:"text-field",children:"Text Field"}),`
`,e.jsx(t.p,{children:"The text field component allows users to input textual data into a form or application. It varies in width depending on what type of input is required."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsx(t.tr,{children:e.jsx(t.th,{children:"Resources"})})}),e.jsx(t.tbody,{children:e.jsx(t.tr,{children:e.jsx(t.td,{children:e.jsx(t.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2389-2467",rel:"nofollow",children:"Figma text field component →"})})})})]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"If it requires user input of textual information like login- and contact forms."}),`
`]}),`
`,e.jsx(t.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"If the users have to input more than one line of text. Instead use a text area."}),`
`,e.jsx(t.li,{children:"If the users have to input something from a predefined list. Instead use a select box."}),`
`,e.jsx(t.li,{children:"For a search bar. Instead use the search bar component."}),`
`]}),`
`,e.jsx(t.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:a,alt:"Text Field Anatomy"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Label (1)"}),e.jsx(t.br,{}),`
`,"Use a label to describe the purpose of the text field to the user."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Required field (2)"}),e.jsx(t.br,{}),`
`,"Mark a text field as required when the information entered into the Text field is necessary for the user to proceed with a specific action, such as submitting a form. It is indicated with an asterisk (*) next to the label."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Icon (3)"}),e.jsx(t.br,{}),`
`,"In some scenarios it can be useful to use an icon right next to the placeholder."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Field (4)"}),e.jsx(t.br,{}),`
`,"The container where a user inputs data."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Placeholder text (5)"}),e.jsx(t.br,{}),`
`,"Placeholder text is the text that is displayed inside the text field before the user enters any information. Use it to provide an example or to give users an idea of the type of information they should input."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Optional field (6)"}),e.jsx(t.br,{}),`
`,"Mark a text field as optional when the information entered into the text field is not necessary for the user to proceed with a specific action."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Caption text (7)"}),e.jsx(t.br,{}),`
`,"Use caption text to provide additional context or information about the text field. It can be used to provide examples or instructions for filling out the text field."]}),`
`,e.jsx(t.h2,{id:"states",children:"States"}),`
`,e.jsx("img",{src:d,alt:"Text Field States"}),`
`,e.jsx(t.h2,{id:"size",children:"Size"}),`
`,e.jsx(t.p,{children:"There are two text field sizes: 36px and 40px. This will give you more flexibility in structuring layouts due to e.g. different button heights. It's important to maintain uniform field height while combining form elements on a single page."}),`
`,e.jsx("img",{src:l,alt:"Text Field Sizes"})]})}function j(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{j as default};
