"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4407],{4407:(g,a,i)=>{i.r(a),i.d(a,{ifx_segmented_control:()=>r});var n=i(581);const r=(()=>{let o=class{constructor(e){(0,n.r)(this,e),this.ifxChange=(0,n.c)(this,"ifxChange",7),this.selectedValue="",this.caption="",this.label="",this.size="regular"}onSegmentSelect(e){const{previousValue:s,selectedValue:t}=this.unselectPreviousSegment(e.detail);this.selectedValue=t,this.ifxChange.emit({previousValue:s,selectedValue:t})}unselectPreviousSegment(e){let s,t;return this.getSegments().forEach(l=>{l.selected&&(l.segmentIndex!==e?(l.selected=!1,s=l.value):t=l.value)}),{previousValue:s,selectedValue:t}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const e=this.getSegments();let s=!1;e.forEach((t,c)=>{t.segmentIndex=c,s?t.selected&&(t.selected=!1):t.selected&&(s=!0,this.selectedValue=t.value)}),!s&&e.length&&(e[0].selected=!0,this.selectedValue=e[0].value)}setSegmentSize(){this.getSegments().forEach(s=>{s.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)})}componentDidLoad(){this.setActiveSegment()}render(){return(0,n.h)("div",{key:"e9d7590ddf1878c6aa2ebea72ddf6e5896f023c5","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},(0,n.h)("div",{key:"331ed74fd0b90e85eeb210f1f1d02461c72220cf",class:"group__label"},this.label.trim()),(0,n.h)("div",{key:"aace3959c8db0ab68132193003d443347e4a51c2",class:"group__controls"},(0,n.h)("slot",{key:"36f3979e6ee663206393dec7142500a8fb619794"})),this.caption.trim()&&(0,n.h)("div",{key:"6610bca5efbf9524bd5b1dbe2668ce90dc886ecd",class:"group__caption"},(0,n.h)("ifx-icon",{key:"bb2b57e775f4c76c17cb96f219bfdf6e5bdb6aa4",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return(0,n.g)(this)}};return o.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}',o})()}}]);