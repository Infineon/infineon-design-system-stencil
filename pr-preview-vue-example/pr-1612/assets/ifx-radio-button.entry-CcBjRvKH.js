import{r,c as o,h as t,g as i}from"./index-CYRe0wqi.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer;font-family:var(--ifx-font-family)}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{background-color:#EEEDED}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label:hover{cursor:pointer}',n=a,d=class{constructor(e){r(this,e),this.ifxChange=o(this,"ifxChange",7),this.disabled=!1,this.value=void 0,this.error=!1,this.size="s",this.name=void 0,this.checked=void 0,this.internalChecked=!1,this.hasSlot=!0,this.inputElement=void 0}async isChecked(){return this.internalChecked}componentWillLoad(){this.checked&&(this.internalChecked=this.checked),this.el.innerHTML?this.hasSlot=!0:this.hasSlot=!1}handleRadioButtonClick(e){if(this.disabled){e.stopPropagation();return}this.inputElement.click(),this.internalChecked=this.inputElement.checked,this.ifxChange.emit(this.internalChecked)}handleChange(e){e.target.name===this.name&&(this.internalChecked=this.inputElement.checked)}render(){return t("div",{key:"adbc1e3cd0d1b07cebc552cabf82b98fe8d6d90f","aria-label":"a radio button","aria-value":this.value,"aria-disabled":this.disabled,class:`radioButton__container ${this.size} ${this.disabled?"disabled":""}`,onClick:this.handleRadioButtonClick.bind(this)},t("div",{key:"e879a477842a0e81d9d336761722f71ac1c1b933",class:`radioButton__wrapper 
          ${this.internalChecked?"checked":""} 
          ${this.disabled?"disabled":""} 
          ${this.error?"error":""}`,tabIndex:this.disabled?-1:0},this.internalChecked&&t("div",{key:"81625e73c7c2b9faef955a5a787b6c80dc955b00",class:"radioButton__wrapper-mark"})),this.hasSlot&&t("div",{key:"9ea8933266a9ba8e3e56d26173cd5e42c4e264f8",class:`label ${this.size==="m"?"label-m":""} ${this.disabled?"disabled":""}`},t("slot",{key:"40dd116cf1a9501f3bd1c019dedf73571c93558e"})),t("input",{key:"502a972c7e29b310778c387b3164218b2d109349",type:"radio",hidden:!0,ref:e=>this.inputElement=e,name:this.name,value:this.value,checked:this.internalChecked,disabled:this.disabled,onClick:e=>e.stopPropagation()}))}get el(){return i(this)}};d.style=n;export{d as ifx_radio_button};
