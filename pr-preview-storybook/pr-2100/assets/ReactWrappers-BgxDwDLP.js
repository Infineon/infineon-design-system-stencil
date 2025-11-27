import{j as e,M as s}from"./blocks-CNj5F94U.js";import{useMDXComponents as a}from"./index-BccjehuR.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CaTikuGJ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Setup & installation/Framework integration/React + Stencil"}),`
`,e.jsx(n.h1,{id:"react--stencil",children:"React + Stencil"}),`
`,e.jsx(n.p,{children:"React Wrappers: Similarly to Vue, a React wrapper provides a React interface to a Stencil web component, making the web component feel more like a typical React component. This includes proper handling of props, state, and events within the context of a React application."}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"1."})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"- with NPM"})}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"npm install @infineon/infineon-design-system-react"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"- with Yarn"})}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"yarn add @infineon/infineon-design-system-react"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"2. Installation of SASS"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install sass
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"3. Import the module inside your entry point file"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { defineCustomElements } from '@infineon/infineon-design-system-react';
//...

defineCustomElements(window)
`})}),`
`,e.jsx(n.p,{children:"In React, there isn't a built-in mechanism to globally register components like in Vue. Therefore, components need to be imported in the file that they are being used in."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { IfxProgressBar, IfxSearchBar, IfxButton } from '@infineon/infineon-design-system-react';
//...
<IfxSearchBar onIfxChange={handleSearch} style={{ width: '100%' }} show-close-button="true"></IfxSearchBar>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"React + Javascript specific"})}),`
`,e.jsx(n.p,{children:"It may be necessary to add the following to your .env file at project root:"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"GENERATE_SOURCEMAP=false"})}),`
`,e.jsxs(n.p,{children:["This can also be achieved by updating your start script in the ",e.jsx(n.code,{children:"package.json"})," accordingly."]}),`
`,e.jsx(n.h3,{id:"events",children:"Events"}),`
`,e.jsx(n.h4,{id:"two-way-data-binding",children:"Two way data binding"}),`
`,e.jsx(n.p,{children:`Two-way binding allows creating synchronization between 2 entities, for example, application data and view.
In React, this is achieved by binding the value attribute of the input element to the value state variable using the useState hook, and binding the onChangeevent of the input element to the handleChange function.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//MyComponent.js
const [radioBtnValue, setRadioBtnValue] = useState(false);
const handleChange = (event) => {
  console.log("Updating radio btn value: ", event.detail);
  setRadioBtnValue(event.detail);
};
...
<IfxRadioButton disabled={disabled} onIfxChange={handleChange} value={radioBtnValue} error={error} name="name">label</IfxRadioButton>
`})})]})}function h(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default};
