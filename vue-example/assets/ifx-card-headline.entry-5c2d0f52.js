import{r as s,h as t,g as r}from"./index-77bc3b6a.js";const a=':root{--ifx-font-family:tokens.$ifxFontFamilyBody}*{font-family:var(--ifx-font-family), sans-serif}:host{pointer-events:none}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:"Source Sans Pro";font-weight:600;font-size:1.5rem;line-height:2rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.isHovered{color:#0A8276}.card-headline.horizontal{font-size:1.25rem;line-height:28px}',n=class{constructor(e){s(this,e),this.direction=void 0,this.hasDesc=void 0,this.isHovered=!1}componentWillLoad(){var e;const i=this.el.closest("ifx-card");if(i){const o=(e=i.shadowRoot.querySelector(".card"))===null||e===void 0?void 0:e.className;o&&o.includes("horizontal")&&(this.direction="horizontal"),i.querySelector("ifx-card-text")&&(this.hasDesc=!0)}}render(){return t("div",{class:`card__headline-wrapper ${this.hasDesc?"withDesc":""}`},t("div",{class:`card-headline ${this.direction} ${this.isHovered?"isHovered":""}`},t("slot",null)))}get el(){return r(this)}};n.style=a;export{n as ifx_card_headline};
