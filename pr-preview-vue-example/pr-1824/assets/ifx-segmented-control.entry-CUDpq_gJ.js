import{r as l,c as o,h as a,g as c}from"./index-DnthRwOL.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}',g=r,f=class{constructor(e){l(this,e),this.ifxChange=o(this,"ifxChange",7),this.caption="",this.label="",this.size="regular",this.selectedValue=""}onSegmentSelect(e){const{previousValue:s,selectedValue:t}=this.unselectPreviousSegment(e.detail);this.selectedValue=t,this.ifxChange.emit({previousValue:s,selectedValue:t})}unselectPreviousSegment(e){let s,t;return this.getSegments().forEach(n=>{n.selected&&(n.segmentIndex!==e?(n.selected=!1,s=n.value):t=n.value)}),{previousValue:s,selectedValue:t}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const e=this.getSegments();let s=!1;e.forEach((t,i)=>{t.segmentIndex=i,s?t.selected&&(t.selected=!1):t.selected&&(s=!0,this.selectedValue=t.value)}),!s&&e.length&&(e[0].selected=!0,this.selectedValue=e[0].value)}setSegmentSize(){this.getSegments().forEach(s=>{s.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)})}componentDidLoad(){this.setActiveSegment()}render(){return a("div",{key:"440acc93eac2fe00fb0de05708e74361b47889e3","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},a("div",{key:"0fbbe733af666f4da2684f7146cace877d43be18",class:"group__label"},this.label.trim()),a("div",{key:"f4ddddb0f4870b5de51133e1d4f44b52aac091b6",class:"group__controls"},a("slot",{key:"c89b3beba004ae66725b3fe82c588a9af2c1b645"})),this.caption.trim()&&a("div",{key:"25e23614a9f8c980c7a96a6dff27ca9836b552ab",class:"group__caption"},a("ifx-icon",{key:"09766369503ef8aac9ea018b5eb3e547932b6121",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return c(this)}};f.style=g;export{f as ifx_segmented_control};
