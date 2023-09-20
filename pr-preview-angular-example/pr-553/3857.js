"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[3857],{3857:(a,o,n)=>{n.r(o),n.d(o,{ifx_text_field:()=>r});var t=n(5544);const r=class{constructor(e){(0,t.r)(this,e),this.ifxInput=(0,t.c)(this,"ifxInput",7),this.placeholder="Placeholder",this.value="",this.error=!1,this.label="",this.icon="",this.caption="",this.size="m",this.required=!1,this.optional=!1,this.success=!1,this.disabled=!1}valueWatcher(e){e!==this.inputElement.value&&(this.inputElement.value=e)}handleInput(){this.value=this.inputElement.value,this.ifxInput.emit(this.value)}render(){return(0,t.h)("div",{class:"textInput__container "+(this.disabled?"disabled":"")},(0,t.h)("div",{class:"textInput__top-wrapper"},(0,t.h)("label",{htmlFor:"text-field"},(0,t.h)("slot",null),this.optional&&this.required?(0,t.h)("span",{class:"optional-required"},"(optional) *"):this.optional?(0,t.h)("span",{class:"optional"},"(optional)"):this.required?(0,t.h)("span",{class:"required"},"*"):null)),(0,t.h)("div",{class:"textInput__bottom-wrapper"},(0,t.h)("div",{class:"input-container"},this.icon&&(0,t.h)("ifx-icon",{icon:this.icon}),(0,t.h)("input",{ref:e=>this.inputElement=e,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,class:`${this.icon?"icon":""}\n                ${this.error?"error":""} \n              ${"s"===this.size?"input-s":""}\n              ${this.success?"success":""}`})),this.caption&&!this.error&&(0,t.h)("div",{class:`textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""`},this.caption),this.error&&(0,t.h)("div",{class:"textInput__bottom-wrapper-caption error"},this.caption)))}get el(){return(0,t.g)(this)}static get watchers(){return{value:["valueWatcher"]}}};r.style='@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:400;src:url("./fonts/source-sans-3/SourceSans3-Regular.ttf.woff2") format("woff2"), url("./fonts/source-sans-3/SourceSans3-Regular.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:600;src:url("./fonts/source-sans-3/SourceSans3-Semibold.ttf.woff2") format("woff2"), url("./fonts/source-sans-3/SourceSans3-Semibold.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:italic;font-weight:400;src:url("./fonts/source-sans-3/SourceSans3-It.ttf.woff2") format("woff2"), url("./fonts/source-sans-3/SourceSans3-It.ttf.woff") format("woff")}*{font-family:"Source Sans 3"}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:"Source Sans 3"}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:32px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,.error,.success){border:1px solid #3C3A39}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:50%;transform:translateY(-50%);left:8px;transition:0.3s}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}'}}]);