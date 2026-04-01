import{j as e,M as l,C as c,a as t}from"./blocks-pZoiMIWN.js";import{useMDXComponents as o}from"./index-wO_wMMn3.js";import{S as i,D as r}from"./search-bar.stories-CXvIjzDd.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BCwuh1lD.js";function s(a){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i}),`
`,e.jsx(n.h1,{id:"search-bar",children:"Search bar"}),`
`,e.jsx(c,{of:r,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsx(n.p,{children:`See the examples below for general usage of events in different JS frameworks.
For more information, please refer to our example applications.`}),`
`,e.jsx("b",{children:"Angular"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//app.component.js
handleSearchBar(event: any) {
  console.log("searchBar value change: ", event.detail)
}
//app.component.html
<ifx-search-bar is-open="true" disabled="false" (ifxInput)="handleSearchBar($event)"></ifx-search-bar>
`})}),`
`,e.jsx("b",{children:"React"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//MyComponent.js
const handleSearch = (event) => {
  console.log("handling input: ", event.detail)
};
...
<IfxSearchBar is-open="true" disabled="false" onIfxInput={handleSearch}></IfxSearchBar>
`})}),`
`,e.jsx("b",{children:"Vanilla"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//index.html
const searchBar = document.querySelector('#search-bar');
searchBar.addEventListener('ifxInput', (event) => {
  console.log("search bar value", event.detail);
});
<ifx-search-bar id="search-bar" is-open="true" disabled="false"></ifx-search-bar>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx("b",{children:"Vue"})," (using v-model)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//MyComponent.vue
let searchValue = ref('');
...
<ifx-search-bar v-model="searchValue" is-open="true" disabled="false"></ifx-search-bar>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx("b",{children:"Vue"})," (combining value binding and event listening)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//MyComponent.vue
<ifx-search-bar @ifxInput="event => console.log(event.detail)" is-open="true" disabled="false">
</ifx-search-bar>
`})})]})}function j(a={}){const{wrapper:n}={...o(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{j as default};
