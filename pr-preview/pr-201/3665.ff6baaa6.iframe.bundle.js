"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3665],{"./dist/esm/ifx-card.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_card:()=>Card});var _index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-3ddeaa0f.js");const Card=class{constructor(hostRef){(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.hasBtn=void 0,this.direction="vertical",this.alignment=void 0,this.hasDesc=void 0,this.hasAll=void 0,this.largeSize=void 0,this.smallSize=void 0,this.hasImg=void 0,this.href="",this.target="_self"}setImgPosition(event){this.alignment=event.detail}handleComponentAdjustment(){const img=this.el.querySelector("ifx-card-image"),desc=this.el.querySelector("ifx-card-text"),overline=this.el.querySelector("ifx-card-overline"),headline=this.el.querySelector("ifx-card-headline"),button=this.el.querySelector("ifx-link")||this.el.querySelector("ifx-button");this.hasImg=!!img,desc&&(this.hasDesc=!0),this.hasBtn=!!button,overline&&headline&&desc&&button?this.hasAll=!0:this.hasDesc||overline&&headline&&button?this.largeSize=!0:this.smallSize=!0}componentWillLoad(){this.handleComponentAdjustment()}componentWillUpdate(){this.handleComponentAdjustment()}render(){return(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:this.hasBtn?void 0:this.href,target:this.target,class:`card \n          ${this.hasBtn?"hasBtn":""}\n          ${this.hasImg?"":"onlyBody"}\n          ${this.direction} \n          ${this.alignment} \n          ${this.largeSize?"largeSize":""} \n          ${this.smallSize?"smallSize":""} \n          ${this.hasAll?"hasAll":""}`},(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-img "+(this.hasImg?"":"noImage")},(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"img"})),(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-body"},(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}get el(){return(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Card.style='*{font-family:"Source Sans Pro"}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:22rem;height:auto;text-decoration:none;color:#1d1d1d}.card:hover{cursor:pointer;border-color:#0A8276}.card.hasBtn:hover{cursor:default;border-color:#ebe9e9}.card .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .card-body{padding:24px}.card.horizontal{flex-direction:row;width:538px}.card.horizontal.onlyBody{width:269px}.card.horizontal.hasAll{height:auto}.card.horizontal.largeSize{height:218px}.card.horizontal.smallSize{height:138px}.card.horizontal .card-body{flex:1;width:0;padding:17px 24px 25px 25px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img.noImage{display:none}.card.horizontal.left .card-img{order:1}.card.horizontal.left .card-body{order:2}.card__text-wrapper{padding-bottom:0px}.card__text-wrapper.hasBtn{padding-bottom:16px}.card-text{line-height:24px;font-size:16px;font-weight:400;white-space:wrap;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}'}}]);