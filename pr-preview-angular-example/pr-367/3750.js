"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[3750],{3750:(t,n,i)=>{i.r(n),i.d(n,{ifx_checkbox:()=>l});var r=i(4881);const l=class{constructor(e){(0,r.r)(this,e),this.ifxChange=(0,r.c)(this,"ifxChange",7),this.disabled=!1,this.value=!1,this.error=!1,this.name="",this.internalValue=void 0}handleCheckbox(){this.disabled||(this.internalValue=!this.internalValue,this.inputElement.checked=this.internalValue,this.ifxChange.emit(this.internalValue))}valueChanged(e,o){e!==o&&(this.internalValue=e,this.inputElement.checked=this.internalValue)}handleKeydown(e){(32===e.keyCode||13===e.keyCode)&&(this.handleCheckbox(),e.preventDefault())}componentWillLoad(){this.internalValue=this.internalValue||!1}render(){let o=!1;return this.el.innerHTML&&(o=!0),(0,r.h)("div",{class:"checkbox__container"},(0,r.h)("input",{type:"checkbox",hidden:!0,ref:a=>this.inputElement=a,name:this.name,checked:this.internalValue,onChange:this.handleCheckbox.bind(this),id:"checkbox",value:`${this.internalValue}`}),(0,r.h)("div",{tabindex:"0",onClick:this.handleCheckbox.bind(this),onKeyDown:this.handleKeydown.bind(this),role:"checkbox","aria-value":this.internalValue,"aria-disabled":this.disabled,"aria-labelledby":"label",class:`checkbox__wrapper \n        ${this.internalValue?"checked":""} \n        ${this.disabled?"disabled":""}\n        ${this.error?"error":""}`},this.internalValue&&(0,r.h)("ifx-icon",{icon:"check-12"})),o&&(0,r.h)("div",{id:"label",class:`label ${this.error?"error":""} ${this.disabled?"disabled":""} `,onClick:this.handleCheckbox.bind(this)},(0,r.h)("slot",null)))}get el(){return(0,r.g)(this)}static get watchers(){return{value:["valueChanged"]}}};l.style=":host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px}.checkbox__container .checkbox__wrapper{display:flex;justify-content:center;align-items:center;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked{background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#FFFFFF}.checkbox__container .checkbox__wrapper.checked:focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked.disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .label{width:25px;height:20px;font-style:normal;font-weight:400;font-size:0.813rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .label.error{color:#CD002F}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}"}}]);