import{j as n,M as r}from"./blocks-0XVbBOJF.js";import{useMDXComponents as i}from"./index-uTsNSzx6.js";import{M as t}from"./PackageManagerTabs-CoXnZP8E.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DZqETd7E.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Setup & installation/Framework Integration/Angular"}),`
`,n.jsx(e.h1,{id:"angular",children:"Angular"}),`
`,n.jsxs(e.p,{children:["Use the Infineon Design System web components in Angular applications. The Angular wrapper provides an Angular-specific interface to Stencil web components, making them feel like native Angular components with proper handling of properties, events, two-way data binding with ",n.jsx(e.code,{children:"ngModel"}),", and seamless integration with Angular's dependency injection and change detection."]}),`
`,n.jsx(e.p,{children:"The Infineon Design System offers two integration approaches:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Standalone Components"})," (recommended for Angular 14+)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"NgModule-based"})," (for traditional Angular applications)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"standalone-components-recommended",children:"Standalone Components (Recommended)"}),`
`,n.jsx(e.p,{children:"Standalone components are the modern Angular approach, introduced in Angular 14 and promoted as the default in Angular 15+."}),`
`,n.jsx(e.h3,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. Install the package"})}),`
`,n.jsx(t,{packageName:"@infineon/infineon-design-system-angular"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Import global styles"})}),`
`,n.jsxs(e.p,{children:["Add the following import to your ",n.jsx(e.code,{children:"styles.css"})," or ",n.jsx(e.code,{children:"styles.scss"})," file:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@import '@infineon/infineon-design-system-angular/styles.css';
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3. Import components in your standalone component"})}),`
`,n.jsx(e.p,{children:"Import individual components directly where you need them:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// app.component.ts
import { Component } from '@angular/core';
import { IfxAlert, IfxButton, IfxSearchBar } from '@infineon/infineon-design-system-angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IfxAlert, IfxButton, IfxSearchBar],
  templateUrl: './app.component.html'
})
export class AppComponent {
  handleClick() {
    console.log('Button clicked!');
  }

  handleSearch(event: CustomEvent) {
    console.log('Search value:', event.detail);
  }
}
`})}),`
`,n.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"Use the components in your Angular template:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- app.component.html -->
<h1>Infineon Design System - Angular Standalone Example</h1>

<ifx-alert variant="primary" icon="c-info-16">
  Welcome to Infineon Design System!
</ifx-alert>

<ifx-button variant="primary" (ifxClick)="handleClick()">
  Click Me
</ifx-button>

<ifx-search-bar 
  placeholder="Search..." 
  [show-close-button]="true"
  (ifxChange)="handleSearch($event)">
</ifx-search-bar>
`})}),`
`,n.jsx(e.h2,{id:"ngmodule-based-traditional",children:"NgModule-based (Traditional)"}),`
`,n.jsx(e.p,{children:"For applications using the traditional NgModule architecture."}),`
`,n.jsx(e.h3,{id:"installation-1",children:"Installation"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. Install the package"})}),`
`,n.jsx(t,{packageName:"@infineon/infineon-design-system-angular"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. Import global styles"})}),`
`,n.jsxs(e.p,{children:["Add the following import to your ",n.jsx(e.code,{children:"styles.css"})," or ",n.jsx(e.code,{children:"styles.scss"})," file:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@import '@infineon/infineon-design-system-angular/styles/infineon-design-system.css';
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3. Import the module"})}),`
`,n.jsxs(e.p,{children:["Add ",n.jsx(e.code,{children:"InfineonDesignSystemModule"})," to your app module:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfineonDesignSystemModule } from '@infineon/infineon-design-system-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InfineonDesignSystemModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
`})}),`
`,n.jsx(e.h3,{id:"usage-1",children:"Usage"}),`
`,n.jsx(e.p,{children:"Once imported, all components are available throughout your application:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- app.component.html -->
<h1>Infineon Design System - Angular Module Example</h1>

<ifx-alert variant="primary" icon="c-info-16">
  Welcome to Infineon Design System!
</ifx-alert>

<ifx-button variant="primary" (ifxClick)="handleClick()">
  Click Me
</ifx-button>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
`})})]})}function h(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{h as default};
