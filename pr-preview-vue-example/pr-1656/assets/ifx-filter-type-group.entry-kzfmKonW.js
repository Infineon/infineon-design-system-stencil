import{r as f,c as p,h as c,H as g,g as S}from"./index-x7-JGENA.js";const u=":host{display:flex}.filter-type-group{width:260px;align-items:flex-start;gap:8px}.filter-type-group>::slotted(*){margin-bottom:8px}",m=u,x=class{constructor(d){f(this,d),this.ifxSidebarFilterChange=p(this,"ifxSidebarFilterChange",7),this.handleResetEvent=()=>{this.el.shadowRoot.querySelector('slot[name="filter-accordion"]').assignedElements({flatten:!0}).forEach(e=>{e.querySelectorAll("ifx-list").forEach(o=>{o.resetTrigger=!o.resetTrigger})}),this.el.shadowRoot.querySelector('slot[name="filter-search"]').assignedElements({flatten:!0}).forEach(e=>{const o=e.querySelector("ifx-filter-search").shadowRoot.querySelectorAll("ifx-search-field");o.length>0&&o.forEach(s=>{s.value=""})}),this.selectedOptions=[],this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.handleUpdateSidebarFilter=t=>{const{filterName:i}=t.detail,r=this.el.shadowRoot.querySelector('slot[name="filter-accordion"]');(r?r.assignedElements({flatten:!0}):[]).forEach(s=>{s.querySelectorAll("ifx-list").forEach(a=>{a.getAttribute("name")===i&&(a.resetTrigger=!a.resetTrigger)})});const e=this.el.shadowRoot.querySelector('slot[name="filter-search"]');(e?e.assignedNodes({flatten:!0}):[]).forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){const a=s.firstElementChild;a&&(a.setAttribute("value",""),a.dispatchEvent(new CustomEvent("ifxInput",{bubbles:!0,composed:!0,detail:""})))}});const o=this.selectedOptions.map(s=>s.filterGroupName===i?Object.assign(Object.assign({},s),{selectedItems:[],value:""}):s);this.selectedOptions=o,this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.handleAccordionChange=t=>{this.handleFilterChange(t)},this.handleSearchChange=t=>{this.handleFilterChange(t)},this.handleFilterChange=t=>{const i=[...this.selectedOptions];if(t.type==="ifxFilterSearchChange"){const{filterName:r,filterValue:l}=t.detail,e=i.findIndex(n=>typeof n!="string"&&n.filterGroupName===r);e!==-1?i[e].value=l:i.push({filterGroupName:r,value:l})}else if(t.type==="ifxFilterAccordionChange"){const{filterGroupName:r,selectedItems:l}=t.detail,e=i.findIndex(n=>n.filterGroupName===r);e!==-1?i[e]={filterGroupName:r,selectedItems:l}:i.push({filterGroupName:r,selectedItems:l})}this.selectedOptions=i,this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.selectedOptions=[]}connectedCallback(){this.el.addEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.addEventListener("ifxFilterSearchChange",this.handleSearchChange),window.addEventListener("ifxResetFiltersEvent",this.handleResetEvent),window.addEventListener("ifxUpdateSidebarFilter",this.handleUpdateSidebarFilter)}componentWillUnload(){this.el.removeEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.removeEventListener("ifxFilterSearchChange",this.handleSearchChange),window.removeEventListener("ifxResetFiltersEvent",this.handleResetEvent)}render(){return c(g,{key:"d501181f0ff9311976fda4d41b04ee2b871aa3b1"},c("div",{key:"29fb80146dc2605bb3c4e95ef7944a0af6489c2e",class:"filter-type-group"},c("slot",{key:"c9b256944dd5c75ee893ac908e2f282c12b7613e",name:"filter-search"}),c("slot",{key:"a365f9582579ab4c149d0fec711113843a95a3b3",name:"filter-accordion"})))}get el(){return S(this)}};x.style=m;export{x as ifx_filter_type_group};
