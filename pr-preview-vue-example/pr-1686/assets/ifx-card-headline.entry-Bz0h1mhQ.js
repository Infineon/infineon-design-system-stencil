import{r as n,h as t,g as r}from"./index-dhloGxO7.js";const d=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:var(--ifx-font-family);font-weight:600;font-size:1.5rem;line-height:2rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.horizontal{font-size:1.25rem;line-height:28px}',o=d,s=class{constructor(e){n(this,e)}componentWillLoad(){var e;const i=this.el.closest("ifx-card");if(i){const a=(e=i.shadowRoot.querySelector(".card"))===null||e===void 0?void 0:e.className;a&&a.includes("horizontal")&&(this.direction="horizontal"),i.querySelector("ifx-card-text")&&(this.hasDesc=!0)}}render(){return t("div",{key:"3599127fad1e7dc563064d38df9996bcd7bd9217",class:`card__headline-wrapper ${this.hasDesc?"withDesc":""}`},t("div",{key:"643428271dec2bdf71c7059bf6e28c00cae9438b",class:`card-headline ${this.direction}`},t("slot",{key:"3b7ec4e25a399e96a0db4f03d793109eabf08fff"})))}get el(){return r(this)}};s.style=o;export{s as ifx_card_headline};
