import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const buttonCss = "*{font-family:\"Source Sans 3\"}:host{vertical-align:bottom;display:inline-flex}.btn{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;font-weight:600;border-radius:1px;line-height:1.5rem;font-family:\"Source Sans 3\";font-style:normal;text-decoration:none;user-select:none;font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn.disabled{pointer-events:none}.btn-default{color:#FFFFFF;background-color:#0A8276}.btn-default:disabled,.btn-default.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary-default{background-color:#FFFFFF;color:#0A8276;border:1px solid #0A8276}.btn-secondary-default:disabled,.btn-secondary-default.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary-default{background-color:transparent;color:#0A8276}.btn-tertiary-default:disabled,.btn-tertiary-default.disabled{color:#BFBBBB;pointer-events:none}.btn-danger{color:#FFFFFF;background-color:#CD002F;border-color:#CD002F}.btn-danger:disabled,.btn-danger.disabled{background-color:#BFBBBB;color:#FFFFFF;pointer-events:none}.btn-secondary-danger{background-color:#FFFFFF;color:#CD002F;border:1px solid #CD002F}.btn-secondary-danger:disabled,.btn-secondary-danger.disabled{background-color:#FFFFFF;border:1px solid #BFBBBB;color:#BFBBBB;pointer-events:none}.btn-tertiary-danger{background-color:transparent;color:#CD002F}.btn-tertiary-danger:disabled,.btn-tertiary-danger.disabled{background-color:#FFFFFF;color:#BFBBBB;pointer-events:none}.btn-inverse{color:#0A8276;background-color:#FFFFFF}.btn-inverse:disabled,.btn-inverse.disabled{opacity:1;background-color:#FFFFFF;color:#0A8276;pointer-events:none}.btn-secondary-inverse{color:#FFFFFF;border:1px solid #FFFFFF}.btn-secondary-inverse:disabled,.btn-secondary-inverse.disabled{border:1px solid #FFFFFF;color:#FFFFFF;pointer-events:none}.btn-tertiary-inverse{color:#FFFFFF}.btn-tertiary-inverse:disabled,.btn-tertiary-inverse.disabled{color:#FFFFFF;opacity:1;pointer-events:none}.btn ifx-icon:empty{display:none}.btn.btn-xs{font-size:0.875rem;height:32px;line-height:1rem}.btn.btn-s{font-size:0.875rem;height:36px;line-height:1.25rem}.btn.btn-l{font-size:1.25rem;height:48px;line-height:1.75rem}.btn.btn-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-default:not(:disabled,.disabled):hover{background-color:#08665C}.btn.btn-default:not(:disabled,.disabled):active,.btn.btn-default:not(:disabled,.disabled).active{background-color:#06534B}.btn.btn-secondary-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary-default:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#08665C}.btn.btn-secondary-default:not(:disabled,.disabled):active,.btn.btn-secondary-default:not(:disabled,.disabled).active{background-color:#06534B}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#9C216E}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#9C216E}.btn.btn-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#A2001E}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021}.btn.btn-secondary-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.btn.btn-secondary-danger:not(:disabled,.disabled):hover{color:#FFFFFF;background-color:#A2001E}.btn.btn-secondary-danger:not(:disabled,.disabled):active,.btn.btn-secondary-danger:not(:disabled,.disabled).active{background-color:#900021}.btn.btn-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-inverse:not(:disabled,.disabled):hover{background-color:#EEEDED}.btn.btn-inverse:not(:disabled,.disabled):active,.btn.btn-inverse:not(:disabled,.disabled).active{background-color:#BFBBBB}.btn.btn-secondary-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-secondary-inverse:not(:disabled,.disabled):hover{color:#0A8276;background-color:#EEEDED}.btn.btn-secondary-inverse:not(:disabled,.disabled):active,.btn.btn-secondary-inverse:not(:disabled,.disabled).active{color:#0A8276;background-color:#BFBBBB}.btn.btn-tertiary-default:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #08665C}.btn.btn-tertiary-default:not(:disabled,.disabled):hover{color:#08665C}.btn.btn-tertiary-default:not(:disabled,.disabled):active,.btn.btn-tertiary-default:not(:disabled,.disabled).active{color:#06534B}.btn.btn-tertiary-danger:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #A2001E}.btn.btn-tertiary-danger:not(:disabled,.disabled):hover{color:#A2001E}.btn.btn-tertiary-danger:not(:disabled,.disabled):active,.btn.btn-tertiary-danger:not(:disabled,.disabled).active{color:#900021}.btn.btn-tertiary-inverse:not(:disabled,.disabled):focus:not(:active,.active){outline:none;box-shadow:0 0 0 2px #0A8276, 0 0 0 4px #FFFFFF}.btn.btn-tertiary-inverse:not(:disabled,.disabled):hover{color:#EEEDED}.btn.btn-tertiary-inverse:not(:disabled,.disabled):active,.btn.btn-tertiary-inverse:not(:disabled,.disabled).active{color:#BFBBBB}";

