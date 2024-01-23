import{r as i,h as t,H as l,g as e}from"./index-27f1238c.js";const n=":host{display:inline-flex}.list-group-container{display:inline-flex;flex-direction:column;gap:3px}",o=class{constructor(s){i(this,s),this.flush=!1,this.bulletpoint=!1,this.notification=!1}render(){return t(l,null,t("div",{class:`list-group-container 
        ${this.flush?"flush":""} 
        ${this.bulletpoint?"bulletpoint":""}`},t("slot",{name:"list-item"}),t("slot",{name:"list-notification"})))}get el(){return e(this)}};o.style=n;export{o as ifx_list_group};
