import{r,h as t,g as s}from"./index-b1ef3960.js";const n='*{font-family:"Source Sans Pro"}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:"Source Sans Pro";font-weight:600;font-size:1.5rem;line-height:32px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.horizontal{font-size:1.25rem;line-height:28px}',o=class{constructor(e){r(this,e),this.direction=void 0,this.hasDesc=void 0}componentWillLoad(){var e;const i=this.el.closest("ifx-card");if(i){const a=(e=i.shadowRoot.querySelector(".card"))===null||e===void 0?void 0:e.className;a&&a.includes("horizontal")&&(this.direction="horizontal"),i.querySelector("ifx-card-text")&&(this.hasDesc=!0)}}render(){return t("div",{class:`card__headline-wrapper ${this.hasDesc?"withDesc":""}`},t("div",{class:`card-headline ${this.direction}`},t("slot",null)))}get el(){return s(this)}};o.style=n;export{o as ifx_card_headline};