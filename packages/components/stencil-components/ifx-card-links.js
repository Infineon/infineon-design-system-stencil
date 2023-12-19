import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const cardLinksCss = "*{font-family:\"Source Sans 3\"}.container{display:flex;align-items:center;gap:20px;flex-wrap:wrap;text-decoration:none;color:#1D1D1D;padding:0px 24px 24px 24px;word-wrap:break-word;overflow-wrap:anywhere;}.container:hover{cursor:initial}";

const CardLinks = /*@__PURE__*/ proxyCustomElement(class CardLinks extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: 'container' }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return cardLinksCss; }
}, [1, "ifx-card-links"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-card-links"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-card-links":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CardLinks);
      }
      break;
  } });
}

const IfxCardLinks = CardLinks;
const defineCustomElement = defineCustomElement$1;

export { IfxCardLinks, defineCustomElement };

//# sourceMappingURL=ifx-card-links.js.map