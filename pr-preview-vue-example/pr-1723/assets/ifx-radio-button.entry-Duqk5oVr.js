import{r as o,c as a,h as r,g as i}from"./index-BLp0bwla.js";const n=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex;--_ifx-fallback-display:none !important}._ifx-radiobutton-fallback{display:var(--_ifx-fallback-display);position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;border:0 !important}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer;font-family:var(--ifx-font-family)}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{background-color:#EEEDED}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.error::after{border-color:#CD002F;background-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label:hover{cursor:pointer}',d=n,l=class{constructor(t){o(this,t),this.ifxChange=a(this,"ifxChange",7),this.ifxError=a(this,"ifxError",7),this.disabled=!1,this.error=!1,this.size="s",this.internalChecked=!1,this.hasSlot=!1}componentWillLoad(){if(this.fallbackInput=document.createElement("input"),this.fallbackInput.type="radio",this.fallbackInput.hidden=!0,this.fallbackInput.className="_ifx-radiobutton-fallback",this.fallbackInput.style.cssText=`
      display: none !important;
      position: absolute !important;
      opacity: 0 !important;
      pointer-events: none !important;
      width: 0 !important;
      height: 0 !important;
    `,this.fallbackInput.setAttribute("aria-hidden","true"),this.fallbackInput.tabIndex=-1,this.el.appendChild(this.fallbackInput),"attachInternals"in HTMLElement.prototype)try{this.internals=this.el.attachInternals()}catch{console.warn("ElementInternals not supported")}this.internalChecked=this.checked||!1,this.hasSlot=!!this.el.querySelector("[slot]")||this.el.innerHTML.trim()!==""}handleCheckedChange(t){this.internalChecked=t}updateFormValue(){var t;!((t=this.internals)===null||t===void 0)&&t.setFormValue&&this.internals.setFormValue(this.internalChecked?this.value:null),this.fallbackInput.checked=this.internalChecked,this.fallbackInput.name=this.name,this.fallbackInput.value=this.value,this.fallbackInput.disabled=this.disabled}errorChanged(t,e){t!==e&&this.ifxError.emit(t)}handleRadioButtonClick(t){if(this.disabled){t.stopPropagation();return}this.inputElement.click(),this.internalChecked=this.inputElement.checked,this.checked=this.internalChecked,this.ifxChange.emit(this.internalChecked);const e=new CustomEvent("change",{bubbles:!0,composed:!0,detail:{checked:this.internalChecked}});this.el.dispatchEvent(e)}handleKeyDown(t){[" ","Enter"].includes(t.key)&&(t.preventDefault(),this.handleRadioButtonClick(new PointerEvent("click")))}handleExternalChange(t){const e=t.target;e===this.el||e.tagName.toLowerCase()!=="ifx-radio-button"||e.getAttribute("name")===this.name&&(this.internalChecked=!1)}render(){return r("div",{key:"c1a4d78f1bb621ec6d1e8d567db7a3ffca495350",role:"radio","aria-checked":String(this.internalChecked),"aria-disabled":String(this.disabled),class:`radioButton__container ${this.size} ${this.disabled?"disabled":""}`,onClick:t=>this.handleRadioButtonClick(t),tabindex:this.disabled?-1:0},r("div",{key:"a6392cc1165e474ad66d171ab72a29a6b2975044",class:`radioButton__wrapper 
            ${this.internalChecked?"checked":""} 
            ${this.disabled?"disabled":""} 
            ${this.error?"error":""}`},this.internalChecked&&r("div",{key:"f63fbcb2b9f939523a33e1a47fad83f832440b6e",class:"radioButton__wrapper-mark"})),this.hasSlot&&r("div",{key:"a26b60d3dd68091e354ad9fce6cde03bf753f60f",class:`label ${this.size==="m"?"label-m":""} ${this.disabled?"disabled":""}`},r("slot",{key:"db9a37d4b079cb5da768776529ad434ea7b41e3d"})),r("input",{key:"983a166c562ad72ee022a78e88466dbd90e68997",type:"radio",hidden:!0,ref:t=>this.inputElement=t,name:this.name,value:this.value,checked:this.internalChecked,disabled:this.disabled,onClick:t=>t.stopPropagation()}))}static get formAssociated(){return!0}get el(){return i(this)}static get watchers(){return{checked:["handleCheckedChange"],internalChecked:["updateFormValue"],error:["errorChanged"]}}};l.style=d;export{l as ifx_radio_button};
