"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[8399],{8399:(c,r,h)=>{h.r(r),h.d(r,{ifx_list:()=>o});var s=h(3415);const o=class{constructor(t){(0,s.r)(this,t),this.ifxListUpdate=(0,s.c)(this,"ifxListUpdate",7),this.toggleList=e=>{e.stopPropagation(),this.expanded=!this.expanded},this.toggleShowMore=e=>{e.stopPropagation(),this.showMore=!this.showMore},this.handleCheckedChange=e=>{e&&"radio-button"===e.detail.type&&e.detail.value&&Array.from(this.el.querySelectorAll("ifx-list-entry")).filter(l=>"radio-button"===l.getAttribute("type")&&l!==e.target).forEach(l=>l.setAttribute("value","false"));const i=this.getSelectedItems(this.el);this.selectedCount=i.length,this.ifxListUpdate.emit({name:this.name,selectedItems:i})},this.expanded=!1,this.showMore=!1,this.selectedCount=0,this.totalItems=0,this.name="",this.maxVisibleItems=6,this.type="checkbox"}handleTypeChange(t){Array.from(this.el.querySelectorAll("ifx-list-entry")).forEach(i=>i.setAttribute("type",t))}componentWillLoad(){this.el.addEventListener("ifxListEntryChange",this.handleCheckedChange),this.selectedCount=this.getSelectedItems(this.el).length,this.totalItems=this.getTotalItems(),this.handleTypeChange(this.type),"radio-button"===this.type&&this.selectedCount>1&&(this.getSelectedItems(this.el).slice(1).forEach(e=>e.element.setAttribute("value","false")),this.selectedCount=this.getSelectedItems(this.el).length),this.observer=new MutationObserver(()=>{const t=this.getTotalItems();t!==this.totalItems&&(this.totalItems=t,this.handleCheckedChange()),this.handleTypeChange(this.type)}),this.observer.observe(this.el,{childList:!0})}disconnectedCallback(){this.el.removeEventListener("ifxListEntryChange",this.handleCheckedChange),this.observer.disconnect()}getTotalItems(){return this.el.querySelectorAll("ifx-list-entry").length}getSelectedItems(t){return Array.from(t.querySelectorAll("ifx-list-entry")).filter(e=>"true"===e.getAttribute("value")).map(e=>({label:e.getAttribute("label"),value:e.getAttribute("value"),type:e.getAttribute("type"),element:e}))}render(){const t=Array.from(this.el.querySelectorAll("ifx-list-entry")),e=this.showMore?t:t.slice(0,this.maxVisibleItems),i=t.length-e.length;return(0,s.h)("div",{key:"e517c3a2edcd024648f57a3b1d91f5d3c459fee5",class:"list-wrapper"},e.map(n=>(0,s.h)("slot",{name:n.getAttribute("slot")})),(i>0||this.showMore)&&(0,s.h)("div",{class:"link-wrapper",onClick:this.toggleShowMore},(0,s.h)("ifx-icon",{key:this.showMore.toString(),icon:this.showMore?"chevron-up-12":"chevron-down-12"}),(0,s.h)("ifx-link",{size:"s",href:"",target:"_blank",variant:"underlined",disabled:!1},this.showMore?"Show less":`Show ${i} more`)))}get el(){return(0,s.g)(this)}static get watchers(){return{type:["handleTypeChange"]}}};o.style=".link-wrapper{display:flex;align-items:center;gap:8px;margin-top:8px}"}}]);