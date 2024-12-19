"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[5889,2792],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/navigation/sidebar/sidebar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithNumberIndicator:()=>WithNumberIndicator,WithSubmenu:()=>WithSubmenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Navigation/Sidebar",args:{icon:"image-16",applicationName:"Application Name",showFooter:!0,showHeader:!0,initialCollapse:!0,termsOfUse:"https://yourwebsite.com/terms",imprint:"https://yourwebsite.com/imprint",privacyPolicy:"https://yourwebsite.com/privacy-policy",copyrightText:`© 1999 - ${(new Date).getFullYear()} Infineon Technologies AG`},argTypes:{applicationName:{description:"The name of the application to display at the top of the sidebar.",table:{category:"ifx-sidebar props"}},showHeader:{description:"Determines whether the header is displayed in the sidebar.",table:{category:"ifx-sidebar props",defaultValue:{summary:!0}}},showFooter:{description:"Determines whether the footer is displayed in the sidebar.",table:{category:"ifx-sidebar props",defaultValue:{summary:!0}}},initialCollapse:{description:"Determines if the sidebar should be collapsed by default when it first loads.",table:{category:"ifx-sidebar props",defaultValue:{summary:!0}}},imprint:{description:'The URL link for the "Imprint" section in the sidebar footer.',if:{arg:"showFooter",eq:!0},table:{category:"ifx-sidebar props"}},termsOfUse:{description:'The URL link for the "Terms of Use" section in the sidebar footer.',if:{arg:"showFooter",eq:!0},table:{category:"ifx-sidebar props"}},privacyPolicy:{description:'The URL link for the "Privacy Policy" section in the sidebar footer.',if:{arg:"showFooter",eq:!0},table:{category:"ifx-sidebar props"}},copyrightText:{description:"The copyright text to display at the bottom of the sidebar.",table:{category:"ifx-sidebar props"}},icon:{description:"The icon to display for the sidebar items. Choose ***none*** to display no icon.",options:["none",...Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.P).map((i=>i.name))],control:"select",table:{category:"ifx-sidebar-item props",defaultValue:{summary:"image-16"}}},ifxSidebarNavigationItem:{action:"ifxSidebarNavigationItem",description:"Custom event emitted when a navigation item becomes active on selection",table:{category:"custom events",type:{summary:"Framework integration",detail:'React: onIfxSidebarNavigationItem={handleChange}\n          Vue: @ifxSidebarNavigationItem="handleChange"\n          Angular: (ifxSidebarNavigationItem)="handleChange()"\n          VanillaJs: .addEventListener("ifxSidebarNavigationItem", (event) => {/*handle change*/});'}}},ifxSidebarActionItem:{action:"ifxSidebarActionItem",description:"Custom event emitted when an action item is selected",table:{category:"custom events",type:{summary:"Framework integration",detail:'React: onIfxSidebarActionItem={handleAction}\n          Vue: @ifxSidebarActionItem="handleAction"\n          Angular: (ifxSidebarActionItem)="handleAction()"\n          VanillaJs: .addEventListener("ifxSidebarActionItem", (event) => {/*handle action*/});'}}},ifxSidebarMenu:{action:"ifxSidebarMenu",description:"Custom event emitted when a menu is expanded or closed",table:{category:"custom events",type:{summary:"Framework integration",detail:'React: onIfxSidebarMenu={handleMenu}\n          Vue: @ifxSidebarMenu="handleMenu"\n          Angular: (ifxSidebarMenu)="handleMenu()"\n          VanillaJs: .addEventListener("ifxSidebarMenu", (event) => {/*handle menu*/});'}}}}},Default=(args=>{const sidebarElement=document.createElement("ifx-sidebar");return sidebarElement.setAttribute("application-name",args.applicationName),sidebarElement.addEventListener("ifxSidebarNavigationItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxSidebarNavigationItem")),sidebarElement.addEventListener("ifxSidebarActionItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxSidebarActionItem")),sidebarElement.addEventListener("ifxSidebarMenu",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxSidebarMenu")),sidebarElement.setAttribute("show-header",args.showHeader),sidebarElement.setAttribute("show-footer",args.showFooter),sidebarElement.setAttribute("initial-collapse",args.initialCollapse),sidebarElement.setAttribute("terms-of-use",args.termsOfUse),sidebarElement.setAttribute("imprint",args.imprint),sidebarElement.setAttribute("privacy-policy",args.privacyPolicy),sidebarElement.setAttribute("copyright-text",args.copyrightText),sidebarElement.innerHTML=`\n    <ifx-sidebar-title>Menu Items</ifx-sidebar-title>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${"none"===args.icon?"":args.icon}">Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${"none"===args.icon?"":args.icon}">Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${"none"===args.icon?"":args.icon}">Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${"none"===args.icon?"":args.icon}">Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item>\n    Section\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${"none"===args.icon?"":args.icon}">Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item icon='image-16'>\n    Menu Item\n    <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>\n    <ifx-sidebar-item active=true>Sub menu item</ifx-sidebar-item>\n    <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>\n    </ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank'>Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank'>Menu Item</ifx-sidebar-item>\n    </ifx-sidebar-item>\n    <ifx-sidebar-title>Items group</ifx-sidebar-title>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${"none"===args.icon?"":args.icon}">Item 1</ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon="${"none"===args.icon?"":args.icon}">Item 2</ifx-sidebar-item>\n  `,sidebarElement}).bind({}),WithSubmenu=(args=>{const sidebarElement=document.createElement("ifx-sidebar");sidebarElement.setAttribute("application-name",args.applicationName),sidebarElement.addEventListener("ifxSidebarNavigationItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxSidebarNavigationItem")),sidebarElement.addEventListener("ifxSidebarActionItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxSidebarActionItem")),sidebarElement.addEventListener("ifxSidebarMenu",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxSidebarMenu")),sidebarElement.setAttribute("initial-collapse",args.initialCollapse);for(let i=0;i<3;i++){const sectionElement=document.createElement("ifx-sidebar-item");sectionElement.textContent=`Header Section ${i+1}`;for(let j=0;j<3;j++){const menuItemElement=document.createElement("ifx-sidebar-item");if(menuItemElement.setAttribute("icon",args.icon?"image-16":""),menuItemElement.textContent=`Menu Item ${j+1}`,0===j)for(let k=0;k<3;k++){const subMenuItemElement=document.createElement("ifx-sidebar-item");subMenuItemElement.textContent=`Sub Menu Item ${k+1}`,menuItemElement.appendChild(subMenuItemElement)}sectionElement.appendChild(menuItemElement)}sidebarElement.appendChild(sectionElement)}const firstMenuItem=sidebarElement.querySelectorAll("ifx-sidebar-item")[0].querySelectorAll("ifx-sidebar-item")[0];return firstMenuItem.querySelectorAll("ifx-sidebar-item")[0].setAttribute("active","true"),firstMenuItem.querySelectorAll("ifx-sidebar-item")[0].setAttribute("is-action-item","false"),firstMenuItem.querySelectorAll("ifx-sidebar-item")[1].setAttribute("is-action-item","true"),firstMenuItem.querySelectorAll("ifx-sidebar-item")[2].setAttribute("is-action-item","true"),sidebarElement}).bind({}),WithNumberIndicator=(()=>'<ifx-sidebar application-name="Application name">\n  <ifx-sidebar-item icon="image-16" number-indicator="5">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16" number-indicator="1">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16" number-indicator="23">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item active="false">\n    Header Section\n    <ifx-sidebar-item icon="image-16" active="false" >\n      Second layer\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16">\n      3rd layer Menu Item\n      </ifx-sidebar-item>\n\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16" value="thisPage">\n      This Page\n      </ifx-sidebar-item>\n\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16">\n      3rd layer Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n\n    <ifx-sidebar-item icon="image-16" active="false">\n      Second layer\n      <ifx-sidebar-item target="_blank" icon="image-16" active="false">\n      Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n\n    <ifx-sidebar-item icon="image-16" active="false">\n      Second layer\n      <ifx-sidebar-item target="_blank" icon="image-16" active="false">\n      Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  \n\n  <ifx-sidebar-item>\n  Header Section\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item active="false" is-action-item="false" target="_blank" icon="image-16">\n    Sub Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item is-action-item="true" icon="image-16" value="thisPage">\n    This one too\n    </ifx-sidebar-item>\n    <ifx-sidebar-item is-action-item="false" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  </ifx-sidebar-item>\n\n\n  <ifx-sidebar-item>\n  Header Section\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  </ifx-sidebar-item>\n</ifx-sidebar>').bind({}),__namedExportsOrder=["Default","WithSubmenu","WithNumberIndicator"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  // Create the sidebar element and attach event listener\n  const sidebarElement = document.createElement('ifx-sidebar') as HTMLIfxSidebarElement;\n  sidebarElement.setAttribute('application-name', args.applicationName);\n  sidebarElement.addEventListener('ifxSidebarNavigationItem', action(`ifxSidebarNavigationItem`));\n  sidebarElement.addEventListener('ifxSidebarActionItem', action(`ifxSidebarActionItem`));\n  sidebarElement.addEventListener('ifxSidebarMenu', action(`ifxSidebarMenu`));\n  sidebarElement.setAttribute('show-header', args.showHeader);\n  sidebarElement.setAttribute('show-footer', args.showFooter);\n  sidebarElement.setAttribute('initial-collapse', args.initialCollapse);\n  sidebarElement.setAttribute('terms-of-use', args.termsOfUse);\n  sidebarElement.setAttribute('imprint', args.imprint);\n  sidebarElement.setAttribute('privacy-policy', args.privacyPolicy);\n  sidebarElement.setAttribute('copyright-text', args.copyrightText);\n  sidebarElement.innerHTML = `\n    <ifx-sidebar-title>Menu Items</ifx-sidebar-title>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon=\"${args.icon === 'none' ? '' : args.icon}\">Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon=\"${args.icon === 'none' ? '' : args.icon}\">Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon=\"${args.icon === 'none' ? '' : args.icon}\">Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon=\"${args.icon === 'none' ? '' : args.icon}\">Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item>\n    Section\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon=\"${args.icon === 'none' ? '' : args.icon}\">Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item icon='image-16'>\n    Menu Item\n    <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>\n    <ifx-sidebar-item active=true>Sub menu item</ifx-sidebar-item>\n    <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>\n    </ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank'>Menu Item</ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank'>Menu Item</ifx-sidebar-item>\n    </ifx-sidebar-item>\n    <ifx-sidebar-title>Items group</ifx-sidebar-title>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon=\"${args.icon === 'none' ? '' : args.icon}\">Item 1</ifx-sidebar-item>\n    <ifx-sidebar-item href='https://google.com' target='_blank' icon=\"${args.icon === 'none' ? '' : args.icon}\">Item 2</ifx-sidebar-item>\n  `;\n  return sidebarElement;\n}",...Default.parameters?.docs?.source}}},WithSubmenu.parameters={...WithSubmenu.parameters,docs:{...WithSubmenu.parameters?.docs,source:{originalSource:"args => {\n  // Create the sidebar element and attach event listener\n  const sidebarElement = document.createElement('ifx-sidebar') as HTMLIfxSidebarElement;\n  sidebarElement.setAttribute('application-name', args.applicationName);\n  sidebarElement.addEventListener('ifxSidebarNavigationItem', action('ifxSidebarNavigationItem'));\n  sidebarElement.addEventListener('ifxSidebarActionItem', action('ifxSidebarActionItem'));\n  sidebarElement.addEventListener('ifxSidebarMenu', action('ifxSidebarMenu'));\n  sidebarElement.setAttribute('initial-collapse', args.initialCollapse);\n\n  // Create 3 sections\n  for (let i = 0; i < 3; i++) {\n    const sectionElement = document.createElement('ifx-sidebar-item');\n    sectionElement.textContent = `Header Section ${i + 1}`;\n\n    // In each section, create 3 menu items\n    for (let j = 0; j < 3; j++) {\n      const menuItemElement = document.createElement('ifx-sidebar-item');\n      menuItemElement.setAttribute('icon', args.icon ? 'image-16' : '');\n      menuItemElement.textContent = `Menu Item ${j + 1}`;\n\n      // In the first menu item of each section, create 3 submenu items\n      if (j === 0) {\n        for (let k = 0; k < 3; k++) {\n          const subMenuItemElement = document.createElement('ifx-sidebar-item');\n          subMenuItemElement.textContent = `Sub Menu Item ${k + 1}`;\n          menuItemElement.appendChild(subMenuItemElement);\n        }\n      }\n      sectionElement.appendChild(menuItemElement);\n    }\n    sidebarElement.appendChild(sectionElement);\n  }\n  const firstSection = sidebarElement.querySelectorAll('ifx-sidebar-item')[0];\n  const firstMenuItem = firstSection.querySelectorAll('ifx-sidebar-item')[0];\n  firstMenuItem.querySelectorAll('ifx-sidebar-item')[0].setAttribute('active', 'true'); //first submenu item\n  firstMenuItem.querySelectorAll('ifx-sidebar-item')[0].setAttribute('is-action-item', 'false');\n  firstMenuItem.querySelectorAll('ifx-sidebar-item')[1].setAttribute('is-action-item', 'true'); //2nd submenu item\n  firstMenuItem.querySelectorAll('ifx-sidebar-item')[2].setAttribute('is-action-item', 'true'); //3rd sub menu item\n\n  return sidebarElement;\n}",...WithSubmenu.parameters?.docs?.source}}},WithNumberIndicator.parameters={...WithNumberIndicator.parameters,docs:{...WithNumberIndicator.parameters?.docs,source:{originalSource:'() => `<ifx-sidebar application-name="Application name">\n  <ifx-sidebar-item icon="image-16" number-indicator="5">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16" number-indicator="1">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16" number-indicator="23">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item active="false">\n    Header Section\n    <ifx-sidebar-item icon="image-16" active="false" >\n      Second layer\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16">\n      3rd layer Menu Item\n      </ifx-sidebar-item>\n\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16" value="thisPage">\n      This Page\n      </ifx-sidebar-item>\n\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16">\n      3rd layer Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n\n    <ifx-sidebar-item icon="image-16" active="false">\n      Second layer\n      <ifx-sidebar-item target="_blank" icon="image-16" active="false">\n      Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n\n    <ifx-sidebar-item icon="image-16" active="false">\n      Second layer\n      <ifx-sidebar-item target="_blank" icon="image-16" active="false">\n      Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  \n\n  <ifx-sidebar-item>\n  Header Section\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item active="false" is-action-item="false" target="_blank" icon="image-16">\n    Sub Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item is-action-item="true" icon="image-16" value="thisPage">\n    This one too\n    </ifx-sidebar-item>\n    <ifx-sidebar-item is-action-item="false" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  </ifx-sidebar-item>\n\n\n  <ifx-sidebar-item>\n  Header Section\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  </ifx-sidebar-item>\n</ifx-sidebar>`',...WithNumberIndicator.parameters?.docs?.source}}}}}]);