import{r as f,c as p,h as c,H as g,g as S}from"./index-BZzd9WRv.js";const u=":host{display:flex}.filter-type-group{width:260px;align-items:flex-start;gap:8px}.filter-type-group>::slotted(*){margin-bottom:8px}",m=u,x=class{constructor(d){f(this,d),this.ifxSidebarFilterChange=p(this,"ifxSidebarFilterChange",7),this.selectedOptions=[],this.handleResetEvent=()=>{this.el.shadowRoot.querySelector('slot[name="filter-accordion"]').assignedElements({flatten:!0}).forEach(e=>{e.querySelectorAll("ifx-list").forEach(o=>{o.resetTrigger=!o.resetTrigger})}),this.el.shadowRoot.querySelector('slot[name="filter-search"]').assignedElements({flatten:!0}).forEach(e=>{const o=e.querySelector("ifx-filter-search").shadowRoot.querySelectorAll("ifx-search-field");o.length>0&&o.forEach(s=>{s.value=""})}),this.selectedOptions=[],this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.handleUpdateSidebarFilter=t=>{const{filterName:i}=t.detail,r=this.el.shadowRoot.querySelector('slot[name="filter-accordion"]');(r?r.assignedElements({flatten:!0}):[]).forEach(s=>{s.querySelectorAll("ifx-list").forEach(a=>{a.getAttribute("name")===i&&(a.resetTrigger=!a.resetTrigger)})});const e=this.el.shadowRoot.querySelector('slot[name="filter-search"]');(e?e.assignedNodes({flatten:!0}):[]).forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){const a=s.firstElementChild;a&&(a.setAttribute("value",""),a.dispatchEvent(new CustomEvent("ifxInput",{bubbles:!0,composed:!0,detail:""})))}});const o=this.selectedOptions.map(s=>s.filterGroupName===i?Object.assign(Object.assign({},s),{selectedItems:[],value:""}):s);this.selectedOptions=o,this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.handleAccordionChange=t=>{this.handleFilterChange(t)},this.handleSearchChange=t=>{this.handleFilterChange(t)},this.handleFilterChange=t=>{const i=[...this.selectedOptions];if(t.type==="ifxFilterSearchChange"){const{filterName:r,filterValue:l}=t.detail,e=i.findIndex(n=>typeof n!="string"&&n.filterGroupName===r);e!==-1?i[e].value=l:i.push({filterGroupName:r,value:l})}else if(t.type==="ifxFilterAccordionChange"){const{filterGroupName:r,selectedItems:l}=t.detail,e=i.findIndex(n=>n.filterGroupName===r);e!==-1?i[e]={filterGroupName:r,selectedItems:l}:i.push({filterGroupName:r,selectedItems:l})}this.selectedOptions=i,this.ifxSidebarFilterChange.emit(this.selectedOptions)}}connectedCallback(){this.el.addEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.addEventListener("ifxFilterSearchChange",this.handleSearchChange),window.addEventListener("ifxResetFiltersEvent",this.handleResetEvent),window.addEventListener("ifxUpdateSidebarFilter",this.handleUpdateSidebarFilter)}componentWillUnload(){this.el.removeEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.removeEventListener("ifxFilterSearchChange",this.handleSearchChange),window.removeEventListener("ifxResetFiltersEvent",this.handleResetEvent)}render(){return c(g,{key:"d794c0d53d4cdf1d9e7a233dc36da89b7407bc57"},c("div",{key:"f59f81f2402e974ce04c937c620907fc553b3752",class:"filter-type-group"},c("slot",{key:"35b06d9b7d04566fce7497c81a641a76bcf987e4",name:"filter-search"}),c("slot",{key:"86614c6a09e9d42392cef57017965abd337582e4",name:"filter-accordion"})))}get el(){return S(this)}};x.style=m;export{x as ifx_filter_type_group};
