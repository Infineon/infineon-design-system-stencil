import{r as a,c as d,h as e,g as l}from"./index-BdLCj5r2.js";function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>t.getAttribute("value")==="true").map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}const c=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.accordion{border-bottom:1px solid #EEEDED}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}",o=c,r=class{constructor(i){a(this,i),this.ifxFilterAccordionChange=d(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.expanded=!1,this.count=0,this.totalItems=0,this.filterGroupName="",this.handleCheckedChange=t=>{const n=t.detail.selectedItems;this.count=n.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:n})},this.toggleAccordion=t=>{t.stopPropagation(),this.expanded=!this.expanded}}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const i=s(this.el);this.count=i.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return e("div",{key:"a516541ef3dc49acfe900213815c8d17c5ff0f7b",class:`accordion ${this.expanded?"expanded":""}`},e("div",{key:"2502af32b8322a440282f18a95508777bd70602b",class:`header ${this.expanded?"expanded":""}`,onClick:this.toggleAccordion},e("div",{key:"661853e99db03cace8f273d8e447effd06f31baa",class:`text-and-icon ${this.expanded?"expanded":""}`},e("div",{key:"9f2c658782ed1ca845f85a361ea5fced99bb41da",class:"text"},e("span",{key:"a2bc905dbcb739acab31b39c85360414a8dcaed8"},this.filterGroupName),e("ifx-number-indicator",{key:"c64226f2ff8d651f8febf99a99a65f3e8e1fae68"},this.count)),e("ifx-icon",{key:"c00346c7bf984b49d28af20363803ba7f081ac17",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),e("ifx-icon",{key:"480dbf4cb9844bfa8660844451ced3c1d798c39c",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&e("div",{key:"48de4905ba421e86c4e13a72287edf0b1281a149",class:"filter-accordion-container"},e("slot",{key:"15fc58422854c0e1403fd2d85be09008dc6be4a3",name:"list"})))}get el(){return l(this)}};r.style=o;export{r as ifx_filter_accordion};
