"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1456],{"./dist/esm/ifx-tooltip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_tooltip:()=>Tooltip});var _index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-dc4139fb.js"),_popper_1604923e_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/popper-1604923e.js");const Tooltip=class{constructor(hostRef){(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.popperInstance=null,this.onMouseEnter=()=>{var _a,_b;null===(_a=this.popperInstance)||void 0===_a||_a.setOptions((options=>Object.assign(Object.assign({},options),{modifiers:[...options.modifiers,{name:"eventListeners",enabled:!0}]}))),this.initializePopper(),this.tooltipVisible=!0,this.tooltipEl.style.display="block",null===(_b=this.popperInstance)||void 0===_b||_b.update()},this.onMouseLeave=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.onClick=()=>{var _a;"dismissible"===this.variant.toLowerCase()&&(this.initializePopper(),this.tooltipVisible=!this.tooltipVisible,this.tooltipEl.style.display=this.tooltipVisible?"block":"none",null===(_a=this.popperInstance)||void 0===_a||_a.update())},this.onDismissClick=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.internalPosition="auto",this.variant="compact",this.icon=void 0}componentWillLoad(){""===this.variant.toLowerCase().trim()&&(this.variant="compact")}componentDidLoad(){const slotElement=this.el.shadowRoot.querySelector(".tooltip__container").firstChild;"compact"===this.variant.toLowerCase()||"extended"===this.variant.toLowerCase()?(slotElement.addEventListener("mouseenter",this.onMouseEnter),slotElement.addEventListener("mouseleave",this.onMouseLeave)):slotElement.addEventListener("click",this.onClick)}initializePopper(){if(this.popperInstance)return;this.referenceEl=this.el,"compact"===this.variant.toLowerCase()?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-compact"):"dismissible"===this.variant.toLowerCase()?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-dismissible"):this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-extended");const effectivePosition="auto"===this.position?this.determineBestPosition():this.position;this.internalPosition=effectivePosition,this.tooltipEl&&this.referenceEl&&(this.popperInstance=(0,_popper_1604923e_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.referenceEl,this.tooltipEl,{placement:this.internalPosition,modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:".tooltip-arrow-svg"}}]})),this.tooltipEl.setAttribute("data-placement",effectivePosition)}determineBestPosition(){const rect=this.referenceEl.getBoundingClientRect(),yOffset=window.scrollY,xOffset=window.scrollX,verticalHalfwayPoint=rect.top+yOffset+rect.height/2,horizontalHalfwayPoint=rect.left+xOffset+rect.width/2;return"auto"===this.position?verticalHalfwayPoint>window.innerHeight/2?horizontalHalfwayPoint>window.innerWidth/2?"top-end":"top-start":horizontalHalfwayPoint>window.innerWidth/2?"bottom-end":"bottom-start":this.position}positionChanged(newVal){var _a;this.internalPosition=newVal,null===(_a=this.popperInstance)||void 0===_a||_a.destroy(),this.popperInstance=null}disconnectedCallback(){var _a;null===(_a=this.popperInstance)||void 0===_a||_a.destroy()}render(){const tooltipDismissible={"tooltip-dismissible":!0,visible:this.tooltipVisible},tooltipCompact={"tooltip-compact":!0,visible:this.tooltipVisible},tooltipExtended={"tooltip-extended":!0,visible:this.tooltipVisible};return(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e007c8071660e02f6095b5a82f914c2e12ddf0f2","aria-label":"a tooltip showing important information","aria-value":this.header,class:"tooltip__container"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"60ec8227c63b577b20b242e39862caa1e2f5ef71"}),"dismissible"===this.variant.toLowerCase()&&(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"f8115c1eaa4e257b4d0fbe496748ac8b348a05f4",class:tooltipDismissible},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"809df8e5f64a5321b957a55a12610b45c18a80b8","aria-label":"Close Tooltip",class:"close-button",onClick:this.onDismissClick},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"15ec5a71cfe8da763dc896c139d838084f2c201b",icon:"cross16"})),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b0b8ec8a552214c696e54da04275ea3ea55f5e38",class:"tooltip-dismissible-content"},this.header&&(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"f6ecede4d9753a453e6f711c5bdc6f7d34320ba4",class:"tooltip-dismissible-header"},this.header),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"45c8024e7fd8ba1542553093258d9df228f094f2",class:"tooltip-dismissible-body"},this.text)),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"5eb8a17638eb6297a6ef43011058b5e754a1b0b5",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"afa82accf14379b8d2ffcf78d172cbdd62aaa5d3",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"compact"===this.variant.toLowerCase()&&(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"4865b977ae54263945ff14131085193663c0c1f9",class:tooltipCompact},this.text,(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"de4b39fc585e34b78783b96849b7d5f5378c2f19",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"ed5ddfdb03c3e1aeb0e3414541f744f4113a5054",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"extended"===this.variant.toLowerCase()&&(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"7e9909ecd0b003a30767c480ee80747641bbae5f",class:tooltipExtended},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"60e4f1d4dfb3ef651788c4bf3eb624a30d1b9307",name:"icon"},this.icon?(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"extended_icon"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})):(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"extended_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c375d0e71ec4e9d458a7cf7aa30b9fe6a8bdb66e",class:"tooltip-extended-content"},this.header&&(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b56bf05475d2c81ebb4c4d321fd69db60b66b148",class:"tooltip-extended-header"},this.header),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"76c4eca8c6eff6d9f5fae6d206aa1986fd5407d7",class:"tooltip-extended-body"},this.text)),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"c19f82a96d543855649ccf741b5e20b73e985897",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"a134d8b7ff6c37c48af59abb8eabfa3928709a5c",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}get el(){return(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{position:["positionChanged"]}}};Tooltip.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.tooltip__container{display:inline-flex;flex-direction:column;position:relative;font-family:var(--ifx-font-family)}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1080;display:none;transition:opacity 0.3s;position:absolute;font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF;width:max-content;box-sizing:border-box;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:start}.tooltip-dismissible .close-button{all:unset;cursor:pointer;position:relative;order:2;margin-top:12px;margin-right:12px;line-height:0px}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{align-items:center;padding:12px;gap:10px}.tooltip-extended .extended_icon{display:flex;align-self:flex-start;align-items:center;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-7px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-3px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-3px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}.tooltip-compact{min-width:28px !important;max-width:145px !important}.tooltip-dismissible{min-width:145px !important;max-width:310px !important}.tooltip-extended{min-width:145px !important;max-width:310px !important}'}}]);