import{r as i,h as t,c as n,g as r}from"./index-CE0y5Ls-.js";import{c as o}from"./index-72ac5051-B1g_EHyb.js";const a=":host{display:inline-block}.spinner{position:relative;width:40px;height:40px}.spinner.s{width:24px;height:24px}.border{box-sizing:border-box;position:absolute;width:100%;height:100%;border:4px solid transparent;border-top-color:#0A8276;border-left-color:#0A8276;border-right-color:#0A8276;border-top-left-radius:1px;border-top-right-radius:1px;border-radius:50%;animation:spin 2s linear infinite}.border.inverted{border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-right-color:#FFFFFF}.semiconductor{width:100%;height:100%;animation:spin 2s linear infinite}.semiconductor svg{fill:#0A8276}.semiconductor.inverted svg{fill:#FFFFFF}.semiconductor.s svg{width:24px;height:24px}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",s=a,l=class{constructor(e){i(this,e),this.inverted=!1}render(){return t("div",{key:"cf978839be28932d5660441d1b37152d44a1219c","aria-label":"spinner indicating a loading process",class:this.getClassNames()},t("div",{key:"dc5fe14851c4e74310e23bb0197815cbd099c26d",class:`${this.variant!=="brand"?"border":""} ${this.inverted?"inverted":""}`}),this.variant==="brand"&&t("div",{key:"db1d3e27d6f4eb42064fe9483de7add1b51be33c",class:`semiconductor ${this.inverted?"inverted":""} ${this.getSizeClass()}`},t("svg",{key:"ac0243c8ef637e9a6895555ce04a94c331b33f9b",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("g",{key:"5fc5de05b44ebbde3cd88f57a92ae2e82dad7396",id:"spinner/conductor"},t("path",{key:"9dd49a642049559ed3b56d6f8e4697de6763fd47",id:"Vector",d:"M38.75 18.75C39.4375 18.75 40 19.3125 40 20C40 20.6875 39.4409 21.25 38.75 21.25H35V26.25H38.75C39.4375 26.25 40 26.8125 40 27.5C40 28.1875 39.4409 28.75 38.75 28.75H35V30C35 32.7617 32.7617 35 30 35H28.75V38.75C28.75 39.4409 28.1875 40 27.5 40C26.8125 40 26.25 39.4409 26.25 38.75V35H21.25V38.75C21.25 39.4409 20.6875 40 20 40C19.3125 40 18.75 39.4409 18.75 38.75V35H13.75V38.75C13.75 39.4409 13.1875 40 12.5 40C11.8125 40 11.25 39.4409 11.25 38.75V35H10C7.23828 35 5 32.7617 5 30V28.75H1.25C0.559062 28.75 0 28.1875 0 27.5C0 26.8125 0.559062 26.25 1.25 26.25H5V21.25H1.25C0.559062 21.25 0 20.6875 0 20C0 19.3125 0.559062 18.75 1.25 18.75H5V13.75H1.25C0.559062 13.75 0 13.1875 0 12.5C0 11.8125 0.559062 11.25 1.25 11.25H5V10C5 7.23828 7.23828 5 10 5H11.25V1.25C11.25 0.5625 11.8125 0 12.5 0C13.1875 0 13.75 0.559063 13.75 1.25V5H18.75V1.25C18.75 0.559063 19.3091 0 20 0C20.6909 0 21.25 0.559063 21.25 1.25V5H26.25V1.25C26.25 0.559063 26.8091 0 27.5 0C28.1909 0 28.75 0.559063 28.75 1.25V5H30C32.7617 5 35 7.23828 35 10V11.25H38.75C39.4409 11.25 40 11.8091 40 12.5C40 13.1909 39.4409 13.75 38.75 13.75H35V18.75H38.75ZM32.5 10C32.5 8.62188 31.3781 7.5 30 7.5H10C8.62187 7.5 7.5 8.62188 7.5 10V30C7.5 31.3781 8.62187 32.5 10 32.5H30C31.3781 32.5 32.5 31.3781 32.5 30V10Z"})))))}getSizeClass(){return`${this.size}`=="s"?"s":""}getClassNames(){return o("spinner",this.size&&`spinner ${this.getSizeClass()}`)}};l.style=s;const p=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:var(--ifx-font-family)}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .textInput__top-wrapper label .required.error{color:#CD002F}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;font-family:"Source Sans 3";font-size:1rem;line-height:1.5rem;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0;text-overflow:ellipsis}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px;font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.input-s::placeholder{font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:40px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,:focus,.error,.success){border:1px solid #575352}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper .input-icon{position:absolute;top:50%;transform:translateY(-50%);left:16px;transition:0.3s;color:#8D8786}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}.textInput__container .delete-icon{position:absolute;right:16px}.textInput__container .delete-icon :hover{cursor:pointer}',d=p,c=class{constructor(e){i(this,e),this.ifxInput=n(this,"ifxInput",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.placeholder="Placeholder",this.value="",this.error=!1,this.label="",this.icon="",this.caption="",this.size="m",this.required=!1,this.optional=!1,this.success=!1,this.disabled=!1,this.showDeleteIcon=!1}valueWatcher(e){e!==this.inputElement.value&&(this.inputElement.value=e)}async reset(){this.value="",this.inputElement.value=""}handleDeleteContent(){this.reset(),this.ifxInput.emit(this.value)}handleInput(){const e=this.inputElement.value;this.value=e,this.internals.setFormValue(e),this.ifxInput.emit(this.value)}formResetCallback(){this.internals.setValidity({}),this.internals.setFormValue("")}render(){return t("div",{key:"12a53a8c847f15a3fff0a294f93160186730633d","aria-label":"a text field for user input","aria-value":this.value,"aria-disabled":this.disabled,class:`textInput__container ${this.disabled?"disabled":""}`},t("div",{key:"c6b8e09d2f52fbd4d2d508f0a805ed3ba2c50ead",class:"textInput__top-wrapper"},t("label",{key:"2d35c0176a2933da076db9cb4167816a6c866a11",htmlFor:"text-field"},t("slot",{key:"dbb3947e407d0db8917407c0bd5264ec8e33e4e0"}),this.optional&&this.required?t("span",{class:"optional-required"},"(optional) *"):this.optional?t("span",{class:"optional"},"(optional)"):this.required?t("span",{class:`required ${this.error?"error":""}`},"*"):null)),t("div",{key:"0ad0a1e7626c6bc071389538b6c16e4fe0ef9bec",class:"textInput__bottom-wrapper"},t("div",{key:"ea1ec3e191180ebae21195f652020a893bd126cf",class:"input-container"},this.icon&&t("ifx-icon",{key:"f009d76f1c699a484a719dce27890ecba361b46a",class:"input-icon",icon:this.icon}),t("input",{key:"503e6d9c709c0e722d22edf74a917b775efd0da0",ref:e=>this.inputElement=e,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,maxlength:this.maxlength,class:`${this.icon?"icon":""}
                ${this.error?"error":""} 
              ${this.size==="s"?"input-s":""}
              ${this.success?"success":""}`}),this.showDeleteIcon&&this.value&&t("ifx-icon",{key:"fafe1d0613d54b47ae8899412a70e654b7141ec2",class:"delete-icon",icon:"cremove16",onClick:()=>this.handleDeleteContent()})),this.caption&&!this.error&&t("div",{key:"3da6b9848cdd149eafd1180dd3220e09602a4ed1",class:`textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""`},this.caption),this.error&&t("div",{key:"c8fba8ec0503ef2daed7aaf2725cc0a8f7b31d04",class:"textInput__bottom-wrapper-caption error"},this.caption)))}static get formAssociated(){return!0}get el(){return r(this)}static get watchers(){return{value:["valueWatcher"]}}};c.style=d;export{l as ifx_spinner,c as ifx_text_field};
