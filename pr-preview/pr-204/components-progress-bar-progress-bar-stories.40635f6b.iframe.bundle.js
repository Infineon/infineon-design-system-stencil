"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8928],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./src/components/progress-bar/progress-bar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Progress Bar",args:{size:"m",percentage:50,showLabel:!1},argTypes:{percentage:{control:{type:"range",min:0,max:100}},size:{options:["s","m"],control:{type:"radio"}}}},Template=args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`\n    <ifx-progress-bar\n      value="${args.percentage}"\n      size="${args.size}"\n      show-label="${args.showLabel}"\n    ></ifx-progress-bar>\n  `;return wrapper.querySelector("ifx-progress-bar").addEventListener("ifxChange",(event=>{console.log("Percentage:",event),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Percentage:")(event)})),wrapper.innerHTML},Default=Template.bind({});Default.args={size:"m",percentage:50,showLabel:!1};const Small=Template.bind({});Small.args={percentage:75,size:"s"};const WithLabel=Template.bind({});WithLabel.args={percentage:25,showLabel:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      value=\"${args.percentage}\"\n      size=\"${args.size}\"\n      show-label=\"${args.showLabel}\"\n    ></ifx-progress-bar>\n  `;\n  const progressBar = wrapper.querySelector('ifx-progress-bar');\n  progressBar.addEventListener('ifxChange', (event: CustomEvent<Event>) => {\n    console.log('Percentage:', event);\n    action('Percentage:')(event);\n  });\n  return wrapper.innerHTML;\n}",...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      value=\"${args.percentage}\"\n      size=\"${args.size}\"\n      show-label=\"${args.showLabel}\"\n    ></ifx-progress-bar>\n  `;\n  const progressBar = wrapper.querySelector('ifx-progress-bar');\n  progressBar.addEventListener('ifxChange', (event: CustomEvent<Event>) => {\n    console.log('Percentage:', event);\n    action('Percentage:')(event);\n  });\n  return wrapper.innerHTML;\n}",...Small.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      value=\"${args.percentage}\"\n      size=\"${args.size}\"\n      show-label=\"${args.showLabel}\"\n    ></ifx-progress-bar>\n  `;\n  const progressBar = wrapper.querySelector('ifx-progress-bar');\n  progressBar.addEventListener('ifxChange', (event: CustomEvent<Event>) => {\n    console.log('Percentage:', event);\n    action('Percentage:')(event);\n  });\n  return wrapper.innerHTML;\n}",...WithLabel.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Small","WithLabel"]}}]);