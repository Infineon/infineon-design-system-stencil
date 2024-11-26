"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[6051],{6051:(f,a,o)=>{o.r(a),o.d(a,{ifx_spinner:()=>c,ifx_text_field:()=>i});var l=o(6330),t=o(221),p=o(1912);const c=(()=>{let r=class{constructor(n){(0,t.r)(this,n),this.size=void 0,this.variant=void 0,this.inverted=!1}render(){return(0,t.h)("div",{key:"83d5b9453610b862a68aa9ece33899c4f04d827d","aria-label":"spinner indicating a loading process",class:this.getClassNames()},(0,t.h)("div",{key:"bfcdabadb5086143182e10a5cfa6763865288217",class:`${"brand"!==this.variant?"border":""} ${this.inverted?"inverted":""}`}),"brand"===this.variant&&(0,t.h)("div",{key:"19bbd5c630d14d9823a635ac546a2ecd8cc908e4",class:`semiconductor ${this.inverted?"inverted":""} ${this.getSizeClass()}`},(0,t.h)("svg",{key:"b4228122ce3d92aabea862c9b0757563c90b7b0f",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("g",{key:"ef219b50001f54cb297d31c70a1ec6c37a491023",id:"spinner/conductor"},(0,t.h)("path",{key:"acd452dcc07558d4841d0cfcb9c333eb25159398",id:"Vector",d:"M38.75 18.75C39.4375 18.75 40 19.3125 40 20C40 20.6875 39.4409 21.25 38.75 21.25H35V26.25H38.75C39.4375 26.25 40 26.8125 40 27.5C40 28.1875 39.4409 28.75 38.75 28.75H35V30C35 32.7617 32.7617 35 30 35H28.75V38.75C28.75 39.4409 28.1875 40 27.5 40C26.8125 40 26.25 39.4409 26.25 38.75V35H21.25V38.75C21.25 39.4409 20.6875 40 20 40C19.3125 40 18.75 39.4409 18.75 38.75V35H13.75V38.75C13.75 39.4409 13.1875 40 12.5 40C11.8125 40 11.25 39.4409 11.25 38.75V35H10C7.23828 35 5 32.7617 5 30V28.75H1.25C0.559062 28.75 0 28.1875 0 27.5C0 26.8125 0.559062 26.25 1.25 26.25H5V21.25H1.25C0.559062 21.25 0 20.6875 0 20C0 19.3125 0.559062 18.75 1.25 18.75H5V13.75H1.25C0.559062 13.75 0 13.1875 0 12.5C0 11.8125 0.559062 11.25 1.25 11.25H5V10C5 7.23828 7.23828 5 10 5H11.25V1.25C11.25 0.5625 11.8125 0 12.5 0C13.1875 0 13.75 0.559063 13.75 1.25V5H18.75V1.25C18.75 0.559063 19.3091 0 20 0C20.6909 0 21.25 0.559063 21.25 1.25V5H26.25V1.25C26.25 0.559063 26.8091 0 27.5 0C28.1909 0 28.75 0.559063 28.75 1.25V5H30C32.7617 5 35 7.23828 35 10V11.25H38.75C39.4409 11.25 40 11.8091 40 12.5C40 13.1909 39.4409 13.75 38.75 13.75H35V18.75H38.75ZM32.5 10C32.5 8.62188 31.3781 7.5 30 7.5H10C8.62187 7.5 7.5 8.62188 7.5 10V30C7.5 31.3781 8.62187 32.5 10 32.5H30C31.3781 32.5 32.5 31.3781 32.5 30V10Z"})))))}getSizeClass(){return"s"==`${this.size}`?"s":""}getClassNames(){return(0,p.c)("spinner",this.size&&`spinner ${this.getSizeClass()}`)}};return r.style=":host{display:inline-block}.spinner{position:relative;width:40px;height:40px}.spinner.s{width:24px;height:24px}.border{box-sizing:border-box;position:absolute;width:100%;height:100%;border:4px solid transparent;border-top-color:#0A8276;border-left-color:#0A8276;border-right-color:#0A8276;border-top-left-radius:1px;border-top-right-radius:1px;border-radius:50%;animation:spin 2s linear infinite}.border.inverted{border-top-color:#FFFFFF;border-left-color:#FFFFFF;border-right-color:#FFFFFF}.semiconductor{width:100%;height:100%;animation:spin 2s linear infinite}.semiconductor svg{fill:#0A8276}.semiconductor.inverted svg{fill:#FFFFFF}.semiconductor.s svg{width:24px;height:24px}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",r})(),i=(()=>{let r=class{constructor(n){(0,t.r)(this,n),this.ifxInput=(0,t.c)(this,"ifxInput",7),n.$hostElement$["s-ei"]?this.internals=n.$hostElement$["s-ei"]:(this.internals=n.$hostElement$.attachInternals(),n.$hostElement$["s-ei"]=this.internals),this.placeholder="Placeholder",this.value="",this.error=!1,this.label="",this.icon="",this.caption="",this.size="m",this.required=!1,this.optional=!1,this.success=!1,this.disabled=!1,this.maxlength=void 0}valueWatcher(n){n!==this.inputElement.value&&(this.inputElement.value=n)}reset(){var n=this;return(0,l.A)(function*(){n.value="",n.inputElement.value=""})()}handleInput(){const n=this.inputElement.value;this.value=n,this.internals.setFormValue(n),this.ifxInput.emit(this.value)}formResetCallback(){this.internals.setValidity({}),this.internals.setFormValue("")}render(){return(0,t.h)("div",{key:"0e305f654b23017d2586582f521db540c5588528","aria-label":"a text field for user input","aria-value":this.value,"aria-disabled":this.disabled,class:"textInput__container "+(this.disabled?"disabled":"")},(0,t.h)("div",{key:"f6c39be555f4e115b2fd5cd173a9a7ef7eb81e19",class:"textInput__top-wrapper"},(0,t.h)("label",{key:"3e981f3e82ede7819d620e756603f2e47696f454",htmlFor:"text-field"},(0,t.h)("slot",{key:"07bfe2052ab8b4c6f4fb966941693a044480db3c"}),this.optional&&this.required?(0,t.h)("span",{class:"optional-required"},"(optional) *"):this.optional?(0,t.h)("span",{class:"optional"},"(optional)"):this.required?(0,t.h)("span",{class:"required "+(this.error?"error":"")},"*"):null)),(0,t.h)("div",{key:"f9d4ef52623def6e401dc8d23461eb2282488ff2",class:"textInput__bottom-wrapper"},(0,t.h)("div",{key:"ac39fe30d1ebdbc06e2e58d8f9e4bb618fa62ff6",class:"input-container"},this.icon&&(0,t.h)("ifx-icon",{key:"f89b0f3d1a680baaeca4877580ecff19ae215cae",icon:this.icon}),(0,t.h)("input",{key:"7198c5df7f1b425f87f6aefcd970becc06a94821",ref:n=>this.inputElement=n,disabled:this.disabled,type:"text",id:"text-field",value:this.value,onInput:()=>this.handleInput(),placeholder:this.placeholder,maxlength:this.maxlength,class:`${this.icon?"icon":""}\n                ${this.error?"error":""} \n              ${"s"===this.size?"input-s":""}\n              ${this.success?"success":""}`})),this.caption&&!this.error&&(0,t.h)("div",{key:"6db39e811685358ab26531d9974768d05a30c198",class:`textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""`},this.caption),this.error&&(0,t.h)("div",{key:"b877a000326c11793ac725206d5200e10670bf71",class:"textInput__bottom-wrapper-caption error"},this.caption)))}static get formAssociated(){return!0}get el(){return(0,t.g)(this)}static get watchers(){return{value:["valueWatcher"]}}};return r.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:var(--ifx-font-family)}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .textInput__top-wrapper label .required.error{color:#CD002F}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;font-family:"Source Sans 3";font-size:1rem;line-height:1.5rem;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0;text-overflow:ellipsis}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px;font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.input-s::placeholder{font-size:0.875rem;line-height:1.25rem}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:40px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,:focus,.error,.success){border:1px solid #575352}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:50%;transform:translateY(-50%);left:16px;transition:0.3s;color:#8D8786}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}',r})()},1912:(f,a,o)=>{o.d(a,{c:()=>t});var p,l={exports:{}};p=l,function(){var u={}.hasOwnProperty;function s(){for(var e="",i=0;i<arguments.length;i++){var r=arguments[i];r&&(e=d(e,c(r)))}return e}function c(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var i="";for(var r in e)u.call(e,r)&&e[r]&&(i=d(i,r));return i}function d(e,i){return i?e?e+" "+i:e+i:e}p.exports?(s.default=s,p.exports=s):window.classNames=s}();const t=l.exports}}]);