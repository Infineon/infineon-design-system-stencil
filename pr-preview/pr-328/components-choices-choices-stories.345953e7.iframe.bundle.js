"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3099],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/choices/choices.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Multiselect:()=>Multiselect,Single:()=>Single,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Select",tags:["autodocs"],args:{searchEnabled:!0,searchPlaceholderValue:"Search...",placeholder:!0,placeholderValue:"Placeholder",error:!1,errorMessage:"Some error",disabled:!1,choices:"Choice 1, Choice 2, Choice 3"},argTypes:{type:{control:{type:"select",options:["single","multiple","text"]}},value:{control:"text"},error:{options:[!0,!1],control:{type:"radio"}},errorMessage:{control:"text"},disabled:{options:[!0,!1],control:{type:"radio"}},searchEnabled:{options:[!0,!1],control:{type:"radio"}},searchPlaceholderValue:{control:{type:"text"}},choices:{control:"text",options:["Choice 1","Choice 2","Choice 3"]},onChange:{action:"change"}}},DefaultTemplate=({type,value,name,disabled,error,errorMessage,placeholder,placeholderValue,removeItemButton,searchEnabled,searchPlaceholderValue,choices})=>{const element=document.createElement("ifx-choices");return element.setAttribute("type",type),element.setAttribute("value",value),element.setAttribute("name",name),element.setAttribute("placeholder",placeholder),element.setAttribute("remove-item-button",removeItemButton),element.setAttribute("search-enabled",searchEnabled),element.setAttribute("search-placeholder-value",searchPlaceholderValue),element.setAttribute("ifx-disabled",disabled),element.setAttribute("ifx-error",error),element.setAttribute("ifx-error-message",errorMessage),element.setAttribute("ifx-placeholder-value",placeholderValue),element.setAttribute("ifx-choices",choices),element.addEventListener("ifxChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxChange")),element},Single=DefaultTemplate.bind({});Single.args={type:"single"};const Multiselect=DefaultTemplate.bind({});Multiselect.args={type:"multiple"},Single.parameters={...Single.parameters,docs:{...Single.parameters?.docs,source:{originalSource:"({\n  type,\n  value,\n  name,\n  disabled,\n  error,\n  errorMessage,\n  placeholder,\n  placeholderValue,\n  removeItemButton,\n  searchEnabled,\n  searchPlaceholderValue,\n  choices\n}) => {\n  const element = document.createElement('ifx-choices');\n  element.setAttribute('type', type);\n  element.setAttribute('value', value);\n  element.setAttribute('name', name);\n  element.setAttribute('placeholder', placeholder);\n  element.setAttribute('remove-item-button', removeItemButton);\n  element.setAttribute('search-enabled', searchEnabled);\n  element.setAttribute('search-placeholder-value', searchPlaceholderValue);\n  element.setAttribute('ifx-disabled', disabled);\n  element.setAttribute('ifx-error', error);\n  element.setAttribute('ifx-error-message', errorMessage);\n  element.setAttribute('ifx-placeholder-value', placeholderValue);\n  element.setAttribute('ifx-choices', choices);\n\n  //no other way to set array of values in storybook\n  // const choicesStr = args.choices;\n  // if (typeof choicesStr === 'string') {\n  //   const choices = choicesStr.split(',').map((choice) => ({\n  //     value: choice.trim(),\n  //     label: choice.trim(),\n  //   }));\n  //   if (args.type === 'single' || args.type === 'multiple') {\n  //     element.setChoices(choices, 'value', 'label', true);\n  //   }\n  // } else {\n  //   console.error(\"Invalid choices input:\", choicesStr);\n  // }\n\n  element.addEventListener('ifxChange', action('ifxChange'));\n  return element;\n}",...Single.parameters?.docs?.source}}},Multiselect.parameters={...Multiselect.parameters,docs:{...Multiselect.parameters?.docs,source:{originalSource:"({\n  type,\n  value,\n  name,\n  disabled,\n  error,\n  errorMessage,\n  placeholder,\n  placeholderValue,\n  removeItemButton,\n  searchEnabled,\n  searchPlaceholderValue,\n  choices\n}) => {\n  const element = document.createElement('ifx-choices');\n  element.setAttribute('type', type);\n  element.setAttribute('value', value);\n  element.setAttribute('name', name);\n  element.setAttribute('placeholder', placeholder);\n  element.setAttribute('remove-item-button', removeItemButton);\n  element.setAttribute('search-enabled', searchEnabled);\n  element.setAttribute('search-placeholder-value', searchPlaceholderValue);\n  element.setAttribute('ifx-disabled', disabled);\n  element.setAttribute('ifx-error', error);\n  element.setAttribute('ifx-error-message', errorMessage);\n  element.setAttribute('ifx-placeholder-value', placeholderValue);\n  element.setAttribute('ifx-choices', choices);\n\n  //no other way to set array of values in storybook\n  // const choicesStr = args.choices;\n  // if (typeof choicesStr === 'string') {\n  //   const choices = choicesStr.split(',').map((choice) => ({\n  //     value: choice.trim(),\n  //     label: choice.trim(),\n  //   }));\n  //   if (args.type === 'single' || args.type === 'multiple') {\n  //     element.setChoices(choices, 'value', 'label', true);\n  //   }\n  // } else {\n  //   console.error(\"Invalid choices input:\", choicesStr);\n  // }\n\n  element.addEventListener('ifxChange', action('ifxChange'));\n  return element;\n}",...Multiselect.parameters?.docs?.source}}};const __namedExportsOrder=["Single","Multiselect"]}}]);