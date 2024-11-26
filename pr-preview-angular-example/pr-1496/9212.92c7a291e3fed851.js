"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[9212],{9212:(h,l,s)=>{s.r(l),s.d(l,{ifx_tooltip:()=>c});var t=s(221),d=s(124);const c=(()=>{let n=class{constructor(e){(0,t.r)(this,e),this.popperInstance=null,this.onMouseEnter=()=>{var o,i;null===(o=this.popperInstance)||void 0===o||o.setOptions(a=>Object.assign(Object.assign({},a),{modifiers:[...a.modifiers,{name:"eventListeners",enabled:!0}]})),this.initializePopper(),this.tooltipVisible=!0,this.tooltipEl.style.display="block",null===(i=this.popperInstance)||void 0===i||i.update()},this.onMouseLeave=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.onClick=()=>{var o;"dismissible"===this.variant.toLowerCase()&&(this.initializePopper(),this.tooltipVisible=!this.tooltipVisible,this.tooltipEl.style.display=this.tooltipVisible?"block":"none",null===(o=this.popperInstance)||void 0===o||o.update())},this.onDismissClick=()=>{this.tooltipVisible=!1,this.tooltipEl.style.display="none"},this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.internalPosition="auto",this.variant="compact",this.icon=void 0}componentWillLoad(){""===this.variant.toLowerCase().trim()&&(this.variant="compact")}componentDidLoad(){const e=this.el.shadowRoot.querySelector(".tooltip__container").firstChild;"compact"===this.variant.toLowerCase()||"extended"===this.variant.toLowerCase()?(e.addEventListener("mouseenter",this.onMouseEnter),e.addEventListener("mouseleave",this.onMouseLeave)):e.addEventListener("click",this.onClick)}initializePopper(){if(this.popperInstance)return;this.referenceEl=this.el,this.tooltipEl="compact"===this.variant.toLowerCase()?this.el.shadowRoot.querySelector(".tooltip-compact"):"dismissible"===this.variant.toLowerCase()?this.el.shadowRoot.querySelector(".tooltip-dismissible"):this.el.shadowRoot.querySelector(".tooltip-extended");const e="auto"===this.position?this.determineBestPosition():this.position;this.internalPosition=e,this.tooltipEl&&this.referenceEl&&(this.popperInstance=(0,d.c)(this.referenceEl,this.tooltipEl,{placement:this.internalPosition,modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:".tooltip-arrow-svg"}}]})),this.tooltipEl.setAttribute("data-placement",e)}determineBestPosition(){const e=this.referenceEl.getBoundingClientRect(),o=window.scrollY,i=window.scrollX,p=e.left+i+e.width/2;return"auto"===this.position?e.top+o+e.height/2>window.innerHeight/2?p>window.innerWidth/2?"top-end":"top-start":p>window.innerWidth/2?"bottom-end":"bottom-start":this.position}positionChanged(e){var o;this.internalPosition=e,null===(o=this.popperInstance)||void 0===o||o.destroy(),this.popperInstance=null}disconnectedCallback(){var e;null===(e=this.popperInstance)||void 0===e||e.destroy()}render(){const e={"tooltip-dismissible":!0,visible:this.tooltipVisible},o={"tooltip-compact":!0,visible:this.tooltipVisible},i={"tooltip-extended":!0,visible:this.tooltipVisible};return(0,t.h)("div",{key:"7104edb0026c864844351c3b4de753e7c0d6a821","aria-label":"a tooltip showing important information","aria-value":this.header,class:"tooltip__container"},(0,t.h)("slot",{key:"71b08af57274bfeeb370ce7cccd809adf8f8c4c8"}),"dismissible"===this.variant.toLowerCase()&&(0,t.h)("div",{key:"d66b88d5547dbb1f5535af3e51a50ba7b95984e3",class:e},(0,t.h)("button",{key:"a5ef1c3c5d24a50a8a4dcb2b73b4aa493834b380","aria-label":"Close Tooltip",class:"close-button",onClick:this.onDismissClick},(0,t.h)("ifx-icon",{key:"4186a19fe3798b15c5da3b60130a6e22595550f6",icon:"cross16"})),(0,t.h)("div",{key:"f12bce90851f886286e3cb45e81b5d42b5c7987e",class:"tooltip-dismissible-content"},this.header&&(0,t.h)("div",{key:"eec738de2d2af2a3c7e5afb9ed506363f72f2fe1",class:"tooltip-dismissible-header"},this.header),(0,t.h)("div",{key:"26125b052bd883326bfd54edec1ca6ef6aa4b8a2",class:"tooltip-dismissible-body"},this.text)),(0,t.h)("svg",{key:"253de4c763a21cddeb2201901e81181f3fd8b9be",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("path",{key:"39b9175ff886fb52d56829709d23619e1af5ae4f",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"compact"===this.variant.toLowerCase()&&(0,t.h)("div",{key:"fe85dbe4b65f3ebb80eb5657dd4ca720b7e6db10",class:o},this.text,(0,t.h)("svg",{key:"6a06edd77cab031575aac8763ef9fd43597b214b",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("path",{key:"47fe3b00aa7f7497d7be8ae330ea6ca86703e669",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),"extended"===this.variant.toLowerCase()&&(0,t.h)("div",{key:"20a2524a67036ec86b4f309bcd39320b807e83cd",class:i},(0,t.h)("slot",{key:"b03fddb57c67ac977b51de56c26dfc1613266843",name:"icon"},this.icon?(0,t.h)("div",{class:"extended_icon"},(0,t.h)("ifx-icon",{icon:this.icon})):(0,t.h)("svg",{class:"extended_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,t.h)("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),(0,t.h)("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),(0,t.h)("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),(0,t.h)("div",{key:"e9f9a26c298a859bdb9b39ae0457347e22045e75",class:"tooltip-extended-content"},this.header&&(0,t.h)("div",{key:"918ec42e036c3d6fe007ca0b8fb883109036be59",class:"tooltip-extended-header"},this.header),(0,t.h)("div",{key:"014242ff6dca53f288051828241dd593ea7a7c53",class:"tooltip-extended-body"},this.text)),(0,t.h)("svg",{key:"965cd575bf4c7d5099b02d49554d70241aae8bb1",class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("path",{key:"d740930edf5d412a0e8c6f0f7895419e5e9ecb8a",id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}get el(){return(0,t.g)(this)}static get watchers(){return{position:["positionChanged"]}}};return n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.tooltip__container{display:inline-flex;flex-direction:column;position:relative;font-family:var(--ifx-font-family)}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1080;display:none;transition:opacity 0.3s;position:absolute;font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF;width:max-content;box-sizing:border-box;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:start}.tooltip-dismissible .close-button{all:unset;cursor:pointer;position:relative;order:2;margin-top:12px;margin-right:12px;line-height:0px}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{align-items:center;padding:12px;gap:10px}.tooltip-extended .extended_icon{display:flex;align-self:flex-start;align-items:center;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-size:14px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-7px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-7px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-7px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-3px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-3px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}.tooltip-compact{min-width:28px !important;max-width:145px !important}.tooltip-dismissible{min-width:145px !important;max-width:310px !important}.tooltip-extended{min-width:145px !important;max-width:310px !important}',n})()}}]);