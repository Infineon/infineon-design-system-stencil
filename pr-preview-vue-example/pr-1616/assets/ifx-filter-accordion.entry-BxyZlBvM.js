import{r as d,c as a,h as e,g as l}from"./index-DWx6RdMK.js";function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>t.getAttribute("value")==="true").map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}const c=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.accordion{border-bottom:1px solid #EEEDED}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}",o=c,r=class{constructor(i){d(this,i),this.ifxFilterAccordionChange=a(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.handleCheckedChange=t=>{const n=t.detail.selectedItems;this.count=n.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:n})},this.toggleAccordion=t=>{t.stopPropagation(),this.expanded=!this.expanded},this.expanded=!1,this.maxVisibleItems=void 0,this.count=0,this.totalItems=0,this.filterGroupName=""}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const i=s(this.el);this.count=i.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return e("div",{key:"adc279e2453a5e35c3e684008f00a17c7d418304",class:`accordion ${this.expanded?"expanded":""}`},e("div",{key:"08c3fa7aa05a3e19e7a39bf00c7662b1c11f1440",class:`header ${this.expanded?"expanded":""}`,onClick:this.toggleAccordion},e("div",{key:"ff3997f69f55ebd73a8b133296ced79f8ba11b56",class:`text-and-icon ${this.expanded?"expanded":""}`},e("div",{key:"68efe8d585a3e74688b4fb490559c7277b876950",class:"text"},e("span",{key:"f0f3c5a8db03fb89f0be5dfbff8c55483e840d99"},this.filterGroupName),e("ifx-number-indicator",{key:"ce2ef6ce26019d413249818d02f20fc50e7c8c7d"},this.count)),e("ifx-icon",{key:"1ce57a4431674936be27debc72fa078b32cd3eca",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),e("ifx-icon",{key:"1bc14f06c93592f94911f5d88c548c6b8f021340",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&e("div",{key:"89c50fdd435793bb19bb4570849d546efaf300be",class:"filter-accordion-container"},e("slot",{key:"591f8a2d0569522e4afad1583892c1fc4ac62724",name:"list"})))}get el(){return l(this)}};r.style=o;export{r as ifx_filter_accordion};
