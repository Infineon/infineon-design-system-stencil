"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1429],{"./dist/esm/ifx-switch.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_switch:()=>Switch});var _index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-ae19f8dd.js");const Switch=class{constructor(hostRef){(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.value=!1,this.name="",this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}valueChanged(newValue,oldValue){newValue!==oldValue&&(this.internalValue=newValue)}toggle(){this.internalValue=!this.internalValue,this.ifxChange.emit(this.internalValue)}handleKeyDown(event){"Enter"!==event.key&&" "!==event.key||this.toggle()}render(){return console.log("yaaay"),(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"container "+(this.internalValue?"checked":""),role:"switch",tabindex:"0","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggle(),onKeyDown:event=>this.handleKeyDown(event)},(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"checkbox",hidden:!0,name:this.name,checked:this.internalValue,value:`${this.internalValue}`}),(0,_index_ae19f8dd_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"switch "+(this.internalValue?"checked":"")}))}static get watchers(){return{value:["valueChanged"]}}};Switch.style=":host{display:inline-block;user-select:none}.container{display:inline-block;position:relative;width:50px;height:25px;background-color:#ffffff;border:1px solid #7d6f72;border-radius:25px;cursor:pointer;transition:background-color 0.3s ease}.switch{position:absolute;top:2px;left:2px;width:21px;height:21px;background-color:#7d6f72;border-radius:50%;transition:transform 0.3s ease}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch.checked{transform:translateX(25px);background-color:#ffffff}.container.checked{background-color:#378375;border-color:#378375}"}}]);