import{r as s,c,h as t,g as a}from"./index-MwURpkYO.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.container.gap{gap:16px}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',n=o,r=class{constructor(e){s(this,e),this.ifxChange=c(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.checked=!1,this.name="",this.disabled=!1,this.value=void 0,this.internalChecked=!1}async isChecked(){return this.internalChecked}componentWillLoad(){this.internalChecked=this.checked}toggleLabelGap(){const e=this.el.shadowRoot.querySelector("slot"),i=this.el.shadowRoot.querySelector(".container");e.assignedNodes().length?i.classList.add("gap"):i.classList.remove("gap")}componentDidLoad(){this.toggleLabelGap()}valueChanged(e,i){e!==i&&(this.internalChecked=e)}toggleSwitch(){this.disabled||(this.internalChecked=!this.internalChecked,this.internalChecked?this.value!==void 0?this.internals.setFormValue(this.value):this.internals.setFormValue("on"):this.internals.setFormValue(null),this.ifxChange.emit(this.internalChecked))}handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&this.toggleSwitch()}formResetCallback(){this.internals.setFormValue(null)}render(){return t("div",{key:"6b56f571bf38be441aed96967afad78b5a8c1218",class:"container",role:"switch","aria-checked":this.internalChecked?"true":"false","aria-label":this.name,onClick:()=>this.toggleSwitch(),onKeyDown:e=>this.handleKeyDown(e)},t("div",{key:"54c0602b247bacae3bc8112515ac348e723c2d4a",class:`switch__checkbox-container ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`,tabindex:"0"},t("div",{key:"ea15edde0e7f03cc58d5ccf1b57d5bf10670f467",class:"switch__checkbox-wrapper"},t("input",{key:"c072e35bceda6b9288cea93af77f10c5462831a4",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,checked:this.internalChecked,value:`${this.value}`}),t("div",{key:"0278ce31ef374e478cae26befe6fbd95be087ded",class:`switch ${this.internalChecked?"checked":""} ${this.disabled?"disabled":""}`}))),t("div",{key:"e8de289b1b12ea9de9d7b5b076c9e258eeeba733",class:`switch__label-wrapper ${this.disabled?"disabled":""}`},t("label",{key:"335b0fca0d94f0ac43dee1571a4866d4f75fb70b",htmlFor:"switch"},t("slot",{key:"d34f2450a877604ab63b6a6d2125810f2a877965",onSlotchange:()=>this.toggleLabelGap()}))))}static get formAssociated(){return!0}get el(){return a(this)}static get watchers(){return{checked:["valueChanged"]}}};r.style=n;export{r as ifx_switch};
