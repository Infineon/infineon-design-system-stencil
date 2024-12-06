"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[2587],{2587:(m,l,o)=>{o.r(l),o.d(l,{ifx_date_picker:()=>d,ifx_icon:()=>b});var r=o(266),h=o(9600);const d=class{constructor(t){(0,r.r)(this,t),this.ifxDate=(0,r.c)(this,"ifxDate",7),t.$hostElement$["s-ei"]?this.internals=t.$hostElement$["s-ei"]:(this.internals=t.$hostElement$.attachInternals(),t.$hostElement$["s-ei"]=this.internals),this.inputId="ifx-date-picker-"+ ++f,this.size="s",this.error=!1,this.success=!1,this.disabled=!1,this.AriaLabel=void 0,this.value=void 0,this.max=void 0,this.min=void 0,this.required=!1,this.label=void 0,this.caption=void 0}getDate(t){const e=t.target.value,i=new Date(e),n=i.getDate(),s=i.getMonth()+1,a=i.getFullYear();if(!e)return this.internals.setFormValue(null),void this.ifxDate.emit({day:n,month:s,year:a});this.el.shadowRoot.querySelector(".date__picker-input").classList.add("has-value"),this.internals.setFormValue(i.toISOString().substring(0,10)),this.ifxDate.emit({day:n,month:s,year:a})}handleInputFocusOnIconClick(){const t=this.el.shadowRoot.querySelector(".date__picker-input");t&&t.focus()}getBrowser(){return-1!=navigator.userAgent.indexOf("Chrome")?"Chrome":-1!=navigator.userAgent.indexOf("Opera")?"Opera":-1!=navigator.userAgent.indexOf("MSIE")?"IE":-1!=navigator.userAgent.indexOf("Firefox")?"Firefox":"unknown"}setFireFoxClasses(){const t=this.getBrowser(),e=this.el.shadowRoot.querySelector(".date__picker-input");"Firefox"===t?e.classList.add("firefox__classes"):e.classList.contains("firefox__classes")&&e.classList.remove("firefox__classes")}componentDidLoad(){this.setFireFoxClasses(),this.value&&this.getDate({target:{value:this.value}})}formResetCallback(){this.internals.setFormValue(null)}render(){var t,e;return(0,r.h)("div",{key:"8939525c9d1b6ca3d6d1d598f18c801eaa274925",class:`date__picker-container ${this.error?"error":""} ${this.disabled?"disabled":""}`},(0,r.h)("label",{key:"b6943a24e0b7b92826f8f0a951aa8ba07b07a602",class:"label__wrapper",htmlFor:this.inputId},null===(t=this.label)||void 0===t?void 0:t.trim()),(0,r.h)("div",{key:"dbb6810bec0365a771ee39feca14455d553f308f",class:`input__wrapper ${"l"===this.size?"large":"small"} ${this.disabled?"disabled":""}`},(0,r.h)("input",{key:"c4532643be4a7a29a9c8837787e997059bdaa7c1",type:"date",class:`date__picker-input ${this.error?"error":""} ${this.success?"success":""}`,disabled:!!this.disabled||void 0,"aria-invalid":!!this.error||void 0,"aria-label":this.AriaLabel,max:this.max,min:this.min,value:this.value,required:this.required,onChange:i=>this.getDate(i)}),(0,r.h)("div",{key:"401c972432d3c0a057a3fe812fa730372b12fcbe",class:"icon__wrapper",role:"button",onClick:()=>this.handleInputFocusOnIconClick()},(0,r.h)("ifx-icon",{key:"125529210997e8dd611e5bb394909a1cf08fc47b",icon:"calendar16","aria-hidden":"true"}))),(null===(e=this.caption)||void 0===e?void 0:e.trim())&&(0,r.h)("div",{key:"1367a5dc715de1f7f0ea40a9995ce07a9030aae8",class:"caption__wrapper"},this.caption.trim()))}static get formAssociated(){return!0}get el(){return(0,r.g)(this)}};let f=0;d.style='.date__picker-container{display:flex;flex-direction:column}.date__picker-container .label__wrapper{color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3"}.date__picker-container.disabled .label__wrapper{color:#575352}.date__picker-container.error .caption__wrapper{color:#CD002F}.date__picker-container.disabled .caption__wrapper{color:#575352}.date__picker-container .caption__wrapper{margin-top:4px;color:#1D1D1D;font:400 0.75rem/1rem "Source Sans 3"}.date__picker-input{font-family:"Source Sans 3";outline:none;width:100%;cursor:pointer;border-radius:1px;border:1px solid #8D8786;height:100%}.date__picker-input.firefox__classes{padding:8px 16px;color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px;cursor:pointer}.date__picker-input:focus:not(.error,.success){border-color:#0A8276}.date__picker-input:hover:not(:disabled,:focus,.error,.success){border-color:#575352}.date__picker-input:disabled{border-color:#575352;background-color:#EEEDED}.date__picker-input.error{border-color:#CD002F}.date__picker-input.success:not(.error){border-color:#4CA460}.date__picker-input::-webkit-datetime-edit-text{color:#8D8786;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.date__picker-input.has-value::-webkit-datetime-edit-text{color:#1D1D1D}.date__picker-input.has-value::-webkit-datetime-edit{color:#1D1D1D}::-webkit-datetime-edit{color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px}::-webkit-datetime-edit-fields-wrapper{padding:8px 16px;padding-bottom:9px;transform:translateY(1px)}::-webkit-inner-spin-button{display:none}::-webkit-calendar-picker-indicator{position:absolute;right:15px;font-size:19px;cursor:pointer;border-radius:1px}::-webkit-calendar-picker-indicator:focus-within{outline:2px solid #0A8276;outline-offset:2px}.input__wrapper{display:flex;justify-content:space-between;align-items:center;align-self:stretch;background:#FFFFFF;position:relative}.input__wrapper.large{height:40px}.input__wrapper.small{height:36px}.input__wrapper.disabled .icon__wrapper{background-color:#EEEDED}.icon__wrapper{position:absolute;right:17px;padding:2px;display:flex;justify-content:flex-end;align-items:center;pointer-events:none;z-index:100;background-color:#FFFFFF;line-height:16px}.icon__wrapper ifx-icon{vertical-align:middle}';const b=(()=>{let t=class{constructor(e){(0,r.r)(this,e),this.consoleError=(0,r.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(e){const i=document.createElement("div");return i.innerHTML=e,i.firstChild}convertHtmlToObject(e){return Array.from(e.attributes,({name:n,value:s})=>({name:n,value:s})).reduce((n,s)=>(n[s.name]=s.value,n),{})}convertPathsToVnode(e){let i=[];const n=this.convertHtmlToObject(e),s=(0,r.h)("path",n);if(i.push(s),e.firstChild){const a=e.querySelectorAll("path"),p=e.querySelectorAll("path").length;for(let c=0;c<p;c++){let x=this.convertHtmlToObject(a[c]),g=(0,r.h)("path",x);i.push(g)}}return i}getSVG(e){return(0,r.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...e)}constructIcon(){if(this.ifxIcon){const e=this.convertStringToHtml(this.ifxIcon.svgContent),i=this.convertPathsToVnode(e);return this.getSVG(i)}return""!==this.icon?(console.error("Icon not found!"),void this.consoleError.emit(!0)):void 0}componentWillLoad(){this.ifxIcon=(0,h.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(n,s)=>s))}render(){return(0,r.h)(r.a,{key:"91ccb22f1cc67f3d4b91fb69c37cda13c941e109"},this.constructIcon())}};return t.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}",t})()}}]);