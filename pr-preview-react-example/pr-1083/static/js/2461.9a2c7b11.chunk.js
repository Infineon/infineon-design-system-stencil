"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[2461],{2461:(e,t,o)=>{o.r(t),o.d(t,{ifx_modal:()=>c});var a=o(4742);function n(e,t,o){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;const i=[];if(s>=a)return i;const d=e=>{const i=e.assignedNodes().filter((e=>1===e.nodeType));if(i.length>0){return n(i[0].parentElement,t,o,a,s+1)}return[]},l=Array.from(e.children||[]);for(const r of l)t(r)||(o(r)&&i.push(r),null!=r.shadowRoot?i.push(...n(r.shadowRoot,t,o,a,s+1)):"SLOT"===r.tagName?i.push(...d(r)):i.push(...n(r,t,o,a,s+1)));return i}function s(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&"false"!==e.getAttribute("aria-hidden")||"none"===e.style.display||"0"===e.style.opacity||"hidden"===e.style.visibility||"collapse"===e.style.visibility}function i(e){return"-1"!==e.getAttribute("tabindex")&&!s(e)&&!function(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&"false"!==e.getAttribute("aria-disabled")}(e)&&(e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement)}function d(e,t,o){const a=e.animate(t,Object.assign(Object.assign({},o),{fill:"both"}));return a.addEventListener("finish",(()=>{a.commitStyles(),a.cancel()})),a}const l={easing:"cubic-bezier(0.390, 0.575, 0.565, 1.000)"},r={fadeIn:[Object.assign(Object.assign({offset:0},l),{opacity:0}),Object.assign(Object.assign({offset:1},l),{opacity:1})],fadeOut:[Object.assign(Object.assign({offset:0},l),{opacity:1}),Object.assign(Object.assign({offset:1},l),{opacity:0})]},c=class{constructor(e){(0,a.r)(this,e),this.ifxModalOpen=(0,a.c)(this,"ifxModalOpen",7),this.ifxModalClose=(0,a.c)(this,"ifxModalClose",7),this.focusableElements=[],this.handleTopFocus=()=>{this.attemptFocus(this.getLastFocusableElement())},this.handleBottomFocus=()=>{this.attemptFocus(this.getFirstFocusableElement())},this.handleKeypress=e=>{this.showModal&&"Escape"===e.key&&this.doBeforeClose("ESCAPE_KEY")},this.opened=!1,this.showModal=this.opened||!1,this.caption="Modal Title",this.closeOnOverlayClick=!0,this.variant="default",this.alertIcon="",this.okButtonLabel="OK",this.cancelButtonLabel="Cancel",this.slotButtonsPresent=!1,this.showCloseButton=!0}componentDidLoad(){this.focusableElements=n(this.hostElement.shadowRoot,(e=>s(e)||e.matches("[data-focus-trap-edge]")),i)}getFirstFocusableElement(){return this.focusableElements[0]}getLastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}attemptFocus(e){null!=e?setTimeout((()=>{e.focus()}),0):setTimeout((()=>{this.closeButton.focus()}))}open(){this.showModal=!0;try{d(this.modalContainer,r.fadeIn,{duration:200}).addEventListener("finish",(()=>{this.attemptFocus(this.getFirstFocusableElement()),this.ifxModalOpen.emit()})),this.hostElement.addEventListener("keydown",this.handleKeypress)}catch(e){this.ifxModalOpen.emit()}}close(){try{d(this.modalContainer,r.fadeOut,{duration:200}).addEventListener("finish",(()=>{this.showModal=!1,this.ifxModalClose.emit()})),this.hostElement.removeEventListener("keydown",this.handleKeypress)}catch(e){this.showModal=!1,this.ifxModalClose.emit()}}doBeforeClose(e){const t=[];t.push(e);t.some((e=>e.defaultPrevented))||(this.opened=!1)}openedChanged(e){!0===e?this.open():this.close()}handleOverlayClick(){this.closeOnOverlayClick&&this.doBeforeClose("BACKDROP")}handleButtonsSlotChange(e){var t;(null===(t=e.currentTarget.assignedElements()[0])||void 0===t?void 0:t.childElementCount)>0?this.slotButtonsPresent=!0:this.slotButtonsPresent=!1}render(){const e="default"!==this.variant;return(0,a.h)(a.a,{key:"f0813d1a7e4f67c3c0a5cdd223a3b2ff15599b74"},(0,a.h)("div",{key:"e7afd81ae3c34606fec4964f4d064a4a5d4639ef",ref:e=>this.modalContainer=e,class:"modal-container ".concat(this.showModal?"open":"")},(0,a.h)("div",{key:"f76ab35c1d23f8c85ef8f25c839a785c48d69b5d",class:"modal-overlay",onClick:()=>this.handleOverlayClick()}),(0,a.h)("div",{key:"c43a7f61d549ad93d5577d49ac4cbc420622f43b","data-focus-trap-edge":!0,onFocus:this.handleTopFocus,tabindex:"0"}),(0,a.h)("div",{key:"bac5195ac2880f7fa258f6ce8d7626a15c210085",class:"modal-content-container",role:"dialog","aria-modal":"true","aria-label":this.caption},e?(0,a.h)("div",{class:"modal-icon-container ".concat("alert-brand"===this.variant?"":"danger")},this.alertIcon?(0,a.h)("ifx-icon",{icon:this.alertIcon}):null):null,(0,a.h)("div",{key:"90e5a23f42dc008172db58a6367a061a643cd5c0",class:"modal-content"},(0,a.h)("div",{key:"2d40f525434ffdb9a0147f3f2b6e574a9f36bfcd",class:"modal-header"},(0,a.h)("h2",{key:"13cdac381999b2476ce2bee13b4a1ac4f8d6adde"},this.caption),this.showCloseButton&&(0,a.h)("ifx-icon-button",{class:"modal-close-button",ref:e=>this.closeButton=e,icon:"cross-24",variant:"tertiary",onClick:()=>this.doBeforeClose("CLOSE_BUTTON")})),(0,a.h)("div",{key:"a883d5cdee070a53921549e93d6909ea16dc91c5",class:"modal-body"},(0,a.h)("slot",{key:"6d1849326c81aee3f34ba35e36b6a2d18d4be137",name:"content"})),(0,a.h)("div",{key:"504fe383437cdb321cf0feb8a68a83a6a55a9a04",class:"modal-footer ".concat(this.slotButtonsPresent?"buttons-present":"")},(0,a.h)("slot",{key:"2185692c3a467aa90bef91f98e6317448d2ca7dd",name:"buttons",onSlotchange:e=>this.handleButtonsSlotChange(e)})))),(0,a.h)("div",{key:"ef69cc4f7d5f875ff240aec3f5f95665418cf526","data-focus-trap-edge":!0,onFocus:this.handleBottomFocus,tabindex:"0"})))}get hostElement(){return(0,a.g)(this)}static get watchers(){return{opened:["openedChanged"]}}};c.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.modal-container{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1060;overflow-y:auto;font-family:var(--ifx-font-family)}.modal-container.open{display:block}.modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1D1D1D;opacity:0.5;z-index:0}.modal-content-container{position:absolute;display:flex;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%);width:90%;min-height:218px;background-color:#fff;border-radius:0;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);overflow:hidden;box-sizing:border-box;align-items:stretch}@media screen and (min-width: 768px){.modal-content-container{width:540px;min-height:132px}}.modal-content{display:flex;flex-direction:column;width:100%;height:100%}.modal-icon-container{display:flex;align-items:center;justify-content:center;width:32px;background-color:#0A8276;align-self:stretch}.modal-icon-container.danger{background-color:#CD002F}.modal-icon-container ifx-icon{color:#FFFFFF}.modal-header{display:flex;justify-content:space-between;align-items:center;padding:24px;height:76px;box-sizing:border-box;border-radius:1px 1px 0px 0px;border-bottom:1px solid #EEEDED}.modal-header h2{margin:0;font-weight:600;font-size:1.25rem;line-height:28px}.modal-header button{background:none;border:none;font-size:1.5em;padding:0;cursor:pointer}.modal-close-button{margin-right:-8px}.modal-body{padding:16px 24px;min-height:56px;box-sizing:border-box;flex:1;max-height:70vh;overflow-y:auto}.modal-footer.buttons-present ::slotted(*){display:flex;justify-content:flex-end;gap:16px;padding:16px 24px 32px 16px}.modal-border{display:flex;align-items:center;justify-content:center;width:100%;font-size:1.5em;flex-grow:1}.modal-border.primary{background-color:#0A8276}.modal-border.secondary{background-color:#575352}.modal-border.danger{background-color:#CD002F}.modal-border.success{background-color:#4CA460}.modal-border.warning{background-color:#E16B25}.modal-border.orange{background-color:#E16B25}.modal-border.ocean{background-color:#0A8276}.modal-border.grey{background-color:#575352}.modal-border.grey-200{background-color:#EEEDED}.modal-border.red{background-color:#CD002F}.modal-border.green{background-color:#4CA460}.modal-border.berry{background-color:#9C216E}'}}]);
//# sourceMappingURL=2461.9a2c7b11.chunk.js.map