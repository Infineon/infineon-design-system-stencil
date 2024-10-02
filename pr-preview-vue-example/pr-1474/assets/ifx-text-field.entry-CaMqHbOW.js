import{r as n,c as i,h as e,g as r}from"./index-CoR0X1h7.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:var(--ifx-font-family)}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .textInput__top-wrapper label .required.error{color:#CD002F}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;font-family:"Source Sans 3";font-size:1rem;line-height:1.5rem;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0;text-overflow:ellipsis}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px;font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.input-s::placeholder{font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:40px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,:focus,.error,.success){border:1px solid #575352}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:50%;transform:translateY(-50%);left:16px;transition:0.3s;color:#8D8786}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}',a=o,p=class{constructor(t){n(this,t),this.ifxInput=i(this,"ifxInput",7),t.$hostElement$["s-ei"]?this.internals=t.$hostElement$["s-ei"]:(this.internals=t.$hostElement$.attachInternals(),t.$hostElement$["s-ei"]=this.internals),this.placeholder="Placeholder",this.value="",this.error=!1,this.label="",this.icon="",this.caption="",this.size="m",this.required=!1,this.optional=!1,this.success=!1,this.disabled=!1,this.maxlength=void 0}valueWatcher(t){t!==this.inputElement.value&&(this.inputElement.value=t)}async reset(){this.value="",this.inputElement.value=""}handleInput(){const t=this.inputElement.value;this.value=t,this.internals.setFormValue(t),this.ifxInput.emit(this.value)}formResetCallback(){this.internals.setValidity({}),this.internals.setFormValue("")}render(){return e("div",{key:"0155bb41d5abf62ae677e69c75215f45023a33d1","aria-label":"a text field for user input","aria-value":this.value,"aria-disabled":this.disabled,class:`textInput__container ${this.disabled?"disabled":""}`},e("div",{key:"47dc7a2e3a3779b6ddca734a8dd53bcef4b556b7",class:"textInput__top-wrapper"},e("label",{key:"40a809ffc4cde76616035ef6960e839842f8366d",htmlFor:"text-field"},e("slot",{key:"5d4ff958075a5d6ce164a1f04d863624c3a76ab5"}),this.optional&&this.required?e("span",{class:"optional-required"},"(optional) *"):this.optional?e("span",{class:"optional"},"(optional)"):this.required?e("span",{class:`required ${this.error?"error":""}`},"*"):null)),e("div",{key:"f9cc1be32a21e9eea261b329100834aed64798d3",class:"textInput__bottom-wrapper"},e("div",{key:"e727034537561658769b5684b1e58cafee018003",class:"input-container"},this.icon&&e("ifx-icon",{key:"0bf2ca089641172495c5c468848c277732ecbedf",icon:this.icon}),e("input",{key:"f9023b332f2810f3c42409beed24bddf956691e6",ref:t=>this.inputElement=t,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,maxlength:this.maxlength,class:`${this.icon?"icon":""}
                ${this.error?"error":""} 
              ${this.size==="s"?"input-s":""}
              ${this.success?"success":""}`})),this.caption&&!this.error&&e("div",{key:"66d0ee416a07f5da33fc1a85cf3e495c513452cf",class:`textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""`},this.caption),this.error&&e("div",{key:"2faa349527770517f8096e7dc583af9ddf79891a",class:"textInput__bottom-wrapper-caption error"},this.caption)))}static get formAssociated(){return!0}get el(){return r(this)}static get watchers(){return{value:["valueWatcher"]}}};p.style=a;export{p as ifx_text_field};
