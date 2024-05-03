"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[1784],{1784:(t,e,n)=>{n.r(e),n.d(e,{ifx_text_field:()=>r});var i=n(7770);const r=class{constructor(t){(0,i.r)(this,t),this.ifxInput=(0,i.c)(this,"ifxInput",7),this.placeholder="Placeholder",this.value="",this.error=!1,this.label="",this.icon="",this.caption="",this.size="m",this.required=!1,this.optional=!1,this.success=!1,this.disabled=!1}valueWatcher(t){t!==this.inputElement.value&&(this.inputElement.value=t)}async reset(){this.value="",this.inputElement.value=""}handleInput(){const t=this.inputElement.value;this.value=t,this.ifxInput.emit(this.value)}render(){return(0,i.h)("div",{key:"c3ef27b0a8bb9408785b4613d169716b5470cd7c","aria-label":"a text field for user input","aria-value":this.value,"aria-disabled":this.disabled,class:"textInput__container ".concat(this.disabled?"disabled":"")},(0,i.h)("div",{key:"a89f72a98308da81366b43e2709655d3fc1699e7",class:"textInput__top-wrapper"},(0,i.h)("label",{key:"f64cc5931d6f8c8926fae6b6239070c5628e5bfb",htmlFor:"text-field"},(0,i.h)("slot",{key:"a79c1d9b9696c3e966c1aaafb3150a45ebb80945"}),this.optional&&this.required?(0,i.h)("span",{class:"optional-required"},"(optional) *"):this.optional?(0,i.h)("span",{class:"optional"},"(optional)"):this.required?(0,i.h)("span",{class:"required"},"*"):null)),(0,i.h)("div",{key:"89460b80bc4b6e23ed99a2a58ca120f05c9cb628",class:"textInput__bottom-wrapper"},(0,i.h)("div",{key:"5374f364fcf14b863ce512025e9af3a24e03b8cf",class:"input-container"},this.icon&&(0,i.h)("ifx-icon",{icon:this.icon}),(0,i.h)("input",{key:"063eb5ee320effbac711acb3a5c2dbdfc193801b",ref:t=>this.inputElement=t,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,class:"".concat(this.icon?"icon":"","\n                ").concat(this.error?"error":""," \n              ").concat("s"===this.size?"input-s":"","\n              ").concat(this.success?"success":"")})),this.caption&&!this.error&&(0,i.h)("div",{class:"textInput__bottom-wrapper-caption ".concat(this.disabled,' ? disabled : ""')},this.caption),this.error&&(0,i.h)("div",{class:"textInput__bottom-wrapper-caption error"},this.caption)))}get el(){return(0,i.g)(this)}static get watchers(){return{value:["valueWatcher"]}}};r.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:var(--ifx-font-family)}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;font-family:"Source Sans 3";font-size:1rem;line-height:1.5rem;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0;text-overflow:ellipsis}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px;font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.input-s::placeholder{font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:40px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,:focus,.error,.success){border:1px solid #575352}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:50%;transform:translateY(-50%);left:16px;transition:0.3s;color:#8D8786}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}'}}]);
//# sourceMappingURL=1784.83b02ab7.chunk.js.map