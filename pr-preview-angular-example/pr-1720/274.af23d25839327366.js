"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[274],{274:(l,r,t)=>{t.r(r),t.d(r,{ifx_checkbox:()=>s});var o=t(6330),i=t(5028);const s=(()=>{let c=class{constructor(e){(0,i.r)(this,e),this.ifxChange=(0,i.c)(this,"ifxChange",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.disabled=!1,this.checked=!1,this.error=!1,this.size="m",this.indeterminate=!1}handleCheckbox(){this.disabled||(this.inputElement.indeterminate?(this.internalChecked=!0,this.internalIndeterminate=!1):this.internalChecked=!this.internalChecked,this.internals.setFormValue(this.internalChecked?void 0!==this.value?this.value:"on":null),this.ifxChange.emit(this.internalChecked))}isChecked(){var e=this;return(0,o.A)(function*(){return e.internalChecked})()}toggleCheckedState(e){var n=this;return(0,o.A)(function*(){n.internalChecked=e})()}valueChanged(e,n){e!==n&&(this.internalChecked=e,this.inputElement.checked=this.internalChecked)}indeterminateChanged(e,n){e!==n&&(this.internalIndeterminate=e,this.inputElement.indeterminate=this.internalIndeterminate)}handleKeydown(e){(32===e.keyCode||13===e.keyCode)&&(this.handleCheckbox(),e.preventDefault())}componentWillLoad(){this.internalChecked=this.checked,this.internalIndeterminate=this.indeterminate}componentDidRender(){this.inputElement.indeterminate=this.internalIndeterminate}formResetCallback(){this.internals.setFormValue(null)}getCheckedClassName(){return this.error?this.internalChecked?"checked error":"error":this.internalChecked?"checked":""}render(){let n=!1;return this.el.innerHTML&&(n=!0),(0,i.h)("div",{key:"42d5a5b45e19edb9ad6885c2849ec4909fb587ea",class:"checkbox__container"},(0,i.h)("input",{key:"a924fc885614c78b86d396c50665470e1c281c2f",type:"checkbox",hidden:!0,ref:h=>this.inputElement=h,checked:this.internalChecked,onChange:this.handleCheckbox.bind(this),id:"checkbox",value:`${this.value}`,disabled:!!this.disabled||void 0}),(0,i.h)("div",{key:"b39d40cdd76089d90ef783f971b3ff1eedddd16c",tabindex:"0",onClick:this.handleCheckbox.bind(this),onKeyDown:this.handleKeydown.bind(this),role:"checkbox","aria-checked":this.indeterminate?"mixed":this.internalChecked.toString(),"aria-disabled":this.disabled,"aria-labelledby":"label",class:`checkbox__wrapper \n          ${this.getCheckedClassName()}\n        ${"m"===this.size?"checkbox-m":""}\n        ${this.indeterminate?"indeterminate":""}\n        ${this.disabled?"disabled":""}`},this.internalChecked&&(0,i.h)("ifx-icon",{key:"c377c5f5a75b99a6b9b9e94b46f585e0957779bf",icon:"check-12","aria-hidden":"true"})),n&&(0,i.h)("div",{key:"eece08029794065f499efe28480f2fc2030dabd9",id:"label",class:`label ${"m"===this.size?"label-m":""} ${this.disabled?"disabled":""} `,onClick:this.handleCheckbox.bind(this)},(0,i.h)("slot",{key:"a317e5c7eedb34e245888b7f24df1cd5de633bf3"})))}static get formAssociated(){return!0}get el(){return(0,i.g)(this)}static get watchers(){return{checked:["valueChanged"],indeterminate:["indeterminateChanged"]}}};return c.style=':host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;font-family:var(--ifx-font-family)}.checkbox__container .checkbox__wrapper{box-sizing:border-box;display:flex;position:relative;justify-content:center;align-items:center;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0;align-self:flex-start}.checkbox__container .checkbox__wrapper.checkbox-m{height:24px;width:24px}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked{background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#FFFFFF}.checkbox__container .checkbox__wrapper.checked.error{background-color:#CD002F}.checkbox__container .checkbox__wrapper.checked:focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked.disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.indeterminate:before{content:"";display:block;width:70%;height:2px;background-color:#08665C;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.checkbox__container .label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;overflow-wrap:break-word;word-wrap:break-word;word-break:break-all;max-width:100%}.checkbox__container .label.label-m{font-size:1rem;line-height:1.5rem}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}',c})()}}]);