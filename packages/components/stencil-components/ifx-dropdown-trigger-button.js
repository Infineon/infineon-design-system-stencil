import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './button.js';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const dropdownTriggerButtonCss = ":host{display:inline-block}.rotate{transition:transform 0.2s ease-in-out;transform:rotate(-180deg);margin-top:0em}.icon{margin-top:0em;transition:transform 0.2s ease-in-out}";

const DropdownItem = /*@__PURE__*/ proxyCustomElement(class DropdownItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.isOpen = false;
    this.theme = 'default';
    this.variant = undefined;
    this.size = 'm';
    this.disabled = undefined;
    this.hideArrow = false;
  }
  render() {
    return (h("ifx-button", { variant: this.variant, theme: this.theme, size: this.size, disabled: this.disabled, class: "dropdown-trigger-button" }, h("slot", null), !this.hideArrow &&
      h("ifx-icon", { icon: "chevron-down-12", class: `icon${this.isOpen ? ' rotate' : ''}` })));
  }
  static get style() { return dropdownTriggerButtonCss; }
}, [1, "ifx-dropdown-trigger-button", {
    "isOpen": [4, "is-open"],
    "theme": [1],
    "variant": [1],
    "size": [1],
    "disabled": [4],
    "hideArrow": [4, "hide-arrow"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-dropdown-trigger-button", "ifx-button", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-dropdown-trigger-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownItem);
      }
      break;
    case "ifx-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxDropdownTriggerButton = DropdownItem;
const defineCustomElement = defineCustomElement$1;

export { IfxDropdownTriggerButton, defineCustomElement };

//# sourceMappingURL=ifx-dropdown-trigger-button.js.map