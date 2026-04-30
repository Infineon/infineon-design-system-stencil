import{u as a,j as n,M as r}from"./blocks-CFDEZ05C.js";import{M as i}from"./PackageManagerTabs-BcuGekpz.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-A3HwJ4O3.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Setup & installation/Framework Integration/React"}),`
`,n.jsx(e.h1,{id:"react",children:"React"}),`
`,n.jsx(e.p,{children:"Use the Infineon Design System web components in React applications. The React wrapper provides a React interface to Stencil web components, making them feel like typical React components with proper handling of props, state, and events."}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. Install the package"})}),`
`,n.jsx(i,{packageName:"@infineon/infineon-design-system-react"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Import components in your React component"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// App.tsx or App.jsx
import { IfxAlert, IfxButton, IfxSearchBar } from '@infineon/infineon-design-system-react';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handleSearch = (event) => {
    console.log('Search value:', event.detail);
  };

  return (
    <>
      <h1>Infineon Design System - React Example</h1>
      
      <IfxAlert variant="primary" icon="c-info-16">
        Welcome to Infineon Design System!
      </IfxAlert>

      <IfxButton variant="primary" onClick={handleClick}>
        Click Me
      </IfxButton>

      <IfxSearchBar 
        placeholder="Search..." 
        showCloseButton={true}
        onIfxChange={handleSearch}>
      </IfxSearchBar>
    </>
  );
}

export default App;
`})})]})}function m(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{m as default};
