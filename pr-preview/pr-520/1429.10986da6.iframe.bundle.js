"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1429],{"./dist/esm/ifx-switch.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_switch:()=>Switch});var _index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-69e586c1.js");const Switch=class{constructor(hostRef){(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}valueChanged(newValue,oldValue){newValue!==oldValue&&(this.internalValue=newValue)}toggle(){this.disabled||(this.internalValue=!this.internalValue,this.ifxChange.emit(this.internalValue))}handleKeyDown(event){this.disabled||"Enter"!==event.key&&" "!==event.key||this.toggle()}render(){return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,role:"switch",tabindex:"0","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggle(),onKeyDown:event=>this.handleKeyDown(event)},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"switch_checkbox-wrapper"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`})),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"switch_label-wrapper "+(this.disabled?"disabled":"")},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:"switch"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}static get watchers(){return{value:["valueChanged"]}}};Switch.style='*{font-family:"Source Sans 3"}:host{display:inline-block;user-select:none}.container{padding:4px;display:flex;align-items:center;position:relative;width:40px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.container:focus{outline:4px solid #0A8276;outline-offset:2px}.container:focus:not(:focus-visible){outline:none}.container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.container.disabled{cursor:default}.switch_label-wrapper{margin-left:46px}.switch_label-wrapper label:hover{cursor:pointer}.switch_label-wrapper.disabled{color:#BFBBBB}.switch_checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease}.switch_checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch_checkbox-wrapper .switch.checked{transform:translateX(20px);background-color:#FFFFFF}.switch_checkbox-wrapper .switch.checked.disabled{cursor:default}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.container.checked{background-color:#0A8276;border-color:#0A8276}.container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}'}}]);