import{r as n,c as a,h as e,g as l}from"./index-CvcL_z3I.js";function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>t.getAttribute("value")==="true").map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}const c=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.accordion{border-bottom:1px solid #EEEDED}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}",o=c,r=class{constructor(i){n(this,i),this.ifxFilterAccordionChange=a(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.handleCheckedChange=t=>{const d=t.detail.selectedItems;this.count=d.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:d})},this.toggleAccordion=t=>{t.stopPropagation(),this.expanded=!this.expanded},this.expanded=!1,this.maxVisibleItems=void 0,this.count=0,this.totalItems=0,this.filterGroupName=""}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const i=s(this.el);this.count=i.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return e("div",{key:"4aeae13a1f2811af139413ae351ab70cfbb8ecaf",class:`accordion ${this.expanded?"expanded":""}`},e("div",{key:"e17ac3e8bc1dce7555e3824b2cb66228c333e6ae",class:`header ${this.expanded?"expanded":""}`,onClick:this.toggleAccordion},e("div",{key:"2ac732ab1951cc921078be5757d01325d1794fd6",class:`text-and-icon ${this.expanded?"expanded":""}`},e("div",{key:"3d5d4ae28ad2cba68d3d8a2096bda53242ac69f1",class:"text"},e("span",{key:"669dc7417d9303199c3cb68ff7a4a0ef4dd8fdab"},this.filterGroupName),e("ifx-number-indicator",{key:"b154ed9d7824f62bd1fc18fcb524739de66c3260"},this.count)),e("ifx-icon",{key:"1c02692efa10b0c4f3af56ce921599a4dc4c5ba0",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),e("ifx-icon",{key:"be1893204c1771593d25e4ed24cfe7e5876012c8",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&e("div",{key:"7c6e4e04a0e0050b3934184002348432dfe92245",class:"filter-accordion-container"},e("slot",{key:"1ff8e788b37c48a82a65667d24ddecbb8675bcda",name:"list"})))}get el(){return l(this)}};r.style=o;export{r as ifx_filter_accordion};
