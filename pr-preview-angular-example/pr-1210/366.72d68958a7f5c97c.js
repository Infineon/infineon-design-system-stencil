"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[366],{366:(c,d,n)=>{n.r(d),n.d(d,{ifx_filter_accordion:()=>l});var e=n(3415);const l=class{constructor(i){(0,e.r)(this,i),this.ifxFilterAccordionChange=(0,e.c)(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.handleCheckedChange=t=>{const a=t.detail.selectedItems;this.count=a.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:a})},this.toggleAccordion=t=>{t.stopPropagation(),this.expanded=!this.expanded},this.expanded=!1,this.maxVisibleItems=void 0,this.count=0,this.totalItems=0,this.filterGroupName=""}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const i=function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>"true"===t.getAttribute("value")).map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}(this.el);this.count=i.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return(0,e.h)("div",{key:"68fd2a0275eb6bb2e912b1778a3b7ef83bcf21a3",class:"accordion "+(this.expanded?"expanded":"")},(0,e.h)("div",{key:"123f105dcfddcbfdc488242b19442cbf10991922",class:"header",onClick:this.toggleAccordion},(0,e.h)("div",{key:"541724c0dd2d9ec1ab60a27e24113b69ed9cc789",class:"text-and-icon "+(this.expanded?"expanded":"")},(0,e.h)("div",{key:"ee3f1385a0e8f7d0bdcadb294d9e7a42532d724a",class:"text"},(0,e.h)("span",{key:"0e447625ec8e388b7be7f756cbaebca4770fc1c2"},this.filterGroupName),(0,e.h)("ifx-number-indicator",{key:"781718cd6aa00b7a9a38700da28e2265c0d9a7a8"},this.count)),(0,e.h)("ifx-icon",{key:"f26c9601c3ee72390990cb760ccd9b1f9bae807f",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),(0,e.h)("ifx-icon",{key:"60254e973b107582106019ba53aa0e7be5736fb1",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&(0,e.h)("div",{class:"filter-accordion-container"},(0,e.h)("slot",{name:"list"})))}get el(){return(0,e.g)(this)}};l.style=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0;border-bottom:1px solid #EEEDED}.text-and-icon.expanded{border-bottom:none}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}"}}]);