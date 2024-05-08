"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8126],{"./dist/esm/ifx-breadcrumb.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_breadcrumb:()=>Breadcrumb});var _index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-618cb11f.js");const Breadcrumb=class{constructor(hostRef){(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}componentDidLoad(){const element=this.el.shadowRoot.firstChild;this.addEventListenersToHandleCustomFocusState(element)}addEventListenersToHandleCustomFocusState(element){if(!element)return void console.error("element not found");element.tabIndex=-1;const slot=element.querySelector("slot");if(slot){const assignedNodes=slot.assignedNodes();for(let i=0;i<assignedNodes.length;i++){const node=assignedNodes[i];if("IFX-BREADCRUMB-ITEM"===node.nodeName){const breadcrumbLabel=node;breadcrumbLabel.hasAttribute("url")||(breadcrumbLabel.tabIndex=-1,breadcrumbLabel.addEventListener("focus",(()=>{breadcrumbLabel.hasAttribute("url")&&breadcrumbLabel.blur()})))}}}}render(){return(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{key:"7cdc043825f62833c63057def24fb084ae674fa8","aria-label":"Page navigation breadcrumb"},(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol",{key:"ea640b384498bb155e24b3d8d0f54462596af557",class:"breadcrumb"},(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"59aa1d9f13c574b9a7dcbc1a8948d5e84337728a"})))}get el(){return(0,_index_618cb11f_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Breadcrumb.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:var(--ifx-font-family);font-size:0.875rem;align-items:flex-start}'}}]);