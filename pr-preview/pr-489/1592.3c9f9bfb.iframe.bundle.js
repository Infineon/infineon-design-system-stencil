"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1592],{"./dist/esm/ifx-tooltip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_tooltip:()=>Tooltip});var _index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-69e586c1.js"),_popper_1604923e_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/popper-1604923e.js");const Tooltip=class{constructor(hostRef){(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.popperInstance=null,this.onMouseEnter=()=>{var _a,_b;null===(_a=this.popperInstance)||void 0===_a||_a.setOptions((options=>Object.assign(Object.assign({},options),{modifiers:[...options.modifiers,{name:"eventListeners",enabled:!0}]}))),this.initializePopper(),this.tooltipVisible=!0,this.tooltipEl.style.display="block",null===(_b=this.popperInstance)||void 0===_b||_b.update()},this.onMouseLeave=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.onClick=()=>{var _a;"dismissible"===this.variant.toLowerCase()&&(this.initializePopper(),this.tooltipVisible=!this.tooltipVisible,this.tooltipEl.style.display=this.tooltipVisible?"block":"none",null===(_a=this.popperInstance)||void 0===_a||_a.update())},this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.internalPosition="auto",this.variant="compact",this.icon=void 0}initializePopper(){if(this.popperInstance)return;this.referenceEl=this.el,"compact"===this.variant.toLowerCase()?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-compact"):"dismissible"===this.variant.toLowerCase()?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-dismissible"):this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-extended");const effectivePosition="auto"===this.position?this.determineBestPosition():this.position;this.internalPosition=effectivePosition,this.tooltipEl&&this.referenceEl&&(this.popperInstance=(0,_popper_1604923e_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.referenceEl,this.tooltipEl,{placement:this.internalPosition,modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:".tooltip-arrow-svg"}}]})),this.tooltipEl.setAttribute("data-placement",effectivePosition)}determineBestPosition(){const rect=this.referenceEl.getBoundingClientRect(),yOffset=window.scrollY,xOffset=window.scrollX,verticalHalfwayPoint=rect.top+yOffset+rect.height/2,horizontalHalfwayPoint=rect.left+xOffset+rect.width/2;return"auto"===this.position?verticalHalfwayPoint>window.innerHeight/2?horizontalHalfwayPoint>window.innerWidth/2?"top-end":"top-start":horizontalHalfwayPoint>window.innerWidth/2?"bottom-end":"bottom-start":this.position}positionChanged(newVal){var _a;this.internalPosition=newVal,null===(_a=this.popperInstance)||void 0===_a||_a.destroy(),this.popperInstance=null}disconnectedCallback(){var _a;null===(_a=this.popperInstance)||void 0===_a||_a.destroy()}render(){const tooltipDismissible={"tooltip-dismissible":!0,visible:this.tooltipVisible},tooltipCompact={"tooltip-compact":!0,visible:this.tooltipVisible},tooltipExtended={"tooltip-extended":!0,visible:this.tooltipVisible},eventHandlers="compact"===this.variant.toLowerCase()||"extended"===this.variant.toLowerCase()?{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave}:{onClick:this.onClick};return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",Object.assign({class:"tooltip__container"},eventHandlers),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),"dismissible"===this.variant.toLowerCase()&&(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:tooltipDismissible},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"cross16",class:"close-button"}),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tooltip-dismissible-content"},this.header&&(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tooltip-dismissible-header"},this.header),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tooltip-dismissible-body"},this.text)),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"compact"===this.variant.toLowerCase()&&(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:tooltipCompact},this.text,(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"extended"===this.variant.toLowerCase()&&(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:tooltipExtended},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"icon"},this.icon?(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"extended_icon"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})):(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"extended_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tooltip-extended-content"},this.header&&(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tooltip-extended-header"},this.header),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tooltip-extended-body"},this.text)),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}get el(){return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{position:["positionChanged"]}}};Tooltip.style='*{font-family:"Source Sans 3"}.tooltip__container{display:inline-flex;flex-direction:column;position:relative}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1;display:none;transition:opacity 0.3s;position:relative;font-family:Source Sans 3;font-size:13px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:center;min-width:100px}.tooltip-dismissible{width:310px}.tooltip-dismissible .close-button{position:absolute;top:12px;right:12px;cursor:pointer}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-family:"Source Sans 3";font-size:13px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{width:310px;padding-left:12px}.tooltip-extended .extended_icon{position:static;width:24px;height:24px;top:12px;left:12px;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-family:"Source Sans 3";font-size:13px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-8px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-8px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-8px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-4px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-4px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}'}}]);