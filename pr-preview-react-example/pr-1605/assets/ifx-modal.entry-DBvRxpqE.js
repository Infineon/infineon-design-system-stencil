import{r as y,c as h,h as o,H as x,g as v}from"./index-Bv40tCEP.js";function l(e,t,n,a=20,r=0){const s=[];if(r>=a)return s;const p=i=>{const f=i.assignedNodes().filter(c=>c.nodeType===1);if(f.length>0){const c=f[0].parentElement;return l(c,t,n,a,r+1)}return[]},g=Array.from(e.children||[]);for(const i of g)t(i)||(n(i)&&s.push(i),i.shadowRoot!=null?s.push(...l(i.shadowRoot,t,n,a,r+1)):i.tagName==="SLOT"?s.push(...p(i)):s.push(...l(i,t,n,a,r+1)));return s}function m(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&e.getAttribute("aria-hidden")!=="false"||e.style.display==="none"||e.style.opacity==="0"||e.style.visibility==="hidden"||e.style.visibility==="collapse"}function E(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"}function w(e){return e.getAttribute("tabindex")==="-1"||m(e)||E(e)?!1:e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement}function b(e,t,n){const a=e.animate(t,Object.assign(Object.assign({},n),{fill:"both"}));return a.addEventListener("finish",()=>{a.commitStyles(),a.cancel()}),a}const d={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},u={fadeIn:[Object.assign(Object.assign({offset:0},d),{opacity:0}),Object.assign(Object.assign({offset:1},d),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},d),{opacity:1}),Object.assign(Object.assign({offset:1},d),{opacity:0})]},k=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.modal-container{display:none;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1060;overflow-y:auto;font-family:var(--ifx-font-family)}.modal-container.open{display:flex}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;justify-content:center;width:90%;min-height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;align-items:stretch}@media screen and (min-width: 768px){.modal-content-container{width:540px;min-height:132px}.modal-content-container.m,.modal-content-container.l,.modal-content-container.s{width:90%}}@media screen and (min-width: 1024px){.modal-content-container.s{width:47vw}.modal-content-container.m{width:63vw}.modal-content-container.l{width:80%}}.modal-content{display:flex;flex-direction:column;width:100%;max-height:90vh}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;align-self:stretch}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;min-height:76px;max-height:105px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-caption{max-height:56px;display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-close-button{align-self:flex-start;margin-right:-8px}.modal-body{padding:16px 24px;min-height:56px;box-sizing:border-box;flex:1;overflow-y:auto}.modal-footer.buttons-present ::slotted(*){display:flex;justify-content:flex-end;gap:16px;padding:16px 24px 32px 16px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}',C=k,F=class{constructor(e){y(this,e),this.ifxModalOpen=h(this,"ifxModalOpen",7),this.ifxModalClose=h(this,"ifxModalClose",7),this.focusableElements=[],this.handleTopFocus=()=>{this.attemptFocus(this.getLastFocusableElement())},this.handleBottomFocus=()=>{this.attemptFocus(this.getFirstFocusableElement())},this.handleKeypress=t=>{this.showModal&&t.key==="Escape"&&this.doBeforeClose("ESCAPE_KEY")},this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.size="s",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel",this.slotButtonsPresent=!1,this.showCloseButton=!0}componentDidLoad(){this.focusableElements=l(this.hostElement.shadowRoot,e=>m(e)||e.matches("[data-focus-trap-edge]"),w)}getFirstFocusableElement(){return this.focusableElements[0]}getLastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}attemptFocus(e){if(e==null){setTimeout(()=>{this.closeButton.focus()});return}setTimeout(()=>{e.focus()},0)}open(){this.showModal=!0;try{b(this.modalContainer,u.fadeIn,{duration:200}).addEventListener("finish",()=>{setTimeout(()=>{var t,n;(t=this.getLastFocusableElement())===null||t===void 0||t.focus(),(n=this.getLastFocusableElement())===null||n===void 0||n.blur()},0),this.ifxModalOpen.emit()}),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch{this.ifxModalOpen.emit()}}close(){try{b(this.modalContainer,u.fadeOut,{duration:200}).addEventListener("finish",()=>{this.showModal=!1,this.ifxModalClose.emit()}),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch{this.showModal=!1,this.ifxModalClose.emit()}}doBeforeClose(e){const t=[];t.push(e),t.some(a=>a.defaultPrevented)||(this.opened=!1)}openedChanged(e){e===!0?this.open():this.close()}handleOverlayClick(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}handleButtonsSlotChange(e){var t;((t=e.currentTarget.assignedElements()[0])===null||t===void 0?void 0:t.childElementCount)>0?this.slotButtonsPresent=!0:this.slotButtonsPresent=!1}render(){const e=this.variant!=="default";return o(x,{key:"3893200192cdf819f3e8948ce8d6ebf98fbef221"},o("div",{key:"213d3d958198aa5409f871ab4b2343c55a751507",ref:t=>this.modalContainer=t,class:`modal-container ${this.showModal?"open":""}`},o("div",{key:"8084553c70150a7d7a50498dab588811424f5a3e",class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),o("div",{key:"34647afb94b66e6a9b228bc6d709b610ef570c58","data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),o("div",{key:"80e6d955eb222ffee393c28e65c2d4478c3f8d06",class:`modal-content-container ${this.size}`,role:"dialog","aria-modal":"true","aria-label":this.caption},e?o("div",{class:`modal-icon-container ${this.variant==="alert-brand"?"":"danger"}`},this.alertIcon?o("ifx-icon",{icon:this.alertIcon}):null):null,o("div",{key:"83089df2d673dd6cdfd465e17fa265b72545c4b9",class:"modal-content"},o("div",{key:"7ef4a6b04b717f10b67e0780e5c6d8215c286fc5",class:"modal-header"},o("h2",{key:"53646fa326928739c9e46711fc73b819d0e4fe4b",class:"modal-caption"},this.caption),this.showCloseButton&&o("ifx-icon-button",{key:"eb8aadd8c35adff6a8f8e8da5aa835971f004078",class:"modal-close-button",ref:t=>this.closeButton=t,icon:"cross-24",variant:"tertiary",onClick:()=>this.doBeforeClose("CLOSE_BUTTON")})),o("div",{key:"c3de200d13a612a7067b4e96db09943a00429c30",class:"modal-body"},o("slot",{key:"82f7e007fabc1564b90ba66d81b86272a25f3636",name:"content"})),o("div",{key:"38187b73c1e4152f9207737b4b06b1a52b94d1ec",class:`modal-footer ${this.slotButtonsPresent?"buttons-present":""}`},o("slot",{key:"123d2035fe63e3d22df34826be23ba6b4b73b9ab",name:"buttons",onSlotchange:t=>this.handleButtonsSlotChange(t)})))),o("div",{key:"de980fdcbf75aee294911df411e7e810fdcc414a","data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}get hostElement(){return v(this)}static get watchers(){return{opened:["openedChanged"]}}};F.style=C;export{F as ifx_modal};
