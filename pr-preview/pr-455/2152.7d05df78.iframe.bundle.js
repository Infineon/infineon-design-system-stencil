"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2152],{"./dist/esm/ifx-dropdown-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_dropdown_item:()=>DropdownItem});var _index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-69e586c1.js");const DropdownItem=class{constructor(hostRef){(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxDropdownItemValue=(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxDropdownItemValue",7),this.icon=void 0,this.href="",this.target="_self",this.hide=!1,this.size="l"}handleMenuSize(event){this.size=event.detail}handleEventEmission(){this.ifxDropdownItemValue.emit(this.el.textContent)}render(){let hrefAttr=this.href?{href:this.href,target:this.target}:{};return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",Object.assign({},hrefAttr,{onClick:()=>this.handleEventEmission(),class:`dropdown-item ${"s"===this.size?"small":""} ${this.hide?"hide":""}`}),this.icon&&(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{class:"icon",icon:this.icon}),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};DropdownItem.style='*{font-family:"Source Sans 3"}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}'}}]);