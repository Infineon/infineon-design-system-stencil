import{r as n,c as a,h as e,g as l}from"./index-DeRQ76ld.js";function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>t.getAttribute("value")==="true").map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}const o=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.accordion{border-bottom:1px solid #EEEDED}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}",c=o,r=class{constructor(i){n(this,i),this.ifxFilterAccordionChange=a(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.expanded=!1,this.count=0,this.totalItems=0,this.filterGroupName="",this.handleCheckedChange=t=>{const d=t.detail.selectedItems;this.count=d.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:d})},this.toggleAccordion=t=>{t.stopPropagation(),this.expanded=!this.expanded}}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const i=s(this.el);this.count=i.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return e("div",{key:"629ff7cd290839013e522e6051375a3c0c0d6adc",class:`accordion ${this.expanded?"expanded":""}`},e("div",{key:"bbecee7853dd8b29ba2fdf996d733c1b8ee88122",class:`header ${this.expanded?"expanded":""}`,onClick:this.toggleAccordion},e("div",{key:"24b75a1554874f9075496604dbdf53c6da4bf39c",class:`text-and-icon ${this.expanded?"expanded":""}`},e("div",{key:"0350a1f14bf769cb24f0380d126e83a8e28d56e6",class:"text"},e("span",{key:"ee8511c00fbc73b0ed799d91b569e7b273f79e93"},this.filterGroupName),e("ifx-number-indicator",{key:"e6e729cf9a4aa2232c4769f7c0aa81eedd83d6f0"},this.count)),e("ifx-icon",{key:"c11cb1d518cbc9862249d6826fa2e43259546a8f",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),e("ifx-icon",{key:"2ce76a3a593d990467f69586e19ccbd13f8c0633",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&e("div",{key:"f03e2083a7b76145674896766df67c533f5e50d1",class:"filter-accordion-container"},e("slot",{key:"aaa6d9c51658d77c67426ab72d9923f2bb47da61",name:"list"})))}get el(){return l(this)}};r.style=c;export{r as ifx_filter_accordion};
