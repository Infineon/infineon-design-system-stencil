import{r as t,c as s,h as a}from"./index-DFeIjpJG.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.container:focus{outline:4px solid #0A8276;outline-offset:2px}.container:focus:not(:focus-visible){outline:none}.container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.container.disabled{cursor:default;border-color:#BFBBBB}.switch_label-wrapper{margin-left:46px}.switch_label-wrapper label:hover{cursor:pointer}.switch_label-wrapper.disabled{color:#BFBBBB}.switch_checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch_checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch_checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch_checkbox-wrapper .switch.checked.disabled{cursor:default}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.container.checked{background-color:#0A8276;border-color:#0A8276}.container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',c=r,o=class{constructor(e){t(this,e),this.ifxChange=s(this,"ifxChange",7),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}valueChanged(e,i){e!==i&&(this.internalValue=e)}toggle(){this.disabled||(this.internalValue=!this.internalValue,this.ifxChange.emit(this.internalValue))}handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&this.toggle()}render(){return a("div",{key:"161f474f57249638373b734aa8ed38009d837c51",class:`container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,role:"switch",tabindex:"0","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggle(),onKeyDown:e=>this.handleKeyDown(e)},a("div",{key:"d7f7395bd03438658540cd2c0169122887e28384",class:"switch_checkbox-wrapper"},a("input",{key:"ab7ec7eb0c44d796ba74b35d5a8bf66a758a496c",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),a("div",{key:"e01a99598db7ae3ece2f4fa4998fefca5b47ceff",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`})),a("div",{key:"46bfeb1cff6e1699a45cfbeb3fd1958b5f7a3b0e",class:`switch_label-wrapper ${this.disabled?"disabled":""}`},a("label",{key:"0440741aa3c21e7e6286d17443c29106c7554930",htmlFor:"switch"},a("slot",{key:"729883248c51db2adb2dc06854a06e1871a0b58a"}))))}static get watchers(){return{value:["valueChanged"]}}};o.style=c;export{o as ifx_switch};
