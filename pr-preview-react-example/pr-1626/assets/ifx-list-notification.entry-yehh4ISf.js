import{r,h as s,g as f}from"./index-Cvml83ea.js";const d=".list-group-notification{width:350px;height:88px;padding:16px;margin-bottom:8px;background-color:#FFFFFF;border:1px solid #EEEDED;font-family:var(--ifx-font-family)}.list-group-notification .description__section{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-notification .heading__section{display:flex;justify-content:space-between;margin-bottom:8px;color:#0A8276}.list-group-notification .heading__section-title{flex:1;margin:0;font-weight:600;line-height:1.2;font-size:1rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification .heading__section-time{flex:none;margin-left:2px;font-size:0.875rem;line-height:1.25rem;font-weight:400;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}",c=d,h=class{constructor(t){r(this,t),this.titleText="",this.isFlush=!1,this.creationTime=void 0,this.postTime=void 0,this.shownTime=void 0}setDisplayTime(t,e,i,o){t<=60?this.shownTime="Just now":e<=60?this.shownTime=`${e} min. ago`:i<=24?this.shownTime=i>1?`${i} hr. ago`:`${i} hrs. ago`:o&&(this.shownTime=i<48?"1 day ago":`${o} days ago`,i>168&&(this.shownTime=`${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`))}stringToDate(t){if(!t)return null;let e=t.split("/");if(e[2]&&e[2].split(" ")[1]){let i=e[2].split(" ")[1].split(":");return e[2]=e[2].split(" ")[0],new Date(+e[2],e[1]-1,+e[0],i[0],i[1],i[2])}}getElapsedTime(t){let e=this.stringToDate(t);if(e){let i=Date.now()-e.getTime(),o=Math.floor(i/1e3),n=Math.floor(i/6e4),l=Math.floor(n/60),a=Math.floor(l/24);this.setDisplayTime(o,n,l,a)}}setTimeInterval(t){this.postTime=window.setInterval(()=>{this.getElapsedTime(t)},1e3)}componentWillLoad(){this.getElapsedTime(this.creationTime),this.setTimeInterval(this.creationTime),this.el.closest("ifx-list-group").flush?this.isFlush=!0:this.isFlush=!1}disconnectedCallback(){window.clearInterval(this.postTime)}render(){return s("div",{key:"91e1c400374162be139fed99ce0d7e4495b46eb6",class:`list-group-notification ${this.isFlush?"flush":""}`},s("div",{key:"f15575375e0698d0bedb1989e86bfcc24347d1a6",class:"heading__section"},s("h6",{key:"ea441212ebfe13f6d2714417dbe3f2770598fd6d",class:"heading__section-title"},this.titleText),s("div",{key:"0dffec118ce4c588e992531d68492382ad20476d",class:"heading__section-time"},this.shownTime)),s("div",{key:"063ccfbb83b2a2d839e6e230ec88fba4b9d59a1d",class:"description__section"},s("slot",{key:"e449dec2d47fba283a71b1f284963652d39b8ac8"})))}get el(){return f(this)}};h.style=c;export{h as ifx_list_notification};
