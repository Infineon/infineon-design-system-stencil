import{j as n,M as r,C as a,a as s}from"./blocks-BZkljD5M.js";import{useMDXComponents as i}from"./index-D3CGuepE.js";import{A as d,D as t}from"./accordion.stories-DAEJRd8I.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CK9bH0Yi.js";import"./icons-DxYTBSFo.js";function c(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:d}),`
`,n.jsx(e.h1,{id:"accordion",children:"Accordion"}),`
`,n.jsx(a,{of:t,sourceState:"shown"}),`
`,n.jsx(s,{of:t}),`
`,n.jsx(e.h2,{id:"note",children:"Note"}),`
`,n.jsxs(e.p,{children:["When using in React, if you wish to dynamically update the content of an accordion-item, please add a ",n.jsx(e.code,{children:"key"})," attribute on the accordion-item in order to trigger an internal re-render."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`
  ...

  <IfxAccordionItem initial-collapse={false} open={false} key={content} caption="Label" ref={accordionItemRef}>
    <div>{content}</div>
  </IfxAccordionItem>

...
  
  <IfxAccordionItem initial-collapse={false} open={false} key={content} caption="Label" ref={accordionItemRef}>
    {content}
  </IfxAccordionItem>
  

`})})]})}function u(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(c,{...o})}):c(o)}export{u as default};
