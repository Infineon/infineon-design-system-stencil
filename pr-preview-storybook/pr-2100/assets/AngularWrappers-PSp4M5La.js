import{j as n,M as a}from"./blocks-CNj5F94U.js";import{useMDXComponents as s}from"./index-BccjehuR.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CaTikuGJ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Setup & installation/Framework integration/Angular + Stencil"}),`
`,n.jsx(e.h1,{id:"angular--stencil",children:"Angular + Stencil"}),`
`,n.jsx(e.p,{children:"Angular Wrappers: Similarly to Vue and React, an Angular wrapper provides an Angular interface to a Stencil web component, making the web component feel more like a typical Angular component. This includes proper handling of props, state, and events within the context of an Angular application."}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1."})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"- with NPM"})}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:"npm install @infineon/infineon-design-system-angular"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"- with Yarn"})}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:"yarn add @infineon/infineon-design-system-angular"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Installation of SASS"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install sass
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3. Import the module inside your entry point file"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { defineCustomElements } from "@infineon/infineon-design-system-stencil/loader";

defineCustomElements(window);
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"4. Additional steps"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Update app.ts file:"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`
<ifx-button disabled="false" variant="primary" size="m" target="_blank" theme="default" >
  Button 
</ifx-button>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note"}),": In Angular, you do not have to import each component before using them."]}),`
`,n.jsx(e.h3,{id:"events",children:"Events"}),`
`,n.jsx(e.h4,{id:"two-way-data-binding",children:"Two way data binding"}),`
`,n.jsx(e.p,{children:`Two-way binding means that any data-related changes affecting the model are immediately propagated to the matching view(s).
And any changes made in the view(s) are immediately reflected in the underlying model.
When app data changes, so does the UI, and conversely.`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`//app.ts
switchChecked = false;
switchDisabled = false;
...
toggleSwitchValue(event: any) {
  console.log("switch value change")
  this.switchChecked = event.detail;
}
//app.html
<ifx-<ifx-switch [disabled]="switchDisabled" [value]="switchChecked" (ifxChange)="toggleSwitchValue($event)"></ifx-switch>
`})})]})}function h(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{h as default};
