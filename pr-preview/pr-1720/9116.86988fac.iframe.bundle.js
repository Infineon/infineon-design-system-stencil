"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9116],{"./dist/esm/ifx-radio-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_radio_button:()=>RadioButton});var _index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-adb4dbd9.js");const RadioButton=class{constructor(hostRef){(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.disabled=!1,this.error=!1,this.size="s",this.internalChecked=!1,this.hasSlot=!1}componentWillLoad(){if(this.fallbackInput=document.createElement("input"),this.fallbackInput.type="radio",this.fallbackInput.hidden=!0,this.fallbackInput.className="_ifx-radiobutton-fallback",this.fallbackInput.style.cssText="\n      display: none !important;\n      position: absolute !important;\n      opacity: 0 !important;\n      pointer-events: none !important;\n      width: 0 !important;\n      height: 0 !important;\n    ",this.fallbackInput.setAttribute("aria-hidden","true"),this.fallbackInput.tabIndex=-1,this.el.appendChild(this.fallbackInput),"attachInternals"in HTMLElement.prototype)try{this.internals=this.el.attachInternals()}catch(e){console.warn("ElementInternals not supported")}this.internalChecked=this.checked||!1,this.hasSlot=!!this.el.querySelector("[slot]")||""!==this.el.innerHTML.trim()}handleCheckedChange(newValue){this.internalChecked=newValue}updateFormValue(){var _a;(null===(_a=this.internals)||void 0===_a?void 0:_a.setFormValue)&&this.internals.setFormValue(this.internalChecked?this.value:null),this.fallbackInput.checked=this.internalChecked,this.fallbackInput.name=this.name,this.fallbackInput.value=this.value,this.fallbackInput.disabled=this.disabled}handleRadioButtonClick(event){if(this.disabled)return void event.stopPropagation();this.inputElement.click(),this.internalChecked=this.inputElement.checked,this.checked=this.internalChecked,this.ifxChange.emit(this.internalChecked);const changeEvent=new CustomEvent("change",{bubbles:!0,composed:!0,detail:{checked:this.internalChecked}});this.el.dispatchEvent(changeEvent)}handleKeyDown(ev){[" ","Enter"].includes(ev.key)&&(ev.preventDefault(),this.handleRadioButtonClick(new PointerEvent("click")))}handleExternalChange(event){const target=event.target;target!==this.el&&"ifx-radio-button"===target.tagName.toLowerCase()&&target.getAttribute("name")===this.name&&(this.internalChecked=!1)}render(){return(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fae53d7eafb00b6e7a1f58145af14c6eb2ab05df",role:"radio","aria-checked":String(this.internalChecked),"aria-disabled":String(this.disabled),class:`radioButton__container ${this.size} ${this.disabled?"disabled":""}`,onClick:e=>this.handleRadioButtonClick(e),tabindex:this.disabled?-1:0},(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"74ca30fb71544197ca732c626a9afd04ba6de059",class:`radioButton__wrapper \n            ${this.internalChecked?"checked":""} \n            ${this.disabled?"disabled":""} \n            ${this.error?"error":""}`},this.internalChecked&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"cd925eb77b85631c617b809b5d232e54c10009f2",class:"radioButton__wrapper-mark"})),this.hasSlot&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2343f841254057810313be262f74076a40398913",class:`label ${"m"===this.size?"label-m":""} ${this.disabled?"disabled":""}`},(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"501a334c5b09cc21cc5c528cd1bdf1ff465011d9"})),(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"e1c0bc279da1c379d552ab5bc25f274654514f62",type:"radio",hidden:!0,ref:el=>this.inputElement=el,name:this.name,value:this.value,checked:this.internalChecked,disabled:this.disabled,onClick:e=>e.stopPropagation()}))}static get formAssociated(){return!0}get el(){return(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{checked:["handleCheckedChange"],internalChecked:["updateFormValue"]}}};RadioButton.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex;--_ifx-fallback-display:none !important}._ifx-radiobutton-fallback{display:var(--_ifx-fallback-display);position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;border:0 !important}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer;font-family:var(--ifx-font-family)}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{background-color:#EEEDED}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label:hover{cursor:pointer}'}}]);