"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[3749],{3749:function(t,e,n){n.r(e),n.d(e,{ifx_text_field:function(){return a}});var r=n(5671),o=n(9466),i=n(3144),a=function(){function t(e){(0,r.Z)(this,t),(0,i.r)(this,e),this.ifxInput=(0,i.c)(this,"ifxInput",7),this.placeholder="Placeholder",this.value="",this.error=!1,this.errorMessage="",this.success=!1,this.disabled=!1,this.readonly=!1,this.icon=!1}return(0,o.Z)(t,[{key:"valueWatcher",value:function(t){t!==this.inputElement.value&&(this.inputElement.value=t)}},{key:"handleInput",value:function(){var t=this.inputElement.value;this.value=t,this.ifxInput.emit(this.value)}},{key:"render",value:function(){var t=this;return(0,i.h)("div",{class:"textInput__container ".concat(this.disabled?"disabled":"")},(0,i.h)("div",{class:"textInput__top-wrapper"},(0,i.h)("label",{htmlFor:"text-field"},(0,i.h)("slot",null))),(0,i.h)("div",{class:"textInput__bottom-wrapper"},(0,i.h)("input",{ref:function(e){return t.inputElement=e},readonly:this.readonly,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:function(){return t.handleInput()},placeholder:this.placeholder,class:"".concat(this.error?"error":""," ").concat(this.success?"success":"")}),this.error&&(0,i.h)("div",{class:"textInput__bottom-wrapper-error"},this.errorMessage),this.icon&&(0,i.h)("ifx-icon",{icon:"chevron-down-16"})))}},{key:"el",get:function(){return(0,i.g)(this)}}],[{key:"watchers",get:function(){return{value:["valueWatcher"]}}}]),t}();a.style='@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:400;src:url("source-sans-3/SourceSans3-Regular.ttf.woff2") format("woff2"), url("source-sans-3/SourceSans3-Regular.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:600;src:url("source-sans-3/SourceSans3-Semibold.ttf.woff2") format("woff2"), url("source-sans-3/SourceSans3-Semibold.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:italic;font-weight:400;src:url("source-sans-3/SourceSans3-It.ttf.woff2") format("woff2"), url("source-sans-3/SourceSans3-It.ttf.woff") format("woff")}*{box-sizing:border-box;line-height:1.75rem;font-family:"Source Sans 3"}ifx-icon:empty{display:none}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container.disabled .textInput__top-wrapper label{color:#BFBBBB}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #BFBBBB}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{color:#BFBBBB}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__bottom-wrapper{position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:6px;height:40px;background-color:#FFFFFF;color:#1D1D1D;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,.error,.success){border:1px solid #3C3A39}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:12px;right:17px;transition:0.3s}.textInput__container .textInput__bottom-wrapper.show ifx-icon{transition:0.3s;transform:rotate(180deg)}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-error{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#CD002F;flex:none;order:1;align-self:stretch;flex-grow:0}'}}]);
//# sourceMappingURL=3749.005ec0df.chunk.js.map