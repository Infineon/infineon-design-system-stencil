"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[8376],{5995:(r,o,t)=>{t.r(o),t.d(o,{ifx_radio_button:()=>e});var a=t(7770);const e=class{constructor(r){(0,a.r)(this,r),this.ifxChange=(0,a.c)(this,"ifxChange",7),this.disabled=!1,this.value=!1,this.error=!1,this.size="s",this.internalValue=void 0,this.hasSlot=!0}valueChanged(r,o){r!==o&&(this.internalValue=r)}componentWillLoad(){this.internalValue=this.value;const r=this.el.innerHTML;this.hasSlot=!!r}handleRadioButtonClick(){this.disabled||this.error||this.internalValue||(this.internalValue=!this.internalValue,this.el.shadowRoot.querySelector(".radioButton__wrapper").focus(),this.ifxChange.emit(this.internalValue))}render(){return(0,a.h)("div",{key:"c39d89bdc1a023642fbfb60fc760d1bfaf0332fe","aria-label":"a radio button","aria-value":this.value,"aria-disabled":this.disabled,class:"radioButton__container ".concat(this.size," ").concat(this.disabled?"disabled":""),onClick:this.handleRadioButtonClick.bind(this)},(0,a.h)("div",{key:"4c6f55637abf841ae283c9e19c5e325e6cf1c403",class:"radioButton__wrapper \n          ".concat(this.internalValue?"checked":""," \n          ").concat(this.disabled?"disabled":""," \n          ").concat(this.error?"error":""),tabIndex:this.disabled?-1:0},this.internalValue&&(0,a.h)("div",{class:"radioButton__wrapper-mark"})),this.hasSlot&&(0,a.h)("div",{class:"label ".concat("m"===this.size?"label-m":""," ").concat(this.disabled?"disabled":"")},(0,a.h)("slot",null)))}get el(){return(0,a.g)(this)}static get watchers(){return{value:["valueChanged"]}}};e.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer;font-family:var(--ifx-font-family)}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{background-color:#EEEDED}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label:hover{cursor:pointer}'}}]);
//# sourceMappingURL=8376.a91c61ec.chunk.js.map