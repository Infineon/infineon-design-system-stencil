import{r as s,c as a,h as t,g as c}from"./index-D4bz33iy.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.container.gap{gap:16px}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',n=o,r=class{constructor(e){s(this,e),this.ifxChange=a(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.checked=!1,this.name="",this.disabled=!1,this.value=void 0,this.internalChecked=!1}async isChecked(){return this.internalChecked}componentWillLoad(){this.internalChecked=this.checked}toggleLabelGap(){const e=this.el.shadowRoot.querySelector("slot"),i=this.el.shadowRoot.querySelector(".container");e.assignedNodes().length?i.classList.add("gap"):i.classList.remove("gap")}componentDidLoad(){this.toggleLabelGap()}valueChanged(e,i){e!==i&&(this.internalChecked=e)}toggleSwitch(){this.disabled||(this.internalChecked=!this.internalChecked,this.internalChecked?this.value!==void 0?this.internals.setFormValue(this.value):this.internals.setFormValue("on"):this.internals.setFormValue(null),this.ifxChange.emit(this.internalChecked))}handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&this.toggleSwitch()}formResetCallback(){this.internals.setFormValue(null)}render(){return t("div",{key:"1e827ee439dc9c72568afff02672329bda0c0727",class:"container",role:"switch","aria-checked":this.internalChecked?"true":"false","aria-label":this.name,onClick:()=>this.toggleSwitch(),onKeyDown:e=>this.handleKeyDown(e)},t("div",{key:"f079b1a4b4e5e3d5a04408a670fee224fc68b7a2",class:`switch__checkbox-container ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`,tabindex:"0"},t("div",{key:"22b6bc971535baa08aeada6ade8d3dae9c08ab71",class:"switch__checkbox-wrapper"},t("input",{key:"3400e9a7c97c04a67035fece29c5e747fd38cf01",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,checked:this.internalChecked,value:`${this.value}`}),t("div",{key:"bfcfade97ba0a33bab6b055bb64051682b540101",class:`switch ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`}))),t("div",{key:"61e98f82ade442208a33c5baddd43b9354823be8",class:`switch__label-wrapper ${this.disabled?"disabled":""}`},t("label",{key:"32b22f0b22b648e23603ab0c2d66eeddfe9d01b0",htmlFor:"switch"},t("slot",{key:"afb1897589a07fa0cf5ad4bbb806da4c9f6f4147",onSlotchange:()=>this.toggleLabelGap()}))))}static get formAssociated(){return!0}get el(){return c(this)}static get watchers(){return{checked:["valueChanged"]}}};r.style=n;export{r as ifx_switch};
