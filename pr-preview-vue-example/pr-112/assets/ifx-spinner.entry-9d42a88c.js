import{r as e,h as r}from"./index-be453750.js";import{c as i}from"./index-41d07358-1dc79557.js";import"./_commonjsHelpers-9943807e-0b018993.js";const t=":host{display:inline-block}.spinner{position:relative;width:40px;height:40px}.spinner.s{width:24px;height:24px}.border{box-sizing:border-box;position:absolute;width:100%;height:100%;border:4px solid transparent;border-top-color:#0A8276;border-left-color:#0A8276;border-right-color:#0A8276;border-top-left-radius:1px;border-top-right-radius:1px;border-radius:50%;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",o=class{constructor(s){e(this,s),this.size=void 0}render(){return r("div",{class:this.getClassNames()},r("div",{class:"border"}))}getSizeClass(){return`${this.size}`=="s"?"s":""}getClassNames(){return i("spinner",this.size&&`spinner ${this.getSizeClass()}`)}};o.style=t;export{o as ifx_spinner};