import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const navbarMenuCss = ":host{z-index:9999}.navbar-menu{display:flex;visibility:visible;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px}";

const NavbarMenu = /*@__PURE__*/ proxyCustomElement(class NavbarMenu extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.menu = undefined;
  }
  render() {
    return (h("div", { class: 'navbar-menu' }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return navbarMenuCss; }
}, [1, "ifx-navbar-menu", {
    "menu": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-navbar-menu"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-navbar-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavbarMenu);
      }
      break;
  } });
}

const IfxNavbarMenu = NavbarMenu;
const defineCustomElement = defineCustomElement$1;

export { IfxNavbarMenu, defineCustomElement };

//# sourceMappingURL=ifx-navbar-menu.js.map