"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[366],{366:(r,a,n)=>{n.r(a),n.d(a,{ifx_filter_accordion:()=>c});var e=n(2116);const c=(()=>{let i=class{constructor(t){(0,e.r)(this,t),this.ifxFilterAccordionChange=(0,e.c)(this,"ifxFilterAccordionChange",7),this.initialized=!1,this.handleCheckedChange=d=>{const l=d.detail.selectedItems;this.count=l.length,this.ifxFilterAccordionChange.emit({filterGroupName:this.filterGroupName,selectedItems:l})},this.toggleAccordion=d=>{d.stopPropagation(),this.expanded=!this.expanded},this.expanded=!1,this.maxVisibleItems=void 0,this.count=0,this.totalItems=0,this.filterGroupName=""}componentWillLoad(){this.el.addEventListener("ifxListUpdate",this.handleCheckedChange)}componentDidLoad(){if(!this.initialized){const t=function s(i){return Array.from(i.querySelectorAll("ifx-list-entry")).filter(t=>"true"===t.getAttribute("value")).map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type")}))}(this.el);this.count=t.length,this.initialized=!0}}componentWillUnload(){this.el.removeEventListener("ifxListUpdate",this.handleCheckedChange)}render(){return(0,e.h)("div",{key:"aa3625120584b17c8c60dfa60d652064e3730302",class:"accordion "+(this.expanded?"expanded":"")},(0,e.h)("div",{key:"d58e8752ab6427e0f7c3cffa6111b8084f06f3f7",class:"header "+(this.expanded?"expanded":""),onClick:this.toggleAccordion},(0,e.h)("div",{key:"fabff11cffb12322724123a85bb8a9fcb5d722e6",class:"text-and-icon "+(this.expanded?"expanded":"")},(0,e.h)("div",{key:"608f87f282eae985bfab164fa3285722f0bb7003",class:"text"},(0,e.h)("span",{key:"53d4b29a76a9f2e560a5e90ac5ecaeb2bbce2e41"},this.filterGroupName),(0,e.h)("ifx-number-indicator",{key:"8e05960cf2af1d6fcaadcd9dea7418b356336230"},this.count)),(0,e.h)("ifx-icon",{key:"0586c6fa00fdf20ba8e9fa33c7125762f430a240",class:this.expanded?"":"hidden",icon:"minus-16",onClick:this.toggleAccordion}),(0,e.h)("ifx-icon",{key:"6c22169af8545f711c91b13bdd138ce9121fab1c",class:this.expanded?"hidden":"",icon:"plus-16",onClick:this.toggleAccordion}))),this.expanded&&(0,e.h)("div",{key:"43b2be13c353da05d9101e3dde1fc1ed7911bd7d",class:"filter-accordion-container"},(0,e.h)("slot",{key:"e738f6ed3f867f155b284e4987e526eb639ec6a7",name:"list"})))}get el(){return(0,e.g)(this)}};return i.style=".header{display:flex;align-items:flex-start;align-self:stretch;cursor:pointer;border-left:3px solid transparent}.text-and-icon{display:flex;padding:12px 16px 12px 20px;align-items:center;gap:16px;flex:1 0 0}.header.expanded{border-left:3px solid #0A8276}.text{display:flex;align-items:center;gap:8px;flex:1 0 0;color:#1D1D1D;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.hidden{display:none}.accordion{border-bottom:1px solid #EEEDED}.filter-accordion-container{display:flex;padding:8px 16px 16px 20px;flex-direction:column;align-items:flex-start;gap:12px;align-self:stretch;border-left:3px solid #0A8276}::slotted(ifx-filter-entry:nth-child(n+7)){display:none}.link{display:flex;align-items:center;gap:8px}.show-more ::slotted(ifx-filter-entry:nth-child(n+7)){display:block}.show-more .show-more-link{display:none}",i})()}}]);