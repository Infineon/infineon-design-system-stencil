import{r as s,c as i,h as e,g as a}from"./index-CdQZOAgs.js";const l=".list-entry{display:flex;align-items:center;margin-top:8px;align-self:stretch}",n=l,r=class{constructor(t){s(this,t),this.ifxListEntryChange=i(this,"ifxListEntryChange",7),this.value=void 0,this.label=void 0,this.type=void 0}valueChanged(t){t?this.host.setAttribute("value","true"):this.host.removeAttribute("value")}handleFilterEntryChange(t){this.value=t.detail,this.ifxListEntryChange.emit({label:this.label,value:this.value,type:this.type})}render(){return e("div",{key:"99ec5a02764e768a9f9bd8adc165751970739a43",class:"wrapper"},this.type==="checkbox"?e("div",{class:"list-entry"},e("ifx-checkbox",{size:"s",value:this.value},this.label)):e("div",{class:"list-entry"},e("ifx-radio-button",{size:"s",value:this.value},this.label)))}get host(){return a(this)}static get watchers(){return{value:["valueChanged"]}}};r.style=n;export{r as ifx_list_entry};
