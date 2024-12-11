"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2055],{"./dist/esm/ifx-switch.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_switch:()=>Switch});var _index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fc6a5751.js");const Switch=class{constructor(hostRef){(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),hostRef.$hostElement$["s-ei"]?this.internals=hostRef.$hostElement$["s-ei"]:(this.internals=hostRef.$hostElement$.attachInternals(),hostRef.$hostElement$["s-ei"]=this.internals),this.checked=!1,this.name="",this.disabled=!1,this.value=void 0,this.internalChecked=!1}async isChecked(){return this.internalChecked}componentWillLoad(){this.internalChecked=this.checked}toggleLabelGap(){const slot=this.el.shadowRoot.querySelector("slot"),container=this.el.shadowRoot.querySelector(".container");slot.assignedNodes().length?container.classList.add("gap"):container.classList.remove("gap")}componentDidLoad(){this.toggleLabelGap()}valueChanged(newValue,oldValue){newValue!==oldValue&&(this.internalChecked=newValue)}toggleSwitch(){this.disabled||(this.internalChecked=!this.internalChecked,this.internalChecked?void 0!==this.value?this.internals.setFormValue(this.value):this.internals.setFormValue("on"):this.internals.setFormValue(null),this.ifxChange.emit(this.internalChecked))}handleKeyDown(event){this.disabled||"Enter"!==event.key&&" "!==event.key||this.toggleSwitch()}formResetCallback(){this.internals.setFormValue(null)}render(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"16d5d06fafa337fd6beac9ace18322ab5727968f",class:"container",role:"switch","aria-checked":this.internalChecked?"true":"false","aria-label":this.name,onClick:()=>this.toggleSwitch(),onKeyDown:event=>this.handleKeyDown(event)},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"79dc45173c4a30f01075c4294771181bdfe18423",class:`switch__checkbox-container ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`,tabindex:"0"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8aee9283fdd91234ba4c19d37a38de74f244445a",class:"switch__checkbox-wrapper"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"8d1c55b322721fecce9b4015a91410760a8cb469",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,checked:this.internalChecked,value:`${this.value}`}),(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"34c9e0a329a4b326adbf9d5372cd43ff0c3645a5",class:`switch ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`}))),(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a27b19ca30180b0ff29c2c5bff8e59a8c98bb417",class:"switch__label-wrapper "+(this.disabled?"disabled":"")},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"502e523b69a2bb3007eb7023321904848c1e6c1a",htmlFor:"switch"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"46adc952c72ee5320bc26c1ed1e41d1ef52857af",onSlotchange:()=>this.toggleLabelGap()}))))}static get formAssociated(){return!0}get el(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{checked:["valueChanged"]}}};Switch.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.container.gap{gap:16px}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}'}}]);