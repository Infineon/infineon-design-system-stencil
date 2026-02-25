import{j as e,M as i}from"./blocks-Bht2ZrXC.js";import{useMDXComponents as s}from"./index-BpbRR6oJ.js";import{S as r}from"./status.stories--xKMIvsI.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CeSR5tSk.js";const l=""+new URL("status-variant-outline-CMVaN4to.png",import.meta.url).href,a=""+new URL("status-variant-simple-CE5J_zOA.png",import.meta.url).href,c=""+new URL("status-usage-info-B_h9yFEG.png",import.meta.url).href,d=""+new URL("status-usage-table-BIt4uqFC.png",import.meta.url).href;function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r}),`
`,e.jsx(n.h1,{id:"status",children:"Status"}),`
`,e.jsx(n.p,{children:"The status component serves as a visual indicator to convey additional information about an element on the interface. It is often used to highlight the status of processes to enhance the user's understanding of the content."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsx(n.tr,{children:e.jsx(n.th,{children:"Resources"})})}),e.jsx(n.tbody,{children:e.jsx(n.tr,{children:e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=22477-15125&t=aY9BfRC7bLZytmWu-4",rel:"nofollow",children:"Figma status component →"})})})})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If you want to visually highlight past, current or upcoming events."}),`
`,e.jsx(n.li,{children:"If you want to provide supplementary information to a product inside a table."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Avoid using status components for elements that do not carry significant importance or meaning."}),`
`,e.jsx(n.li,{children:"Do not use status components solely for decorative purposes, especially if they do not serve a functional or informative role."}),`
`,e.jsx(n.li,{children:"Avoid using status components to display redundant or duplicative information."}),`
`,e.jsx(n.li,{children:"Avoid to use long label names. Be precise and concise."}),`
`]}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"with-outline",children:"With Outline"}),`
`,e.jsx(n.p,{children:"This variant offers the strongest contrast when it comes to displaying very complex information structures at a glance."}),`
`,e.jsx("img",{src:l,alt:"Status Variant Outline"}),`
`,e.jsx(n.h4,{id:"example",children:"Example"}),`
`,e.jsx("img",{src:d,alt:"Status Usage Table"}),`
`,e.jsx(n.h3,{id:"simple",children:"Simple"}),`
`,e.jsx(n.p,{children:"This variant can be placed next to the corresponding element."}),`
`,e.jsx("img",{src:a,alt:"Status Variant Simple"}),`
`,e.jsx(n.h4,{id:"example-1",children:"Example"}),`
`,e.jsx("img",{src:c,alt:"Status Usage Simple"}),`
`,e.jsx(n.h2,{id:"use-case-examples",children:"Use case examples"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["In general, we recommend using our predefined set of 7 colors (",e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=51031-10802&t=khz9mkvtcKcx9zOk-4",rel:"nofollow",children:"see Figma status component"}),e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=51031-10802&t=khz9mkvtcKcx9zOk-4",rel:"nofollow"}),"). In case you need more status colors, please refer to our ",e.jsx(n.a,{href:"https://infineon.github.io/infineon-design-system-stencil/?path=/docs/foundations-colors--development",rel:"nofollow",children:"Color Foundations"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"project-status",children:"Project status"}),`
`,e.jsx(n.p,{children:"We recommend the following color coding for the most common status conditions:"}),`
`,e.jsxs(n.p,{children:["Error = ",e.jsx(n.code,{children:"$ifxColorRed500"})]}),`
`,e.jsxs(n.p,{children:["In Progress = ",e.jsx(n.code,{children:"$ifxColorOcean500"})]}),`
`,e.jsxs(n.p,{children:["Completed = ",e.jsx(n.code,{children:"$ifxColorLawn500"})]}),`
`,e.jsxs(n.p,{children:["Blocked = ",e.jsx(n.code,{children:"$ifxColorSun500"})]}),`
`,e.jsx(n.h3,{id:"semantic-coloring",children:"Semantic coloring"}),`
`,e.jsxs(n.p,{children:["To reinforce semantic relationships, use similar colors for related items. For example apply ",e.jsx(n.code,{children:"$ifxColorRed500"})," , ",e.jsx(n.code,{children:"$ifxColorRed600"})," and ",e.jsx(n.code,{children:"$ifxColorRed700"})," for different error states to maintain hue consistency."]}),`
`,e.jsx(n.h3,{id:"user-activity",children:"User activity"}),`
`,e.jsx(n.p,{children:"We recommend the following color coding for the most common user activities:"}),`
`,e.jsxs(n.p,{children:["Not available = ",e.jsx(n.code,{children:"$ifxColorEngineering200"})]}),`
`,e.jsxs(n.p,{children:["Active = ",e.jsx(n.code,{children:"$ifxColorOcean400"})]}),`
`,e.jsxs(n.p,{children:["Blocked = ",e.jsx(n.code,{children:"$ifxColorRed500"})]}),`
`,e.jsxs(n.p,{children:["Also check out the infineon ",e.jsx(n.a,{href:"https://infineon.github.io/infineon-design-system-stencil/?path=/docs/foundations-colors--development",rel:"nofollow",children:"Colors Foundation →"})]})]})}function j(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{j as default};
