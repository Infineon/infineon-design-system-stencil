import{r as t,c as s,h as a}from"./index-DPrdDKFF.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.container:focus{outline:4px solid #0A8276;outline-offset:2px}.container:focus:not(:focus-visible){outline:none}.container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.container.disabled{cursor:default;border-color:#BFBBBB}.switch_label-wrapper{margin-left:46px}.switch_label-wrapper label:hover{cursor:pointer}.switch_label-wrapper.disabled{color:#BFBBBB}.switch_checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch_checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch_checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch_checkbox-wrapper .switch.checked.disabled{cursor:default}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.container.checked{background-color:#0A8276;border-color:#0A8276}.container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',c=r,o=class{constructor(e){t(this,e),this.ifxChange=s(this,"ifxChange",7),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}valueChanged(e,i){e!==i&&(this.internalValue=e)}toggle(){this.disabled||(this.internalValue=!this.internalValue,this.ifxChange.emit(this.internalValue))}handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&this.toggle()}render(){return a("div",{key:"932b311a48fa87e8645c2c35ed108d00aaa5ef66",class:`container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,role:"switch",tabindex:"0","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggle(),onKeyDown:e=>this.handleKeyDown(e)},a("div",{key:"d371bc3cc97ffdd4d4f93f1a61ecd040825dd946",class:"switch_checkbox-wrapper"},a("input",{key:"cdec66067b8a166f8ccfef4e5ce294b8a330e75c",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),a("div",{key:"d27aa7560358c8fed1e4c97f84c0b943b0eefa23",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`})),a("div",{key:"ff1bb2f0fb32b29b6c1141686c23f15675279f3d",class:`switch_label-wrapper ${this.disabled?"disabled":""}`},a("label",{key:"bd3c53649970882a732429658e9e3d702d30b116",htmlFor:"switch"},a("slot",{key:"213f55736fe1aca4e8f338825039432496740dbc"}))))}static get watchers(){return{value:["valueChanged"]}}};o.style=c;export{o as ifx_switch};