import{r as s,c,h as t,g as a}from"./index-DYN5zvyx.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.container.gap{gap:16px}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',n=o,r=class{constructor(e){s(this,e),this.ifxChange=c(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.checked=!1,this.name="",this.disabled=!1,this.internalChecked=!1}async isChecked(){return this.internalChecked}componentWillLoad(){this.internalChecked=this.checked}toggleLabelGap(){const e=this.el.shadowRoot.querySelector("slot"),i=this.el.shadowRoot.querySelector(".container");e.assignedNodes().length?i.classList.add("gap"):i.classList.remove("gap")}componentDidLoad(){this.toggleLabelGap()}valueChanged(e,i){e!==i&&(this.internalChecked=e)}toggleSwitch(){this.disabled||(this.internalChecked=!this.internalChecked,this.internalChecked?this.value!==void 0?this.internals.setFormValue(this.value):this.internals.setFormValue("on"):this.internals.setFormValue(null),this.ifxChange.emit(this.internalChecked))}handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&this.toggleSwitch()}formResetCallback(){this.internals.setFormValue(null)}render(){return t("div",{key:"de6389b77c207826d77a570abe5478c6367d1a2f",class:"container",role:"switch","aria-checked":this.internalChecked?"true":"false","aria-label":this.name,onClick:()=>this.toggleSwitch(),onKeyDown:e=>this.handleKeyDown(e)},t("div",{key:"1106e7915d271968cfb7e492416e4c4d3880c79f",class:`switch__checkbox-container ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`,tabindex:"0"},t("div",{key:"28e9a3a6b19b15e0bf7728de60d0096b0105e479",class:"switch__checkbox-wrapper"},t("input",{key:"707c0926234f0efd3e89add4de113a60d93fa0f6",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,checked:this.internalChecked,value:`${this.value}`}),t("div",{key:"c49f39e736dedca763a5e64c244150511002b362",class:`switch ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`}))),t("div",{key:"11b0ea462a831639c84aa58cfaffed801881dc6a",class:`switch__label-wrapper ${this.disabled?"disabled":""}`},t("label",{key:"dc3fd52e702f0630283d871fff9b47184db4e535",htmlFor:"switch"},t("slot",{key:"4b77fbdea92c23c4d056b71ad5ac889f24e34277",onSlotchange:()=>this.toggleLabelGap()}))))}static get formAssociated(){return!0}get el(){return a(this)}static get watchers(){return{checked:["valueChanged"]}}};r.style=n;export{r as ifx_switch};
