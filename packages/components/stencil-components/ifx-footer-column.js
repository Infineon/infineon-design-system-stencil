import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const footerColumnCss = "*{font-family:\"Source Sans 3\"}.col{display:flex;flex-direction:column;gap:12px;color:#1D1D1D}.col ::slotted([slot=title]){box-sizing:border-box;font-weight:600;font-size:1rem;line-height:1.5rem;margin:0;padding:0}.col span{display:flex;flex-direction:column;gap:12px;color:#1D1D1D}.col span ::slotted([slot=link]){box-sizing:border-box;font-weight:400;font-size:1rem;line-height:1.5rem}";

const Card = /*@__PURE__*/ proxyCustomElement(class Card extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "col" }, h("slot", { name: "title" }), h("span", { "aria-label": 'navigation link' }, h("slot", { name: "link" }))));
  }
  get el() { return this; }
  static get style() { return footerColumnCss; }
}, [1, "ifx-footer-column"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-footer-column"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-footer-column":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Card);
      }
      break;
  } });
}

const IfxFooterColumn = Card;
const defineCustomElement = defineCustomElement$1;

export { IfxFooterColumn, defineCustomElement };

//# sourceMappingURL=ifx-footer-column.js.map