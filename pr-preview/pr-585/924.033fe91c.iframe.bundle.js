"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[924],{"./dist/esm/ifx-chip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_chip:()=>Chip});var _index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f31c492a.js");const Chip=class{constructor(hostRef){(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxDropdownMenu=(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxDropdownMenu",7),this.placeholder=void 0,this.selectedValue=""}handleOutsideClick(event){event.composedPath().includes(this.el)||this.closedMenu()}handleDropdownItemValueEmission(event){this.selectedValue=event.detail,this.ifxDropdownMenu.emit(event.detail),this.toggleMenu()}getDropdownMenu(){return this.el.querySelector("ifx-dropdown-menu")}closedMenu(){this.getDropdownMenu().isOpen=!1}toggleMenu(){let dropdownMenuComponent=this.getDropdownMenu();dropdownMenuComponent.isOpen=!dropdownMenuComponent.isOpen,this.toggleCloseIcon()}toggleCloseIcon(){this.el.shadowRoot.querySelector(".wrapper-close-button").classList.toggle("show")}render(){return(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-value":this.selectedValue,"aria-label":"chip with a dropdown menu",class:"dropdown container"},(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"wrapper",onClick:()=>this.toggleMenu()},(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"wrapper-label"},this.selectedValue?this.selectedValue:this.placeholder),(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"wrapper-close-button"},(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"chevrondown12"}))),(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"menu"}))}get el(){return(0,_index_f31c492a_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Chip.style='*{font-family:"Source Sans 3"}:host{display:inline-block}.container{position:relative}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper:active{border:1px solid #0A8276}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s;width:12px;height:12px}.container .wrapper .wrapper-close-button.show ifx-icon{transition:0.3s;transform:rotate(-180deg)}'}}]);