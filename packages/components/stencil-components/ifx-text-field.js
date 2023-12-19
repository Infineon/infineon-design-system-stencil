import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const textFieldCss = "*{font-family:\"Source Sans 3\"}:host{display:flex}.textInput__container{display:flex;flex-direction:column;align-items:flex-start;padding:0px;width:100%;flex:none;order:0;align-self:stretch;flex-grow:0;font-family:\"Source Sans 3\"}.textInput__container.disabled .textInput__top-wrapper label{color:#575352}.textInput__container.disabled .textInput__bottom-wrapper input{border:1px solid #575352;background-color:#EEEDED}.textInput__container.disabled .textInput__bottom-wrapper input::placeholder{font-size:0.875rem;color:#575352}.textInput__container .textInput__top-wrapper{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:4px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__top-wrapper label{font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.textInput__container .textInput__top-wrapper label .optional-required{margin-left:4px}.textInput__container .textInput__top-wrapper label .optional{margin-left:4px}.textInput__container .textInput__top-wrapper label .required{margin-left:4px}.textInput__container .input-container{position:relative;display:flex;align-items:center;width:100%}.textInput__container .textInput__bottom-wrapper{flex-grow:1;position:relative;display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:4px;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;height:40px;background-color:#FFFFFF;color:#1D1D1D;border:1px solid #8D8786;border-radius:1px;flex:none;order:0;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper input.input-s{height:36px}.textInput__container .textInput__bottom-wrapper input.icon{padding-left:32px}.textInput__container .textInput__bottom-wrapper input.error{border:1px solid #CD002F}.textInput__container .textInput__bottom-wrapper input.error:focus{outline:none}.textInput__container .textInput__bottom-wrapper input.success{border:1px solid #4CA460}.textInput__container .textInput__bottom-wrapper input.success:focus{outline:none}.textInput__container .textInput__bottom-wrapper input:focus:not(.error,.success){outline:none;border:1px solid #0A8276}.textInput__container .textInput__bottom-wrapper input:hover:not(:disabled,.error,.success){border:1px solid #3C3A39}.textInput__container .textInput__bottom-wrapper input::placeholder{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.5rem;color:#8D8786;flex:none;order:1;flex-grow:1}.textInput__container .textInput__bottom-wrapper ifx-icon{position:absolute;top:50%;transform:translateY(-50%);left:8px;transition:0.3s}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption{font-style:normal;font-weight:400;font-size:0.75rem;line-height:1rem;letter-spacing:0.2px;color:#1D1D1D;flex:none;order:1;align-self:stretch;flex-grow:0}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.error{color:#CD002F}.textInput__container .textInput__bottom-wrapper .textInput__bottom-wrapper-caption.disabled{color:#575352}";

const TextField = /*@__PURE__*/ proxyCustomElement(class TextField extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxInput = createEvent(this, "ifxInput", 7);
    this.placeholder = "Placeholder";
    this.value = '';
    this.error = false;
    this.label = "";
    this.icon = "";
    this.caption = "";
    this.size = 'm';
    this.required = false;
    this.optional = false;
    this.success = false;
    this.disabled = false;
  }
  // @Prop({ reflect: true })
  // resetOnSubmit: boolean = false;
  valueWatcher(newValue) {
    if (newValue !== this.inputElement.value) {
      this.inputElement.value = newValue;
    }
  }
  async reset() {
    this.value = '';
    this.inputElement.value = '';
  }
  handleInput() {
    const query = this.inputElement.value;
    this.value = query; // update the value property when input changes
    this.ifxInput.emit(this.value);
  }
  render() {
    return (h("div", { "aria-label": "a text field for user input", "aria-value": this.value, "aria-disabled": this.disabled, class: `textInput__container ${this.disabled ? 'disabled' : ""}` }, h("div", { class: "textInput__top-wrapper" }, h("label", { htmlFor: "text-field" }, h("slot", null), this.optional && this.required ? (h("span", { class: "optional-required" }, "(optional) *")) : this.optional ? (h("span", { class: "optional" }, "(optional)")) : this.required ? (h("span", { class: "required" }, "*")) : null)), h("div", { class: "textInput__bottom-wrapper" }, h("div", { class: "input-container" }, this.icon && (h("ifx-icon", { icon: this.icon })), h("input", { ref: (el) => (this.inputElement = el), disabled: this.disabled, type: "text", id: 'text-field', value: this.value, onInput: () => this.handleInput(), placeholder: this.placeholder, class: `${this.icon ? 'icon' : ""}
                ${this.error ? 'error' : ""} 
              ${this.size === "s" ? "input-s" : ""}
              ${this.success ? "success" : ""}` })), this.caption && !this.error &&
      h("div", { class: `textInput__bottom-wrapper-caption ${this.disabled} ? disabled : ""` }, this.caption), this.error &&
      h("div", { class: "textInput__bottom-wrapper-caption error" }, this.caption))));
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["valueWatcher"]
  }; }
  static get style() { return textFieldCss; }
}, [1, "ifx-text-field", {
    "placeholder": [1],
    "value": [1025],
    "error": [4],
    "label": [1],
    "icon": [1],
    "caption": [1],
    "size": [1],
    "required": [4],
    "optional": [4],
    "success": [4],
    "disabled": [4],
    "reset": [64]
  }, undefined, {
    "value": ["valueWatcher"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-text-field", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-text-field":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TextField);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxTextField = TextField;
const defineCustomElement = defineCustomElement$1;

export { IfxTextField, defineCustomElement };

//# sourceMappingURL=ifx-text-field.js.map