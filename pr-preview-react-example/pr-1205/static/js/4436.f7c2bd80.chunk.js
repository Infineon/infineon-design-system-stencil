"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[4436],{4436:(e,t,i)=>{i.r(t),i.d(t,{ifx_date_picker:()=>n,ifx_icon:()=>s});var r=i(7770),o=i(243);const n=class{constructor(e){(0,r.r)(this,e),this.ifxDate=(0,r.c)(this,"ifxDate",7),this.size="s",this.error=!1,this.success=!1,this.disabled=!1}getDate(e){const t=new Date(e.target.value),i=t.getDate(),r=t.getMonth()+1,o=t.getFullYear();i&&r&&o&&this.ifxDate.emit({day:i,month:r,year:o})}handleInputFocusOnIconClick(){const e=this.el.shadowRoot.querySelector(".date__picker-input");e&&e.focus()}getBrowser(){return-1!=navigator.userAgent.indexOf("Chrome")?"Chrome":-1!=navigator.userAgent.indexOf("Opera")?"Opera":-1!=navigator.userAgent.indexOf("MSIE")?"IE":-1!=navigator.userAgent.indexOf("Firefox")?"Firefox":"unknown"}setFireFoxClasses(){const e=this.getBrowser(),t=this.el.shadowRoot.querySelector(".date__picker-input");"Firefox"===e?t.classList.add("firefox__classes"):t.classList.contains("firefox__classes")&&t.classList.remove("firefox__classes")}componentDidLoad(){this.setFireFoxClasses()}render(){return(0,r.h)("div",{key:"9d18af826d7f1a74111835e5d7d301b82454bcfe",class:"input__wrapper ".concat("l"===this.size?"large":"small"," ").concat(this.disabled?"disabled":"")},(0,r.h)("input",{key:"21c74a2fa4c335f1094cfede0dec59f8c3b6e4a2",class:"date__picker-input ".concat(this.error?"error":""," ").concat(this.success?"success":""),type:"date",disabled:this.disabled,onChange:e=>this.getDate(e)}),(0,r.h)("div",{key:"065a37fd313a82a1445389744607f3c8308934a5",class:"icon__wrapper",onClick:()=>this.handleInputFocusOnIconClick()},(0,r.h)("ifx-icon",{key:"ad46e110cb689eed8f236186fc8cdce4fb75b829",icon:"calendar16"})))}get el(){return(0,r.g)(this)}};n.style=':host{display:inline-block}.date__picker-input{font-family:"Source Sans 3";outline:none;width:100%;cursor:pointer;border-radius:1px;border:1px solid #8D8786}.date__picker-input.firefox__classes{padding:8px 16px;color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px;cursor:pointer}.date__picker-input:focus:not(.error,.success){border-color:#0A8276}.date__picker-input:hover:not(:disabled,:focus,.error,.success){border-color:#575352}.date__picker-input:disabled{border-color:#575352;background-color:#EEEDED}.date__picker-input.error{border-color:#CD002F}.date__picker-input.success{border-color:#4CA460}.date__picker-input::-webkit-datetime-edit-text{color:#8D8786;font-size:16px;font-style:normal;font-weight:400;line-height:24px}::-webkit-datetime-edit{color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px}::-webkit-datetime-edit-fields-wrapper{padding:8px 16px;padding-bottom:9px;transform:translateY(1px)}::-webkit-inner-spin-button{display:none}::-webkit-calendar-picker-indicator{position:absolute;right:15px;font-size:19px;cursor:pointer}.input__wrapper{display:flex;justify-content:space-between;align-items:center;align-self:stretch;background:#FFFFFF;position:relative}.input__wrapper.large{width:400px}.input__wrapper.small{width:173px}.input__wrapper.disabled .icon__wrapper{background-color:#EEEDED}.icon__wrapper{position:absolute;right:14px;padding:2px;width:25px;display:flex;justify-content:flex-end;pointer-events:none;z-index:100;background-color:#FFFFFF;line-height:16px}.icon__wrapper ifx-icon{vertical-align:middle}';const s=class{constructor(e){(0,r.r)(this,e),this.consoleError=(0,r.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(e){const t=document.createElement("div");return t.innerHTML=e,t.firstChild}convertHtmlToObject(e){return Array.from(e.attributes,(e=>{let{name:t,value:i}=e;return{name:t,value:i}})).reduce(((e,t)=>(e[t.name]=t.value,e)),{})}convertPathsToVnode(e){let t=[];const i=this.convertHtmlToObject(e),o=(0,r.h)("path",i);if(t.push(o),e.firstChild){const i=e.querySelectorAll("path"),o=e.querySelectorAll("path").length;for(let e=0;e<o;e++){let o=this.convertHtmlToObject(i[e]),n=(0,r.h)("path",o);t.push(n)}}return t}getSVG(e){return(0,r.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...e)}constructIcon(){if(this.ifxIcon){const e=this.convertStringToHtml(this.ifxIcon.svgContent),t=this.convertPathsToVnode(e),i=this.getSVG(t);return this.consoleError.emit(!1),i}return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){this.ifxIcon=(0,o.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,((e,t)=>t)))}render(){return(0,r.h)(r.a,{key:"c60ef7ae43cc8be719209063607f74e826023a2b"},this.constructIcon())}};s.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}"}}]);
//# sourceMappingURL=4436.f7c2bd80.chunk.js.map