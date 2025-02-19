import{r as l,h as t,g as n}from"./index-Btc8-WoR.js";import{c as p}from"./popper-1604923e-CMBiYTiD.js";const d=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.tooltip__container{display:inline-flex;flex-direction:column;position:relative;font-family:var(--ifx-font-family)}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1080;display:none;transition:opacity 0.3s;position:absolute;font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF;width:max-content;box-sizing:border-box;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:start}.tooltip-dismissible .close-button{all:unset;cursor:pointer;position:relative;order:2;margin-top:12px;margin-right:12px;line-height:0px}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{align-items:center;padding:12px;gap:10px}.tooltip-extended .extended_icon{display:flex;align-self:flex-start;align-items:center;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-7px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-3px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-3px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}.tooltip-compact{min-width:28px !important;max-width:145px !important}.tooltip-dismissible{min-width:145px !important;max-width:310px !important}.tooltip-extended{min-width:145px !important;max-width:310px !important}',r=d,c=class{constructor(o){l(this,o),this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.internalPosition="auto",this.variant="compact",this.popperInstance=null,this.onMouseEnter=()=>{var e,i;(e=this.popperInstance)===null||e===void 0||e.setOptions(s=>Object.assign(Object.assign({},s),{modifiers:[...s.modifiers,{name:"eventListeners",enabled:!0}]})),this.initializePopper(),this.tooltipVisible=!0,this.tooltipEl.style.display="block",(i=this.popperInstance)===null||i===void 0||i.update()},this.onMouseLeave=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.onClick=()=>{var e;this.variant.toLowerCase()==="dismissible"&&(this.initializePopper(),this.tooltipVisible=!this.tooltipVisible,this.tooltipEl.style.display=this.tooltipVisible?"block":"none",(e=this.popperInstance)===null||e===void 0||e.update())},this.onDismissClick=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"}}componentWillLoad(){this.variant.toLowerCase().trim()===""&&(this.variant="compact")}componentDidLoad(){const o=this.el.shadowRoot.querySelector(".tooltip__container").firstChild;this.variant.toLowerCase()==="compact"||this.variant.toLowerCase()==="extended"?(o.addEventListener("mouseenter",this.onMouseEnter),o.addEventListener("mouseleave",this.onMouseLeave)):o.addEventListener("click",this.onClick)}initializePopper(){if(this.popperInstance)return;this.referenceEl=this.el,this.variant.toLowerCase()==="compact"?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-compact"):this.variant.toLowerCase()==="dismissible"?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-dismissible"):this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-extended");const o=this.position==="auto"?this.determineBestPosition():this.position;this.internalPosition=o,this.tooltipEl&&this.referenceEl&&(this.popperInstance=p(this.referenceEl,this.tooltipEl,{placement:this.internalPosition,modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:".tooltip-arrow-svg"}}]})),this.tooltipEl.setAttribute("data-placement",o)}determineBestPosition(){const o=this.referenceEl.getBoundingClientRect(),e=window.scrollY,i=window.scrollX,s=o.top+e+o.height/2,a=o.left+i+o.width/2;return this.position==="auto"?s>window.innerHeight/2?a>window.innerWidth/2?"top-end":"top-start":a>window.innerWidth/2?"bottom-end":"bottom-start":this.position}positionChanged(o){var e;this.internalPosition=o,(e=this.popperInstance)===null||e===void 0||e.destroy(),this.popperInstance=null}disconnectedCallback(){var o;(o=this.popperInstance)===null||o===void 0||o.destroy()}render(){const o={"tooltip-dismissible":!0,visible:this.tooltipVisible},e={"tooltip-compact":!0,visible:this.tooltipVisible},i={"tooltip-extended":!0,visible:this.tooltipVisible};return t("div",{key:"d1011613a465b3f6283965385fa58c0757d37b72","aria-label":"a tooltip showing important information","aria-value":this.header,class:"tooltip__container"},t("slot",{key:"8ecdc7cfd8ace95c5201e5aef989fd5a2d690fb6"}),this.variant.toLowerCase()==="dismissible"&&t("div",{key:"4d855121ef44f72e920dafbe165fbbb28757e2fd",class:o},t("button",{key:"0e5459e6f90c3e966303e72c261002e8aae19e31","aria-label":"Close Tooltip",class:"close-button",onClick:this.onDismissClick},t("ifx-icon",{key:"a7cee4fab2cfca1c88f8c5e5bdb55f10dbc77aa2",icon:"cross16"})),t("div",{key:"8d3c651b0fd3c9d74ce22edfe3dc7b21f065da54",class:"tooltip-dismissible-content"},this.header&&t("div",{key:"835731e8d02674197ed4e0ff479b0493fc4a89b4",class:"tooltip-dismissible-header"},this.header),t("div",{key:"ad5d1d9d66a05af968aadce2c85e0f51a54d19fc",class:"tooltip-dismissible-body"},this.text)),t("svg",{key:"ddd6f30d4e4e70e7eb00aaa8af172d00bd5a2000",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{key:"9afaa9623221b73dbfc84197763ccf74a3f55044",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),this.variant.toLowerCase()==="compact"&&t("div",{key:"dce5e22d5cb05d2333cf5846f2c16f51a463423d",class:e},this.text,t("svg",{key:"d6cd8374b050b4c907aa9ab83fcf9e6b64468f3b",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{key:"c3ae17c174a63d918614154ce424cb27a130fa7f",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),this.variant.toLowerCase()==="extended"&&t("div",{key:"4c6b1a492d7950cb3441babbe74e2111bdbccb61",class:i},t("slot",{key:"463bb3a005dba221542b3ba7ccd8c2a2e0ce8cd4",name:"icon"},this.icon?t("div",{class:"extended_icon"},t("ifx-icon",{icon:this.icon})):t("svg",{class:"extended_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},t("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),t("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),t("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),t("div",{key:"8b513f1bb9d4a661570f00d8419a054827c81e2d",class:"tooltip-extended-content"},this.header&&t("div",{key:"13df155ca7f7182c5a4975f54e20bdee6845cc67",class:"tooltip-extended-header"},this.header),t("div",{key:"20ff208b9337416c20561e9aff96b1ab54e69d9b",class:"tooltip-extended-body"},this.text)),t("svg",{key:"ba54cfd306135108839d9d8406fc7a2bde0f36ef",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{key:"be0b68a7e3ccc70a0ab110bd2b847394c458bc23",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}get el(){return n(this)}static get watchers(){return{position:["positionChanged"]}}};c.style=r;export{c as ifx_tooltip};
