"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[2048],{2048:function(i,t,e){e.r(t),e.d(t,{ifx_list_notification:function(){return l}});var o=e(5671),n=e(3144),s=e(2243),l=function(){function i(t){(0,o.Z)(this,i),(0,s.r)(this,t),this.titleText="",this.isFlush=!1,this.creationTime=void 0,this.postTime=void 0,this.shownTime=void 0}return(0,n.Z)(i,[{key:"setDisplayTime",value:function(i,t,e,o){i<=60?this.shownTime="Just now":t<=60?this.shownTime="".concat(t," min. ago"):e<=24?this.shownTime="".concat(e,e>1?" hr. ago":" hrs. ago"):o&&(this.shownTime=e<48?"1 day ago":"".concat(o," days ago"),e>168&&(this.shownTime="".concat((new Date).getDay(),".").concat((new Date).getMonth(),".").concat((new Date).getFullYear())))}},{key:"stringToDate",value:function(i){if(!i)return null;var t=i.split("/");if(t[2]&&t[2].split(" ")[1]){var e=t[2].split(" ")[1].split(":");return t[2]=t[2].split(" ")[0],new Date(+t[2],t[1]-1,+t[0],e[0],e[1],e[2])}}},{key:"getElapsedTime",value:function(i){var t=this.stringToDate(i);if(t){var e=Date.now()-t.getTime(),o=Math.floor(e/1e3),n=Math.floor(e/6e4),s=Math.floor(n/60),l=Math.floor(s/24);this.setDisplayTime(o,n,s,l)}}},{key:"setTimeInterval",value:function(i){var t=this;this.postTime=window.setInterval((function(){t.getElapsedTime(i)}),1e3)}},{key:"componentWillLoad",value:function(){this.getElapsedTime(this.creationTime),this.setTimeInterval(this.creationTime),this.el.closest("ifx-list-group").flush?this.isFlush=!0:this.isFlush=!1}},{key:"disconnectedCallback",value:function(){window.clearInterval(this.postTime)}},{key:"render",value:function(){return(0,s.h)("div",{class:"list-group-notification ".concat(this.isFlush?"flush":"")},(0,s.h)("div",{class:"heading__section"},(0,s.h)("h6",{class:"heading__section-title"},this.titleText),(0,s.h)("div",{class:"heading__section-time"},this.shownTime)),(0,s.h)("div",{class:"description__section"},(0,s.h)("slot",null)))}},{key:"el",get:function(){return(0,s.g)(this)}}]),i}();l.style='.list-group-notification{width:350px;height:88px;padding:16px;margin-bottom:8px;background-color:#FFFFFF;border:1px solid #EEEDED}.list-group-notification .description__section{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-notification .heading__section{display:flex;justify-content:space-between;margin-bottom:8px;color:#0A8276}.list-group-notification .heading__section-title{flex:1;margin:0;font-family:"Source Sans Pro";font-weight:600;line-height:1.2;font-size:1rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification .heading__section-time{flex:none;margin-left:2px;font-size:0.875rem;line-height:1.25rem;font-weight:400;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}'}}]);
//# sourceMappingURL=2048.2dfb27ed.chunk.js.map