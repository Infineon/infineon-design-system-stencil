"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[509],{"./dist/esm/ifx-text-field.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_text_field:()=>TextField});var _index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-3655ed9e.js");const TextField=class{constructor(hostRef){(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxInput=(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxInput",7),hostRef.$hostElement$["s-ei"]?this.internals=hostRef.$hostElement$["s-ei"]:(this.internals=hostRef.$hostElement$.attachInternals(),hostRef.$hostElement$["s-ei"]=this.internals),this.placeholder="Placeholder",this.value="",this.error=!1,this.label="",this.icon="",this.caption="",this.size="m",this.required=!1,this.optional=!1,this.success=!1,this.disabled=!1,this.maxlength=void 0}valueWatcher(newValue){newValue!==this.inputElement.value&&(this.inputElement.value=newValue)}async reset(){this.value="",this.inputElement.value=""}handleInput(){const query=this.inputElement.value;this.value=query,this.internals.setFormValue(query),this.ifxInput.emit(this.value)}formResetCallback(){this.internals.setValidity({}),this.internals.setFormValue("")}render(){return(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"5b5eac968749db744d226d37f04d6b460fe6dfee","aria-label":"a text field for user input","aria-value":this.value,"aria-disabled":this.disabled,class:"textInput__container "+(this.disabled?"disabled":"")},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e4b5ac4615d7d8f68358b8d6bd781a8a86ca621a",class:"textInput__top-wrapper"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"bf86891e3bce283de9da20de90b29971ba1259a4",htmlFor:"text-field"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"38e983e625defd798ada764c94c289c864340396"}),this.optional&&this.required?(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"optional-required"},"(optional) *"):this.optional?(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"optional"},"(optional)"):this.required?(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"required"},"*"):null)),(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b0553573270e9676667886f7071c1ff2c082c1fc",class:"textInput__bottom-wrapper"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9f357d65a4e2044a655282e56f7b43bd32a35380",class:"input-container"},this.icon&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"ad51ea099ca565578af86dbad73f07a5a29a555f",icon:this.icon}),(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"035939754259216795165532416d43e55083f166",ref:el=>this.inputElement=el,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,maxlength:this.maxlength,class:`${this.icon?"icon":""}\n                ${this.error?"error":""} \n              ${"s"===this.size?"input-s":""}\n              ${this.success?"success":""}`})),this.caption&&!this.error&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"bf98863884ac1f558ec8e329be80fc6bd2c058e1",class:`textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""`},this.caption),this.error&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b3abe332bf8df97cd03f2ede7ff84a62e80fe369",class:"textInput__bottom-wrapper-caption error"},this.caption)))}static get formAssociated(){return!0}get el(){return(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueWatcher"]}}};TextField.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:var(--ifx-font-family)}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;font-family:"Source Sans 3";font-size:1rem;line-height:1.5rem;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0;text-overflow:ellipsis}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px;font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.input-s::placeholder{font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:40px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,:focus,.error,.success){border:1px solid #575352}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:50%;transform:translateY(-50%);left:16px;transition:0.3s;color:#8D8786}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}'}}]);