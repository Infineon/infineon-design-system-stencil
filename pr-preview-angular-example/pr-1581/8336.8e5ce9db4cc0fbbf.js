"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[8336],{8336:(m,h,d)=>{d.r(h),d.d(h,{ifx_filter_type_group:()=>u});var l=d(581);const u=(()=>{let f=class{constructor(S){(0,l.r)(this,S),this.ifxSidebarFilterChange=(0,l.c)(this,"ifxSidebarFilterChange",7),this.handleResetEvent=()=>{this.el.shadowRoot.querySelector('slot[name="filter-accordion"]').assignedElements({flatten:!0}).forEach(e=>{e.querySelectorAll("ifx-list").forEach(a=>{a.resetTrigger=!a.resetTrigger})}),this.el.shadowRoot.querySelector('slot[name="filter-search"]').assignedElements({flatten:!0}).forEach(e=>{const a=e.querySelector("ifx-filter-search").shadowRoot.querySelectorAll("ifx-search-field");a.length>0&&a.forEach(s=>{s.value=""})}),this.selectedOptions=[],this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.handleUpdateSidebarFilter=t=>{const{filterName:i}=t.detail,r=this.el.shadowRoot.querySelector('slot[name="filter-accordion"]');(r?r.assignedElements({flatten:!0}):[]).forEach(s=>{s.querySelectorAll("ifx-list").forEach(c=>{c.getAttribute("name")===i&&(c.resetTrigger=!c.resetTrigger)})});const e=this.el.shadowRoot.querySelector('slot[name="filter-search"]');(e?e.assignedNodes({flatten:!0}):[]).forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){const c=s.firstElementChild;c&&(c.setAttribute("value",""),c.dispatchEvent(new CustomEvent("ifxInput",{bubbles:!0,composed:!0,detail:""})))}});const a=this.selectedOptions.map(s=>s.filterGroupName===i?Object.assign(Object.assign({},s),{selectedItems:[],value:""}):s);this.selectedOptions=a,this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.handleAccordionChange=t=>{this.handleFilterChange(t)},this.handleSearchChange=t=>{this.handleFilterChange(t)},this.handleFilterChange=t=>{const i=[...this.selectedOptions];if("ifxFilterSearchChange"===t.type){const{filterName:r,filterValue:n}=t.detail,e=i.findIndex(o=>"string"!=typeof o&&o.filterGroupName===r);-1!==e?i[e].value=n:i.push({filterGroupName:r,value:n})}else if("ifxFilterAccordionChange"===t.type){const{filterGroupName:r,selectedItems:n}=t.detail,e=i.findIndex(o=>o.filterGroupName===r);-1!==e?i[e]={filterGroupName:r,selectedItems:n}:i.push({filterGroupName:r,selectedItems:n})}this.selectedOptions=i,this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.selectedOptions=[]}connectedCallback(){this.el.addEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.addEventListener("ifxFilterSearchChange",this.handleSearchChange),window.addEventListener("ifxResetFiltersEvent",this.handleResetEvent),window.addEventListener("ifxUpdateSidebarFilter",this.handleUpdateSidebarFilter)}componentWillUnload(){this.el.removeEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.removeEventListener("ifxFilterSearchChange",this.handleSearchChange),window.removeEventListener("ifxResetFiltersEvent",this.handleResetEvent)}render(){return(0,l.h)(l.a,{key:"2ba3ba296a72f017c8492eed55110933257c0158"},(0,l.h)("div",{key:"c1f0c462c42c1e0efc0a21fdcd0be1b0bad5e195",class:"filter-type-group"},(0,l.h)("slot",{key:"33dd82efcbd0f3f90f7f531bfbc91fa3cc5efe3d",name:"filter-search"}),(0,l.h)("slot",{key:"863b3a053befe093480fa41d77df046363a4ab70",name:"filter-accordion"})))}get el(){return(0,l.g)(this)}};return f.style=":host{display:flex}.filter-type-group{width:260px;align-items:flex-start;gap:8px}.filter-type-group>::slotted(*){margin-bottom:8px}",f})()}}]);