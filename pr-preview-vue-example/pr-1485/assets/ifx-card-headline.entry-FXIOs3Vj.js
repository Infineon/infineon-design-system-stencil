import{r,h as t,g as s}from"./index-D4bz33iy.js";const d=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:var(--ifx-font-family);font-weight:600;font-size:1.5rem;line-height:2rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.isHovered{color:#0A8276}.card-headline.horizontal{font-size:1.25rem;line-height:28px}',o=d,n=class{constructor(e){r(this,e),this.direction=void 0,this.hasDesc=void 0,this.isHovered=!1}componentWillLoad(){var e;const i=this.el.closest("ifx-card");if(i){const a=(e=i.shadowRoot.querySelector(".card"))===null||e===void 0?void 0:e.className;a&&a.includes("horizontal")&&(this.direction="horizontal"),i.querySelector("ifx-card-text")&&(this.hasDesc=!0)}}render(){return t("div",{key:"3c3b46b8ac3f2725637fc4d78c936bb16239a7e0",class:`card__headline-wrapper ${this.hasDesc?"withDesc":""}`},t("div",{key:"bbf0c82e5e759376ad1c15ec23f46423d531dd50",class:`card-headline ${this.direction} ${this.isHovered?"isHovered":""}`},t("slot",{key:"50c048485369dd0cd7c30ac0a3d100c8053fb661"})))}get el(){return s(this)}};n.style=o;export{n as ifx_card_headline};
