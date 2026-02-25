import{j as e,M as o,C as t,a as r}from"./blocks-Bht2ZrXC.js";import{useMDXComponents as s}from"./index-BpbRR6oJ.js";import{S as c,D as d,W as m,a as l}from"./sidebar.stories-Bb2Jq7x2.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CeSR5tSk.js";import"./icons-DyNdhNdc.js";function a(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"sidebar",children:"Sidebar"}),`
`,e.jsx(t,{of:d,sourceState:"shown"}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.p,{children:["Each Sidebar Item is a navigation item per default (",e.jsx(n.code,{children:"isActionItem=false"}),"), meaning it becomes active ",e.jsx(n.code,{children:"active=true"}),` on selection.
The `,e.jsx(n.code,{children:"active"}),` property can also be set manually, e.g. in the case of pre-selecting an item.
Setting `,e.jsx(n.code,{children:"isActionItem=true"}),` means turning a navigation item into an action item. Action items do not become active on selection.
The previously active state is maintained during the action triggered by selecting an action item.`]}),`
`,e.jsx(n.h4,{id:"examples",children:"Examples:"}),`
`,e.jsxs(n.p,{children:[e.jsx("b",{children:"Navigation item:"})," Loading a new page"]}),`
`,e.jsxs(n.p,{children:[e.jsx("b",{children:"Action item:"})," Opening a modal overlay, while staying on the currently active page"]}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ifxSidebarMenu"}),": Custom event emitted when a sidebar menu is opened/closed."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ifxSidebarActionItem"}),": Custom event emitted when an action item is selected."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ifxSidebarNavigationItem"}),": Custom event emitted when a navigation item becomes active on selection."]}),`
`,e.jsx(n.p,{children:"Each of these custom events emits the specific element that triggered it."}),`
`,e.jsx(n.p,{children:`Due to the possibility to nest sidebar-items and thus create menus and submenus, we need to pay attention to event handling when using the Sidebar web component in React.
React uses a synthetic event system for performance and cross-browser compatibility reasons.
This synthetic event system doesn't play well with the custom events from the Web Components, which are based on the native browser event system.
To listen to the custom events emitted from the Sidebar component inside a React application, we need to attach the event listener to the specifically to the DOM node representing the Web Component in question.
And because direct manipulation of the DOM is considered a side effect in React, we have to use the useEffect hook in function components.`}),`
`,e.jsx(n.p,{children:"For reasons of completeness, the following provides an overview of how to use the Sidebar with submenus in the different JS-frameworks supported."}),`
`,e.jsx(n.h4,{id:"angular",children:"Angular"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`//app.component.html
  <ifx-sidebar application-name="Application Name">
    <ifx-sidebar-item>
      Header Section
      <ifx-sidebar-item icon="image-16">
        Item One
        <ifx-sidebar-item (ifxSidebarNavigationItem)="handleSidebarNavigationItemClick($event)" target="_blank"
          icon="image-16">Click me</ifx-sidebar-item>
        <ifx-sidebar-item icon="image-16" active="true">
          Menu Item 2
        </ifx-sidebar-item>
      </ifx-sidebar-item>
    </ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">Item Two</ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">Item Three</ifx-sidebar-item>
    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">Item Four</ifx-sidebar-item>
  </ifx-sidebar>

//app.component.ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  ...

  handleSidebarNavigationItemClick(event: any) {
    console.log('Sidebar item clicked', event.detail);
  }

  ...
}
`})}),`
`,e.jsx(n.h4,{id:"react",children:"React"}),`
`,e.jsxs(n.p,{children:[`The onClick handler in React will only capture 'click' events, and won't capture custom events.
That's why we need to use addEventListener to listen for the custom `,e.jsx(n.code,{children:"ifxSidebarActionItem"})," and ",e.jsx(n.code,{children:"ifxSidebarNavigationItem"})," events."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`function Sidebar() {
  ...

  const sidebarItemRefExampleClick = useRef(null);  // Create a ref for the specific sidebar item
  useEffect(() => {
    const sidebarItemElementExampleClick = sidebarItemRefExampleClick.current;

    // Add event listener for 'ifxSidebarActionItem' event on a specific sidebarItemElement
    const handleNavigationItemClicked = (event) => {
      console.log("Nested Sidebar navigation item clicked", event.detail);
    }
    sidebarItemElementExampleClick.addEventListener('ifxSidebarNavigationItem', handleNavigationItemClicked);

    // Return a cleanup function to remove the event listener
    return () => {
      sidebarItemElementExampleClick.removeEventListener('ifxSidebarNavigationItem', handleNavigationItemClicked);
    };
  }, []);  // Empty array means the effect will run only on mount and unmount
  
  ...

  return (
    <div>
      <IfxSidebar application-name="Application Name">
        <IfxSidebarItem target="_blank" ref={sidebarItemRefExampleClick} icon="image-16">
          Menu Item 3
        </IfxSidebarItem>
      </IfxSidebar>
   </div>
  )
}

export default Sidebar;

`})}),`
`,e.jsx(n.h4,{id:"vanilla",children:"Vanilla"}),`
`,e.jsx(n.p,{children:`In plain JavaScript, to add an event listener to a specific ifx-sidebar-item, we first need to select the specific ifx-sidebar-item.
The method to select the item depends on how you can identify it.
We can use an id, a class, or a data attribute, among other selectors.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:` <ifx-sidebar application-name="Application Name">
      <ifx-sidebar-item>
        Header Section
        <ifx-sidebar-item icon="image-16">
          Menu Item
          <ifx-sidebar-item id="sidebarItemClickable" target="_blank" icon="image-16">Click
            me</ifx-sidebar-item>
          <ifx-sidebar-item icon="image-16" active="true">
            Menu Item 2
          </ifx-sidebar-item>
        </ifx-sidebar-item>
      </ifx-sidebar-item>
    </ifx-sidebar-item>
  </ifx-sidebar>

...

<script>
  const sidebarItem = document.querySelector('#sidebarItemClickable');

  document.addEventListener('DOMContentLoaded', (event) => {
   sidebarItem.addEventListener('ifxSidebarNavigationItem', function (event) {
      console.log('Sidebar item clicked', event.detail);
    });
  });
<\/script>
`})}),`
`,e.jsx(n.h4,{id:"vue",children:"Vue"}),`
`,e.jsx(n.p,{children:`In Vue, we can listen to the custom events directly in the template using the v-on directive (or @ shorthand).
Events aren't wrapped in a synthetic event system like in React.
Vue uses a model that is closer to the native JavaScript event model, which allows it to handle custom events from Web Components more seamlessly.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<template>
  <div class="app">
    <ifx-sidebar application-name="Application Name" id="sidebar">
      <ifx-sidebar-item target="_blank" icon="image-16" @click="handleItemClick">
        Handle item click
      </ifx-sidebar-item>
    </ifx-sidebar>
  </div>
</template>

...

<script setup>
import { ref, computed } from 'vue';

// Define the handleItemClick function in the Vue component
const handleItemClick = (item) => {
  console.log("Sidebar item clicked", item.currentTarget);
};

<\/script>

`})}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"with-submenu",children:"With Submenu"}),`
`,e.jsx(t,{of:m,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"with-number-indicator",children:"With number indicator"}),`
`,e.jsx(t,{of:l,sourceState:"shown"})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{g as default};
