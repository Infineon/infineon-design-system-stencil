import{r as a,c as s,h as t,g as c}from"./index-Cirexk2R.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block;user-select:none}.container{display:flex;flex-direction:row;align-items:center}.container.gap{gap:16px}.switch__checkbox-container{padding:4px;display:flex;align-items:center;position:relative;width:32px;height:16px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.switch__checkbox-container:focus{outline:4px solid #0A8276;outline-offset:2px}.switch__checkbox-container:focus:not(:focus-visible){outline:none}.switch__checkbox-container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.switch__checkbox-container.disabled{cursor:default;border-color:#BFBBBB}.switch__label-wrapper label:hover{cursor:pointer}.switch__label-wrapper.disabled{color:#BFBBBB}.switch__checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease, background-color 0.3s ease}.switch__checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch__checkbox-wrapper .switch.checked{transform:translateX(16px);background-color:#FFFFFF}.switch__checkbox-wrapper .switch.checked.disabled{cursor:default}.switch__checkbox-container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch__checkbox-container.checked{background-color:#0A8276;border-color:#0A8276}.switch__checkbox-container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}',l=o,r=class{constructor(e){a(this,e),this.ifxChange=s(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}toggleLabelGap(){const e=this.el.shadowRoot.querySelector("slot"),i=this.el.shadowRoot.querySelector(".container");e.assignedNodes().length?i.classList.add("gap"):i.classList.remove("gap")}componentDidLoad(){this.toggleLabelGap()}valueChanged(e,i){e!==i&&(this.internalValue=e)}toggleSwitch(){this.disabled||(this.internalValue=!this.internalValue,this.internals.setFormValue(this.internalValue?"on":null),this.ifxChange.emit(this.internalValue))}handleKeyDown(e){this.disabled||(e.key==="Enter"||e.key===" ")&&this.toggleSwitch()}formResetCallback(){this.internals.setFormValue(null)}render(){return t("div",{key:"ee447274de27df2811278e310c509340bb4adaf9",class:"container",role:"switch","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggleSwitch(),onKeyDown:e=>this.handleKeyDown(e)},t("div",{key:"319995f749964f08cd1920aa8de56c7f752c6e54",class:`switch__checkbox-container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,tabindex:"0"},t("div",{key:"12897368cfdd7edb6464887d5dafbc433e03b9bf",class:"switch__checkbox-wrapper"},t("input",{key:"74b472b3b9479fb3555080fa38f962799f7ef0fd",type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),t("div",{key:"d346658f570bcdbaa8e645feabcf255cd0b91beb",class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`}))),t("div",{key:"b92082346d8c99c8a15e85337a20ae673b326a18",class:`switch__label-wrapper ${this.disabled?"disabled":""}`},t("label",{key:"54901bdadb9bb35d331c3da9e6e0ff623ca77873",htmlFor:"switch"},t("slot",{key:"5e1a2ff668e0956ff54c86da5fefc8a46d9a301c",onSlotchange:()=>this.toggleLabelGap()}))))}static get formAssociated(){return!0}get el(){return c(this)}static get watchers(){return{value:["valueChanged"]}}};r.style=l;export{r as ifx_switch};
