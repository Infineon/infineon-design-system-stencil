import{r,h as l}from"./index-DeRQ76ld.js";import{c as s}from"./index-72ac5051-B1g_EHyb.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.link{display:inline-flex;align-items:center;font-weight:400;font-size:1rem;text-decoration:none;color:#0A8276;gap:8px;line-height:1.6;font-family:var(--ifx-font-family)}.link:hover{cursor:pointer}.link:focus{outline-width:2px;outline-style:solid;outline-color:#0A8276;outline-offset:4px;border-radius:3px}.link.bold{font-weight:600}.link.bold:hover{text-decoration:underline}.link.bold:active{color:#08665C;font-style:normal;font-weight:600;text-decoration:underline}.link.underlined{text-decoration:underline;text-decoration-color:#0A8276;color:#1D1D1D;text-underline-offset:8px}.link.underlined:hover{color:#0A8276}.link.underlined:active{color:#0A8276}.link.underlined:disabled,.link.underlined.disabled{text-decoration-color:#BFBBBB}.link.title{text-decoration:none;font-weight:600;color:#1D1D1D}.link.title:hover{color:#0A8276}.link.title:active{color:#08665C}.link.menu{font-weight:400;font-style:normal;line-height:26px;color:#1D1D1D}.link.menu:hover{color:#0A8276}.link.menu:active{color:#08665C}.link.small{font-size:0.875rem}.link.medium{font-size:1rem}.link.large{font-size:1.125rem}.link.extraLarge{font-size:1.25rem}.link.underline{text-decoration:underline}.link:disabled,.link.disabled{color:#BFBBBB;cursor:default;pointer-events:none}',o=a,d=class{constructor(e){r(this,e),this.href=void 0,this.target="_self",this.variant="bold",this.disabled=!1,this.internalHref="",this.internalTarget="",this.internalVariant=""}setInternalStates(){this.href?this.internalHref=this.href.trim():this.internalHref=void 0,this.internalTarget=this.target.trim(),this.internalVariant=this.variant.trim().toLowerCase()}componentWillRender(){this.setInternalStates()}render(){return l("a",{key:"04893aa3a068872a42cff24d577c8ddd332d6230","aria-label":"a navigation link button",href:this.internalHref,download:this.download,target:this.internalTarget,class:this.linkClassNames()},l("slot",{key:"7dfbe5e88b88cf912da4c40eed427694b291928c"}))}getSizeClass(){const e=this.size==="s"?"small":null,t=this.size==="m"?"medium":null,i=this.size==="l"?"large":null,n=this.size==="xl"?"extraLarge":null;return e||t||i||(n&&this.internalVariant==="underlined"?"large":n&&this.internalVariant!=="underlined"?n:"")}getVariantClass(){const e=this.internalVariant==="bold"?"bold":null,t=this.internalVariant==="title"?"title":null,i=this.internalVariant==="underlined"?"underlined":null,n=this.internalVariant==="menu"?"menu":null;return e||t||i||n||e}linkClassNames(){return s("link","primary",this.getVariantClass(),this.getSizeClass(),this.disabled?"disabled":"")}};d.style=o;export{d as ifx_link};
