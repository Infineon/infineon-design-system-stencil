"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3021],{3021:(x,d,n)=>{n.r(d),n.d(d,{ifx_filter_bar:()=>p});var e=n(4138);const p=(()=>{let f=class{constructor(h){(0,e.r)(this,h),this.ifxTopbarFilterChange=(0,e.c)(this,"ifxTopbarFilterChange",7),this.handleMoreFiltersClick=()=>{this.showAllFilters=!0,this.updateVisibleSlots()},this.handleResetEvent=()=>{var t;const i=null===(t=this.el.shadowRoot)||void 0===t?void 0:t.querySelector('slot[name="filter-search"]');i instanceof HTMLSlotElement&&i.assignedElements({flatten:!0}).forEach(s=>{const r=s.querySelector("ifx-filter-search").shadowRoot.querySelectorAll("ifx-search-field");r.length>0&&r.forEach(o=>{o.value=""})}),this.selectedOptions=[],this.ifxTopbarFilterChange.emit(this.selectedOptions)},this.handleSearchChange=t=>{this.handleTopbarFilterChange(t)},this.handleFilterSelect=t=>{this.handleTopbarFilterChange(t)},this.handleTopbarFilterChange=t=>{const i=[...this.selectedOptions];if("ifxFilterSearchChange"===t.type){const{filterName:l,filterValue:s}=t.detail,a=i.findIndex(r=>r.filterName===l);-1!==a?i[a].filterValues=[s]:i.push({filterName:l,filterValues:[s],type:"text"})}else if("ifxFilterSelect"===t.type){const{filterName:l,filterValues:s,type:a}=t.detail,r=i.findIndex(o=>o.filterName===l);-1!==r?(i[r].filterValues=s,i[r].type=a):i.push({filterName:l,filterValues:s,type:a})}this.selectedOptions=i,this.ifxTopbarFilterChange.emit(this.selectedOptions)},this.selectedOptions=[],this.showAllFilters=!1,this.maxShownFilters=4,this.visibleSlots=void 0,this.showMoreFiltersButton=!0}connectedCallback(){this.el.addEventListener("ifxFilterSelect",this.handleTopbarFilterChange),this.el.addEventListener("ifxFilterSearchChange",this.handleSearchChange),window.addEventListener("ifxResetFiltersEvent",this.handleResetEvent)}componentWillUnload(){this.el.removeEventListener("ifxFilterSelect",this.handleTopbarFilterChange),this.el.removeEventListener("ifxFilterSearchChange",this.handleSearchChange),window.removeEventListener("ifxResetFiltersEvent",this.handleResetEvent)}componentDidLoad(){this.updateVisibleSlots()}updateVisibleSlots(){this.visibleSlots=this.showAllFilters?Number.MAX_SAFE_INTEGER:this.maxShownFilters}render(){const h=Math.max(0,this.visibleSlots),t=this.el.querySelectorAll("ifx-set-filter").length,i=Math.min(h,t,Number.MAX_SAFE_INTEGER),l=Array.from({length:i},(s,a)=>(0,e.h)("div",{class:"filter-slot-wrapper"},(0,e.h)("slot",{name:`filter-component-${a+1}`})));return(0,e.h)(e.a,{key:"340852b6ce491460eb6b09c44e86889ed001aabb"},(0,e.h)("div",{key:"8670176af120001ccad21e02fff668ac4d3a13bb",class:"search-container"},(0,e.h)("slot",{key:"5c2fd2e1b1776406293b20bcd3907dc09f0275b7",name:"filter-search"})," "),(0,e.h)("div",{key:"b5c8f4671ace1c45f0ce48b4c010fc7165b22b60",class:"components-container"},l.length>0?l:(0,e.h)("slot",{name:"filter-component"}),this.showMoreFiltersButton&&!this.showAllFilters&&(0,e.h)("div",{key:"d3a1290e0ada2413a14dd39f62e7d32688ad6e8b",class:"more-filters-wrapper",onClick:this.handleMoreFiltersClick},(0,e.h)("ifx-button",{key:"60f798d9553f159b7ed512f6c50baecff4e8f843",type:"button",disabled:!1,variant:"tertiary",size:"m",target:"_blank",theme:"default","full-width":"false"},(0,e.h)("ifx-icon",{key:"bdf2862452f48e78769f2af444f82e766cf99096",icon:"filter-16"}),"More filters"))))}get el(){return(0,e.g)(this)}};return f.style=":host{display:block;width:100%}.search-container{display:flex;width:calc(100% - 48px);padding-left:24px;padding-right:24px;flex-direction:row;align-items:flex-start;margin-bottom:16px}.components-container{display:flex;width:calc(100% - 48px);padding-left:24px;padding-right:24px;flex-direction:row;align-items:flex-end;align-content:flex-end;flex-wrap:wrap;gap:16px}.filter-slot-wrapper{flex-grow:1;flex-basis:100%;max-width:100%}@media (max-width: 1024px){.more-filters-wrapper{order:3;width:100%;display:flex;justify-content:center;padding-top:16px;}}@media (min-width: 720px) and (max-width: 1024px){.filter-slot-wrapper{flex-basis:calc((100% - 16px) / 2);max-width:calc((100% - 16px) / 2)}}@media (min-width: 1025px){.filter-slot-wrapper{flex-basis:auto;max-width:200px}::slotted([slot=filter-search]){max-width:828px}}::slotted([slot=filter-search]){flex-grow:1;flex-basis:100%;width:100%}",f})()}}]);