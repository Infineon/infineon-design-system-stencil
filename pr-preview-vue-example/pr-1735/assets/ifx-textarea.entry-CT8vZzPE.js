import{r as s,c as i,h as t,H as l,g as o}from"./index-gqIEd_Hw.js";const n=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;flex-direction:column;width:100%}.wrapper__label{color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3"}:host(.wrapper--disabled) .wrapper__label{color:#575352}.wrapper__textarea{width:100%}.wrapper__textarea.fullWidth{width:100%}.wrapper__textarea.fullWidth textarea{width:100%;box-sizing:border-box}.wrapper__textarea textarea{border:1px solid #8D8786;border-radius:1px;padding:8px 16px;background-color:#FFFFFF;color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3";transition:all 100ms ease;transition-property:border-color}.wrapper__textarea textarea:hover{border:1px solid #575352}.wrapper__textarea textarea:focus-within{outline:none;border:1px solid #0A8276}:host(.wrapper--error) .wrapper__textarea textarea{border:1px solid #CD002F}:host(.wrapper--disabled) .wrapper__textarea textarea{border:1px solid #575352;background-color:#EEEDED}.wrapper__caption{color:#1D1D1D;font:400 0.75rem/1rem "Source Sans 3"}:host(.wrapper--error) .wrapper__caption{color:#CD002F}:host(.wrapper--disabled) .wrapper__caption{color:#575352}',d=n,p=class{constructor(e){s(this,e),this.ifxInput=i(this,"ifxInput",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.inputId=`ifx-textarea-${++h}`,this.disabled=!1,this.error=!1,this.readOnly=!1,this.resize="both",this.wrap="soft",this.fullWidth="false"}async reset(){this.resetTextarea()}handleComponentWidth(){const e=this.el.shadowRoot.querySelector(".wrapper__textarea");this.fullWidth.toLowerCase()==="true"?e.classList.add("fullWidth"):e.classList.contains("fullWidth")&&e.classList.remove("fullWidth")}componentDidRender(){this.handleComponentWidth()}formResetCallback(){this.resetTextarea(),this.internals.setFormValue("")}handleOnInput(e){this.value=e.target.value,this.internals.setFormValue(this.value),this.ifxInput.emit(this.value)}resetTextarea(){this.value="",this.internals.setValidity({}),this.internals.setFormValue("")}componentWillLoad(){this.internals.setFormValue(this.value)}render(){var e,a;return t(l,{key:"f6dad1fd412d07775ede50165eee294a1bb527c7",class:`wrapper--${this.error?"error":""} wrapper--${this.disabled?"disabled":""}`},t("label",{key:"d9e433cf857369d09e9dc7b4439e4186f5c71dfa",class:"wrapper__label",htmlFor:this.inputId},(e=this.label)===null||e===void 0?void 0:e.trim()),t("div",{key:"9230ede30b10f47dc2868784e1bd5e41f6b1980c",class:"wrapper__textarea"},t("textarea",{key:"4499888b439a4f0d3e460e17ef6fb816178b6aeb","aria-label":"a textarea","aria-value":this.value,"aria-disabled":this.disabled,id:this.inputId,style:{resize:this.resize},name:this.name?this.name:this.inputId,cols:this.cols,rows:this.rows,maxlength:this.maxlength,wrap:this.wrap,disabled:this.disabled,readonly:this.readOnly,placeholder:this.placeholder,value:this.value,onInput:r=>this.handleOnInput(r)})),((a=this.caption)===null||a===void 0?void 0:a.trim())&&t("div",{key:"0a57adb212132a9afd51d60286c61d7df6707eb3",class:"wrapper__caption"},this.caption.trim()))}static get formAssociated(){return!0}get el(){return o(this)}};let h=0;p.style=d;export{p as ifx_textarea};
