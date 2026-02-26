import{j as n,M as i,C as r,a}from"./blocks-s8V8vAPY.js";import{useMDXComponents as c}from"./index-_RPSzgFa.js";import{A as s,D as d}from"./accordion.stories-CYcdPvAA.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DhuzaRAJ.js";import"./icons-DyNdhNdc.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:s}),`
`,n.jsx(e.h1,{id:"accordion",children:"Accordion"}),`
`,n.jsx(r,{of:d,sourceState:"shown"}),`
`,n.jsx(a,{}),`
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
  

`})})]})}function u(o={}){const{wrapper:e}={...c(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{u as default};
