"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[2048],{2048:(i,t,e)=>{e.r(t),e.d(t,{ifx_list_notification:()=>s});var o=e(3739);const s=class{constructor(i){(0,o.r)(this,i),this.titleText="",this.isFlush=!1,this.creationTime=void 0,this.postTime=void 0,this.shownTime=void 0}setDisplayTime(i,t,e,o){i<=60?this.shownTime="Just now":t<=60?this.shownTime="".concat(t," min. ago"):e<=24?this.shownTime="".concat(e,e>1?" hr. ago":" hrs. ago"):o&&(this.shownTime=e<48?"1 day ago":"".concat(o," days ago"),e>168&&(this.shownTime="".concat((new Date).getDay(),".").concat((new Date).getMonth(),".").concat((new Date).getFullYear())))}stringToDate(i){if(!i)return null;let t=i.split("/");if(t[2]&&t[2].split(" ")[1]){let i=t[2].split(" ")[1].split(":");return t[2]=t[2].split(" ")[0],new Date(+t[2],t[1]-1,+t[0],i[0],i[1],i[2])}}getElapsedTime(i){let t=this.stringToDate(i);if(t){let i=Date.now()-t.getTime(),e=Math.floor(i/1e3),o=Math.floor(i/6e4),s=Math.floor(o/60),n=Math.floor(s/24);this.setDisplayTime(e,o,s,n)}}setTimeInterval(i){this.postTime=window.setInterval((()=>{this.getElapsedTime(i)}),1e3)}componentWillLoad(){this.getElapsedTime(this.creationTime),this.setTimeInterval(this.creationTime);this.el.closest("ifx-list-group").flush?this.isFlush=!0:this.isFlush=!1}disconnectedCallback(){window.clearInterval(this.postTime)}render(){return(0,o.h)("div",{class:"list-group-notification ".concat(this.isFlush?"flush":"")},(0,o.h)("div",{class:"heading__section"},(0,o.h)("h6",{class:"heading__section-title"},this.titleText),(0,o.h)("div",{class:"heading__section-time"},this.shownTime)),(0,o.h)("div",{class:"description__section"},(0,o.h)("slot",null)))}get el(){return(0,o.g)(this)}};s.style='.list-group-notification{width:350px;height:88px;padding:16px;margin-bottom:8px;background-color:#FFFFFF;border:1px solid #EEEDED}.list-group-notification .description__section{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-notification .heading__section{display:flex;justify-content:space-between;margin-bottom:8px;color:#0A8276}.list-group-notification .heading__section-title{flex:1;margin:0;font-family:"Source Sans Pro";font-weight:600;line-height:1.2;font-size:1rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification .heading__section-time{flex:none;margin-left:2px;font-size:0.875rem;line-height:1.25rem;font-weight:400;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}'}}]);
//# sourceMappingURL=2048.1d163402.chunk.js.map