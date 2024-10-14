import{r as h,c as d,h as i,H as c,g as f}from"./index-DF0cVI_I.js";const p=":host{display:block;width:100%}.search-container{display:flex;width:calc(100% - 48px);padding-left:24px;padding-right:24px;flex-direction:row;align-items:flex-start;margin-bottom:16px}.components-container{display:flex;width:calc(100% - 48px);padding-left:24px;padding-right:24px;flex-direction:row;align-items:flex-end;align-content:flex-end;flex-wrap:wrap;gap:16px}.filter-slot-wrapper{flex-grow:1;flex-basis:100%;max-width:100%}@media (max-width: 1024px){.more-filters-wrapper{order:3;width:100%;display:flex;justify-content:center;padding-top:16px;}}@media (min-width: 720px) and (max-width: 1024px){.filter-slot-wrapper{flex-basis:calc((100% - 16px) / 2);max-width:calc((100% - 16px) / 2)}}@media (min-width: 1025px){.filter-slot-wrapper{flex-basis:auto;max-width:200px}::slotted([slot=filter-search]){max-width:828px}}::slotted([slot=filter-search]){flex-grow:1;flex-basis:100%;width:100%}",x=p,m=class{constructor(n){h(this,n),this.ifxTopbarFilterChange=d(this,"ifxTopbarFilterChange",7),this.handleMoreFiltersClick=()=>{this.showAllFilters=!0,this.updateVisibleSlots()},this.handleResetEvent=()=>{var e;const t=(e=this.el.shadowRoot)===null||e===void 0?void 0:e.querySelector('slot[name="filter-search"]');t instanceof HTMLSlotElement&&t.assignedElements({flatten:!0}).forEach(s=>{const r=s.querySelector("ifx-filter-search").shadowRoot.querySelectorAll("ifx-search-field");r.length>0&&r.forEach(o=>{o.value=""})}),this.selectedOptions=[],this.ifxTopbarFilterChange.emit(this.selectedOptions)},this.handleSearchChange=e=>{this.handleTopbarFilterChange(e)},this.handleFilterSelect=e=>{this.handleTopbarFilterChange(e)},this.handleTopbarFilterChange=e=>{const t=[...this.selectedOptions];if(e.type==="ifxFilterSearchChange"){const{filterName:l,filterValue:s}=e.detail,a=t.findIndex(r=>r.filterName===l);a!==-1?t[a].filterValues=[s]:t.push({filterName:l,filterValues:[s],type:"text"})}else if(e.type==="ifxFilterSelect"){const{filterName:l,filterValues:s,type:a}=e.detail,r=t.findIndex(o=>o.filterName===l);r!==-1?(t[r].filterValues=s,t[r].type=a):t.push({filterName:l,filterValues:s,type:a})}this.selectedOptions=t,this.ifxTopbarFilterChange.emit(this.selectedOptions)},this.selectedOptions=[],this.showAllFilters=!1,this.maxShownFilters=4,this.visibleSlots=void 0,this.showMoreFiltersButton=!0}connectedCallback(){this.el.addEventListener("ifxFilterSelect",this.handleTopbarFilterChange),this.el.addEventListener("ifxFilterSearchChange",this.handleSearchChange),window.addEventListener("ifxResetFiltersEvent",this.handleResetEvent)}componentWillUnload(){this.el.removeEventListener("ifxFilterSelect",this.handleTopbarFilterChange),this.el.removeEventListener("ifxFilterSearchChange",this.handleSearchChange),window.removeEventListener("ifxResetFiltersEvent",this.handleResetEvent)}componentDidLoad(){this.updateVisibleSlots()}updateVisibleSlots(){this.visibleSlots=this.showAllFilters?Number.MAX_SAFE_INTEGER:this.maxShownFilters}render(){const n=Math.max(0,this.visibleSlots),e=this.el.querySelectorAll("ifx-set-filter").length,t=Math.min(n,e,Number.MAX_SAFE_INTEGER),l=Array.from({length:t},(s,a)=>i("div",{class:"filter-slot-wrapper"},i("slot",{name:`filter-component-${a+1}`})));return i(c,{key:"1bc905c6e036ec6a7fa1ae6e6159afff0784b588"},i("div",{key:"a2e292f2cc09de11bbe90d413010ffb00e3e2e8a",class:"search-container"},i("slot",{key:"b24d5444942499bbbeafb7d0899a69b090b3622a",name:"filter-search"})," "),i("div",{key:"f5bc946655d2076f9b22d659add4d3cb7f6a7f40",class:"components-container"},l.length>0?l:i("slot",{name:"filter-component"}),this.showMoreFiltersButton&&!this.showAllFilters&&i("div",{key:"ddc51dedb054dda1da9dfeed53388ac10165b29b",class:"more-filters-wrapper",onClick:this.handleMoreFiltersClick},i("ifx-button",{key:"bc5902537c2aa2f06b0e54ce320093bc33d6a302",type:"button",disabled:!1,variant:"tertiary",size:"m",target:"_blank",theme:"default","full-width":"false"},i("ifx-icon",{key:"53ddc7b38ee97a802d1ac70bf1c3d7cfcf496bd9",icon:"filter-16"}),"More filters"))))}get el(){return f(this)}};m.style=x;export{m as ifx_filter_bar};
