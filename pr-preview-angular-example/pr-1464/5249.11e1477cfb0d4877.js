"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[5249],{5249:(l,d,t)=>{t.r(d),t.d(d,{ifx_card:()=>s});var e=t(9046);const s=(()=>{let i=class{constructor(a){(0,e.r)(this,a),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.internalHref="",this.target="_self"}setImgPosition(a){this.alignment=a.detail}handleComponentAdjustment(){const a=this.el.querySelector("ifx-card-image"),r=this.el.querySelector("ifx-card-links");this.noImg=!a,this.noBtns=!r,this.internalHref=""===this.href.trim()?void 0:this.href}handleClassList(a,r,o){a.classList[r](o)}handleHovering(){const a=this.el.shadowRoot.querySelector(".card");let r=this.el.querySelector("ifx-card-headline");this.href&&(a.addEventListener("mouseover",o=>{"IFX-CARD-LINKS"===o.target.nodeName||"IFX-BUTTON"===o.target.nodeName?this.handleClassList(a,"add","linkHovered"):(this.handleClassList(a,"add","cardHovered"),r&&(r.isHovered=!0))}),a.addEventListener("mouseout",()=>{r&&(r.isHovered=!1),this.handleClassList(a,"remove","cardHovered"),this.handleClassList(a,"add","linkHovered")}))}componentWillLoad(){this.handleComponentAdjustment()}componentDidLoad(){this.handleHovering(),this.addEventListenersToHandleCustomFocusState()}addEventListenersToHandleCustomFocusState(){const a=this.el.shadowRoot;if(!a)return void console.error("element not found");const r=a.querySelector(".upper__body-wrapper");r?(a.tabIndex=-1,r.tabIndex=-1):console.error("upper body wrapper not found")}componentWillUpdate(){this.handleComponentAdjustment()}render(){return(0,e.h)(e.a,{key:"d9441bd7156b0e3ae661a8b55595374ee771bdca"},(0,e.h)("div",{key:"db17a99b9be8e03bf93ae8e79aa61687d2e4ac11","aria-labelledby":"label",class:`card \n          ${this.noBtns?"noBtns":""}\n          ${this.direction} \n          ${this.alignment}`},"horizontal"===this.direction&&(0,e.h)("div",{key:"13478dbf4ae81876d1b51c96a908581a3c692284",class:"horizontal"},(0,e.h)("a",{key:"72f91237b85763b9cedc496fe768b63a701e55ab",class:"card-img "+(this.noImg?"noImage":""),href:this.internalHref},(0,e.h)("slot",{key:"e0c406089a6d2e5a1957990667d60a2066789bad",name:"img"})),(0,e.h)("div",{key:"b2d16f6c59dedab1f9a7e642622dcd76050976b2",class:"lower__body-wrapper"},(0,e.h)("a",{key:"7b13d04657e1b86c79d059a67528af8bc1427dac",class:"upper-body",href:this.internalHref},(0,e.h)("slot",{key:"08cd2d707dc90593e98e80a8e00711f8ca1067c9"})),(0,e.h)("div",{key:"972fe8833723c98426e69b0e887c97f0eeea9800"},(0,e.h)("slot",{key:"bab8acead1c90ac452620d1ada20d13a4e3007aa",name:"buttons"})))),"vertical"===this.direction&&(0,e.h)("div",{key:"2ae5fe8d4d00d3c2e2669e41807e9f60f07fd043",class:"vertical"},(0,e.h)("a",{key:"4fbb4ac82e49f53212ceaeb5979bc76ee21b2d44",class:"upper__body-wrapper",href:this.internalHref,target:this.target},(0,e.h)("div",{key:"a1beafa1a15257ee2ebda87907336d1f9122cea4",class:"card-img "+(this.noImg?"noImage":"")},(0,e.h)("slot",{key:"cffceae22edd13b96118a3dc482efe2580420e21",name:"img"})),(0,e.h)("div",{key:"b17558882074442089a40e915ee30db922fa76e5",class:"upper-body"},(0,e.h)("slot",{key:"09d7a3295f85de3aa673d6cc56ccd13d59162132"}))),(0,e.h)("div",{key:"bd9e259c5675780c697e360039eca3b3a33f0a72",class:"lower__body-wrapper"},(0,e.h)("slot",{key:"478ff023eeceb5a57c7414074af083a5bd548273",name:"buttons"})))))}get el(){return(0,e.g)(this)}};return i.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#FFFFFF;background-clip:border-box;border:1px solid #EEEDED;border-radius:1px;width:350px;height:auto;font-family:var(--ifx-font-family)}.card.linkHovered{border-color:#EEEDED}.card.cardHovered{border-color:#0A8276}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#EEEDED}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}',i})()}}]);