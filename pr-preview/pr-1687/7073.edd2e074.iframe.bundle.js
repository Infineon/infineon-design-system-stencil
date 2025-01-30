"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7073],{"./dist/esm/ifx-date-picker.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_date_picker:()=>DatePicker});var _index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f6e95f3d.js");const DatePicker=class{constructor(hostRef){(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxDate=(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxDate",7),hostRef.$hostElement$["s-ei"]?this.internals=hostRef.$hostElement$["s-ei"]:(this.internals=hostRef.$hostElement$.attachInternals(),hostRef.$hostElement$["s-ei"]=this.internals),this.inputId="ifx-date-picker-"+ ++datePickerId,this.size="s",this.error=!1,this.success=!1,this.disabled=!1,this.required=!1}getDate(e){const inputValue=e.target.value,selectedDate=new Date(inputValue),day=selectedDate.getDate(),month=selectedDate.getMonth()+1,year=selectedDate.getFullYear();if(!inputValue)return this.internals.setFormValue(null),void this.ifxDate.emit({day,month,year});this.el.shadowRoot.querySelector(".date__picker-input").classList.add("has-value"),this.internals.setFormValue(selectedDate.toISOString().substring(0,10)),this.ifxDate.emit({day,month,year})}handleInputFocusOnIconClick(){const input=this.el.shadowRoot.querySelector(".date__picker-input");input&&input.focus()}getBrowser(){return-1!=navigator.userAgent.indexOf("Chrome")?"Chrome":-1!=navigator.userAgent.indexOf("Opera")?"Opera":-1!=navigator.userAgent.indexOf("MSIE")?"IE":-1!=navigator.userAgent.indexOf("Firefox")?"Firefox":"unknown"}setFireFoxClasses(){const browser=this.getBrowser(),input=this.el.shadowRoot.querySelector(".date__picker-input");"Firefox"===browser?input.classList.add("firefox__classes"):input.classList.contains("firefox__classes")&&input.classList.remove("firefox__classes")}componentDidLoad(){this.setFireFoxClasses(),this.value&&this.getDate({target:{value:this.value}})}formResetCallback(){this.internals.setFormValue(null)}render(){var _a,_b;return(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8939525c9d1b6ca3d6d1d598f18c801eaa274925",class:`date__picker-container ${this.error?"error":""} ${this.disabled?"disabled":""}`},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"b6943a24e0b7b92826f8f0a951aa8ba07b07a602",class:"label__wrapper",htmlFor:this.inputId},null===(_a=this.label)||void 0===_a?void 0:_a.trim()),(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"dbb6810bec0365a771ee39feca14455d553f308f",class:`input__wrapper ${"l"===this.size?"large":"small"} ${this.disabled?"disabled":""}`},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"c4532643be4a7a29a9c8837787e997059bdaa7c1",type:"date",class:`date__picker-input ${this.error?"error":""} ${this.success?"success":""}`,disabled:!!this.disabled||void 0,"aria-invalid":!!this.error||void 0,"aria-label":this.AriaLabel,max:this.max,min:this.min,value:this.value,required:this.required,onChange:e=>this.getDate(e)}),(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"401c972432d3c0a057a3fe812fa730372b12fcbe",class:"icon__wrapper",role:"button",onClick:()=>this.handleInputFocusOnIconClick()},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"125529210997e8dd611e5bb394909a1cf08fc47b",icon:"calendar16","aria-hidden":"true"}))),(null===(_b=this.caption)||void 0===_b?void 0:_b.trim())&&(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"1367a5dc715de1f7f0ea40a9995ce07a9030aae8",class:"caption__wrapper"},this.caption.trim()))}static get formAssociated(){return!0}get el(){return(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};let datePickerId=0;DatePicker.style='.date__picker-container{display:flex;flex-direction:column}.date__picker-container .label__wrapper{color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3"}.date__picker-container.disabled .label__wrapper{color:#575352}.date__picker-container.error .caption__wrapper{color:#CD002F}.date__picker-container.disabled .caption__wrapper{color:#575352}.date__picker-container .caption__wrapper{margin-top:4px;color:#1D1D1D;font:400 0.75rem/1rem "Source Sans 3"}.date__picker-input{font-family:"Source Sans 3";outline:none;width:100%;cursor:pointer;border-radius:1px;border:1px solid #8D8786;height:100%}.date__picker-input.firefox__classes{padding:8px 16px;color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px;cursor:pointer}.date__picker-input:focus:not(.error,.success){border-color:#0A8276}.date__picker-input:hover:not(:disabled,:focus,.error,.success){border-color:#575352}.date__picker-input:disabled{border-color:#575352;background-color:#EEEDED}.date__picker-input.error{border-color:#CD002F}.date__picker-input.success:not(.error){border-color:#4CA460}.date__picker-input::-webkit-datetime-edit-text{color:#8D8786;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.date__picker-input.has-value::-webkit-datetime-edit-text{color:#1D1D1D}.date__picker-input.has-value::-webkit-datetime-edit{color:#1D1D1D}::-webkit-datetime-edit{color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px}::-webkit-datetime-edit-fields-wrapper{padding:8px 16px;padding-bottom:9px;transform:translateY(1px)}::-webkit-inner-spin-button{display:none}::-webkit-calendar-picker-indicator{position:absolute;right:15px;font-size:19px;cursor:pointer;border-radius:1px}::-webkit-calendar-picker-indicator:focus-within{outline:2px solid #0A8276;outline-offset:2px}.input__wrapper{display:flex;justify-content:space-between;align-items:center;align-self:stretch;background:#FFFFFF;position:relative}.input__wrapper.large{height:40px}.input__wrapper.small{height:36px}.input__wrapper.disabled .icon__wrapper{background-color:#EEEDED}.icon__wrapper{position:absolute;right:17px;padding:2px;display:flex;justify-content:flex-end;align-items:center;pointer-events:none;z-index:100;background-color:#FFFFFF;line-height:16px}.icon__wrapper ifx-icon{vertical-align:middle}'}}]);