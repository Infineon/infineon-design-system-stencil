"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3555],{3555:(l,a,i)=>{i.r(a),i.d(a,{ifx_switch:()=>c});var t=i(3639);const c=class{constructor(e){(0,t.r)(this,e),this.ifxChange=(0,t.c)(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}componentDidLoad(){this.el.shadowRoot.querySelector("slot").assignedNodes().length&&(this.el.shadowRoot.querySelector(".container").style.gap="16px")}valueChanged(e,s){e!==s&&(this.internalValue=e)}toggle(){this.disabled||(this.internalValue=!this.internalValue,this.internals.setFormValue(this.internalValue?"on":null),this.ifxChange.emit(this.internalValue))}handleKeyDown(e){this.disabled||("Enter"===e.key||" "===e.key)&&this.toggle()}formResetCallback(){this.internals.setFormValue(null)}render(){return(0,t.h)("div",{key:"4eca9413263c92a5652b44e52bc8ae01122661e1",class:"container",role:"switch","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggle(),onKeyDown:e=>this.handleKeyDown(e)},(0,t.h)("div",{key:"cc7111c8aa2f646d74003bffc38440871a1292df",class:`switch__checkbox-container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,tabindex:"0"},(0,t.h)("div",{key:"8dcb3999e69f4143c922ad21ca358746c601acef",class:"switch__checkbox-wrapper"},(0,t.h)("input",{key:"ad97b62c69dd58e61d30211cd5c2f6b40619890e",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),(0,t.h)("div",{key:"ce4aa5c03372d6087631b209664002501ec93cfe",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`}))),(0,t.h)("div",{key:"6a573e54dbae5c5474bdf9d5807bb11fa2dd36ea",class:"switch__label-wrapper "+(this.disabled?"disabled":"")},(0,t.h)("label",{key:"a7bbdf7023608dbad0848891fd50338521532bdb",htmlFor:"switch"},(0,t.h)("slot",{key:"33db1ecfc48bd6c800d444c17b3632e7ac4a8dc1"}))))}static get formAssociated(){return!0}get el(){return(0,t.g)(this)}static get watchers(){return{value:["valueChanged"]}}};c.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}'}}]);