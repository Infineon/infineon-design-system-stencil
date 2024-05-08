"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3222],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./src/components/tabs/tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tabs",tags:["autodocs"],component:"ifx-tabs",argTypes:{amountOfTabs:{name:"Amount of Tabs",control:"number"},orientation:{name:"Orientation",options:["horizontal","vertical"],control:{type:"radio"}},small:{name:"Small",control:"boolean"}}},Template=args=>{const tabsElement=document.createElement("ifx-tabs");tabsElement.setAttribute("orientation",args.orientation),args.small&&tabsElement.setAttribute("small",""),tabsElement.addEventListener("ifxTabIndex",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxTabIndex"));for(let i=0;i<args.amountOfTabs;i++){const tabContent=document.createElement("ifx-tab");tabContent.setAttribute("header",`tab header ${i+1}`),tabContent.innerHTML=`\n      <p>\n        Content for Tab #${i+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n      </p>\n    `,tabContent.addEventListener("tabBecameActive",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)(`tabBecameActive (tab #${i})`)),tabContent.addEventListener("tabBecameInactive",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)(`tabBecameInactive (tab #${i})`)),tabsElement.append(tabContent)}return tabsElement},Default=Template.bind({});Default.args={amountOfTabs:3,orientation:"horizontal"};const Small=Template.bind({});Small.args={amountOfTabs:3,orientation:"horizontal",small:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const tabsElement = (document.createElement('ifx-tabs') as HTMLIfxTabsElement);\n  tabsElement.setAttribute('orientation', args.orientation);\n  if (args.small) {\n    tabsElement.setAttribute('small', '');\n  }\n  tabsElement.addEventListener('ifxTabIndex', action(`ifxTabIndex`));\n  for (let i = 0; i < args.amountOfTabs; i++) {\n    const tabContent = document.createElement('ifx-tab');\n    tabContent.setAttribute('header', `tab header ${i + 1}`);\n    tabContent.innerHTML = `\n      <p>\n        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n      </p>\n    `;\n    tabContent.addEventListener('tabBecameActive', action(`tabBecameActive (tab #${i})`));\n    tabContent.addEventListener('tabBecameInactive', action(`tabBecameInactive (tab #${i})`));\n    tabsElement.append(tabContent);\n  }\n  return tabsElement;\n}",...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"args => {\n  const tabsElement = (document.createElement('ifx-tabs') as HTMLIfxTabsElement);\n  tabsElement.setAttribute('orientation', args.orientation);\n  if (args.small) {\n    tabsElement.setAttribute('small', '');\n  }\n  tabsElement.addEventListener('ifxTabIndex', action(`ifxTabIndex`));\n  for (let i = 0; i < args.amountOfTabs; i++) {\n    const tabContent = document.createElement('ifx-tab');\n    tabContent.setAttribute('header', `tab header ${i + 1}`);\n    tabContent.innerHTML = `\n      <p>\n        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n      </p>\n    `;\n    tabContent.addEventListener('tabBecameActive', action(`tabBecameActive (tab #${i})`));\n    tabContent.addEventListener('tabBecameInactive', action(`tabBecameInactive (tab #${i})`));\n    tabsElement.append(tabContent);\n  }\n  return tabsElement;\n}",...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Small"]}}]);