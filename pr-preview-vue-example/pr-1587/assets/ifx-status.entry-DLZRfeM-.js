import{r as e,h as o}from"./index-Dz5hOlod.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.container{display:flex;min-height:1.25em;align-items:center;padding:0 8px;border-radius:9999px;font-family:var(--ifx-font-family)}.container.no-border{padding:0}.container.border-orange{border:1px solid #E16B25}.container.border-ocean{border:1px solid #0A8276}.container.border-grey{border:1px solid #575352}.container.border-light-grey{border:1px solid #BFBBBB}.container.border-red{border:1px solid #CD002F}.container.border-green{border:1px solid #4CA460}.container.border-berry{border:1px solid #9C216E}.text{margin:0;padding-left:4px;font-style:normal;font-weight:600;font-size:1rem;line-height:1.25rem;display:inline;color:#1D1D1D}.dot{display:inline-block;width:8px;height:8px;border-radius:9999px}.dot.orange{background-color:#E16B25}.dot.ocean{background-color:#0A8276}.dot.grey{background-color:#575352}.dot.light-grey{background-color:#BFBBBB}.dot.red{background-color:#CD002F}.dot.green{background-color:#4CA460}.dot.berry{background-color:#9C216E}',t=a,n=class{constructor(r){e(this,r),this.label=void 0,this.border=!1,this.color="orange"}render(){const r=this.border?`container border-${this.color}`:"container no-border";return o("div",{key:"1bf76c5c3f28e4e5ed0518c95cedaa87e04fa57d","aria-label":"a status indicator","aria-value":this.label,class:r},o("span",{key:"51d00a0770c687b8f28a674148b43352cd575651",class:`dot ${this.color}`}),o("p",{key:"5ccbda0fef7b426d83d1bbd87d5defb00a72a16f",class:"text"},this.label))}};n.style=t;export{n as ifx_status};
