import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const dropdownMenuCss = ":host{position:relative;z-index:9999}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible}";

const DropdownMenu = /*@__PURE__*/ proxyCustomElement(class DropdownMenu extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.menuSize = createEvent(this, "menuSize", 7);
    this.ifxDropdownMenuItem = createEvent(this, "ifxDropdownMenuItem", 7);
    this.isOpen = false;
    this.size = 'l';
    this.hideTopPadding = false;
    this.filteredItems = [];
  }
  handleMenuFilter(event) {
    const searchValue = event.detail;
    this.filterDropdownItems(searchValue);
  }
  handleDropdownItemValueEmission(event) {
    this.ifxDropdownMenuItem.emit(event.detail);
  }
  filterDropdownItems(searchValue) {
    const allItems = Array.from(this.el.querySelectorAll('ifx-dropdown-item'));
    let dropdownItem, txtValue;
    let query = searchValue.toUpperCase();
    for (let i = 0; i < allItems.length; i++) {
      dropdownItem = allItems[i];
      txtValue = dropdownItem.textContent || dropdownItem.innerText;
      if (txtValue.toUpperCase().indexOf(query) > -1) {
        dropdownItem.setAttribute('hide', false);
      }
      else {
        dropdownItem.setAttribute('hide', true);
      }
    }
  }
  componentWillUpdate() {
    this.menuSize.emit(this.size);
  }
  componentWillLoad() {
    this.filteredItems = Array.from(this.el.querySelectorAll('ifx-dropdown-item'));
    const searchField = this.el.querySelector('ifx-search-field');
    const dropdownHeader = this.el.querySelector('ifx-dropdown-header');
    if (searchField || dropdownHeader) {
      this.hideTopPadding = true;
    }
    else
      this.hideTopPadding = false;
  }
  render() {
    return (h("div", { class: `dropdown-menu 
      ${this.isOpen ? 'show' : ''} 
      ${this.hideTopPadding ? 'hideTopPadding' : ""}
      ${this.size === 's' ? 'small' : ""}` }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return dropdownMenuCss; }
}, [1, "ifx-dropdown-menu", {
    "isOpen": [4, "is-open"],
    "size": [1],
    "hideTopPadding": [32],
    "filteredItems": [32]
  }, [[0, "ifxInput", "handleMenuFilter"], [0, "ifxDropdownItem", "handleDropdownItemValueEmission"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-dropdown-menu"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-dropdown-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownMenu);
      }
      break;
  } });
}

const IfxDropdownMenu = DropdownMenu;
const defineCustomElement = defineCustomElement$1;

export { IfxDropdownMenu, defineCustomElement };

//# sourceMappingURL=ifx-dropdown-menu.js.map