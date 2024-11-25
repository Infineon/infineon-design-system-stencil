import{r as l,c,h as n,g as o}from"./index-DjyEVcOP.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}',g=r,f=class{constructor(e){l(this,e),this.ifxChange=c(this,"ifxChange",7),this.selectedValue="",this.caption="",this.label="",this.size="regular"}onSegmentSelect(e){const{previousValue:s,selectedValue:t}=this.unselectPreviousSegment(e.detail);this.selectedValue=t,this.ifxChange.emit({previousValue:s,selectedValue:t})}unselectPreviousSegment(e){let s,t;return this.getSegments().forEach(i=>{i.selected&&(i.segmentIndex!==e?(i.selected=!1,s=i.value):t=i.value)}),{previousValue:s,selectedValue:t}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const e=this.getSegments();let s=!1;e.forEach((t,a)=>{t.segmentIndex=a,s?t.selected&&(t.selected=!1):t.selected&&(s=!0,this.selectedValue=t.value)}),!s&&e.length&&(e[0].selected=!0,this.selectedValue=e[0].value)}setSegmentSize(){this.getSegments().forEach(s=>{s.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)})}componentDidLoad(){this.setActiveSegment()}render(){return n("div",{key:"42d423ccf53e16757603b95584926e01ef05b9fe","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},n("div",{key:"261921695c16c88d62564383590d3fa2c249a5f7",class:"group__label"},this.label.trim()),n("div",{key:"5acd2baa0945e9bfbb38feb4112d4cc7e1093c1c",class:"group__controls"},n("slot",{key:"2bb4ded58d002a67122eafb10c7f1969b8824822"})),this.caption.trim()&&n("div",{key:"efc69ec956cf953c8fe07a46058b31158e2c2224",class:"group__caption"},n("ifx-icon",{key:"b25e0f621f8eee2874c27eb5219c0367ba0da401",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return o(this)}};f.style=g;export{f as ifx_segmented_control};
