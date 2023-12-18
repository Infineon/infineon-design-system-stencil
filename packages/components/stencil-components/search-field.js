import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { d as defineCustomElement$1 } from './infineonIconStencil.js';

const searchFieldCss = ":host{display:flex}.search-field{box-sizing:border-box;background-color:#FFFFFF;width:100%}.search-field .search-field__wrapper{box-sizing:border-box;height:40px;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:8px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%;outline:none;color:#8D8786}.search-field .search-field__wrapper.focused{border:1px solid #0A8276}.search-field .search-field__wrapper.focused ifx-icon{color:#575352}.search-field .search-field__wrapper.search-field__wrapper-s{height:36px}.search-field .search-field__wrapper:hover:not(.focused,:focus){border:1px solid #3C3A39}.search-field .search-field__wrapper:focus{outline:none;border:1px solid #0A8276}.search-field .search-field__wrapper .delete-icon{right:12px;cursor:pointer}.search-field .search-field__wrapper input[type=text]{font-family:\"Source Sans 3\";font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%;outline:none;height:16px}.search-field .search-field__wrapper input[type=text]:focus{outline:none;color:#1d1d1d}.search-field .search-field__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-field .search-field__wrapper:has(input[disabled]){background-color:#EEEDED}";

const SearchField = /*@__PURE__*/ proxyCustomElement(class SearchField extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxInput = createEvent(this, "ifxInput", 7);
    this.handleInput = () => {
      const query = this.inputElement.value;
      this.value = query; // update the value property when input changes
      this.ifxInput.emit(this.value);
    };
    this.handleDelete = () => {
      this.inputElement.value = '';
      this.value = "";
      this.ifxInput.emit(null);
    };
    this.value = '';
    this.insideDropdown = false;
    this.showDeleteIcon = false;
    this.showDeleteIconInternalState = false;
    this.disabled = false;
    this.size = 'l';
    this.isFocused = false;
  }
  handleOutsideClick(event) {
    const path = event.composedPath();
    if (!path.includes(this.inputElement)) {
      this.isFocused = false;
    }
  }
  valueWatcher(newValue) {
    if (newValue !== this.inputElement.value) {
      this.inputElement.value = newValue;
    }
  }
  focusInput() {
    this.inputElement.focus();
    this.isFocused = true;
  }
  componentWillUpdate() {
    if (this.value !== "") {
      this.showDeleteIconInternalState = true;
    }
    else
      this.showDeleteIconInternalState = false;
  }
  render() {
    return (h("div", { "aria-label": "a search field for user input", "aria-disabled": this.disabled, "aria-value": this.value, class: 'search-field' }, h("div", { class: this.getWrapperClassNames(), tabindex: 1, onFocus: () => this.focusInput(), onClick: () => this.focusInput() }, h("ifx-icon", { icon: "search-16", class: "search-icon" }), h("input", { ref: (el) => (this.inputElement = el), type: "text", onInput: () => this.handleInput(), placeholder: "Search...", disabled: this.disabled, value: this.value }), this.showDeleteIcon && this.showDeleteIconInternalState ? (h("ifx-icon", { icon: "cremove16", class: "delete-icon", onClick: this.handleDelete })) : null)));
  }
  getSizeClass() {
    return `${this.size}` === "s"
      ? "search-field__wrapper-s"
      : "";
  }
  getWrapperClassNames() {
    return classnames(`search-field__wrapper`, `search-field__wrapper ${this.getSizeClass()}`, `${this.isFocused ? 'focused' : ""}`);
  }
  static get watchers() { return {
    "value": ["valueWatcher"]
  }; }
  static get style() { return searchFieldCss; }
}, [1, "ifx-search-field", {
    "value": [1025],
    "showDeleteIcon": [4, "show-delete-icon"],
    "disabled": [4],
    "size": [1],
    "insideDropdown": [32],
    "showDeleteIconInternalState": [32],
    "isFocused": [32]
  }, [[5, "mousedown", "handleOutsideClick"]], {
    "value": ["valueWatcher"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-search-field", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-search-field":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SearchField);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { SearchField as S, defineCustomElement as d };

//# sourceMappingURL=search-field.js.map