import{r as i,h as r,H as a,g as n}from"./index-77bc3b6a.js";const d=":root{--ifx-font-family:tokens.$ifxFontFamilyBody}*{font-family:var(--ifx-font-family), sans-serif}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#FFFFFF;background-clip:border-box;border:1px solid #EEEDED;border-radius:1px;width:350px;height:auto}.card.linkHovered{border-color:#EEEDED}.card.cardHovered{border-color:#0A8276}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#EEEDED}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}",l=class{constructor(e){i(this,e),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.internalHref="",this.target="_self"}setImgPosition(e){this.alignment=e.detail}handleComponentAdjustment(){const e=this.el.querySelector("ifx-card-image"),o=this.el.querySelector("ifx-card-links");e?this.noImg=!1:this.noImg=!0,o?this.noBtns=!1:this.noBtns=!0,this.href.trim()===""?this.internalHref=void 0:this.internalHref=this.href}handleClassList(e,o,t){e.classList[o](t)}handleHovering(){const e=this.el.shadowRoot.querySelector(".card");let o=this.el.querySelector("ifx-card-headline");this.href&&(e.addEventListener("mouseover",t=>{t.target.nodeName==="IFX-CARD-LINKS"||t.target.nodeName==="IFX-BUTTON"?this.handleClassList(e,"add","linkHovered"):(this.handleClassList(e,"add","cardHovered"),o&&(o.isHovered=!0))}),e.addEventListener("mouseout",()=>{o&&(o.isHovered=!1),this.handleClassList(e,"remove","cardHovered"),this.handleClassList(e,"add","linkHovered")}))}componentWillLoad(){this.handleComponentAdjustment()}componentDidLoad(){this.handleHovering(),this.addEventListenersToHandleCustomFocusState()}addEventListenersToHandleCustomFocusState(){const e=this.el.shadowRoot;if(!e){console.error("element not found");return}const o=e.querySelector(".upper__body-wrapper");if(!o){console.error("upper body wrapper not found");return}e.tabIndex=-1,o.tabIndex=-1}componentWillUpdate(){this.handleComponentAdjustment()}render(){return r(a,null,r("div",{"aria-labelledby":"label",class:`card 
          ${this.noBtns?"noBtns":""}
          ${this.direction} 
          ${this.alignment}`},this.direction==="horizontal"&&r("div",{class:"horizontal"},r("a",{class:`card-img ${this.noImg?"noImage":""}`,href:this.internalHref},r("slot",{name:"img"})),r("div",{class:"lower__body-wrapper"},r("a",{class:"upper-body",href:this.internalHref},r("slot",null)),r("div",null,r("slot",{name:"buttons"})))),this.direction==="vertical"&&r("div",{class:"vertical"},r("a",{class:"upper__body-wrapper",href:this.internalHref,target:this.target},r("div",{class:`card-img ${this.noImg?"noImage":""}`},r("slot",{name:"img"})),r("div",{class:"upper-body"},r("slot",null))),r("div",{class:"lower__body-wrapper"},r("slot",{name:"buttons"})))))}get el(){return n(this)}};l.style=d;export{l as ifx_card};
