"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[841],{"./src/components/link/link.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Link",tags:["autodocs"],args:{label:"Link",href:"",target:"_blank",size:"m",disabled:!1,variant:"bold"},argTypes:{target:{options:["_blank","_self","_parent"],control:{type:"radio"}},size:{description:"Font Size options: s (14px), m (16px), l (18px), xl (20px) - default: m",options:["s","m","l","xl"],control:{type:"radio"}},variant:{options:["bold","underlined","title","menu"],control:{type:"radio"}}}},Default=(args=>`<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" disabled="${args.disabled}" >\n  ${args.label}\n  </ifx-link>`).bind({}),WithIcon=(args=>`<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" >\n  ${args.label}\n  <ifx-icon icon="arrow-right-16"></ifx-icon>\n  </ifx-link>`).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" disabled="${args.disabled}" >\n  ${args.label}\n  </ifx-link>`',...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'args => `<ifx-link href="${args.href}" target="${args.target}" size="${args.size}" variant="${args.variant}" >\n  ${args.label}\n  <ifx-icon icon="arrow-right-16"></ifx-icon>\n  </ifx-link>`',...WithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithIcon"]}}]);