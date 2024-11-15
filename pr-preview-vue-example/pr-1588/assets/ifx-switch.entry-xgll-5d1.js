import{r as s,c,h as t,g as a}from"./index-5SFu7PY4.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.container.gap{gap:16px}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',n=o,r=class{constructor(e){s(this,e),this.ifxChange=c(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.checked=!1,this.name="",this.disabled=!1,this.value=void 0,this.internalChecked=!1}async isChecked(){return this.internalChecked}componentWillLoad(){this.internalChecked=this.checked}toggleLabelGap(){const e=this.el.shadowRoot.querySelector("slot"),i=this.el.shadowRoot.querySelector(".container");e.assignedNodes().length?i.classList.add("gap"):i.classList.remove("gap")}componentDidLoad(){this.toggleLabelGap()}valueChanged(e,i){e!==i&&(this.internalChecked=e)}toggleSwitch(){this.disabled||(this.internalChecked=!this.internalChecked,this.internalChecked?this.value!==void 0?this.internals.setFormValue(this.value):this.internals.setFormValue("on"):this.internals.setFormValue(null),this.ifxChange.emit(this.internalChecked))}handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&this.toggleSwitch()}formResetCallback(){this.internals.setFormValue(null)}render(){return t("div",{key:"7e20607f16e9fcd47e30f1b851d5dddbaf90514a",class:"container",role:"switch","aria-checked":this.internalChecked?"true":"false","aria-label":this.name,onClick:()=>this.toggleSwitch(),onKeyDown:e=>this.handleKeyDown(e)},t("div",{key:"1154186734d042176d5d5843650b0cde4890be4c",class:`switch__checkbox-container ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`,tabindex:"0"},t("div",{key:"b495c8cd62b3bd6a577f9942ddb88f7dbbc7ae29",class:"switch__checkbox-wrapper"},t("input",{key:"ba68653e86a3f801a77766625c2f303ba7098c9f",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,checked:this.internalChecked,value:`${this.value}`}),t("div",{key:"925e50cb39c9cdbef596db82a3f079471c7ef4fb",class:`switch ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`}))),t("div",{key:"724eb84c9b3994d60339162392fe7df7a5dee5fe",class:`switch__label-wrapper ${this.disabled?"disabled":""}`},t("label",{key:"81b1b498725340c17cf069502fa4befcc8a3697b",htmlFor:"switch"},t("slot",{key:"3b3800a830e33c76a86adac325ba2cf6e57ecd44",onSlotchange:()=>this.toggleLabelGap()}))))}static get formAssociated(){return!0}get el(){return a(this)}static get watchers(){return{checked:["valueChanged"]}}};r.style=n;export{r as ifx_switch};
