import{r as s,c as n,h as t}from"./index-GFPp6EFk.js";const o=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.segment{display:flex;align-items:center;justify-content:center;gap:8px;position:relative;border:1px solid #BFBBBB;border-radius:1px;padding:0 8px 0 8px;height:34px;background-color:#FFFFFF;transition:all 100ms ease;transition-property:color, background;font:600 0.875rem/1.25rem "Source Sans 3"}.segment:focus-visible{color:#FFFFFF;background-color:#0A8276}.segment:hover{color:#FFFFFF;background-color:#08665C;cursor:pointer}.segment:active{background-color:#06534B}.segment.segment--selected{color:#FFFFFF;background-color:#0A8276}.segment.segment--small{height:30px}.segment::after{position:absolute;top:0;left:0;width:100%;height:100%;outline:1px solid #BFBBBB;border-radius:1px;content:""}',i=o,r=class{constructor(e){s(this,e),this.segmentSelect=n(this,"segmentSelect",5),this.selected=!1}handleSegmentClick(){this.selected||(this.selected=!0,this.segmentSelect.emit(this.segmentIndex))}handleSegmentKeyDown(e){if(e.code==="Enter"||e.code==="Space"){if(this.selected)return;this.selected=!0,this.segmentSelect.emit(this.segmentIndex)}}render(){return t("div",{key:"a2a4f876b6df7d82483690ab39a8eb2957f86b98",class:`segment ${this.selected?"segment--selected":""}`,tabIndex:0,onClick:()=>{this.handleSegmentClick()},onKeyDown:e=>{this.handleSegmentKeyDown(e)}},t("ifx-icon",{key:"ebb49e6c61e102ef1b215c7210108af449a4533f",icon:this.icon})," ",t("slot",{key:"cbbb7945b5cfe90543b0ed3ddbe64f1799f1483c"}))}};r.style=i;export{r as ifx_segment};
