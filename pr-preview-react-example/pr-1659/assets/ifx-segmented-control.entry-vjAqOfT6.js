import{r as l,c,h as n,g as o}from"./index-Duz3CTfe.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}',g=r,f=class{constructor(e){l(this,e),this.ifxChange=c(this,"ifxChange",7),this.selectedValue="",this.caption="",this.label="",this.size="regular"}onSegmentSelect(e){const{previousValue:s,selectedValue:t}=this.unselectPreviousSegment(e.detail);this.selectedValue=t,this.ifxChange.emit({previousValue:s,selectedValue:t})}unselectPreviousSegment(e){let s,t;return this.getSegments().forEach(a=>{a.selected&&(a.segmentIndex!==e?(a.selected=!1,s=a.value):t=a.value)}),{previousValue:s,selectedValue:t}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const e=this.getSegments();let s=!1;e.forEach((t,i)=>{t.segmentIndex=i,s?t.selected&&(t.selected=!1):t.selected&&(s=!0,this.selectedValue=t.value)}),!s&&e.length&&(e[0].selected=!0,this.selectedValue=e[0].value)}setSegmentSize(){this.getSegments().forEach(s=>{s.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)})}componentDidLoad(){this.setActiveSegment()}render(){return n("div",{key:"5ca0ee9243e0823492e12fe8b2630985f694fd69","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},n("div",{key:"b3675371fb2e67ceed8ace372b127b9e9113f939",class:"group__label"},this.label.trim()),n("div",{key:"917662be651673665491b329aa0b50b0cb40a2cd",class:"group__controls"},n("slot",{key:"d4ce45676acc1fda36e03129756cf74b3bb1c939"})),this.caption.trim()&&n("div",{key:"0881e270ba2a728c5800658f9f2a1eea0ffc2ae8",class:"group__caption"},n("ifx-icon",{key:"3279f97de64a7d2ae369c934c4f3ea9efecdbb5b",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return o(this)}};f.style=g;export{f as ifx_segmented_control};
