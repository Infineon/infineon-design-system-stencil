import{r as t,c as s,h as a}from"./index-DRGXJ72N.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.container:focus{outline:4px solid #0A8276;outline-offset:2px}.container:focus:not(:focus-visible){outline:none}.container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.container.disabled{cursor:default;border-color:#BFBBBB}.switch_label-wrapper{margin-left:46px}.switch_label-wrapper label:hover{cursor:pointer}.switch_label-wrapper.disabled{color:#BFBBBB}.switch_checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch_checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch_checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch_checkbox-wrapper .switch.checked.disabled{cursor:default}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.container.checked{background-color:#0A8276;border-color:#0A8276}.container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',o=r,l=class{constructor(e){t(this,e),this.ifxChange=s(this,"ifxChange",7),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}valueChanged(e,i){e!==i&&(this.internalValue=e)}toggle(){this.disabled||(this.internalValue=!this.internalValue,this.ifxChange.emit(this.internalValue))}handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&this.toggle()}render(){return a("div",{key:"dbd6920ef8451b6b25c479290087fe162e656845",class:`container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,role:"switch",tabindex:"0","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggle(),onKeyDown:e=>this.handleKeyDown(e)},a("div",{key:"ed4dbf442781415971e8759049058335c720aae8",class:"switch_checkbox-wrapper"},a("input",{key:"e31afb5b25aac765d55e65f6c392aa271bc349f1",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),a("div",{key:"e0aae69a246a7ea683714778600121a7856add47",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`})),a("div",{key:"51b60b8b6b5720a9dd09fdb4bff28b038771e796",class:`switch_label-wrapper ${this.disabled?"disabled":""}`},a("label",{key:"daeb7fe366f9bd22e1a0b3ceffbe7fb3fd3cf321",htmlFor:"switch"},a("slot",{key:"5b86c0925caef82ee0dd7f715edb20a4d8081c6a"}))))}static get watchers(){return{value:["valueChanged"]}}};l.style=o;export{l as ifx_switch};
