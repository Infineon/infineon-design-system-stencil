import{r as o,h as e,H as d,g as i}from"./index-gqIEd_Hw.js";const c=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#FFFFFF;background-clip:border-box;border:1px solid #EEEDED;border-radius:1px;width:350px;height:auto;font-family:var(--ifx-font-family)}.card:has(.card-href:focus),.card:has(.card-href:hover){outline:none;border-color:#0A8276}.card:has(.card-href:focus) ::slotted(ifx-card-headline),.card:has(.card-href:hover) ::slotted(ifx-card-headline){color:#0A8276}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#EEEDED}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card .card-href:focus{outline:none}',n=c,l=class{constructor(a){o(this,a),this.direction="vertical",this.href="",this.internalHref="",this.target="_self"}setImgPosition(a){this.alignment=a.detail}handleComponentAdjustment(){const a=this.el.querySelector("ifx-card-image"),r=this.el.querySelector("ifx-card-links");a?this.noImg=!1:this.noImg=!0,r?this.noBtns=!1:this.noBtns=!0,this.href.trim()===""?this.internalHref=void 0:this.internalHref=this.href}handleClassList(a,r,t){a.classList[r](t)}componentWillLoad(){this.handleComponentAdjustment()}componentWillUpdate(){this.handleComponentAdjustment()}render(){return e(d,{key:"01e7592f9bf887e80837db93ab637fa77fb1ce1f"},e("div",{key:"8b784dff18da8f47e57a293554dc18af013293f4","aria-label":this.AriaLabel,class:`card 
          ${this.noBtns?"noBtns":""}
          ${this.direction} 
          ${this.alignment}`,role:"region"},this.direction==="horizontal"&&e("div",{key:"69e234c4c3302dd8bf6b5133016e3c0642cf0034",class:"horizontal"},e("a",{key:"c4e4288637327e7e0f68b68a3ee750e3567c327d",class:`card-img ${this.noImg?"noImage":""} ${this.internalHref?"card-href":""}`,href:this.internalHref},e("slot",{key:"d119095e1e71d459b160744276a2987b9596d076",name:"img"})),e("div",{key:"53b3816544b90daec193ced7b084aa2dfa12f7c6",class:"lower__body-wrapper"},e("a",{key:"61477913ea24a2bdc3765771bf60af809a5643f5",class:`upper-body ${this.internalHref?"card-href":""}`,href:this.internalHref},e("slot",{key:"aa49da1c6b7cefefb5d9f36f72f3166e09c2e494"})),e("div",{key:"da9e12e7e215397ed699f3158676235d3ec1e05c"},e("slot",{key:"dd43320f7bc1d0dce6f3c6a3bbf4de31c60d9f77",name:"buttons"})))),this.direction==="vertical"&&e("div",{key:"81a7e3a57402983a7544cb80c37609ca1189b8cd",class:"vertical"},e("a",{key:"3835c2cbb6de0e6b518f72d7752033e71e62e5f6",class:`upper__body-wrapper ${this.internalHref?"card-href":""}`,href:this.internalHref,target:this.target},e("div",{key:"57f555a369c10897d75058780993a45d0dc4b1da",class:`card-img ${this.noImg?"noImage":""}`},e("slot",{key:"fc23cd2f3575e0c8bf9dc4e50581527175d3dfa5",name:"img"})),e("div",{key:"abc7faafe9cb34acba6cd6db1daca948438511e9",class:"upper-body"},e("slot",{key:"9f8ed0bfa8ac124368b0fc0af24037ab9549d26b"}))),e("div",{key:"f13ded514016af3d5975224049db6c84c32e7c03",class:"lower__body-wrapper"},e("slot",{key:"3a6875e3f2daa209ad56bc5417facd8835af3ea0",name:"buttons"})))))}get el(){return i(this)}};l.style=n;export{l as ifx_card};
