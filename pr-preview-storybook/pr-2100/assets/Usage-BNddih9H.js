import{j as e,M as i}from"./blocks-DyZiDzlb.js";import{useMDXComponents as s}from"./index-B6GgOJeP.js";import{S as r}from"./switch.stories-BOPHb4IX.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CwB_fbFB.js";const h=""+new URL("switch-anatomy-BwgqlXG-.png",import.meta.url).href,c=""+new URL("switch-mouse-interaction-cnMmURZ6.png",import.meta.url).href,a=""+new URL("switch-states-BmMmJn4F.png",import.meta.url).href;function o(t){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r}),`
`,e.jsx(n.h1,{id:"switch",children:"Switch"}),`
`,e.jsx(n.p,{children:"The switch component allows users to toggle between two mutually exclusive states (on/off or yes/no). It always has a default value."}),`
`,e.jsxs(n.p,{children:[`| Resources                                                                                                                |
|--------------------------------------------------------------------------------------------------------------------------|
| `,e.jsx(n.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=38242-7745",rel:"nofollow",children:"Figma switch component →"})," |"]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When you need to provide users with a straightforward and intuitive way to toggle between two states, such as enabling or disabling a feature or setting."}),`
`,e.jsx(n.li,{children:"When the binary nature of the choice is clear, and there is no need for additional options or complex interactions."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If you have more complex options or a range of values, alternative UI elements like radio buttons, checkboxes, dropdown menus, or sliders might be more suitable."}),`
`]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:h,alt:"Switch Anatomy",width:"50%"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Switch(1)"}),e.jsx(n.br,{}),`
`,"The main part of the component."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Switch Action Label (2)"}),e.jsx(n.br,{}),`
`,"Describes the action which can be done by the user. Since the shwitch should represent the two actions (on/off or yes/no), the action label can also be disabled."]}),`
`,e.jsx(n.h2,{id:"mouse-interaction",children:"Mouse interaction"}),`
`,e.jsx(n.p,{children:"To check the switch, users have two options: they can either directly click on the switch or click on the action label."}),`
`,e.jsx("img",{src:c,alt:"Switch Mouse Interaction",width:"50%"}),`
`,e.jsx(n.h2,{id:"states",children:"States"}),`
`,e.jsx("img",{src:a,alt:"Switch States"})]})}function p(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{p as default};
