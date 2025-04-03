"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3862],{"./dist/esm/ifx-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_checkbox:()=>Checkbox});var _index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-c77e25a0.js");const Checkbox=class{constructor(hostRef){(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.ifxError=(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxError",7),hostRef.$hostElement$["s-ei"]?this.internals=hostRef.$hostElement$["s-ei"]:(this.internals=hostRef.$hostElement$.attachInternals(),hostRef.$hostElement$["s-ei"]=this.internals),this.disabled=!1,this.checked=!1,this.error=!1,this.size="m",this.indeterminate=!1}handleCheckbox(){this.disabled||(this.inputElement.indeterminate||(this.internalChecked=!this.internalChecked),this.internalChecked&&!this.internalIndeterminate?void 0!==this.value?this.internals.setFormValue(this.value):this.internals.setFormValue("on"):this.internals.setFormValue(null),this.ifxChange.emit(this.internalChecked))}async isChecked(){return this.internalChecked}async toggleCheckedState(newVal){this.internalChecked=newVal}valueChanged(newValue,oldValue){newValue!==oldValue&&(this.internalChecked=newValue,this.inputElement.checked=this.internalChecked)}errorChanged(newValue,oldValue){newValue!==oldValue&&this.ifxError.emit(newValue)}indeterminateChanged(newValue,oldValue){newValue!==oldValue&&(this.internalIndeterminate=newValue,this.inputElement.indeterminate=this.internalIndeterminate)}handleKeydown(event){32!==event.keyCode&&13!==event.keyCode||(this.handleCheckbox(),event.preventDefault())}componentWillLoad(){this.internalChecked=this.checked,this.internalIndeterminate=this.indeterminate}componentDidRender(){this.inputElement.indeterminate=this.internalIndeterminate}formResetCallback(){this.internals.setFormValue(null)}getCheckedClassName(){return this.error?this.internalChecked?"checked error":"error":this.internalChecked?"checked":""}render(){let hasSlot=!1;return this.el.innerHTML&&(hasSlot=!0),(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ae37e8cf56cecc28d1d3441e4ca70a66d19fd4a9",class:"checkbox__container"},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"210ff7879962c1df556491d83d3ebcf7238b6b50",type:"checkbox",hidden:!0,ref:el=>this.inputElement=el,checked:this.internalChecked,onChange:this.handleCheckbox.bind(this),id:"checkbox",value:`${this.value}`,disabled:!!this.disabled||void 0}),(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2b1b2065f41003c4e627e802fa70728f7b884710",tabindex:"0",onClick:this.handleCheckbox.bind(this),onKeyDown:this.handleKeydown.bind(this),role:"checkbox","aria-checked":this.indeterminate?"mixed":this.internalChecked.toString(),"aria-disabled":this.disabled,"aria-labelledby":"label",class:`checkbox__wrapper \n          ${this.getCheckedClassName()}\n        ${"m"===this.size?"checkbox-m":""}\n        ${this.indeterminate?"indeterminate":""}\n        ${this.disabled?"disabled":""}`},this.internalChecked&&!this.internalIndeterminate&&(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"ca2171404ee8926623bab88b5d4abbb906d66a9d",icon:"check-12","aria-hidden":"true"})),hasSlot&&(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"efb5c73f051dceb60b79220bffd5b1694502be7b",id:"label",class:`label ${"m"===this.size?"label-m":""} ${this.disabled?"disabled":""} `,onClick:this.handleCheckbox.bind(this)},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"1c3d1089dfce161a4e4c093c3211a8d772b3d90b"})))}static get formAssociated(){return!0}get el(){return(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{checked:["valueChanged"],error:["errorChanged"],indeterminate:["indeterminateChanged"]}}};Checkbox.style=':host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:top;padding:0px;gap:8px;font-family:var(--ifx-font-family)}.checkbox__container .checkbox__wrapper{box-sizing:border-box;display:flex;position:relative;justify-content:center;align-items:center;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0;align-self:flex-start}.checkbox__container .checkbox__wrapper.checkbox-m{height:24px;width:24px}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked:not(.indeterminate){background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#FFFFFF}.checkbox__container .checkbox__wrapper.checked:not(.indeterminate).error{background-color:#CD002F}.checkbox__container .checkbox__wrapper.checked:not(.indeterminate):focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:not(.indeterminate):hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked:not(.indeterminate).disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.indeterminate:before{content:"";display:block;width:70%;height:2px;background-color:#08665C;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.checkbox__container .label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;overflow-wrap:break-word;word-wrap:break-word;word-break:break-all;max-width:100%}.checkbox__container .label.label-m{font-size:1rem;line-height:1.5rem}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}'}}]);