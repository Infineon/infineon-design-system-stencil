import{r as e,h as o}from"./index-77bc3b6a.js";const n=":root{--ifx-font-family:tokens.$ifxFontFamilyBody}*{font-family:var(--ifx-font-family), sans-serif}:host{display:inline-block}.container{display:flex;min-height:1.25em;align-items:center;padding:0 8px;border-radius:9999px}.container.no-border{padding:0}.container.border-orange{border:1px solid #E16B25}.container.border-ocean{border:1px solid #0A8276}.container.border-grey{border:1px solid #575352}.container.border-light-grey{border:1px solid #BFBBBB}.container.border-red{border:1px solid #CD002F}.container.border-green{border:1px solid #4CA460}.container.border-berry{border:1px solid #9C216E}.text{margin:0;padding-left:4px;font-style:normal;font-weight:600;font-size:1rem;line-height:1.25rem;display:inline;color:#1D1D1D}.dot{display:inline-block;width:8px;height:8px;border-radius:9999px}.dot.orange{background-color:#E16B25}.dot.ocean{background-color:#0A8276}.dot.grey{background-color:#575352}.dot.light-grey{background-color:#BFBBBB}.dot.red{background-color:#CD002F}.dot.green{background-color:#4CA460}.dot.berry{background-color:#9C216E}",t=class{constructor(r){e(this,r),this.label=void 0,this.border=!1,this.color="orange"}render(){const r=this.border?`container border-${this.color}`:"container no-border";return o("div",{"aria-label":"a status indicator","aria-value":this.label,class:r},o("span",{class:`dot ${this.color}`}),o("p",{class:"text"},this.label))}};t.style=n;export{t as ifx_status};
