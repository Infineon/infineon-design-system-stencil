"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[8399],{8399:(c,n,l)=>{l.r(n),l.d(n,{ifx_list:()=>d});var s=l(581);const d=(()=>{let h=class{constructor(e){(0,s.r)(this,e),this.ifxListUpdate=(0,s.c)(this,"ifxListUpdate",7),this.handleMutation=()=>{const t=this.getTotalItems();t!==this.totalItems&&(this.totalItems=t,this.handleCheckedChange()),this.updateListEntriesType(this.type)},this.toggleList=t=>{t.stopPropagation(),this.expanded=!this.expanded},this.toggleShowMore=t=>{t.stopPropagation(),this.showMore=!this.showMore},this.handleCheckedChange=t=>{t&&"radio-button"===t.detail.type&&t.detail.value&&Array.from(this.el.querySelectorAll("ifx-list-entry")).filter(r=>"radio-button"===r.getAttribute("type")&&r!==t.target).forEach(r=>r.setAttribute("value","false"));const i=this.getSelectedItems(this.el);this.selectedCount=i.length,this.ifxListUpdate.emit({name:this.name,selectedItems:i})},this.expanded=!1,this.showMore=!1,this.selectedCount=0,this.totalItems=0,this.name="",this.maxVisibleItems=6,this.type="checkbox",this.resetTrigger=void 0,this.internalResetTrigger=!1}handleTypeChange(e){this.updateListEntriesType(e)}resetTriggerChanged(e){e&&(this.reset(),this.resetTrigger=!1)}componentWillLoad(){this.setupListenersAndObservers(),this.initializeList()}disconnectedCallback(){this.cleanupListenersAndObservers()}reset(){this.resetListEntries(),this.expanded=!1,this.showMore=!1,this.selectedCount=0,this.ifxListUpdate.emit({name:this.name,selectedItems:[]})}render(){return this.renderList()}setupListenersAndObservers(){this.el.addEventListener("ifxListEntryChange",this.handleCheckedChange),this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.el,{childList:!0})}cleanupListenersAndObservers(){this.el.removeEventListener("ifxListEntryChange",this.handleCheckedChange),this.observer.disconnect()}initializeList(){this.selectedCount=this.getSelectedItems(this.el).length,this.totalItems=this.getTotalItems(),this.updateListEntriesType(this.type),this.checkRadioButtonConstraint()}updateListEntriesType(e){Array.from(this.el.querySelectorAll("ifx-list-entry")).forEach(i=>i.setAttribute("type",e))}resetListEntries(){Array.from(this.el.querySelectorAll("ifx-list-entry")).forEach(t=>{t.value=!1,t.setAttribute("value","false")})}checkRadioButtonConstraint(){"radio-button"===this.type&&this.selectedCount>1&&(this.resetListEntries(),this.selectedCount=0)}getTotalItems(){return this.el.querySelectorAll("ifx-list-entry").length}getSelectedItems(e){return Array.from(e.querySelectorAll("ifx-list-entry")).filter(t=>"true"===t.getAttribute("value")).map(t=>({label:t.getAttribute("label"),value:t.getAttribute("value"),type:t.getAttribute("type"),element:t}))}renderList(){const e=Array.from(this.el.querySelectorAll("ifx-list-entry")),t=this.showMore?e:e.slice(0,this.maxVisibleItems),i=e.length-t.length;return(0,s.h)("div",{class:"list-wrapper"},t.map(a=>(0,s.h)("slot",{name:a.getAttribute("slot")})),(i>0||this.showMore)&&(0,s.h)("div",{class:"link-wrapper",onClick:this.toggleShowMore},(0,s.h)("ifx-icon",{key:this.showMore.toString(),icon:this.showMore?"chevron-up-12":"chevron-down-12"}),(0,s.h)("ifx-link",{size:"s",href:"",target:"_blank",variant:"underlined",disabled:!1},this.showMore?"Show less":`Show ${i} more`)))}get el(){return(0,s.g)(this)}static get watchers(){return{type:["handleTypeChange"],resetTrigger:["resetTriggerChanged"]}}};return h.style=".link-wrapper{display:flex;flex-direction:column;align-items:center;gap:8px;margin-top:8px}",h})()}}]);