"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3157],{3157:(l,s,a)=>{a.r(s),a.d(s,{ifx_switch:()=>t});var e=a(1401);const t=class{constructor(i){(0,e.r)(this,i),this.ifxChange=(0,e.c)(this,"ifxChange",7),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}valueChanged(i,r){i!==r&&(this.internalValue=i)}toggle(){this.disabled||(this.internalValue=!this.internalValue,this.ifxChange.emit(this.internalValue))}handleKeyDown(i){this.disabled||("Enter"===i.key||" "===i.key)&&this.toggle()}render(){return(0,e.h)("div",{key:"d35bab84bdf5bc3ba4367364d0d494b55a1e73f3",class:`container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,role:"switch",tabindex:"0","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggle(),onKeyDown:i=>this.handleKeyDown(i)},(0,e.h)("div",{key:"f75ad5db3371f9bcfbe72e4a92203c92f1ed9e24",class:"switch_checkbox-wrapper"},(0,e.h)("input",{key:"38191c626429371e5943cbffe017917ac8c3e2f8",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),(0,e.h)("div",{key:"08ca2c3fbf4217f321cd9e433b4d74c118d21629",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`})),(0,e.h)("div",{key:"5f9736a9f3eb6c0e6205779ef87ee6e792677616",class:"switch_label-wrapper "+(this.disabled?"disabled":"")},(0,e.h)("label",{key:"8a9f801ec537c91fbf7355b2fe59b72b06efe5b0",htmlFor:"switch"},(0,e.h)("slot",{key:"4a96d28a13b2e2d36099500c8309c2e1a7f71482"}))))}static get watchers(){return{value:["valueChanged"]}}};t.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.container:focus{outline:4px solid #0A8276;outline-offset:2px}.container:focus:not(:focus-visible){outline:none}.container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.container.disabled{cursor:default;border-color:#BFBBBB}.switch_label-wrapper{margin-left:46px}.switch_label-wrapper label:hover{cursor:pointer}.switch_label-wrapper.disabled{color:#BFBBBB}.switch_checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch_checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch_checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch_checkbox-wrapper .switch.checked.disabled{cursor:default}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.container.checked{background-color:#0A8276;border-color:#0A8276}.container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}'}}]);