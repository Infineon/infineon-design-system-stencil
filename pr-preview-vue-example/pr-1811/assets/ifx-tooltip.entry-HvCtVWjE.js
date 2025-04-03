import{r as l,h as t,g as n}from"./index-D-zbKhG5.js";import{c as p}from"./popper-1604923e-CMBiYTiD.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.tooltip__container{display:inline-flex;flex-direction:column;position:relative;font-family:var(--ifx-font-family)}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1080;display:none;transition:opacity 0.3s;position:absolute;font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF;width:max-content;box-sizing:border-box;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:start}.tooltip-dismissible .close-button{all:unset;cursor:pointer;position:relative;order:2;margin-top:12px;margin-right:12px;line-height:0px}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{align-items:center;padding:12px;gap:10px}.tooltip-extended .extended_icon{display:flex;align-self:flex-start;align-items:center;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-7px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-3px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-3px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}.tooltip-compact{min-width:28px !important;max-width:145px !important}.tooltip-dismissible{min-width:145px !important;max-width:310px !important}.tooltip-extended{min-width:145px !important;max-width:310px !important}',d=r,c=class{constructor(e){l(this,e),this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.internalPosition="auto",this.variant="compact",this.popperInstance=null,this.onMouseEnter=()=>{var o,i;(o=this.popperInstance)===null||o===void 0||o.setOptions(s=>Object.assign(Object.assign({},s),{modifiers:[...s.modifiers,{name:"eventListeners",enabled:!0}]})),this.initializePopper(),this.tooltipVisible=!0,this.tooltipEl.style.display="block",(i=this.popperInstance)===null||i===void 0||i.update()},this.onMouseLeave=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.onClick=()=>{var o;this.variant.toLowerCase()==="dismissible"&&(this.initializePopper(),this.tooltipVisible=!this.tooltipVisible,this.tooltipEl.style.display=this.tooltipVisible?"block":"none",(o=this.popperInstance)===null||o===void 0||o.update())},this.onDismissClick=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"}}componentWillLoad(){this.variant.toLowerCase().trim()===""&&(this.variant="compact")}componentDidLoad(){const e=this.el.shadowRoot.querySelector(".tooltip__container").firstChild;this.variant.toLowerCase()==="compact"||this.variant.toLowerCase()==="extended"?(e.addEventListener("mouseenter",this.onMouseEnter),e.addEventListener("mouseleave",this.onMouseLeave)):e.addEventListener("click",this.onClick)}initializePopper(){if(this.popperInstance)return;this.referenceEl=this.el,this.variant.toLowerCase()==="compact"?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-compact"):this.variant.toLowerCase()==="dismissible"?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-dismissible"):this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-extended");const e=this.position==="auto"?this.determineBestPosition():this.position;this.internalPosition=e,this.tooltipEl&&this.referenceEl&&(this.popperInstance=p(this.referenceEl,this.tooltipEl,{placement:this.internalPosition,modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:".tooltip-arrow-svg"}}]})),this.tooltipEl.setAttribute("data-placement",e)}determineBestPosition(){const e=this.referenceEl.getBoundingClientRect(),o=window.scrollY,i=window.scrollX,s=e.top+o+e.height/2,a=e.left+i+e.width/2;return this.position==="auto"?s>window.innerHeight/2?a>window.innerWidth/2?"top-end":"top-start":a>window.innerWidth/2?"bottom-end":"bottom-start":this.position}positionChanged(e){var o;this.internalPosition=e,(o=this.popperInstance)===null||o===void 0||o.destroy(),this.popperInstance=null}disconnectedCallback(){var e;(e=this.popperInstance)===null||e===void 0||e.destroy()}render(){const e={"tooltip-dismissible":!0,visible:this.tooltipVisible},o={"tooltip-compact":!0,visible:this.tooltipVisible},i={"tooltip-extended":!0,visible:this.tooltipVisible};return t("div",{key:"9c87ad898f047bf3fefbfeec39faa033d39e2860","aria-label":"a tooltip showing important information","aria-value":this.header,class:"tooltip__container"},t("slot",{key:"fc4ac4d2a09ccd8c038a180aeadce7fee2ab9b90"}),this.variant.toLowerCase()==="dismissible"&&t("div",{key:"9627cd1efe01ffcae8227920b0a59848c85ee5b7",class:e},t("button",{key:"96c225756217e4f5054c8b02fe0a20b848c845f5","aria-label":"Close Tooltip",class:"close-button",onClick:this.onDismissClick},t("ifx-icon",{key:"f976619fb32729deb0be068b2c813b02bce37749",icon:"cross16"})),t("div",{key:"e4219ce93a82ecd3534c8985cd62049cd23cbaa7",class:"tooltip-dismissible-content"},this.header&&t("div",{key:"a168b26826aa857fce0f437023e5e18a956cee3d",class:"tooltip-dismissible-header"},this.header),t("div",{key:"0bdfdce23226097d1f60a3d72032bcd9d7b709fe",class:"tooltip-dismissible-body"},this.text)),t("svg",{key:"6c6efed9ed056040960a7928e93d0b6ff7f83b30",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{key:"f9de1eb1b04f276c3ca7176af1066e483a441b69",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),this.variant.toLowerCase()==="compact"&&t("div",{key:"7cbd4ea98ec29eff71021b27cfd2696c5fa6cb68",class:o},this.text,t("svg",{key:"e75535c511eea6ea685cabd01f7646452699ecff",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{key:"f3c6a9710be713cac4e3322e68700423441bc007",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),this.variant.toLowerCase()==="extended"&&t("div",{key:"f04a640ab90d6f957bff270b7b170699634f3ee9",class:i},t("slot",{key:"aaab6713c93dbf5441ed8d83b1c8111076397404",name:"icon"},this.icon?t("div",{class:"extended_icon"},t("ifx-icon",{icon:this.icon})):t("svg",{class:"extended_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},t("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),t("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),t("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),t("div",{key:"723034136727fa51330c9f34fbfb4931f8af857e",class:"tooltip-extended-content"},this.header&&t("div",{key:"8bc34fd54d3e0a7abcd2f08145556c94dbde879b",class:"tooltip-extended-header"},this.header),t("div",{key:"e607a0953671b563f49921049a69ffe71c6d962e",class:"tooltip-extended-body"},this.text)),t("svg",{key:"a1aa6e39af3ecc50a5c8ee81c3f9fa826f88a446",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{key:"9cd2e3ec0d0e5f1d3b4c58f7f85f5a3439638eae",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}get el(){return n(this)}static get watchers(){return{position:["positionChanged"]}}};c.style=d;export{c as ifx_tooltip};
