import{r,h as t,g as s}from"./index-Uix1pkgI.js";const i=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{pointer-events:none}.card__text-wrapper{padding-bottom:0px}.card__text-wrapper.hasBtn{padding-bottom:16px}.card-text{line-height:1.5rem;font-size:1rem;font-weight:400;white-space:wrap;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}',n=i,o=class{constructor(e){r(this,e),this.hasBtn=void 0}componentWillLoad(){const e=this.el.closest("ifx-card").querySelector("ifx-link"),a=this.el.closest("ifx-card").querySelector("ifx-button");(e||a)&&(this.hasBtn=!0)}render(){return t("div",{key:"fea1823e8000b8699142eefb127eb1716a606bcd",class:`card__text-wrapper ${this.hasBtn?"hasBtn":""}`},t("div",{key:"ee9baf1f210a6bf109669d3dbb075f56cf52ee22",class:"card-text"},t("slot",{key:"d4e94f54325b349d0a908f1812412e4a6ff1adad"})))}get el(){return s(this)}};o.style=n;export{o as ifx_card_text};
