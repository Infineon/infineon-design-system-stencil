"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1456],{"./dist/esm/ifx-tooltip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_tooltip:()=>Tooltip});var _index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-af7e05b2.js"),_popper_1604923e_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/popper-1604923e.js");const Tooltip=class{constructor(hostRef){(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.internalPosition="auto",this.variant="compact",this.popperInstance=null,this.onMouseEnter=()=>{var _a,_b;null===(_a=this.popperInstance)||void 0===_a||_a.setOptions((options=>Object.assign(Object.assign({},options),{modifiers:[...options.modifiers,{name:"eventListeners",enabled:!0}]}))),this.initializePopper(),this.tooltipVisible=!0,this.tooltipEl.style.display="block",null===(_b=this.popperInstance)||void 0===_b||_b.update()},this.onMouseLeave=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.onClick=()=>{var _a;"dismissible"===this.variant.toLowerCase()&&(this.initializePopper(),this.tooltipVisible=!this.tooltipVisible,this.tooltipEl.style.display=this.tooltipVisible?"block":"none",null===(_a=this.popperInstance)||void 0===_a||_a.update())},this.onDismissClick=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"}}componentWillLoad(){""===this.variant.toLowerCase().trim()&&(this.variant="compact")}componentDidLoad(){const slotElement=this.el.shadowRoot.querySelector(".tooltip__container").firstChild;"compact"===this.variant.toLowerCase()||"extended"===this.variant.toLowerCase()?(slotElement.addEventListener("mouseenter",this.onMouseEnter),slotElement.addEventListener("mouseleave",this.onMouseLeave)):slotElement.addEventListener("click",this.onClick)}initializePopper(){if(this.popperInstance)return;this.referenceEl=this.el,"compact"===this.variant.toLowerCase()?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-compact"):"dismissible"===this.variant.toLowerCase()?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-dismissible"):this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-extended");const effectivePosition="auto"===this.position?this.determineBestPosition():this.position;this.internalPosition=effectivePosition,this.tooltipEl&&this.referenceEl&&(this.popperInstance=(0,_popper_1604923e_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.referenceEl,this.tooltipEl,{placement:this.internalPosition,modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:".tooltip-arrow-svg"}}]})),this.tooltipEl.setAttribute("data-placement",effectivePosition)}determineBestPosition(){const rect=this.referenceEl.getBoundingClientRect(),yOffset=window.scrollY,xOffset=window.scrollX,verticalHalfwayPoint=rect.top+yOffset+rect.height/2,horizontalHalfwayPoint=rect.left+xOffset+rect.width/2;return"auto"===this.position?verticalHalfwayPoint>window.innerHeight/2?horizontalHalfwayPoint>window.innerWidth/2?"top-end":"top-start":horizontalHalfwayPoint>window.innerWidth/2?"bottom-end":"bottom-start":this.position}positionChanged(newVal){var _a;this.internalPosition=newVal,null===(_a=this.popperInstance)||void 0===_a||_a.destroy(),this.popperInstance=null}disconnectedCallback(){var _a;null===(_a=this.popperInstance)||void 0===_a||_a.destroy()}render(){const tooltipDismissible={"tooltip-dismissible":!0,visible:this.tooltipVisible},tooltipCompact={"tooltip-compact":!0,visible:this.tooltipVisible},tooltipExtended={"tooltip-extended":!0,visible:this.tooltipVisible};return(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"795261177635c90ede6d1995541ce8268f2e5262","aria-label":"a tooltip showing important information","aria-value":this.header,class:"tooltip__container"},(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"29726682709195c97888e62b36d43f6244d22a2c"}),"dismissible"===this.variant.toLowerCase()&&(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"54c229be4a0171c4b9e186f7628fce4ab3aeb5b9",class:tooltipDismissible},(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"374d309c74630b3f3e9f80294c0f363562ce65a9","aria-label":"Close Tooltip",class:"close-button",onClick:this.onDismissClick},(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"02efd77155cc94b6ecb367fcb375cbf600e234b0",icon:"cross16"})),(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3b96437efad72d370939ed08d70b84d404380874",class:"tooltip-dismissible-content"},this.header&&(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fe62bcecd51d532b08568099bf96946b4eb9f611",class:"tooltip-dismissible-header"},this.header),(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"36579a2f1d9dd9c7c90c3dca8315e29dc5211437",class:"tooltip-dismissible-body"},this.text)),(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"0044d3c563e9626f499b1907952e1815f27ca703",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"d21890a5123322e1a7624490911b2a1004d64b8f",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"compact"===this.variant.toLowerCase()&&(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"efee60a0cfe549c815acdd34cbfd06f181531c1c",class:tooltipCompact},this.text,(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"0d992bbf5a4afc6f81769a00b8fcfff07eea54e1",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"f029785003cf5b9ab72c9c97fa9288d27e6b1ac6",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"extended"===this.variant.toLowerCase()&&(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"095a979593f3ea948f92a191b316955d65e79871",class:tooltipExtended},(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"8cd096bf58bf84f36eade7821029847553e52ab5",name:"icon"},this.icon?(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"extended_icon"},(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})):(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"extended_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6839331b2b82599e8fffef8e1faab2c071f7eb3d",class:"tooltip-extended-content"},this.header&&(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ab6e181488ed0f2b382b867d789a0a8824d306f1",class:"tooltip-extended-header"},this.header),(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"74c3fcb2d270f4d20d383434990667aa09f35894",class:"tooltip-extended-body"},this.text)),(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"94616a0710484992a1289501d3d744ce6dc89020",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"a261fb73ff98c22d389575ec8dd991aebbaaba90",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}get el(){return(0,_index_af7e05b2_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{position:["positionChanged"]}}};Tooltip.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.tooltip__container{display:inline-flex;flex-direction:column;position:relative;font-family:var(--ifx-font-family)}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1080;display:none;transition:opacity 0.3s;position:absolute;font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF;width:max-content;box-sizing:border-box;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:start}.tooltip-dismissible .close-button{all:unset;cursor:pointer;position:relative;order:2;margin-top:12px;margin-right:12px;line-height:0px}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{align-items:center;padding:12px;gap:10px}.tooltip-extended .extended_icon{display:flex;align-self:flex-start;align-items:center;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-7px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-3px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-3px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}.tooltip-compact{min-width:28px !important;max-width:145px !important}.tooltip-dismissible{min-width:145px !important;max-width:310px !important}.tooltip-extended{min-width:145px !important;max-width:310px !important}'}}]);