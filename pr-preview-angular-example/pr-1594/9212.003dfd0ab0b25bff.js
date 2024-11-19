"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[9212],{9212:(h,l,s)=>{s.r(l),s.d(l,{ifx_tooltip:()=>c});var t=s(581),d=s(124);const c=(()=>{let n=class{constructor(o){(0,t.r)(this,o),this.popperInstance=null,this.onMouseEnter=()=>{var e,i;null===(e=this.popperInstance)||void 0===e||e.setOptions(a=>Object.assign(Object.assign({},a),{modifiers:[...a.modifiers,{name:"eventListeners",enabled:!0}]})),this.initializePopper(),this.tooltipVisible=!0,this.tooltipEl.style.display="block",null===(i=this.popperInstance)||void 0===i||i.update()},this.onMouseLeave=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.onClick=()=>{var e;"dismissible"===this.variant.toLowerCase()&&(this.initializePopper(),this.tooltipVisible=!this.tooltipVisible,this.tooltipEl.style.display=this.tooltipVisible?"block":"none",null===(e=this.popperInstance)||void 0===e||e.update())},this.onDismissClick=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.internalPosition="auto",this.variant="compact",this.icon=void 0}componentWillLoad(){""===this.variant.toLowerCase().trim()&&(this.variant="compact")}componentDidLoad(){const o=this.el.shadowRoot.querySelector(".tooltip__container").firstChild;"compact"===this.variant.toLowerCase()||"extended"===this.variant.toLowerCase()?(o.addEventListener("mouseenter",this.onMouseEnter),o.addEventListener("mouseleave",this.onMouseLeave)):o.addEventListener("click",this.onClick)}initializePopper(){if(this.popperInstance)return;this.referenceEl=this.el,this.tooltipEl="compact"===this.variant.toLowerCase()?this.el.shadowRoot.querySelector(".tooltip-compact"):"dismissible"===this.variant.toLowerCase()?this.el.shadowRoot.querySelector(".tooltip-dismissible"):this.el.shadowRoot.querySelector(".tooltip-extended");const o="auto"===this.position?this.determineBestPosition():this.position;this.internalPosition=o,this.tooltipEl&&this.referenceEl&&(this.popperInstance=(0,d.c)(this.referenceEl,this.tooltipEl,{placement:this.internalPosition,modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:".tooltip-arrow-svg"}}]})),this.tooltipEl.setAttribute("data-placement",o)}determineBestPosition(){const o=this.referenceEl.getBoundingClientRect(),e=window.scrollY,i=window.scrollX,p=o.left+i+o.width/2;return"auto"===this.position?o.top+e+o.height/2>window.innerHeight/2?p>window.innerWidth/2?"top-end":"top-start":p>window.innerWidth/2?"bottom-end":"bottom-start":this.position}positionChanged(o){var e;this.internalPosition=o,null===(e=this.popperInstance)||void 0===e||e.destroy(),this.popperInstance=null}disconnectedCallback(){var o;null===(o=this.popperInstance)||void 0===o||o.destroy()}render(){const o={"tooltip-dismissible":!0,visible:this.tooltipVisible},e={"tooltip-compact":!0,visible:this.tooltipVisible},i={"tooltip-extended":!0,visible:this.tooltipVisible};return(0,t.h)("div",{key:"2f35138e87796c57dff7cf5eb92001781a714edc","aria-label":"a tooltip showing important information","aria-value":this.header,class:"tooltip__container"},(0,t.h)("slot",{key:"7739a2f8c71f851d1e58c0e77518107677cd2e85"}),"dismissible"===this.variant.toLowerCase()&&(0,t.h)("div",{key:"f4c340136b918db9873ca8dfe3d8cbbbc126c3ce",class:o},(0,t.h)("button",{key:"ff455893ab4ccfce6382fbd304b3feb22972dffc","aria-label":"Close Tooltip",class:"close-button",onClick:this.onDismissClick},(0,t.h)("ifx-icon",{key:"52cb44e3d84fdd10fb238ff8ba567feab8f9d0c1",icon:"cross16"})),(0,t.h)("div",{key:"ded62ccc8896056a6b0780474b649b7830009103",class:"tooltip-dismissible-content"},this.header&&(0,t.h)("div",{key:"c8c60396c154768cd9ab9b23eaf036dd5b639ee3",class:"tooltip-dismissible-header"},this.header),(0,t.h)("div",{key:"27ca68485ffb44194f4f1e74651fd28e2a45162d",class:"tooltip-dismissible-body"},this.text)),(0,t.h)("svg",{key:"d871c1cf15d1511978a9c83ef11c5ab5854f0921",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("path",{key:"ba9d2b4b3b4434eaed8faa6db2e641b6a30f0aa3",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"compact"===this.variant.toLowerCase()&&(0,t.h)("div",{key:"5235880e4a3543e53708839bfe7577880c93e5c6",class:e},this.text,(0,t.h)("svg",{key:"89c655f203ba0b43a29d30b84d4cbbce5437e361",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("path",{key:"0463ad51e72f3d994faaf8d9f46dc614525715dd",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"extended"===this.variant.toLowerCase()&&(0,t.h)("div",{key:"8d8f48ea56f1ffb6c164e2ae93777ac14749d825",class:i},(0,t.h)("slot",{key:"8565dbb82773678e702fae9b74de36e81be53b70",name:"icon"},this.icon?(0,t.h)("div",{class:"extended_icon"},(0,t.h)("ifx-icon",{icon:this.icon})):(0,t.h)("svg",{class:"extended_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,t.h)("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),(0,t.h)("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),(0,t.h)("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),(0,t.h)("div",{key:"4a1c19770dcf69aa9888c281f85e587812844e8e",class:"tooltip-extended-content"},this.header&&(0,t.h)("div",{key:"e077cd93e962cc66722e927bb3bded9f8fabbd43",class:"tooltip-extended-header"},this.header),(0,t.h)("div",{key:"d4564db6662ce4da5bd976232cc6e46d379ab843",class:"tooltip-extended-body"},this.text)),(0,t.h)("svg",{key:"5c9233e4d1c39fb4fe7522f7388d9018addbe7ca",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("path",{key:"5e20178a7ef43d349f10d29d4fd4a1dc31166e21",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}get el(){return(0,t.g)(this)}static get watchers(){return{position:["positionChanged"]}}};return n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.tooltip__container{display:inline-flex;flex-direction:column;position:relative;font-family:var(--ifx-font-family)}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1080;display:none;transition:opacity 0.3s;position:absolute;font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF;width:max-content;box-sizing:border-box;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:start}.tooltip-dismissible .close-button{all:unset;cursor:pointer;position:relative;order:2;margin-top:12px;margin-right:12px;line-height:0px}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{align-items:center;padding:12px;gap:10px}.tooltip-extended .extended_icon{display:flex;align-self:flex-start;align-items:center;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-7px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-3px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-3px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}.tooltip-compact{min-width:28px !important;max-width:145px !important}.tooltip-dismissible{min-width:145px !important;max-width:310px !important}.tooltip-extended{min-width:145px !important;max-width:310px !important}',n})()}}]);