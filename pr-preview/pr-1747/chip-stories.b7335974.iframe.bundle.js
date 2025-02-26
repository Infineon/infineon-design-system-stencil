"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2792,6521],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),__defProp=Object.defineProperty,ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var preview_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(preview_exports,{argsEnhancers:()=>argsEnhancers,loaders:()=>loaders});var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),argsEnhancers=[context=>{let{initialArgs,argTypes,parameters:{actions:actions2}}=context;return actions2?.disable||!argTypes?{}:Object.entries(argTypes).filter((([name,argType])=>!!argType.action)).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action("string"==typeof argType.action?argType.action:name)),acc)),{})},context=>{let{initialArgs,argTypes,id,parameters:{actions:actions2}}=context;if(!actions2||actions2.disable||!actions2.argTypesRegex||!argTypes)return{};let argTypesRegex=new RegExp(actions2.argTypesRegex);return Object.entries(argTypes).filter((([name])=>!!argTypesRegex.test(name))).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name,{implicit:!0,id})),acc)),{})}],subscribed=!1,loaders=[context=>{let{parameters:{actions:actions2}}=context;if(!actions2?.disable&&!subscribed&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in external_STORYBOOK_MODULE_GLOBAL_.global&&"function"==typeof external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__){(0,external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__)(((mock,args)=>{let name=mock.getMockName();"spy"!==name&&(!/^next\/.*::/.test(name)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some((prefix=>name.startsWith(prefix))))&&action(name)(args)})),subscribed=!0}}]},"./src/components/chip/chip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Multi:()=>Multi,ReadOnly:()=>ReadOnly,Single:()=>Single,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Chip",tags:["autodocs"],parameters:{docs:{story:{height:"100px"}}},args:{amountOfChipItems:4,chipItemLabel:"Item Label",placeholder:"Label",size:"large",variant:"single",readOnly:!1,selected:!1,value:"Item Value",AriaLabel:"Chip"},argTypes:{amountOfChipItems:{name:"Amount of Chip Items",control:"number",description:"Control the number of *<ifx-chip-item>* in a Chip.",table:{category:"story controls",type:{summary:null}}},chipItemLabel:{name:"Label of Chip Item",description:"Set the label of *<ifx-chip-item>*.",table:{category:"story controls"}},placeholder:{description:"Set the placeholder string.",table:{category:"ifx-chip props"}},size:{description:"Switch the size of Chip.",control:"radio",options:["large","small"],table:{category:"ifx-chip props",defaultValue:{summary:"large"},type:{summary:"large | small"}}},variant:{description:"Switch the variant of Chip.",control:"radio",options:["single","multi"],table:{category:"ifx-chip props",defaultValue:{summary:"single"},type:{summary:"single | multi"}}},readOnly:{name:"read-only",description:"No dropdown menu. The chip component is read-only.",control:"boolean",table:{category:"ifx-chip props",defaultValue:{summary:!1}}},AriaLabel:{control:{type:"text"},description:"Set the aria label of the chip item. Enhances accessibility.",table:{category:"ifx-chip props"}},selected:{description:"Set the *selected* prop to pre-select the chip item.",table:{category:"ifx-chip-item props",defaultValue:{summary:"false"}}},value:{description:"Set the value of chip item.",table:{category:"ifx-chip-item props"}},ifxChange:{action:"ifxChange",description:"A custom event emitted when the selection in a *<ifx-chip>* is updated.",table:{category:"custom events",type:{summary:"Framework integration",detail:'\nReact: onIfxChange={handleChange}\nVue: @ifxChange="handleChange"\nAngular: (ifxChange)="handleChange()"\nVanillaJs: .addEventListener("ifxChange", (event) => {/*handle change*/});'}}}}},Template=args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`\n<ifx-chip\nplaceholder="${args.placeholder}"\nsize="${args.size}"\nvariant="${args.variant}"\nread-only="${args.readOnly}"\nAriaLabel="${args.AriaLabel}"\n>\n  ${Array.from({length:args.amountOfChipItems},((_,chipItemId)=>{const chipItem=document.createElement("ifx-chip-item");return chipItem.innerHTML=args.chipItemLabel+" "+(chipItemId+1),chipItem.setAttribute("value",args.value+" "+(chipItemId+1)),args.selected&&1===chipItemId&&chipItem.setAttribute("selected","true"),args.readOnly&&("multi"===args.variant||0===chipItemId)&&chipItem.setAttribute("selected","true"),chipItem.outerHTML})).join("\n    ")}\n</ifx-chip>`;const chip=wrapper.querySelector("ifx-chip");return chip.addEventListener("ifxChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxChange")),chip},Default=Template.bind({});Default.tags=["!dev","!autodocs"];const Single=Template.bind({});Single.args={variant:"single"},Single.argTypes={variant:{table:{disable:!0}}};const Multi=Template.bind({});Multi.args={variant:"multi"},Multi.argTypes={variant:{table:{disable:!0}}};const ReadOnly=Template.bind({});ReadOnly.args={readOnly:!0,variant:"multi"},ReadOnly.argTypes={readOnly:{table:{disable:!0}}};const __namedExportsOrder=["Default","Single","Multi","ReadOnly"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n<ifx-chip\nplaceholder=\"${args.placeholder}\"\nsize=\"${args.size}\"\nvariant=\"${args.variant}\"\nread-only=\"${args.readOnly}\"\nAriaLabel=\"${args.AriaLabel}\"\n>\n  ${(() => {\n    return Array.from({\n      length: args.amountOfChipItems\n    }, (_, chipItemId) => {\n      const chipItem: HTMLIfxChipItemElement = document.createElement('ifx-chip-item');\n      chipItem.innerHTML = args.chipItemLabel + ' ' + (chipItemId + 1);\n      chipItem.setAttribute('value', args.value + ' ' + (chipItemId + 1));\n      if (args.selected && chipItemId === 1) {\n        chipItem.setAttribute('selected', 'true');\n      }\n      if (args.readOnly) {\n        if (args.variant === 'multi') {\n          chipItem.setAttribute('selected', 'true');\n        } else if (chipItemId === 0) {\n          chipItem.setAttribute('selected', 'true');\n        }\n      }\n      return chipItem.outerHTML;\n    }).join(`\\n    `);\n  })()}\n</ifx-chip>`;\n  const chip = wrapper.querySelector('ifx-chip');\n  chip.addEventListener('ifxChange', action('ifxChange'));\n  return chip;\n}",...Default.parameters?.docs?.source}}},Single.parameters={...Single.parameters,docs:{...Single.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n<ifx-chip\nplaceholder=\"${args.placeholder}\"\nsize=\"${args.size}\"\nvariant=\"${args.variant}\"\nread-only=\"${args.readOnly}\"\nAriaLabel=\"${args.AriaLabel}\"\n>\n  ${(() => {\n    return Array.from({\n      length: args.amountOfChipItems\n    }, (_, chipItemId) => {\n      const chipItem: HTMLIfxChipItemElement = document.createElement('ifx-chip-item');\n      chipItem.innerHTML = args.chipItemLabel + ' ' + (chipItemId + 1);\n      chipItem.setAttribute('value', args.value + ' ' + (chipItemId + 1));\n      if (args.selected && chipItemId === 1) {\n        chipItem.setAttribute('selected', 'true');\n      }\n      if (args.readOnly) {\n        if (args.variant === 'multi') {\n          chipItem.setAttribute('selected', 'true');\n        } else if (chipItemId === 0) {\n          chipItem.setAttribute('selected', 'true');\n        }\n      }\n      return chipItem.outerHTML;\n    }).join(`\\n    `);\n  })()}\n</ifx-chip>`;\n  const chip = wrapper.querySelector('ifx-chip');\n  chip.addEventListener('ifxChange', action('ifxChange'));\n  return chip;\n}",...Single.parameters?.docs?.source}}},Multi.parameters={...Multi.parameters,docs:{...Multi.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n<ifx-chip\nplaceholder=\"${args.placeholder}\"\nsize=\"${args.size}\"\nvariant=\"${args.variant}\"\nread-only=\"${args.readOnly}\"\nAriaLabel=\"${args.AriaLabel}\"\n>\n  ${(() => {\n    return Array.from({\n      length: args.amountOfChipItems\n    }, (_, chipItemId) => {\n      const chipItem: HTMLIfxChipItemElement = document.createElement('ifx-chip-item');\n      chipItem.innerHTML = args.chipItemLabel + ' ' + (chipItemId + 1);\n      chipItem.setAttribute('value', args.value + ' ' + (chipItemId + 1));\n      if (args.selected && chipItemId === 1) {\n        chipItem.setAttribute('selected', 'true');\n      }\n      if (args.readOnly) {\n        if (args.variant === 'multi') {\n          chipItem.setAttribute('selected', 'true');\n        } else if (chipItemId === 0) {\n          chipItem.setAttribute('selected', 'true');\n        }\n      }\n      return chipItem.outerHTML;\n    }).join(`\\n    `);\n  })()}\n</ifx-chip>`;\n  const chip = wrapper.querySelector('ifx-chip');\n  chip.addEventListener('ifxChange', action('ifxChange'));\n  return chip;\n}",...Multi.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n<ifx-chip\nplaceholder=\"${args.placeholder}\"\nsize=\"${args.size}\"\nvariant=\"${args.variant}\"\nread-only=\"${args.readOnly}\"\nAriaLabel=\"${args.AriaLabel}\"\n>\n  ${(() => {\n    return Array.from({\n      length: args.amountOfChipItems\n    }, (_, chipItemId) => {\n      const chipItem: HTMLIfxChipItemElement = document.createElement('ifx-chip-item');\n      chipItem.innerHTML = args.chipItemLabel + ' ' + (chipItemId + 1);\n      chipItem.setAttribute('value', args.value + ' ' + (chipItemId + 1));\n      if (args.selected && chipItemId === 1) {\n        chipItem.setAttribute('selected', 'true');\n      }\n      if (args.readOnly) {\n        if (args.variant === 'multi') {\n          chipItem.setAttribute('selected', 'true');\n        } else if (chipItemId === 0) {\n          chipItem.setAttribute('selected', 'true');\n        }\n      }\n      return chipItem.outerHTML;\n    }).join(`\\n    `);\n  })()}\n</ifx-chip>`;\n  const chip = wrapper.querySelector('ifx-chip');\n  chip.addEventListener('ifxChange', action('ifxChange'));\n  return chip;\n}",...ReadOnly.parameters?.docs?.source}}}}}]);