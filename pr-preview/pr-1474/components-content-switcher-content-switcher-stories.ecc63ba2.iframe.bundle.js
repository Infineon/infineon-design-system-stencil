"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7079],{"./src/components/content-switcher/content-switcher.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Content Switcher",tags:["autodocs"],args:{amountOfItems:4},argTypes:{amountOfItems:{control:{type:"number"}}}},Default=(({amountOfItems})=>{const element=document.createElement("ifx-content-switcher");for(let i=0;i<amountOfItems;i++){const item=document.createElement("ifx-content-switcher-item");item.innerHTML=`\n      <ifx-icon icon="applications-16"></ifx-icon>Item ${i+1}\n    `,element.appendChild(item)}return element}).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  amountOfItems\n}) => {\n  const element = document.createElement('ifx-content-switcher');\n  for (let i = 0; i < amountOfItems; i++) {\n    const item = document.createElement('ifx-content-switcher-item');\n    item.innerHTML = `\n      <ifx-icon icon=\"applications-16\"></ifx-icon>Item ${i + 1}\n    `;\n    element.appendChild(item);\n  }\n  return element;\n}",...Default.parameters?.docs?.source}}}}}]);