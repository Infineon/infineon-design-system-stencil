"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[5561],{5561:(d,s,r)=>{r.r(s),r.d(s,{ifx_textarea:()=>n});var t=r(2866);const n=class{constructor(e){(0,t.r)(this,e),this.ifxChange=(0,t.c)(this,"ifxChange",7),this.ifxInput=(0,t.c)(this,"ifxInput",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.inputId="ifx-textarea-"+ ++o,this.caption=void 0,this.cols=void 0,this.disabled=!1,this.error=!1,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.name=void 0,this.placeholder=void 0,this.readOnly=!1,this.resize="both",this.rows=void 0,this.value=void 0,this.wrap="soft"}formResetCallback(){this.value="",this.internals.setValidity({}),this.internals.setFormValue("")}handleOnChange(e){const a=e.target.value;this.value=a,this.internals.setFormValue(this.value),this.ifxChange.emit({oldValue:a,newValue:this.value})}handleOnInput(e){this.ifxInput.emit(e.target.value)}render(){var e,a;return(0,t.h)(t.a,{key:"7ea6e630b23090e421cf9374b734451b3995ca98",class:`wrapper \n\t\t\t\t\t\twrapper--${this.error?"error":""}\n\t\t\t\t\t\twrapper--${this.disabled?"disabled":""}`},(0,t.h)("label",{key:"6708823d8822f89a91922d4d89d71fb8c4687b90",class:"wrapper__label",htmlFor:this.inputId},null===(e=this.label)||void 0===e?void 0:e.trim()),(0,t.h)("div",{key:"f9082888456400fdd997f1f060ba00f9f3e84a74",class:"wrapper__textarea"},(0,t.h)("textarea",{key:"32acdca10128c5bf1371cd06e5d29a51c648aac4",id:this.inputId,style:{resize:this.resize},name:this.name?this.name:this.inputId,cols:this.cols,rows:this.rows,maxlength:this.maxlength,minlength:this.minlength,wrap:this.wrap,disabled:this.disabled,readonly:this.readOnly,placeholder:this.placeholder,value:this.value,onInput:i=>this.handleOnInput(i),onChange:i=>this.handleOnChange(i)})),(null===(a=this.caption)||void 0===a?void 0:a.trim())&&(0,t.h)("div",{key:"a921dd46220e5db932edeec1214565fb42b68c22",class:"wrapper__caption"},this.caption.trim()))}static get formAssociated(){return!0}};let o=0;n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;flex-direction:column}.wrapper__label{color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3"}:host(.wrapper--disabled) .wrapper__label{color:#575352}.wrapper__textarea textarea{border:1px solid #8D8786;border-radius:1px;padding:8px 16px;background-color:#FFFFFF;color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3";transition:all 100ms ease;transition-property:border-color}.wrapper__textarea textarea:hover{border:1px solid #575352}.wrapper__textarea textarea:focus-within{outline:none;border:1px solid #0A8276}:host(.wrapper--error) .wrapper__textarea textarea{border:1px solid #CD002F}:host(.wrapper--disabled) .wrapper__textarea textarea{border:1px solid #575352;background-color:#EEEDED}.wrapper__caption{color:#1D1D1D;font:400 0.75rem/1rem "Source Sans 3"}:host(.wrapper--error) .wrapper__caption{color:#CD002F}:host(.wrapper--disabled) .wrapper__caption{color:#575352}'}}]);