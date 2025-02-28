import{r as d,c as a,h as e,g as l}from"./index-7ZbyDl84.js";function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>t.getAttribute("value")==="true").map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}const o=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.accordion{border-bottom:1px solid #EEEDED}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}",c=o,r=class{constructor(i){d(this,i),this.ifxFilterAccordionChange=a(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.expanded=!1,this.count=0,this.totalItems=0,this.filterGroupName="",this.handleCheckedChange=t=>{const n=t.detail.selectedItems;this.count=n.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:n})},this.toggleAccordion=t=>{t.stopPropagation(),this.expanded=!this.expanded}}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const i=s(this.el);this.count=i.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return e("div",{key:"c5c8b3d3c8ff3f7b0c4ae3e546bc5415e0fc4b4b",class:`accordion ${this.expanded?"expanded":""}`},e("div",{key:"d57861aa32f87723622a7fe468c71918fcd0f27c",class:`header ${this.expanded?"expanded":""}`,onClick:this.toggleAccordion},e("div",{key:"c5df602ee0cbf3f5a5011be319bdf302c8936a1c",class:`text-and-icon ${this.expanded?"expanded":""}`},e("div",{key:"12b00627cbacaf3ba72a96d59a74062527b32b62",class:"text"},e("span",{key:"edb0beaab7ffb4b189215ff046c0175b83e621b4"},this.filterGroupName),e("ifx-number-indicator",{key:"d4409330033dea5d5396bf04ef3120f6b14b55be"},this.count)),e("ifx-icon",{key:"e1354590dfad3ba22ebd3e4b9fe078e072450825",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),e("ifx-icon",{key:"cbda8600f59f8565ec746c7674dbd2ddde91efa4",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&e("div",{key:"f0f0e00542fb7a4211b47159e293a8e7a32184b5",class:"filter-accordion-container"},e("slot",{key:"4a29c3fc53881c41eda0264dcf86e7ccfad525d9",name:"list"})))}get el(){return l(this)}};r.style=c;export{r as ifx_filter_accordion};
