"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[5561],{5561:(h,s,a)=>{a.r(s),a.d(s,{ifx_textarea:()=>i});var l=a(6330),t=a(787);const i=class{constructor(e){(0,t.r)(this,e),this.ifxInput=(0,t.c)(this,"ifxInput",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.inputId="ifx-textarea-"+ ++n,this.disabled=!1,this.error=!1,this.readOnly=!1,this.resize="both",this.wrap="soft",this.fullWidth="false"}reset(){var e=this;return(0,l.A)(function*(){e.resetTextarea()})()}handleComponentWidth(){const e=this.el.shadowRoot.querySelector(".wrapper__textarea");"true"===this.fullWidth.toLowerCase()?e.classList.add("fullWidth"):e.classList.contains("fullWidth")&&e.classList.remove("fullWidth")}componentDidRender(){this.handleComponentWidth()}formResetCallback(){this.resetTextarea(),this.internals.setFormValue("")}handleOnInput(e){this.value=e.target.value,this.internals.setFormValue(this.value),this.ifxInput.emit(this.value)}resetTextarea(){this.value="",this.internals.setValidity({}),this.internals.setFormValue("")}componentWillLoad(){this.internals.setFormValue(this.value)}render(){var e,r;return(0,t.h)(t.a,{key:"0f5bf5d56ed26002f15ecc9582ee5a23b9f7c4c6",class:`wrapper--${this.error?"error":""} wrapper--${this.disabled?"disabled":""}`},(0,t.h)("label",{key:"560e1678ddd02cb1bf0229ffa17a61ffa0c039b3",class:"wrapper__label",htmlFor:this.inputId},null===(e=this.label)||void 0===e?void 0:e.trim()),(0,t.h)("div",{key:"4e66c7c6a52428ef33dee14d4346ce9f9076e3c7",class:"wrapper__textarea"},(0,t.h)("textarea",{key:"9346dad809f595081723e77d18fd0b26c1653267","aria-label":"a textarea","aria-value":this.value,"aria-disabled":this.disabled,id:this.inputId,style:{resize:this.resize},name:this.name?this.name:this.inputId,cols:this.cols,rows:this.rows,maxlength:this.maxlength,wrap:this.wrap,disabled:this.disabled,readonly:this.readOnly,placeholder:this.placeholder,value:this.value,onInput:d=>this.handleOnInput(d)})),(null===(r=this.caption)||void 0===r?void 0:r.trim())&&(0,t.h)("div",{key:"8946de96db794c98a5e004da191e8ca38921d403",class:"wrapper__caption"},this.caption.trim()))}static get formAssociated(){return!0}get el(){return(0,t.g)(this)}};let n=0;i.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;flex-direction:column;width:100%}.wrapper__label{color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3"}:host(.wrapper--disabled) .wrapper__label{color:#575352}.wrapper__textarea{width:100%}.wrapper__textarea.fullWidth{width:100%}.wrapper__textarea.fullWidth textarea{width:100%;box-sizing:border-box}.wrapper__textarea textarea{border:1px solid #8D8786;border-radius:1px;padding:8px 16px;background-color:#FFFFFF;color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3";transition:all 100ms ease;transition-property:border-color}.wrapper__textarea textarea:hover{border:1px solid #575352}.wrapper__textarea textarea:focus-within{outline:none;border:1px solid #0A8276}:host(.wrapper--error) .wrapper__textarea textarea{border:1px solid #CD002F}:host(.wrapper--disabled) .wrapper__textarea textarea{border:1px solid #575352;background-color:#EEEDED}.wrapper__caption{color:#1D1D1D;font:400 0.75rem/1rem "Source Sans 3"}:host(.wrapper--error) .wrapper__caption{color:#CD002F}:host(.wrapper--disabled) .wrapper__caption{color:#575352}'}}]);