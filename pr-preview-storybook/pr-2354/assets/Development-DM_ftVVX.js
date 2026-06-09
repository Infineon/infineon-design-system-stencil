import{u as r,j as e,M as o,C as a,a as l}from"./blocks-CeWVMlAz.js";import{S as c,D as i,W as d}from"./search-field.stories-DNYlagsV.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CinqYwh9.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"search-field",children:"Search field"}),`
`,e.jsx(a,{of:i,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"search-suggestions--history",children:"Search Suggestions & History"}),`
`,e.jsx(n.p,{children:`The search-field component offers the possibility to custom add search suggestions and history.
The suggestions property is configured to accept an array of objects, each representing a search suggestion.`}),`
`,e.jsx(a,{of:d,sourceState:"shown"}),`
`,e.jsx(n.p,{children:"The component renders the suggestions array as provided by the consumer. Filtering and ranking should be handled by your application or backend service."}),`
`,e.jsx(n.p,{children:"Below is an example of usage in vanilla JavaScript:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ifx-search-field id="my-search-field" show-delete-icon="false" show-suggestions="true" enable-history="true" max-suggestions="10" max-history-items="5" history-key="ifx-search-history" history-header-text="Recent Searches"></ifx-search-field>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`window.addEventListener('load', () => {
  const myField = document.getElementById('my-search-field');
  myField.suggestions = [
    { id: 's1', text: 'Berlin is the capital of Germany', type: 'suggestion' },
    { id: 's2', text: 'Paris is the capital of France', type: 'suggestion' }
  ];
});
`})}),`
`,e.jsx(n.p,{children:"Note: Because the suggestions prop is defined as type JS array, it cannot accept string or JSON as proper values."}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsx(n.p,{children:`See the examples below for general usage of events in different JS frameworks.
For more information, please refer to our example applications.`}),`
`,e.jsx("b",{children:"Angular"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//app.component.js
handleSearchField(event: any) {
  console.log("searchField value change: ", event.detail)
}
//app.component.html
<ifx-search-field size="l" disabled="false" show-delete-icon="true" (ifxInput)="handleSearchField($event)"></ifx-search-field>
`})}),`
`,e.jsx("b",{children:"React"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//MyComponent.js
const handleSearch = (event) => {
  console.log("handling input: ", event.detail)
};
...
<IfxSearchField disabled="false" size='l' show-delete-icon="true" onIfxInput={handleSearch}></IfxSearchField>
`})}),`
`,e.jsx("b",{children:"Vanilla"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//index.html
const searchField = document.querySelector('#search-field');
searchField.addEventListener('ifxInput', (event) => {
  console.log("search field value", event.detail);
});
<ifx-search-field id="search-field" size="l" disabled="false" show-delete-icon="true"></ifx-search-field>
`})})]})}function g(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{g as default};
