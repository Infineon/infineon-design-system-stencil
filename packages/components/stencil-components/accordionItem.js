import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './infineonIconStencil.js';

const accordionItemCss = "*{font-family:\"Source Sans 3\"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400;font-family:\"Source Sans 3\"}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}";

const IfxAccordionItem = /*@__PURE__*/ proxyCustomElement(class IfxAccordionItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxItemOpen = createEvent(this, "ifxItemOpen", 7);
    this.ifxItemClose = createEvent(this, "ifxItemClose", 7);
    this.caption = undefined;
    this.open = false;
    this.initialCollapse = true;
    this.internalOpen = false;
  }
  componentWillLoad() {
    this.internalOpen = this.open;
    if (!this.initialCollapse) {
      this.internalOpen = true;
    }
  }
  componentDidLoad() {
    this.openAccordionItem();
  }
  componentDidUpdate() {
    this.openAccordionItem();
  }
  async close() {
    this.internalOpen = false;
    this.ifxItemClose.emit();
  }
  async isOpen() {
    return this.internalOpen;
  }
  openChanged(newValue) {
    this.internalOpen = newValue;
  }
  toggleOpen() {
    this.internalOpen = !this.internalOpen;
    if (this.internalOpen) {
      this.ifxItemOpen.emit();
    }
    else {
      this.ifxItemClose.emit();
    }
  }
  openAccordionItem() {
    if (this.internalOpen) {
      this.contentEl.style.maxHeight = `${this.contentEl.scrollHeight}px`;
    }
    else {
      this.contentEl.style.maxHeight = '0';
    }
  }
  handleSlotChange() {
    if (this.internalOpen) {
      this.openAccordionItem();
    }
  }
  render() {
    return (h("div", { "aria-label": this.caption, class: `accordion-item ${this.internalOpen ? 'open' : ''}` }, h("div", { class: "accordion-title", onClick: () => this.toggleOpen() }, h("span", { class: "accordion-icon" }, h("ifx-icon", { icon: "chevron-down-12" })), h("span", { class: "accordion-caption" }, this.caption)), h("div", { class: "accordion-content", ref: (el) => (this.contentEl = el) }, h("div", { class: "inner-content" }, h("slot", { onSlotchange: () => this.handleSlotChange() })))));
  }
  static get watchers() { return {
    "open": ["openChanged"]
  }; }
  static get style() { return accordionItemCss; }
}, [1, "ifx-accordion-item", {
    "caption": [1],
    "open": [1028],
    "initialCollapse": [4, "initial-collapse"],
    "internalOpen": [32],
    "close": [64],
    "isOpen": [64]
  }, undefined, {
    "open": ["openChanged"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-accordion-item", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-accordion-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IfxAccordionItem);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { IfxAccordionItem as I, defineCustomElement as d };

//# sourceMappingURL=accordionItem.js.map