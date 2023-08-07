"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[586],{"./dist/esm/ifx-modal.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_modal:()=>IfxModal});var _index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-69e586c1.js");const IfxModal=class{constructor(hostRef){(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.modalOpen=(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"modalOpen",7),this.modalClose=(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"modalClose",7),this.okButtonClick=(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"okButtonClick",7),this.cancelButtonClick=(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"cancelButtonClick",7),this.showModal=!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.alertColor="",this.alertIcon=""}async open(){this.showModal=!0,this.modalOpen.emit()}async close(){this.showModal=!1,this.modalClose.emit()}handleOverlayClick(){this.closeOnOverlayClick&&this.close()}handleOkButtonClick(){this.okButtonClick.emit()}handleCancelButtonClick(){this.cancelButtonClick.emit()}render(){return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-container "+(this.showModal?"open":"")},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-content-container"},this.alertColor&&this.alertIcon?(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`modal-border ${this.alertColor}`},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.alertIcon})):null,(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-content"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-header"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",null,this.caption),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{onClick:()=>this.close()},"×")),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-body"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"content"})),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-footer"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"buttons"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-button",{variant:"outline",onClick:()=>this.handleOkButtonClick()},"OK"),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-button",{onClick:()=>this.handleCancelButtonClick()},"Cancel"))))))}};IfxModal.style=":host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1d1d1d;opacity:0.5}.modal-content{width:100%;flex:1}.modal-content-container{position:absolute;display:flex;align-items:stretch;top:50%;left:50%;transform:translate(-50%, -50%);width:80%;max-width:500px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:15px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;border-bottom:1px solid #eee}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:1rem}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-body{padding:15px}.modal-footer{display:flex;justify-content:flex-end;padding:15px;gap:1em}.modal-border{display:flex;align-items:center;justify-content:center;width:40px;font-size:1.5em}.modal-border.primary{background-color:#378375}.modal-border.secondary{background-color:#7d6f72}.modal-border.danger{background-color:#cd002f}.modal-border.success{background-color:#aec067}.modal-border.warning{background-color:#f07f3c}"}}]);