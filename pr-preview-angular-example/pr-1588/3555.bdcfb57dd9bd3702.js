"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3555],{3555:(l,c,i)=>{i.r(c),i.d(c,{ifx_switch:()=>r});var a=i(6330),t=i(581);const r=(()=>{let n=class{constructor(e){(0,t.r)(this,e),this.ifxChange=(0,t.c)(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.checked=!1,this.name="",this.disabled=!1,this.value=void 0,this.internalChecked=!1}isChecked(){var e=this;return(0,a.A)(function*(){return e.internalChecked})()}componentWillLoad(){this.internalChecked=this.checked}toggleLabelGap(){const e=this.el.shadowRoot.querySelector("slot"),s=this.el.shadowRoot.querySelector(".container");e.assignedNodes().length?s.classList.add("gap"):s.classList.remove("gap")}componentDidLoad(){this.toggleLabelGap()}valueChanged(e,s){e!==s&&(this.internalChecked=e)}toggleSwitch(){this.disabled||(this.internalChecked=!this.internalChecked,this.internals.setFormValue(this.internalChecked?void 0!==this.value?this.value:"on":null),this.ifxChange.emit(this.internalChecked))}handleKeyDown(e){this.disabled||("Enter"===e.key||" "===e.key)&&this.toggleSwitch()}formResetCallback(){this.internals.setFormValue(null)}render(){return(0,t.h)("div",{key:"4d7182ffc4c5b1bb2ef58c447cf50922383760e5",class:"container",role:"switch","aria-checked":this.internalChecked?"true":"false","aria-label":this.name,onClick:()=>this.toggleSwitch(),onKeyDown:e=>this.handleKeyDown(e)},(0,t.h)("div",{key:"c2d615573331db75b4e8cf52c3c930ce92eb6853",class:`switch__checkbox-container ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`,tabindex:"0"},(0,t.h)("div",{key:"48d110364da7516d425518248ede3a8763d54c1f",class:"switch__checkbox-wrapper"},(0,t.h)("input",{key:"ada8faffbff025b765f327ebca5037ab709e0ae6",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,checked:this.internalChecked,value:`${this.value}`}),(0,t.h)("div",{key:"a88fc4fb508cbb601857300c3d304d4cfb187441",class:`switch ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`}))),(0,t.h)("div",{key:"35d5be4d0e7185b530324d8db4ae88389a44b08f",class:"switch__label-wrapper "+(this.disabled?"disabled":"")},(0,t.h)("label",{key:"30317a1032fc6e687903654cd6d3def568274284",htmlFor:"switch"},(0,t.h)("slot",{key:"78d9c3db9af7d0bebde5a036729cd2010cf62771",onSlotchange:()=>this.toggleLabelGap()}))))}static get formAssociated(){return!0}get el(){return(0,t.g)(this)}static get watchers(){return{checked:["valueChanged"]}}};return n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.container.gap{gap:16px}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',n})()}}]);