import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const dropdownTriggerCss = ":host{display:inline-block;cursor:pointer}";

const DropdownItem = /*@__PURE__*/ proxyCustomElement(class DropdownItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.isOpen = false;
  }
  render() {
    return (h("slot", null));
  }
  static get style() { return dropdownTriggerCss; }
}, [1, "ifx-dropdown-trigger", {
    "isOpen": [4, "is-open"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-dropdown-trigger"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-dropdown-trigger":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownItem);
      }
      break;
  } });
}

const IfxDropdownTrigger = DropdownItem;
const defineCustomElement = defineCustomElement$1;

export { IfxDropdownTrigger, defineCustomElement };

//# sourceMappingURL=ifx-dropdown-trigger.js.map