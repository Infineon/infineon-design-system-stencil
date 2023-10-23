/*! For license information please see components-text-field-Usage-mdx.9bf7bd83.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7195,2273],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/text-field/text-field.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Text Field",tags:["autodocs"],args:{disabled:!1,size:"m",success:!1,label:"Label",placeholder:"Placeholder",error:!1,caption:"Caption",required:!0,optional:!1,icon:"c-info-16"},argTypes:{size:{description:"Size options: s (36px) and m (40px) - default: m",options:["s","m"],control:{type:"radio"}},onIfxInput:{action:"ifxInput"},icon:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c).map((i=>i.name)),control:{type:"select"}}}},Default=(({error,disabled,success,size,placeholder,label,caption,icon,required,optional})=>{const element=document.createElement("ifx-text-field");element.setAttribute("error",error),element.setAttribute("disabled",disabled),element.setAttribute("size",size),element.setAttribute("icon",icon),element.setAttribute("success",success),element.setAttribute("placeholder",placeholder),element.setAttribute("caption",caption),element.setAttribute("required",required),element.setAttribute("optional",optional),element.addEventListener("ifxInput",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxInput"));const slotContent=document.createTextNode(label);return element.appendChild(slotContent),element}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  error,\n  disabled,\n  success,\n  size,\n  placeholder,\n  label,\n  caption,\n  icon,\n  required,\n  optional\n}) => {\n  const element = document.createElement('ifx-text-field');\n  element.setAttribute('error', error);\n  element.setAttribute('disabled', disabled);\n  element.setAttribute('size', size);\n  element.setAttribute('icon', icon);\n  element.setAttribute('success', success);\n  element.setAttribute('placeholder', placeholder);\n  element.setAttribute('caption', caption);\n  element.setAttribute('required', required);\n  element.setAttribute('optional', optional);\n  element.addEventListener('ifxInput', action('ifxInput'));\n  const slotContent = document.createTextNode(label);\n  element.appendChild(slotContent);\n  return element;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/text-field/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),text_field_stories=__webpack_require__("./src/components/text-field/text-field.stories.ts");const text_field_anatomy_namespaceObject=__webpack_require__.p+"static/media/text-field-anatomy.6632cd46.png",text_field_sizes_namespaceObject=__webpack_require__.p+"static/media/text-field-sizes.9b2fecfe.png",text_field_states_namespaceObject=__webpack_require__.p+"static/media/text-field-states.a0747423.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:text_field_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"text-field",children:"Text Field"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The text field component allows users to input textual data into a form or application. It varies in width depending on what type of input is required."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If it requires user input of textual information like login- and contact forms."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the users have to input more than one line of text. Instead use a text area."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the users have to input something from a predefined list. Instead use a select box."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"For a search bar. Instead use the search bar component."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:text_field_anatomy_namespaceObject,alt:"Text Field Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Label (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Use a label to describe the purpose of the text field to the user."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Required field (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Mark a text field as required when the information entered into the Text field is necessary for the user to proceed with a specific action, such as submitting a form. It is indicated with an asterisk (*) next to the label."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Icon (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","In some scenarios it can be useful to use an icon right next to the placeholder."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Field (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The container where a user inputs data."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Placeholder text (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Placeholder text is the text that is displayed inside the text field before the user enters any information. Use it to provide an example or to give users an idea of the type of information they should input."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Optional field (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Mark a text field as optional when the information entered into the text field is not necessary for the user to proceed with a specific action."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Caption text (7)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Use caption text to provide additional context or information about the text field. It can be used to provide examples or instructions for filling out the text field."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:text_field_states_namespaceObject,alt:"Text Field States"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are two text field sizes: 36px and 40px. This will give you more flexibility in structuring layouts due to e.g. different button heights. It's important to maintain uniform field height while combining form elements on a single page."}),"\n",(0,jsx_runtime.jsx)("img",{src:text_field_sizes_namespaceObject,alt:"Text Field Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=2389-2467&mode=design",target:"_blank",rel:"nofollow noopener noreferrer",children:"Text Field"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);