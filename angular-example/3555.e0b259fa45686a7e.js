"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3555],{3555:(n,t,i)=>{i.r(t),i.d(t,{ifx_switch:()=>s});var a=i(3639);const s=class{constructor(e){(0,a.r)(this,e),this.ifxChange=(0,a.c)(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}valueChanged(e,r){e!==r&&(this.internalValue=e)}toggle(){this.disabled||(this.internalValue=!this.internalValue,this.internals.setFormValue(this.internalValue?"on":null),this.ifxChange.emit(this.internalValue))}handleKeyDown(e){this.disabled||("Enter"===e.key||" "===e.key)&&this.toggle()}formResetCallback(){this.internals.setFormValue(null)}render(){return(0,a.h)("div",{key:"fd685464fffb51437d4556bb026c8488d331a333",class:`container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,role:"switch",tabindex:"0","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggle(),onKeyDown:e=>this.handleKeyDown(e)},(0,a.h)("div",{key:"babbee7a930ba1fa0d505cdbe2444790f65a3513",class:"switch_checkbox-wrapper"},(0,a.h)("input",{key:"cc0ed54ed1f9510f8e213cee6a3b654b67ec0343",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),(0,a.h)("div",{key:"a02e313f62493929e921c04dbb3bd108ac797891",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`})),(0,a.h)("div",{key:"5c9a06bba5f2b5e43c854b9ce51978644b45e9cf",class:"switch_label-wrapper "+(this.disabled?"disabled":"")},(0,a.h)("label",{key:"5d3344588860e0a94a98b27d156f665da2df5f36",htmlFor:"switch"},(0,a.h)("slot",{key:"e730a88407e2a211a27aa468d317a5c42040f1f7"}))))}static get formAssociated(){return!0}static get watchers(){return{value:["valueChanged"]}}};s.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.container:focus{outline:4px solid #0A8276;outline-offset:2px}.container:focus:not(:focus-visible){outline:none}.container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.container.disabled{cursor:default;border-color:#BFBBBB}.switch_label-wrapper{margin-left:46px}.switch_label-wrapper label:hover{cursor:pointer}.switch_label-wrapper.disabled{color:#BFBBBB}.switch_checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch_checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch_checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch_checkbox-wrapper .switch.checked.disabled{cursor:default}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.container.checked{background-color:#0A8276;border-color:#0A8276}.container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}'}}]);