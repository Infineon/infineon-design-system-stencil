import{r as l,c as o,h as n,g as c}from"./index-C6xyPC_A.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}',g=r,f=class{constructor(e){l(this,e),this.ifxChange=o(this,"ifxChange",7),this.caption="",this.label="",this.size="regular",this.selectedValue=""}onSegmentSelect(e){const{previousValue:s,selectedValue:t}=this.unselectPreviousSegment(e.detail);this.selectedValue=t,this.ifxChange.emit({previousValue:s,selectedValue:t})}unselectPreviousSegment(e){let s,t;return this.getSegments().forEach(a=>{a.selected&&(a.segmentIndex!==e?(a.selected=!1,s=a.value):t=a.value)}),{previousValue:s,selectedValue:t}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const e=this.getSegments();let s=!1;e.forEach((t,i)=>{t.segmentIndex=i,s?t.selected&&(t.selected=!1):t.selected&&(s=!0,this.selectedValue=t.value)}),!s&&e.length&&(e[0].selected=!0,this.selectedValue=e[0].value)}setSegmentSize(){this.getSegments().forEach(s=>{s.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)})}componentDidLoad(){this.setActiveSegment()}render(){return n("div",{key:"107dc81c1511f43afe458598f531dba52c291e32","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},n("div",{key:"879f0a9e7969f6dee38992352af1c5abb0ff1844",class:"group__label"},this.label.trim()),n("div",{key:"114496531e8455b9b109d62d882b943920b8f925",class:"group__controls"},n("slot",{key:"2199416c1ffee2e0ca7b6f158da9cc697f1ae290"})),this.caption.trim()&&n("div",{key:"78c776417c479c9ac008d0a5e249f11300d0f9e8",class:"group__caption"},n("ifx-icon",{key:"4e275a5017e078c8eda524151fec0e1a7129e807",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return c(this)}};f.style=g;export{f as ifx_segmented_control};
