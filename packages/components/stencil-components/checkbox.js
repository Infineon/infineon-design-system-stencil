import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './infineonIconStencil.js';

const checkboxCss = ":host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px}.checkbox__container .checkbox__wrapper{display:flex;position:relative;justify-content:center;align-items:center;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checkbox-m{height:24px;width:24px}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked{background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#FFFFFF}.checkbox__container .checkbox__wrapper.checked.error{background-color:#CD002F}.checkbox__container .checkbox__wrapper.checked:focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked.disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.indeterminate:before{content:\"\";display:block;width:70%;height:2px;background-color:#08665C;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.checkbox__container .label{height:20px;font-family:\"Source Sans 3\";font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.checkbox__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}";

const Checkbox = /*@__PURE__*/ proxyCustomElement(class Checkbox extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxChange = createEvent(this, "ifxChange", 7);
    this.disabled = false;
    this.value = false;
    this.error = false;
    this.name = '';
    this.size = 'm';
    this.internalValue = undefined;
    this.indeterminate = false;
  }
  handleCheckbox() {
    if (!this.disabled) {
      if (this.inputElement.indeterminate) {
        this.internalValue = true;
        this.value = this.internalValue;
        this.indeterminate = false;
      }
      else {
        this.internalValue = !this.internalValue;
        this.value = this.internalValue;
      }
      this.ifxChange.emit(this.internalValue);
    }
  }
  valueChanged(newValue, oldValue) {
    console.log("watch");
    if (newValue !== oldValue) {
      this.internalValue = newValue;
      this.inputElement.checked = this.internalValue; // update the checkbox's checked property
    }
  }
  handleKeydown(event) {
    // Keycode 32 corresponds to the Space key, 13 corresponds to the Enter key
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.handleCheckbox();
      event.preventDefault(); // prevent the default action when space or enter is pressed
    }
  }
  componentWillLoad() {
    this.internalValue = this.value;
  }
  componentDidRender() {
    this.inputElement.indeterminate = this.indeterminate;
  }
  getCheckedClassName() {
    if (this.error) {
      if (this.internalValue) {
        return "checked error";
      }
      else {
        return "error";
      }
    }
    else if (this.internalValue) {
      return "checked";
    }
    else
      return "";
  }
  render() {
    const slot = this.el.innerHTML;
    let hasSlot = false;
    if (slot) {
      hasSlot = true;
    }
    return (h("div", { class: "checkbox__container" }, h("input", { type: "checkbox", hidden: true, ref: (el) => (this.inputElement = el), name: this.name, checked: this.internalValue, onChange: this.handleCheckbox.bind(this), id: 'checkbox', value: `${this.internalValue}` }), h("div", { tabindex: "0", onClick: this.handleCheckbox.bind(this), onKeyDown: this.handleKeydown.bind(this), role: "checkbox" // role attribute
      ,
      "aria-value": this.internalValue, "aria-disabled": this.disabled, "aria-labelledby": "label", class: `checkbox__wrapper 
          ${this.getCheckedClassName()}
        ${this.size === "m" ? "checkbox-m" : ""}
        ${this.indeterminate ? 'indeterminate' : ""}
        ${this.disabled ? 'disabled' : ""}` }, this.internalValue && h("ifx-icon", { icon: "check-12" })), hasSlot &&
      h("div", { id: "label", class: `label ${this.size === "m" ? "label-m" : ""} ${this.disabled ? 'disabled' : ""} `, onClick: this.handleCheckbox.bind(this) }, h("slot", null))));
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
  static get style() { return checkboxCss; }
}, [1, "ifx-checkbox", {
    "disabled": [4],
    "value": [4],
    "error": [4],
    "name": [1],
    "size": [1],
    "indeterminate": [4],
    "internalValue": [32]
  }, undefined, {
    "value": ["valueChanged"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-checkbox", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-checkbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Checkbox);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { Checkbox as C, defineCustomElement as d };

//# sourceMappingURL=checkbox.js.map