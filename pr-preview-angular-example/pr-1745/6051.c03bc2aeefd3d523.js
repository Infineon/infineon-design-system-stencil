"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[6051],{6051:(h,a,o)=>{o.r(a),o.d(a,{ifx_spinner:()=>c,ifx_text_field:()=>i});var l=o(6330),t=o(787),p=o(1912);const c=(()=>{let r=class{constructor(n){(0,t.r)(this,n),this.inverted=!1}render(){return(0,t.h)("div",{key:"029e1fc94f4abd0fc3f938a29b37c872889ec5d9","aria-label":"spinner indicating a loading process",class:this.getClassNames()},(0,t.h)("div",{key:"b648bc1a06b2a92d61a75fd99a4fc0884d10b882",class:`${"brand"!==this.variant?"border":""} ${this.inverted?"inverted":""}`}),"brand"===this.variant&&(0,t.h)("div",{key:"f949d5f4d477d440b2ca44121e72e6d94c49b984",class:`semiconductor ${this.inverted?"inverted":""} ${this.getSizeClass()}`},(0,t.h)("svg",{key:"76e04a2c9290f71b4628e977087f6cce3a09bdb9",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("g",{key:"3927589002256e8f9e721a009864787cc61410a5",id:"spinner/conductor"},(0,t.h)("path",{key:"50cfe42b648991f1957ab51dc78d6cb20849048b",id:"Vector",d:"M38.75 18.75C39.4375 18.75 40 19.3125 40 20C40 20.6875 39.4409 21.25 38.75 21.25H35V26.25H38.75C39.4375 26.25 40 26.8125 40 27.5C40 28.1875 39.4409 28.75 38.75 28.75H35V30C35 32.7617 32.7617 35 30 35H28.75V38.75C28.75 39.4409 28.1875 40 27.5 40C26.8125 40 26.25 39.4409 26.25 38.75V35H21.25V38.75C21.25 39.4409 20.6875 40 20 40C19.3125 40 18.75 39.4409 18.75 38.75V35H13.75V38.75C13.75 39.4409 13.1875 40 12.5 40C11.8125 40 11.25 39.4409 11.25 38.75V35H10C7.23828 35 5 32.7617 5 30V28.75H1.25C0.559062 28.75 0 28.1875 0 27.5C0 26.8125 0.559062 26.25 1.25 26.25H5V21.25H1.25C0.559062 21.25 0 20.6875 0 20C0 19.3125 0.559062 18.75 1.25 18.75H5V13.75H1.25C0.559062 13.75 0 13.1875 0 12.5C0 11.8125 0.559062 11.25 1.25 11.25H5V10C5 7.23828 7.23828 5 10 5H11.25V1.25C11.25 0.5625 11.8125 0 12.5 0C13.1875 0 13.75 0.559063 13.75 1.25V5H18.75V1.25C18.75 0.559063 19.3091 0 20 0C20.6909 0 21.25 0.559063 21.25 1.25V5H26.25V1.25C26.25 0.559063 26.8091 0 27.5 0C28.1909 0 28.75 0.559063 28.75 1.25V5H30C32.7617 5 35 7.23828 35 10V11.25H38.75C39.4409 11.25 40 11.8091 40 12.5C40 13.1909 39.4409 13.75 38.75 13.75H35V18.75H38.75ZM32.5 10C32.5 8.62188 31.3781 7.5 30 7.5H10C8.62187 7.5 7.5 8.62188 7.5 10V30C7.5 31.3781 8.62187 32.5 10 32.5H30C31.3781 32.5 32.5 31.3781 32.5 30V10Z"})))))}getSizeClass(){return"s"==`${this.size}`?"s":""}getClassNames(){return(0,p.c)("spinner",this.size&&`spinner ${this.getSizeClass()}`)}};return r.style=":host{display:inline-block}.spinner{position:relative;width:40px;height:40px}.spinner.s{width:24px;height:24px}.border{box-sizing:border-box;position:absolute;width:100%;height:100%;border:4px solid transparent;border-top-color:#0A8276;border-left-color:#0A8276;border-right-color:#0A8276;border-top-left-radius:1px;border-top-right-radius:1px;border-radius:50%;animation:spin 2s linear infinite}.border.inverted{border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-right-color:#FFFFFF}.semiconductor{width:100%;height:100%;animation:spin 2s linear infinite}.semiconductor svg{fill:#0A8276}.semiconductor.inverted svg{fill:#FFFFFF}.semiconductor.s svg{width:24px;height:24px}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",r})(),i=(()=>{let r=class{constructor(n){(0,t.r)(this,n),this.ifxInput=(0,t.c)(this,"ifxInput",7),n.$hostElement$["s-ei"]?this.internals=n.$hostElement$["s-ei"]:(this.internals=n.$hostElement$.attachInternals(),n.$hostElement$["s-ei"]=this.internals),this.placeholder="Placeholder",this.value="",this.error=!1,this.label="",this.icon="",this.caption="",this.size="m",this.required=!1,this.optional=!1,this.success=!1,this.disabled=!1,this.showDeleteIcon=!1}valueWatcher(n){n!==this.inputElement.value&&(this.inputElement.value=n)}reset(){var n=this;return(0,l.A)(function*(){n.value="",n.inputElement.value=""})()}handleDeleteContent(){this.reset(),this.ifxInput.emit(this.value)}handleInput(){const n=this.inputElement.value;this.value=n,this.internals.setFormValue(n),this.ifxInput.emit(this.value)}formResetCallback(){this.internals.setValidity({}),this.internals.setFormValue("")}render(){return(0,t.h)("div",{key:"0188267b3df484e2a0575ae0326af647d5a21c1f","aria-label":"a text field for user input","aria-value":this.value,"aria-disabled":this.disabled,class:"textInput__container "+(this.disabled?"disabled":"")},(0,t.h)("div",{key:"e8ab0747e882a4790dfccf5e4f349d7911277435",class:"textInput__top-wrapper"},(0,t.h)("label",{key:"a3127eb7de886d157a48547174bd726cd3bdba75",htmlFor:"text-field"},(0,t.h)("slot",{key:"baf7f5a47746eaabb6a13175155087bf114089b9"}),this.optional&&this.required?(0,t.h)("span",{class:"optional-required"},"(optional) *"):this.optional?(0,t.h)("span",{class:"optional"},"(optional)"):this.required?(0,t.h)("span",{class:"required "+(this.error?"error":"")},"*"):null)),(0,t.h)("div",{key:"ec98a4d94e3b946b3a89a99d61217687079a8037",class:"textInput__bottom-wrapper"},(0,t.h)("div",{key:"8387605ed7655e7d0def0033b0fa4974db7fc9ff",class:"input-container"},this.icon&&(0,t.h)("ifx-icon",{key:"0582c4554c9279e99a14f9bb0906e80712036d0d",class:"input-icon",icon:this.icon}),(0,t.h)("input",{key:"0252b09ae6585ac0813d616a7836ef4b89510a2c",ref:n=>this.inputElement=n,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,maxlength:this.maxlength,class:`${this.icon?"icon":""}\n                ${this.error?"error":""} \n              ${"s"===this.size?"input-s":""}\n              ${this.success?"success":""}`}),this.showDeleteIcon&&this.value&&(0,t.h)("ifx-icon",{key:"a20b54c126ec56bc3e7803e96e6b45d61c7e074d",class:"delete-icon",icon:"cremove16",onClick:()=>this.handleDeleteContent()})),this.caption&&!this.error&&(0,t.h)("div",{key:"ed4bae2eea7162e45a29cd4146c9fadbe0b4b271",class:`textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""`},this.caption),this.error&&(0,t.h)("div",{key:"e9831a365bd4cd56de7cea5eb5cb2d311677da5c",class:"textInput__bottom-wrapper-caption error"},this.caption)))}static get formAssociated(){return!0}get el(){return(0,t.g)(this)}static get watchers(){return{value:["valueWatcher"]}}};return r.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:var(--ifx-font-family)}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .textInput__top-wrapper label .required.error{color:#CD002F}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;font-family:"Source Sans 3";font-size:1rem;line-height:1.5rem;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0;text-overflow:ellipsis}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px;font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.input-s::placeholder{font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:40px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,:focus,.error,.success){border:1px solid #575352}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper .input-icon{position:absolute;top:50%;transform:translateY(-50%);left:16px;transition:0.3s;color:#8D8786}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}.textInput__container .delete-icon{position:absolute;right:16px}.textInput__container .delete-icon :hover{cursor:pointer}',r})()},1912:(h,a,o)=>{o.d(a,{c:()=>t});var p,l={exports:{}};p=l,function(){var u={}.hasOwnProperty;function s(){for(var e="",i=0;i<arguments.length;i++){var r=arguments[i];r&&(e=d(e,c(r)))}return e}function c(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var i="";for(var r in e)u.call(e,r)&&e[r]&&(i=d(i,r));return i}function d(e,i){return i?e?e+" "+i:e+i:e}p.exports?(s.default=s,p.exports=s):window.classNames=s}();const t=l.exports}}]);