const Button = /*@__PURE__*/ proxyCustomElement(class Button extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.variant = 'primary';
    this.theme = 'default';
    this.size = 'm';
    this.disabled = false;
    this.internalHref = undefined;
    this.href = undefined;
    this.target = '_self';
    this.type = "button";
  }
  setInternalHref(newValue) {
    this.internalHref = newValue;
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  insertNativeButton() {
    this.nativeButton = document.createElement('button');
    this.nativeButton.type = this.type;
    this.nativeButton.style.display = 'none';
    this.el.closest('form').appendChild(this.nativeButton);
  }
  handleFormAndInternalHref() {
    if (this.el.closest('form')) {
      if (this.el.href) {
        this.el.internalHref = undefined;
      }
      this.insertNativeButton();
    }
    else {
      this.internalHref = this.href;
    }
  }
  componentWillLoad() {
    this.handleFormAndInternalHref();
  }
  handleClick() {
    if (!this.disabled) {
      if (this.nativeButton) {
        if (this.type === 'reset') {
          this.resetClickHandler(); //this will reset all ifx-text-fields within a form
        }
        this.nativeButton.click(); //clicking the nativeButton on type reset will include standard input type text as well
      }
    }
  }
  resetClickHandler() {
    const formElement = this.el.closest('form');
    const customElements = formElement.querySelectorAll('ifx-text-field');
    customElements.forEach(element => {
      element.reset();
    });
  }
  handleKeyDown(ev) {
    if (ev.key === 'Enter') {
      this.handleClick();
    }
  }
  handleFocus(event) {
    // the anchor element should not be focusable when it's disabled
    if (this.disabled) {
      event.preventDefault();
      this.focusableElement.blur();
    }
  }
  render() {
    return (h(Host, null, h("a", { tabIndex: 0, ref: (el) => (this.focusableElement = el), class: this.getClassNames(), href: !this.disabled ? this.internalHref : undefined, target: this.target, onClick: this.handleClick.bind(this), rel: this.target === '_blank' ? 'noopener noreferrer' : undefined, onFocus: (event) => this.handleFocus(event), "aria-disabled": this.disabled, "aria-labelledby": "label" }, h("slot", null))));
  }
  getVariantClass() {
    return `${this.variant}` === "secondary"
      ? `secondary-${this.theme}`
      : `${this.variant}` === 'tertiary'
        ? `tertiary-${this.theme}`
        : `${this.theme}`;
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
    return classnames('btn', this.size && `btn-${this.getSizeClass()}`, `btn-${this.getVariantClass()}`, this.disabled ? 'disabled' : '');
  }
  get el() { return this; }
  static get watchers() { return {
    "href": ["setInternalHref"]
  }; }
  static get style() { return buttonCss; }
}, [1, "ifx-button", {
    "variant": [1],
    "theme": [1],
    "size": [1],
    "disabled": [4],
    "href": [1],
    "target": [1],
    "type": [1],
    "internalHref": [32],
    "setFocus": [64]
  }, [[0, "keydown", "handleKeyDown"]], {
    "href": ["setInternalHref"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Button);
      }
      break;
  } });
}

export { Button as B, defineCustomElement as d };

//# sourceMappingURL=button.js.map