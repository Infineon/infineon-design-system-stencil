"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[5722],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/chips/chip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Chip",tags:["autodocs"],args:{placeholder:"Placeholder"},argTypes:{}},Default=(args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`<ifx-chip placeholder="${args.placeholder}">\n  <ifx-dropdown-menu size="m" slot="menu">\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 1</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 2</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 3</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 4</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 5</ifx-dropdown-item>\n</ifx-dropdown-menu>\n</ifx-chip>`;return wrapper.querySelector("ifx-chip").querySelector("ifx-dropdown-menu").addEventListener("ifxDropdownMenuItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxDropdownMenuItem")),wrapper}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `<ifx-chip placeholder="${args.placeholder}">\n  <ifx-dropdown-menu size="m" slot="menu">\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 1</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 2</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 3</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 4</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 5</ifx-dropdown-item>\n</ifx-dropdown-menu>\n</ifx-chip>`;\n  const chip = (wrapper.querySelector(\'ifx-chip\') as HTMLElement);\n  const dropdownMenu = chip.querySelector(\'ifx-dropdown-menu\');\n  dropdownMenu.addEventListener(\'ifxDropdownMenuItem\', action(\'ifxDropdownMenuItem\'));\n  return wrapper;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);