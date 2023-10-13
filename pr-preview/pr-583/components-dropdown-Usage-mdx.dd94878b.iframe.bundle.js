/*! For license information please see components-dropdown-Usage-mdx.dd94878b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3898,2370],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/dropdown/dropdown.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LabelTrigger:()=>LabelTrigger,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown",args:{label:"Dropdown",size:"m",disabled:!1,search:!1,header:!1,separator:!1,variant:"primary",url:"",target:"_self",icon:"c-check-16",dropdownMenuItemIcon:!1,defaultOpen:!1,noCloseOnOutsideClick:!1,noCloseOnMenuClick:!1,noAppendToBody:!1,placement:"bottom-start"},argTypes:{placement:{options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],control:{type:"select"}},label:{description:"The visible name or label for the dropdown button"},size:{description:'The size of the dropdown. Accepted values are "s" for small and "m" for medium',options:["s","m"],control:{type:"radio"}},disabled:{description:"Determines if the dropdown button should be disabled"},variant:{description:'The visual style of the dropdown button. Accepted values are "primary", "secondary", "tertiary"',options:["primary","secondary","tertiary"],control:{type:"radio"}},target:{options:["_self","_blank"],control:{type:"radio"}},icon:{description:"The icon to be displayed on the dropdown button",options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c).map((i=>i.name)),control:{type:"select"}},defaultOpen:{description:"Determines if the dropdown should be open by default"},noCloseOnOutsideClick:{description:"Determines if the dropdown should not close when a click outside the dropdown happens"},noCloseOnMenuClick:{description:"Determines if the dropdown should not close when a click inside the dropdown menu happens"},noAppendToBody:{description:"Determines if the dropdown should not be appended to the body"},ifxOpen:{action:"ifxOpen",description:"Custom event that is emitted when the dropdown opens",table:{type:{summary:"Framework integration",detail:'React: onIfxOpen={handleChange}\nVue:@ifxOpen="handleChange"\nAngular:(ifxOpen)="handleChange()"\nVanillaJs:.addEventListener("ifxOpen", (event) => {//handle change});'}}},ifxClose:{action:"ifxClose",description:"Custom event emitted when dropdown closes",table:{type:{summary:"Framework integration",detail:'React: onIfxClose={handleChange}\nVue:@ifxClose="handleChange"\nAngular:(ifxClose)="handleChange()"\nVanillaJs:.addEventListener("ifxClose", (event) => {//handle change});'}}},ifxDropdownMenuItem:{action:"ifxDropdownMenuItem",description:"Custom event emitted when an item is selected",table:{type:{summary:"Framework integration",detail:'React: onIfxDropdownMenuItem={handleChange}\nVue:@ifxDropdownMenuItem="handleChange"\nAngular:(ifxDropdownMenuItem)="handleChange()"\nVanillaJs:.addEventListener("ifxDropdownMenuItem", (event) => {//handle change});'}}}}},Default=(args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`<ifx-dropdown placement="${args.placement}" disabled="${args.disabled}" no-close-on-menu-click="${args.noCloseOnOutsideClick}">\n  <ifx-dropdown-trigger-button variant="${args.variant}">\n    dropdown\n  </ifx-dropdown-trigger-button>\n  <ifx-dropdown-menu size="${args.size}">\n    ${args.header?"<ifx-dropdown-header>Header Text</ifx-dropdown-header>":""}\n    ${args.search?'<ifx-search-field show-delete-icon="false"></ifx-search-field>':""}\n    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon?"c-info-16":""}" target="${args.target}" href="${""!==args.url?args.url:""}">Menu Item</ifx-dropdown-item>\n    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon?"c-info-16":""}" target="${args.target}" href="${""!==args.url?args.url:""}">Menu Item</ifx-dropdown-item>\n    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon?"c-info-16":""}" target="${args.target}" href="${""!==args.url?args.url:""}">Menu Item</ifx-dropdown-item>\n    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon?"c-info-16":""}" target="${args.target}" href="${""!==args.url?args.url:""}">Menu Item</ifx-dropdown-item>\n    ${args.separator?"<ifx-dropdown-separator></ifx-dropdown-separator>":""}\n    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon?"c-info-16":""}" target="${args.target}" href="${""!==args.url?args.url:""}">Menu Item</ifx-dropdown-item>\n  </ifx-dropdown-menu>\n</ifx-dropdown>`;const dropdown=wrapper.querySelector("ifx-dropdown"),dropdownMenu=dropdown.querySelector("ifx-dropdown-menu");return dropdown.addEventListener("ifxOpen",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxOpen")),dropdown.addEventListener("ifxClose",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxClose")),dropdownMenu.addEventListener("ifxDropdownMenuItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxDropdownMenuItem")),wrapper}).bind({}),LabelTrigger=(args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`<ifx-dropdown\n    placement="${args.placement}"\n    default-open="${args.defaultOpen}"\n    no-close-on-outside-click="${args.noCloseOnOutsideClick}"\n    no-close-on-menu-click="${args.noCloseOnOutsideClick}"\n    disabled="${args.disabled}"\n    no-append-to-body="${args.noAppendToBody}"\n  >\n    Hello World! Click on the text to open the dropdown\n    <ifx-dropdown-trigger>\n      <ifx-icon icon="${args.icon}"></ifx-icon>\n    </ifx-dropdown-trigger>\n    Some more text\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-dropdown>`;const dropdown=wrapper.querySelector("ifx-dropdown"),dropdownMenu=dropdown.querySelector("ifx-dropdown-menu");return dropdown.addEventListener("ifxOpen",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxOpen")),dropdown.addEventListener("ifxClose",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxClose")),dropdownMenu.addEventListener("ifxDropdownMenuItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxDropdownMenuItem")),wrapper}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `<ifx-dropdown placement="${args.placement}" disabled="${args.disabled}" no-close-on-menu-click="${args.noCloseOnOutsideClick}">\n  <ifx-dropdown-trigger-button variant="${args.variant}">\n    dropdown\n  </ifx-dropdown-trigger-button>\n  <ifx-dropdown-menu size="${args.size}">\n    ${args.header ? `<ifx-dropdown-header>Header Text</ifx-dropdown-header>` : ""}\n    ${args.search ? `<ifx-search-field show-delete-icon="false"></ifx-search-field>` : ""}\n    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon ? \'c-info-16\' : ""}" target="${args.target}" href="${args.url !== "" ? args.url : ""}">Menu Item</ifx-dropdown-item>\n    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon ? \'c-info-16\' : ""}" target="${args.target}" href="${args.url !== "" ? args.url : ""}">Menu Item</ifx-dropdown-item>\n    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon ? \'c-info-16\' : ""}" target="${args.target}" href="${args.url !== "" ? args.url : ""}">Menu Item</ifx-dropdown-item>\n    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon ? \'c-info-16\' : ""}" target="${args.target}" href="${args.url !== "" ? args.url : ""}">Menu Item</ifx-dropdown-item>\n    ${args.separator ? `<ifx-dropdown-separator></ifx-dropdown-separator>` : ""}\n    <ifx-dropdown-item icon="${args.dropdownMenuItemIcon ? \'c-info-16\' : ""}" target="${args.target}" href="${args.url !== "" ? args.url : ""}">Menu Item</ifx-dropdown-item>\n  </ifx-dropdown-menu>\n</ifx-dropdown>`;\n  const dropdown = (wrapper.querySelector(\'ifx-dropdown\') as HTMLElement);\n  const dropdownMenu = dropdown.querySelector(\'ifx-dropdown-menu\');\n  dropdown.addEventListener(\'ifxOpen\', action(\'ifxOpen\'));\n  dropdown.addEventListener(\'ifxClose\', action(\'ifxClose\'));\n  dropdownMenu.addEventListener(\'ifxDropdownMenuItem\', action(\'ifxDropdownMenuItem\'));\n  return wrapper;\n}',...Default.parameters?.docs?.source}}},LabelTrigger.parameters={...LabelTrigger.parameters,docs:{...LabelTrigger.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `<ifx-dropdown\n    placement=\"${args.placement}\"\n    default-open=\"${args.defaultOpen}\"\n    no-close-on-outside-click=\"${args.noCloseOnOutsideClick}\"\n    no-close-on-menu-click=\"${args.noCloseOnOutsideClick}\"\n    disabled=\"${args.disabled}\"\n    no-append-to-body=\"${args.noAppendToBody}\"\n  >\n    Hello World! Click on the text to open the dropdown\n    <ifx-dropdown-trigger>\n      <ifx-icon icon=\"${args.icon}\"></ifx-icon>\n    </ifx-dropdown-trigger>\n    Some more text\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-dropdown>`;\n  const dropdown = (wrapper.querySelector('ifx-dropdown') as HTMLElement);\n  const dropdownMenu = dropdown.querySelector('ifx-dropdown-menu');\n  dropdown.addEventListener('ifxOpen', action('ifxOpen'));\n  dropdown.addEventListener('ifxClose', action('ifxClose'));\n  dropdownMenu.addEventListener('ifxDropdownMenuItem', action('ifxDropdownMenuItem'));\n  return wrapper;\n}",...LabelTrigger.parameters?.docs?.source}}};const __namedExportsOrder=["Default","LabelTrigger"]},"./src/components/dropdown/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),dropdown_stories=__webpack_require__("./src/components/dropdown/dropdown.stories.ts");const dropdown_menu_variants_namespaceObject=__webpack_require__.p+"static/media/dropdown-menu-variants.f0a39a6a.png",dropdown_menu_trigger_namespaceObject=__webpack_require__.p+"static/media/dropdown-menu-trigger.b3ca80ee.png",dropdown_menu_states_namespaceObject=__webpack_require__.p+"static/media/dropdown-menu-states.96b19615.png",dropdown_menu_sizes_namespaceObject=__webpack_require__.p+"static/media/dropdown-menu-sizes.59071105.png",dropdown_menu_scroll_behavior_namespaceObject=__webpack_require__.p+"static/media/dropdown-menu-scroll-behavior.4ce69766.png",dropdown_menu_filter_search_namespaceObject=__webpack_require__.p+"static/media/dropdown-menu-filter-search.707d267b.png",dropdown_menu_filter_search_flow_namespaceObject=__webpack_require__.p+"static/media/dropdown-menu-filter-search-flow.3463fb87.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",h5:"h5",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:dropdown_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"dropdown-menu",children:"Dropdown Menu"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The dropdown menu drops-down when a trigger is clicked. There are different dropdown menu items that are used dependent on the function."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you want to avoid cluttering the screen with numerous options."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you want to present a list of options which can be opened with any trigger."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you want to present a list of options which can be opened with a select field. Use a select instead."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you want to provide additional menu links in the navbar. Use a submenu instead."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_menu_variants_namespaceObject,alt:"Dropdown Menu Variants"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Default"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Our default menu items which can be used or combined with different properties."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Icons"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","It is possible to use icons on the left side of the menu item."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Divider"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Use a divider to provide a clear distinction between different categories of options."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Header"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","It is possible to use a descriptive heading that summarizes the actions that can be made in the drop-down menu."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"filter-search",children:"Filter search"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Filter Search feature offers the possibility to filter inside a dropdown menu. This is very helpful if there is a lot of data which can be filtered in order to e.g. filter the output of a data table. The Filter Search feature can be applied to any other trigger like a simple icon or a link."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_menu_filter_search_namespaceObject,alt:"Dropdown Menu Filter Search"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"The Filter Search variant is always located at the top of a drop-down menu."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Due to the scrolling behavior, the Filter Search is fixed at the top."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"autocomplete",children:"Autocomplete"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The system suggests possible search queries or completions as users type in their search terms."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_menu_filter_search_flow_namespaceObject,alt:"Dropdown Menu Filter Search Flow"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"trigger",children:"Trigger"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A dropdown menu is placed directly under it’s triggers bounding box. A trigger can be for example a button, a text link or an icon button."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_menu_trigger_namespaceObject,alt:"Dropdown Menu Trigger"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"scrolling-behavior",children:"Scrolling behavior"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To enhance user experience, it is advisable to display a portion equal to 50% of the container height for the last item, even when scroll bars are not enabled. This serves as a visual cue that there is additional content within the menu. Starting the scroll at the sixth option in the menu is a suggested approach. In some cases the optimal starting point may differ depending on your specific use case."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_menu_scroll_behavior_namespaceObject,alt:"Dropdown Menu Scroll Behavior",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Scroll bar (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Can be optionally displayed if there are lots of menu items in the dropdown. The bar is browser native."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Clipped menu(2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Indicates that there is more to scroll."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are two dropdown menu sizes: 40px (Large) and 36px (Small)."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_menu_sizes_namespaceObject,alt:"Dropdown Menu Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_menu_states_namespaceObject,alt:"Dropdown Menu States"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=2602-6446&mode=design",target:"_blank",rel:"nofollow noopener noreferrer",children:"Dropdown Menu"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);