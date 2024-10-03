import{r as f,h as s,g as r}from"./index-Bz-wAaeD.js";const c=".list-group-notification{width:350px;height:88px;padding:16px;margin-bottom:8px;background-color:#FFFFFF;border:1px solid #EEEDED;font-family:var(--ifx-font-family)}.list-group-notification .description__section{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-notification .heading__section{display:flex;justify-content:space-between;margin-bottom:8px;color:#0A8276}.list-group-notification .heading__section-title{flex:1;margin:0;font-weight:600;line-height:1.2;font-size:1rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification .heading__section-time{flex:none;margin-left:2px;font-size:0.875rem;line-height:1.25rem;font-weight:400;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}",d=c,h=class{constructor(t){f(this,t),this.titleText="",this.isFlush=!1,this.creationTime=void 0,this.postTime=void 0,this.shownTime=void 0}setDisplayTime(t,i,e,o){t<=60?this.shownTime="Just now":i<=60?this.shownTime=`${i} min. ago`:e<=24?this.shownTime=e>1?`${e} hr. ago`:`${e} hrs. ago`:o&&(this.shownTime=e<48?"1 day ago":`${o} days ago`,e>168&&(this.shownTime=`${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`))}stringToDate(t){if(!t)return null;let i=t.split("/");if(i[2]&&i[2].split(" ")[1]){let e=i[2].split(" ")[1].split(":");return i[2]=i[2].split(" ")[0],new Date(+i[2],i[1]-1,+i[0],e[0],e[1],e[2])}}getElapsedTime(t){let i=this.stringToDate(t);if(i){let e=Date.now()-i.getTime(),o=Math.floor(e/1e3),n=Math.floor(e/6e4),l=Math.floor(n/60),a=Math.floor(l/24);this.setDisplayTime(o,n,l,a)}}setTimeInterval(t){this.postTime=window.setInterval(()=>{this.getElapsedTime(t)},1e3)}componentWillLoad(){this.getElapsedTime(this.creationTime),this.setTimeInterval(this.creationTime),this.el.closest("ifx-list-group").flush?this.isFlush=!0:this.isFlush=!1}disconnectedCallback(){window.clearInterval(this.postTime)}render(){return s("div",{key:"9de5627da7668df0615df1171892bf9f9ddae2d3",class:`list-group-notification ${this.isFlush?"flush":""}`},s("div",{key:"5f4649aa11d1976c71be8ef139e6f20fb52ae788",class:"heading__section"},s("h6",{key:"67f5a7e6d33644db4e133361478f679c979800de",class:"heading__section-title"},this.titleText),s("div",{key:"0e5d6b156201b8667504558232fb62c1847ed550",class:"heading__section-time"},this.shownTime)),s("div",{key:"7c7b6c89de1c53fdc9e868fc3015b670e26b6cce",class:"description__section"},s("slot",{key:"3fae35bf76ef0fa90556e5e8c7f5630c26fc712a"})))}get el(){return r(this)}};h.style=d;export{h as ifx_list_notification};
