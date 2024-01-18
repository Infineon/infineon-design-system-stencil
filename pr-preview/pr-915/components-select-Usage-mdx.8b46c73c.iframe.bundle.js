(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4015],{"./src/components/select/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");const select_combo_box_states_namespaceObject=__webpack_require__.p+"static/media/select-combo-box-states.1a54806c.png",select_sizes_namespaceObject=__webpack_require__.p+"static/media/select-sizes.d13f5824.png",select_field_anatomy_namespaceObject=__webpack_require__.p+"static/media/select-field-anatomy.62cbd590.png",select_field_mouse_interaction_namespaceObject=__webpack_require__.p+"static/media/select-field-mouse-interaction.c8d0a5b9.png",select_single_options_states_namespaceObject=__webpack_require__.p+"static/media/select-single-options-states.6a91ef31.png",select_single_states_namespaceObject=__webpack_require__.p+"static/media/select-single-states.f91fc2e4.png",select_multi_partial_namespaceObject=__webpack_require__.p+"static/media/select-multi-partial.3b5d3678.png",select_multi_options_states_namespaceObject=__webpack_require__.p+"static/media/select-multi-options-states.071c742a.png",select_multi_states_namespaceObject=__webpack_require__.p+"static/media/select-multi-states.a79bd726.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",h4:"h4",blockquote:"blockquote",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Select/Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"select",children:"Select"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The select component provides users with the ability to choose one or multiple options from a predefined list in a dropdown format. It offers different variations, including select, multi select, and combo box, to cater to various selection needs."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When users need to choose one or multiple options from a predefined list, using a select field."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When users want to navigate to a different page or section. Use a submenu component instead."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you have large datasets it can become overwhelming. Instead use filter components or paginated table lists."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"select-field",children:"Select Field"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The select field looks similar to the text field, but has an icon on the right indicating a dropdown function."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_field_anatomy_namespaceObject,alt:"Select Field Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Label (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Use a label to describe the purpose of the select field to the user."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Required field (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Mark a select field as required when the information is necessary for the user to proceed with a specific action, such as submitting a form. It is indicated with an asterisk (*) next to the label."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Field (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The container where a user can click or tap."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Dropdown Arrow (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The dropdown arrow is a visual indicator (chevron-down), that appears on the right side of the select field. It suggests to users that they can click or tap on the field to reveal the available options."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Icon (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","In some scenarios it can be useful to use an icon before the placeholder."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Placeholder text (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Placeholder text is the text that is displayed inside the select field before the user select any option inside the menu. Use it to provide an example or to give users an idea of the type of information they can select."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Optional field (7)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Mark a text field as optional when the information entered into the text field is not necessary for the user to proceed with a specific action."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Caption text (8)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Use caption text to provide additional context or information about the select field. It can be used to provide examples or instructions for selecting an option. When the dropdown menu appears, the caption text is behind it."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"mouse-interaction",children:"Mouse interaction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Users can interact with the Select Field in different ways. To open the dropdown list they can either click on the visible options or on the dropdown arrow. They can also click on the reset icon to reset the entries with one click. All options in the list will be unchecked."}),"\n",(0,jsx_runtime.jsx)("img",{src:select_field_mouse_interaction_namespaceObject,alt:"Select Field Mouse Interaction"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"single-select",children:"Single Select"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The single select variation allows users to choose only one option from a list of choices. The selected option is displayed within the closed select field."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_single_states_namespaceObject,alt:"Select Single States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multi-select",children:"Multi Select"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The multi select variation enables users to select multiple options simultaneously from a list of choices. It presents a dropdown menu with checkboxes next to each option. Users can make their selections by checking the desired options. The selected options are displayed within the closed select field."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-1",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_multi_states_namespaceObject,alt:"Select Multi States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"combo-box",children:"Combo Box"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The combo box variation combines a text field with a dropdown menu. Users can select options from the dropdown or input custom values in the text field. This variation is suitable when users may need to choose from existing options or provide their own input. Only one option can be selected."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-2",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_combo_box_states_namespaceObject,alt:"Select Combo Box States"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"select-option-items",children:"Select Option Items"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For the select field the are only two option items for the option list available."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"single-select-1",children:"Single Select"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When a user can choose only one option, a single select option item is the right one. By selecting an option, it is highlighted with our brand color and checkmark icon."}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"The same option items are also used for the Combo Box variant."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-3",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_single_options_states_namespaceObject,alt:"Select Single Options States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multi-select-1",children:"Multi Select"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When a user can choose multiple options, a multi select option item is the right one. Here the user is shown a list of checkboxes that he can select."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-4",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_multi_options_states_namespaceObject,alt:"Select Multi Options States"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"partial-checkbox",children:"Partial Checkbox"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In the multi-select item there are two ways to show the user a list of checkboxes. Besides the simple one, you can also show a nested list. This can be, for example, a product family that contains several products. It is important that only the nested checkbox (level 2) is shown in the select field. The root checkbox (Level 1) is only used for orientation and is not displayed in the Select Field."}),"\n",(0,jsx_runtime.jsx)("img",{src:select_multi_partial_namespaceObject,alt:"Select Multi Partial"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Multi Select - Level 1 (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Users can click this checkbox to select all child checkbox options at once. Alternatively, users can select individual child checkbox options. As long as not all child checkbox options are selected, the parent checkbox is displayed as partial."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Multi Select - Level 2 (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Selected child options are also displayed in the select field and separated by a comma. Only as many options are displayed as space is available. All other options are truncated with ellipsis."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are two select field sizes: 36px and 40px. This will give you more flexibility in structuring layouts due to e.g. different button heights. It's important to maintain uniform field height while combining form elements on a single page."}),"\n",(0,jsx_runtime.jsx)("img",{src:select_sizes_namespaceObject,alt:"Select Size"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=14251-8194&mode=design&t=UQ0Dm7ueLiXMURK1-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Select"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);