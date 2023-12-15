import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const radioButtonCss = "*{font-family:\"Source Sans 3\"}:host{display:inline-flex}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px;cursor:pointer}.radioButton__container.m .radioButton__wrapper{width:24px;height:24px}.radioButton__container .radioButton__wrapper{width:20px;height:20px;position:relative;display:block;border-radius:50%;background-color:#FFFFFF;border:1px solid #575352}.radioButton__container .radioButton__wrapper:focus{outline:none}.radioButton__container .radioButton__wrapper:focus::before{content:\"\";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#0A8276;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper:hover{background-color:#EEEDED}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.disabled.error:hover,.radioButton__container .radioButton__wrapper.disabled.error:focus-visible{border-color:#CD002F}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked::after{content:\"\";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;background-color:#0A8276;border-radius:50%}.radioButton__container .radioButton__wrapper.checked.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#FFFFFF;border-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled.disabled::after{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB}.radioButton__container .radioButton__wrapper.error:not(.disabled){border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:not(.disabled):hover,.radioButton__container .radioButton__wrapper.error:not(.disabled):focus-visible{border-color:#CD002F}.radioButton__container .label{display:flex;align-items:center;height:20px;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.radioButton__container .label.label-m{height:24px;font-size:1rem;line-height:1.5rem}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label:hover{cursor:pointer}";

const RadioButton = /*@__PURE__*/ proxyCustomElement(class RadioButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxChange = createEvent(this, "ifxChange", 7);
    this.disabled = false;
    this.value = false;
    this.error = false;
    this.size = "s";
    this.internalValue = undefined;
    this.hasSlot = true;
  }
  valueChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.internalValue = newValue;
    }
  }
  componentWillLoad() {
    this.internalValue = this.value;
    const slot = this.el.innerHTML;
    if (slot) {
      this.hasSlot = true;
    }
    else
      this.hasSlot = false;
  }
  handleRadioButtonClick() {
    if (!this.disabled && !this.error && !this.internalValue) {
      this.internalValue = !this.internalValue;
      this.el.shadowRoot.querySelector('.radioButton__wrapper').focus();
      this.ifxChange.emit(this.internalValue);
    }
  }
  render() {
    return (h("div", { "aria-label": 'a radio button', "aria-value": this.value, "aria-disabled": this.disabled, class: `radioButton__container ${this.size} ${this.disabled ? 'disabled' : ''}`, onClick: this.handleRadioButtonClick.bind(this) }, h("div", { class: `radioButton__wrapper 
          ${this.internalValue ? 'checked' : ''} 
          ${this.disabled ? 'disabled' : ''} 
          ${this.error ? 'error' : ''}`, tabIndex: this.disabled ? -1 : 0 }, this.internalValue && h("div", { class: "radioButton__wrapper-mark" })), this.hasSlot && (h("div", { class: `label ${this.size === "m" ? "label-m" : ""} ${this.disabled ? 'disabled' : ''}` }, h("slot", null)))));
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
  static get style() { return radioButtonCss; }
}, [1, "ifx-radio-button", {
    "disabled": [4],
    "value": [4],
    "error": [4],
    "size": [1],
    "internalValue": [32],
    "hasSlot": [32]
  }, undefined, {
    "value": ["valueChanged"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-radio-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-radio-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RadioButton);
      }
      break;
  } });
}

const IfxRadioButton = RadioButton;
const defineCustomElement = defineCustomElement$1;

export { IfxRadioButton, defineCustomElement };

//# sourceMappingURL=ifx-radio-button.js.map