"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4872],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/switch/switch.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Switch",tags:["autodocs"],args:{value:!1,disabled:!1},argTypes:{onIfxChange:{description:"Custom event",table:{type:{summary:"Framework integration",detail:'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});'}},action:"ifxChange"}}},Default=(args=>{const element=document.createElement("ifx-switch");return element.setAttribute("disabled",args.disabled),element.setAttribute("value",args.value),element.addEventListener("ifxChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxChange")),element}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const element = (document.createElement('ifx-switch') as HTMLIfxSwitchElement);\n\n  // Set the attributes\n  element.setAttribute('disabled', args.disabled);\n  element.setAttribute('value', args.value);\n\n  // Add the event listener\n  element.addEventListener('ifxChange', action('ifxChange'));\n\n  // Return the element\n  return element;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);