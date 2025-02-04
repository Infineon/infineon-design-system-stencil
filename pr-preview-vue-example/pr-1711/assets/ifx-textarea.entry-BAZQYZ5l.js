import{r as s,c as i,h as a,H as l}from"./index-Bf0HXJ7t.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;flex-direction:column}.wrapper__label{color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3"}:host(.wrapper--disabled) .wrapper__label{color:#575352}.wrapper__textarea textarea{border:1px solid #8D8786;border-radius:1px;padding:8px 16px;background-color:#FFFFFF;color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3";transition:all 100ms ease;transition-property:border-color}.wrapper__textarea textarea:hover{border:1px solid #575352}.wrapper__textarea textarea:focus-within{outline:none;border:1px solid #0A8276}:host(.wrapper--error) .wrapper__textarea textarea{border:1px solid #CD002F}:host(.wrapper--disabled) .wrapper__textarea textarea{border:1px solid #575352;background-color:#EEEDED}.wrapper__caption{color:#1D1D1D;font:400 0.75rem/1rem "Source Sans 3"}:host(.wrapper--error) .wrapper__caption{color:#CD002F}:host(.wrapper--disabled) .wrapper__caption{color:#575352}',n=o,d=class{constructor(e){s(this,e),this.ifxInput=i(this,"ifxInput",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.inputId=`ifx-textarea-${++p}`,this.disabled=!1,this.error=!1,this.readOnly=!1,this.resize="both",this.wrap="soft"}async reset(){this.resetTextarea()}formResetCallback(){this.resetTextarea(),this.internals.setFormValue("")}handleOnInput(e){this.value=e.target.value,this.internals.setFormValue(this.value),this.ifxInput.emit(this.value)}resetTextarea(){this.value="",this.internals.setValidity({}),this.internals.setFormValue("")}componentWillLoad(){this.internals.setFormValue(this.value)}render(){var e,t;return a(l,{key:"c70752e015f3ddc9e5e482a6fd173e23435a2f41",class:`wrapper 
						wrapper--${this.error?"error":""}
						wrapper--${this.disabled?"disabled":""}`},a("label",{key:"4b3765e6c32598376b55c316dfc9c34157c72fe0",class:"wrapper__label",htmlFor:this.inputId},(e=this.label)===null||e===void 0?void 0:e.trim()),a("div",{key:"e0e66b29ef2185d87f5b757cc5af1b7fb7d77261",class:"wrapper__textarea"},a("textarea",{key:"82d15056d4adf7d435e3e1c284ca7e3d77f0ad0e","aria-label":"a textarea","aria-value":this.value,"aria-disabled":this.disabled,id:this.inputId,style:{resize:this.resize},name:this.name?this.name:this.inputId,cols:this.cols,rows:this.rows,maxlength:this.maxlength,wrap:this.wrap,disabled:this.disabled,readonly:this.readOnly,placeholder:this.placeholder,value:this.value,onInput:r=>this.handleOnInput(r)})),((t=this.caption)===null||t===void 0?void 0:t.trim())&&a("div",{key:"21296971b22cb11ed30f5acb106db45a5e4a814c",class:"wrapper__caption"},this.caption.trim()))}static get formAssociated(){return!0}};let p=0;d.style=n;export{d as ifx_textarea};
