"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[2299],{2299:(p,l,n)=>{n.r(l),n.d(l,{ifx_list_notification:()=>h});var s=n(581);const h=(()=>{let a=class{constructor(t){(0,s.r)(this,t),this.titleText="",this.isFlush=!1,this.creationTime=void 0,this.postTime=void 0,this.shownTime=void 0}setDisplayTime(t,i,e,o){t<=60?this.shownTime="Just now":i<=60?this.shownTime=`${i} min. ago`:e<=24?this.shownTime=e>1?`${e} hr. ago`:`${e} hrs. ago`:o&&(this.shownTime=e<48?"1 day ago":`${o} days ago`,e>168&&(this.shownTime=`${(new Date).getDay()}.${(new Date).getMonth()}.${(new Date).getFullYear()}`))}stringToDate(t){if(!t)return null;let i=t.split("/");if(i[2]&&i[2].split(" ")[1]){let e=i[2].split(" ")[1].split(":");return i[2]=i[2].split(" ")[0],new Date(+i[2],i[1]-1,+i[0],e[0],e[1],e[2])}}getElapsedTime(t){let i=this.stringToDate(t);if(i){let e=Date.now()-i.getTime(),o=Math.floor(e/1e3),d=Math.floor(e/6e4),f=Math.floor(d/60),c=Math.floor(f/24);this.setDisplayTime(o,d,f,c)}}setTimeInterval(t){this.postTime=window.setInterval(()=>{this.getElapsedTime(t)},1e3)}componentWillLoad(){this.getElapsedTime(this.creationTime),this.setTimeInterval(this.creationTime),this.isFlush=!!this.el.closest("ifx-list-group").flush}disconnectedCallback(){window.clearInterval(this.postTime)}render(){return(0,s.h)("div",{key:"91e1c400374162be139fed99ce0d7e4495b46eb6",class:"list-group-notification "+(this.isFlush?"flush":"")},(0,s.h)("div",{key:"f15575375e0698d0bedb1989e86bfcc24347d1a6",class:"heading__section"},(0,s.h)("h6",{key:"ea441212ebfe13f6d2714417dbe3f2770598fd6d",class:"heading__section-title"},this.titleText),(0,s.h)("div",{key:"0dffec118ce4c588e992531d68492382ad20476d",class:"heading__section-time"},this.shownTime)),(0,s.h)("div",{key:"063ccfbb83b2a2d839e6e230ec88fba4b9d59a1d",class:"description__section"},(0,s.h)("slot",{key:"e449dec2d47fba283a71b1f284963652d39b8ac8"})))}get el(){return(0,s.g)(this)}};return a.style=".list-group-notification{width:350px;height:88px;padding:16px;margin-bottom:8px;background-color:#FFFFFF;border:1px solid #EEEDED;font-family:var(--ifx-font-family)}.list-group-notification .description__section{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-notification .heading__section{display:flex;justify-content:space-between;margin-bottom:8px;color:#0A8276}.list-group-notification .heading__section-title{flex:1;margin:0;font-weight:600;line-height:1.2;font-size:1rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification .heading__section-time{flex:none;margin-left:2px;font-size:0.875rem;line-height:1.25rem;font-weight:400;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}",a})()}}]);