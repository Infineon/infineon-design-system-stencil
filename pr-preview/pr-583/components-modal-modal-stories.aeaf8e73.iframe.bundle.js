"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9134],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/modal/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:()=>Alert,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal",component:"ifx-modal",argTypes:{caption:{control:"text",description:"Title for the modal"},closeOnOverlayClick:{control:"boolean",description:"Close the modal when clicking outside the window"},alertIcon:{options:Object.keys(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c),control:{type:"select"},description:"When specified together with alertIcon then an border to the right is shown"},variant:{options:["default","alert-brand","alert-danger"],control:{type:"radio"}},modalOpen:{action:"modalOpen",description:"Custom event emitted when modal opened",table:{type:{summary:"Framework integration",detail:'React: onModalOpen={handleChange}\nVue:@modalOpen="handleChange"\nAngular:(modalOpen)="handleChange()"\nVanillaJs:.addEventListener("modalOpen", (event) => {//handle change});'}}},modalClose:{action:"modalClose",description:"Custom event emitted when modal closed",table:{type:{summary:"Framework integration",detail:'React: onModalClose={handleChange}\nVue:@modalClose="handleChange"\nAngular:(modalClose)="handleChange()"\nVanillaJs:.addEventListener("modalClose", (event) => {//handle change});'}}},closeButtonClick:{action:"closeButtonClick",description:"Custom event emitted when close button clicked",table:{type:{summary:"Framework integration",detail:'React: onCloseButtonClick={handleChange}\nVue:@closeButtonClick="handleChange"\nAngular:(closeButtonClick)="handleChange()"\nVanillaJs:.addEventListener("closeButtonClick", (event) => {//handle change});'}}}}},Template=({caption,closeOnOverlayClick,variant,alertIcon})=>{const modal=document.createElement("ifx-modal");modal.setAttribute("caption",caption),modal.setAttribute("variant",variant),alertIcon&&modal.setAttribute("alert-icon",alertIcon),modal.setAttribute("close-on-overlay-click",closeOnOverlayClick),modal.addEventListener("modalOpen",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("modalOpen")),modal.addEventListener("modalClose",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("modalClose")),modal.addEventListener("closeButtonClick",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("closeButtonClick"));const content=document.createElement("div");content.setAttribute("slot","content"),content.innerHTML="\n    <span>Modal content</span>\n  ",modal.appendChild(content);const buttons=document.createElement("div");buttons.setAttribute("slot","buttons");const cancelButton=document.createElement("ifx-button");cancelButton.setAttribute("variant","secondary"),cancelButton.textContent="Button",cancelButton.addEventListener("click",(()=>{modal.close()}));const primaryButton=document.createElement("ifx-button");primaryButton.textContent="Button",primaryButton.addEventListener("click",(()=>{modal.close()})),buttons.appendChild(cancelButton),buttons.appendChild(primaryButton),modal.appendChild(buttons);const openButton=document.createElement("ifx-button");openButton.id="open",openButton.textContent="Open Modal",openButton.addEventListener("click",(()=>{modal.open()}));const storyElement=document.createElement("div");return storyElement.appendChild(modal),storyElement.appendChild(openButton),storyElement},Default=Template.bind({});Default.args={caption:"Modal Title",closeOnOverlayClick:!1,variant:"default"};const Alert=Template.bind({});Alert.args={caption:"Alert-Brand Modal Title",closeOnOverlayClick:!0,alertIcon:"arrowdoen24",variant:"alert-brand"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  caption,\n  closeOnOverlayClick,\n  variant,\n  alertIcon\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  modal.setAttribute('variant', variant);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.addEventListener('modalOpen', action('modalOpen'));\n  modal.addEventListener('modalClose', action('modalClose'));\n  modal.addEventListener('closeButtonClick', action('closeButtonClick'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>Modal content</span>\n  `;\n  modal.appendChild(content);\n  const buttons = document.createElement('div');\n  buttons.setAttribute('slot', 'buttons');\n  const cancelButton = document.createElement('ifx-button');\n  cancelButton.setAttribute('variant', 'secondary');\n  cancelButton.textContent = 'Button';\n  cancelButton.addEventListener('click', () => {\n    modal.close();\n  });\n  const primaryButton = document.createElement('ifx-button');\n  primaryButton.textContent = 'Button';\n  primaryButton.addEventListener('click', () => {\n    modal.close();\n  });\n  buttons.appendChild(cancelButton);\n  buttons.appendChild(primaryButton);\n  modal.appendChild(buttons);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = 'open';\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.open();\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Default.parameters?.docs?.source}}},Alert.parameters={...Alert.parameters,docs:{...Alert.parameters?.docs,source:{originalSource:"({\n  caption,\n  closeOnOverlayClick,\n  variant,\n  alertIcon\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  modal.setAttribute('variant', variant);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.addEventListener('modalOpen', action('modalOpen'));\n  modal.addEventListener('modalClose', action('modalClose'));\n  modal.addEventListener('closeButtonClick', action('closeButtonClick'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>Modal content</span>\n  `;\n  modal.appendChild(content);\n  const buttons = document.createElement('div');\n  buttons.setAttribute('slot', 'buttons');\n  const cancelButton = document.createElement('ifx-button');\n  cancelButton.setAttribute('variant', 'secondary');\n  cancelButton.textContent = 'Button';\n  cancelButton.addEventListener('click', () => {\n    modal.close();\n  });\n  const primaryButton = document.createElement('ifx-button');\n  primaryButton.textContent = 'Button';\n  primaryButton.addEventListener('click', () => {\n    modal.close();\n  });\n  buttons.appendChild(cancelButton);\n  buttons.appendChild(primaryButton);\n  modal.appendChild(buttons);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = 'open';\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.open();\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Alert.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Alert"]}}]);