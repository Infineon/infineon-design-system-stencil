import{r as n,c as a,h as e,g as l}from"./index-DLgGBwj2.js";function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>t.getAttribute("value")==="true").map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}const o=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.accordion{border-bottom:1px solid #EEEDED}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}",c=o,r=class{constructor(i){n(this,i),this.ifxFilterAccordionChange=a(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.expanded=!1,this.count=0,this.totalItems=0,this.filterGroupName="",this.handleCheckedChange=t=>{const d=t.detail.selectedItems;this.count=d.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:d})},this.toggleAccordion=t=>{t.stopPropagation(),this.expanded=!this.expanded}}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const i=s(this.el);this.count=i.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return e("div",{key:"04f5bf30e72842f9933b4e996d0f1f8fd05a7e20",class:`accordion ${this.expanded?"expanded":""}`},e("div",{key:"db74e70636d12b7eda258cd51b970efabca762b1",class:`header ${this.expanded?"expanded":""}`,onClick:this.toggleAccordion},e("div",{key:"275bb4906b9bf54d3f7a3d92127c2b5f5929f66f",class:`text-and-icon ${this.expanded?"expanded":""}`},e("div",{key:"196c8da9491b30ee1b9340f2d608dcc0fbc77e8d",class:"text"},e("span",{key:"ca7a0e16bdec5ad7c7712eacc663e93016745274"},this.filterGroupName),e("ifx-number-indicator",{key:"ded7fee1ddad870fd8ab71c552443b10c64fe16b"},this.count)),e("ifx-icon",{key:"bf3c7d0609df661cf80d2a54d6541f00ad12e4fe",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),e("ifx-icon",{key:"e51d932d03376e78da2a7c7023b7a730c485735e",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&e("div",{key:"9f918e904eac2a581a2964c151a968745ac947f3",class:"filter-accordion-container"},e("slot",{key:"dd76a13a2b0eacbdf472d80418b3c003c9a4fac5",name:"list"})))}get el(){return l(this)}};r.style=c;export{r as ifx_filter_accordion};
