"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[1929],{1929:(s,r,o)=>{o.r(r),o.d(r,{ifx_radio_button:()=>d});var a=o(6330),t=o(3769);const d=(()=>{let i=class{constructor(e){(0,t.r)(this,e),this.ifxChange=(0,t.c)(this,"ifxChange",7),this.disabled=!1,this.value=void 0,this.error=!1,this.size="s",this.name=void 0,this.checked=void 0,this.internalChecked=!1,this.hasSlot=!0,this.inputElement=void 0}isChecked(){var e=this;return(0,a.A)(function*(){return e.internalChecked})()}componentWillLoad(){this.checked&&(this.internalChecked=this.checked),this.hasSlot=!!this.el.innerHTML}handleRadioButtonClick(e){this.disabled?e.stopPropagation():(this.inputElement.click(),this.internalChecked=this.inputElement.checked,this.ifxChange.emit(this.internalChecked))}handleChange(e){e.target.name===this.name&&(this.internalChecked=this.inputElement.checked)}render(){return(0,t.h)("div",{key:"24c1120494389f8dae12996ae2d834888e5e6c27","aria-label":"a radio button","aria-value":this.value,"aria-disabled":this.disabled,class:`radioButton__container ${this.size} ${this.disabled?"disabled":""}`,onClick:this.handleRadioButtonClick.bind(this)},(0,t.h)("div",{key:"ffd6dfd38f8cdc4c51f506cde3296c99bfbd1ddc",class:`radioButton__wrapper \n          ${this.internalChecked?"checked":""} \n          ${this.disabled?"disabled":""} \n          ${this.error?"error":""}`,tabIndex:this.disabled?-1:0},this.internalChecked&&(0,t.h)("div",{key:"c2f291f767dcea67be6149e346fd87d02cb52fe6",class:"radioButton__wrapper-mark"})),this.hasSlot&&(0,t.h)("div",{key:"826e8ae8d7641834400a83e90a62934cfbba94e7",class:`label ${"m"===this.size?"label-m":""} ${this.disabled?"disabled":""}`},(0,t.h)("slot",{key:"43c48065a24db7deb67248209799e1324f880331"})),(0,t.h)("input",{key:"bbc205c3f5ddffed51fc063e2187b0cb268f94c0",type:"radio",hidden:!0,ref:e=>this.inputElement=e,name:this.name,value:this.value,checked:this.internalChecked,disabled:this.disabled,onClick:e=>e.stopPropagation()}))}get el(){return(0,t.g)(this)}};return i.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer;font-family:var(--ifx-font-family)}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{background-color:#EEEDED}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label:hover{cursor:pointer}',i})()}}]);