"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[5561],{5561:(h,i,r)=>{r.r(i),r.d(i,{ifx_textarea:()=>n});var l=r(6330),t=r(581);const n=class{constructor(e){(0,t.r)(this,e),this.ifxChange=(0,t.c)(this,"ifxChange",7),this.ifxInput=(0,t.c)(this,"ifxInput",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.inputId="ifx-textarea-"+ ++d,this.caption=void 0,this.cols=void 0,this.disabled=!1,this.error=!1,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.name=void 0,this.placeholder=void 0,this.readOnly=!1,this.resize="both",this.rows=void 0,this.value=void 0,this.wrap="soft"}reset(){var e=this;return(0,l.A)(function*(){e.resetTextarea()})()}formResetCallback(){this.resetTextarea()}handleOnChange(e){const a=this.value;this.value=e.target.value,this.internals.setFormValue(this.value),this.ifxChange.emit({oldValue:a,newValue:this.value})}handleOnInput(e){this.ifxInput.emit(e.target.value)}resetTextarea(){this.value="",this.internals.setValidity({}),this.internals.setFormValue("")}componentWillLoad(){this.internals.setFormValue(this.value)}render(){var e,a;return(0,t.h)(t.a,{key:"1032f02eb184c36f820dd12653ec99afdda193c3",class:`wrapper \n\t\t\t\t\t\twrapper--${this.error?"error":""}\n\t\t\t\t\t\twrapper--${this.disabled?"disabled":""}`},(0,t.h)("label",{key:"c2d31e6f2be5587ab18b79b54c53ff2ead716f57",class:"wrapper__label",htmlFor:this.inputId},null===(e=this.label)||void 0===e?void 0:e.trim()),(0,t.h)("div",{key:"29c46ac9089e36a2d3b1c459ba0ef4c7f63ee706",class:"wrapper__textarea"},(0,t.h)("textarea",{key:"1431f3e35c6d122b83a76d0ddaeed524bb9683e8","aria-label":"a textarea","aria-value":this.value,"aria-disabled":this.disabled,id:this.inputId,style:{resize:this.resize},name:this.name?this.name:this.inputId,cols:this.cols,rows:this.rows,maxlength:this.maxlength,minlength:this.minlength,wrap:this.wrap,disabled:this.disabled,readonly:this.readOnly,placeholder:this.placeholder,value:this.value,onInput:s=>this.handleOnInput(s),onChange:s=>this.handleOnChange(s)})),(null===(a=this.caption)||void 0===a?void 0:a.trim())&&(0,t.h)("div",{key:"a3c21d05e0b1110500d0ef01029f86900bd49f4b",class:"wrapper__caption"},this.caption.trim()))}static get formAssociated(){return!0}};let d=0;n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;flex-direction:column}.wrapper__label{color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3"}:host(.wrapper--disabled) .wrapper__label{color:#575352}.wrapper__textarea textarea{border:1px solid #8D8786;border-radius:1px;padding:8px 16px;background-color:#FFFFFF;color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3";transition:all 100ms ease;transition-property:border-color}.wrapper__textarea textarea:hover{border:1px solid #575352}.wrapper__textarea textarea:focus-within{outline:none;border:1px solid #0A8276}:host(.wrapper--error) .wrapper__textarea textarea{border:1px solid #CD002F}:host(.wrapper--disabled) .wrapper__textarea textarea{border:1px solid #575352;background-color:#EEEDED}.wrapper__caption{color:#1D1D1D;font:400 0.75rem/1rem "Source Sans 3"}:host(.wrapper--error) .wrapper__caption{color:#CD002F}:host(.wrapper--disabled) .wrapper__caption{color:#575352}'}}]);