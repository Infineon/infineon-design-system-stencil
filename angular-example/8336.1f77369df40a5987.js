"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[8336],{8336:(m,h,d)=>{d.r(h),d.d(h,{ifx_filter_type_group:()=>u});var l=d(6004);const u=(()=>{let f=class{constructor(S){(0,l.r)(this,S),this.ifxSidebarFilterChange=(0,l.c)(this,"ifxSidebarFilterChange",7),this.handleResetEvent=()=>{this.el.shadowRoot.querySelector('slot[name="filter-accordion"]').assignedElements({flatten:!0}).forEach(e=>{e.querySelectorAll("ifx-list").forEach(a=>{a.resetTrigger=!a.resetTrigger})}),this.el.shadowRoot.querySelector('slot[name="filter-search"]').assignedElements({flatten:!0}).forEach(e=>{const a=e.querySelector("ifx-filter-search").shadowRoot.querySelectorAll("ifx-search-field");a.length>0&&a.forEach(s=>{s.value=""})}),this.selectedOptions=[],this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.handleUpdateSidebarFilter=t=>{const{filterName:i}=t.detail,r=this.el.shadowRoot.querySelector('slot[name="filter-accordion"]');(r?r.assignedElements({flatten:!0}):[]).forEach(s=>{s.querySelectorAll("ifx-list").forEach(c=>{c.getAttribute("name")===i&&(c.resetTrigger=!c.resetTrigger)})});const e=this.el.shadowRoot.querySelector('slot[name="filter-search"]');(e?e.assignedNodes({flatten:!0}):[]).forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){const c=s.firstElementChild;c&&(c.setAttribute("value",""),c.dispatchEvent(new CustomEvent("ifxInput",{bubbles:!0,composed:!0,detail:""})))}});const a=this.selectedOptions.map(s=>s.filterGroupName===i?Object.assign(Object.assign({},s),{selectedItems:[],value:""}):s);this.selectedOptions=a,this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.handleAccordionChange=t=>{this.handleFilterChange(t)},this.handleSearchChange=t=>{this.handleFilterChange(t)},this.handleFilterChange=t=>{const i=[...this.selectedOptions];if("ifxFilterSearchChange"===t.type){const{filterName:r,filterValue:n}=t.detail,e=i.findIndex(o=>"string"!=typeof o&&o.filterGroupName===r);-1!==e?i[e].value=n:i.push({filterGroupName:r,value:n})}else if("ifxFilterAccordionChange"===t.type){const{filterGroupName:r,selectedItems:n}=t.detail,e=i.findIndex(o=>o.filterGroupName===r);-1!==e?i[e]={filterGroupName:r,selectedItems:n}:i.push({filterGroupName:r,selectedItems:n})}this.selectedOptions=i,this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.selectedOptions=[]}connectedCallback(){this.el.addEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.addEventListener("ifxFilterSearchChange",this.handleSearchChange),window.addEventListener("ifxResetFiltersEvent",this.handleResetEvent),window.addEventListener("ifxUpdateSidebarFilter",this.handleUpdateSidebarFilter)}componentWillUnload(){this.el.removeEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.removeEventListener("ifxFilterSearchChange",this.handleSearchChange),window.removeEventListener("ifxResetFiltersEvent",this.handleResetEvent)}render(){return(0,l.h)(l.a,{key:"a40c0d5c443fa93c16566abc223a6687e16b8ccf"},(0,l.h)("div",{key:"a62710cd504dbcadb2a0bab8a60e7f1de03f371e",class:"filter-type-group"},(0,l.h)("slot",{key:"f60699f39c566926fe12d0d236847f8b69b44dbd",name:"filter-search"}),(0,l.h)("slot",{key:"5379d0693718b89e96c5dcee151b88a4456fa6d6",name:"filter-accordion"})))}get el(){return(0,l.g)(this)}};return f.style=":host{display:flex}.filter-type-group{width:260px;align-items:flex-start;gap:8px}.filter-type-group>::slotted(*){margin-bottom:8px}",f})()}}]);