import{r as n,c as s,h as t}from"./index-vi5m6AM9.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.segment{display:flex;align-items:center;justify-content:center;gap:8px;position:relative;border:1px solid #BFBBBB;border-radius:1px;padding:0 8px 0 8px;height:34px;background-color:#FFFFFF;transition:all 100ms ease;transition-property:color, background;font:600 0.875rem/1.25rem "Source Sans 3"}.segment:focus-visible{color:#FFFFFF;background-color:#0A8276}.segment:hover{color:#FFFFFF;background-color:#08665C;cursor:pointer}.segment:active{background-color:#06534B}.segment.segment--selected{color:#FFFFFF;background-color:#0A8276}.segment.segment--small{height:30px}.segment::after{position:absolute;top:0;left:0;width:100%;height:100%;outline:1px solid #BFBBBB;border-radius:1px;content:""}',i=o,c=class{constructor(e){n(this,e),this.segmentSelect=s(this,"segmentSelect",5),this.icon=void 0,this.segmentIndex=void 0,this.selected=!1,this.value=void 0}handleSegmentClick(){this.selected||(this.selected=!0,this.segmentSelect.emit(this.segmentIndex))}handleSegmentKeyDown(e){if(e.code==="Enter"||e.code==="Space"){if(this.selected)return;this.selected=!0,this.segmentSelect.emit(this.segmentIndex)}}render(){return t("div",{key:"0a115fe376c6484b9c301689ffdf81bc9645d5e3",class:`segment ${this.selected?"segment--selected":""}`,tabIndex:0,onClick:()=>{this.handleSegmentClick()},onKeyDown:e=>{this.handleSegmentKeyDown(e)}},t("ifx-icon",{key:"565df7e4a349afca13c80ee467f7199c18756e67",icon:this.icon})," ",t("slot",{key:"3389c7d009e67542d3c4ba4ccbc32774cbd9b997"}))}};c.style=i;export{c as ifx_segment};
