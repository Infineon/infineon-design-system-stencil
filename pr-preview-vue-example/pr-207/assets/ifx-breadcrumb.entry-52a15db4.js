import{r as s,h as e}from"./index-07208e78.js";const t='.breadcrumb{list-style:none;padding:0;margin:0;display:flex;align-items:center;font-family:"Source Sans Pro";font-size:0.8125rem}.breadcrumb-item>a{color:#1d1d1d}.separator{color:#dcd5d7;margin:0 16px}',c=class{constructor(r){s(this,r),this.breadcrumbs=void 0}render(){return e("nav",{"aria-label":"breadcrumb"},e("ol",{class:"breadcrumb"},this.breadcrumbs&&this.breadcrumbs.map((r,a)=>e("li",{class:"breadcrumb-item","aria-current":a===this.breadcrumbs.length-1?"page":void 0},a!==this.breadcrumbs.length-1?e("a",{href:r.url},r.text):r.text,a!==this.breadcrumbs.length-1&&e("span",{class:"separator"},"/")))))}};c.style=t;export{c as ifx_breadcrumb};
