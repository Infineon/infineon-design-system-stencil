import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const breadcrumbItemLabelCss = "*{font-family:\"Source Sans 3\"}.breadcrumb-item-label-container{display:flex;align-items:center;gap:8px;text-decoration:none;color:#1D1D1D}.breadcrumb-item-label-container.margin{margin-left:16px}.breadcrumb-item-label-container ifx-icon:empty{display:none}.breadcrumb-item-label-container .label-icon-wrapper{display:inline-flex}.breadcrumb-item-label-container .menu-icon-wrapper{display:flex;justify-content:center;align-items:center;width:16px;height:16px}.breadcrumb-item-label-container .menu-icon-wrapper.hide{display:none}.breadcrumb-item-label-container .menu-icon-wrapper ifx-icon{transition:0.3s}.breadcrumb-item-label-container .menu-icon-wrapper.show ifx-icon{transition:0.3s;transform:rotate(180deg)}";

const BreadcrumbItemLabel = /*@__PURE__*/ proxyCustomElement(class BreadcrumbItemLabel extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.breadcrumbMenuIconWrapper = createEvent(this, "breadcrumbMenuIconWrapper", 7);
    this.icon = undefined;
    this.url = undefined;
    this.target = "_self";
  }
  componentDidLoad() {
    const container = this.el.shadowRoot.querySelector('.breadcrumb-item-label-container');
    const menuWrapper = container.querySelector('.menu-icon-wrapper');
    this.breadcrumbMenuIconWrapper.emit(menuWrapper);
  }
  render() {
    return (h("a", { href: this.url, target: this.target, class: "breadcrumb-item-label-container" }, h("ifx-icon", { icon: this.icon }), h("span", { class: "label-wrapper" }, h("slot", null)), h("span", { class: "menu-icon-wrapper" }, h("ifx-icon", { icon: "chevron-down-12" }))));
  }
  get el() { return this; }
  static get style() { return breadcrumbItemLabelCss; }
}, [1, "ifx-breadcrumb-item-label", {
    "icon": [1],
    "url": [1],
    "target": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-breadcrumb-item-label", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-breadcrumb-item-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BreadcrumbItemLabel);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxBreadcrumbItemLabel = BreadcrumbItemLabel;
const defineCustomElement = defineCustomElement$1;

export { IfxBreadcrumbItemLabel, defineCustomElement };

//# sourceMappingURL=ifx-breadcrumb-item-label.js.map