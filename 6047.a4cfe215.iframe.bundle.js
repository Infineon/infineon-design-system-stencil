"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6047],{"./dist/esm/ifx-breadcrumb_6.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_breadcrumb:()=>Breadcrumb,ifx_breadcrumb_item:()=>BreadcrumbItem,ifx_breadcrumb_item_label:()=>BreadcrumbItemLabel,ifx_dropdown_item:()=>DropdownItem,ifx_dropdown_menu:()=>DropdownMenu,ifx_icon:()=>InfineonIconStencil});var _index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-3a99c8dc.js"),_icons_4575d84a_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/icons-4575d84a.js");const Breadcrumb=class{constructor(hostRef){(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}componentDidLoad(){const element=this.el.shadowRoot.firstChild;this.validateBreadcrumbItemStructure(element)}validateBreadcrumbItemStructure(element){if(!element)return void console.error("element not found");const slot=element.querySelector("slot");if(slot){const assignedNodes=slot.assignedNodes();for(let i=0;i<assignedNodes.length;i++){const node=assignedNodes[i];if("IFX-BREADCRUMB-ITEM"===node.nodeName){const breadcrumbItem=node,breadcrumbItemLabel=breadcrumbItem.querySelector("ifx-breadcrumb-item-label"),breadcrumbDropdown=breadcrumbItem.querySelector("ifx-dropdown-menu");if(breadcrumbItemLabel.hasAttribute("url")&&breadcrumbDropdown)throw new Error("ifx-breadcrumb-item cannot have both a url and a dropdown menu.")}}}}render(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{key:"82aec60bebf9a71d7cdcfc2916f91c0e36dee868","aria-label":"Page navigation breadcrumb"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",{key:"70bae75b26b5df4c509f16c0ab8e2b10333de8ac",class:"breadcrumb"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"1cb28e3640f20319349b4f6d3cb1568508d3b1ba"})))}get el(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Breadcrumb.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:var(--ifx-font-family);font-size:0.875rem;align-items:flex-start}';const BreadcrumbItem=class{constructor(hostRef){(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.isLastItem=!1,this.uniqueId=void 0,this.hasDropdownMenu=!1}handleOutsideClick(event){event.composedPath().includes(this.el)||this.closeDropdownMenu()}handleKeyDown(ev){"Enter"===ev.key||" "===ev.key?this.toggleDropdownMenu():"Escape"===ev.key&&this.closeDropdownMenu()}getDropdownMenu(){return this.el.shadowRoot.querySelector(".dropdown-menu")}menuWrapperEventReEmitter(event){this.emittedElement=event.detail}getMenuIconWrapper(){return this.emittedElement}handleClassList(el,type,className){el.classList[type](className)}closeDropdownMenu(){if(this.hasDropdownMenu){const dropdownMenu=this.getDropdownMenu(),menuWrapper=this.getMenuIconWrapper();this.handleClassList(dropdownMenu,"remove","open"),this.handleClassList(menuWrapper,"remove","show")}}toggleDropdownMenu(){if(this.hasDropdownMenu){const dropdownMenu=this.getDropdownMenu(),menuWrapper=this.getMenuIconWrapper();this.handleClassList(dropdownMenu,"toggle","open"),this.handleClassList(menuWrapper,"toggle","show")}}isDropdownMenuOpen(){const dropdownMenu=this.getDropdownMenu();return this.hasDropdownMenu&&dropdownMenu&&dropdownMenu.classList.contains("open")}handleLastItem(){const breadcrumbItems=this.el.closest("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item");this.el===breadcrumbItems[breadcrumbItems.length-1]?this.isLastItem=!0:this.isLastItem=!1}generateUniqueId(prefix="id"){return`${prefix}-${Math.random().toString(36).substring(2,9)}`}componentWillLoad(){this.uniqueId||(this.uniqueId=this.generateUniqueId("breadcrumb-dropdown")),this.handleLastItem()}componentDidUpdate(){this.handleLastItem()}componentWillRender(){this.setHasDropdownMenuState()}setHasDropdownMenuState(){const dropdownMenu=this.getIfxDropdownMenuComponent();dropdownMenu&&(this.hasDropdownMenu=!!dropdownMenu)}getIfxDropdownMenuComponent(){return this.el.querySelector("ifx-dropdown-menu")}componentDidLoad(){const dropdownMenu=this.getIfxDropdownMenuComponent();if(this.hasDropdownMenu)dropdownMenu.isOpen=!0;else{const iconMenuWrapper=this.getMenuIconWrapper();this.handleClassList(iconMenuWrapper,"toggle","hide")}}render(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:"5779bbe0854a084c33c1bb535655fe484165784e",class:"breadcrumb-parent","aria-current":""+(this.isLastItem?"page":"")},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:"63e956424dda4002a84c7da17bfe42b3f7f830b0",role:"button",tabindex:this.hasDropdownMenu?0:-1,class:"breadcrumb-wrapper",onClick:()=>this.toggleDropdownMenu(),"aria-controls":this.uniqueId,"aria-haspopup":"menu","aria-label":"Toggle dropdown menu"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"14f66501d9ac8efc9ff9e6b771757e30c70814a6",name:"label"}),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9620ab0608dc5c74aa39fe321a332421ee4c76b3",id:this.uniqueId,class:"dropdown-menu","aria-expanded":this.isDropdownMenuOpen(),"aria-label":"Dropdown menu"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"c4e6e9b1650f2467876f7824201139b369625b3d"}))),!this.isLastItem&&(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"5c028ab8720841b8a2777a84d7ad3f933ab43b79",class:"breadcrumb-divider","aria-hidden":"true"},"/"))}get el(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};BreadcrumbItem.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px;min-height:24px;justify-content:center}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1D1D1D;font-family:var(--ifx-font-family);font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#EEEDED;line-height:13px;font-size:1.25rem;margin-right:12px}';const BreadcrumbItemLabel=class{constructor(hostRef){(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.breadcrumbMenuIconWrapper=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"breadcrumbMenuIconWrapper",7),this.icon=void 0,this.iconAriaLabel=void 0,this.url=void 0,this.target="_self"}componentDidLoad(){const menuWrapper=this.el.shadowRoot.querySelector(".breadcrumb-item-label-container").querySelector(".menu-icon-wrapper");this.breadcrumbMenuIconWrapper.emit(menuWrapper)}render(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{key:"dd125c445b9233ffd748760e4c553c73d4ce549c",href:this.url,target:this.target,class:"breadcrumb-item-label-container",role:"link"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"aefce7159d105df87660236e3b373f6ebba70f70",icon:this.icon,"aria-hidden":"true"}),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"822fbaea86f9854e96c11972759e87041ce82d01",class:"label-wrapper"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"63a4f6749680f5c29ef222d055f0d3bf2d10add8"})),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"8635855400bf03c7cae746e07512653a71bd902b",class:"menu-icon-wrapper","aria-hiden":"true"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"46716d95fc31e1a3a389e45393447ecf2d1949fe",icon:"chevron-down-12"})))}get el(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};BreadcrumbItemLabel.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-item-label-container{display:flex;align-items:center;gap:8px;text-decoration:none;color:#1D1D1D}.breadcrumb-item-label-container.margin{margin-left:16px}.breadcrumb-item-label-container ifx-icon:empty{display:none}.breadcrumb-item-label-container .label-icon-wrapper{display:inline-flex}.breadcrumb-item-label-container .menu-icon-wrapper{display:flex;justify-content:center;align-items:center;width:16px;height:16px}.breadcrumb-item-label-container .menu-icon-wrapper.hide{display:none}.breadcrumb-item-label-container .menu-icon-wrapper ifx-icon{transition:0.3s}.breadcrumb-item-label-container .menu-icon-wrapper.show ifx-icon{transition:0.3s;transform:rotate(180deg)}';const DropdownItem=class{constructor(hostRef){(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxDropdownItem=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxDropdownItem",7),this.icon=void 0,this.href="",this.target="_self",this.hide=!1,this.size="l"}handleMenuSize(event){this.size=event.detail}handleEventEmission(){this.ifxDropdownItem.emit(this.el.textContent)}render(){let hrefAttr=this.href?{href:this.href,target:this.target}:{};return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",Object.assign({key:"3c7e061f9508b493bd785551a4f7a0c4d4d28089"},hrefAttr,{onClick:()=>this.handleEventEmission(),class:`dropdown-item ${"s"===this.size?"small":""} ${this.hide?"hide":""}`}),this.icon&&(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"91743f629c462d98aab8ca751093da0eb1accc4c",class:"icon",icon:this.icon}),(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"832a9090c808cca9432ee38303f086f5ff5b7670"},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"cc910ad035b750195b38278391a334dd1aa451ea"})))}get el(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};DropdownItem.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}';const DropdownMenu=class{constructor(hostRef){(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.menuSize=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"menuSize",7),this.ifxDropdownMenuItem=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxDropdownMenuItem",7),this.isOpen=!1,this.size="l",this.hideTopPadding=!1,this.filteredItems=[]}handleMenuFilter(event){const searchValue=event.detail;this.filterDropdownItems(searchValue)}handleDropdownItemValueEmission(event){this.ifxDropdownMenuItem.emit(event.detail)}filterDropdownItems(searchValue){const allItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));let dropdownItem,txtValue,query=searchValue.toUpperCase();for(let i=0;i<allItems.length;i++)dropdownItem=allItems[i],txtValue=dropdownItem.textContent||dropdownItem.innerText,txtValue.toUpperCase().indexOf(query)>-1?dropdownItem.setAttribute("hide",!1):dropdownItem.setAttribute("hide",!0)}componentWillUpdate(){this.menuSize.emit(this.size)}componentWillLoad(){this.filteredItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));const searchField=this.el.querySelector("ifx-search-field"),dropdownHeader=this.el.querySelector("ifx-dropdown-header");this.hideTopPadding=!(!searchField&&!dropdownHeader)}render(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6604ba596a0da542ae0d68c217c25a7951d0cfde",class:`dropdown-menu \n      ${this.isOpen?"show":""} \n      ${this.hideTopPadding?"hideTopPadding":""}\n      ${"s"===this.size?"small":""}`},(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"0fceab1c429ec43ce2c25e28703c120fee46c9d6"}))}get el(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};DropdownMenu.style=":host{position:relative;z-index:1000}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible;position:absolute}";const InfineonIconStencil=class{constructor(hostRef){(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.consoleError=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(htmlString){const div=document.createElement("div");return div.innerHTML=htmlString,div.firstChild}convertHtmlToObject(htmlElement){return Array.from(htmlElement.attributes,(({name,value})=>({name,value}))).reduce(((acc,current)=>(acc[current.name]=current.value,acc)),{})}convertPathsToVnode(htmlPath){let svgPaths=[];const parentPath=this.convertHtmlToObject(htmlPath),parentPathToVnode=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",parentPath);if(svgPaths.push(parentPathToVnode),htmlPath.firstChild){const paths=htmlPath.querySelectorAll("path"),pathLength=htmlPath.querySelectorAll("path").length;for(let i=0;i<pathLength;i++){let pathToObject=this.convertHtmlToObject(paths[i]),objToVnode=(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",pathToObject);svgPaths.push(objToVnode)}}return svgPaths}getSVG(svgPath){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...svgPath)}constructIcon(){if(this.ifxIcon){const htmlPath=this.convertStringToHtml(this.ifxIcon.svgContent),svgPath=this.convertPathsToVnode(htmlPath);return this.getSVG(svgPath)}return""!==this.icon?(console.error("Icon not found!"),void this.consoleError.emit(!0)):void 0}componentWillLoad(){this.ifxIcon=(0,_icons_4575d84a_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,((_m,chr)=>chr)))}render(){return(0,_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_3a99c8dc_js__WEBPACK_IMPORTED_MODULE_0__.a,{key:"a87c4af3053dd98421a76a254e9eaa624421c615"},this.constructIcon())}};InfineonIconStencil.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}"}}]);