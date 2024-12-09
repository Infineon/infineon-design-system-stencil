import{r as l,h as t,g as n}from"./index-Cx9-Dgu5.js";import{c as p}from"./popper-1604923e-BQBsAJpH.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.tooltip__container{display:inline-flex;flex-direction:column;position:relative;font-family:var(--ifx-font-family)}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1080;display:none;transition:opacity 0.3s;position:absolute;font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF;width:max-content;box-sizing:border-box;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:start}.tooltip-dismissible .close-button{all:unset;cursor:pointer;position:relative;order:2;margin-top:12px;margin-right:12px;line-height:0px}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{align-items:center;padding:12px;gap:10px}.tooltip-extended .extended_icon{display:flex;align-self:flex-start;align-items:center;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-7px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-3px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-3px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}.tooltip-compact{min-width:28px !important;max-width:145px !important}.tooltip-dismissible{min-width:145px !important;max-width:310px !important}.tooltip-extended{min-width:145px !important;max-width:310px !important}',d=r,c=class{constructor(e){l(this,e),this.popperInstance=null,this.onMouseEnter=()=>{var o,i;(o=this.popperInstance)===null||o===void 0||o.setOptions(s=>Object.assign(Object.assign({},s),{modifiers:[...s.modifiers,{name:"eventListeners",enabled:!0}]})),this.initializePopper(),this.tooltipVisible=!0,this.tooltipEl.style.display="block",(i=this.popperInstance)===null||i===void 0||i.update()},this.onMouseLeave=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.onClick=()=>{var o;this.variant.toLowerCase()==="dismissible"&&(this.initializePopper(),this.tooltipVisible=!this.tooltipVisible,this.tooltipEl.style.display=this.tooltipVisible?"block":"none",(o=this.popperInstance)===null||o===void 0||o.update())},this.onDismissClick=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.internalPosition="auto",this.variant="compact",this.icon=void 0}componentWillLoad(){this.variant.toLowerCase().trim()===""&&(this.variant="compact")}componentDidLoad(){const e=this.el.shadowRoot.querySelector(".tooltip__container").firstChild;this.variant.toLowerCase()==="compact"||this.variant.toLowerCase()==="extended"?(e.addEventListener("mouseenter",this.onMouseEnter),e.addEventListener("mouseleave",this.onMouseLeave)):e.addEventListener("click",this.onClick)}initializePopper(){if(this.popperInstance)return;this.referenceEl=this.el,this.variant.toLowerCase()==="compact"?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-compact"):this.variant.toLowerCase()==="dismissible"?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-dismissible"):this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-extended");const e=this.position==="auto"?this.determineBestPosition():this.position;this.internalPosition=e,this.tooltipEl&&this.referenceEl&&(this.popperInstance=p(this.referenceEl,this.tooltipEl,{placement:this.internalPosition,modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:".tooltip-arrow-svg"}}]})),this.tooltipEl.setAttribute("data-placement",e)}determineBestPosition(){const e=this.referenceEl.getBoundingClientRect(),o=window.scrollY,i=window.scrollX,s=e.top+o+e.height/2,a=e.left+i+e.width/2;return this.position==="auto"?s>window.innerHeight/2?a>window.innerWidth/2?"top-end":"top-start":a>window.innerWidth/2?"bottom-end":"bottom-start":this.position}positionChanged(e){var o;this.internalPosition=e,(o=this.popperInstance)===null||o===void 0||o.destroy(),this.popperInstance=null}disconnectedCallback(){var e;(e=this.popperInstance)===null||e===void 0||e.destroy()}render(){const e={"tooltip-dismissible":!0,visible:this.tooltipVisible},o={"tooltip-compact":!0,visible:this.tooltipVisible},i={"tooltip-extended":!0,visible:this.tooltipVisible};return t("div",{key:"bef3eea14c8dde6e5320575791fb3af389260697","aria-label":"a tooltip showing important information","aria-value":this.header,class:"tooltip__container"},t("slot",{key:"b6a0e680a8a6c2d302930b086c4488bf6f7ac169"}),this.variant.toLowerCase()==="dismissible"&&t("div",{key:"67be6e1c5ec6a7f277b441648986d2ec07a6a651",class:e},t("button",{key:"053fbb51ae10f7ef007da38a5fc2c4df2a2d3846","aria-label":"Close Tooltip",class:"close-button",onClick:this.onDismissClick},t("ifx-icon",{key:"8b78386336b48c89c9ca8afe972c215c2c064903",icon:"cross16"})),t("div",{key:"48db9d8098af06bb9e310a4fb23a952442d0ec6f",class:"tooltip-dismissible-content"},this.header&&t("div",{key:"b6687c8155ef62a414090d52478e8da155778358",class:"tooltip-dismissible-header"},this.header),t("div",{key:"6f927579b33f3fd4ce6f5d4e493b9b037ff04678",class:"tooltip-dismissible-body"},this.text)),t("svg",{key:"467f192720b5396add3971ccbee8a1bc5c1cc0e6",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{key:"7d62ff6780d4c4daaffdf5dcd53433dc20f1c064",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),this.variant.toLowerCase()==="compact"&&t("div",{key:"d3f8293e8ed481dc295d0c9f5dc98c218d999e3b",class:o},this.text,t("svg",{key:"6276062b4337289d751911b6a71530e564b99bc0",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{key:"8fde6da76e2d4ca34743cb1274b4d7954434fd26",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),this.variant.toLowerCase()==="extended"&&t("div",{key:"c5318be31b725bb4f5d5bcd35d8503668032dffa",class:i},t("slot",{key:"7f092e8f400880cc2186320a45f4d58d7b7c96a3",name:"icon"},this.icon?t("div",{class:"extended_icon"},t("ifx-icon",{icon:this.icon})):t("svg",{class:"extended_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},t("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),t("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),t("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),t("div",{key:"016ca1ce8701db753e8716344ccfb1fed728ed89",class:"tooltip-extended-content"},this.header&&t("div",{key:"30f8a71e360924c8c65bc6197397ae05c4b729c2",class:"tooltip-extended-header"},this.header),t("div",{key:"4694d5e98f009c678ca1e1b8df7449af4c59b7bf",class:"tooltip-extended-body"},this.text)),t("svg",{key:"f82ef84945cd3185d034e58e7e9e88e6e468a02d",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{key:"ef2e943957ab5d5a5a1ed0e5443bb2b82feb0a1b",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}get el(){return n(this)}static get watchers(){return{position:["positionChanged"]}}};c.style=d;export{c as ifx_tooltip};
