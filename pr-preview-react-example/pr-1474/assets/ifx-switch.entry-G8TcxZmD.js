import{r as a,c as s,h as t,g as c}from"./index-ohjoH_II.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.container.gap{gap:16px}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',l=o,r=class{constructor(e){a(this,e),this.ifxChange=s(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}toggleLabelGap(){const e=this.el.shadowRoot.querySelector("slot"),i=this.el.shadowRoot.querySelector(".container");e.assignedNodes().length?i.classList.add("gap"):i.classList.remove("gap")}componentDidLoad(){this.toggleLabelGap()}valueChanged(e,i){e!==i&&(this.internalValue=e)}toggleSwitch(){this.disabled||(this.internalValue=!this.internalValue,this.internals.setFormValue(this.internalValue?"on":null),this.ifxChange.emit(this.internalValue))}handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&this.toggleSwitch()}formResetCallback(){this.internals.setFormValue(null)}render(){return t("div",{key:"af360aec63124d30a9c09685cd3b3ce305460e19",class:"container",role:"switch","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggleSwitch(),onKeyDown:e=>this.handleKeyDown(e)},t("div",{key:"e959a688905f8d6a737099de0c9877f2fe3001bc",class:`switch__checkbox-container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,tabindex:"0"},t("div",{key:"32008d142b5333e146a5f4090942d8e223ba92f3",class:"switch__checkbox-wrapper"},t("input",{key:"a685a957b743ec3bfd4ddef2e41271a50ad24840",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),t("div",{key:"5331077f204719310364152f8c7d6d6a20c46f30",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`}))),t("div",{key:"b17b7dbd9e3876d3a56c04ba457cfcb9e4084b1d",class:`switch__label-wrapper ${this.disabled?"disabled":""}`},t("label",{key:"8c81cab9d13b1fc0ba5b70bb93490e6a62e5e021",htmlFor:"switch"},t("slot",{key:"b28f82355779f918ef491e3d25bdb4b61d4b92e2",onSlotchange:()=>this.toggleLabelGap()}))))}static get formAssociated(){return!0}get el(){return c(this)}static get watchers(){return{value:["valueChanged"]}}};r.style=l;export{r as ifx_switch};
