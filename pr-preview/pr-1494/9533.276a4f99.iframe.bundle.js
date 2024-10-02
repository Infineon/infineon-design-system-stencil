"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9533],{"./dist/esm/ifx-card.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_card:()=>Card});var _index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-3655ed9e.js");const Card=class{constructor(hostRef){(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.internalHref="",this.target="_self"}setImgPosition(event){this.alignment=event.detail}handleComponentAdjustment(){const image=this.el.querySelector("ifx-card-image"),links=this.el.querySelector("ifx-card-links");this.noImg=!image,this.noBtns=!links,""===this.href.trim()?this.internalHref=void 0:this.internalHref=this.href}handleClassList(el,type,className){el.classList[type](className)}handleHovering(){const card=this.el.shadowRoot.querySelector(".card");let cardHeadline=this.el.querySelector("ifx-card-headline");this.href&&(card.addEventListener("mouseover",(ev=>{"IFX-CARD-LINKS"===ev.target.nodeName||"IFX-BUTTON"===ev.target.nodeName?this.handleClassList(card,"add","linkHovered"):(this.handleClassList(card,"add","cardHovered"),cardHeadline&&(cardHeadline.isHovered=!0))})),card.addEventListener("mouseout",(()=>{cardHeadline&&(cardHeadline.isHovered=!1),this.handleClassList(card,"remove","cardHovered"),this.handleClassList(card,"add","linkHovered")})))}componentWillLoad(){this.handleComponentAdjustment()}componentDidLoad(){this.handleHovering(),"vertical"===this.direction&&this.addEventListenersToHandleCustomFocusState()}addEventListenersToHandleCustomFocusState(){const element=this.el.shadowRoot;if(!element)return void console.error("element not found");const upperBodyWrapper=element.querySelector(".upper__body-wrapper");upperBodyWrapper?(element.tabIndex=-1,upperBodyWrapper.tabIndex=-1):console.error("upper body wrapper not found")}componentWillUpdate(){this.handleComponentAdjustment()}render(){return(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.a,{key:"44d2f6a7b0c06810d889df3dfa1ebdf2626ffbaa"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"83440b6da8705fe56c1e4cae422227f6e9ff3621","aria-labelledby":"label",class:`card \n          ${this.noBtns?"noBtns":""}\n          ${this.direction} \n          ${this.alignment}`},"horizontal"===this.direction&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"d0ba81d19bad9f3fec426532868b953a1e4dfda5",class:"horizontal"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{key:"e6f2cf17f736aa1d6c7e4d5f72e2b90292ba0f6f",class:"card-img "+(this.noImg?"noImage":""),href:this.internalHref},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"776da38da7e63a88ea399a8f067944f635647f96",name:"img"})),(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"56badf552858e33fa8bfdc8d3415a564370b98a8",class:"lower__body-wrapper"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{key:"8b9ef81c3ab3e56474a6795b73ee31529f7b6373",class:"upper-body",href:this.internalHref},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"afa33a91a9e3123f204508fd36f571d68a79d415"})),(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"86c85b4880d97e7f1ee8a3d94090478729ebbf57"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"70b61dcc1a0e5e99fab9c17a3e9f6ea4b4531dcd",name:"buttons"})))),"vertical"===this.direction&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6f764ab3030c4a4e52a8b71d9595ee08cb2132da",class:"vertical"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{key:"a5663be5f4a60c3042ed1e15599e8c9818be7ae3",class:"upper__body-wrapper",href:this.internalHref,target:this.target},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"995f943bb649ec27e59ce81e827102063a5e07cb",class:"card-img "+(this.noImg?"noImage":"")},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"ff296bf4ab50e2b3098917e0b2813fdb0f567b18",name:"img"})),(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ae896252079c10e64018776ffa55bfef2c0f05f2",class:"upper-body"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"3b99f5f339ba9ee5222920d19f36816200c29123"}))),(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8bc259b5e3680bef4df604ed60eb589888cf19b8",class:"lower__body-wrapper"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"2af19a0ad94ed3cb62b9320582eae9e08a76fc3c",name:"buttons"})))))}get el(){return(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Card.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#FFFFFF;background-clip:border-box;border:1px solid #EEEDED;border-radius:1px;width:350px;height:auto;font-family:var(--ifx-font-family)}.card.linkHovered{border-color:#EEEDED}.card.cardHovered{border-color:#0A8276}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#EEEDED}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}'}}]);