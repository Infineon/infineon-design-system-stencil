"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[644],{644:function(e,o,r){r.r(o),r.d(o,{ifx_card:function(){return n}});var t=r(5671),i=r(9466),a=r(1091),n=function(){function e(o){(0,t.Z)(this,e),(0,a.r)(this,o),this.noBtns=void 0,this.direction="vertical",this.alignment=void 0,this.noImg=void 0,this.href="",this.target="_self"}return(0,i.Z)(e,[{key:"setImgPosition",value:function(e){this.alignment=e.detail}},{key:"handleComponentAdjustment",value:function(){var e=this.el.querySelector("ifx-card-image"),o=this.el.querySelector("ifx-card-links");e?this.noImg=!1:(this.noImg=!0,console.log("no image")),this.noBtns=!o}},{key:"handleHovering",value:function(){var e=this,o=this.el.shadowRoot.querySelector(".card");o.addEventListener("mouseover",(function(o){e.el.querySelector("ifx-card-headline").isHovered=!0,"IFX-CARD-LINKS"===o.target.nodeName||"IFX-BUTTON"===o.target.nodeName?(e.el.shadowRoot.querySelector(".card").style.borderColor="#ebe9e9",e.el.querySelector("ifx-card-headline").isHovered=!1):e.el.shadowRoot.querySelector(".card").style.borderColor="#0A8276"})),o.addEventListener("mouseout",(function(){e.el.querySelector("ifx-card-headline").isHovered=!1,e.el.shadowRoot.querySelector(".card").style.borderColor="#ebe9e9"}))}},{key:"componentWillLoad",value:function(){this.handleComponentAdjustment()}},{key:"componentDidLoad",value:function(){this.handleHovering()}},{key:"componentWillUpdate",value:function(){this.handleComponentAdjustment()}},{key:"render",value:function(){return(0,a.h)(a.a,null,(0,a.h)("div",{class:"card \n          ".concat(this.noBtns?"noBtns":"","\n          ").concat(this.direction," \n          ").concat(this.alignment)},"horizontal"===this.direction&&(0,a.h)("div",{class:"horizontal"},(0,a.h)("a",{class:"card-img ".concat(this.noImg?"noImage":""),href:this.href},(0,a.h)("slot",{name:"img"})),(0,a.h)("div",{class:"lower__body-wrapper"},(0,a.h)("a",{class:"upper-body",href:this.href},(0,a.h)("slot",null)),(0,a.h)("div",null,(0,a.h)("slot",{name:"buttons"})))),"vertical"===this.direction&&(0,a.h)("div",{class:"vertical"},(0,a.h)("a",{class:"upper__body-wrapper",href:this.href,target:this.target},(0,a.h)("div",{class:"card-img"},(0,a.h)("slot",{name:"img"})),(0,a.h)("div",{class:"upper-body"},(0,a.h)("slot",null))),(0,a.h)("div",{class:"lower__body-wrapper"},(0,a.h)("slot",{name:"buttons"})))))}},{key:"el",get:function(){return(0,a.g)(this)}}]),e}();n.style='*{font-family:"Source Sans 3"}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:22rem;height:auto}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card:hover{cursor:pointer;border-color:#0A8276}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#ebe9e9}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}'}}]);
//# sourceMappingURL=644.ad1fcd4b.chunk.js.map