"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3021],{3021:(x,d,n)=>{n.r(d),n.d(d,{ifx_filter_bar:()=>p});var e=n(2866);const p=(()=>{let f=class{constructor(h){(0,e.r)(this,h),this.ifxTopbarFilterChange=(0,e.c)(this,"ifxTopbarFilterChange",7),this.handleMoreFiltersClick=()=>{this.showAllFilters=!0,this.updateVisibleSlots()},this.handleResetEvent=()=>{var t;const i=null===(t=this.el.shadowRoot)||void 0===t?void 0:t.querySelector('slot[name="filter-search"]');i instanceof HTMLSlotElement&&i.assignedElements({flatten:!0}).forEach(s=>{const r=s.querySelector("ifx-filter-search").shadowRoot.querySelectorAll("ifx-search-field");r.length>0&&r.forEach(o=>{o.value=""})}),this.selectedOptions=[],this.ifxTopbarFilterChange.emit(this.selectedOptions)},this.handleSearchChange=t=>{this.handleTopbarFilterChange(t)},this.handleFilterSelect=t=>{this.handleTopbarFilterChange(t)},this.handleTopbarFilterChange=t=>{const i=[...this.selectedOptions];if("ifxFilterSearchChange"===t.type){const{filterName:l,filterValue:s}=t.detail,a=i.findIndex(r=>r.filterName===l);-1!==a?i[a].filterValues=[s]:i.push({filterName:l,filterValues:[s],type:"text"})}else if("ifxFilterSelect"===t.type){const{filterName:l,filterValues:s,type:a}=t.detail,r=i.findIndex(o=>o.filterName===l);-1!==r?(i[r].filterValues=s,i[r].type=a):i.push({filterName:l,filterValues:s,type:a})}this.selectedOptions=i,this.ifxTopbarFilterChange.emit(this.selectedOptions)},this.selectedOptions=[],this.showAllFilters=!1,this.maxShownFilters=4,this.visibleSlots=void 0,this.showMoreFiltersButton=!0}connectedCallback(){this.el.addEventListener("ifxFilterSelect",this.handleTopbarFilterChange),this.el.addEventListener("ifxFilterSearchChange",this.handleSearchChange),window.addEventListener("ifxResetFiltersEvent",this.handleResetEvent)}componentWillUnload(){this.el.removeEventListener("ifxFilterSelect",this.handleTopbarFilterChange),this.el.removeEventListener("ifxFilterSearchChange",this.handleSearchChange),window.removeEventListener("ifxResetFiltersEvent",this.handleResetEvent)}componentDidLoad(){this.updateVisibleSlots()}updateVisibleSlots(){this.visibleSlots=this.showAllFilters?Number.MAX_SAFE_INTEGER:this.maxShownFilters}render(){const h=Math.max(0,this.visibleSlots),t=this.el.querySelectorAll("ifx-set-filter").length,i=Math.min(h,t,Number.MAX_SAFE_INTEGER),l=Array.from({length:i},(s,a)=>(0,e.h)("div",{class:"filter-slot-wrapper"},(0,e.h)("slot",{name:`filter-component-${a+1}`})));return(0,e.h)(e.a,{key:"d5aad85edc16369a3487a18f3e3f24a5b914e820"},(0,e.h)("div",{key:"7f49a493bd5bafec1286794e89ae67adea9e1967",class:"search-container"},(0,e.h)("slot",{key:"9d7ab3a3294ac64f7cc47ae33b1839871d06df94",name:"filter-search"})," "),(0,e.h)("div",{key:"9bf93a1030392d67940228df88b11b52685b757f",class:"components-container"},l.length>0?l:(0,e.h)("slot",{name:"filter-component"}),this.showMoreFiltersButton&&!this.showAllFilters&&(0,e.h)("div",{key:"fc4c6c9e15cf96fc1c129638688fdf2a27f91dc7",class:"more-filters-wrapper",onClick:this.handleMoreFiltersClick},(0,e.h)("ifx-button",{key:"8f26ef634ef3e27d893e1998167f07a4315cb59a",type:"button",disabled:!1,variant:"tertiary",size:"m",target:"_blank",theme:"default","full-width":"false"},(0,e.h)("ifx-icon",{key:"23cece990fc63afda2e9864887865467bec55e6f",icon:"filter-16"}),"More filters"))))}get el(){return(0,e.g)(this)}};return f.style=":host{display:block;width:100%}.search-container{display:flex;width:calc(100% - 48px);padding-left:24px;padding-right:24px;flex-direction:row;align-items:flex-start;margin-bottom:16px}.components-container{display:flex;width:calc(100% - 48px);padding-left:24px;padding-right:24px;flex-direction:row;align-items:flex-end;align-content:flex-end;flex-wrap:wrap;gap:16px}.filter-slot-wrapper{flex-grow:1;flex-basis:100%;max-width:100%}@media (max-width: 1024px){.more-filters-wrapper{order:3;width:100%;display:flex;justify-content:center;padding-top:16px;}}@media (min-width: 720px) and (max-width: 1024px){.filter-slot-wrapper{flex-basis:calc((100% - 16px) / 2);max-width:calc((100% - 16px) / 2)}}@media (min-width: 1025px){.filter-slot-wrapper{flex-basis:auto;max-width:200px}::slotted([slot=filter-search]){max-width:828px}}::slotted([slot=filter-search]){flex-grow:1;flex-basis:100%;width:100%}",f})()}}]);