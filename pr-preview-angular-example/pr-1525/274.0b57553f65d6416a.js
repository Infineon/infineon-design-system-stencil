"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[274],{274:(h,t,r)=>{r.r(t),r.d(t,{ifx_checkbox:()=>c});var o=r(6330),n=r(9046);const c=(()=>{let a=class{constructor(e){(0,n.r)(this,e),this.ifxChange=(0,n.c)(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.disabled=!1,this.value=!1,this.error=!1,this.size="m",this.internalValue=void 0,this.indeterminate=!1,this.internalIndeterminate=void 0}handleCheckbox(){this.disabled||(this.inputElement.indeterminate?(this.internalValue=!0,this.internalIndeterminate=!1):this.internalValue=!this.internalValue,this.internals.setFormValue(this.internalValue?"on":null),this.ifxChange.emit(this.internalValue))}toggleCheckedState(e){var i=this;return(0,o.A)(function*(){i.internalValue=e})()}valueChanged(e,i){e!==i&&(this.internalValue=e,this.inputElement.checked=this.internalValue)}indeterminateChanged(e,i){e!==i&&(this.internalIndeterminate=e,this.inputElement.indeterminate=this.internalIndeterminate)}handleKeydown(e){(32===e.keyCode||13===e.keyCode)&&(this.handleCheckbox(),e.preventDefault())}componentWillLoad(){this.internalValue=this.value,this.internalIndeterminate=this.indeterminate}componentDidRender(){this.inputElement.indeterminate=this.internalIndeterminate}formResetCallback(){this.internals.setFormValue(null)}getCheckedClassName(){return this.error?this.internalValue?"checked error":"error":this.internalValue?"checked":""}render(){let i=!1;return this.el.innerHTML&&(i=!0),(0,n.h)("div",{key:"439db7d01a0d01c2dd61a42a367a00d38996c174",class:"checkbox__container"},(0,n.h)("input",{key:"90aaee524c2348ad61731d8da4a245f835259c98",type:"checkbox",hidden:!0,ref:s=>this.inputElement=s,checked:this.internalValue,onChange:this.handleCheckbox.bind(this),id:"checkbox",value:`${this.internalValue}`}),(0,n.h)("div",{key:"3e3418c09f378f78beb3644bdebbefa720bcfda5",tabindex:"0",onClick:this.handleCheckbox.bind(this),onKeyDown:this.handleKeydown.bind(this),role:"checkbox","aria-value":this.internalValue,"aria-disabled":this.disabled,"aria-labelledby":"label",class:`checkbox__wrapper \n          ${this.getCheckedClassName()}\n        ${"m"===this.size?"checkbox-m":""}\n        ${this.indeterminate?"indeterminate":""}\n        ${this.disabled?"disabled":""}`},this.internalValue&&(0,n.h)("ifx-icon",{key:"8c6f977db28fc822007d234745d5a0ac7d123c3a",icon:"check-12"})),i&&(0,n.h)("div",{key:"fedd6c2f4f61178e462c1d0c1b51ae8df1213052",id:"label",class:`label ${"m"===this.size?"label-m":""} ${this.disabled?"disabled":""} `,onClick:this.handleCheckbox.bind(this)},(0,n.h)("slot",{key:"c95cdcfbfbb8e89714eed3fafbc4303391c91721"})))}static get formAssociated(){return!0}get el(){return(0,n.g)(this)}static get watchers(){return{value:["valueChanged"],indeterminate:["indeterminateChanged"]}}};return a.style=':host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;font-family:var(--ifx-font-family)}.checkbox__container .checkbox__wrapper{box-sizing:border-box;display:flex;position:relative;justify-content:center;align-items:center;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0;align-self:flex-start}.checkbox__container .checkbox__wrapper.checkbox-m{height:24px;width:24px}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked{background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#FFFFFF}.checkbox__container .checkbox__wrapper.checked.error{background-color:#CD002F}.checkbox__container .checkbox__wrapper.checked:focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked.disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.indeterminate:before{content:"";display:block;width:70%;height:2px;background-color:#08665C;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.checkbox__container .label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;overflow-wrap:break-word;word-wrap:break-word;word-break:break-all;max-width:100%}.checkbox__container .label.label-m{font-size:1rem;line-height:1.5rem}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}',a})()}}]);