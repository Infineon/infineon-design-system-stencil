import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const chipCss = "*{font-family:\"Source Sans 3\"}:host{display:inline-block}.container{position:relative}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper:active{border:1px solid #0A8276}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s;width:12px;height:12px}.container .wrapper .wrapper-close-button.show ifx-icon{transition:0.3s;transform:rotate(-180deg)}";

const Chip = /*@__PURE__*/ proxyCustomElement(class Chip extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxDropdownMenu = createEvent(this, "ifxDropdownMenu", 7);
    this.placeholder = undefined;
    this.selectedValue = "";
  }
  handleOutsideClick(event) {
    const path = event.composedPath();
    if (!path.includes(this.el)) {
      this.closedMenu();
    }
  }
  handleDropdownItemValueEmission(event) {
    this.selectedValue = event.detail;
    this.ifxDropdownMenu.emit(event.detail);
    this.toggleMenu();
  }
  getDropdownMenu() {
    let dropdownMenuComponent = this.el.querySelector('ifx-dropdown-menu');
    return dropdownMenuComponent;
  }
  closedMenu() {
    let dropdownMenuComponent = this.getDropdownMenu();
    dropdownMenuComponent.isOpen = false;
  }
  toggleMenu() {
    let dropdownMenuComponent = this.getDropdownMenu();
    dropdownMenuComponent.isOpen = !dropdownMenuComponent.isOpen;
    this.toggleCloseIcon();
  }
  toggleCloseIcon() {
    const closeIconWrapper = this.el.shadowRoot.querySelector('.wrapper-close-button');
    closeIconWrapper.classList.toggle('show');
  }
  render() {
    return (h("div", { "aria-value": this.selectedValue, "aria-label": 'chip with a dropdown menu', class: "dropdown container" }, h("div", { class: "wrapper", onClick: () => this.toggleMenu() }, h("div", { class: "wrapper-label" }, this.selectedValue ? this.selectedValue : this.placeholder), h("div", { class: "wrapper-close-button" }, h("ifx-icon", { icon: "chevrondown12" }))), h("slot", { name: "menu" })));
  }
  get el() { return this; }
  static get style() { return chipCss; }
}, [1, "ifx-chip", {
    "placeholder": [1],
    "selectedValue": [32]
  }, [[5, "mousedown", "handleOutsideClick"], [0, "ifxDropdownItem", "handleDropdownItemValueEmission"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-chip", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-chip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Chip);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxChip = Chip;
const defineCustomElement = defineCustomElement$1;

export { IfxChip, defineCustomElement };

//# sourceMappingURL=ifx-chip.js.map