"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7762,2792],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/modal/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:()=>Alert,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal",component:"ifx-modal",args:{opened:!1,cancelButtonLabel:"Cancel",okButtonLabel:"OK"},argTypes:{caption:{control:"text",description:"Title for the modal.",table:{category:"ifx-modal props"}},opened:{control:{disable:!0},description:"Default state of the modal.",table:{category:"ifx-modal props",defaultValue:{summary:"false"},type:{summary:"Example (in VanillaJs)",detail:"const modal = document.getElementById('modal'); \nconst openButton = document.getElementById('open'); \n//add DOM event listeners (e.g. click and/or keypress)\n\nfunction openModal() { \nmodal.opened=true;\n\nfunction closeModal() { \nmodal.opened = false; \n}"}}},closeOnOverlayClick:{control:"boolean",description:"Close the modal when clicking outside the window.",table:{category:"ifx-modal props",defaultValue:{summary:"false"}}},showCloseButton:{control:"boolean",description:"Show or hide close button in the modal's header.",table:{category:"ifx-modal props",defaultValue:{summary:"true"}}},alertIcon:{options:Object.keys(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.P),control:{type:"select"},description:"Icon to be displayed in the alert modal.",table:{category:"ifx-modal props",type:{summary:"string"}}},size:{options:["s","m","l"],control:{type:"radio"},description:"Usable only when screen width is more than 1024px.",table:{category:"ifx-modal props",defaultValue:{summary:"s"},type:{summary:"s | m | l"}}},variant:{options:["default","alert-brand","alert-danger"],control:{type:"radio"},description:"Variant of the modal.",table:{category:"ifx-modal props",defaultValue:{summary:"default"},type:{summary:"default | alert-brand | alert-danger"}}},cancelButtonLabel:{control:"text",description:"Label for the cancel button.",table:{category:"ifx-modal props",defaultValue:{summary:"Cancel"},type:{summary:"string"}}},okButtonLabel:{control:"text",description:"Label for the OK button.",table:{category:"ifx-modal props",defaultValue:{summary:"OK"},type:{summary:"string"}}},ifxOpen:{action:"ifxOpen",description:"Custom event emitted when modal opens.",table:{category:"custom events",type:{summary:"Framework integration",detail:'React: onIfxOpen={handleChange}\nVue:@ifxOpen="handleChange"\nAngular:(ifxOpen)="handleChange()"\nVanillaJs:.addEventListener("ifxOpen", (event) => {//handle change});'}}},ifxClose:{action:"ifxClose",description:"Custom event emitted when modal closes.",table:{category:"custom events",type:{summary:"Framework integration",detail:'React: onIfxClose={handleChange}\nVue:@ifxClose="handleChange"\nAngular:(ifxClose)="handleChange()"\nVanillaJs:.addEventListener("ifxClose", (event) => {//handle change});'}}}}},Template=({caption,showCloseButton,closeOnOverlayClick,variant,size,alertIcon,cancelButtonLabel,okButtonLabel})=>{const modal=document.createElement("ifx-modal");modal.setAttribute("caption",caption),modal.setAttribute("variant",variant),alertIcon&&modal.setAttribute("alert-icon",alertIcon),modal.setAttribute("close-on-overlay-click",closeOnOverlayClick),modal.setAttribute("show-close-button",showCloseButton),modal.setAttribute("size",size),modal.addEventListener("ifxOpen",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxOpen")),modal.addEventListener("ifxClose",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxClose"));const content=document.createElement("div");content.setAttribute("slot","content"),content.innerHTML="\n    <span>Modal content</span>\n  ",modal.appendChild(content);const buttons=document.createElement("div");buttons.setAttribute("slot","buttons");const cancelButton=document.createElement("ifx-button");cancelButton.setAttribute("variant","secondary"),cancelButton.textContent=cancelButtonLabel,cancelButton.addEventListener("click",(()=>{console.log("Button 1 clicked")}));const primaryButton=document.createElement("ifx-button");primaryButton.textContent=okButtonLabel,primaryButton.addEventListener("click",(()=>{console.log("Button 2 clicked")})),buttons.appendChild(cancelButton),buttons.appendChild(primaryButton),modal.appendChild(buttons);const openButton=document.createElement("ifx-button");openButton.id="open",openButton.textContent="Open Modal",openButton.addEventListener("click",(()=>{modal.opened=!0})),openButton.addEventListener("keydown",(event=>{"Enter"===event.key&&(modal.opened=!0)}));const storyElement=document.createElement("div");return storyElement.appendChild(modal),storyElement.appendChild(openButton),storyElement},Default=Template.bind({});Default.args={caption:"Modal Title",showCloseButton:!0,closeOnOverlayClick:!1,size:"s",variant:"default"};const Alert=Template.bind({});Alert.args={caption:"Alert-Brand Modal Title",closeOnOverlayClick:!0,alertIcon:"arrowdoen24",size:"s",variant:"alert-brand",cancelButtonLabel:"Cancel",okButtonLabel:"OK",showCloseButton:!1};const __namedExportsOrder=["Default","Alert"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  caption,\n  showCloseButton,\n  closeOnOverlayClick,\n  variant,\n  size,\n  alertIcon,\n  cancelButtonLabel,\n  okButtonLabel\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  modal.setAttribute('variant', variant);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.setAttribute('show-close-button', showCloseButton);\n  modal.setAttribute('size', size);\n  modal.addEventListener('ifxOpen', action('ifxOpen'));\n  modal.addEventListener('ifxClose', action('ifxClose'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>Modal content</span>\n  `;\n  modal.appendChild(content);\n  const buttons = document.createElement('div');\n  buttons.setAttribute('slot', 'buttons');\n  const cancelButton = document.createElement('ifx-button');\n  cancelButton.setAttribute('variant', 'secondary');\n  cancelButton.textContent = cancelButtonLabel;\n  cancelButton.addEventListener('click', () => {\n    console.log('Button 1 clicked');\n  });\n  const primaryButton = document.createElement('ifx-button');\n  primaryButton.textContent = okButtonLabel;\n  primaryButton.addEventListener('click', () => {\n    console.log('Button 2 clicked');\n  });\n  buttons.appendChild(cancelButton);\n  buttons.appendChild(primaryButton);\n  modal.appendChild(buttons);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = 'open';\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.opened = true;\n  });\n  openButton.addEventListener('keydown', event => {\n    if (event.key === 'Enter') {\n      modal.opened = true;\n    }\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Default.parameters?.docs?.source}}},Alert.parameters={...Alert.parameters,docs:{...Alert.parameters?.docs,source:{originalSource:"({\n  caption,\n  showCloseButton,\n  closeOnOverlayClick,\n  variant,\n  size,\n  alertIcon,\n  cancelButtonLabel,\n  okButtonLabel\n}) => {\n  const modal = document.createElement('ifx-modal');\n  modal.setAttribute('caption', caption);\n  modal.setAttribute('variant', variant);\n  if (alertIcon) {\n    modal.setAttribute('alert-icon', alertIcon);\n  }\n  modal.setAttribute('close-on-overlay-click', closeOnOverlayClick);\n  modal.setAttribute('show-close-button', showCloseButton);\n  modal.setAttribute('size', size);\n  modal.addEventListener('ifxOpen', action('ifxOpen'));\n  modal.addEventListener('ifxClose', action('ifxClose'));\n  const content = document.createElement('div');\n  content.setAttribute('slot', 'content');\n  content.innerHTML = `\n    <span>Modal content</span>\n  `;\n  modal.appendChild(content);\n  const buttons = document.createElement('div');\n  buttons.setAttribute('slot', 'buttons');\n  const cancelButton = document.createElement('ifx-button');\n  cancelButton.setAttribute('variant', 'secondary');\n  cancelButton.textContent = cancelButtonLabel;\n  cancelButton.addEventListener('click', () => {\n    console.log('Button 1 clicked');\n  });\n  const primaryButton = document.createElement('ifx-button');\n  primaryButton.textContent = okButtonLabel;\n  primaryButton.addEventListener('click', () => {\n    console.log('Button 2 clicked');\n  });\n  buttons.appendChild(cancelButton);\n  buttons.appendChild(primaryButton);\n  modal.appendChild(buttons);\n  const openButton = document.createElement('ifx-button');\n  openButton.id = 'open';\n  openButton.textContent = 'Open Modal';\n  openButton.addEventListener('click', () => {\n    modal.opened = true;\n  });\n  openButton.addEventListener('keydown', event => {\n    if (event.key === 'Enter') {\n      modal.opened = true;\n    }\n  });\n  const storyElement = document.createElement('div');\n  storyElement.appendChild(modal);\n  storyElement.appendChild(openButton);\n  return storyElement;\n}",...Alert.parameters?.docs?.source}}}}}]);