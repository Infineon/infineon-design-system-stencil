import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const tabCss = ":host{display:block}";

const IfxTab$1 = /*@__PURE__*/ proxyCustomElement(class IfxTab extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.header = undefined;
    this.disabled = undefined;
  }
  render() {
    return h("slot", null);
  }
  get el() { return this; }
  static get style() { return tabCss; }
}, [4, "ifx-tab", {
    "header": [1],
    "disabled": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-tab"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-tab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IfxTab$1);
      }
      break;
  } });
}

const IfxTab = IfxTab$1;
const defineCustomElement = defineCustomElement$1;

export { IfxTab, defineCustomElement };

//# sourceMappingURL=ifx-tab.js.map