import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const sliderCss = "*{font-family:\"Source Sans 3\"}:host{display:inline-block}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-size:0.875rem;color:#575352;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#BFBBBB}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-slider{display:flex;align-items:center;padding:2px 16px;border-radius:9999px}.ifx-slider input[type=range]{-webkit-appearance:none;width:100%;height:4px;background:linear-gradient(to right, #0A8276 0%, #0A8276 var(--value-percent, 0%), #EEEDED var(--value-percent, 0%), #EEEDED 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-slider input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#0A8276;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#0A8276;border-radius:50%;cursor:pointer;transition:box-shadow 0.2s}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:hover{background:#08665C}.ifx-slider input[type=range]:not(:disabled)::-webkit-slider-thumb:active{background:#06534B}.ifx-slider input[type=range]:disabled{background:#BFBBBB;cursor:default}.ifx-slider input[type=range]:disabled::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;background:#BFBBBB;border-radius:50%;cursor:default}";

const IfxSlider$1 = /*@__PURE__*/ proxyCustomElement(class IfxSlider extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxChange = createEvent(this, "ifxChange", 7);
    this.min = 0;
    this.max = 100;
    this.value = 0;
    this.disabled = false;
    this.showPercentage = false;
    this.leftIcon = undefined;
    this.rightIcon = undefined;
    this.leftText = undefined;
    this.rightText = undefined;
    this.internalValue = 0;
  }
  valueChanged(newValue) {
    this.internalValue = newValue;
    this.updateValuePercent();
  }
  handleInputChange(event) {
    const target = event.target;
    this.internalValue = parseInt(target.value);
    this.ifxChange.emit(this.internalValue);
    this.updateValuePercent();
  }
  updateValuePercent() {
    if (this.inputRef) {
      const percent = ((this.internalValue - this.min) / (this.max - this.min)) * 100;
      this.inputRef.style.setProperty('--value-percent', `${percent}%`);
    }
  }
  componentWillLoad() {
    this.internalValue = this.value;
  }
  componentDidLoad() {
    this.updateValuePercent();
  }
  render() {
    return (h("div", { class: "ifx-slider" }, this.leftText && (h("span", { class: `left-text` }, this.leftText)), this.leftIcon && (h("ifx-icon", { icon: this.leftIcon, class: `left-icon${this.disabled ? ' disabled' : ''}` })), h("input", { type: "range", min: this.min, max: this.max, disabled: this.disabled, value: this.internalValue, ref: (el) => (this.inputRef = el), onInput: (event) => this.handleInputChange(event), "aria-label": 'a slider', "aria-value": this.value, "aria-disabled": this.disabled }), this.rightIcon && (h("ifx-icon", { icon: this.rightIcon, class: `right-icon${this.disabled ? ' disabled' : ''}` })), this.rightText && (h("span", { class: `right-text${this.disabled ? ' disabled' : ''}` }, this.rightText)), this.showPercentage && (h("span", { class: `percentage-display${this.disabled ? ' disabled' : ''}` }, this.internalValue, "%"))));
  }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
  static get style() { return sliderCss; }
}, [1, "ifx-slider", {
    "min": [2],
    "max": [2],
    "value": [2],
    "disabled": [4],
    "showPercentage": [4, "show-percentage"],
    "leftIcon": [1, "left-icon"],
    "rightIcon": [1, "right-icon"],
    "leftText": [1, "left-text"],
    "rightText": [1, "right-text"],
    "internalValue": [32]
  }, undefined, {
    "value": ["valueChanged"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-slider", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-slider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IfxSlider$1);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxSlider = IfxSlider$1;
const defineCustomElement = defineCustomElement$1;

export { IfxSlider, defineCustomElement };

//# sourceMappingURL=ifx-slider.js.map