import{r as a,c as d,h as e,g as l}from"./index-CvD75ha2.js";function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>t.getAttribute("value")==="true").map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}const c=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.accordion{border-bottom:1px solid #EEEDED}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}",o=c,r=class{constructor(i){a(this,i),this.ifxFilterAccordionChange=d(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.handleCheckedChange=t=>{const n=t.detail.selectedItems;this.count=n.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:n})},this.toggleAccordion=t=>{t.stopPropagation(),this.expanded=!this.expanded},this.expanded=!1,this.maxVisibleItems=void 0,this.count=0,this.totalItems=0,this.filterGroupName=""}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const i=s(this.el);this.count=i.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return e("div",{key:"eff8ae0ce027be22201236525c3858f3c9e89d1a",class:`accordion ${this.expanded?"expanded":""}`},e("div",{key:"6b730e6b4ddc58b829e5a92c8e88197074a00fea",class:`header ${this.expanded?"expanded":""}`,onClick:this.toggleAccordion},e("div",{key:"27a28ae04fcff354f61d0ab62a94b193abf1e2d7",class:`text-and-icon ${this.expanded?"expanded":""}`},e("div",{key:"de94ea28456615787d058c1e5e424e151c0cfae4",class:"text"},e("span",{key:"b23d8e3cb754b4ca0968a12a67da096bd81cfc8b"},this.filterGroupName),e("ifx-number-indicator",{key:"126eef8acee57914737983705ac07c05c3c0eaa6"},this.count)),e("ifx-icon",{key:"15a61832d007ae1e8dd4dad69fece4984d861148",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),e("ifx-icon",{key:"fcc7f6f1d3e1d50c2086407c4ec967d9efcfbcbb",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&e("div",{key:"bc5ec2bca198ac848ff06214f4a5fb4f6bcc843a",class:"filter-accordion-container"},e("slot",{key:"0744d62be1f8812fb3ae5fa1022406336786c145",name:"list"})))}get el(){return l(this)}};r.style=o;export{r as ifx_filter_accordion};
