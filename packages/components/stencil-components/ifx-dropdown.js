import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as createPopper } from './popper.js';

const dropdownCss = ":host{display:inline-block}";

const Dropdown = /*@__PURE__*/ proxyCustomElement(class Dropdown extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxOpen = createEvent(this, "ifxOpen", 7);
    this.ifxClose = createEvent(this, "ifxClose", 7);
    this.ifxDropdown = createEvent(this, "ifxDropdown", 7);
    this.placement = 'bottom-start';
    this.defaultOpen = false;
    this.internalIsOpen = false;
    this.noAppendToBody = false;
    this.disabled = undefined;
    this.noCloseOnOutsideClick = false;
    this.noCloseOnMenuClick = false;
    this.trigger = undefined;
    this.menu = undefined;
  }
  componentWillLoad() {
    //maybe not needed
    this.updateSlotContent();
    this.watchHandlerIsOpen(this.defaultOpen, this.internalIsOpen);
  }
  watchHandlerIsOpen(newValue, oldValue) {
    if (newValue !== oldValue && newValue !== this.internalIsOpen) {
      if (newValue) {
        this.openDropdown();
      }
      else {
        this.closeDropdown();
      }
    }
  }
  watchHandlerDisabled(newValue) {
    if (this.trigger) {
      this.trigger.disabled = newValue;
    }
  }
  watchHandlerSlot() {
    this.updateSlotContent();
  }
  // handling assignment of trigger and menu
  updateSlotContent() {
    // Get dropdown trigger. name has to start with ifx-dropdown-trigger
    this.trigger = this.el.querySelector('ifx-dropdown-trigger-button, ifx-dropdown-trigger');
    if (this.trigger) {
      this.trigger.disabled = this.disabled;
      this.trigger.removeEventListener('click', this.triggerClickHandler.bind(this));
      this.trigger.addEventListener('click', this.triggerClickHandler.bind(this));
    }
    // Remove menu if exists from body
    if (!this.noAppendToBody) {
      if (this.menu) {
        this.menu.remove();
      }
      // Get new menu and add to body
      this.menu = this.el.querySelector('ifx-dropdown-menu');
      // event handler for closing dropdown on menu click
      document.body.append(this.menu);
    }
    else {
      this.menu = this.el.querySelector('ifx-dropdown-menu');
    }
    this.menu.removeEventListener('click', this.menuClickHandler.bind(this));
    this.menu.addEventListener('click', this.menuClickHandler.bind(this));
  }
  menuClickHandler() {
    if (!this.noCloseOnMenuClick) {
      this.closeDropdown();
    }
  }
  triggerClickHandler() {
    if (!this.internalIsOpen) {
      this.openDropdown();
    }
    else {
      this.closeDropdown();
    }
  }
  disconnectedCallback() {
    // Destroy popper instance if exists
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
    // Remove menu if exists
    if (this.menu) {
      this.menu.remove();
    }
  }
  async isOpen() {
    return this.internalIsOpen;
  }
  async closeDropdown() {
    if (this.internalIsOpen) {
      this.internalIsOpen = false;
      // sets isOpen prop on trigger and menu
      this.trigger.isOpen = false;
      this.menu.isOpen = false;
      // Emit close event
      this.ifxClose.emit();
    }
    // Destroy popper instance if exists
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }
  async openDropdown() {
    if (!this.internalIsOpen && !this.disabled) {
      this.internalIsOpen = true;
      // sets isOpen prop on trigger and menu
      this.trigger.isOpen = true;
      this.menu.isOpen = true;
      // Create popper instance for positioning
      this.popperInstance = createPopper(this.el, this.menu, { placement: this.placement });
      this.ifxOpen.emit();
    }
  }
  //emitted by and listening to it from the dropdown menu right now
  // @Listen('ifxDropdownMenu')
  // handleDropdownMenuEvents(event: CustomEvent) {
  //   this.ifxDropdown.emit(event.detail)
  //   console.log('Selected item received in higher-level parent:');
  // }
  handleOutsideClick(event) {
    const target = event.target;
    // Close dropdown if outside click
    if (!this.noCloseOnOutsideClick && !this.el.contains(target) && !this.menu.contains(target)) {
      this.closeDropdown();
    }
  }
  render() {
    return (h("div", { "aria-label": 'dropdown menu', class: 'dropdown' }, h("slot", null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "defaultOpen": ["watchHandlerIsOpen"],
    "disabled": ["watchHandlerDisabled"]
  }; }
  static get style() { return dropdownCss; }
}, [1, "ifx-dropdown", {
    "placement": [1],
    "defaultOpen": [4, "default-open"],
    "noAppendToBody": [4, "no-append-to-body"],
    "disabled": [4],
    "noCloseOnOutsideClick": [4, "no-close-on-outside-click"],
    "noCloseOnMenuClick": [4, "no-close-on-menu-click"],
    "internalIsOpen": [32],
    "trigger": [32],
    "menu": [32],
    "isOpen": [64],
    "closeDropdown": [64],
    "openDropdown": [64]
  }, [[0, "slotchange", "watchHandlerSlot"], [5, "mousedown", "handleOutsideClick"]], {
    "defaultOpen": ["watchHandlerIsOpen"],
    "disabled": ["watchHandlerDisabled"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-dropdown"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-dropdown":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Dropdown);
      }
      break;
  } });
}

const IfxDropdown = Dropdown;
const defineCustomElement = defineCustomElement$1;

export { IfxDropdown, defineCustomElement };

//# sourceMappingURL=ifx-dropdown.js.map