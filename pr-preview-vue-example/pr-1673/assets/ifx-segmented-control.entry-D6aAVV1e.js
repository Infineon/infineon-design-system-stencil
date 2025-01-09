import{r as l,c,h as a,g as o}from"./index-DXPBYoE1.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}',g=r,d=class{constructor(e){l(this,e),this.ifxChange=c(this,"ifxChange",7),this.selectedValue="",this.caption="",this.label="",this.size="regular"}onSegmentSelect(e){const{previousValue:s,selectedValue:t}=this.unselectPreviousSegment(e.detail);this.selectedValue=t,this.ifxChange.emit({previousValue:s,selectedValue:t})}unselectPreviousSegment(e){let s,t;return this.getSegments().forEach(n=>{n.selected&&(n.segmentIndex!==e?(n.selected=!1,s=n.value):t=n.value)}),{previousValue:s,selectedValue:t}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const e=this.getSegments();let s=!1;e.forEach((t,i)=>{t.segmentIndex=i,s?t.selected&&(t.selected=!1):t.selected&&(s=!0,this.selectedValue=t.value)}),!s&&e.length&&(e[0].selected=!0,this.selectedValue=e[0].value)}setSegmentSize(){this.getSegments().forEach(s=>{s.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)})}componentDidLoad(){this.setActiveSegment()}render(){return a("div",{key:"2a980fa0fd18e469c2d92c57c80c62b7dfee30e9","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},a("div",{key:"bf202bd9f2a4967c5a5c0cd24013242ad4752a80",class:"group__label"},this.label.trim()),a("div",{key:"89e974d972a4ad903193459e9a65b47c89114ab8",class:"group__controls"},a("slot",{key:"10a57ab800389b4a7ae482c152817486a28ae96f"})),this.caption.trim()&&a("div",{key:"f63a61eabf58e03cc0c4b5bae031965b82cb4f2c",class:"group__caption"},a("ifx-icon",{key:"b758bb66d96d48e795565dbd662f1a2fc3648bfe",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return o(this)}};d.style=g;export{d as ifx_segmented_control};
