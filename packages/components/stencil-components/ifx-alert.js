import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const alertCss = "*{font-family:\"Source Sans 3\"}:host{display:block}.alert__info-wrapper{display:flex;padding:16px 24px}.alert__info-wrapper .info__text-wrapper{display:flex;flex-direction:column;gap:8px;width:100%}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper,.alert__info-wrapper .info__text-wrapper .info__description-wrapper{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:600;line-height:24px}.alert__info-wrapper .info__text-wrapper .info__headline-wrapper ::slotted(p),.alert__info-wrapper .info__text-wrapper .info__description-wrapper ::slotted(p){padding:0;margin:0}.alert__info-wrapper .info__text-wrapper .info__description-wrapper{font-weight:400}.alert__info-wrapper .close-icon-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.alert__info-wrapper .close-icon-wrapper a{line-height:0;color:#1D1D1D}.alert{display:flex;border:1px solid #0A8276;border-radius:1px;color:#1D1D1D;background-color:#FFFFFF}.alert .close-icon-wrapper{display:flex;align-items:center;justify-content:center;min-width:40px}.alert .close-icon-wrapper a{line-height:0;color:#1D1D1D}.alert .icon-wrapper{position:relative;min-width:48px;display:flex;justify-content:center;align-items:center;background-color:#0A8276}.alert .alert-text{font-size:16px;width:100%;padding:12px 0px 12px 12px;color:#1D1D1D;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.alert.primary{border:1px solid #0A8276}.alert.primary .icon-wrapper{background-color:#0A8276;color:#FFFFFF}.alert.secondary{border:1px solid #9C216E}.alert.secondary .icon-wrapper{background-color:#9C216E;color:#FFFFFF}.alert.danger{border:1px solid #CD002F}.alert.danger .icon-wrapper{background-color:#CD002F;color:#FFFFFF}.alert.warning{border:1px solid #E16B25}.alert.warning .icon-wrapper{background-color:#E16B25;color:#FFFFFF}";

const Alert = /*@__PURE__*/ proxyCustomElement(class Alert extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxClose = createEvent(this, "ifxClose", 7);
    this.variant = 'primary';
    this.icon = undefined;
  }
  handleClose() {
    this.ifxClose.emit();
  }
  render() {
    return (this.variant === 'info'
      ? h("div", { class: 'alert__info-wrapper' }, h("div", { class: 'info__text-wrapper' }, h("div", { class: "info__headline-wrapper" }, h("slot", { name: 'headline' })), h("div", { class: "info__description-wrapper" }, h("slot", { name: 'desc' }))), h("div", { class: "close-icon-wrapper" }, h("a", { href: "javascript:void(0);", onClick: this.handleClose.bind(this) }, h("ifx-icon", { icon: 'cross-16' }))))
      : h("div", { class: `alert ${this.variant}` }, this.icon && (h("div", { class: 'icon-wrapper' }, h("ifx-icon", { icon: this.icon }))), h("div", { class: "alert-text" }, h("slot", null)), h("div", { class: "close-icon-wrapper" }, h("a", { href: "javascript:void(0);", onClick: this.handleClose.bind(this) }, h("ifx-icon", { icon: 'cross-16' })))));
  }
  static get style() { return alertCss; }
}, [1, "ifx-alert", {
    "variant": [1],
    "icon": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-alert", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-alert":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Alert);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxAlert = Alert;
const defineCustomElement = defineCustomElement$1;

export { IfxAlert, defineCustomElement };

//# sourceMappingURL=ifx-alert.js.map