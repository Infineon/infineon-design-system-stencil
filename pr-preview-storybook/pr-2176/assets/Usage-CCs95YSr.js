import{j as e,M as o}from"./blocks-BmSlsq4y.js";import{useMDXComponents as t}from"./index-CMxXKWBX.js";import{P as i}from"./progress-bar.stories-DjY3hdK6.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BmfNKPJW.js";const a=""+new URL("progressbar-4px-ClpBuYmp.png",import.meta.url).href,h=""+new URL("progressbar-20px-CxjrYnFs.png",import.meta.url).href,l=""+new URL("progressbar-anatomy-CZShaRpP.png",import.meta.url).href;function n(r){const s={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(s.h1,{id:"progress-bar",children:"Progress Bar"}),`
`,e.jsx(s.p,{children:"The Progress bar is a control element that visually represents the progress of a job or task. It provides feedback to users about the completion status of a process, such as installation or loading."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsx(s.tr,{children:e.jsx(s.th,{children:"Resources"})})}),e.jsx(s.tbody,{children:e.jsx(s.tr,{children:e.jsx(s.td,{children:e.jsx(s.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2393-3988",rel:"nofollow",children:"Figma progress bar component →"})})})})]}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h3,{id:"when-to-use",children:"When to use"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"When you need to visually represent the progress or completion status of a task or process."}),`
`,e.jsx(s.li,{children:"To show continuous progress, where the progress bar moves continuously until the task is completed."}),`
`,e.jsx(s.li,{children:"When you want to provide users with additional numerical information about the progress."}),`
`]}),`
`,e.jsx(s.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"When there is no relevant task or process that needs to be visually represented to the user."}),`
`,e.jsx(s.li,{children:"If the progress is not measurable or if the progress does not have a clear endpoint."}),`
`,e.jsx(s.li,{children:"If the progress you are trying to convey is better represented through alternative means, such as a spinner or alert messages"}),`
`]}),`
`,e.jsx(s.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx("img",{src:l,alt:"Progress Bar Anatomy"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Fill (1)"}),e.jsx(s.br,{}),`
`,"Shows the current progress of the bar."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Value (2)"}),e.jsx(s.br,{}),`
`,"Can be displayed to give additional %-information."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Track (3)"}),e.jsx(s.br,{}),`
`,"The horizontal bar that represents the entire progress range."]}),`
`,e.jsx(s.h2,{id:"size",children:"Size"}),`
`,e.jsx(s.p,{children:"There are two different sizes of the progress bar available: 4px and 20px."}),`
`,e.jsx(s.h3,{id:"20px",children:"20px"}),`
`,e.jsx(s.p,{children:"This is the default size for the progress bar, suitable for most use cases where a normal visual presence is desired."}),`
`,e.jsx("img",{src:h,alt:"Progress Bar Size 20px"}),`
`,e.jsx(s.h3,{id:"4px",children:"4px"}),`
`,e.jsx(s.p,{children:"This size is ideal for situations where space is limited or a more compact representation of the progress bar is needed."}),`
`,e.jsx("img",{src:a,alt:"Progress Bar Size 4px"}),`
`,e.jsx(s.h2,{id:"progress-behavior",children:"Progress behavior"}),`
`,e.jsxs(s.p,{children:["Implement a technical solution so the progress bar always starts at ",e.jsx(s.strong,{children:"2% of its maximum progress (instead of 0%)"}),".  Avoid starting at 0% as it can be frustrating for the user if progress really takes a few seconds to start."]})]})}function m(r={}){const{wrapper:s}={...t(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{m as default};
