"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[689],{689:(i,n,s)=>{s.r(n),s.d(n,{ifx_segmented_control_group:()=>r});var e=s(9046);const r=(()=>{let a=class{constructor(t){(0,e.r)(this,t),this.ifxChange=(0,e.c)(this,"ifxChange",7),this.caption="",this.groupLabel="",this.size="regular",this.selectedValue=void 0}onSegmentSelect(t){this.selectedValue!==t.detail&&this.ifxChange.emit({previousValue:this.selectedValue,selectedValue:t.detail})}handleValueChange(){this.setActiveSegment()}getSegmentedControls(){return this.segmentedControlGroup.querySelectorAll("ifx-segmented-control")}setActiveSegment(){this.getSegmentedControls().forEach(o=>{o.value===this.selectedValue?o.shadowRoot.querySelector(".control").classList.add("control--selected"):o.shadowRoot.querySelector(".control").classList.remove("control--selected")})}setSegmentedControlSize(){this.getSegmentedControls().forEach(o=>{o.shadowRoot.querySelector(".control").classList.add(`control--${this.size}`)})}componentDidLoad(){this.setActiveSegment()}render(){return(0,e.h)("div",{key:"a45ca09ea8bb404c73046042754acb0c6f028e76","aria-value":this.selectedValue,"aria-label":"segmented controls",class:"group"},(0,e.h)("div",{key:"9503005192a227b7da09d79a5727255aeadac4c0",class:"group__label"},this.groupLabel.trim()),(0,e.h)("div",{key:"6e945bdb50fded0e7b0bc37a2b6271adbf4756ac",class:"group__controls"},(0,e.h)("slot",{key:"dc2a096f6419ea3a092e534123b340b9f4aab7a7"})),this.caption.trim()&&(0,e.h)("div",{key:"d15858ccccd03b160a1b8564579d9d6f31ebee84",class:"group__caption"},(0,e.h)("ifx-icon",{key:"fb1b535641a1d85eaad9f8def7fdad7f5e02da60",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentedControlSize()}get segmentedControlGroup(){return(0,e.g)(this)}static get watchers(){return{selectedValue:["handleValueChange"]}}};return a.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap;gap:1px;padding:1px;outline:1px solid #BFBBBB;border-radius:1px;width:fit-content;background-color:#BFBBBB}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}',a})()}}]);