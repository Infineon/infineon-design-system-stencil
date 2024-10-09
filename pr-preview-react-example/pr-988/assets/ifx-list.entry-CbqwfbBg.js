import{r as l,c as h,h as i,g as a}from"./index-CUTtscpp.js";import"@stencil/react-output-target/runtime";const o=".link-wrapper{display:flex;flex-direction:column;align-items:center;gap:8px;margin-top:8px}",d=o,c=class{constructor(e){l(this,e),this.ifxListUpdate=h(this,"ifxListUpdate",7),this.handleMutation=()=>{const t=this.getTotalItems();t!==this.totalItems&&(this.totalItems=t,this.handleCheckedChange()),this.updateListEntriesType(this.type)},this.toggleList=t=>{t.stopPropagation(),this.expanded=!this.expanded},this.toggleShowMore=t=>{t.stopPropagation(),this.showMore=!this.showMore},this.handleCheckedChange=t=>{t&&t.detail.type==="radio-button"&&t.detail.value&&Array.from(this.el.querySelectorAll("ifx-list-entry")).filter(r=>r.getAttribute("type")==="radio-button"&&r!==t.target).forEach(r=>r.setAttribute("value","false"));const s=this.getSelectedItems(this.el);this.selectedCount=s.length,this.ifxListUpdate.emit({name:this.name,selectedItems:s})},this.expanded=!1,this.showMore=!1,this.selectedCount=0,this.totalItems=0,this.name="",this.maxVisibleItems=6,this.type="checkbox",this.resetTrigger=void 0,this.internalResetTrigger=!1}handleTypeChange(e){this.updateListEntriesType(e)}resetTriggerChanged(e){e&&(this.reset(),this.resetTrigger=!1)}componentWillLoad(){this.setupListenersAndObservers(),this.initializeList()}disconnectedCallback(){this.cleanupListenersAndObservers()}reset(){this.resetListEntries(),this.expanded=!1,this.showMore=!1,this.selectedCount=0,this.ifxListUpdate.emit({name:this.name,selectedItems:[]})}render(){return this.renderList()}setupListenersAndObservers(){this.el.addEventListener("ifxListEntryChange",this.handleCheckedChange),this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.el,{childList:!0})}cleanupListenersAndObservers(){this.el.removeEventListener("ifxListEntryChange",this.handleCheckedChange),this.observer.disconnect()}initializeList(){this.selectedCount=this.getSelectedItems(this.el).length,this.totalItems=this.getTotalItems(),this.updateListEntriesType(this.type),this.checkRadioButtonConstraint()}updateListEntriesType(e){Array.from(this.el.querySelectorAll("ifx-list-entry")).forEach(s=>s.setAttribute("type",e))}resetListEntries(){Array.from(this.el.querySelectorAll("ifx-list-entry")).forEach(t=>{t.value=!1,t.setAttribute("value","false")})}checkRadioButtonConstraint(){this.type==="radio-button"&&this.selectedCount>1&&(this.resetListEntries(),this.selectedCount=0)}getTotalItems(){return this.el.querySelectorAll("ifx-list-entry").length}getSelectedItems(e){return Array.from(e.querySelectorAll("ifx-list-entry")).filter(t=>t.getAttribute("value")==="true").map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type"),element:t}))}renderList(){const e=Array.from(this.el.querySelectorAll("ifx-list-entry")),t=this.showMore?e:e.slice(0,this.maxVisibleItems),s=e.length-t.length;return i("div",{class:"list-wrapper"},t.map(n=>i("slot",{name:n.getAttribute("slot")})),(s>0||this.showMore)&&i("div",{class:"link-wrapper",onClick:this.toggleShowMore},i("ifx-icon",{key:this.showMore.toString(),icon:this.showMore?"chevron-up-12":"chevron-down-12"}),i("ifx-link",{size:"s",href:"",target:"_blank",variant:"underlined",disabled:!1},this.showMore?"Show less":`Show ${s} more`)))}get el(){return a(this)}static get watchers(){return{type:["handleTypeChange"],resetTrigger:["resetTriggerChanged"]}}};c.style=d;export{c as ifx_list};
