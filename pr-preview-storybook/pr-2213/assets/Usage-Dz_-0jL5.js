import{u as s,j as e,M as a}from"./blocks-Cr2yD1bt.js";import{C as o}from"./chip.stories-DnkXq54f.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CdhqSkw1.js";import"./icons-CBa5BGDq.js";const r=""+new URL("chip-anatomy-yBP0GlqB.png",import.meta.url).href,l=""+new URL("chip-default-BCl6Bi3J.png",import.meta.url).href,c=""+new URL("chip-default-states-Xc-8fDM7.png",import.meta.url).href,h=""+new URL("chip-default-icon-variants-DtNto6dg.png",import.meta.url).href,d=""+new URL("chip-default-filled-light-states-BHV9BMPm.png",import.meta.url).href,p=""+new URL("chip-default-filled-dark-states-DBlQmi6g.png",import.meta.url).href,u=""+new URL("chip-static-example-xNpD9Eh8.png",import.meta.url).href,m=""+new URL("chip-interactive-example-C6EcLqTq.png",import.meta.url).href,x=""+new URL("chip-option-single-dropdown-C0MQ4UDd.png",import.meta.url).href,g=""+new URL("chip-option-multi-dropdown-CVluudT_.png",import.meta.url).href,f=""+new URL("chip-option-default-Bxsymtne.png",import.meta.url).href,j=""+new URL("chip-option-states--IsrlefX.png",import.meta.url).href,w=""+new URL("chip-group-B1uI4L9k.png",import.meta.url).href,y=""+new URL("chip-sizes-CROSX99k.png",import.meta.url).href,b=""+new URL("chip-mouse-interaction-DwrbAghW.png",import.meta.url).href;function n(t){const i={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o}),`
`,e.jsx(i.h1,{id:"chip",children:"Chip"}),`
`,e.jsx(i.p,{children:"The chip component presents compact information in an easily consumable format. Depending on the context it is used in, a chip can act as a purely static display element or as an interactive control. This flexibility — combined with different variants, styles, and sizes — allows the chip to adapt to a wide range of use cases across the interface."}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsx(i.tr,{children:e.jsx(i.th,{children:"Resources"})})}),e.jsx(i.tbody,{children:e.jsx(i.tr,{children:e.jsx(i.td,{children:e.jsx(i.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=17762-11219",rel:"nofollow",children:"Figma chip component →"})})})})]}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"If you want to display metadata, tags, or labels in a compact, readable format."}),`
`,e.jsx(i.li,{children:"If you want to filter and categorize content."}),`
`,e.jsx(i.li,{children:"If you want to allow users to add or remove options from a predefined set."}),`
`,e.jsx(i.li,{children:"If you need a flexible element that can serve as either a static indicator or an interactive control depending on context."}),`
`]}),`
`,e.jsx(i.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"If the content within the chip is dynamically changing or frequently updated."}),`
`,e.jsx(i.li,{children:"If you need to display a large amount of complex data or detailed information. Use other components like tables or lists."}),`
`,e.jsx(i.li,{children:'If you need to communicate a status or state such as "Active", "In Review", or "Pending". Use the Status component instead.'}),`
`,e.jsx(i.li,{children:"If the action behind the chip is a primary call-to-action. Use a Button component instead."}),`
`]}),`
`,e.jsx(i.h2,{id:"static-vs-interactive",children:"Static vs. Interactive"}),`
`,e.jsx(i.p,{children:"The Default chip can be used in two fundamentally different ways depending on the context it is placed in."}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Static chips"})," serve as non-interactive display elements. They communicate information — such as a status, tag, or category — without expecting any user input. Static chips do not respond to hover or focus interactions and cannot be clicked."]}),`
`,e.jsx("img",{src:u,alt:"Example of static chip usage"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Interactive chips"})," respond to user input. They can be selected, toggled, or dismissed, and trigger actions or filter changes within the interface. Interactive chips expose hover, focus, pressed, and selected states."]}),`
`,e.jsx(i.p,{children:"The Option chip is always interactive by definition, as it always opens a select list on click."}),`
`,e.jsx("img",{src:m,alt:"Example of interactive chip usage"}),`
`,e.jsx(i.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:r,alt:"Chip Anatomy"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Chip Container (1)"}),e.jsx(i.br,{}),`
`,"The entire chip, including its label, icons, and any additional styling, is contained within a visually distinct container."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Dropdown Icon (2)"}),e.jsx(i.br,{}),`
`,"Indicates that there are additional options related to the chip. Clicking or tapping on the dropdown icon reveals a select list with different options to choose from. Only present on Option chips."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Label Text (3)"}),e.jsx(i.br,{}),`
`,"This is the primary text that describes the chip or the category being filtered. We recommend keeping labels short — ideally 2 to 3 words. Labels are truncated after 25 characters."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Option Text (4)"}),e.jsx(i.br,{}),`
`,"In the Option chip variant, the currently selected option is shown inline next to the label."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Number Indicator (5)"}),e.jsx(i.br,{}),`
`,"Provides information about how many options are selected inside the chip. It appears when more than one option has been selected in a multi-select context."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Dismiss Icon (6)"}),e.jsx(i.br,{}),`
`,"The dismiss icon allows users to reset their selection with one click and return the chip to its default state. Only present on removable Default chips and active Option multi chips."]}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i.h3,{id:"default-chip",children:"Default Chip"}),`
`,e.jsx(i.p,{children:"The Default chip is a versatile element that can represent tags, labels, filter tokens, or status indicators. It can be configured as either a static or interactive element depending on the context. An optional left-side icon and a dismiss icon for removal are available."}),`
`,e.jsx("img",{src:l,alt:"Chip Default"}),`
`,e.jsx(i.h4,{id:"states",children:"States"}),`
`,e.jsxs(i.p,{children:["The states below apply when the Default chip is used as an ",e.jsx(i.strong,{children:"interactive"})," element. Static chips do not exhibit hover, focus, or pressed states."]}),`
`,e.jsx("img",{src:c,alt:"Chip Default States"}),`
`,e.jsx(i.h4,{id:"icon-configurations",children:"Icon configurations"}),`
`,e.jsx("img",{src:h,alt:"Chip Icon Variants"}),`
`,e.jsx(i.p,{children:"The following icon configurations are available:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Label only"})," — plain text chip with no icon"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Left icon"})," — icon placed before the label text"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Right icon"})," — icon placed after the label text"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Left icon + Right icon"})," — both icons are present simultaneously"]}),`
`]}),`
`,e.jsx(i.h4,{id:"filled-light",children:"Filled light"}),`
`,e.jsx(i.p,{children:"The filled light style uses a light-colored fill as its default appearance."}),`
`,e.jsx("img",{src:d,alt:"Chip Filled Light States"}),`
`,e.jsx(i.h4,{id:"filled-dark",children:"Filled dark"}),`
`,e.jsx(i.p,{children:"The filled dark style uses a dark-colored fill as its default appearance."}),`
`,e.jsx("img",{src:p,alt:"Chip Filled Dark States"}),`
`,e.jsx(i.h3,{id:"option-chip",children:"Option Chip"}),`
`,e.jsxs(i.p,{children:["By clicking on the Option chip, a select list is displayed. This gives users the possibility to filter content in more detail and reach desired results more quickly. The Option chip is ",e.jsx(i.strong,{children:"always interactive"})," and is available in two types: single select and multi select."]}),`
`,e.jsx("img",{src:f,alt:"Chip Option Default"}),`
`,e.jsx(i.h4,{id:"states-1",children:"States"}),`
`,e.jsx("img",{src:j,alt:"Option Chip States"}),`
`,e.jsx(i.h4,{id:"single",children:"Single"}),`
`,e.jsx(i.p,{children:"This type uses a single select list. The selected option is shown inline within the chip, next to the label text."}),`
`,e.jsx("img",{src:x,alt:"Option Chip Single Dropdown"}),`
`,e.jsx(i.h4,{id:"multi",children:"Multi"}),`
`,e.jsx(i.p,{children:"This type uses a multi select list. Multiple options can be selected simultaneously. Once more than one option is selected, a number indicator shows the count of additional selections. A dismiss icon is displayed to allow resetting all selections at once."}),`
`,e.jsx("img",{src:g,alt:"Option Chip Multi Dropdown"}),`
`,e.jsx(i.h2,{id:"chip-group",children:"Chip Group"}),`
`,e.jsx(i.p,{children:"In most cases, the chip component is used as a chip group, which also exists as its own component. Chips within a group wrap automatically onto new rows when the container width is exceeded. A chip group can contain static chips, interactive chips, or a combination of both — as long as the intended behavior is communicated consistently through visual styling."}),`
`,e.jsx("img",{src:w,alt:"Chip Group"}),`
`,e.jsx(i.h2,{id:"size",children:"Size"}),`
`,e.jsx(i.p,{children:"There are three available sizes: small, medium (default), and large. The appropriate size should be chosen based on the surrounding layout and context — for example, smaller chips work well in dense data views, while larger chips are better suited for touch interfaces or more prominent filter areas."}),`
`,e.jsx("img",{src:y,alt:"Chip Sizes"}),`
`,e.jsx(i.h2,{id:"mouse-interaction",children:"Mouse interaction"}),`
`,e.jsx(i.p,{children:"Depending on which chip variant and context is used, there are different clickable areas. Static chips have no clickable area. Interactive Default chips in their default state are fully clickable as a whole. Chips with a dismiss icon consist of two distinct clickable areas: clicking the dismiss icon resets the chip to its default state, while clicking the remaining chip area triggers its primary interaction — such as toggling a selection or opening a select list."}),`
`,e.jsx("img",{src:b,alt:"Chip Mouse Interaction"})]})}function L(t={}){const{wrapper:i}={...s(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{L as default};
