import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const cardOverlineCss = "*{font-family:\"Source Sans 3\"}:host{pointer-events:none}.card-overline{font-size:1rem;font-weight:400;color:#575352;padding-bottom:4px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;word-break:break-all}";

const CardOverline = /*@__PURE__*/ proxyCustomElement(class CardOverline extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "card-overline" }, h("slot", null)));
  }
  static get style() { return cardOverlineCss; }
}, [1, "ifx-card-overline"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-card-overline"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-card-overline":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CardOverline);
      }
      break;
  } });
}

const IfxCardOverline = CardOverline;
const defineCustomElement = defineCustomElement$1;

export { IfxCardOverline, defineCustomElement };

//# sourceMappingURL=ifx-card-overline.js.map