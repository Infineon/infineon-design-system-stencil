"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[1619],{1619:(o,n,t)=>{t.r(n),t.d(n,{ifx_card_headline:()=>s});var e=t(6050);const s=class{constructor(i){(0,e.r)(this,i),this.direction=void 0,this.hasDesc=void 0}componentWillLoad(){var i;const a=this.el.closest("ifx-card");if(a){const d=null===(i=a.shadowRoot.querySelector(".card"))||void 0===i?void 0:i.className;d&&d.includes("horizontal")&&(this.direction="horizontal"),a.querySelector("ifx-card-text")&&(this.hasDesc=!0)}}render(){return(0,e.h)("div",{class:"card__headline-wrapper "+(this.hasDesc?"withDesc":"")},(0,e.h)("div",{class:`card-headline ${this.direction}`},(0,e.h)("slot",null)))}get el(){return(0,e.g)(this)}};s.style='*{font-family:"Source Sans Pro"}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:"Source Sans Pro";font-weight:600;font-size:1.5rem;line-height:32px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.horizontal{font-size:1.25rem;line-height:28px}'}}]);