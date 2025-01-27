"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[679],{"./dist/esm/ifx-tooltip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_tooltip:()=>Tooltip});var _index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f6e95f3d.js"),_popper_1604923e_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/popper-1604923e.js");const Tooltip=class{constructor(hostRef){(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.internalPosition="auto",this.variant="compact",this.popperInstance=null,this.onMouseEnter=()=>{var _a,_b;null===(_a=this.popperInstance)||void 0===_a||_a.setOptions((options=>Object.assign(Object.assign({},options),{modifiers:[...options.modifiers,{name:"eventListeners",enabled:!0}]}))),this.initializePopper(),this.tooltipVisible=!0,this.tooltipEl.style.display="block",null===(_b=this.popperInstance)||void 0===_b||_b.update()},this.onMouseLeave=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.onClick=()=>{var _a;"dismissible"===this.variant.toLowerCase()&&(this.initializePopper(),this.tooltipVisible=!this.tooltipVisible,this.tooltipEl.style.display=this.tooltipVisible?"block":"none",null===(_a=this.popperInstance)||void 0===_a||_a.update())},this.onDismissClick=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"}}componentWillLoad(){""===this.variant.toLowerCase().trim()&&(this.variant="compact")}componentDidLoad(){const slotElement=this.el.shadowRoot.querySelector(".tooltip__container").firstChild;"compact"===this.variant.toLowerCase()||"extended"===this.variant.toLowerCase()?(slotElement.addEventListener("mouseenter",this.onMouseEnter),slotElement.addEventListener("mouseleave",this.onMouseLeave)):slotElement.addEventListener("click",this.onClick)}initializePopper(){if(this.popperInstance)return;this.referenceEl=this.el,"compact"===this.variant.toLowerCase()?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-compact"):"dismissible"===this.variant.toLowerCase()?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-dismissible"):this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-extended");const effectivePosition="auto"===this.position?this.determineBestPosition():this.position;this.internalPosition=effectivePosition,this.tooltipEl&&this.referenceEl&&(this.popperInstance=(0,_popper_1604923e_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.referenceEl,this.tooltipEl,{placement:this.internalPosition,modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:".tooltip-arrow-svg"}}]})),this.tooltipEl.setAttribute("data-placement",effectivePosition)}determineBestPosition(){const rect=this.referenceEl.getBoundingClientRect(),yOffset=window.scrollY,xOffset=window.scrollX,verticalHalfwayPoint=rect.top+yOffset+rect.height/2,horizontalHalfwayPoint=rect.left+xOffset+rect.width/2;return"auto"===this.position?verticalHalfwayPoint>window.innerHeight/2?horizontalHalfwayPoint>window.innerWidth/2?"top-end":"top-start":horizontalHalfwayPoint>window.innerWidth/2?"bottom-end":"bottom-start":this.position}positionChanged(newVal){var _a;this.internalPosition=newVal,null===(_a=this.popperInstance)||void 0===_a||_a.destroy(),this.popperInstance=null}disconnectedCallback(){var _a;null===(_a=this.popperInstance)||void 0===_a||_a.destroy()}render(){const tooltipDismissible={"tooltip-dismissible":!0,visible:this.tooltipVisible},tooltipCompact={"tooltip-compact":!0,visible:this.tooltipVisible},tooltipExtended={"tooltip-extended":!0,visible:this.tooltipVisible};return(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"246f0b291e39bbe49ebea1eed9827400f22bb680","aria-label":"a tooltip showing important information","aria-value":this.header,class:"tooltip__container"},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"a16771de825d12d46661be2ecb61ce8326e25794"}),"dismissible"===this.variant.toLowerCase()&&(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"974e0fdbf389fcce6cc34eccb897b188f0413eea",class:tooltipDismissible},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"a777e5a63134c07f4330d790044a7aafdb63a83c","aria-label":"Close Tooltip",class:"close-button",onClick:this.onDismissClick},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"69cc351f97d892f98cf8bc3df48d2877129e4238",icon:"cross16"})),(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"5db6f0ceff12be22d6de58767bab509b67dd9ff8",class:"tooltip-dismissible-content"},this.header&&(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"22fd94a588780e413dc04dcc126380b5b382fde6",class:"tooltip-dismissible-header"},this.header),(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"abd4158d18a1c57dda508caddcdb1be945a8efd2",class:"tooltip-dismissible-body"},this.text)),(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"1bcd11086f4922c03532c99b2dd1618b862af68b",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"5dfac1fa79d7204b1f0770ed243cdbadfc14fdd9",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"compact"===this.variant.toLowerCase()&&(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a52aec447163df16d86d14f96d74501c45266e2a",class:tooltipCompact},this.text,(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"c28c49ee4446d73b366bb68280ddf5b9192cc79a",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"2de515ea4344c728a1da4b368c93c7ade11badcb",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"extended"===this.variant.toLowerCase()&&(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9e3186e4856770c831d0422bce64b131c64f55f0",class:tooltipExtended},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"089640249dbfcf8eed4525615d6e289955304e09",name:"icon"},this.icon?(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"extended_icon"},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})):(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"extended_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"eab4f9af96d154a289bec83673db47d3580c267d",class:"tooltip-extended-content"},this.header&&(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"810497a167351bef22a9e61050264032be295455",class:"tooltip-extended-header"},this.header),(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"802dbe5e093b9d69b9155e188d35a421b2ca0c2e",class:"tooltip-extended-body"},this.text)),(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"ff19a79905e5ea4af628364a254e03e022a08a3d",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"557540e1fd91ad15580011ddf37a4cd25a8a6ae3",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}get el(){return(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{position:["positionChanged"]}}};Tooltip.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.tooltip__container{display:inline-flex;flex-direction:column;position:relative;font-family:var(--ifx-font-family)}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1080;display:none;transition:opacity 0.3s;position:absolute;font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF;width:max-content;box-sizing:border-box;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:start}.tooltip-dismissible .close-button{all:unset;cursor:pointer;position:relative;order:2;margin-top:12px;margin-right:12px;line-height:0px}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{align-items:center;padding:12px;gap:10px}.tooltip-extended .extended_icon{display:flex;align-self:flex-start;align-items:center;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-7px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-3px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-3px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}.tooltip-compact{min-width:28px !important;max-width:145px !important}.tooltip-dismissible{min-width:145px !important;max-width:310px !important}.tooltip-extended{min-width:145px !important;max-width:310px !important}'}}]);