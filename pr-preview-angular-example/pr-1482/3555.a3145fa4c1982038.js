"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3555],{3555:(n,s,i)=>{i.r(s),i.d(s,{ifx_switch:()=>l});var t=i(9046);const l=(()=>{let c=class{constructor(e){(0,t.r)(this,e),this.ifxChange=(0,t.c)(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}toggleLabelGap(){const e=this.el.shadowRoot.querySelector("slot"),a=this.el.shadowRoot.querySelector(".container");e.assignedNodes().length?a.classList.add("gap"):a.classList.remove("gap")}componentDidLoad(){this.toggleLabelGap()}valueChanged(e,a){e!==a&&(this.internalValue=e)}toggleSwitch(){this.disabled||(this.internalValue=!this.internalValue,this.internals.setFormValue(this.internalValue?"on":null),this.ifxChange.emit(this.internalValue))}handleKeyDown(e){this.disabled||("Enter"===e.key||" "===e.key)&&this.toggleSwitch()}formResetCallback(){this.internals.setFormValue(null)}render(){return(0,t.h)("div",{key:"e29eb5e59895dc96fcbc21825d8f81055f9e85f7",class:"container",role:"switch","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggleSwitch(),onKeyDown:e=>this.handleKeyDown(e)},(0,t.h)("div",{key:"a729256edb9a128f8299ad6ebfe5d183a88b9cf2",class:`switch__checkbox-container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,tabindex:"0"},(0,t.h)("div",{key:"432cd4e73982447dee3a5627cf1ac5604e0455d6",class:"switch__checkbox-wrapper"},(0,t.h)("input",{key:"607789a368046ee122b8af1ca10e1a90fbc464a0",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),(0,t.h)("div",{key:"45ec94f9a2ed95f13bf5953a0acbee2a520daf53",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`}))),(0,t.h)("div",{key:"9c75e2876fc42e62f2788733c649a2280409c1dc",class:"switch__label-wrapper "+(this.disabled?"disabled":"")},(0,t.h)("label",{key:"947aff934aa7c0240577a25a518b73ab6965c083",htmlFor:"switch"},(0,t.h)("slot",{key:"c1466dbec706753c608a1faaa4cfffde67a2a8b7",onSlotchange:()=>this.toggleLabelGap()}))))}static get formAssociated(){return!0}get el(){return(0,t.g)(this)}static get watchers(){return{value:["valueChanged"]}}};return c.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.container.gap{gap:16px}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',c})()}}]);