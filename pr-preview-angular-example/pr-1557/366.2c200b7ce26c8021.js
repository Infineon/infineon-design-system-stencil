"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[366],{366:(r,a,d)=>{d.r(a),d.d(a,{ifx_filter_accordion:()=>c});var e=d(2866);const c=(()=>{let i=class{constructor(t){(0,e.r)(this,t),this.ifxFilterAccordionChange=(0,e.c)(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.handleCheckedChange=n=>{const l=n.detail.selectedItems;this.count=l.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:l})},this.toggleAccordion=n=>{n.stopPropagation(),this.expanded=!this.expanded},this.expanded=!1,this.maxVisibleItems=void 0,this.count=0,this.totalItems=0,this.filterGroupName=""}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const t=function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>"true"===t.getAttribute("value")).map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}(this.el);this.count=t.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return(0,e.h)("div",{key:"6f5154264a25b763d624fd6efa257f85c77a8d73",class:"accordion "+(this.expanded?"expanded":"")},(0,e.h)("div",{key:"379173acdd0eb3257380613da79e5154b9609082",class:"header "+(this.expanded?"expanded":""),onClick:this.toggleAccordion},(0,e.h)("div",{key:"9c4aaac584aaa1d5bdea905d55c39bd9e47442e6",class:"text-and-icon "+(this.expanded?"expanded":"")},(0,e.h)("div",{key:"0aeb652d6d85dbc0168695d2fe79a21408b0fde0",class:"text"},(0,e.h)("span",{key:"96bfbe7d4286df4b33ed30b1211dae81f2679968"},this.filterGroupName),(0,e.h)("ifx-number-indicator",{key:"1393af68545bd4100404797ce44eed5ac57eb9b8"},this.count)),(0,e.h)("ifx-icon",{key:"01d611e9995e22ec6e2af72478200a3d129dfa05",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),(0,e.h)("ifx-icon",{key:"3b60bd94f7c75983d9bc08196a1e77d005163a63",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&(0,e.h)("div",{key:"70069650b08fc1f729c998264a324fff5eef4536",class:"filter-accordion-container"},(0,e.h)("slot",{key:"19c6a7e962a5e6f872e7d55421c0afbdfc0f333d",name:"list"})))}get el(){return(0,e.g)(this)}};return i.style=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.accordion{border-bottom:1px solid #EEEDED}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}",i})()}}]);