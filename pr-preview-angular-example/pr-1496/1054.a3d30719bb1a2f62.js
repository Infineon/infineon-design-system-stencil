"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[1054],{1054:(p,r,s)=>{s.r(r),s.d(r,{ifx_date_picker:()=>d});var i=s(4612);const d=(()=>{let n=class{constructor(e){(0,i.r)(this,e),this.ifxDate=(0,i.c)(this,"ifxDate",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.size="s",this.error=!1,this.success=!1,this.disabled=!1}getDate(e){const t=new Date(e.target.value),a=t.getDate(),o=t.getMonth()+1,c=t.getFullYear();a&&o&&c&&(this.internals.setFormValue(t.toISOString().substring(0,10)),this.ifxDate.emit({day:a,month:o,year:c}))}handleInputFocusOnIconClick(){const e=this.el.shadowRoot.querySelector(".date__picker-input");e&&e.focus()}getBrowser(){return-1!=navigator.userAgent.indexOf("Chrome")?"Chrome":-1!=navigator.userAgent.indexOf("Opera")?"Opera":-1!=navigator.userAgent.indexOf("MSIE")?"IE":-1!=navigator.userAgent.indexOf("Firefox")?"Firefox":"unknown"}setFireFoxClasses(){const e=this.getBrowser(),t=this.el.shadowRoot.querySelector(".date__picker-input");"Firefox"===e?t.classList.add("firefox__classes"):t.classList.contains("firefox__classes")&&t.classList.remove("firefox__classes")}componentDidLoad(){this.setFireFoxClasses()}formResetCallback(){this.internals.setFormValue(null)}render(){return(0,i.h)("div",{key:"1e97da9b3236a2089fdcf409a3b415e317a5cf1e",class:`input__wrapper ${"l"===this.size?"large":"small"} ${this.disabled?"disabled":""}`},(0,i.h)("input",{key:"edde30062a6e69506ad8b975150b8aed6c5a7d47",class:`date__picker-input ${this.error?"error":""} ${this.success?"success":""}`,type:"date",disabled:this.disabled,onChange:e=>this.getDate(e)}),(0,i.h)("div",{key:"eeb17d66260bb9a7e8611626088d24acdc69ce05",class:"icon__wrapper",onClick:()=>this.handleInputFocusOnIconClick()},(0,i.h)("ifx-icon",{key:"6a59ad9de306260d67e5a6dccff4c3dc13f0f39c",icon:"calendar16"})))}static get formAssociated(){return!0}get el(){return(0,i.g)(this)}};return n.style=':host{display:block}.date__picker-input{font-family:"Source Sans 3";outline:none;width:100%;cursor:pointer;border-radius:1px;border:1px solid #8D8786;height:100%}.date__picker-input.firefox__classes{padding:8px 16px;color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px;cursor:pointer}.date__picker-input:focus:not(.error,.success){border-color:#0A8276}.date__picker-input:hover:not(:disabled,:focus,.error,.success){border-color:#575352}.date__picker-input:disabled{border-color:#575352;background-color:#EEEDED}.date__picker-input.error{border-color:#CD002F}.date__picker-input.success{border-color:#4CA460}.date__picker-input::-webkit-datetime-edit-text{color:#8D8786;font-size:16px;font-style:normal;font-weight:400;line-height:24px}::-webkit-datetime-edit{color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px}::-webkit-datetime-edit-fields-wrapper{padding:8px 16px;padding-bottom:9px;transform:translateY(1px)}::-webkit-inner-spin-button{display:none}::-webkit-calendar-picker-indicator{position:absolute;right:15px;font-size:19px;cursor:pointer}.input__wrapper{display:flex;justify-content:space-between;align-items:center;align-self:stretch;background:#FFFFFF;position:relative}.input__wrapper.large{height:40px}.input__wrapper.small{height:36px}.input__wrapper.disabled .icon__wrapper{background-color:#EEEDED}.icon__wrapper{position:absolute;right:14px;padding:2px;width:25px;display:flex;justify-content:flex-end;pointer-events:none;z-index:100;background-color:#FFFFFF;line-height:16px}.icon__wrapper ifx-icon{vertical-align:middle}',n})()}}]);