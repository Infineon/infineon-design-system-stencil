import{r as a,c,h as n,g as o}from"./index-BQhScsWV.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}',f=r,d=class{constructor(e){a(this,e),this.ifxChange=c(this,"ifxChange",7),this.selectedValue="",this.caption="",this.label="",this.size="regular"}onSegmentSelect(e){const{previousValue:s,selectedValue:t}=this.unselectPreviousSegment(e.detail);this.selectedValue=t,this.ifxChange.emit({previousValue:s,selectedValue:t})}unselectPreviousSegment(e){let s,t;return this.getSegments().forEach(i=>{i.selected&&(i.segmentIndex!==e?(i.selected=!1,s=i.value):t=i.value)}),{previousValue:s,selectedValue:t}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const e=this.getSegments();let s=!1;e.forEach((t,l)=>{t.segmentIndex=l,s?t.selected&&(t.selected=!1):t.selected&&(s=!0,this.selectedValue=t.value)}),!s&&e.length&&(e[0].selected=!0,this.selectedValue=e[0].value)}setSegmentSize(){this.getSegments().forEach(s=>{s.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)})}componentDidLoad(){this.setActiveSegment()}render(){return n("div",{key:"552de41c4df16bfa006cd3c4f634046cecf315ab","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},n("div",{key:"c72fd7d406e20735d72c828d756e704941e098fe",class:"group__label"},this.label.trim()),n("div",{key:"be2816aec728f2cd0ebb1231f1fc92081964d6cd",class:"group__controls"},n("slot",{key:"0ff4c209b31eb85e0cc9e685068ebc2586dadcc5"})),this.caption.trim()&&n("div",{key:"6757b003d7f66c8a52344b1f0814d4ec05f541a9",class:"group__caption"},n("ifx-icon",{key:"e6fc3cf74ffbf1b71c21de77afca44e62cf49e26",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return o(this)}};d.style=f;export{d as ifx_segmented_control};
