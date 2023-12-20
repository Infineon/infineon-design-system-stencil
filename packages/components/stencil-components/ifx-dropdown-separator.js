import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const dropdownSeparatorCss = ".dropdown-separator{height:1px;background-color:#EEEDED;margin:8px 16px}";

const DropdownSeparator = /*@__PURE__*/ proxyCustomElement(class DropdownSeparator extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: 'dropdown-separator' }));
  }
  static get style() { return dropdownSeparatorCss; }
}, [1, "ifx-dropdown-separator"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-dropdown-separator"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-dropdown-separator":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownSeparator);
      }
      break;
  } });
}

const IfxDropdownSeparator = DropdownSeparator;
const defineCustomElement = defineCustomElement$1;

export { IfxDropdownSeparator, defineCustomElement };

//# sourceMappingURL=ifx-dropdown-separator.js.map