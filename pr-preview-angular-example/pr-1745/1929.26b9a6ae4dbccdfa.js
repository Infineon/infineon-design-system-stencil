"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[1929],{1929:(l,o,a)=>{a.r(o),a.d(o,{ifx_radio_button:()=>d});var e=a(787);const d=(()=>{let i=class{constructor(t){(0,e.r)(this,t),this.ifxChange=(0,e.c)(this,"ifxChange",7),this.ifxError=(0,e.c)(this,"ifxError",7),this.disabled=!1,this.error=!1,this.size="s",this.internalChecked=!1,this.hasSlot=!1}componentWillLoad(){if(this.fallbackInput=document.createElement("input"),this.fallbackInput.type="radio",this.fallbackInput.hidden=!0,this.fallbackInput.className="_ifx-radiobutton-fallback",this.fallbackInput.style.cssText="\n      display: none !important;\n      position: absolute !important;\n      opacity: 0 !important;\n      pointer-events: none !important;\n      width: 0 !important;\n      height: 0 !important;\n    ",this.fallbackInput.setAttribute("aria-hidden","true"),this.fallbackInput.tabIndex=-1,this.el.appendChild(this.fallbackInput),"attachInternals"in HTMLElement.prototype)try{this.internals=this.el.attachInternals()}catch{console.warn("ElementInternals not supported")}this.internalChecked=this.checked||!1,this.hasSlot=!!this.el.querySelector("[slot]")||""!==this.el.innerHTML.trim()}handleCheckedChange(t){this.internalChecked=t}updateFormValue(){var t;!(null===(t=this.internals)||void 0===t)&&t.setFormValue&&this.internals.setFormValue(this.internalChecked?this.value:null),this.fallbackInput.checked=this.internalChecked,this.fallbackInput.name=this.name,this.fallbackInput.value=this.value,this.fallbackInput.disabled=this.disabled}errorChanged(t,r){t!==r&&this.ifxError.emit(t)}handleRadioButtonClick(t){if(this.disabled)return void t.stopPropagation();this.inputElement.click(),this.internalChecked=this.inputElement.checked,this.checked=this.internalChecked,this.ifxChange.emit(this.internalChecked);const r=new CustomEvent("change",{bubbles:!0,composed:!0,detail:{checked:this.internalChecked}});this.el.dispatchEvent(r)}handleKeyDown(t){[" ","Enter"].includes(t.key)&&(t.preventDefault(),this.handleRadioButtonClick(new PointerEvent("click")))}handleExternalChange(t){const r=t.target;r===this.el||"ifx-radio-button"!==r.tagName.toLowerCase()||r.getAttribute("name")===this.name&&(this.internalChecked=!1)}render(){return(0,e.h)("div",{key:"50f91a7e62f42eca90c3a5b0e5be2305fc724993",role:"radio","aria-checked":String(this.internalChecked),"aria-disabled":String(this.disabled),class:`radioButton__container ${this.size} ${this.disabled?"disabled":""}`,onClick:t=>this.handleRadioButtonClick(t),tabindex:this.disabled?-1:0},(0,e.h)("div",{key:"bc8584815a87f47e01e5fe13d299ae76dfa9ad41",class:`radioButton__wrapper \n            ${this.internalChecked?"checked":""} \n            ${this.disabled?"disabled":""} \n            ${this.error?"error":""}`},this.internalChecked&&(0,e.h)("div",{key:"5ded48e0ad8f94e7069d7fd7d134521c87f5bb80",class:"radioButton__wrapper-mark"})),this.hasSlot&&(0,e.h)("div",{key:"4e54b2170790de0b6a0819634db1223804000522",class:`label ${"m"===this.size?"label-m":""} ${this.disabled?"disabled":""}`},(0,e.h)("slot",{key:"ae995e898c7c811b32e0226577fdb11e72914961"})),(0,e.h)("input",{key:"76d3c452563072034296964feaf90c406a7b89de",type:"radio",hidden:!0,ref:t=>this.inputElement=t,name:this.name,value:this.value,checked:this.internalChecked,disabled:this.disabled,onClick:t=>t.stopPropagation()}))}static get formAssociated(){return!0}get el(){return(0,e.g)(this)}static get watchers(){return{checked:["handleCheckedChange"],internalChecked:["updateFormValue"],error:["errorChanged"]}}};return i.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex;--_ifx-fallback-display:none !important}._ifx-radiobutton-fallback{display:var(--_ifx-fallback-display);position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;border:0 !important}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer;font-family:var(--ifx-font-family)}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{background-color:#EEEDED}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.error::after{border-color:#CD002F;background-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label:hover{cursor:pointer}',i})()}}]);