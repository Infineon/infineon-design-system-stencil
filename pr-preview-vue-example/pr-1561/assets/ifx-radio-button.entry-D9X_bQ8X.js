import{r as o,c as a,h as r,g as i}from"./index-Dj0YYJHY.js";const n=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer;font-family:var(--ifx-font-family)}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{background-color:#EEEDED}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label:hover{cursor:pointer}',d=n,l=class{constructor(t){o(this,t),this.ifxChange=a(this,"ifxChange",7),t.$hostElement$["s-ei"]?this.internals=t.$hostElement$["s-ei"]:(this.internals=t.$hostElement$.attachInternals(),t.$hostElement$["s-ei"]=this.internals),this.disabled=!1,this.value=!1,this.error=!1,this.size="s",this.internalValue=void 0,this.hasSlot=!0}valueChanged(t,e){t!==e&&(this.internalValue=t)}componentWillLoad(){this.internalValue=this.value,this.el.innerHTML?this.hasSlot=!0:this.hasSlot=!1}handleRadioButtonClick(){!this.disabled&&!this.error&&!this.internalValue&&(this.internalValue=!this.internalValue,this.el.shadowRoot.querySelector(".radioButton__wrapper").focus(),this.ifxChange.emit(this.internalValue),this.internals.setFormValue(this.internalValue?"on":null))}formResetCallback(){this.internals.setFormValue(null)}render(){return r("div",{key:"408451b7219bce50d8b85eefa5e745625acf9b5b","aria-label":"a radio button","aria-value":this.value,"aria-disabled":this.disabled,class:`radioButton__container ${this.size} ${this.disabled?"disabled":""}`,onClick:this.handleRadioButtonClick.bind(this)},r("div",{key:"0a19877e987a7f5a46fe7ac4ddefe6a3ba0a27c6",class:`radioButton__wrapper 
          ${this.internalValue?"checked":""} 
          ${this.disabled?"disabled":""} 
          ${this.error?"error":""}`,tabIndex:this.disabled?-1:0},this.internalValue&&r("div",{key:"e2ebb2b9cd22f55c9421f7400b71b2cc46459624",class:"radioButton__wrapper-mark"})),this.hasSlot&&r("div",{key:"30e08c75d4673cb1611fc195c1670bea35beac8a",class:`label ${this.size==="m"?"label-m":""} ${this.disabled?"disabled":""}`},r("slot",{key:"bf69d1234cbd3df376e52f4c4d8fb88f1eebd803"})))}static get formAssociated(){return!0}get el(){return i(this)}static get watchers(){return{value:["valueChanged"]}}};l.style=d;export{l as ifx_radio_button};
