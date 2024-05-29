import{r as y,c as h,h as o,H as x,g as v}from"./index-CNjQuoAD.js";function l(e,t,n,a=20,r=0){const s=[];if(r>=a)return s;const p=i=>{const f=i.assignedNodes().filter(c=>c.nodeType===1);if(f.length>0){const c=f[0].parentElement;return l(c,t,n,a,r+1)}return[]},g=Array.from(e.children||[]);for(const i of g)t(i)||(n(i)&&s.push(i),i.shadowRoot!=null?s.push(...l(i.shadowRoot,t,n,a,r+1)):i.tagName==="SLOT"?s.push(...p(i)):s.push(...l(i,t,n,a,r+1)));return s}function m(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&e.getAttribute("aria-hidden")!=="false"||e.style.display==="none"||e.style.opacity==="0"||e.style.visibility==="hidden"||e.style.visibility==="collapse"}function E(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"}function w(e){return e.getAttribute("tabindex")==="-1"||m(e)||E(e)?!1:e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement}function u(e,t,n){const a=e.animate(t,Object.assign(Object.assign({},n),{fill:"both"}));return a.addEventListener("finish",()=>{a.commitStyles(),a.cancel()}),a}const d={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},b={fadeIn:[Object.assign(Object.assign({offset:0},d),{opacity:0}),Object.assign(Object.assign({offset:1},d),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},d),{opacity:1}),Object.assign(Object.assign({offset:1},d),{opacity:0})]},k=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.modal-container{display:none;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1060;overflow-y:auto;font-family:var(--ifx-font-family)}.modal-container.open{display:flex}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;justify-content:center;width:90%;min-height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;align-items:stretch}@media screen and (min-width: 768px){.modal-content-container{width:540px;min-height:132px}.modal-content-container.m,.modal-content-container.l,.modal-content-container.s{width:90%}}@media screen and (min-width: 1024px){.modal-content-container.s{width:47vw}.modal-content-container.m{width:63vw}.modal-content-container.l{width:80%}}.modal-content{display:flex;flex-direction:column;width:100%;max-height:90vh}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;align-self:stretch}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;min-height:76px;max-height:105px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-caption{max-height:56px;display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-close-button{align-self:flex-start;margin-right:-8px}.modal-body{padding:16px 24px;min-height:56px;box-sizing:border-box;flex:1;overflow-y:auto}.modal-footer.buttons-present ::slotted(*){display:flex;justify-content:flex-end;gap:16px;padding:16px 24px 32px 16px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}',C=k,F=class{constructor(e){y(this,e),this.ifxModalOpen=h(this,"ifxModalOpen",7),this.ifxModalClose=h(this,"ifxModalClose",7),this.focusableElements=[],this.handleTopFocus=()=>{this.attemptFocus(this.getLastFocusableElement())},this.handleBottomFocus=()=>{this.attemptFocus(this.getFirstFocusableElement())},this.handleKeypress=t=>{this.showModal&&t.key==="Escape"&&this.doBeforeClose("ESCAPE_KEY")},this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.size="s",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel",this.slotButtonsPresent=!1,this.showCloseButton=!0}componentDidLoad(){this.focusableElements=l(this.hostElement.shadowRoot,e=>m(e)||e.matches("[data-focus-trap-edge]"),w)}getFirstFocusableElement(){return this.focusableElements[0]}getLastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}attemptFocus(e){if(e==null){setTimeout(()=>{this.closeButton.focus()});return}setTimeout(()=>{e.focus()},0)}open(){this.showModal=!0;try{u(this.modalContainer,b.fadeIn,{duration:200}).addEventListener("finish",()=>{setTimeout(()=>{var t,n;(t=this.getLastFocusableElement())===null||t===void 0||t.focus(),(n=this.getLastFocusableElement())===null||n===void 0||n.blur()},0),this.ifxModalOpen.emit()}),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch{this.ifxModalOpen.emit()}}close(){try{u(this.modalContainer,b.fadeOut,{duration:200}).addEventListener("finish",()=>{this.showModal=!1,this.ifxModalClose.emit()}),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch{this.showModal=!1,this.ifxModalClose.emit()}}doBeforeClose(e){const t=[];t.push(e),t.some(a=>a.defaultPrevented)||(this.opened=!1)}openedChanged(e){e===!0?this.open():this.close()}handleOverlayClick(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}handleButtonsSlotChange(e){var t;((t=e.currentTarget.assignedElements()[0])===null||t===void 0?void 0:t.childElementCount)>0?this.slotButtonsPresent=!0:this.slotButtonsPresent=!1}render(){const e=this.variant!=="default";return o(x,{key:"a384fca8dfaf384c02a8d47d7292c0163ae8ebae"},o("div",{key:"2073ece8f04cf10da7b0e0ded123d5cd2428f218",ref:t=>this.modalContainer=t,class:`modal-container ${this.showModal?"open":""}`},o("div",{key:"6b1f695c6e228b7250459e83360e638bf161d7d3",class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),o("div",{key:"2570b696079bffbc557fa8431fd2ae92a84a212b","data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),o("div",{key:"d907543c4375128a8dae8f0958232af225014321",class:`modal-content-container ${this.size}`,role:"dialog","aria-modal":"true","aria-label":this.caption},e?o("div",{class:`modal-icon-container ${this.variant==="alert-brand"?"":"danger"}`},this.alertIcon?o("ifx-icon",{icon:this.alertIcon}):null):null,o("div",{key:"6ce7daab4cf00fae746778e6dc970b1ca443167a",class:"modal-content"},o("div",{key:"40b21d8b4533fe825cb8d200059c6629409a3598",class:"modal-header"},o("h2",{key:"fd99ab2b338ebcc330c8580c071329a2e2123124",class:"modal-caption"},this.caption),this.showCloseButton&&o("ifx-icon-button",{class:"modal-close-button",ref:t=>this.closeButton=t,icon:"cross-24",variant:"tertiary",onClick:()=>this.doBeforeClose("CLOSE_BUTTON")})),o("div",{key:"c85ef45a13ad0ed6491449f28e4393840c28fa6f",class:"modal-body"},o("slot",{key:"d74f2f1ffaf8cfc46d706c5217c84eb03fa29ce7",name:"content"})),o("div",{key:"32fdd9b157d644a933969b4dfcb3e1b1c76427fb",class:`modal-footer ${this.slotButtonsPresent?"buttons-present":""}`},o("slot",{key:"9abdb22aa8519e48fd3ddf9dd523bdbbddee4f0e",name:"buttons",onSlotchange:t=>this.handleButtonsSlotChange(t)})))),o("div",{key:"c854a101a0f7f841c2936778f43fe3de97cb0b28","data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}get hostElement(){return v(this)}static get watchers(){return{opened:["openedChanged"]}}};F.style=C;export{F as ifx_modal};