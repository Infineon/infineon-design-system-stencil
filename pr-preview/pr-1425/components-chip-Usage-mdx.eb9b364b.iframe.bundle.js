(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[346,6877],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/chip/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),chip_stories=__webpack_require__("./src/components/chip/chip.stories.ts");const chip_anatomy_namespaceObject=__webpack_require__.p+"static/media/chip-anatomy.fa46573b.png",chip_affix_add_states_namespaceObject=__webpack_require__.p+"static/media/chip-affix-add-states.5b53a99e.png",chip_affix_add_namespaceObject=__webpack_require__.p+"static/media/chip-affix-add.987a82cc.png",chip_affix_removable_states_namespaceObject=__webpack_require__.p+"static/media/chip-affix-removable-states.369bd420.png",chip_affix_removable_namespaceObject=__webpack_require__.p+"static/media/chip-affix-removable.d45aaa23.png",chip_default_states_namespaceObject=__webpack_require__.p+"static/media/chip-default-states.a1862c25.png",chip_default_namespaceObject=__webpack_require__.p+"static/media/chip-default.a80a3e06.png",chip_group_namespaceObject=__webpack_require__.p+"static/media/chip-group.b5e3af5d.png",chip_mouse_interaction_namespaceObject=__webpack_require__.p+"static/media/chip-mouse-interaction.59cad0f4.png",chip_sizes_namespaceObject=__webpack_require__.p+"static/media/chip-sizes.79e6d369.png",dropdown_chip_visible_label_option_highlight_states_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-label-option-highlight-states.3a56fc28.png",dropdown_chip_visible_label_option_highlight_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-label-option-highlight.03132827.png",dropdown_chip_visible_label_option_states_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-label-option-states.94462811.png",dropdown_chip_visible_label_option_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-label-option.85a8bbae.png",dropdown_chip_visible_label_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-label.80b9bd87.png",dropdown_chip_visible_single_option_states_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-single-option-states.50e76f39.png",dropdown_chip_visible_single_option_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-single-option.c7446bdd.png";function _createMdxContent(props){const _components={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:chip_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"chip",children:"Chip"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The chip component presents compact information in an easily consumable format. It allows users to quickly recognize and interact with various types of content, such as filters or categories."}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsx)(_components.tr,{children:(0,jsx_runtime.jsx)(_components.th,{children:"Resources"})})}),(0,jsx_runtime.jsx)(_components.tbody,{children:(0,jsx_runtime.jsx)(_components.tr,{children:(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=17762-11219",rel:"nofollow",children:"Figma chip component →"})})})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you want to filter and categorize content."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the content within the chip is dynamically changing or frequently updated."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you need to display a large amount of complex data or detailed information. Use other components like tables of lists."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_anatomy_namespaceObject,alt:"Chip Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Chip Container (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The entire chip, including its label, icons, and any additional styling, is contained within a visually distinct container."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Dropdown Icon (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Indicates that there are additional options related to the chip. Clicking or tapping on the dropdown icon reveals a select list with different options to select."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Label Text (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","This is the primary text that describes the selected item(s)."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Option Text (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","In some chip variants the selected option is also visible."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Number Indicator (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Provides the information about how many selected options are inside the chip. It appears when more than two options were selected."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Dismiss Icon (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The dismiss icon gives the opportunity to reset the users' selection with one click/tap and set the chip to its default state."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-chip",children:"Default Chip"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Simple chip variant to filter correspondent content for example show different contacts filtered by country options."}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_default_namespaceObject,alt:"Chip Default"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_default_states_namespaceObject,alt:"Chip Default States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"affix-chip",children:"Affix Chip"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To add and remove specific options from a chip group for example registering to different topics with newsletter mails. It is possible to predefine some options as default. Further topic options can be selected with the add dropdown chip. Selected or already visible topics inside the chip group are not visible in the dropdown menu anymore. Also selected options can be removed by clicking the dismiss icon. By doing so dismissed options appear as visible options in the dropdown menu."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"add",children:"Add"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_affix_add_namespaceObject,alt:"Chip Affx Add"}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"states-1",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_affix_add_states_namespaceObject,alt:"Chip Affx Add States"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"remove",children:"Remove"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_affix_removable_namespaceObject,alt:"Chip Affx Removeable"}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"states-2",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_affix_removable_states_namespaceObject,alt:"Chip Affx Removeable States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dropdown-chip",children:"Dropdown Chip"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"By clicking on the dropdown chip within a chip group, a select list is displayed. The list can either display single or multi select options. This gives you the possibility to filter content in more detail and thus reach the desired result more quickly."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"visible-option",children:"Visible Option"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This chip variant comes with a single select list. The selected option is visible inside the chip."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_single_option_namespaceObject,alt:"Chip Dropdown with visible option"}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"states-3",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_single_option_states_namespaceObject,alt:"Chip Dropdown with visible option states"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"visible-label",children:"Visible Label"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This chip variant comes with a multi select list. The selected option is not visible inside the chip."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_namespaceObject,alt:"Chip Dropdown with visible label"}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"states-4",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_option_states_namespaceObject,alt:"Chip Dropdown with visible label states"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"visible-label--option",children:"Visible Label & Option"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This chip variant is available in two different appearances."}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"example-a",children:"Example A"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The simple one shows a maximum of only one option and is displayed with a thin outline. This variant can be used, for example, as a stand-alone chip variant to sort content by date by using a single select list."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_option_namespaceObject,alt:"Chip Dropdown with visible label and option"}),"\n",(0,jsx_runtime.jsx)(_components.h6,{id:"example-a-states",children:"Example A States"}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_option_states_namespaceObject,alt:"Chip Dropdown with visible label and option states"}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"example-b",children:"Example B"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The other variant offers much more in-depth filtering options and is displayed with a thicker outline. In addition, it is equipped with a dismiss icon to reset the selected options with one click. A maximum of two options are allowed in the visible area. Further options are displayed as numbers using a number indicator component."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_option_highlight_namespaceObject,alt:"Chip Dropdown with visible label and option highlight"}),"\n",(0,jsx_runtime.jsx)(_components.h6,{id:"example-b-states",children:"Example B States"}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_option_highlight_states_namespaceObject,alt:"Chip Dropdown with visible label and option highlight states"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"chip-group",children:"Chip Group"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In most cases, the chip component is used as a chip group, which also exists as a component."}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_group_namespaceObject,alt:"Chip Group"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The are two available sizes: 28px and 36px."}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_sizes_namespaceObject,alt:"Chip Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mouse-interaction",children:"Mouse interaction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Depending on which chip variant is used, there are different interactions. In the default state, each chip variant is completely clickable as a whole. The chip variants with a dismiss icon (active state) consist of two clickable areas. Firstly, clicking on the dismiss icon returns the entire chip component to the default state. Secondly, you can click on the remaining area of the chip component to display a select list and change your option selection."}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_mouse_interaction_namespaceObject,alt:"Chip Mouse Interaction",width:"50%"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/chip/chip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Multi:()=>Multi,ReadOnly:()=>ReadOnly,Single:()=>Single,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Chip",tags:["autodocs"],parameters:{docs:{story:{height:"100px"}}},args:{amountOfChipItems:4,chipItemLabel:"Item Label",placeholder:"Label",size:"large",variant:"single",readOnly:!1,selected:!1,value:"Item Value"},argTypes:{amountOfChipItems:{name:"Amount of Chip Items",control:"number",description:"Control the number of *<ifx-chip-item>* in a Chip.",table:{category:"story controls",type:{summary:null}}},chipItemLabel:{name:"Label of Chip Item",description:"Set the label of *<ifx-chip-item>*.",table:{category:"story controls",type:{summary:"<ifx-chip-item> `label` </ifx-chip-item>"}}},placeholder:{description:"Set the placeholder string.",table:{category:"ifx-chip props"}},size:{description:"Switch the size of Chip.",control:"radio",options:["large","small"],table:{category:"ifx-chip props",defaultValue:{summary:"large"},type:{summary:"large | small"}}},variant:{description:"Switch the variant of Chip.",control:"radio",options:["single","multi"],table:{category:"ifx-chip props",defaultValue:{summary:"single"},type:{summary:"single | multi"}}},readOnly:{name:"read-only",description:"No dropdown menu. The chip component is read-only.",control:"boolean",table:{category:"ifx-chip props",defaultValue:{summary:!1}}},selected:{description:"Set the *selected* prop to pre-select the chip item.",table:{category:"ifx-chip-item props",defaultValue:{summary:"false"}}},value:{description:"Set the value of chip item.",table:{category:"ifx-chip-item props"}},ifxChipChange:{action:"ifxChipChange",description:"A custom event emitted when the selection in a *<ifx-chip>* is updated.\n\n    event.detail: \n    {\n        currentSelection: Array<Option>,\n        previousSelection: Array<Option>\n    }\n\n    Option:\n    {\n        key: number,\n        label: string,\n        selected: boolean,\n        value: string\n    }\n            ",table:{category:"custom events",type:{summary:"Framework integration",detail:'\nReact: onIfxChipChange={handleChange}\nVue: @ifxChipChange="handleChange"\nAngular: (ifxChipChange)="handleChange()"\nVanillaJs: .addEventListener("ifxChipChange", (event) => {/*handle change*/});'}}}}},Template=args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`\n<ifx-chip\nplaceholder = "${args.placeholder}"\nsize = "${args.size}"\nvariant = "${args.variant}"\nread-only = "${args.readOnly}"\n>\n    ${Array.from({length:args.amountOfChipItems},((_,chipItemId)=>{const chipItem=document.createElement("ifx-chip-item");return chipItem.innerHTML=args.chipItemLabel+" "+(chipItemId+1),chipItem.setAttribute("value",args.value+" "+(chipItemId+1)),args.readOnly&&("multi"===args.variant||0===chipItemId)&&chipItem.setAttribute("selected","true"),chipItem.outerHTML})).join("\n    ")}\n</ifx-chip>`;const chip=wrapper.querySelector("ifx-chip");return chip.addEventListener("ifxChipChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxChipChange")),chip},Default=Template.bind({});Default.tags=["!dev","!autodocs"];const Single=Template.bind({});Single.args={variant:"single"},Single.argTypes={variant:{table:{disable:!0}}};const Multi=Template.bind({});Multi.args={variant:"multi"},Multi.argTypes={variant:{table:{disable:!0}}};const ReadOnly=Template.bind({});ReadOnly.args={readOnly:!0,variant:"multi"},ReadOnly.argTypes={readOnly:{table:{disable:!0}}};const __namedExportsOrder=["Default","Single","Multi","ReadOnly"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n<ifx-chip\nplaceholder = \"${args.placeholder}\"\nsize = \"${args.size}\"\nvariant = \"${args.variant}\"\nread-only = \"${args.readOnly}\"\n>\n    ${(() => {\n    return Array.from({\n      length: args.amountOfChipItems\n    }, (_, chipItemId) => {\n      const chipItem: HTMLIfxChipItemElement = document.createElement('ifx-chip-item');\n      chipItem.innerHTML = args.chipItemLabel + ' ' + (chipItemId + 1);\n      chipItem.setAttribute('value', args.value + ' ' + (chipItemId + 1));\n      if (args.readOnly) {\n        if (args.variant === 'multi') {\n          chipItem.setAttribute('selected', 'true');\n        } else if (chipItemId === 0) {\n          chipItem.setAttribute('selected', 'true');\n        }\n      }\n      return chipItem.outerHTML;\n    }).join(`\\n    `);\n  })()}\n</ifx-chip>`;\n  const chip = wrapper.querySelector('ifx-chip');\n  chip.addEventListener('ifxChipChange', action('ifxChipChange'));\n  return chip;\n}",...Default.parameters?.docs?.source}}},Single.parameters={...Single.parameters,docs:{...Single.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n<ifx-chip\nplaceholder = \"${args.placeholder}\"\nsize = \"${args.size}\"\nvariant = \"${args.variant}\"\nread-only = \"${args.readOnly}\"\n>\n    ${(() => {\n    return Array.from({\n      length: args.amountOfChipItems\n    }, (_, chipItemId) => {\n      const chipItem: HTMLIfxChipItemElement = document.createElement('ifx-chip-item');\n      chipItem.innerHTML = args.chipItemLabel + ' ' + (chipItemId + 1);\n      chipItem.setAttribute('value', args.value + ' ' + (chipItemId + 1));\n      if (args.readOnly) {\n        if (args.variant === 'multi') {\n          chipItem.setAttribute('selected', 'true');\n        } else if (chipItemId === 0) {\n          chipItem.setAttribute('selected', 'true');\n        }\n      }\n      return chipItem.outerHTML;\n    }).join(`\\n    `);\n  })()}\n</ifx-chip>`;\n  const chip = wrapper.querySelector('ifx-chip');\n  chip.addEventListener('ifxChipChange', action('ifxChipChange'));\n  return chip;\n}",...Single.parameters?.docs?.source}}},Multi.parameters={...Multi.parameters,docs:{...Multi.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n<ifx-chip\nplaceholder = \"${args.placeholder}\"\nsize = \"${args.size}\"\nvariant = \"${args.variant}\"\nread-only = \"${args.readOnly}\"\n>\n    ${(() => {\n    return Array.from({\n      length: args.amountOfChipItems\n    }, (_, chipItemId) => {\n      const chipItem: HTMLIfxChipItemElement = document.createElement('ifx-chip-item');\n      chipItem.innerHTML = args.chipItemLabel + ' ' + (chipItemId + 1);\n      chipItem.setAttribute('value', args.value + ' ' + (chipItemId + 1));\n      if (args.readOnly) {\n        if (args.variant === 'multi') {\n          chipItem.setAttribute('selected', 'true');\n        } else if (chipItemId === 0) {\n          chipItem.setAttribute('selected', 'true');\n        }\n      }\n      return chipItem.outerHTML;\n    }).join(`\\n    `);\n  })()}\n</ifx-chip>`;\n  const chip = wrapper.querySelector('ifx-chip');\n  chip.addEventListener('ifxChipChange', action('ifxChipChange'));\n  return chip;\n}",...Multi.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n<ifx-chip\nplaceholder = \"${args.placeholder}\"\nsize = \"${args.size}\"\nvariant = \"${args.variant}\"\nread-only = \"${args.readOnly}\"\n>\n    ${(() => {\n    return Array.from({\n      length: args.amountOfChipItems\n    }, (_, chipItemId) => {\n      const chipItem: HTMLIfxChipItemElement = document.createElement('ifx-chip-item');\n      chipItem.innerHTML = args.chipItemLabel + ' ' + (chipItemId + 1);\n      chipItem.setAttribute('value', args.value + ' ' + (chipItemId + 1));\n      if (args.readOnly) {\n        if (args.variant === 'multi') {\n          chipItem.setAttribute('selected', 'true');\n        } else if (chipItemId === 0) {\n          chipItem.setAttribute('selected', 'true');\n        }\n      }\n      return chipItem.outerHTML;\n    }).join(`\\n    `);\n  })()}\n</ifx-chip>`;\n  const chip = wrapper.querySelector('ifx-chip');\n  chip.addEventListener('ifxChipChange', action('ifxChipChange'));\n  return chip;\n}",...ReadOnly.parameters?.docs?.source}}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);