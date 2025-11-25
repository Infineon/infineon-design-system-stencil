import{j as e,M as s}from"./WithTooltip-SK46ZJ2J-Dk6xP2TK.js";import{useMDXComponents as i}from"./index-Ba6_DNLG.js";import{R as r}from"./radio-button.stories-BI7gjgpT.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-1HBkPUig.js";import"./_commonjsHelpers-CqkleIqs.js";const a=""+new URL("radio-button-sizes-CQHYpGKF.png",import.meta.url).href,l=""+new URL("radio-button-anatomy-BsEXSNRV.png",import.meta.url).href,d=""+new URL("radio-button-group-block-CGZ8CUYJ.png",import.meta.url).href,c=""+new URL("radio-button-group-inline-pNLO4k2C.png",import.meta.url).href,u=""+new URL("radio-button-states-Kb3Yrr07.png",import.meta.url).href,h=""+new URL("radio-button-mouse-interaction-WhRVs1Bd.png",import.meta.url).href,p=""+new URL("radio-button-overflow-text-xvIB9Rn1.png",import.meta.url).href,m=""+new URL("radio-button-group-inline-states-Cl63s_ip.png",import.meta.url).href,x=""+new URL("radio-button-group-block-states-BpIESHxu.png",import.meta.url).href;function o(t){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r}),`
`,e.jsx(n.h1,{id:"radio-button",children:"Radio Button"}),`
`,e.jsx(n.p,{children:"The radio component is used to allow users to select a single option from a predefined list. It represents a mutually exclusive choice, where only one option can be selected at a time."}),`
`,e.jsxs(n.p,{children:[`| Resources                                                                                                                      |
|--------------------------------------------------------------------------------------------------------------------------------|
| `,e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=38242-6770",rel:"nofollow",children:"Figma radio button component →"})," |"]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When you want to provide users with the ability to select a single option from a list."}),`
`,e.jsx(n.li,{children:"When the options are mutually exclusive, and selecting one option automatically deselects the others."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When multiple selections are allowed. In such cases, checkboxes are more appropriate."}),`
`,e.jsx(n.li,{children:"If the options are independent and not mutually exclusive, checkboxes should be used instead."}),`
`]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:l,alt:"Radio Button anatomy",width:"50%"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio Button input (1)"}),e.jsx(n.br,{}),`
`,"A radio button indicating the appropriate state. By default an option is selected. In some UX cases it is also possible to let the state unselected."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio Button label (2)"}),e.jsx(n.br,{}),`
`,"Provides an information you want to select or unselect."]}),`
`,e.jsx(n.h2,{id:"size",children:"Size"}),`
`,e.jsx(n.p,{children:"The radio button component in our design system is available in two different sizes: 20px and 24px. These sizes are designed to provide flexibility and meet various design requirements."}),`
`,e.jsx("img",{src:a,alt:"Radio Button sizes"}),`
`,e.jsx(n.h2,{id:"grouping-radio-buttons",children:"Grouping radio buttons"}),`
`,e.jsx(n.p,{children:"Deciding whether to place radio buttons in an inline or block layout depends on the specific context and requirements of your user interface."}),`
`,e.jsx(n.h3,{id:"inline",children:"Inline"}),`
`,e.jsx("img",{src:c,alt:"Radio Button grouping inline",width:"50%"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use to save space when you have limited screen real estate or need to place other elements alongside the radio buttons."}),`
`,e.jsx(n.li,{children:"Use when the options in your radio button group have short labels, an inline layout can provide a more compact and visually streamlined presentation."}),`
`,e.jsx(n.li,{children:"Use to visually group related options or indicate that they belong to the same category."}),`
`]}),`
`,e.jsx(n.h3,{id:"block",children:"Block"}),`
`,e.jsx("img",{src:d,alt:"Radio Button grouping block",width:"50%"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use for long radio button labels."}),`
`,e.jsx(n.li,{children:"Use to easily scan and compare the options from top to bottom."}),`
`,e.jsx(n.li,{children:"Use to visually separate radio button options."}),`
`]}),`
`,e.jsx(n.h2,{id:"mouse-interaction",children:"Mouse interaction"}),`
`,e.jsx(n.p,{children:"To select the radio button, users have two options: they can either directly click on the radio button or click on the label."}),`
`,e.jsx("img",{src:h,alt:"Radio Button mouse interaction",width:"50%"}),`
`,e.jsx(n.h2,{id:"overflow-content",children:"Overflow content"}),`
`,e.jsx(n.p,{children:"When the content associated with a radio button option is too long or exceeds the available space, it can lead to an overflow scenario. In that case the long labels may wrap to a second line."}),`
`,e.jsx("img",{src:p,alt:"Radio Button overflow content",width:"50%"}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx("img",{src:u,alt:"Radio Button states"}),`
`,e.jsx(n.h2,{id:"group-states",children:"Group States"}),`
`,e.jsx(n.p,{children:"Radiobutton groups can receive the following states: default, disabled, selected and error. The group label and the caption can be set if needed."}),`
`,e.jsx(n.h2,{id:"inline-1",children:"Inline"}),`
`,e.jsx("img",{src:m,alt:"Radio Button Group Inline states"}),`
`,e.jsx(n.h2,{id:"block-1",children:"Block"}),`
`,e.jsx("img",{src:x,alt:"Radio Button Group Block states"})]})}function B(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{B as default};
