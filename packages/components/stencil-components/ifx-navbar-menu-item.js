import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const navbarMenuItemCss = "*{font-family:\"Source Sans 3\"}.navbar__menu-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px}.navbar__menu-item.hide{display:none}.navbar__menu-item span{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.navbar__menu-item:hover{cursor:pointer;background-color:#EEEDED}.navbar__menu-item:active{background-color:#BFBBBB}.icon{margin-right:4px}";

const NavbarMenuItem = /*@__PURE__*/ proxyCustomElement(class NavbarMenuItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.href = "";
    this.target = "_self";
    this.hide = false;
  }
  render() {
    let hrefAttr = this.href ? { href: this.href, target: this.target } : {};
    return (h("a", Object.assign({}, hrefAttr, { class: `navbar__menu-item  ${this.hide ? 'hide' : ""}` }), h("span", null, h("slot", null))));
  }
  static get style() { return navbarMenuItemCss; }
}, [1, "ifx-navbar-menu-item", {
    "href": [1],
    "target": [1],
    "hide": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-navbar-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-navbar-menu-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavbarMenuItem);
      }
      break;
  } });
}

const IfxNavbarMenuItem = NavbarMenuItem;
const defineCustomElement = defineCustomElement$1;

export { IfxNavbarMenuItem, defineCustomElement };

//# sourceMappingURL=ifx-navbar-menu-item.js.map