import{r as d,c as a,h as e,g as l}from"./index-phg-qrtW.js";function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>t.getAttribute("value")==="true").map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}const c=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.accordion{border-bottom:1px solid #EEEDED}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}",o=c,r=class{constructor(i){d(this,i),this.ifxFilterAccordionChange=a(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.handleCheckedChange=t=>{const n=t.detail.selectedItems;this.count=n.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:n})},this.toggleAccordion=t=>{t.stopPropagation(),this.expanded=!this.expanded},this.expanded=!1,this.maxVisibleItems=void 0,this.count=0,this.totalItems=0,this.filterGroupName=""}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const i=s(this.el);this.count=i.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return e("div",{key:"b5be6a4c8e2b8406e20b4139461d75d1acc5e88c",class:`accordion ${this.expanded?"expanded":""}`},e("div",{key:"88ce1afb0ab07d2b3b1351d698632d24521f6870",class:`header ${this.expanded?"expanded":""}`,onClick:this.toggleAccordion},e("div",{key:"2c850d5b01d985473ba69ca347fbfcfa076670b5",class:`text-and-icon ${this.expanded?"expanded":""}`},e("div",{key:"b50240640314ca9d971f1db017d8f2bf4fae5cc1",class:"text"},e("span",{key:"12a6ef3c45f33540669af8dc60f2d8c104e07953"},this.filterGroupName),e("ifx-number-indicator",{key:"049ecf530b429920f6f977e240de3913fbd0c013"},this.count)),e("ifx-icon",{key:"fee323359acf051fb4bd0040c0eb1bea7a9696fe",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),e("ifx-icon",{key:"f7b60e6232b404bc5f4345dd9db80e513c4a6dcd",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&e("div",{key:"f802a7ec2ff47ecf22b3f69ec5b4adbcdb599522",class:"filter-accordion-container"},e("slot",{key:"5877962924effa0e52163d9ec5a2d436ac8a3ac7",name:"list"})))}get el(){return l(this)}};r.style=o;export{r as ifx_filter_accordion};
