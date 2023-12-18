import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './infineonIconStencil.js';
import { d as defineCustomElement$2 } from './search-field.js';

const searchBarCss = "*{font-family:\"Source Sans 3\"}:host{width:100%;display:flex}.search-bar{box-sizing:border-box;height:40px;background-color:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%}.search-bar.closed{display:flex;width:auto;justify-content:flex-start}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:1rem;font-style:normal;font-weight:600;line-height:1.5rem;color:#0A8276;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:none;flex-direction:row;align-items:center}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.closed .search-bar__icon-wrapper{display:flex}.search-bar.closed .search-bar-wrapper{display:none}";

const SearchBar = /*@__PURE__*/ proxyCustomElement(class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxInput = createEvent(this, "ifxInput", 7);
    this.ifxSearchBarIsOpen = createEvent(this, "ifxSearchBarIsOpen", 7);
    this.handleCloseButton = () => {
      this.internalState = !this.internalState;
      this.ifxSearchBarIsOpen.emit(this.internalState);
    };
    this.handleFocus = () => {
      this.internalState = true;
    };
    this.isOpen = true;
    this.disabled = false;
    this.internalState = undefined;
    this.value = undefined;
  }
  handlePropChange() {
    this.internalState = this.isOpen;
  }
  setInitialState() {
    this.internalState = this.isOpen;
  }
  componentWillLoad() {
    this.setInitialState();
  }
  handleInput(event) {
    this.value = event.detail;
  }
  render() {
    return (h("div", { "aria-label": 'a search bar', "aria-disabled": this.disabled, class: `search-bar ${this.internalState ? 'open' : 'closed'}` }, this.internalState ? (h("div", { class: "search-bar-wrapper" }, h("ifx-search-field", { disabled: this.disabled, value: this.value, onIfxInput: this.handleInput.bind(this) }, h("ifx-icon", { icon: "search-16", slot: "search-icon" })), h("a", { tabindex: "-1", href: 'javascript:void(0)', onClick: this.handleCloseButton }, "Close"))) : (h("div", { class: "search-bar__icon-wrapper", onClick: this.handleCloseButton }, h("ifx-icon", { icon: "search-16" })))));
  }
  static get watchers() { return {
    "isOpen": ["handlePropChange"]
  }; }
  static get style() { return searchBarCss; }
}, [1, "ifx-search-bar", {
    "isOpen": [4, "is-open"],
    "disabled": [4],
    "value": [1025],
    "internalState": [32]
  }, undefined, {
    "isOpen": ["handlePropChange"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-search-bar", "ifx-icon", "ifx-search-field"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-search-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SearchBar);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ifx-search-field":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxSearchBar = SearchBar;
const defineCustomElement = defineCustomElement$1;

export { IfxSearchBar, defineCustomElement };

//# sourceMappingURL=ifx-search-bar.js.map