import{j as e,M as a,C as s,a as c}from"./blocks--yNHiUW0.js";import{useMDXComponents as o}from"./index-CtNGLj1X.js";import{A as r,I as d}from"./action-list.stories-BUqsWHLt.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BA28Kxd7.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(t.h1,{id:"text-field",children:"Text field"}),`
`,e.jsx(s,{of:d,sourceState:"shown"}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"events-and-interactive-elements",children:"Events and interactive elements"}),`
`,e.jsx(t.p,{children:"By default, interactive elements, such as checkbox and switch are not connected with the action-item in order to maintain a high degree of flexibility. The connection between an interactive element and the action-item is therefore up to the user to establish. Below is an example of using events to connect the click of an action-item with the toggle of an interactive checkbox."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`
  window.addEventListener('load', () => { 
    const myList = document.getElementById('myactionlist');
    myList.addEventListener('ifxActionListItemClick', (e) => { 
      const myListItem = document.getElementById('dashboardCheckbox');
      myListItem.checked = !myListItem.checked;
    })
  })

  <ifx-action-list id="myactionlist" list-aria-label="Navigation menu">
    <ifx-action-list-item item-title="Dashboard" description="View your main dashboard" value="dashboard" item-aria-label="Navigation item">
      <ifx-checkbox id="dashboardCheckbox" slot="leading" checked="false"></ifx-checkbox>
    </ifx-action-list-item>
  </ifx-action-list>
`})})]})}function u(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{u as default};
