/*! For license information please see components-modal-Usage-mdx.e3e4abef.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9938,9134],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/modal/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),modal_stories=__webpack_require__("./src/components/modal/modal.stories.ts");const modal_alert_desktop_namespaceObject=__webpack_require__.p+"static/media/modal-alert-desktop.f6ac58f4.png",modal_default_desktop_namespaceObject=__webpack_require__.p+"static/media/modal-default-desktop.da223272.png",modal_mobile_360_namespaceObject=__webpack_require__.p+"static/media/modal-mobile-360.6e22cbd5.png",modal_anatomy_namespaceObject=__webpack_require__.p+"static/media/modal-anatomy.ece84185.png",modal_alert_status_namespaceObject=__webpack_require__.p+"static/media/modal-alert-status.cc084c54.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",code:"code",blockquote:"blockquote",h4:"h4",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:modal_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"modal",children:"Modal"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Modal creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you need to present content or interactions that require the user's immediate attention or action, while temporarily disabling the main window."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you want to display information, request user input, or guide users through a specific task within a centralized and focused modal window."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you need to convey critical or important information that requires the user's immediate attention, often associated with alerts or notifications."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"For non-critical or non-essential information that does not require the user's immediate attention or interaction."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If it creates a disruptive or intrusive experience for the user."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:modal_anatomy_namespaceObject,alt:"Modal Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Title (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The title is an optional element at the top of the modal that provides a brief, descriptive heading for the content inside the modal. It helps users understand the purpose of the modal."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Content (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The content section contains the main information that the modal intends to display to the user."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Container (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","This is the main container that holds all the content and controls within the modal. It is positioned at the center of the viewport and can have a fixed width and height or be responsive to the content it contains."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Close (Dismiss) Icon (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A close icon placed at the top right corner of the modal. Clicking on this icon dismisses the modal."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Divider (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The divider visually separates the title and content areas."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Buttons (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","If required, buttons can be displayed to confirm an action by the user. The primary button is used to confirm an action and is always aligned to the right in the modal. The secondary button is used in addition to the Dismiss icon to close the modal again / to cancel the action."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Backdrop (7)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The backdrop is a semi-transparent overlay ",(0,jsx_runtime.jsx)(_components.code,{children:"color-overlay-dark"})," that covers the rest of the page when the modal is open. Clicking on the backdrop dismisses the modal."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The default variant is a simple, clean, and unobtrusive design suitable for general information display or non-critical actions."}),"\n",(0,jsx_runtime.jsx)("img",{src:modal_default_desktop_namespaceObject,alt:"Modal Default Desktop"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"alert",children:"Alert"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The alert variant is designed for important messages and errors, or critical actions that require users' immediate attention."}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Consider that with a modal error status, the buttons should also have the error variant."}),"\n"]}),"\n",(0,jsx_runtime.jsx)("img",{src:modal_alert_desktop_namespaceObject,alt:"Modal Alert Desktop"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"status",children:"Status"}),"\n",(0,jsx_runtime.jsx)("img",{src:modal_alert_status_namespaceObject,alt:"Modal Alert Desktop"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mobile",children:"Mobile"}),"\n",(0,jsx_runtime.jsx)("img",{src:modal_mobile_360_namespaceObject,alt:"Modal Mobile < 360px"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=16494-9986&mode=design&t=k6JOreKyD9Qj9cKN-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Modal"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/modal/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:()=>Alert,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal",component:"ifx-modal",args:{opened:!1},argTypes:{caption:{control:"text",description:"Title for the modal"},opened:{control:{disable:!0},table:{type:{summary:"Example (in VanillaJs)",detail:"const modal = document.getElementById('modal'); \nconst openButton = document.getElementById('open'); \n//add DOM event listeners (e.g. click and/or keypress)\n\nfunction openModal() { \nmodal.opened=true;\n\nfunction closeModal() { \nmodal.opened = false; \n}"}},description:"Defaults to false - Can be set by referring to the component and setting it to false/true"},closeOnOverlayClick:{control:"boolean",description:"Close the modal when clicking outside the window"},alertIcon:{options:Object.keys(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c),control:{type:"select"},description:"When specified together with alertIcon then an border to the right is shown"},variant:{options:["default","alert-brand","alert-danger"],control:{type:"radio"}},onIfxModalOpen:{action:"ifxModalOpen",description:"Custom event emitted when modal opens",table:{type:{summary:"Framework integration",detail:'React: onIfxModalOpen={handleChange}\nVue:@ifxModalOpen="handleChange"\nAngular:(ifxModalOpen)="handleChange()"\nVanillaJs:.addEventListener("ifxModalOpen", (event) => {//handle change});'}}},onIfxModalClose:{action:"ifxModalClose",description:"Custom event emitted when modal closes",table:{type:{summary:"Framework integration",detail:'React: onIfxModalClose={handleChange}\nVue:@ifxModalClose="handleChange"\nAngular:(ifxModalClose)="handleChange()"\nVanillaJs:.addEventListener("ifxModalClose", (event) => {//handle change});'}}}}},Template=({caption,closeOnOverlayClick,variant,alertIcon})=>{const modal=document.createElement("ifx-modal");modal.setAttribute("caption",caption),modal.setAttribute("variant",variant),alertIcon&&modal.setAttribute("alert-icon",alertIcon),modal.setAttribute("close-on-overlay-click",closeOnOverlayClick),modal.addEventListener("ifxModalOpen",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxModalOpen")),modal.addEventListener("ifxModalClose",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxModalClose"));const content=document.createElement("div");content.setAttribute("slot","content"),content.innerHTML="\n    <span>Modal content</span>\n  ",modal.appendChild(content);const buttons=document.createElement("div");buttons.setAttribute("slot","buttons");const cancelButton=document.createElement("ifx-button");cancelButton.setAttribute("variant","secondary"),cancelButton.textContent="Button 1",cancelButton.addEventListener("click",(()=>{console.log("Button 1 clicked")}));const primaryButton=document.createElement("ifx-button");primaryButton.textContent="Button 2",primaryButton.addEventListener("click",(()=>{console.log("Button 2 clicked")})),buttons.appendChild(cancelButton),buttons.appendChild(primaryButton),modal.appendChild(buttons);const openButton=document.createElement("ifx-button");openButton.id="open",openButton.textContent="Open Modal",openButton.addEventListener("click",(()=>{modal.opened=!0})),openButton.addEventListener("keydown",(event=>{"Enter"===event.key&&(modal.opened=!0)}));const storyElement=document.createElement("div");return storyElement.appendChild(modal),storyElement.appendChild(openButton),storyElement},Default=Template.bind({});Default.args={caption:"Modal Title",closeOnOverlayClick:!1,variant:"default"};const Alert=Template.bind({});Alert.args={caption:"Alert-Brand Modal Title",closeOnOverlayClick:!0,alertIcon:"arrowdoen24",variant:"alert-brand"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  caption,\n  closeOnOverlayClick,\n  variant,\n  alertIcon\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  modal.setAttribute('variant', variant);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.addEventListener('ifxModalOpen', action('ifxModalOpen'));\n  modal.addEventListener('ifxModalClose', action('ifxModalClose'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>Modal content</span>\n  `;\n  modal.appendChild(content);\n  const buttons = document.createElement('div');\n  buttons.setAttribute('slot', 'buttons');\n  const cancelButton = document.createElement('ifx-button');\n  cancelButton.setAttribute('variant', 'secondary');\n  cancelButton.textContent = 'Button 1';\n  cancelButton.addEventListener('click', () => {\n    console.log(\"Button 1 clicked\");\n  });\n  const primaryButton = document.createElement('ifx-button');\n  primaryButton.textContent = 'Button 2';\n  primaryButton.addEventListener('click', () => {\n    console.log(\"Button 2 clicked\");\n  });\n  buttons.appendChild(cancelButton);\n  buttons.appendChild(primaryButton);\n  modal.appendChild(buttons);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = \"open\";\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.opened = true;\n  });\n  openButton.addEventListener('keydown', event => {\n    if (event.key === 'Enter') {\n      modal.opened = true;\n    }\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Default.parameters?.docs?.source}}},Alert.parameters={...Alert.parameters,docs:{...Alert.parameters?.docs,source:{originalSource:"({\n  caption,\n  closeOnOverlayClick,\n  variant,\n  alertIcon\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  modal.setAttribute('variant', variant);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.addEventListener('ifxModalOpen', action('ifxModalOpen'));\n  modal.addEventListener('ifxModalClose', action('ifxModalClose'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>Modal content</span>\n  `;\n  modal.appendChild(content);\n  const buttons = document.createElement('div');\n  buttons.setAttribute('slot', 'buttons');\n  const cancelButton = document.createElement('ifx-button');\n  cancelButton.setAttribute('variant', 'secondary');\n  cancelButton.textContent = 'Button 1';\n  cancelButton.addEventListener('click', () => {\n    console.log(\"Button 1 clicked\");\n  });\n  const primaryButton = document.createElement('ifx-button');\n  primaryButton.textContent = 'Button 2';\n  primaryButton.addEventListener('click', () => {\n    console.log(\"Button 2 clicked\");\n  });\n  buttons.appendChild(cancelButton);\n  buttons.appendChild(primaryButton);\n  modal.appendChild(buttons);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = \"open\";\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.opened = true;\n  });\n  openButton.addEventListener('keydown', event => {\n    if (event.key === 'Enter') {\n      modal.opened = true;\n    }\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Alert.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Alert"]},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);