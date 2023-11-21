/*! For license information please see components-chips-Usage-mdx.9c83557d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8716,5722],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/chips/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),chip_stories=__webpack_require__("./src/components/chips/chip.stories.ts");const chip_anatomy_namespaceObject=__webpack_require__.p+"static/media/chip-anatomy.fa46573b.png",chip_affix_add_states_namespaceObject=__webpack_require__.p+"static/media/chip-affix-add-states.5b53a99e.png",chip_affix_add_namespaceObject=__webpack_require__.p+"static/media/chip-affix-add.987a82cc.png",chip_affix_removable_states_namespaceObject=__webpack_require__.p+"static/media/chip-affix-removable-states.369bd420.png",chip_affix_removable_namespaceObject=__webpack_require__.p+"static/media/chip-affix-removable.d45aaa23.png",chip_default_states_namespaceObject=__webpack_require__.p+"static/media/chip-default-states.a1862c25.png",chip_default_namespaceObject=__webpack_require__.p+"static/media/chip-default.a80a3e06.png",chip_group_namespaceObject=__webpack_require__.p+"static/media/chip-group.b5e3af5d.png",chip_mouse_interaction_namespaceObject=__webpack_require__.p+"static/media/chip-mouse-interaction.59cad0f4.png",chip_sizes_namespaceObject=__webpack_require__.p+"static/media/chip-sizes.79e6d369.png",dropdown_chip_visible_label_option_highlight_states_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-label-option-highlight-states.3a56fc28.png",dropdown_chip_visible_label_option_highlight_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-label-option-highlight.03132827.png",dropdown_chip_visible_label_option_states_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-label-option-states.94462811.png",dropdown_chip_visible_label_option_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-label-option.85a8bbae.png",dropdown_chip_visible_label_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-label.80b9bd87.png",dropdown_chip_visible_single_option_states_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-single-option-states.50e76f39.png",dropdown_chip_visible_single_option_namespaceObject=__webpack_require__.p+"static/media/dropdown-chip-visible-single-option.c7446bdd.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",h4:"h4",h5:"h5",h6:"h6",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:chip_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"chip",children:"Chip"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The chip component presents compact information in an easily consumable format. It allows users to quickly recognize and interact with various types of content, such as filters or categories."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you want to filter and categorize content."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the content within the chip is dynamically changing or frequently updated."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you need to display a large amount of complex data or detailed information. Use other components like tables of lists."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_anatomy_namespaceObject,alt:"Chip Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Chip Container (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The entire chip, including its label, icons, and any additional styling, is contained within a visually distinct container."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Dropdown Icon (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Indicates that there are additional options related to the chip. Clicking or tapping on the dropdown icon reveals a select list with different options to select."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Label Text (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","This is the primary text that describes the selected item(s)."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Option Text (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","In some chip variants the selected option is also visible."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Number Indicator (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Provides the information about how many selected options are inside the chip. It appears when more than two options were selected."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Dismiss Icon (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The dismiss icon gives the opportunity to reset the users' selection with one click/tap and set the chip to its default state."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-chip",children:"Default Chip"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Simple chip variant to filter correspondent content for example show different contacts filtered by country options."}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_default_namespaceObject,alt:"Chip Default"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_default_states_namespaceObject,alt:"Chip Default States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"affix-chip",children:"Affix Chip"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To add and remove specific options from a chip group for example registering to different topics with newsletter mails. It is possible to predefine some options as default. Further topic options can be selected with the add dropdown chip. Selected or already visible topics inside the chip group are not visible in the dropdown menu anymore. Also selected options can be removed by clicking the dismiss icon. By doing so dismissed options appear as visible options in the dropdown menu."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"add",children:"Add"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_affix_add_namespaceObject,alt:"Chip Affx Add"}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"states-1",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_affix_add_states_namespaceObject,alt:"Chip Affx Add States"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"remove",children:"Remove"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_affix_removable_namespaceObject,alt:"Chip Affx Removeable"}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"states-2",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_affix_removable_states_namespaceObject,alt:"Chip Affx Removeable States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dropdown-chip",children:"Dropdown Chip"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"By clicking on the dropdown chip within a chip group, a select list is displayed. The list can either display single or multi select options. This gives you the possibility to filter content in more detail and thus reach the desired result more quickly."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"visible-option",children:"Visible Option"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This chip variant comes with a single select list. The selected option is visible inside the chip."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_single_option_namespaceObject,alt:"Chip Dropdown with visible option"}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"states-3",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_single_option_states_namespaceObject,alt:"Chip Dropdown with visible option states"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"visible-label",children:"Visible Label"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This chip variant comes with a multi select list. The selected option is not visible inside the chip."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_namespaceObject,alt:"Chip Dropdown with visible label"}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"states-4",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_option_states_namespaceObject,alt:"Chip Dropdown with visible label states"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"visible-label--option",children:"Visible Label & Option"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This chip variant is available in two different appearances."}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"example-a",children:"Example A"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The simple one shows a maximum of only one option and is displayed with a thin outline. This variant can be used, for example, as a stand-alone chip variant to sort content by date by using a single select list."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_option_namespaceObject,alt:"Chip Dropdown with visible label and option"}),"\n",(0,jsx_runtime.jsx)(_components.h6,{id:"example-a-states",children:"Example A States"}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_option_states_namespaceObject,alt:"Chip Dropdown with visible label and option states"}),"\n",(0,jsx_runtime.jsx)(_components.h5,{id:"example-b",children:"Example B"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The other variant offers much more in-depth filtering options and is displayed with a thicker outline. In addition, it is equipped with a dismiss icon to reset the selected options with one click. A maximum of two options are allowed in the visible area. Further options are displayed as numbers using a number indicator component."}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_option_highlight_namespaceObject,alt:"Chip Dropdown with visible label and option highlight"}),"\n",(0,jsx_runtime.jsx)(_components.h6,{id:"example-b-states",children:"Example B States"}),"\n",(0,jsx_runtime.jsx)("img",{src:dropdown_chip_visible_label_option_highlight_states_namespaceObject,alt:"Chip Dropdown with visible label and option highlight states"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"chip-group",children:"Chip Group"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In most cases, the chip component is used as a chip group, which also exists as a component."}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_group_namespaceObject,alt:"Chip Group"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The are two available sizes: 28px and 36px."}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_sizes_namespaceObject,alt:"Chip Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mouse-interaction",children:"Mouse interaction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Depending on which chip variant is used, there are different interactions. In the default state, each chip variant is completely clickable as a whole. The chip variants with a dismiss icon (active state) consist of two clickable areas. Firstly, clicking on the dismiss icon returns the entire chip component to the default state. Secondly, you can click on the remaining area of the chip component to display a select list and change your option selection."}),"\n",(0,jsx_runtime.jsx)("img",{src:chip_mouse_interaction_namespaceObject,alt:"Chip Mouse Interaction",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=17762-11219&mode=design",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chip"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/chips/chip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Chip",tags:["autodocs"],args:{placeholder:"Placeholder"},argTypes:{ifxDropdownMenu:{action:"ifxDropdownMenu",description:"Custom event emitted when menu item selected",table:{type:{summary:"Framework integration",detail:'React: onIfxDropdownMenu={handleChange}\nVue:@ifxDropdownMenu="handleChange"\nAngular:(ifxDropdownMenu)="handleChange()"\nVanillaJs:.addEventListener("ifxDropdownMenu", (event) => {//handle change});'}}}}},Default=(args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`<ifx-chip placeholder="${args.placeholder}">\n  <ifx-dropdown-menu size="m" slot="menu">\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 1</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 2</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 3</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 4</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 5</ifx-dropdown-item>\n</ifx-dropdown-menu>\n</ifx-chip>`;return wrapper.querySelector("ifx-chip").querySelector("ifx-dropdown-menu").addEventListener("ifxDropdownMenuItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxDropdownMenuItem")),wrapper}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `<ifx-chip placeholder="${args.placeholder}">\n  <ifx-dropdown-menu size="m" slot="menu">\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 1</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 2</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 3</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 4</ifx-dropdown-item>\n  <ifx-dropdown-item icon="" target="_self" href="">Menu Item 5</ifx-dropdown-item>\n</ifx-dropdown-menu>\n</ifx-chip>`;\n  const chip = (wrapper.querySelector(\'ifx-chip\') as HTMLElement);\n  const dropdownMenu = chip.querySelector(\'ifx-dropdown-menu\');\n  dropdownMenu.addEventListener(\'ifxDropdownMenuItem\', action(\'ifxDropdownMenuItem\'));\n  return wrapper;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);