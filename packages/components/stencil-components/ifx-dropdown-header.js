import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const dropdownHeaderCss = "*{font-family:\"Source Sans 3\"}.dropdown-header{display:flex;padding:8px 16px;align-items:center;gap:8px;align-self:stretch;border-bottom:1px solid #EEEDED}.dropdown-header span{color:#575352;font-family:Source Sans 3;font-size:14px;font-style:normal;font-weight:400;line-height:20px;}";

const DropdownHeader = /*@__PURE__*/ proxyCustomElement(class DropdownHeader extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: 'dropdown-header' }, h("span", null, h("slot", null))));
  }
  static get style() { return dropdownHeaderCss; }
}, [1, "ifx-dropdown-header"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-dropdown-header"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-dropdown-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownHeader);
      }
      break;
  } });
}

const IfxDropdownHeader = DropdownHeader;
const defineCustomElement = defineCustomElement$1;

export { IfxDropdownHeader, defineCustomElement };

//# sourceMappingURL=ifx-dropdown-header.js.map