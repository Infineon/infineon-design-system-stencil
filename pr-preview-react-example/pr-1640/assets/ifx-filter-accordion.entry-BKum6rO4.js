import{r as n,c as a,h as e,g as l}from"./index-Bw3KCJLL.js";function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>t.getAttribute("value")==="true").map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}const o=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.accordion{border-bottom:1px solid #EEEDED}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}",c=o,r=class{constructor(i){n(this,i),this.ifxFilterAccordionChange=a(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.handleCheckedChange=t=>{const d=t.detail.selectedItems;this.count=d.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:d})},this.toggleAccordion=t=>{t.stopPropagation(),this.expanded=!this.expanded},this.expanded=!1,this.maxVisibleItems=void 0,this.count=0,this.totalItems=0,this.filterGroupName=""}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const i=s(this.el);this.count=i.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return e("div",{key:"8b476cabf2bcef3ec45bed2a37ce832eedbd9dca",class:`accordion ${this.expanded?"expanded":""}`},e("div",{key:"8ce8b514edb59ea4aa2a551d1e4e024474fdebf0",class:`header ${this.expanded?"expanded":""}`,onClick:this.toggleAccordion},e("div",{key:"0870b3f2827d21fa9bc5525478b4acc4aafa1475",class:`text-and-icon ${this.expanded?"expanded":""}`},e("div",{key:"40c9f4a5f43fde49cff8317401f122b94700ea5f",class:"text"},e("span",{key:"302aa0f73d838c395f4d03df1b13228d97456a12"},this.filterGroupName),e("ifx-number-indicator",{key:"54efbf87ae6217e531851901871bf3c2520f96fb"},this.count)),e("ifx-icon",{key:"9d86395ec6b7ed9da08df4d2f40f6fa5a9d69e47",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),e("ifx-icon",{key:"edee426a2b348fe68ecf723e4b7f6294846d0d33",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&e("div",{key:"6fad44fda4504bf171e56debd69f4b290d33133a",class:"filter-accordion-container"},e("slot",{key:"380b9fc36287adac4f33b757b708dfc390c0b92c",name:"list"})))}get el(){return l(this)}};r.style=c;export{r as ifx_filter_accordion};
