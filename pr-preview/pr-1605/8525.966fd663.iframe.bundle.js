"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8525],{"./dist/esm/ifx-textarea.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_textarea:()=>TextArea});var _index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-30c509de.js");const TextArea=class{constructor(hostRef){(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxInput=(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxInput",7),hostRef.$hostElement$["s-ei"]?this.internals=hostRef.$hostElement$["s-ei"]:(this.internals=hostRef.$hostElement$.attachInternals(),hostRef.$hostElement$["s-ei"]=this.internals),this.inputId="ifx-textarea-"+ ++textareaId,this.caption=void 0,this.cols=void 0,this.disabled=!1,this.error=!1,this.label=void 0,this.maxlength=void 0,this.name=void 0,this.placeholder=void 0,this.readOnly=!1,this.resize="both",this.rows=void 0,this.value=void 0,this.wrap="soft"}async reset(){this.resetTextarea()}formResetCallback(){this.resetTextarea(),this.internals.setFormValue("")}handleOnInput(e){this.value=e.target.value,this.internals.setFormValue(this.value),this.ifxInput.emit(this.value)}resetTextarea(){this.value="",this.internals.setValidity({}),this.internals.setFormValue("")}componentWillLoad(){this.internals.setFormValue(this.value)}render(){var _a,_b;return(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.a,{key:"bff2a454223986fcbf9cb7afd67f1309854f1689",class:`wrapper \n\t\t\t\t\t\twrapper--${this.error?"error":""}\n\t\t\t\t\t\twrapper--${this.disabled?"disabled":""}`},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"e683f3342a790007c1fc8fd98d10e74ee46b183c",class:"wrapper__label",htmlFor:this.inputId},null===(_a=this.label)||void 0===_a?void 0:_a.trim()),(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2ac8b3962f222f584c30d7690d3bde1fda235b2f",class:"wrapper__textarea"},(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea",{key:"2d05ab07e2fe58ee87234a5914a6dbd34660ad7f","aria-label":"a textarea","aria-value":this.value,"aria-disabled":this.disabled,id:this.inputId,style:{resize:this.resize},name:this.name?this.name:this.inputId,cols:this.cols,rows:this.rows,maxlength:this.maxlength,wrap:this.wrap,disabled:this.disabled,readonly:this.readOnly,placeholder:this.placeholder,value:this.value,onInput:e=>this.handleOnInput(e)})),(null===(_b=this.caption)||void 0===_b?void 0:_b.trim())&&(0,_index_30c509de_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c6ea67eb98ba1fefee56f317418d769b85809384",class:"wrapper__caption"},this.caption.trim()))}static get formAssociated(){return!0}};let textareaId=0;TextArea.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;flex-direction:column}.wrapper__label{color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3"}:host(.wrapper--disabled) .wrapper__label{color:#575352}.wrapper__textarea textarea{border:1px solid #8D8786;border-radius:1px;padding:8px 16px;background-color:#FFFFFF;color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3";transition:all 100ms ease;transition-property:border-color}.wrapper__textarea textarea:hover{border:1px solid #575352}.wrapper__textarea textarea:focus-within{outline:none;border:1px solid #0A8276}:host(.wrapper--error) .wrapper__textarea textarea{border:1px solid #CD002F}:host(.wrapper--disabled) .wrapper__textarea textarea{border:1px solid #575352;background-color:#EEEDED}.wrapper__caption{color:#1D1D1D;font:400 0.75rem/1rem "Source Sans 3"}:host(.wrapper--error) .wrapper__caption{color:#CD002F}:host(.wrapper--disabled) .wrapper__caption{color:#575352}'}}]);