import{r as o,c,h as i,g as l}from"./index-CRVdAhSC.js";const d='.date__picker-container{display:flex;flex-direction:column}.date__picker-container .label__wrapper{color:#1D1D1D;font:400 1rem/1.5rem "Source Sans 3"}.date__picker-container.disabled .label__wrapper{color:#575352}.date__picker-container.error .caption__wrapper{color:#CD002F}.date__picker-container.disabled .caption__wrapper{color:#575352}.date__picker-container .caption__wrapper{margin-top:4px;color:#1D1D1D;font:400 0.75rem/1rem "Source Sans 3"}.date__picker-input{font-family:"Source Sans 3";outline:none;width:100%;cursor:pointer;border-radius:1px;border:1px solid #8D8786;height:100%}.date__picker-input.firefox__classes{padding:8px 16px;color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px;cursor:pointer}.date__picker-input:focus:not(.error,.success){border-color:#0A8276}.date__picker-input:hover:not(:disabled,:focus,.error,.success){border-color:#575352}.date__picker-input:disabled{border-color:#575352;background-color:#EEEDED}.date__picker-input.error{border-color:#CD002F}.date__picker-input.success:not(.error){border-color:#4CA460}.date__picker-input::-webkit-datetime-edit-text{color:#8D8786;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.date__picker-input.has-value::-webkit-datetime-edit-text{color:#1D1D1D}.date__picker-input.has-value::-webkit-datetime-edit{color:#1D1D1D}::-webkit-datetime-edit{color:#8D8786;font-size:16px;text-transform:uppercase;font-style:normal;font-weight:400;line-height:24px}::-webkit-datetime-edit-fields-wrapper{padding:8px 16px;padding-bottom:9px;transform:translateY(1px)}::-webkit-inner-spin-button{display:none}::-webkit-calendar-picker-indicator{position:absolute;right:15px;font-size:19px;cursor:pointer;border-radius:1px}::-webkit-calendar-picker-indicator:focus-within{outline:2px solid #0A8276;outline-offset:2px}.input__wrapper{display:flex;justify-content:space-between;align-items:center;align-self:stretch;background:#FFFFFF;position:relative}.input__wrapper.large{height:40px}.input__wrapper.small{height:36px}.input__wrapper.disabled .icon__wrapper{background-color:#EEEDED}.icon__wrapper{position:absolute;right:17px;padding:2px;display:flex;justify-content:flex-end;align-items:center;pointer-events:none;z-index:100;background-color:#FFFFFF;line-height:16px}.icon__wrapper ifx-icon{vertical-align:middle}',p=d,u=class{constructor(e){o(this,e),this.ifxDate=c(this,"ifxDate",7),e.$hostElement$["s-ei"]?this.internals=e.$hostElement$["s-ei"]:(this.internals=e.$hostElement$.attachInternals(),e.$hostElement$["s-ei"]=this.internals),this.inputId=`ifx-date-picker-${++f}`,this.size="s",this.error=!1,this.success=!1,this.disabled=!1,this.required=!1,this.autocomplete="on"}getDate(e){const t=e.target.value,r=new Date(t),a=r.getDate(),s=r.getMonth()+1,n=r.getFullYear();if(!t){this.internals.setFormValue(null),this.ifxDate.emit({day:a,month:s,year:n});return}this.el.shadowRoot.querySelector(".date__picker-input").classList.add("has-value"),this.internals.setFormValue(r.toISOString().substring(0,10)),this.ifxDate.emit({day:a,month:s,year:n})}handleInputFocusOnIconClick(){const e=this.el.shadowRoot.querySelector(".date__picker-input");e&&e.focus()}getBrowser(){return navigator.userAgent.indexOf("Chrome")!=-1?"Chrome":navigator.userAgent.indexOf("Opera")!=-1?"Opera":navigator.userAgent.indexOf("MSIE")!=-1?"IE":navigator.userAgent.indexOf("Firefox")!=-1?"Firefox":"unknown"}setFireFoxClasses(){const e=this.getBrowser(),t=this.el.shadowRoot.querySelector(".date__picker-input");e==="Firefox"?t.classList.add("firefox__classes"):t.classList.contains("firefox__classes")&&t.classList.remove("firefox__classes")}componentDidLoad(){this.setFireFoxClasses(),this.value&&this.getDate({target:{value:this.value}})}formResetCallback(){this.internals.setFormValue(null)}render(){var e,t;return i("div",{key:"00a8ea0bf32fefab09859e8e001c68c67fbd141f",class:`date__picker-container ${this.error?"error":""} ${this.disabled?"disabled":""}`},i("label",{key:"8f34d5c82f0ca96255d2fab0a968c4c07a87be69",class:"label__wrapper",htmlFor:this.inputId},(e=this.label)===null||e===void 0?void 0:e.trim()),i("div",{key:"04066ccba4bf7420a24aa77d7a16287681915485",class:`input__wrapper ${this.size==="l"?"large":"small"} ${this.disabled?"disabled":""}`},i("input",{key:"99c614b5ac5bcd0257c8ad21e5f679afb24b1da0",type:"date",autocomplete:this.autocomplete,class:`date__picker-input ${this.error?"error":""} ${this.success?"success":""}`,disabled:this.disabled?!0:void 0,"aria-invalid":this.error?!0:void 0,"aria-label":this.AriaLabel,max:this.max,min:this.min,value:this.value,required:this.required,onChange:r=>this.getDate(r)}),i("div",{key:"e986a83511e244d337a08c952796a08cf33a8beb",class:"icon__wrapper",role:"button",onClick:()=>this.handleInputFocusOnIconClick()},i("ifx-icon",{key:"e442dffb5f8ac785ccbb5b1870abe38ed47a90c0",icon:"calendar16","aria-hidden":"true"}))),((t=this.caption)===null||t===void 0?void 0:t.trim())&&i("div",{key:"545161b7e68617643da3b703e1e6d2f6031311f2",class:"caption__wrapper"},this.caption.trim()))}static get formAssociated(){return!0}get el(){return l(this)}};let f=0;u.style=p;export{u as ifx_date_picker};
