"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2370],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/dropdown/dropdown.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LabelTrigger:()=>LabelTrigger,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown",args:{label:"Dropdown",size:"m",disabled:!1,variant:"solid",color:"primary",icon:"c-check-16",defaultOpen:!1,noCloseOnOutsideClick:!1,noCloseOnMenuClick:!1,noAppendToBody:!1,placement:"bottom-start"},argTypes:{placement:{options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],control:{type:"select"}},label:{description:"The visible name or label for the dropdown button"},size:{description:'The size of the dropdown. Accepted values are "s" for small and "m" for medium',options:["s","m"],control:{type:"radio"}},disabled:{description:"Determines if the dropdown button should be disabled"},variant:{description:'The visual style of the dropdown button. Accepted values are "solid", "outline", "outline-text"',options:["solid","outline","outline-text"],control:{type:"radio"}},color:{description:'The color scheme of the dropdown button. Accepted values are "primary", "secondary", "success", "danger", "warning"',options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},icon:{description:"The icon to be displayed on the dropdown button",options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c).map((i=>i.name)),control:{type:"select"}},defaultOpen:{description:"Determines if the dropdown should be open by default"},noCloseOnOutsideClick:{description:"Determines if the dropdown should not close when a click outside the dropdown happens"},noCloseOnMenuClick:{description:"Determines if the dropdown should not close when a click inside the dropdown menu happens"},noAppendToBody:{description:"Determines if the dropdown should not be appended to the body"},ifxOpen:{action:"ifxOpen",table:{type:{summary:"Event"},description:"Event that is emitted when the dropdown opens"}},ifxClose:{action:"ifxClose",table:{type:{summary:"Event"},description:"Event that is emitted when the dropdown closes"}}}},Default=(args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`<ifx-dropdown\n    placement="${args.placement}"\n    ${args.defaultOpen?"default-open":""}\n    ${args.noCloseOnOutsideClick?"no-close-on-outside-click":""}\n    ${args.noCloseOnMenuClick?"no-close-on-menu-click":""}\n    ${args.disabled?"disabled":""}\n    ${args.noAppendToBody?"no-append-to-body":""}\n  >\n    <ifx-dropdown-trigger-button\n      size="${args.size}"\n      variant="${args.variant}"\n      color="${args.color}"\n      icon="${args.icon}"\n      type="${args.type}"\n    >${args.label}</ifx-dropdown-trigger-button>\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item target="_blank" href="https://www.google.de">Link Item</ifx-dropdown-item>\n      <ifx-dropdown-separator></ifx-dropdown-separator>\n      <ifx-dropdown-item href="javascript:void(0)">Console log from click event</ifx-dropdown-item>\n      <ifx-dropdown-item icon="c-check-16">Item with Icon</ifx-dropdown-item>\n      <ifx-dropdown-separator></ifx-dropdown-separator>\n      <ifx-dropdown-item>Boring Item</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-dropdown>`;const dropdown=wrapper.firstChild;return dropdown.addEventListener("ifxOpen",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxOpen")),dropdown.addEventListener("ifxClose",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxClose")),wrapper}).bind({}),LabelTrigger=(args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`<ifx-dropdown\n    placement="${args.placement}"\n    ${args.defaultOpen?"default-open":""}\n    ${args.noCloseOnOutsideClick?"no-close-on-outside-click":""}\n    ${args.noCloseOnMenuClick?"no-close-on-menu-click":""}\n    ${args.disabled?"disabled":""}\n    ${args.noAppendToBody?"no-append-to-body":""}\n  >\n    Hello World! Click on the text to open the dropdown\n    <ifx-dropdown-trigger>\n      <ifx-icon icon="${args.icon}"></ifx-icon>\n    </ifx-dropdown-trigger>\n    Some more text\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item target="_blank" href="https://www.google.de">Link Item</ifx-dropdown-item>\n      <ifx-dropdown-separator></ifx-dropdown-separator>\n      <ifx-dropdown-item href="javascript:void(0)">Console log from click event</ifx-dropdown-item>\n      <ifx-dropdown-item icon="c-check-16">Item with Icon</ifx-dropdown-item>\n      <ifx-dropdown-separator></ifx-dropdown-separator>\n      <ifx-dropdown-item>Boring Item</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-dropdown>`;const dropdown=wrapper.firstChild;return dropdown.addEventListener("ifxOpen",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxOpen")),dropdown.addEventListener("ifxClose",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxClose")),wrapper}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `<ifx-dropdown\n    placement=\"${args.placement}\"\n    ${args.defaultOpen ? 'default-open' : ''}\n    ${args.noCloseOnOutsideClick ? 'no-close-on-outside-click' : ''}\n    ${args.noCloseOnMenuClick ? 'no-close-on-menu-click' : ''}\n    ${args.disabled ? 'disabled' : ''}\n    ${args.noAppendToBody ? 'no-append-to-body' : ''}\n  >\n    <ifx-dropdown-trigger-button\n      size=\"${args.size}\"\n      variant=\"${args.variant}\"\n      color=\"${args.color}\"\n      icon=\"${args.icon}\"\n      type=\"${args.type}\"\n    >${args.label}</ifx-dropdown-trigger-button>\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item target=\"_blank\" href=\"https://www.google.de\">Link Item</ifx-dropdown-item>\n      <ifx-dropdown-separator></ifx-dropdown-separator>\n      <ifx-dropdown-item href=\"javascript:void(0)\">Console log from click event</ifx-dropdown-item>\n      <ifx-dropdown-item icon=\"c-check-16\">Item with Icon</ifx-dropdown-item>\n      <ifx-dropdown-separator></ifx-dropdown-separator>\n      <ifx-dropdown-item>Boring Item</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-dropdown>`;\n  const dropdown = wrapper.firstChild;\n  dropdown.addEventListener('ifxOpen', action('ifxOpen'));\n  dropdown.addEventListener('ifxClose', action('ifxClose'));\n  return wrapper;\n}",...Default.parameters?.docs?.source}}},LabelTrigger.parameters={...LabelTrigger.parameters,docs:{...LabelTrigger.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `<ifx-dropdown\n    placement=\"${args.placement}\"\n    ${args.defaultOpen ? 'default-open' : ''}\n    ${args.noCloseOnOutsideClick ? 'no-close-on-outside-click' : ''}\n    ${args.noCloseOnMenuClick ? 'no-close-on-menu-click' : ''}\n    ${args.disabled ? 'disabled' : ''}\n    ${args.noAppendToBody ? 'no-append-to-body' : ''}\n  >\n    Hello World! Click on the text to open the dropdown\n    <ifx-dropdown-trigger>\n      <ifx-icon icon=\"${args.icon}\"></ifx-icon>\n    </ifx-dropdown-trigger>\n    Some more text\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item target=\"_blank\" href=\"https://www.google.de\">Link Item</ifx-dropdown-item>\n      <ifx-dropdown-separator></ifx-dropdown-separator>\n      <ifx-dropdown-item href=\"javascript:void(0)\">Console log from click event</ifx-dropdown-item>\n      <ifx-dropdown-item icon=\"c-check-16\">Item with Icon</ifx-dropdown-item>\n      <ifx-dropdown-separator></ifx-dropdown-separator>\n      <ifx-dropdown-item>Boring Item</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-dropdown>`;\n  const dropdown = wrapper.firstChild;\n  dropdown.addEventListener('ifxOpen', action('ifxOpen'));\n  dropdown.addEventListener('ifxClose', action('ifxClose'));\n  return wrapper;\n}",...LabelTrigger.parameters?.docs?.source}}};const __namedExportsOrder=["Default","LabelTrigger"]}}]);