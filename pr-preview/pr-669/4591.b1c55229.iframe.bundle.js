"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4591],{"./dist/esm/ifx-list-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_list_item:()=>ListGroupItem});var _index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-b3f1e599.js");const ListGroupItem=class{constructor(hostRef){(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.isFlush=!1,this.hasBulletpoint=!1,this.badge=!1,this.badgeValue=0}componentWillLoad(){const ifxListGroup=this.el.closest("ifx-list-group");ifxListGroup.flush?this.isFlush=!0:this.isFlush=!1,ifxListGroup.bulletpoint&&!this.badge?this.hasBulletpoint=!0:this.hasBulletpoint=!1}render(){return(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`list-group-item \n        ${this.isFlush?"flush":""}\n        ${this.hasBulletpoint?"bulletpoint":""}`},(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"list-group-item-content"},(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),this.badge&&(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-number-indicator",null,this.badgeValue))}get el(){return(0,_index_b3f1e599_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};ListGroupItem.style='@charset "UTF-8";.list-group-item{display:flex;align-items:center;justify-content:space-between;height:40px;width:350px;padding:8px 16px;background-color:#FFFFFF;border:1px solid #EEEDED;border-radius:1px 1px 0px 0px;font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem}.list-group-item.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-item.flush.bulletpoint{padding:8px}.list-group-item.bulletpoint .list-group-item-content::before{content:"•";display:inline-block;font-size:1.125rem;padding-right:10px}.list-group-item:hover:not(.show){background-color:#EEEDED}.list-group-item:active:not(.show){background-color:#0A8276;color:#FFFFFF}.list-group-item.show{display:block;height:88px;padding:16px}'}}]);