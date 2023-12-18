import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const cardTextCss = "*{font-family:\"Source Sans 3\"}:host{pointer-events:none}.card__text-wrapper{padding-bottom:0px}.card__text-wrapper.hasBtn{padding-bottom:16px}.card-text{line-height:1.5rem;font-size:1rem;font-weight:400;white-space:wrap;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}";

const CardText = /*@__PURE__*/ proxyCustomElement(class CardText extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.hasBtn = undefined;
  }
  componentWillLoad() {
    const link = this.el.closest('ifx-card').querySelector('ifx-link');
    const button = this.el.closest('ifx-card').querySelector('ifx-button');
    if (link || button) {
      this.hasBtn = true;
    }
  }
  render() {
    return (h("div", { class: `card__text-wrapper ${this.hasBtn ? 'hasBtn' : ""}` }, h("div", { class: `card-text` }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return cardTextCss; }
}, [1, "ifx-card-text", {
    "hasBtn": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-card-text"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-card-text":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CardText);
      }
      break;
  } });
}

const IfxCardText = CardText;
const defineCustomElement = defineCustomElement$1;

export { IfxCardText, defineCustomElement };

//# sourceMappingURL=ifx-card-text.js.map