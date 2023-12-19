import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const dropdownItemCss = "*{font-family:\"Source Sans 3\"}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}";

const DropdownItem = /*@__PURE__*/ proxyCustomElement(class DropdownItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxDropdownItem = createEvent(this, "ifxDropdownItem", 7);
    this.icon = undefined;
    this.href = "";
    this.target = "_self";
    this.hide = false;
    this.size = 'l';
  }
  handleMenuSize(event) {
    this.size = event.detail;
  }
  handleEventEmission() {
    this.ifxDropdownItem.emit(this.el.textContent);
  }
  render() {
    let hrefAttr = this.href ? { href: this.href, target: this.target } : {};
    return (h("a", Object.assign({}, hrefAttr, { onClick: () => this.handleEventEmission(), class: `dropdown-item ${this.size === 's' ? 'small' : ""} ${this.hide ? 'hide' : ""}` }), this.icon && h("ifx-icon", { class: "icon", icon: this.icon }), h("span", null, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return dropdownItemCss; }
}, [1, "ifx-dropdown-item", {
    "icon": [1],
    "href": [1],
    "target": [1],
    "hide": [4],
    "size": [32]
  }, [[16, "menuSize", "handleMenuSize"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-dropdown-item", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-dropdown-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownItem);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxDropdownItem = DropdownItem;
const defineCustomElement = defineCustomElement$1;

export { IfxDropdownItem, defineCustomElement };

//# sourceMappingURL=ifx-dropdown-item.js.map