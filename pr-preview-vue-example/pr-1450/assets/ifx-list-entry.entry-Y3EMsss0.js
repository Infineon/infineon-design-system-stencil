import{r as s,c as i,h as t,g as a}from"./index-BQhScsWV.js";const l=".list-entry{display:flex;align-items:center;margin-top:8px;align-self:stretch}",n=l,r=class{constructor(e){s(this,e),this.ifxListEntryChange=i(this,"ifxListEntryChange",7),this.value=void 0,this.label=void 0,this.type=void 0}valueChanged(e){e?this.host.setAttribute("value","true"):this.host.removeAttribute("value")}handleFilterEntryChange(e){this.value=e.detail,this.ifxListEntryChange.emit({label:this.label,value:this.value,type:this.type})}render(){return t("div",{key:"2bda72de60f36367f2bcf643c4d90e5933ee37e5",class:"wrapper"},this.type==="checkbox"?t("div",{class:"list-entry"},t("ifx-checkbox",{size:"s",checked:this.value},this.label)):t("div",{class:"list-entry"},t("ifx-radio-button",{size:"s",checked:this.value},this.label)))}get host(){return a(this)}static get watchers(){return{value:["valueChanged"]}}};r.style=n;export{r as ifx_list_entry};
