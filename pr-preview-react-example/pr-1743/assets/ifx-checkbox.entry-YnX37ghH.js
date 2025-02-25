import{r as o,c as t,h as i,g as a}from"./index-D2z5bvvL.js";const c=':host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:top;padding:0px;gap:8px;font-family:var(--ifx-font-family)}.checkbox__container .checkbox__wrapper{box-sizing:border-box;display:flex;position:relative;justify-content:center;align-items:center;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0;align-self:flex-start}.checkbox__container .checkbox__wrapper.checkbox-m{height:24px;width:24px}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked{background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#FFFFFF}.checkbox__container .checkbox__wrapper.checked.error{background-color:#CD002F}.checkbox__container .checkbox__wrapper.checked:focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked.disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.indeterminate:before{content:"";display:block;width:70%;height:2px;background-color:#08665C;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.checkbox__container .label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;overflow-wrap:break-word;word-wrap:break-word;word-break:break-all;max-width:100%}.checkbox__container .label.label-m{font-size:1rem;line-height:1.5rem}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}',h=c,l=class{constructor(e){o(this,e),this.ifxChange=t(this,"ifxChange",7),this.ifxError=t(this,"ifxError",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.disabled=!1,this.checked=!1,this.error=!1,this.size="m",this.indeterminate=!1}handleCheckbox(){this.disabled||(this.inputElement.indeterminate?(this.internalChecked=!0,this.internalIndeterminate=!1):this.internalChecked=!this.internalChecked,this.internalChecked?this.value!==void 0?this.internals.setFormValue(this.value):this.internals.setFormValue("on"):this.internals.setFormValue(null),this.ifxChange.emit(this.internalChecked))}async isChecked(){return this.internalChecked}async toggleCheckedState(e){this.internalChecked=e}valueChanged(e,r){e!==r&&(this.internalChecked=e,this.inputElement.checked=this.internalChecked)}errorChanged(e,r){e!==r&&this.ifxError.emit(e)}indeterminateChanged(e,r){e!==r&&(this.internalIndeterminate=e,this.inputElement.indeterminate=this.internalIndeterminate)}handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.handleCheckbox(),e.preventDefault())}componentWillLoad(){this.internalChecked=this.checked,this.internalIndeterminate=this.indeterminate}componentDidRender(){this.inputElement.indeterminate=this.internalIndeterminate}formResetCallback(){this.internals.setFormValue(null)}getCheckedClassName(){return this.error?this.internalChecked?"checked error":"error":this.internalChecked?"checked":""}render(){const e=this.el.innerHTML;let r=!1;return e&&(r=!0),i("div",{key:"31159bd0afb3e2e6d4a0016d3a8f4cc249c217ac",class:"checkbox__container"},i("input",{key:"64a9ca5cdb97c2c9ddca91a38ea10aada8814e54",type:"checkbox",hidden:!0,ref:n=>this.inputElement=n,checked:this.internalChecked,onChange:this.handleCheckbox.bind(this),id:"checkbox",value:`${this.value}`,disabled:this.disabled?!0:void 0}),i("div",{key:"5bee29290bd57608e35b24717a0c4c6e49836c02",tabindex:"0",onClick:this.handleCheckbox.bind(this),onKeyDown:this.handleKeydown.bind(this),role:"checkbox","aria-checked":this.indeterminate?"mixed":this.internalChecked.toString(),"aria-disabled":this.disabled,"aria-labelledby":"label",class:`checkbox__wrapper 
          ${this.getCheckedClassName()}
        ${this.size==="m"?"checkbox-m":""}
        ${this.indeterminate?"indeterminate":""}
        ${this.disabled?"disabled":""}`},this.internalChecked&&i("ifx-icon",{key:"31bd93c0fa7b2b6a985854807b8dedfdc8b68143",icon:"check-12","aria-hidden":"true"})),r&&i("div",{key:"84d660078539acc551e7174efb9b64aa5a5c0260",id:"label",class:`label ${this.size==="m"?"label-m":""} ${this.disabled?"disabled":""} `,onClick:this.handleCheckbox.bind(this)},i("slot",{key:"efc992f0df09084731d1e072f30b495d11fee0d2"})))}static get formAssociated(){return!0}get el(){return a(this)}static get watchers(){return{checked:["valueChanged"],error:["errorChanged"],indeterminate:["indeterminateChanged"]}}};l.style=h;export{l as ifx_checkbox};
