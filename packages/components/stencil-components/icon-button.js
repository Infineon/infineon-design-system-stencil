import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { d as defineCustomElement$1 } from './infineonIconStencil.js';

const iconButtonCss = ":host{display:inline-flex}.btn{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:8px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:1.5rem;outline:none;font-family:\"Source Sans 3\";text-decoration:none;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#FFFFFF;background-color:#0A8276}.btn-primary:disabled,.btn-primary.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary{color:#0A8276;background-color:#FFFFFF;border-color:#0A8276}.btn-secondary:disabled,.btn-secondary.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary{background-color:transparent;color:#1D1D1D}.btn-tertiary:disabled,.btn-tertiary.disabled{color:#BFBBBB;pointer-events:none}.btn.icon-button{min-width:initial;min-height:initial;width:40px;height:40px;padding:0;justify-content:center}.btn.icon-button.btn-round{border-radius:100px}.btn.icon-button.btn-square{border-radius:1px}.btn.icon-button.btn-s{width:32px;height:32px;padding:8px}.btn.icon-button.btn-l{width:48px;height:48px;padding:8px}.btn.btn-primary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#08665C;border-color:#08665C}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-secondary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#08665C;border-color:#08665C;color:#FFFFFF}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#06534B;border-color:#06534B}.btn.btn-tertiary:not(:disabled,.disabled):focus:not(:active,.active){outline:none;color:#1D1D1D;box-shadow:0 0 0 0px #FFFFFF, 0 0 0 2px #0A8276}.btn.btn-tertiary:not(:disabled,.disabled):hover{color:#0A8276}.btn.btn-tertiary:not(:disabled,.disabled):active,.btn.btn-tertiary:not(:disabled,.disabled).active{color:#08665C}";

const IconButton = /*@__PURE__*/ proxyCustomElement(class IconButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.variant = undefined;
    this.size = undefined;
    this.disabled = undefined;
    this.icon = undefined;
    this.href = undefined;
    this.target = '_self';
    this.shape = 'round';
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  componentWillLoad() {
    if (this.shape === '') {
      this.shape = 'round';
    }
  }
  render() {
    return (h(Host, null, this.href ? (h("a", { "aria-disabled": this.disabled, "aria-label": 'a clickable icon button', ref: (el) => (this.focusableElement = el), class: this.getClassNames(), href: !this.disabled ? this.href : undefined, target: this.target, rel: this.target === '_blank' ? 'noopener noreferrer' : undefined }, h("ifx-icon", { icon: this.icon }))) : (h("button", { class: this.getClassNames(), type: "button" }, h("ifx-icon", { icon: this.icon })))));
  }
  getVariantClass() {
    return `${this.variant}` === "secondary"
      ? `secondary`
      : `${this.variant}` === 'tertiary'
        ? `tertiary`
        : `primary`;
  }
  getSizeClass() {
    if (`${this.size}` === "xs") {
      return "xs";
    }
    else if (`${this.size}` === "s") {
      return "s";
    }
    else if (`${this.size}` === "l") {
      return "l";
    }
    else
      return "";
  }
  getClassNames() {
    return classnames('btn icon-button', `btn-${this.shape}`, this.size && `btn-${this.getSizeClass()}`, `btn-${this.getVariantClass()}`, this.disabled ? 'disabled' : '');
  }
  get el() { return this; }
  static get style() { return iconButtonCss; }
}, [1, "ifx-icon-button", {
    "variant": [1],
    "size": [1],
    "disabled": [4],
    "icon": [1],
    "href": [1],
    "target": [1],
    "shape": [1],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-icon-button", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-icon-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IconButton);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { IconButton as I, defineCustomElement as d };

//# sourceMappingURL=icon-button.js.map