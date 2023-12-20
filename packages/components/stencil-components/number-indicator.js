import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const numberIndicatorCss = "*{font-family:\"Source Sans 3\"}:host{display:inline-flex}.numberIndicator__container{display:inline-flex;padding:0px 4px;justify-content:center;align-items:center;border-radius:100px;background-color:#0A8276}.numberIndicator__container span{color:#FFFFFF;text-align:center;font-size:0.875rem;font-style:normal;font-weight:600;line-height:15px}.numberIndicator__container.inverted{background-color:#FFFFFF}.numberIndicator__container.inverted span{color:#0A8276}";

const NumberIndicator = /*@__PURE__*/ proxyCustomElement(class NumberIndicator extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.inverted = false;
  }
  render() {
    return (h("div", { "aria-label": 'a number indicator', class: `numberIndicator__container ${this.inverted ? 'inverted' : ""}` }, h("span", null, h("slot", null))));
  }
  static get style() { return numberIndicatorCss; }
}, [1, "ifx-number-indicator", {
    "inverted": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-number-indicator"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-number-indicator":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NumberIndicator);
      }
      break;
  } });
}

export { NumberIndicator as N, defineCustomElement as d };

//# sourceMappingURL=number-indicator.js.map