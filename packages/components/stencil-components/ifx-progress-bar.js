import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const progressBarCss = ":host{display:flex;width:100%}.progress-bar{height:16px;bottom:0;right:0;top:0;left:0;display:flex;height:16px;border-radius:1px;width:100%;overflow:hidden}.progress-bar .label{height:17px;border-radius:1px 0px 0px 1px}.progress-bar.s{height:4px}.progress-bar .progress{height:100%;background-color:#0A8276;position:relative}.progress-bar .progress:after{content:\"\";background-color:#EEEDED;height:100%;position:absolute}.progress-bar .label{display:flex;align-items:center;justify-content:center;position:absolute;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;font-family:\"Source Sans 3\";color:#FFFFFF;top:0;bottom:0;left:0;right:0}";

const ProgressBar = /*@__PURE__*/ proxyCustomElement(class ProgressBar extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.value = 0;
    this.label = '';
    this.size = undefined;
    this.showLabel = false;
    this.internalValue = undefined;
  }
  valueChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.internalValue = newValue;
    }
  }
  componentWillLoad() {
    this.internalValue = this.value;
  }
  render() {
    return (h("div", { "aria-label": 'a progress bar', "aria-value": this.value, class: `progress-bar ${this.size}` }, h("div", { class: "progress", style: { width: `${this.internalValue}%` } }, this.showLabel && this.size !== "s" && h("span", { class: "label" }, `${this.internalValue}%`))));
  }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
  static get style() { return progressBarCss; }
}, [1, "ifx-progress-bar", {
    "value": [2],
    "label": [1],
    "size": [1],
    "showLabel": [4, "show-label"],
    "internalValue": [32]
  }, undefined, {
    "value": ["valueChanged"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-progress-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-progress-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ProgressBar);
      }
      break;
  } });
}

const IfxProgressBar = ProgressBar;
const defineCustomElement = defineCustomElement$1;

export { IfxProgressBar, defineCustomElement };

//# sourceMappingURL=ifx-progress-bar.js.map