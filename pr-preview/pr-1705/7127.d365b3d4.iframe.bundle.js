"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7127],{"./dist/esm/ifx-breadcrumb-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_breadcrumb_item:()=>BreadcrumbItem});var _index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f6e95f3d.js");const BreadcrumbItem=class{constructor(hostRef){(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.isLastItem=!1,this.hasDropdownMenu=!1}handleOutsideClick(event){event.composedPath().includes(this.el)||this.closeDropdownMenu()}handleKeyDown(ev){"Enter"===ev.key||" "===ev.key?this.toggleDropdownMenu():"Escape"===ev.key&&this.closeDropdownMenu()}getDropdownMenu(){return this.el.shadowRoot.querySelector(".dropdown-menu")}menuWrapperEventReEmitter(event){this.emittedElement=event.detail}getMenuIconWrapper(){return this.emittedElement}handleClassList(el,type,className){el.classList[type](className)}closeDropdownMenu(){if(this.hasDropdownMenu){const dropdownMenu=this.getDropdownMenu(),menuWrapper=this.getMenuIconWrapper();this.handleClassList(dropdownMenu,"remove","open"),this.handleClassList(menuWrapper,"remove","show")}}toggleDropdownMenu(){if(this.hasDropdownMenu){const dropdownMenu=this.getDropdownMenu(),menuWrapper=this.getMenuIconWrapper();this.handleClassList(dropdownMenu,"toggle","open"),this.handleClassList(menuWrapper,"toggle","show")}}isDropdownMenuOpen(){const dropdownMenu=this.getDropdownMenu();return this.hasDropdownMenu&&dropdownMenu&&dropdownMenu.classList.contains("open")}handleLastItem(){const breadcrumbItems=this.el.closest("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item");this.el===breadcrumbItems[breadcrumbItems.length-1]?this.isLastItem=!0:this.isLastItem=!1}generateUniqueId(prefix="id"){return`${prefix}-${Math.random().toString(36).substring(2,9)}`}componentWillLoad(){this.uniqueId||(this.uniqueId=this.generateUniqueId("breadcrumb-dropdown")),this.handleLastItem()}componentDidUpdate(){this.handleLastItem()}componentWillRender(){this.setHasDropdownMenuState()}setHasDropdownMenuState(){const dropdownMenu=this.getIfxDropdownMenuComponent();dropdownMenu&&(this.hasDropdownMenu=!!dropdownMenu)}getIfxDropdownMenuComponent(){return this.el.querySelector("ifx-dropdown-menu")}componentDidLoad(){const dropdownMenu=this.getIfxDropdownMenuComponent();if(this.hasDropdownMenu)dropdownMenu.isOpen=!0;else{const iconMenuWrapper=this.getMenuIconWrapper();this.handleClassList(iconMenuWrapper,"toggle","hide")}}render(){return(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:"5779bbe0854a084c33c1bb535655fe484165784e",class:"breadcrumb-parent","aria-current":""+(this.isLastItem?"page":"")},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:"63e956424dda4002a84c7da17bfe42b3f7f830b0",role:"button",tabindex:this.hasDropdownMenu?0:-1,class:"breadcrumb-wrapper",onClick:()=>this.toggleDropdownMenu(),"aria-controls":this.uniqueId,"aria-haspopup":"menu","aria-label":"Toggle dropdown menu"},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"14f66501d9ac8efc9ff9e6b771757e30c70814a6",name:"label"}),(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9620ab0608dc5c74aa39fe321a332421ee4c76b3",id:this.uniqueId,class:"dropdown-menu","aria-expanded":this.isDropdownMenuOpen(),"aria-label":"Dropdown menu"},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"c4e6e9b1650f2467876f7824201139b369625b3d"}))),!this.isLastItem&&(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"5c028ab8720841b8a2777a84d7ad3f933ab43b79",class:"breadcrumb-divider","aria-hidden":"true"},"/"))}get el(){return(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};BreadcrumbItem.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px;min-height:24px;justify-content:center}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1D1D1D;font-family:var(--ifx-font-family);font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#EEEDED;line-height:13px;font-size:1.25rem;margin-right:12px}'}}]);