import{r as s,c as i,h as e,g as a}from"./index-DAn9NvqU.js";const r=".list-entry{display:flex;align-items:center;margin-top:8px;align-self:stretch}",l=r,n=class{constructor(t){s(this,t),this.ifxListEntryChange=i(this,"ifxListEntryChange",7)}valueChanged(t){t?this.host.setAttribute("value","true"):this.host.removeAttribute("value")}handleFilterEntryChange(t){this.value=t.detail,this.ifxListEntryChange.emit({label:this.label,value:this.value,type:this.type})}render(){return e("div",{key:"7c3d09e5c8d18387b4b2111050522b8862275ae3",class:"wrapper"},this.type==="checkbox"?e("div",{class:"list-entry"},e("ifx-checkbox",{size:"s",checked:this.value},this.label)):e("div",{class:"list-entry"},e("ifx-radio-button",{size:"s",checked:this.value},this.label)))}get host(){return a(this)}static get watchers(){return{value:["valueChanged"]}}};n.style=l;export{n as ifx_list_entry};
