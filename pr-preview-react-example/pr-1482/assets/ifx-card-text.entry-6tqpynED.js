import{r,h as e,g as s}from"./index-S3ejjP4g.js";const i=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card__text-wrapper{padding-bottom:0px}.card__text-wrapper.hasBtn{padding-bottom:16px}.card-text{line-height:1.5rem;font-size:1rem;font-weight:400;white-space:wrap;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}',n=i,o=class{constructor(t){r(this,t),this.hasBtn=void 0}componentWillLoad(){const t=this.el.closest("ifx-card").querySelector("ifx-link"),a=this.el.closest("ifx-card").querySelector("ifx-button");(t||a)&&(this.hasBtn=!0)}render(){return e("div",{key:"f5f5fee07fd8de6a5a134c967254b9e9b89b6101",class:`card__text-wrapper ${this.hasBtn?"hasBtn":""}`},e("div",{key:"3af40a2b5acd57dba8a9f71399f76b2fdb6a0f50",class:"card-text"},e("slot",{key:"b91de45e148ff040f1168a6bd087144a7cd2b4c5"})))}get el(){return s(this)}};o.style=n;export{o as ifx_card_text};
