import{j as e,M as t,C as r,a as o}from"./blocks-DujEh3eX.js";import{useMDXComponents as a}from"./index-DXS3Pfm-.js";import{S as l,D as c}from"./search-field.stories-BCewQxge.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B62H2BYm.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(n.h1,{id:"search-field",children:"Search field"}),`
`,e.jsx(r,{of:c,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"search-suggestions--history",children:"Search Suggestions & History"}),`
`,e.jsx(n.p,{children:`The search-field component offers the possibility to custom add search suggestions and history.
The suggestions property is configured to accept an array of objects, each representing a search suggestion.`}),`
`,e.jsx(n.p,{children:"Below is an example of usage in vanilla JavaScript:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:` window.addEventListener('load', () => { 
   const myfield = document.getElementById('my-search-field');
   myfield.suggestions = [{ id: 's1', text: 'Berlin is the capital of Germany', type: 'suggestion'}, { id: 's2', text: 'Paris is the capital of France', type: 'history'}]
 })

 <ifx-search-field id="my-search-field" show-delete-icon="false" show-suggestions="true" enable-history="true" max-suggestions="10" max-history-items="5" history-key="ifx-search-history" history-header-text="Recent Searches"></ifx-search-field>
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
<ifx-search-field size="m" disabled="false" show-delete-icon="true" (ifxInput)="handleSearchField($event)"></ifx-search-field>
`})}),`
`,e.jsx("b",{children:"React"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//MyComponent.js
const handleSearch = (event) => {
  console.log("handling input: ", event.detail)
};
...
<IfxSearchField disabled="false" size='m' show-delete-icon="true" onIfxInput={handleSearch}></IfxSearchField>
`})}),`
`,e.jsx("b",{children:"Vanilla"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//index.html
const searchField = document.querySelector('#search-field');
searchField.addEventListener('ifxInput', (event) => {
  console.log("search field value", event.detail);
});
<ifx-search-field id="search-field" size="m" disabled="false" show-delete-icon="true"></ifx-search-field>
`})})]})}function u(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
