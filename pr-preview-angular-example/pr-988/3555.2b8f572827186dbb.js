"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3555],{3555:(n,s,a)=>{a.r(s),a.d(s,{ifx_switch:()=>l});var t=a(9362);const l=(()=>{let c=class{constructor(e){(0,t.r)(this,e),this.ifxChange=(0,t.c)(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}toggleLabelGap(){const e=this.el.shadowRoot.querySelector("slot"),i=this.el.shadowRoot.querySelector(".container");e.assignedNodes().length?i.classList.add("gap"):i.classList.remove("gap")}componentDidLoad(){this.toggleLabelGap()}valueChanged(e,i){e!==i&&(this.internalValue=e)}toggleSwitch(){this.disabled||(this.internalValue=!this.internalValue,this.internals.setFormValue(this.internalValue?"on":null),this.ifxChange.emit(this.internalValue))}handleKeyDown(e){this.disabled||("Enter"===e.key||" "===e.key)&&this.toggleSwitch()}formResetCallback(){this.internals.setFormValue(null)}render(){return(0,t.h)("div",{key:"2c94c5360c81211dc3f4afa6599cac1d86778a0f",class:"container",role:"switch","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggleSwitch(),onKeyDown:e=>this.handleKeyDown(e)},(0,t.h)("div",{key:"d49a009d6dafcda184704dc1f9081059f26837b6",class:`switch__checkbox-container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,tabindex:"0"},(0,t.h)("div",{key:"ba7babef51e57608c822720a703b36e2bcb83713",class:"switch__checkbox-wrapper"},(0,t.h)("input",{key:"2e8a0c94012fad31d3b89903096c9a81d5f9c021",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),(0,t.h)("div",{key:"2573011bf02dbafe27c1205d87d0e0c5431d7a93",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`}))),(0,t.h)("div",{key:"c012cc4f4f8747da17268eb34a87e379cfb13aef",class:"switch__label-wrapper "+(this.disabled?"disabled":"")},(0,t.h)("label",{key:"bb66f9fcdde437b0343323aa7316b04c035bad78",htmlFor:"switch"},(0,t.h)("slot",{key:"2447f25db79a5a60d5a3a37c2514c738b05d0d27",onSlotchange:()=>this.toggleLabelGap()}))))}static get formAssociated(){return!0}get el(){return(0,t.g)(this)}static get watchers(){return{value:["valueChanged"]}}};return c.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.container.gap{gap:16px}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',c})()}}]);