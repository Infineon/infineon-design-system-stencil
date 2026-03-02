import{j as n,M as d,C as t,b as i,a as r}from"./blocks-Dhrk5atU.js";import{useMDXComponents as l}from"./index-DvzeZqEi.js";import{M as c,D as s,A as h}from"./modal.stories-CSSKXmzo.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BS584tZU.js";import"./icons-DyNdhNdc.js";function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:c}),`
`,n.jsx(e.h1,{id:"modal",children:"Modal"}),`
`,n.jsx(t,{withSource:"none",children:n.jsx(i,{height:"300px",of:s})}),`
`,n.jsx(r,{}),`
`,n.jsx(e.h2,{id:"stories",children:"Stories"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(t,{of:s,sourceState:"shown"}),`
`,n.jsx(e.h3,{id:"alert",children:"Alert"}),`
`,n.jsx(t,{withSource:"none",children:n.jsx(i,{height:"300px",of:h})}),`
`,n.jsx(e.h2,{id:"notes",children:"Notes"}),`
`,n.jsx(e.p,{children:"The Modal component is a modal window that appears on top of the app content and allows users to interact with it."}),`
`,n.jsx(e.p,{children:"Example in VanillaJs - Adding functionality to the buttons"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`<ifx-button id="open">Open Modal</ifx-button>
...
<ifx-modal id="my-modal" caption="Modal Title" variant="alert-brand" close-on-overlay-click="true">
  <div slot="content"><span>Modal content</span></div>
  <div slot="buttons">
    <ifx-button variant="secondary" onclick="console.log('Button 1 clicked')">Button 1</ifx-button>
    <ifx-button onclick="closeModal">Button 2</ifx-button>
  </div>
</ifx-modal>
...
const openButton = document.getElementById('open');
const modal = document.getElementById('my-modal');

openButton.addEventListener('click', () => {
    console.log("click")
    modal.opened = true;
  });
  openButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      modal.opened = true;
    }
  });
function closeModal() {
  modal.opened = false;
}
`})}),`
`,n.jsxs(e.p,{children:["For more usage examples within other Javascript frameworks, please check the example applications that are linked in the ",n.jsx(e.code,{children:"README.md"})," of our ",n.jsx(e.a,{href:"https://infineon.github.io/infineon-design-system-stencil",rel:"nofollow",children:"Github repository"}),"."]})]})}function g(o={}){const{wrapper:e}={...l(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(a,{...o})}):a(o)}export{g as default};
