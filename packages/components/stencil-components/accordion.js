import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const accordionCss = "*{font-family:\"Source Sans 3\"}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}";

const Accordion = /*@__PURE__*/ proxyCustomElement(class Accordion extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.autoCollapse = false;
  }
  async onItemOpen(event) {
    if (this.autoCollapse) {
      const items = Array.from(this.el.querySelectorAll('ifx-accordion-item'));
      for (const item of items) {
        const itemElement = item;
        if (itemElement !== event.target && (await itemElement.isOpen())) {
          itemElement.close();
        }
      }
    }
  }
  render() {
    return (h("div", { class: "accordion-wrapper" }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return accordionCss; }
}, [1, "ifx-accordion", {
    "autoCollapse": [4, "auto-collapse"]
  }, [[0, "ifxItemOpen", "onItemOpen"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-accordion"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-accordion":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Accordion);
      }
      break;
  } });
}

export { Accordion as A, defineCustomElement as d };

//# sourceMappingURL=accordion.js.map