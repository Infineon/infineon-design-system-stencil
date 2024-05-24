import{r as o,c as a,h as i,g as c}from"./index-Dbu0QXeh.js";const d=':host{display:inline-block}.date__picker-input{font-family:"Source Sans 3";outline:none;width:100%;cursor:pointer;border-radius:1px;border:1px solid #8D8786}.date__picker-input.firefox__classes{padding:8px 16px;color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px;cursor:pointer}.date__picker-input:focus:not(.error,.success){border-color:#0A8276}.date__picker-input:hover:not(:disabled,:focus,.error,.success){border-color:#575352}.date__picker-input:disabled{border-color:#575352;background-color:#EEEDED}.date__picker-input.error{border-color:#CD002F}.date__picker-input.success{border-color:#4CA460}.date__picker-input::-webkit-datetime-edit-text{color:#8D8786;font-size:16px;font-style:normal;font-weight:400;line-height:24px}::-webkit-datetime-edit{color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px}::-webkit-datetime-edit-fields-wrapper{padding:8px 16px;padding-bottom:9px;transform:translateY(1px)}::-webkit-inner-spin-button{display:none}::-webkit-calendar-picker-indicator{position:absolute;right:15px;font-size:19px;cursor:pointer}.input__wrapper{display:flex;justify-content:space-between;align-items:center;align-self:stretch;background:#FFFFFF;position:relative}.input__wrapper.large{width:400px}.input__wrapper.small{width:173px}.input__wrapper.disabled .icon__wrapper{background-color:#EEEDED}.icon__wrapper{position:absolute;right:14px;padding:2px;width:25px;display:flex;justify-content:flex-end;pointer-events:none;z-index:100;background-color:#FFFFFF;line-height:16px}.icon__wrapper ifx-icon{vertical-align:middle}',p=d,l=class{constructor(e){o(this,e),this.ifxDate=a(this,"ifxDate",7),this.size="s",this.error=!1,this.success=!1,this.disabled=!1,this.name=""}getDate(e){const t=new Date(e.target.value),r=t.getDate(),s=t.getMonth()+1,n=t.getFullYear();r&&s&&n&&this.ifxDate.emit({day:r,month:s,year:n})}handleInputFocusOnIconClick(){const e=this.el.shadowRoot.querySelector(".date__picker-input");e&&e.focus()}getBrowser(){return navigator.userAgent.indexOf("Chrome")!=-1?"Chrome":navigator.userAgent.indexOf("Opera")!=-1?"Opera":navigator.userAgent.indexOf("MSIE")!=-1?"IE":navigator.userAgent.indexOf("Firefox")!=-1?"Firefox":"unknown"}setFireFoxClasses(){const e=this.getBrowser(),t=this.el.shadowRoot.querySelector(".date__picker-input");e==="Firefox"?t.classList.add("firefox__classes"):t.classList.contains("firefox__classes")&&t.classList.remove("firefox__classes")}componentDidLoad(){this.setFireFoxClasses()}render(){return i("div",{key:"b5e7c4198d7b8c165a6b86e5b90c6c19eff266a7",class:`input__wrapper ${this.size==="l"?"large":"small"} ${this.disabled?"disabled":""}`},i("input",{key:"df95360aabf52c52fdaaa4b45bf1d287f995e54e",class:`date__picker-input ${this.error?"error":""} ${this.success?"success":""}`,type:"date",name:this.name,disabled:this.disabled,onChange:e=>this.getDate(e)}),i("div",{key:"468d2e5b2d2d7e0fd3d632d3091b75d02aea0d3b",class:"icon__wrapper",onClick:()=>this.handleInputFocusOnIconClick()},i("ifx-icon",{key:"f8e38812f671b4d9956d4c16c13e7c0300302402",icon:"calendar16"})))}get el(){return c(this)}};l.style=p;export{l as ifx_date_picker};
