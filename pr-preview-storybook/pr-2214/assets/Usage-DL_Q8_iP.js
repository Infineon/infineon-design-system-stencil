import{j as e,M as o}from"./blocks-s8V8vAPY.js";import{useMDXComponents as i}from"./index-_RPSzgFa.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DhuzaRAJ.js";const l=""+new URL("select-sizes-qCm3BNid.png",import.meta.url).href,r=""+new URL("select-field-anatomy-DbLBY75m.png",import.meta.url).href,c=""+new URL("select-field-mouse-interaction-D8JkTYR3.png",import.meta.url).href,a=""+new URL("select-single-options-states-COCfONds.png",import.meta.url).href,h=""+new URL("select-single-states-C9HIrZFB.png",import.meta.url).href,d=""+new URL("select-multi-partial-BSxoVmor.png",import.meta.url).href,p=""+new URL("select-multi-options-states-D_W23MvJ.png",import.meta.url).href,x=""+new URL("select-multi-states-BMhC4Z1l.png",import.meta.url).href;function s(n){const t={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Select/Usage"}),`
`,e.jsx(t.h1,{id:"select",children:"Select"}),`
`,e.jsx(t.p,{children:"The select component provides users with the ability to choose one or multiple options from a predefined list in a dropdown format. It offers different variations, including select, multi select, and combo box, to cater to various selection needs."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsx(t.tr,{children:e.jsx(t.th,{children:"Resources"})})}),e.jsx(t.tbody,{children:e.jsx(t.tr,{children:e.jsx(t.td,{children:e.jsx(t.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=31285-18615",rel:"nofollow",children:"Figma select component →"})})})})]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"When users need to choose one or multiple options from a predefined list, using a select field."}),`
`]}),`
`,e.jsx(t.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"When users want to navigate to a different page or section. Use a submenu component instead."}),`
`,e.jsx(t.li,{children:"If you have large datasets it can become overwhelming. Instead use filter components or paginated table lists."}),`
`]}),`
`,e.jsx(t.h2,{id:"select-field",children:"Select Field"}),`
`,e.jsx(t.p,{children:"The select field looks similar to the text field, but has an icon on the right indicating a dropdown function."}),`
`,e.jsx(t.h3,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:r,alt:"Select Field Anatomy"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Label (1)"}),e.jsx(t.br,{}),`
`,"Use a label to describe the purpose of the select field to the user."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Required field (2)"}),e.jsx(t.br,{}),`
`,"Mark a select field as required when the information is necessary for the user to proceed with a specific action, such as submitting a form. It is indicated with an asterisk (*) next to the label."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Field (3)"}),e.jsx(t.br,{}),`
`,"The container where a user can click or tap."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Dropdown Arrow (4)"}),e.jsx(t.br,{}),`
`,"The dropdown arrow is a visual indicator (chevron-down), that appears on the right side of the select field. It suggests to users that they can click or tap on the field to reveal the available options."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Icon (5)"}),e.jsx(t.br,{}),`
`,"In some scenarios it can be useful to use an icon before the placeholder."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Placeholder text (6)"}),e.jsx(t.br,{}),`
`,"Placeholder text is the text that is displayed inside the select field before the user select any option inside the menu. Use it to provide an example or to give users an idea of the type of information they can select."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Optional field (7)"}),e.jsx(t.br,{}),`
`,"Mark a text field as optional when the information entered into the text field is not necessary for the user to proceed with a specific action."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Caption text (8)"}),e.jsx(t.br,{}),`
`,"Use caption text to provide additional context or information about the select field. It can be used to provide examples or instructions for selecting an option. When the dropdown menu appears, the caption text is behind it."]}),`
`,e.jsx(t.h3,{id:"mouse-interaction",children:"Mouse interaction"}),`
`,e.jsx(t.p,{children:"Users can interact with the Select Field in different ways. To open the dropdown list they can either click on the visible options or on the dropdown arrow. They can also click on the reset icon to reset the entries with one click. All options in the list will be unchecked."}),`
`,e.jsx("img",{src:c,alt:"Select Field Mouse Interaction"}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.h3,{id:"single-select",children:"Single Select"}),`
`,e.jsx(t.p,{children:"The single select variation allows users to choose only one option from a list of choices. The selected option is displayed within the closed select field. For long lists users can use the search function."}),`
`,e.jsx(t.h4,{id:"states",children:"States"}),`
`,e.jsx("img",{src:h,alt:"Select Single States"}),`
`,e.jsx(t.h3,{id:"multi-select",children:"Multi Select"}),`
`,e.jsx(t.p,{children:"The multi select variation enables users to select multiple options simultaneously from a list of choices. It presents a dropdown menu with checkboxes next to each option. Users can make their selections by checking the desired options. The selected options are displayed within the closed select field. For long lists users can use the search function."}),`
`,e.jsx(t.h4,{id:"states-1",children:"States"}),`
`,e.jsx("img",{src:x,alt:"Select Multi States"}),`
`,e.jsx(t.h2,{id:"select-option-items",children:"Select Option Items"}),`
`,e.jsx(t.p,{children:"For the select field the are only two option items for the option list available."}),`
`,e.jsx(t.h3,{id:"single-select-1",children:"Single Select"}),`
`,e.jsx(t.p,{children:"When a user can choose only one option, a single select option item is the right one. By selecting an option, it is highlighted with our brand color and checkmark icon."}),`
`,e.jsx(t.h4,{id:"states-2",children:"States"}),`
`,e.jsx("img",{src:a,alt:"Select Single Options States"}),`
`,e.jsx(t.h3,{id:"multi-select-1",children:"Multi Select"}),`
`,e.jsx(t.p,{children:"When a user can choose multiple options, a multi select option item is the right one. Here the user is shown a list of checkboxes that he can select."}),`
`,e.jsx(t.h4,{id:"states-3",children:"States"}),`
`,e.jsx("img",{src:p,alt:"Select Multi Options States"}),`
`,e.jsx(t.h4,{id:"partial-checkbox",children:"Partial Checkbox"}),`
`,e.jsx(t.p,{children:"In the multi-select item there are two ways to show the user a list of checkboxes. Besides the simple one, you can also show a nested list. This can be, for example, a product family that contains several products. It is important that only the nested checkbox (level 2) is shown in the select field. The root checkbox (Level 1) is only used for orientation and is not displayed in the Select Field."}),`
`,e.jsx("img",{src:d,alt:"Select Multi Partial"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Multi Select - Level 1 (1)"}),e.jsx(t.br,{}),`
`,"Users can click this checkbox to select all child checkbox options at once. Alternatively, users can select individual child checkbox options. As long as not all child checkbox options are selected, the parent checkbox is displayed as partial."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Multi Select - Level 2 (2)"}),e.jsx(t.br,{}),`
`,"Selected child options are also displayed in the select field and separated by a comma. Only as many options are displayed as space is available. All other options are truncated with ellipsis."]}),`
`,e.jsx(t.h2,{id:"size",children:"Size"}),`
`,e.jsx(t.p,{children:"There are two select field sizes: 36px and 40px. This will give you more flexibility in structuring layouts due to e.g. different button heights. It's important to maintain uniform field height while combining form elements on a single page."}),`
`,e.jsx("img",{src:l,alt:"Select Size"})]})}function b(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{b as default};
