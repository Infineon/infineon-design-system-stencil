"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[7181],{7181:(l,i,t)=>{t.r(i),t.d(i,{ifx_card:()=>a});var e=t(4881);const a=class{constructor(o){(0,e.r)(this,o),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.target="_self"}setImgPosition(o){this.alignment=o.detail}handleComponentAdjustment(){const o=this.el.querySelector("ifx-card-image"),r=this.el.querySelector("ifx-card-links");o?this.noImg=!1:(this.noImg=!0,console.log("no image")),this.noBtns=!r}handleHovering(){const o=this.el.shadowRoot.querySelector(".card");o.addEventListener("mouseover",r=>{this.el.querySelector("ifx-card-headline").isHovered=!0,"IFX-CARD-LINKS"===r.target.nodeName||"IFX-BUTTON"===r.target.nodeName?(this.el.shadowRoot.querySelector(".card").style.borderColor="#ebe9e9",this.el.querySelector("ifx-card-headline").isHovered=!1):this.el.shadowRoot.querySelector(".card").style.borderColor="#0A8276"}),o.addEventListener("mouseout",()=>{this.el.querySelector("ifx-card-headline").isHovered=!1,this.el.shadowRoot.querySelector(".card").style.borderColor="#ebe9e9"})}componentWillLoad(){this.handleComponentAdjustment()}componentDidLoad(){this.handleHovering()}componentWillUpdate(){this.handleComponentAdjustment()}render(){return(0,e.h)(e.a,null,(0,e.h)("div",{class:`card \n          ${this.noBtns?"noBtns":""}\n          ${this.direction} \n          ${this.alignment}`},"horizontal"===this.direction&&(0,e.h)("div",{class:"horizontal"},(0,e.h)("a",{class:"card-img "+(this.noImg?"noImage":""),href:this.href},(0,e.h)("slot",{name:"img"})),(0,e.h)("div",{class:"lower__body-wrapper"},(0,e.h)("a",{class:"upper-body",href:this.href},(0,e.h)("slot",null)),(0,e.h)("div",null,(0,e.h)("slot",{name:"buttons"})))),"vertical"===this.direction&&(0,e.h)("div",{class:"vertical"},(0,e.h)("a",{class:"upper__body-wrapper",href:this.href,target:this.target},(0,e.h)("div",{class:"card-img"},(0,e.h)("slot",{name:"img"})),(0,e.h)("div",{class:"upper-body"},(0,e.h)("slot",null))),(0,e.h)("div",{class:"lower__body-wrapper"},(0,e.h)("slot",{name:"buttons"})))))}get el(){return(0,e.g)(this)}};a.style='*{font-family:"Source Sans Pro"}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:22rem;height:auto}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card:hover{cursor:pointer;border-color:#0A8276}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1d1d1d;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1d1d1d}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#ebe9e9}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}'}}]);