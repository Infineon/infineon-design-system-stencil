import{r,h as l}from"./index-0ca670eb.js";import{c as i}from"./index-3c58b0c1-03c37d78.js";import"./_commonjsHelpers-e9b9b14e-cda1f04d.js";const s='@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:400;src:url("./fonts/source-sans-3/SourceSans3-Regular.ttf.woff2") format("woff2"), url("./fonts/source-sans-3/SourceSans3-Regular.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:normal;font-weight:600;src:url("./fonts/source-sans-3/SourceSans3-Semibold.ttf.woff2") format("woff2"), url("./fonts/source-sans-3/SourceSans3-Semibold.ttf.woff") format("woff")}@font-face{font-family:"Source Sans 3";font-style:italic;font-weight:400;src:url("./fonts/source-sans-3/SourceSans3-It.ttf.woff2") format("woff2"), url("./fonts/source-sans-3/SourceSans3-It.ttf.woff") format("woff")}*{font-family:"Source Sans 3"}.link{display:inline-flex;align-items:center;font-weight:400;font-size:1rem;text-decoration:none;color:#0A8276;gap:8px;line-height:1.6}.link:focus{outline-width:2px;outline-style:solid;outline-color:#0A8276;outline-offset:2px;border-radius:3px}.link.bold{font-weight:600}.link.bold:hover{text-decoration:underline}.link.bold:active{color:#08665C;font-style:normal;font-weight:600;text-decoration:underline}.link.underlined{text-decoration:underline;text-decoration-color:#0A8276;color:#1D1D1D}.link.underlined:hover{color:#0A8276}.link.underlined:active{color:#0A8276}.link.title{text-decoration:none;font-weight:600;color:#1D1D1D}.link.title:hover{color:#0A8276}.link.title:active{color:#08665C}.link.menu{font-weight:400;font-style:normal;line-height:26px;color:#1D1D1D}.link.menu:hover{color:#0A8276}.link.menu:active{color:#08665C}.link.small{font-size:0.875rem}.link.medium{font-size:1rem}.link.large{font-size:1.125rem}.link.extraLarge{font-size:1.25rem}.link.underline{text-decoration:underline}',a=class{constructor(e){r(this,e),this.href=void 0,this.target="_self",this.size=void 0,this.variant="bold"}render(){return l("a",{href:this.href,target:this.target,class:this.linkClassNames()},l("slot",null))}getSizeClass(){const e=this.size==="s"?"small":null,n=this.size==="m"?"medium":null,o=this.size==="l"?"large":null,t=this.size==="xl"?"extraLarge":null;return e||n||o||(t&&this.variant==="underlined"?"large":t&&this.variant!=="underlined"?t:"")}getVariantClass(){const e=this.variant==="bold"?"bold":null,n=this.variant==="title"?"title":null,o=this.variant==="underlined"?"underlined":null,t=this.variant==="menu"?"menu":null;return e||n||o||t||e}linkClassNames(){return i("link","primary",this.getVariantClass(),this.getSizeClass())}};a.style=s;export{a as ifx_link};