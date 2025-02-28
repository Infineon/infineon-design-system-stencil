import{r as l,c,h as a,g as o}from"./index-7ZbyDl84.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}',d=r,g=class{constructor(e){l(this,e),this.ifxChange=c(this,"ifxChange",7),this.caption="",this.label="",this.size="regular",this.selectedValue=""}onSegmentSelect(e){const{previousValue:s,selectedValue:t}=this.unselectPreviousSegment(e.detail);this.selectedValue=t,this.ifxChange.emit({previousValue:s,selectedValue:t})}unselectPreviousSegment(e){let s,t;return this.getSegments().forEach(n=>{n.selected&&(n.segmentIndex!==e?(n.selected=!1,s=n.value):t=n.value)}),{previousValue:s,selectedValue:t}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const e=this.getSegments();let s=!1;e.forEach((t,i)=>{t.segmentIndex=i,s?t.selected&&(t.selected=!1):t.selected&&(s=!0,this.selectedValue=t.value)}),!s&&e.length&&(e[0].selected=!0,this.selectedValue=e[0].value)}setSegmentSize(){this.getSegments().forEach(s=>{s.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)})}componentDidLoad(){this.setActiveSegment()}render(){return a("div",{key:"f16a4862c4630a165c0af78ab548c543f361c8a1","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},a("div",{key:"0fedee3b59c3bad5f2d456cb8d9c1e93bdaa7983",class:"group__label"},this.label.trim()),a("div",{key:"a194d05342ac05dbbe14f60a4cbffcff3876dd81",class:"group__controls"},a("slot",{key:"3c14e9cdd5aec6283dff6d61ee4fef59cef54b18"})),this.caption.trim()&&a("div",{key:"76d3c32b1670d7c4690ddd235a19b5f11bcd8be8",class:"group__caption"},a("ifx-icon",{key:"7418495c943d83788a2a1b2dac6131041dc049d6",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return o(this)}};g.style=d;export{g as ifx_segmented_control};
