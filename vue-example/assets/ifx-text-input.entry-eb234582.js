import{r as o,h as t,g as r}from"./index-71deb24d.js";const n='@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:400;src:local(""),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-regular.woff2") format("woff2"),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-regular.woff") format("woff")}@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:600;src:local(""),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-600.woff2") format("woff2"),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-600.woff") format("woff")}@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:700;src:local(""),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-700.woff2") format("woff2"),url("fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-700.woff") format("woff")}*{box-sizing:border-box;line-height:1.75;font-family:"Source Sans Pro"}ifx-icon:empty{display:none}:host{width:100%}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container.disabled .textInput__top-wrapper label{color:#BFBBBB}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #BFBBBB}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{color:#BFBBBB}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:16px;line-height:24px;display:flex;align-items:center;color:#1d1d1d;flex:none;order:0;flex-grow:0}.textInput__container .textInput__bottom-wrapper{position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:6px;height:40px;background-color:#ffffff;color:#1D1D1D;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,.error,.success){border:1px solid #3C3A39;cursor:pointer}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:12px;right:17px;transition:0.3s}.textInput__container .textInput__bottom-wrapper.show ifx-icon{transition:0.3s;transform:rotate(180deg)}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-error{font-style:normal;font-weight:400;font-size:12px;line-height:16px;letter-spacing:0.2px;color:#CD002F;flex:none;order:1;align-self:stretch;flex-grow:0}',s=class{constructor(e){o(this,e),this.placeholder="Placeholder",this.value="",this.error=!1,this.errorMessage="",this.success=!1,this.disabled=!1,this.readonly=!1,this.icon=!1}render(){return t("div",{class:`textInput__container ${this.disabled?"disabled":""}`},t("div",{class:"textInput__top-wrapper"},t("label",{htmlFor:"text-field"},t("slot",null))),t("div",{class:"textInput__bottom-wrapper"},t("input",{readonly:this.readonly,disabled:this.disabled,type:"text",id:"text-field",value:this.value,placeholder:this.placeholder,class:`${this.error?"error":""} ${this.success?"success":""}`}),this.error&&t("div",{class:"textInput__bottom-wrapper-error"},this.errorMessage),this.icon&&t("ifx-icon",{icon:"chevron-down-16"})))}get el(){return r(this)}};s.style=n;export{s as ifx_text_input};
