import{j as i,M as a}from"./blocks-BjIMDSN5.js";import{useMDXComponents as o}from"./index-BUWltnSP.js";import{C as h}from"./chip.stories-D28xklAq.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C96EdJSF.js";import"./icons-DyNdhNdc.js";const r=""+new URL("chip-anatomy-CcAEUQyE.png",import.meta.url).href,l=""+new URL("chip-affix-add-states-CwgVg8Jr.png",import.meta.url).href,p=""+new URL("chip-affix-add-Cjg7dbrE.png",import.meta.url).href,c=""+new URL("chip-affix-removable-states-7DIGnvKh.png",import.meta.url).href,d=""+new URL("chip-affix-removable-BaMW44vF.png",import.meta.url).href,m=""+new URL("chip-default-states-BNOULZYC.png",import.meta.url).href,x=""+new URL("chip-default-Cp_a-tib.png",import.meta.url).href,f=""+new URL("chip-group-BcF2ILiH.png",import.meta.url).href,u=""+new URL("chip-mouse-interaction-_-3gXk6i.png",import.meta.url).href,g=""+new URL("chip-sizes-Dwtt9uKg.png",import.meta.url).href,b=""+new URL("dropdown-chip-visible-label-option-highlight-states-y74x0GIs.png",import.meta.url).href,w=""+new URL("dropdown-chip-visible-label-option-highlight-Ck_4VDax.png",import.meta.url).href,n=""+new URL("dropdown-chip-visible-label-option-states-63wHCYPa.png",import.meta.url).href,j=""+new URL("dropdown-chip-visible-label-option-CalYfPp4.png",import.meta.url).href,v=""+new URL("dropdown-chip-visible-label-8dpIxhyi.png",import.meta.url).href,C=""+new URL("dropdown-chip-visible-single-option-states-DU9ygdjo.png",import.meta.url).href,y=""+new URL("dropdown-chip-visible-single-option-C7toq5ru.png",import.meta.url).href;function s(t){const e={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(a,{of:h}),`
`,i.jsx(e.h1,{id:"chip",children:"Chip"}),`
`,i.jsx(e.p,{children:"The chip component presents compact information in an easily consumable format. It allows users to quickly recognize and interact with various types of content, such as filters or categories."}),`
`,i.jsxs(e.table,{children:[i.jsx(e.thead,{children:i.jsx(e.tr,{children:i.jsx(e.th,{children:"Resources"})})}),i.jsx(e.tbody,{children:i.jsx(e.tr,{children:i.jsx(e.td,{children:i.jsx(e.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=17762-11219",rel:"nofollow",children:"Figma chip component →"})})})})]}),`
`,i.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,i.jsx(e.h3,{id:"when-to-use",children:"When to use"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"If you want to filter and categorize content."}),`
`]}),`
`,i.jsx(e.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"If the content within the chip is dynamically changing or frequently updated."}),`
`,i.jsx(e.li,{children:"If you need to display a large amount of complex data or detailed information. Use other components like tables of lists."}),`
`]}),`
`,i.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,i.jsx("img",{src:r,alt:"Chip Anatomy"}),`
`,i.jsxs(e.p,{children:[i.jsx(e.strong,{children:"Chip Container (1)"}),i.jsx(e.br,{}),`
`,"The entire chip, including its label, icons, and any additional styling, is contained within a visually distinct container."]}),`
`,i.jsxs(e.p,{children:[i.jsx(e.strong,{children:"Dropdown Icon (2)"}),i.jsx(e.br,{}),`
`,"Indicates that there are additional options related to the chip. Clicking or tapping on the dropdown icon reveals a select list with different options to select."]}),`
`,i.jsxs(e.p,{children:[i.jsx(e.strong,{children:"Label Text (3)"}),i.jsx(e.br,{}),`
`,"This is the primary text that describes the selected item(s)."]}),`
`,i.jsxs(e.p,{children:[i.jsx(e.strong,{children:"Option Text (4)"}),i.jsx(e.br,{}),`
`,"In some chip variants the selected option is also visible."]}),`
`,i.jsxs(e.p,{children:[i.jsx(e.strong,{children:"Number Indicator (5)"}),i.jsx(e.br,{}),`
`,"Provides the information about how many selected options are inside the chip. It appears when more than two options were selected."]}),`
`,i.jsxs(e.p,{children:[i.jsx(e.strong,{children:"Dismiss Icon (6)"}),i.jsx(e.br,{}),`
`,"The dismiss icon gives the opportunity to reset the users' selection with one click/tap and set the chip to its default state."]}),`
`,i.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,i.jsx(e.h3,{id:"default-chip",children:"Default Chip"}),`
`,i.jsx(e.p,{children:"Simple chip variant to filter correspondent content for example show different contacts filtered by country options."}),`
`,i.jsx("img",{src:x,alt:"Chip Default"}),`
`,i.jsx(e.h4,{id:"states",children:"States"}),`
`,i.jsx("img",{src:m,alt:"Chip Default States"}),`
`,i.jsx(e.h3,{id:"affix-chip",children:"Affix Chip"}),`
`,i.jsx(e.p,{children:"To add and remove specific options from a chip group for example registering to different topics with newsletter mails. It is possible to predefine some options as default. Further topic options can be selected with the add dropdown chip. Selected or already visible topics inside the chip group are not visible in the dropdown menu anymore. Also selected options can be removed by clicking the dismiss icon. By doing so dismissed options appear as visible options in the dropdown menu."}),`
`,i.jsx(e.h4,{id:"add",children:"Add"}),`
`,i.jsx("img",{src:p,alt:"Chip Affx Add"}),`
`,i.jsx(e.h5,{id:"states-1",children:"States"}),`
`,i.jsx("img",{src:l,alt:"Chip Affx Add States"}),`
`,i.jsx(e.h4,{id:"remove",children:"Remove"}),`
`,i.jsx("img",{src:d,alt:"Chip Affx Removeable"}),`
`,i.jsx(e.h5,{id:"states-2",children:"States"}),`
`,i.jsx("img",{src:c,alt:"Chip Affx Removeable States"}),`
`,i.jsx(e.h3,{id:"dropdown-chip",children:"Dropdown Chip"}),`
`,i.jsx(e.p,{children:"By clicking on the dropdown chip within a chip group, a select list is displayed. The list can either display single or multi select options. This gives you the possibility to filter content in more detail and thus reach the desired result more quickly."}),`
`,i.jsx(e.h4,{id:"visible-option",children:"Visible Option"}),`
`,i.jsx(e.p,{children:"This chip variant comes with a single select list. The selected option is visible inside the chip."}),`
`,i.jsx("img",{src:y,alt:"Chip Dropdown with visible option"}),`
`,i.jsx(e.h5,{id:"states-3",children:"States"}),`
`,i.jsx("img",{src:C,alt:"Chip Dropdown with visible option states"}),`
`,i.jsx(e.h4,{id:"visible-label",children:"Visible Label"}),`
`,i.jsx(e.p,{children:"This chip variant comes with a multi select list. The selected option is not visible inside the chip."}),`
`,i.jsx("img",{src:v,alt:"Chip Dropdown with visible label"}),`
`,i.jsx(e.h5,{id:"states-4",children:"States"}),`
`,i.jsx("img",{src:n,alt:"Chip Dropdown with visible label states"}),`
`,i.jsx(e.h4,{id:"visible-label--option",children:"Visible Label & Option"}),`
`,i.jsx(e.p,{children:"This chip variant is available in two different appearances."}),`
`,i.jsx(e.h5,{id:"example-a",children:"Example A"}),`
`,i.jsx(e.p,{children:"The simple one shows a maximum of only one option and is displayed with a thin outline. This variant can be used, for example, as a stand-alone chip variant to sort content by date by using a single select list."}),`
`,i.jsx("img",{src:j,alt:"Chip Dropdown with visible label and option"}),`
`,i.jsx(e.h6,{id:"example-a-states",children:"Example A States"}),`
`,i.jsx("img",{src:n,alt:"Chip Dropdown with visible label and option states"}),`
`,i.jsx(e.h5,{id:"example-b",children:"Example B"}),`
`,i.jsx(e.p,{children:"The other variant offers much more in-depth filtering options and is displayed with a thicker outline. In addition, it is equipped with a dismiss icon to reset the selected options with one click. A maximum of two options are allowed in the visible area. Further options are displayed as numbers using a number indicator component."}),`
`,i.jsx("img",{src:w,alt:"Chip Dropdown with visible label and option highlight"}),`
`,i.jsx(e.h6,{id:"example-b-states",children:"Example B States"}),`
`,i.jsx("img",{src:b,alt:"Chip Dropdown with visible label and option highlight states"}),`
`,i.jsx(e.h2,{id:"chip-group",children:"Chip Group"}),`
`,i.jsx(e.p,{children:"In most cases, the chip component is used as a chip group, which also exists as a component."}),`
`,i.jsx("img",{src:f,alt:"Chip Group"}),`
`,i.jsx(e.h2,{id:"size",children:"Size"}),`
`,i.jsx(e.p,{children:"The are two available sizes: 28px and 36px."}),`
`,i.jsx("img",{src:g,alt:"Chip Sizes"}),`
`,i.jsx(e.h2,{id:"mouse-interaction",children:"Mouse interaction"}),`
`,i.jsx(e.p,{children:"Depending on which chip variant is used, there are different interactions. In the default state, each chip variant is completely clickable as a whole. The chip variants with a dismiss icon (active state) consist of two clickable areas. Firstly, clicking on the dismiss icon returns the entire chip component to the default state. Secondly, you can click on the remaining area of the chip component to display a select list and change your option selection."}),`
`,i.jsx("img",{src:u,alt:"Chip Mouse Interaction",width:"50%"})]})}function T(t={}){const{wrapper:e}={...o(),...t.components};return e?i.jsx(e,{...t,children:i.jsx(s,{...t})}):s(t)}export{T as default};
