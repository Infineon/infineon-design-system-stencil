"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6797],{"./dist/esm/ifx-card-headline.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_card_headline:()=>CardHeadline});var _index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f6e95f3d.js");const CardHeadline=class{constructor(hostRef){(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}componentWillLoad(){var _a;const cardElement=this.el.closest("ifx-card");if(cardElement){const cardClass=null===(_a=cardElement.shadowRoot.querySelector(".card"))||void 0===_a?void 0:_a.className;cardClass&&cardClass.includes("horizontal")&&(this.direction="horizontal");cardElement.querySelector("ifx-card-text")&&(this.hasDesc=!0)}}render(){return(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3599127fad1e7dc563064d38df9996bcd7bd9217",class:"card__headline-wrapper "+(this.hasDesc?"withDesc":"")},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"643428271dec2bdf71c7059bf6e28c00cae9438b",class:`card-headline ${this.direction}`},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"3b7ec4e25a399e96a0db4f03d793109eabf08fff"})))}get el(){return(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};CardHeadline.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:var(--ifx-font-family);font-weight:600;font-size:1.5rem;line-height:2rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.horizontal{font-size:1.25rem;line-height:28px}'}}]);