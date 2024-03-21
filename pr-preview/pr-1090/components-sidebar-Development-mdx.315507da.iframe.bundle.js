/*! For license information please see components-sidebar-Development-mdx.315507da.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[5974],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/sidebar/Development.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_sidebar_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/sidebar/sidebar.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h4:"h4",pre:"pre",h3:"h3"},(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_sidebar_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"sidebar",children:"Sidebar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_sidebar_stories__WEBPACK_IMPORTED_MODULE_2__.Default,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"notes",children:"Notes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Each Sidebar Item is a navigation item per default (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"isActionItem=false"}),"), meaning it becomes active ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"active=true"})," on selection.\nThe ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"active"})," property can also be set manually, e.g. in the case of pre-selecting an item.\nSetting ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"isActionItem=true"})," means turning a navigation item into an action item. Action items do not become active on selection.\nThe previously active state is maintained during the action triggered by selecting an action item."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"examples",children:"Examples:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:"Navigation item:"})," Loading a new page"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:"Action item:"})," Opening a modal overlay, while staying on the currently active page"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"events",children:"Events"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ifxSidebarMenu"}),": Custom event emitted when a sidebar menu is opened/closed."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ifxSidebarActionItem"}),": Custom event emitted when an action item is selected."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ifxSidebarNavigationItem"}),": Custom event emitted when a navigation item becomes active on selection."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Each of these custom events emits the specific element that triggered it."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Due to the possibility to nest sidebar-items and thus create menus and submenus, we need to pay attention to event handling when using the Sidebar web component in React.\nReact uses a synthetic event system for performance and cross-browser compatibility reasons.\nThis synthetic event system doesn't play well with the custom events from the Web Components, which are based on the native browser event system.\nTo listen to the custom events emitted from the Sidebar component inside a React application, we need to attach the event listener to the specifically to the DOM node representing the Web Component in question.\nAnd because direct manipulation of the DOM is considered a side effect in React, we have to use the useEffect hook in function components."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"For reasons of completeness, the following provides an overview of how to use the Sidebar with submenus in the different JS-frameworks supported."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"angular",children:"Angular"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:'//app.component.html\n  <ifx-sidebar application-name="Application Name">\n    <ifx-sidebar-item>\n      Header Section\n      <ifx-sidebar-item icon="image-16">\n        Item One\n        <ifx-sidebar-item (ifxSidebarNavigationItem)="handleSidebarNavigationItemClick($event)" target="_blank"\n          icon="image-16">Click me</ifx-sidebar-item>\n        <ifx-sidebar-item icon="image-16" active="true">\n          Menu Item 2\n        </ifx-sidebar-item>\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">Item Two</ifx-sidebar-item>\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">Item Three</ifx-sidebar-item>\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">Item Four</ifx-sidebar-item>\n  </ifx-sidebar>\n\n//app.component.ts\n@Component({\n  selector: \'app-root\',\n  templateUrl: \'./app.component.html\',\n  styleUrls: [\'./app.component.scss\']\n})\nexport class AppComponent {\n  title = \'my-app\';\n\n  ...\n\n  handleSidebarNavigationItemClick(event: any) {\n    console.log(\'Sidebar item clicked\', event.detail);\n  }\n\n  ...\n}\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"react",children:"React"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The onClick handler in React will only capture 'click' events, and won't capture custom events.\nThat's why we need to use addEventListener to listen for the custom ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ifxSidebarActionItem"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ifxSidebarNavigationItem"})," events."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:'function Sidebar() {\n  ...\n\n  const sidebarItemRefExampleClick = useRef(null);  // Create a ref for the specific sidebar item\n  useEffect(() => {\n    const sidebarItemElementExampleClick = sidebarItemRefExampleClick.current;\n\n    // Add event listener for \'ifxSidebarActionItem\' event on a specific sidebarItemElement\n    const handleNavigationItemClicked = (event) => {\n      console.log("Nested Sidebar navigation item clicked", event.detail);\n    }\n    sidebarItemElementExampleClick.addEventListener(\'ifxSidebarNavigationItem\', handleNavigationItemClicked);\n\n    // Return a cleanup function to remove the event listener\n    return () => {\n      sidebarItemElementExampleClick.removeEventListener(\'ifxSidebarNavigationItem\', handleNavigationItemClicked);\n    };\n  }, []);  // Empty array means the effect will run only on mount and unmount\n  \n  ...\n\n  return (\n    <div>\n      <IfxSidebar application-name="Application Name">\n        <IfxSidebarItem target="_blank" ref={sidebarItemRefExampleClick} icon="image-16">\n          Menu Item 3\n        </IfxSidebarItem>\n      </IfxSidebar>\n   </div>\n  )\n}\n\nexport default Sidebar;\n\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"vanilla",children:"Vanilla"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"In plain JavaScript, to add an event listener to a specific ifx-sidebar-item, we first need to select the specific ifx-sidebar-item.\nThe method to select the item depends on how you can identify it.\nWe can use an id, a class, or a data attribute, among other selectors."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:' <ifx-sidebar application-name="Application Name">\n      <ifx-sidebar-item>\n        Header Section\n        <ifx-sidebar-item icon="image-16">\n          Menu Item\n          <ifx-sidebar-item id="sidebarItemClickable" target="_blank" icon="image-16">Click\n            me</ifx-sidebar-item>\n          <ifx-sidebar-item icon="image-16" active="true">\n            Menu Item 2\n          </ifx-sidebar-item>\n        </ifx-sidebar-item>\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n  </ifx-sidebar>\n\n...\n\n<script>\n  const sidebarItem = document.querySelector(\'#sidebarItemClickable\');\n\n  document.addEventListener(\'DOMContentLoaded\', (event) => {\n   sidebarItem.addEventListener(\'ifxSidebarNavigationItem\', function (event) {\n      console.log(\'Sidebar item clicked\', event.detail);\n    });\n  });\n<\/script>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"vue",children:"Vue"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"In Vue, we can listen to the custom events directly in the template using the v-on directive (or @ shorthand).\nEvents aren't wrapped in a synthetic event system like in React.\nVue uses a model that is closer to the native JavaScript event model, which allows it to handle custom events from Web Components more seamlessly."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:'<template>\n  <div class="app">\n    <ifx-sidebar application-name="Application Name" id="sidebar">\n      <ifx-sidebar-item target="_blank" icon="image-16" @click="handleItemClick">\n        Handle item click\n      </ifx-sidebar-item>\n    </ifx-sidebar>\n  </div>\n</template>\n\n...\n\n<script setup>\nimport { ref, computed } from \'vue\';\n\n// Define the handleItemClick function in the Vue component\nconst handleItemClick = (item) => {\n  console.log("Sidebar item clicked", item.currentTarget);\n};\n\n<\/script>\n\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-submenu",children:"With Submenu"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_sidebar_stories__WEBPACK_IMPORTED_MODULE_2__.WithSubmenu,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-number-indicator",children:"With number indicator"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_sidebar_stories__WEBPACK_IMPORTED_MODULE_2__.WithNumberIndicator,sourceState:"shown"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);