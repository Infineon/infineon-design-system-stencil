import{r,h as l}from"./index-NQf42ZqF.js";import{c as o}from"./index-ad3469bf-YraEYkvK.js";import"./_commonjsHelpers-e9b9b14e-d4b6oMTu.js";const s=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.link{display:inline-flex;align-items:center;font-weight:400;font-size:1rem;text-decoration:none;color:#0A8276;gap:8px;line-height:1.6;font-family:var(--ifx-font-family)}.link:focus{outline-width:2px;outline-style:solid;outline-color:#0A8276;outline-offset:2px;border-radius:3px}.link.bold{font-weight:600}.link.bold:hover{text-decoration:underline}.link.bold:active{color:#08665C;font-style:normal;font-weight:600;text-decoration:underline}.link.underlined{text-decoration:underline;text-decoration-color:#0A8276;color:#1D1D1D}.link.underlined:hover{color:#0A8276}.link.underlined:active{color:#0A8276}.link.title{text-decoration:none;font-weight:600;color:#1D1D1D}.link.title:hover{color:#0A8276}.link.title:active{color:#08665C}.link.menu{font-weight:400;font-style:normal;line-height:26px;color:#1D1D1D}.link.menu:hover{color:#0A8276}.link.menu:active{color:#08665C}.link.small{font-size:0.875rem}.link.medium{font-size:1rem}.link.large{font-size:1.125rem}.link.extraLarge{font-size:1.25rem}.link.underline{text-decoration:underline}',a=class{constructor(e){r(this,e),this.href=void 0,this.target="_self",this.size=void 0,this.variant="bold"}render(){return l("a",{"aria-label":"a navigation link button",href:this.href,target:this.target,class:this.linkClassNames()},l("slot",null))}getSizeClass(){const e=this.size==="s"?"small":null,i=this.size==="m"?"medium":null,t=this.size==="l"?"large":null,n=this.size==="xl"?"extraLarge":null;return e||i||t||(n&&this.variant==="underlined"?"large":n&&this.variant!=="underlined"?n:"")}getVariantClass(){const e=this.variant==="bold"?"bold":null,i=this.variant==="title"?"title":null,t=this.variant==="underlined"?"underlined":null,n=this.variant==="menu"?"menu":null;return e||i||t||n||e}linkClassNames(){return o("link","primary",this.getVariantClass(),this.getSizeClass())}};a.style=s;export{a as ifx_link};
