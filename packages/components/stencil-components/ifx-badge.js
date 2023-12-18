import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const badgeCss = "*{font-family:\"Source Sans 3\"}:host{display:inline-flex}.badge__container{display:inline-flex;justify-content:center;align-items:center;padding:4px 8px;gap:8px;border:1px solid #EEEDED;background-color:#EEEDED;border-radius:100px;font-size:0.875rem;line-height:1.25rem;font-weight:400;color:#1D1D1D}";

const Badge = /*@__PURE__*/ proxyCustomElement(class Badge extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "badge__container" }, h("slot", null)));
  }
  static get style() { return badgeCss; }
}, [1, "ifx-badge"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-badge"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-badge":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Badge);
      }
      break;
  } });
}

const IfxBadge = Badge;
const defineCustomElement = defineCustomElement$1;

export { IfxBadge, defineCustomElement };

//# sourceMappingURL=ifx-badge.js.map