import{r as l,c as o,h as n,g as c}from"./index-Byzes2V_.js";const r=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}',d=r,f=class{constructor(e){l(this,e),this.ifxChange=o(this,"ifxChange",7),this.caption="",this.label="",this.size="regular",this.selectedValue=""}onSegmentSelect(e){const{previousValue:s,selectedValue:t}=this.unselectPreviousSegment(e.detail);this.selectedValue=t,this.ifxChange.emit({previousValue:s,selectedValue:t})}unselectPreviousSegment(e){let s,t;return this.getSegments().forEach(i=>{i.selected&&(i.segmentIndex!==e?(i.selected=!1,s=i.value):t=i.value)}),{previousValue:s,selectedValue:t}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const e=this.getSegments();let s=!1;e.forEach((t,a)=>{t.segmentIndex=a,s?t.selected&&(t.selected=!1):t.selected&&(s=!0,this.selectedValue=t.value)}),!s&&e.length&&(e[0].selected=!0,this.selectedValue=e[0].value)}setSegmentSize(){this.getSegments().forEach(s=>{s.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)})}componentDidLoad(){this.setActiveSegment()}render(){return n("div",{key:"9fb656fefd8b61e7c563ac77a20a303d40c6f146","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},n("div",{key:"de4f8bf1f2404f106ff180167bf4c79abd2b165b",class:"group__label"},this.label.trim()),n("div",{key:"e110c6c98b981142df08e7dda574b2d3e102a19d",class:"group__controls"},n("slot",{key:"3dd13439a68201c2f42104c4853b371c669e18df"})),this.caption.trim()&&n("div",{key:"946fe774c7cf3f9642447b9a8cb0e258d3f9d493",class:"group__caption"},n("ifx-icon",{key:"39f21a9eae4961da05f38d6930bcc373671e9794",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return c(this)}};f.style=d;export{f as ifx_segmented_control};
