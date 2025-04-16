import{r as y,c as h,h as o,H as x,g as E}from"./index-DnthRwOL.js";function l(e,t,n,a=20,r=0){const s=[];if(r>=a)return s;const p=i=>{const f=i.assignedNodes().filter(c=>c.nodeType===1);if(f.length>0){const c=f[0].parentElement;return l(c,t,n,a,r+1)}return[]},g=Array.from(e.children||[]);for(const i of g)t(i)||(n(i)&&s.push(i),i.shadowRoot!=null?s.push(...l(i.shadowRoot,t,n,a,r+1)):i.tagName==="SLOT"?s.push(...p(i)):s.push(...l(i,t,n,a,r+1)));return s}function m(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&e.getAttribute("aria-hidden")!=="false"||e.style.display==="none"||e.style.opacity==="0"||e.style.visibility==="hidden"||e.style.visibility==="collapse"}function v(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"}function w(e){return e.getAttribute("tabindex")==="-1"||m(e)||v(e)?!1:e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement}function u(e,t,n){const a=e.animate(t,Object.assign(Object.assign({},n),{fill:"both"}));return a.addEventListener("finish",()=>{a.commitStyles(),a.cancel()}),a}const d={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},b={fadeIn:[Object.assign(Object.assign({offset:0},d),{opacity:0}),Object.assign(Object.assign({offset:1},d),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},d),{opacity:1}),Object.assign(Object.assign({offset:1},d),{opacity:0})]},k=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.modal-container{display:none;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1060;overflow-y:auto;font-family:var(--ifx-font-family)}.modal-container.open{display:flex}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;justify-content:center;width:90%;min-height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);box-sizing:border-box;align-items:stretch}@media screen and (min-width: 768px){.modal-content-container{width:540px;min-height:132px}.modal-content-container.m,.modal-content-container.l,.modal-content-container.s{width:90%}}@media screen and (min-width: 1024px){.modal-content-container.s{width:47vw}.modal-content-container.m{width:63vw}.modal-content-container.l{width:80%}}.modal-content{display:flex;flex-direction:column;width:100%;max-height:90vh}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;align-self:stretch}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;min-height:76px;max-height:105px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-caption{max-height:56px;display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-close-button{align-self:flex-start;margin-right:-8px}.modal-body{padding:16px 24px;min-height:56px;box-sizing:border-box;flex:1}.modal-footer.buttons-present ::slotted(*){display:flex;justify-content:flex-end;gap:16px;padding:16px 24px 32px 16px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}',C=k,F=class{constructor(e){y(this,e),this.ifxOpen=h(this,"ifxOpen",7),this.ifxClose=h(this,"ifxClose",7),this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.size="s",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel",this.slotButtonsPresent=!1,this.showCloseButton=!0,this.focusableElements=[],this.handleTopFocus=()=>{this.attemptFocus(this.getLastFocusableElement())},this.handleBottomFocus=()=>{this.attemptFocus(this.getFirstFocusableElement())},this.handleKeypress=t=>{this.showModal&&t.key==="Escape"&&this.doBeforeClose("ESCAPE_KEY")}}componentDidLoad(){this.focusableElements=l(this.hostElement.shadowRoot,e=>m(e)||e.matches("[data-focus-trap-edge]"),w)}getFirstFocusableElement(){return this.focusableElements[0]}getLastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}attemptFocus(e){if(e==null){setTimeout(()=>{this.closeButton.focus()});return}setTimeout(()=>{e.focus()},0)}open(){this.showModal=!0;try{u(this.modalContainer,b.fadeIn,{duration:200}).addEventListener("finish",()=>{setTimeout(()=>{var t,n;(t=this.getLastFocusableElement())===null||t===void 0||t.focus(),(n=this.getLastFocusableElement())===null||n===void 0||n.blur()},0),this.ifxOpen.emit()}),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch{this.ifxOpen.emit()}}close(){try{u(this.modalContainer,b.fadeOut,{duration:200}).addEventListener("finish",()=>{this.showModal=!1,this.ifxClose.emit()}),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch{this.showModal=!1,this.ifxClose.emit()}}doBeforeClose(e){const t=[];t.push(e),t.some(a=>a.defaultPrevented)||(this.opened=!1)}openedChanged(e){e===!0?this.open():this.close()}handleOverlayClick(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}handleButtonsSlotChange(e){var t;((t=e.currentTarget.assignedElements()[0])===null||t===void 0?void 0:t.childElementCount)>0?this.slotButtonsPresent=!0:this.slotButtonsPresent=!1}render(){const e=this.variant!=="default";return o(x,{key:"ea8cc72507298fc769e75b6c04b0efd98d2e804d"},o("div",{key:"909dfb62f78fd771ca46c3c452aa73d8f4cc58c4",ref:t=>this.modalContainer=t,class:`modal-container ${this.showModal?"open":""}`},o("div",{key:"1f380c2d3619234fa6dd6bff95fd3b5b0f714427",class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),o("div",{key:"a6f5a719151ffccdde3c95015ab331603646625e","data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),o("div",{key:"570d67838b40e1f292a783ad0c4de54d25dc15f1",class:`modal-content-container ${this.size}`,role:"dialog","aria-modal":"true","aria-label":this.caption},e?o("div",{class:`modal-icon-container ${this.variant==="alert-brand"?"":"danger"}`},this.alertIcon?o("ifx-icon",{icon:this.alertIcon}):null):null,o("div",{key:"fd0a152494722c1453a401a448124f085c2383e1",class:"modal-content"},o("div",{key:"f4fa940f7d1f7efc7d2fb8adbe77df30ae841b0a",class:"modal-header"},o("h2",{key:"d8849e0d30cde669fcd39e655ceca9c7e82fb5ed",class:"modal-caption"},this.caption),this.showCloseButton&&o("ifx-icon-button",{key:"5496cd581f68d6cb48b7a51d3c971f7e6aab306c",class:"modal-close-button",ref:t=>this.closeButton=t,icon:"cross-24",variant:"tertiary",onClick:()=>this.doBeforeClose("CLOSE_BUTTON")})),o("div",{key:"830eddd92cb12f36918feb91634c7516207edd96",class:"modal-body"},o("slot",{key:"8e99c69225725aa169b526720baa05378394163f",name:"content"})),o("div",{key:"75ad5053564128df6c02d1feeb8078c229c069a9",class:`modal-footer ${this.slotButtonsPresent?"buttons-present":""}`},o("slot",{key:"b2d42250cc895c5f45cbadad6b5c58bb58848d16",name:"buttons",onSlotchange:t=>this.handleButtonsSlotChange(t)})))),o("div",{key:"7c79425ab61abc91c9d1d10c377452e93a2f8b25","data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}get hostElement(){return E(this)}static get watchers(){return{opened:["openedChanged"]}}};F.style=C;export{F as ifx_modal};
