"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8928],{"./src/components/progress-bar/progress-bar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Progress Bar",tags:["autodocs"],args:{size:"m",percentage:50,showLabel:!1},argTypes:{percentage:{control:{type:"range",min:0,max:100}},size:{description:"Size options: s (36px) and m (40px) - default: m",options:["s","m"],control:{type:"radio"}}}},Template=args=>{const wrapper=document.createElement("div");return wrapper.innerHTML=`\n    <ifx-progress-bar\n      value="${args.percentage}"\n      size="${args.size}"\n      show-label="${args.showLabel}"\n    ></ifx-progress-bar>\n  `,wrapper.innerHTML},Default=Template.bind({});Default.args={size:"m",percentage:50,showLabel:!1};const Small=Template.bind({});Small.args={percentage:75,size:"s"};const WithLabel=Template.bind({});WithLabel.args={percentage:25,showLabel:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      value="${args.percentage}"\n      size="${args.size}"\n      show-label="${args.showLabel}"\n    ></ifx-progress-bar>\n  `;\n  return wrapper.innerHTML;\n}',...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      value="${args.percentage}"\n      size="${args.size}"\n      show-label="${args.showLabel}"\n    ></ifx-progress-bar>\n  `;\n  return wrapper.innerHTML;\n}',...Small.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      value="${args.percentage}"\n      size="${args.size}"\n      show-label="${args.showLabel}"\n    ></ifx-progress-bar>\n  `;\n  return wrapper.innerHTML;\n}',...WithLabel.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Small","WithLabel"]}}]);