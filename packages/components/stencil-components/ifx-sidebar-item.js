import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const sidebarItemCss = "*{font-family:\"Source Sans 3\"}.sidebar__nav-item{display:flex;flex-direction:row;align-items:center;width:100%;padding:0px 4px 0px 0px;gap:4px;flex:none;order:0;flex-grow:0;text-decoration:none;color:#1D1D1D}.sidebar__nav-item .sidebar__nav-item-icon-wrapper{display:flex;width:24px;height:24px;justify-content:center;align-items:center;gap:8px;flex-shrink:0}.sidebar__nav-item .sidebar__nav-item-icon-wrapper.noIcon{display:none}.sidebar__nav-item .sidebar__nav-item-icon-wrapper ifx-icon{width:16px;height:16px}.sidebar__nav-item .sidebar__nav-item-label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:1;flex-grow:1}.sidebar__nav-item .sidebar__nav-item-number{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 4px;flex:none;order:2;flex-grow:0}";

const SidebarItem = /*@__PURE__*/ proxyCustomElement(class SidebarItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = "";
    this.hasIcon = false;
    this.hasIconWrapper = false;
    this.href = "";
    this.target = "_self";
  }
  handleConsoleError(event) {
    if (event.detail) {
      this.hasIcon = false;
    }
    else {
      this.hasIcon = true;
    }
  }
  render() {
    return (h("a", { href: this.href, target: this.target, class: 'sidebar__nav-item' }, this.icon &&
      h("div", { class: `sidebar__nav-item-icon-wrapper ${!this.hasIcon ? 'noIcon' : ""}` }, h("ifx-icon", { icon: this.icon })), h("div", { class: "sidebar__nav-item-label" }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return sidebarItemCss; }
}, [1, "ifx-sidebar-item", {
    "icon": [1],
    "href": [1],
    "target": [1],
    "hasIcon": [32],
    "hasIconWrapper": [32]
  }, [[0, "consoleError", "handleConsoleError"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-sidebar-item", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-sidebar-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SidebarItem);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxSidebarItem = SidebarItem;
const defineCustomElement = defineCustomElement$1;

export { IfxSidebarItem, defineCustomElement };

//# sourceMappingURL=ifx-sidebar-item.js.map