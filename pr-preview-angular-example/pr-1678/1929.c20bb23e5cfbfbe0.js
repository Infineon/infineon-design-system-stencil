"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[1929],{1929:(s,r,o)=>{o.r(r),o.d(r,{ifx_radio_button:()=>d});var i=o(6330),e=o(6821);const d=(()=>{let a=class{constructor(t){(0,e.r)(this,t),this.ifxChange=(0,e.c)(this,"ifxChange",7),this.disabled=!1,this.error=!1,this.size="s",this.internalChecked=!1,this.hasSlot=!0}isChecked(){var t=this;return(0,i.A)(function*(){return t.internalChecked})()}componentWillLoad(){this.checked&&(this.internalChecked=this.checked),this.hasSlot=!!this.el.innerHTML}handleRadioButtonClick(t){this.disabled?t.stopPropagation():(this.inputElement.click(),this.internalChecked=this.inputElement.checked,this.ifxChange.emit(this.internalChecked))}handleChange(t){t.target.name===this.name&&(this.internalChecked=this.inputElement.checked)}render(){return(0,e.h)("div",{key:"7b5291f95e3fc00c0ceb9285c57ca440b1a8939f","aria-label":"a radio button","aria-value":this.value,"aria-disabled":this.disabled,class:`radioButton__container ${this.size} ${this.disabled?"disabled":""}`,onClick:this.handleRadioButtonClick.bind(this)},(0,e.h)("div",{key:"5efda77550a294da34c4f72c4558e312690f9cd9",class:`radioButton__wrapper \n          ${this.internalChecked?"checked":""} \n          ${this.disabled?"disabled":""} \n          ${this.error?"error":""}`,tabIndex:this.disabled?-1:0},this.internalChecked&&(0,e.h)("div",{key:"2b1a814830a361021a812016d770d7838dca05fe",class:"radioButton__wrapper-mark"})),this.hasSlot&&(0,e.h)("div",{key:"61911033a487c6396c1c34b35f13f04cf84ea602",class:`label ${"m"===this.size?"label-m":""} ${this.disabled?"disabled":""}`},(0,e.h)("slot",{key:"7f1b40289cdd67a4fbc2e4677da03e22cdfa758c"})),(0,e.h)("input",{key:"f77c2d84f409e3875798370a06cbc744385e5655",type:"radio",hidden:!0,ref:t=>this.inputElement=t,name:this.name,value:this.value,checked:this.internalChecked,disabled:this.disabled,onClick:t=>t.stopPropagation()}))}get el(){return(0,e.g)(this)}};return a.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer;font-family:var(--ifx-font-family)}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{background-color:#EEEDED}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label:hover{cursor:pointer}',a})()}}]);