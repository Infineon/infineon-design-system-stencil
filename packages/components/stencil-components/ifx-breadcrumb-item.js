import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const breadcrumbItemCss = "*{font-family:\"Source Sans 3\"}.breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1D1D1D;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#EEEDED;line-height:13px;font-size:1.25rem;margin-right:12px}";

const BreadcrumbItem = /*@__PURE__*/ proxyCustomElement(class BreadcrumbItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.isLastItem = false;
  }
  handleOutsideClick(event) {
    const path = event.composedPath();
    if (!path.includes(this.el)) {
      this.closeDropdownMenu();
    }
  }
  getDropdownMenu() {
    const dropdownMenu = this.el.shadowRoot.querySelector('.dropdown-menu');
    return dropdownMenu;
  }
  menuWrapperEventReEmitter(event) {
    this.emittedElement = event.detail;
  }
  getMenuIconWrapper() {
    return this.emittedElement;
  }
  handleClassList(el, type, className) {
    el.classList[type](className);
  }
  closeDropdownMenu() {
    const dropdownMenu = this.getDropdownMenu();
    const menuWrapper = this.getMenuIconWrapper();
    this.handleClassList(dropdownMenu, 'remove', 'open');
    this.handleClassList(menuWrapper, 'remove', 'show');
  }
  toggleDropdownMenu() {
    const dropdownMenu = this.getDropdownMenu();
    const menuWrapper = this.getMenuIconWrapper();
    this.handleClassList(dropdownMenu, 'toggle', 'open');
    this.handleClassList(menuWrapper, 'toggle', 'show');
  }
  handleLastItem() {
    const breadcrumbItems = this.el.closest('ifx-breadcrumb').querySelectorAll('ifx-breadcrumb-item');
    if (this.el === breadcrumbItems[breadcrumbItems.length - 1]) {
      this.isLastItem = true;
    }
    else
      this.isLastItem = false;
  }
  componentWillLoad() {
    this.handleLastItem();
  }
  componentDidUpdate() {
    this.handleLastItem();
  }
  componentDidLoad() {
    const dropdownMenu = this.el.querySelector('ifx-dropdown-menu');
    if (!dropdownMenu) {
      const iconMenuWrapper = this.getMenuIconWrapper();
      this.handleClassList(iconMenuWrapper, 'toggle', 'hide');
    }
    else {
      dropdownMenu.isOpen = true;
    }
  }
  render() {
    return (h("li", { class: 'breadcrumb-parent', "aria-current": `${this.isLastItem ? 'page' : ""}`, onClick: () => this.toggleDropdownMenu() }, h("li", { class: "breadcrumb-wrapper" }, h("slot", { name: 'label' }), h("div", { class: "dropdown-menu" }, h("slot", null))), !this.isLastItem && h("span", { class: "breadcrumb-divider" }, "/")));
  }
  get el() { return this; }
  static get style() { return breadcrumbItemCss; }
}, [1, "ifx-breadcrumb-item", {
    "isLastItem": [32]
  }, [[5, "mousedown", "handleOutsideClick"], [0, "breadcrumbMenuIconWrapper", "menuWrapperEventReEmitter"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-breadcrumb-item"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-breadcrumb-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BreadcrumbItem);
      }
      break;
  } });
}

const IfxBreadcrumbItem = BreadcrumbItem;
const defineCustomElement = defineCustomElement$1;

export { IfxBreadcrumbItem, defineCustomElement };

//# sourceMappingURL=ifx-breadcrumb-item.js.map