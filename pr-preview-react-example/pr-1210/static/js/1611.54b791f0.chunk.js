"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[1611],{1611:(e,t,i)=>{i.r(t),i.d(t,{ifx_filter_accordion:()=>o});var n=i(7770);const o=class{constructor(e){(0,n.r)(this,e),this.toggleAccordion=e=>{e.stopPropagation(),this.expanded=!this.expanded},this.toggleShowMore=e=>{e.stopPropagation(),this.showMore=!this.showMore},this.handleCheckedChange=()=>{this.selectedCount=Array.from(this.el.querySelectorAll("ifx-filter-entry")).filter((e=>"true"===e.getAttribute("value"))).length},this.expanded=!1,this.showMore=!1,this.selectedCount=0,this.totalItems=0,this.filterGroupName=""}componentWillLoad(){this.el.addEventListener("ifxFilterEntryChange",this.handleCheckedChange),this.handleCheckedChange()}componentDidLoad(){this.totalItems=this.el.querySelectorAll("ifx-filter-entry").length}componentWillUnload(){this.el.removeEventListener("ifxFilterEntryChange",this.handleCheckedChange)}render(){const e=this.totalItems-6;return(0,n.h)("div",{key:"ada2c89eeac52523625f67ba3b212232418cc330",class:"accordion ".concat(this.expanded?"expanded":""," ").concat(this.showMore?"show-more":"")},(0,n.h)("div",{key:"2f382a8b1cc49348935518d3fc3b5619153f88ae",class:"header",onClick:this.toggleAccordion},(0,n.h)("div",{key:"3b0fa8c5ad647a9a9cad32369d821acdbf37824e",class:"text-and-icon"},(0,n.h)("div",{key:"1957e25ebb599dc363c629256447ddf00c6fea72",class:"text"},(0,n.h)("span",{key:"24ae1d6c4639ef97949b44007456b08d5572a0a0"},this.filterGroupName),(0,n.h)("ifx-number-indicator",{key:"f2faf6148b5f134a9e77ae1f8da23eafb7ab3a69"},this.selectedCount)),(0,n.h)("ifx-icon",{key:"27e2b4e21378046c24c1a36070f1ef16037d7cfb",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),(0,n.h)("ifx-icon",{key:"bc9e3d33e674253d842c52c36aed7f1b98266a3e",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&(0,n.h)("div",{class:"filter-accordion-container"},(0,n.h)("slot",null),(0,n.h)("div",{class:"link",onClick:this.toggleShowMore},(0,n.h)("ifx-icon",{key:this.showMore.toString(),icon:this.showMore?"chevron-up-12":"chevron-down-12"}),"              ",(0,n.h)("ifx-link",{href:"",target:"_blank",size:"m",variant:"underlined",disabled:!1},this.showMore?"Show less":"Show ".concat(e," more")))))}get el(){return(0,n.g)(this)}};o.style=".header{display:flex;align-items:flex-start;align-self:stretch}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0;border-bottom:1px solid #EEEDED}.text-and-icon.expanded{border-left:3px solid #0A8276;border-bottom:none}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}"}}]);
//# sourceMappingURL=1611.54b791f0.chunk.js.map