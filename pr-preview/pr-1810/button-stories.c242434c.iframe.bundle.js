"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3399],{"./src/components/button/button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",tags:["autodocs"],args:{label:"Button",variant:"primary",theme:"default",type:"button",size:"m",fullWidth:!1,disabled:!1,icon:"",iconPosition:"left",href:!1,url:"",target:"_blank"},argTypes:{label:{name:"Label of Button",description:"Sets the text displayed on the *<ifx-button>*.",table:{category:"story controls"}},icon:{description:"The icon to be displayed.",control:"select",options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__.P).map((i=>i.name)),table:{category:"ifx-button props",type:{summary:"string"}}},variant:{description:"Sets the style variant of the button.",control:"radio",options:["primary","secondary","tertiary"],table:{category:"ifx-button props",defaultValue:{summary:"primary"}}},theme:{description:"Specifies the theme style of the button.",control:"radio",options:["default","danger","inverse"],table:{category:"ifx-button props",defaultValue:{summary:"default"}}},type:{description:"Sets the type attribute of the button.",control:"radio",options:["button","submit","reset"],table:{category:"ifx-button props",defaultValue:{summary:"button"}}},size:{description:"Sets the size of the button. Options: xs (32px) s (36px),  m (40px), l (48px)",control:"radio",options:["xs","s","m","l"],table:{category:"ifx-button props",defaultValue:{summary:"m"}}},fullWidth:{description:"When set to **true**, expands the button to take the full width of its container.",control:"boolean",table:{category:"ifx-button props",defaultValue:{summary:"false"}}},disabled:{description:"Disables the button when set to true.",control:"boolean",table:{category:"ifx-button props",defaultValue:{summary:"false"}}},iconPosition:{description:"Determines the position of an icon within the button if an icon is used.",control:"radio",options:["left","right"],table:{category:"ifx-button props",defaultValue:{summary:"left"}}},href:{description:"When set to **true**, treats the button as a link by setting a URL.",control:"boolean",table:{category:"ifx-button props",defaultValue:{summary:"false"}}},url:{description:"Specifies the destination URL for the button when it acts as a link.",table:{category:"ifx-button props",type:{summary:"string"}}},target:{description:"Determines where to open the linked document when the button is clicked.",control:"radio",options:["_blank","_self","_parent"],table:{category:"ifx-button props",defaultValue:{summary:"_blank"}}}}},Default=(args=>`<ifx-button type="${args.type}" disabled="${args.disabled}" variant="${args.variant}" size="${args.size}" target="${args.target}" theme="${args.theme}" ${args.href?`href="${args.url}"`:""} full-width="${args.fullWidth}">\n  ${args.icon&&"LEFT"===args.iconPosition.toUpperCase()?`<ifx-icon icon="${args.icon}"></ifx-icon>`:""}${args.label}${args.icon&&"RIGHT"===args.iconPosition.toUpperCase()?`<ifx-icon icon="${args.icon}"></ifx-icon>`:""} \n</ifx-button>`).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-button type="${args.type}" disabled="${args.disabled}" variant="${args.variant}" size="${args.size}" target="${args.target}" theme="${args.theme}" ${args.href ? `href="${args.url}"` : \'\'} full-width="${args.fullWidth}">\n  ${args.icon && args.iconPosition.toUpperCase() === \'LEFT\' ? `<ifx-icon icon="${args.icon}"></ifx-icon>` : \'\'}${args.label}${args.icon && args.iconPosition.toUpperCase() === \'RIGHT\' ? `<ifx-icon icon="${args.icon}"></ifx-icon>` : \'\'} \n</ifx-button>`',...Default.parameters?.docs?.source}}}}}]);