"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8270],{"./dist/esm/ifx-card-headline.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_card_headline:()=>CardHeadline});var _index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-ee4c5c8d.js");const CardHeadline=class{constructor(hostRef){(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.direction=void 0,this.hasDesc=void 0,this.isHovered=!1}componentWillLoad(){var _a;const cardElement=this.el.closest("ifx-card");if(cardElement){const cardClass=null===(_a=cardElement.shadowRoot.querySelector(".card"))||void 0===_a?void 0:_a.className;cardClass&&cardClass.includes("horizontal")&&(this.direction="horizontal");cardElement.querySelector("ifx-card-text")&&(this.hasDesc=!0)}}render(){return(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3c3b46b8ac3f2725637fc4d78c936bb16239a7e0",class:"card__headline-wrapper "+(this.hasDesc?"withDesc":"")},(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"bbf0c82e5e759376ad1c15ec23f46423d531dd50",class:`card-headline ${this.direction} ${this.isHovered?"isHovered":""}`},(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"50c048485369dd0cd7c30ac0a3d100c8053fb661"})))}get el(){return(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};CardHeadline.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:var(--ifx-font-family);font-weight:600;font-size:1.5rem;line-height:2rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.isHovered{color:#0A8276}.card-headline.horizontal{font-size:1.25rem;line-height:28px}'}}]);