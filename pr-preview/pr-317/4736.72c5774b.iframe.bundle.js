"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4736],{"./dist/esm/ifx-radio-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_radio_button:()=>RadioButton});var _index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-ae19f8dd.js");const RadioButton=class{constructor(hostRef){(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.disabled=!1,this.value=!1,this.error=!1,this.size="s",this.internalValue=void 0,this.hasSlot=!0}valueChanged(newValue,oldValue){newValue!==oldValue&&(this.internalValue=newValue)}componentWillLoad(){this.internalValue=this.value;const slot=this.el.innerHTML;this.hasSlot=!!slot}handleRadioButtonClick(){this.disabled||(this.internalValue=!this.internalValue,this.el.shadowRoot.querySelector(".radioButton__wrapper").focus(),this.ifxChange.emit(this.internalValue))}render(){return(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`radioButton__container ${this.size} ${this.disabled?"disabled":""}`,onClick:this.handleRadioButtonClick.bind(this)},(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`radioButton__wrapper ${this.internalValue?"checked":""} ${this.disabled?"disabled":""} ${this.error?"error":""}`,tabIndex:this.disabled?-1:0},this.internalValue&&(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"radioButton__wrapper-mark"})),this.hasSlot&&(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`label ${this.error?"error":""} ${this.disabled?"disabled":""}`},(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueChanged"]}}};RadioButton.style='.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#ffffff;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{border-color:#0A8276}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#ffffff;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;width:25px;height:20px;font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#1d1d1d;flex:none;order:1;flex-grow:0}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label.error{color:#CD002F}.radioButton__container .label:hover{cursor:pointer}'}}]);