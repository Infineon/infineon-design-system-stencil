import{r,h as l}from"./index-CSAMQl3q.js";import{c as s}from"./index-72ac5051-B1g_EHyb.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.link{display:inline-flex;align-items:center;font-weight:400;font-size:1rem;text-decoration:none;color:#0A8276;gap:8px;line-height:1.6;font-family:var(--ifx-font-family)}.link:focus{outline-width:2px;outline-style:solid;outline-color:#0A8276;outline-offset:4px;border-radius:3px}.link.bold{font-weight:600}.link.bold:hover{text-decoration:underline}.link.bold:active{color:#08665C;font-style:normal;font-weight:600;text-decoration:underline}.link.underlined{text-decoration:underline;text-decoration-color:#0A8276;color:#1D1D1D;text-underline-offset:8px}.link.underlined:hover{color:#0A8276}.link.underlined:active{color:#0A8276}.link.underlined:disabled,.link.underlined.disabled{text-decoration-color:#BFBBBB}.link.title{text-decoration:none;font-weight:600;color:#1D1D1D}.link.title:hover{color:#0A8276}.link.title:active{color:#08665C}.link.menu{font-weight:400;font-style:normal;line-height:26px;color:#1D1D1D}.link.menu:hover{color:#0A8276}.link.menu:active{color:#08665C}.link.small{font-size:0.875rem}.link.medium{font-size:1rem}.link.large{font-size:1.125rem}.link.extraLarge{font-size:1.25rem}.link.underline{text-decoration:underline}.link:disabled,.link.disabled{color:#BFBBBB;cursor:default;pointer-events:none}',o=a,d=class{constructor(e){r(this,e),this.href="#",this.target="_self",this.variant="bold",this.size=void 0,this.disabled=!1,this.internalHref="",this.internalTarget="",this.internalVariant=""}setInternalStates(){this.internalHref=this.href.trim(),this.internalHref===""&&(this.internalHref="#"),this.internalTarget=this.target.trim(),this.internalVariant=this.variant.trim().toLowerCase()}componentWillRender(){this.setInternalStates()}render(){return l("a",{key:"f2efb6b3f965a65958a4964bd57b22cfe93f33c4","aria-label":"a navigation link button",href:this.internalHref,target:this.internalTarget,class:this.linkClassNames()},l("slot",{key:"2cf120c2ff6b0ddfb832615bb10267605c95f601"}))}getSizeClass(){const e=this.size==="s"?"small":null,n=this.size==="m"?"medium":null,i=this.size==="l"?"large":null,t=this.size==="xl"?"extraLarge":null;return e||n||i||(t&&this.internalVariant==="underlined"?"large":t&&this.internalVariant!=="underlined"?t:"")}getVariantClass(){const e=this.internalVariant==="bold"?"bold":null,n=this.internalVariant==="title"?"title":null,i=this.internalVariant==="underlined"?"underlined":null,t=this.internalVariant==="menu"?"menu":null;return e||n||i||t||e}linkClassNames(){return s("link","primary",this.getVariantClass(),this.getSizeClass(),this.disabled?"disabled":"")}};d.style=o;export{d as ifx_link};
