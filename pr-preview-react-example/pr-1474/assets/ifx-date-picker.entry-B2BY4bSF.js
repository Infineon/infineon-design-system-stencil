import{r as a,c as o,h as i,g as c}from"./index-ohjoH_II.js";const l=':host{display:block}.date__picker-input{font-family:"Source Sans 3";outline:none;width:100%;cursor:pointer;border-radius:1px;border:1px solid #8D8786;height:100%}.date__picker-input.firefox__classes{padding:8px 16px;color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px;cursor:pointer}.date__picker-input:focus:not(.error,.success){border-color:#0A8276}.date__picker-input:hover:not(:disabled,:focus,.error,.success){border-color:#575352}.date__picker-input:disabled{border-color:#575352;background-color:#EEEDED}.date__picker-input.error{border-color:#CD002F}.date__picker-input.success{border-color:#4CA460}.date__picker-input::-webkit-datetime-edit-text{color:#8D8786;font-size:16px;font-style:normal;font-weight:400;line-height:24px}::-webkit-datetime-edit{color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px}::-webkit-datetime-edit-fields-wrapper{padding:8px 16px;padding-bottom:9px;transform:translateY(1px)}::-webkit-inner-spin-button{display:none}::-webkit-calendar-picker-indicator{position:absolute;right:15px;font-size:19px;cursor:pointer}.input__wrapper{display:flex;justify-content:space-between;align-items:center;align-self:stretch;background:#FFFFFF;position:relative}.input__wrapper.large{height:40px}.input__wrapper.small{height:36px}.input__wrapper.disabled .icon__wrapper{background-color:#EEEDED}.icon__wrapper{position:absolute;right:14px;padding:2px;width:25px;display:flex;justify-content:flex-end;pointer-events:none;z-index:100;background-color:#FFFFFF;line-height:16px}.icon__wrapper ifx-icon{vertical-align:middle}',d=l,p=class{constructor(e){a(this,e),this.ifxDate=o(this,"ifxDate",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.size="s",this.error=!1,this.success=!1,this.disabled=!1}getDate(e){const t=new Date(e.target.value),r=t.getDate(),s=t.getMonth()+1,n=t.getFullYear();r&&s&&n&&(this.internals.setFormValue(t.toISOString().substring(0,10)),this.ifxDate.emit({day:r,month:s,year:n}))}handleInputFocusOnIconClick(){const e=this.el.shadowRoot.querySelector(".date__picker-input");e&&e.focus()}getBrowser(){return navigator.userAgent.indexOf("Chrome")!=-1?"Chrome":navigator.userAgent.indexOf("Opera")!=-1?"Opera":navigator.userAgent.indexOf("MSIE")!=-1?"IE":navigator.userAgent.indexOf("Firefox")!=-1?"Firefox":"unknown"}setFireFoxClasses(){const e=this.getBrowser(),t=this.el.shadowRoot.querySelector(".date__picker-input");e==="Firefox"?t.classList.add("firefox__classes"):t.classList.contains("firefox__classes")&&t.classList.remove("firefox__classes")}componentDidLoad(){this.setFireFoxClasses()}formResetCallback(){this.internals.setFormValue(null)}render(){return i("div",{key:"1e97da9b3236a2089fdcf409a3b415e317a5cf1e",class:`input__wrapper ${this.size==="l"?"large":"small"} ${this.disabled?"disabled":""}`},i("input",{key:"edde30062a6e69506ad8b975150b8aed6c5a7d47",class:`date__picker-input ${this.error?"error":""} ${this.success?"success":""}`,type:"date",disabled:this.disabled,onChange:e=>this.getDate(e)}),i("div",{key:"eeb17d66260bb9a7e8611626088d24acdc69ce05",class:"icon__wrapper",onClick:()=>this.handleInputFocusOnIconClick()},i("ifx-icon",{key:"6a59ad9de306260d67e5a6dccff4c3dc13f0f39c",icon:"calendar16"})))}static get formAssociated(){return!0}get el(){return c(this)}};p.style=d;export{p as ifx_date_picker};
