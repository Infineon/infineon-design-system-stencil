"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4407],{4407:(f,a,i)=>{i.r(a),i.d(a,{ifx_segmented_control:()=>r});var n=i(2916);const r=(()=>{let c=class{constructor(e){(0,n.r)(this,e),this.ifxChange=(0,n.c)(this,"ifxChange",7),this.caption="",this.label="",this.size="regular",this.selectedValue=""}onSegmentSelect(e){const{previousValue:s,selectedValue:t}=this.unselectPreviousSegment(e.detail);this.selectedValue=t,this.ifxChange.emit({previousValue:s,selectedValue:t})}unselectPreviousSegment(e){let s,t;return this.getSegments().forEach(l=>{l.selected&&(l.segmentIndex!==e?(l.selected=!1,s=l.value):t=l.value)}),{previousValue:s,selectedValue:t}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const e=this.getSegments();let s=!1;e.forEach((t,o)=>{t.segmentIndex=o,s?t.selected&&(t.selected=!1):t.selected&&(s=!0,this.selectedValue=t.value)}),!s&&e.length&&(e[0].selected=!0,this.selectedValue=e[0].value)}setSegmentSize(){this.getSegments().forEach(s=>{s.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)})}componentDidLoad(){this.setActiveSegment()}render(){return(0,n.h)("div",{key:"d9e5a150744e74e5f74acc2f515ff47b8e3419d4","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},(0,n.h)("div",{key:"be06aeb64d42d76d10b24241922f02e0ae1198e7",class:"group__label"},this.label.trim()),(0,n.h)("div",{key:"d02bbd03b4f3cc2b8758519dcd3ac0bcc56d30e0",class:"group__controls"},(0,n.h)("slot",{key:"edc51c6caf5148d83fff252f0418194f4be20744"})),this.caption.trim()&&(0,n.h)("div",{key:"58111856e2d4ceb7491ce1b9cff7abc821cc3c31",class:"group__caption"},(0,n.h)("ifx-icon",{key:"c9178cc674af2865eb99422dc598c0da8cf8e390",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return(0,n.g)(this)}};return c.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}',c})()}}]);