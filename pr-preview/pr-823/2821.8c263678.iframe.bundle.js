"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2821],{"./dist/esm/ifx-card.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_card:()=>Card});var _index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-34963df7.js");const Card=class{constructor(hostRef){(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.target="_self"}setImgPosition(event){this.alignment=event.detail}handleComponentAdjustment(){var _a;const image=this.el.querySelector("ifx-card-image"),links=this.el.querySelector("ifx-card-links");this.noImg=!image,this.noBtns=!links,this.href&&""===(null===(_a=this.href)||void 0===_a?void 0:_a.trim())&&(this.href=void 0)}handleClassList(el,type,className){el.classList[type](className)}handleHovering(){const card=this.el.shadowRoot.querySelector(".card");let cardHeadline=this.el.querySelector("ifx-card-headline");card.addEventListener("mouseover",(ev=>{"IFX-CARD-LINKS"===ev.target.nodeName||"IFX-BUTTON"===ev.target.nodeName?this.handleClassList(card,"add","linkHovered"):(this.handleClassList(card,"add","cardHovered"),cardHeadline&&(cardHeadline.isHovered=!0))})),card.addEventListener("mouseout",(()=>{cardHeadline&&(cardHeadline.isHovered=!1),this.handleClassList(card,"remove","cardHovered"),this.handleClassList(card,"add","linkHovered")}))}componentWillLoad(){this.handleComponentAdjustment()}componentDidLoad(){this.handleHovering(),this.addEventListenersToHandleCustomFocusState()}addEventListenersToHandleCustomFocusState(){const element=this.el.shadowRoot;if(!element)return void console.error("element not found");const upperBodyWrapper=element.querySelector(".upper__body-wrapper");upperBodyWrapper?(element.tabIndex=-1,upperBodyWrapper.tabIndex=-1):console.error("upper body wrapper not found")}componentWillUpdate(){this.handleComponentAdjustment()}render(){return(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.a,null,(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-labelledby":"label",class:`card \n          ${this.noBtns?"noBtns":""}\n          ${this.direction} \n          ${this.alignment}`},"horizontal"===this.direction&&(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"horizontal"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{class:"card-img "+(this.noImg?"noImage":""),href:this.href},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"img"})),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"lower__body-wrapper"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{class:"upper-body",href:this.href},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"buttons"})))),"vertical"===this.direction&&(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"vertical"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{class:"upper__body-wrapper",href:this.href,target:this.target},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-img "+(this.noImg?"noImage":"")},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"img"})),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"upper-body"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))),(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"lower__body-wrapper"},(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"buttons"})))))}get el(){return(0,_index_34963df7_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Card.style='*{font-family:"Source Sans 3"}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#FFFFFF;background-clip:border-box;border:1px solid #EEEDED;border-radius:1px;width:350px;height:auto}.card.linkHovered{border-color:#EEEDED}.card.cardHovered{border-color:#0A8276}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card:hover{cursor:pointer}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#EEEDED}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}'}}]);