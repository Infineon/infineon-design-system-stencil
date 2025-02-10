"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8021,2792],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/text-field/text-field.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Text Field",args:{label:"Label",error:!1,disabled:!1,size:"m",icon:"c-info-16",success:!1,placeholder:"Placeholder",caption:"Caption",required:!0,optional:!1,name:"text-field",showDeleteIcon:!1,maxlength:"",value:""},argTypes:{label:{name:"Label of Text Field",description:"The text label displayed above the *<ifx-text-field>*.",table:{category:"story controls"}},error:{description:"Indicates an error state for the text field.",table:{category:"ifx-text-field props",defaultValue:{summary:!1}}},disabled:{description:"Disables the text field.",table:{category:"ifx-text-field props",defaultValue:{summary:!1}}},size:{description:"Size options: s (36px) and m (40px) - default: m",options:["s","m"],control:"radio",table:{category:"ifx-text-field props",defaultValue:{summary:"m"}}},icon:{description:"Specifies an icon to display within the text field.",options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.P).map((i=>i.name)),control:"select",table:{category:"ifx-text-field props",defaultValue:{summary:"c-info-16"}}},success:{description:"Indicates a successful state for the text field.",table:{category:"ifx-text-field props",defaultValue:{summary:!1}}},placeholder:{description:"Displays a placeholder text inside the text field when it is empty.",table:{category:"ifx-text-field props"}},caption:{description:"Text displayed below the text field to provide additional information.",table:{category:"ifx-text-field props"}},required:{description:"Marks the text field as required for form submission. Displays an asterisk next to the label when set to **true**.",table:{category:"ifx-text-field props",defaultValue:{summary:!0}}},optional:{description:"Indicates that the field is optional.",table:{category:"ifx-text-field props",defaultValue:{summary:!1}}},name:{description:"Name of the element, that is used as reference when a form is submitted.",table:{category:"ifx-text-field props"}},showDeleteIcon:{description:"Displays a delete icon inside the text field when set to **true**, allowing user to clear the input content.",table:{category:"ifx-text-field props",defaultValue:{summary:!1}}},maxlength:{description:"Specifies the maximum number of characters that can be entered into the text field.",control:"number",table:{category:"ifx-text-field props"}},value:{description:"The value of the text field. It is used for the form submission.",control:"text",table:{category:"ifx-text-field props",type:{summary:"string"}}},ifxInput:{action:"ifxInput",description:"Custom event emitted on input change.",table:{category:"custom events",type:{summary:"Framework integration",detail:'React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});'}}}}},Default=(({error,disabled,success,size,placeholder,label,caption,icon,required,optional,name,maxlength,showDeleteIcon,value})=>{const element=document.createElement("ifx-text-field");element.setAttribute("error",error),element.setAttribute("disabled",disabled),element.setAttribute("size",size),element.setAttribute("icon",icon),element.setAttribute("success",success),element.setAttribute("placeholder",placeholder),element.setAttribute("caption",caption),element.setAttribute("required",required),element.setAttribute("optional",optional),element.setAttribute("name",name),element.setAttribute("show-delete-icon",showDeleteIcon),element.setAttribute("value",value),maxlength&&element.setAttribute("maxlength",maxlength),element.addEventListener("ifxInput",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxInput"));const slotContent=document.createTextNode(label);return element.appendChild(slotContent),element}).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  error,\n  disabled,\n  success,\n  size,\n  placeholder,\n  label,\n  caption,\n  icon,\n  required,\n  optional,\n  name,\n  maxlength,\n  showDeleteIcon,\n  value\n}) => {\n  const element = document.createElement('ifx-text-field');\n  element.setAttribute('error', error);\n  element.setAttribute('disabled', disabled);\n  element.setAttribute('size', size);\n  element.setAttribute('icon', icon);\n  element.setAttribute('success', success);\n  element.setAttribute('placeholder', placeholder);\n  element.setAttribute('caption', caption);\n  element.setAttribute('required', required);\n  element.setAttribute('optional', optional);\n  element.setAttribute('name', name);\n  element.setAttribute('show-delete-icon', showDeleteIcon);\n  element.setAttribute('value', value);\n  if (maxlength) element.setAttribute('maxlength', maxlength);\n  element.addEventListener('ifxInput', action('ifxInput'));\n  const slotContent = document.createTextNode(label);\n  element.appendChild(slotContent);\n  return element;\n}",...Default.parameters?.docs?.source}}}}}]);