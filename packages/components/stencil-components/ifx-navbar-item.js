import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const navbarItemCss = ".navbar__container-left-content-navigation-item{display:flex;flex-direction:row;align-items:center;padding:0px 8px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__container-left-content-navigation-item.hideElement{display:none}.navbar__container-left-content-navigation-item:hover{color:#0A8276}.navbar__container-left-content-navigation-item:hover a{color:#0A8276}.navbar__container-left-content-navigation-item.remove{display:none}.navbar__container-left-content-navigation-item a{display:flex;align-items:center;font-weight:400;font-size:16px;color:#1D1D1D;text-decoration:none;flex:none;order:0;flex-grow:0}.navbar__container-left-content-navigation-item.removeLabel a{display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-icon-wrapper.removeWrapper{display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-icon-wrapper.hide{display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-navigation-profile{position:relative;width:24px;height:24px;background:#0A8276;border-radius:100px;flex:none;order:0;flex-grow:0;display:none}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-navigation-profile.show{display:flex}.navbar__container-left-content-navigation-item .navbar__container-right-content-navigation-item-navigation-profile a{position:absolute;width:22px;height:20px;left:calc(50% - 11px);top:calc(50% - 10px);font-style:normal;font-weight:600;font-size:14px;line-height:20px;text-decoration:none;display:flex;align-items:center;justify-content:center;text-align:center;color:#FFFFFF}";

const NavbarItem = /*@__PURE__*/ proxyCustomElement(class NavbarItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.isProfile = false;
    this.hideLabel = false;
    this.icon = "";
    this.href = "";
    this.target = "_self";
    this.hideComponent = false;
  }
  componentWillLoad() {
    const menuItem = this.el;
    const slotValue = menuItem.getAttribute('slot');
    if (slotValue) {
      if (slotValue.toLowerCase() === 'right-menu-profile-item') {
        this.isProfile = true;
      }
      else
        this.isProfile = false;
    }
  }
  render() {
    return (h("div", { class: `navbar__container-left-content-navigation-item ${this.hideLabel ? 'removeLabel' : ""} ${this.hideComponent ? 'hideElement' : ""}` }, h("div", { class: `navbar__container-right-content-navigation-item-icon-wrapper ${!this.icon && !this.isProfile ? "removeWrapper" : ""} ${this.isProfile ? "hide" : ""}` }, this.icon && h("ifx-icon", { icon: this.icon })), h("div", { class: `navbar__container-right-content-navigation-item-navigation-profile ${this.isProfile ? 'show' : ""}` }, h("a", { href: "javascript:void(0)" }, "AA")), h("a", { href: this.href, target: this.target }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return navbarItemCss; }
}, [1, "ifx-navbar-item", {
    "isProfile": [1028, "is-profile"],
    "hideLabel": [4, "hide-label"],
    "icon": [1],
    "href": [1],
    "target": [1],
    "hideComponent": [4, "hide-component"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-navbar-item", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-navbar-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavbarItem);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxNavbarItem = NavbarItem;
const defineCustomElement = defineCustomElement$1;

export { IfxNavbarItem, defineCustomElement };

//# sourceMappingURL=ifx-navbar-item.js.map