"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6541],{"./dist/esm/ifx-radio-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_radio_button:()=>RadioButton});var _index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-ee4c5c8d.js");const RadioButton=class{constructor(hostRef){(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.disabled=!1,this.value=void 0,this.error=!1,this.size="s",this.name=void 0,this.checked=void 0,this.internalChecked=!1,this.hasSlot=!0,this.inputElement=void 0}async isChecked(){return this.internalChecked}componentWillLoad(){this.checked&&(this.internalChecked=this.checked);const slot=this.el.innerHTML;this.hasSlot=!!slot}handleRadioButtonClick(){this.inputElement.click(),this.internalChecked=this.inputElement.checked,this.ifxChange.emit(this.internalChecked)}handleChange(event){event.target.name===this.name&&(this.internalChecked=this.inputElement.checked)}render(){return(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"441089b76bdbdb63e91d2d477cc343b150710f35","aria-label":"a radio button","aria-value":this.value,"aria-disabled":this.disabled,class:`radioButton__container ${this.size} ${this.disabled?"disabled":""}`,onClick:this.handleRadioButtonClick.bind(this)},(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0892dda36a40637476d15224204998b133784d0a",class:`radioButton__wrapper \n          ${this.internalChecked?"checked":""} \n          ${this.disabled?"disabled":""} \n          ${this.error?"error":""}`,tabIndex:this.disabled?-1:0},this.internalChecked&&(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9b8b01c94982446f8df36ebb654bb1a4ec6c1811",class:"radioButton__wrapper-mark"})),this.hasSlot&&(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"10e55096c8ea5b67c29211d35200172fe7d40fba",class:`label ${"m"===this.size?"label-m":""} ${this.disabled?"disabled":""}`},(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"99232ec1a73c768403be8bd08f3468d71817b216"})),(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"512ae2819748760b7ab11ccc73284faf62bb8741",type:"radio",hidden:!0,ref:el=>this.inputElement=el,name:this.name,value:this.value,checked:this.internalChecked,disabled:this.disabled,onClick:e=>e.stopPropagation()}))}get el(){return(0,_index_ee4c5c8d_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};RadioButton.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer;font-family:var(--ifx-font-family)}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{background-color:#EEEDED}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label:hover{cursor:pointer}'}}]);