import{u as a,j as e,M as s,C as c,a as r}from"./blocks-BovgC4P9.js";import{A as d,I as i}from"./action-list.stories-BUqsWHLt.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CEUbuJbq.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(t.h1,{id:"text-field",children:"Text field"}),`
`,e.jsx(c,{of:i,sourceState:"shown"}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{of:i}),`
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
`})})]})}function u(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{u as default};
