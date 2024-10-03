import{r as o,h as r,H as d,g as i}from"./index-Bz-wAaeD.js";const n=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#FFFFFF;background-clip:border-box;border:1px solid #EEEDED;border-radius:1px;width:350px;height:auto;font-family:var(--ifx-font-family)}.card.linkHovered{border-color:#EEEDED}.card.cardHovered{border-color:#0A8276}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#EEEDED}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}',s=n,l=class{constructor(e){o(this,e),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.internalHref="",this.target="_self"}setImgPosition(e){this.alignment=e.detail}handleComponentAdjustment(){const e=this.el.querySelector("ifx-card-image"),a=this.el.querySelector("ifx-card-links");e?this.noImg=!1:this.noImg=!0,a?this.noBtns=!1:this.noBtns=!0,this.href.trim()===""?this.internalHref=void 0:this.internalHref=this.href}handleClassList(e,a,t){e.classList[a](t)}handleHovering(){const e=this.el.shadowRoot.querySelector(".card");let a=this.el.querySelector("ifx-card-headline");this.href&&(e.addEventListener("mouseover",t=>{t.target.nodeName==="IFX-CARD-LINKS"||t.target.nodeName==="IFX-BUTTON"?this.handleClassList(e,"add","linkHovered"):(this.handleClassList(e,"add","cardHovered"),a&&(a.isHovered=!0))}),e.addEventListener("mouseout",()=>{a&&(a.isHovered=!1),this.handleClassList(e,"remove","cardHovered"),this.handleClassList(e,"add","linkHovered")}))}componentWillLoad(){this.handleComponentAdjustment()}componentDidLoad(){this.handleHovering(),this.addEventListenersToHandleCustomFocusState()}addEventListenersToHandleCustomFocusState(){const e=this.el.shadowRoot;if(!e){console.error("element not found");return}const a=e.querySelector(".upper__body-wrapper");a&&(e.tabIndex=-1,a.tabIndex=-1)}componentWillUpdate(){this.handleComponentAdjustment()}render(){return r(d,{key:"16667ce6681b7c5685c646f4354e6d4d9b3f10d0"},r("div",{key:"0cdf57e110b0dd9a21a5d5837cd6bc7f61e4c031","aria-labelledby":"label",class:`card 
          ${this.noBtns?"noBtns":""}
          ${this.direction} 
          ${this.alignment}`},this.direction==="horizontal"&&r("div",{key:"6332b590315410306e9b214a01d38d97faee66ce",class:"horizontal"},r("a",{key:"749e3fd03fbd3d702132869a6405fc85e7af1434",class:`card-img ${this.noImg?"noImage":""}`,href:this.internalHref},r("slot",{key:"a144aab568932802bb340566759bd511584f1750",name:"img"})),r("div",{key:"c47fd4557d31a3303dfc9e51c0387476bfe6c3c8",class:"lower__body-wrapper"},r("a",{key:"0bfe3518880f3134a8edc3bd95f2c3b0176fc865",class:"upper-body",href:this.internalHref},r("slot",{key:"0bb0e764f344a9a23038f8f1d8f9e0cc785e181d"})),r("div",{key:"0bd6386f359e58cad3796664ab8daa992069eb42"},r("slot",{key:"c92753946de517d3b0724946843eeaca629e830b",name:"buttons"})))),this.direction==="vertical"&&r("div",{key:"60ea08045ff480934de667ce5b26d872c2a0a401",class:"vertical"},r("a",{key:"8a1b434931a95e577fbb242dea9f5dd78e2b14cc",class:"upper__body-wrapper",href:this.internalHref,target:this.target},r("div",{key:"a66cb23cfacdf080ffbd98440489a9bcba0c2299",class:`card-img ${this.noImg?"noImage":""}`},r("slot",{key:"caabc9d77aa967290066d3294f4b4aec4ee017dd",name:"img"})),r("div",{key:"71c81866563d79569600a7408631dd4d9c3efe2f",class:"upper-body"},r("slot",{key:"69f99585e7dc7443c6831ef6f3fc5b188d380141"}))),r("div",{key:"15fe4609026a0d344697b3d0418d92a476a19dfc",class:"lower__body-wrapper"},r("slot",{key:"c318bb85f425cdea2d51affc84bf248aaf1b93ca",name:"buttons"})))))}get el(){return i(this)}};l.style=s;export{l as ifx_card};
