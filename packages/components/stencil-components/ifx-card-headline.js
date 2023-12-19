import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const cardHeadlineCss = "*{font-family:\"Source Sans 3\"}:host{pointer-events:none}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:\"Source Sans Pro\";font-weight:600;font-size:1.5rem;line-height:2rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.isHovered{color:#0A8276}.card-headline.horizontal{font-size:1.25rem;line-height:28px}";

const CardHeadline = /*@__PURE__*/ proxyCustomElement(class CardHeadline extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.direction = undefined;
    this.hasDesc = undefined;
    this.isHovered = false;
  }
  componentWillLoad() {
    var _a;
    const cardElement = this.el.closest('ifx-card');
    if (cardElement) {
      const cardClass = (_a = cardElement.shadowRoot.querySelector('.card')) === null || _a === void 0 ? void 0 : _a.className;
      if (cardClass && cardClass.includes('horizontal')) {
        this.direction = 'horizontal';
      }
      const desc = cardElement.querySelector('ifx-card-text');
      if (desc) {
        this.hasDesc = true;
      }
    }
  }
  render() {
    return (h("div", { class: `card__headline-wrapper ${this.hasDesc ? 'withDesc' : ""}` }, h("div", { class: `card-headline ${this.direction} ${this.isHovered ? 'isHovered' : ""}` }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return cardHeadlineCss; }
}, [1, "ifx-card-headline", {
    "isHovered": [4, "is-hovered"],
    "direction": [32],
    "hasDesc": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-card-headline"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-card-headline":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CardHeadline);
      }
      break;
  } });
}

const IfxCardHeadline = CardHeadline;
const defineCustomElement = defineCustomElement$1;

export { IfxCardHeadline, defineCustomElement };

//# sourceMappingURL=ifx-card-headline.js.map