import{r as o,h as r,H as d,g as i}from"./index-BX0L_FlN.js";import"@stencil/react-output-target/runtime";const n=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#FFFFFF;background-clip:border-box;border:1px solid #EEEDED;border-radius:1px;width:350px;height:auto;font-family:var(--ifx-font-family)}.card.linkHovered{border-color:#EEEDED}.card.cardHovered{border-color:#0A8276}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#EEEDED}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}',s=n,l=class{constructor(e){o(this,e),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.internalHref="",this.target="_self"}setImgPosition(e){this.alignment=e.detail}handleComponentAdjustment(){const e=this.el.querySelector("ifx-card-image"),a=this.el.querySelector("ifx-card-links");e?this.noImg=!1:this.noImg=!0,a?this.noBtns=!1:this.noBtns=!0,this.href.trim()===""?this.internalHref=void 0:this.internalHref=this.href}handleClassList(e,a,t){e.classList[a](t)}handleHovering(){const e=this.el.shadowRoot.querySelector(".card");let a=this.el.querySelector("ifx-card-headline");this.href&&(e.addEventListener("mouseover",t=>{t.target.nodeName==="IFX-CARD-LINKS"||t.target.nodeName==="IFX-BUTTON"?this.handleClassList(e,"add","linkHovered"):(this.handleClassList(e,"add","cardHovered"),a&&(a.isHovered=!0))}),e.addEventListener("mouseout",()=>{a&&(a.isHovered=!1),this.handleClassList(e,"remove","cardHovered"),this.handleClassList(e,"add","linkHovered")}))}componentWillLoad(){this.handleComponentAdjustment()}componentDidLoad(){this.handleHovering(),this.addEventListenersToHandleCustomFocusState()}addEventListenersToHandleCustomFocusState(){const e=this.el.shadowRoot;if(!e){console.error("element not found");return}const a=e.querySelector(".upper__body-wrapper");a&&(e.tabIndex=-1,a.tabIndex=-1)}componentWillUpdate(){this.handleComponentAdjustment()}render(){return r(d,{key:"61d210f9d8065470d7b4a6b0f2f6f4f30559805c"},r("div",{key:"09012ed25eb98475f6616fdfd25fecb9f3f4fff5","aria-labelledby":"label",class:`card 
          ${this.noBtns?"noBtns":""}
          ${this.direction} 
          ${this.alignment}`},this.direction==="horizontal"&&r("div",{key:"e929534139945f3cc04a834113ccb0f669f18db5",class:"horizontal"},r("a",{key:"19ceba44fe9de5bce320cc7d375080022657e7c0",class:`card-img ${this.noImg?"noImage":""}`,href:this.internalHref},r("slot",{key:"ca6b2c4277425e2ddf98b79b00c281e94f44cf29",name:"img"})),r("div",{key:"e041e12efed6748f472d8d4294843fcc48852825",class:"lower__body-wrapper"},r("a",{key:"17bb4474ef6252c14eb1eafa6469ca62d8039f45",class:"upper-body",href:this.internalHref},r("slot",{key:"ab481c87698742aa613002a9643ad81f27ff078b"})),r("div",{key:"93634818dd1f5bc250b7ac0992128f18fe73701e"},r("slot",{key:"8088e361c8488bede942f4ceeb0b24342c96b45e",name:"buttons"})))),this.direction==="vertical"&&r("div",{key:"66eae550f16b336db70a6099875b7b823ab1137d",class:"vertical"},r("a",{key:"6688d7e8cdca141f899fcabf5dc140a2144ad52f",class:"upper__body-wrapper",href:this.internalHref,target:this.target},r("div",{key:"22b4a6e22960b5ad6d571b0d70d509370e44aeb5",class:`card-img ${this.noImg?"noImage":""}`},r("slot",{key:"77633b766878858d50ea6905d8f8fcf7f7378317",name:"img"})),r("div",{key:"f9dcf6909d12f3ac2d0af8060c1b9db0c99fbcbf",class:"upper-body"},r("slot",{key:"d8ff266900a0fdfea58aadbe318377d8eef422e8"}))),r("div",{key:"28db9472bd8995796a76b959644dae244d2732e9",class:"lower__body-wrapper"},r("slot",{key:"5c0a822e85c1f66571d4a53533686d12c036f114",name:"buttons"})))))}get el(){return i(this)}};l.style=s;export{l as ifx_card};
