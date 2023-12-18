import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const statusCss = "*{font-family:\"Source Sans 3\"}:host{display:inline-block}.container{display:flex;min-height:1.25em;align-items:center;padding:0 8px;border-radius:9999px}.container.no-border{padding:0}.container.border-orange{border:1px solid #E16B25}.container.border-ocean{border:1px solid #0A8276}.container.border-grey{border:1px solid #575352}.container.border-light-grey{border:1px solid #BFBBBB}.container.border-red{border:1px solid #CD002F}.container.border-green{border:1px solid #4CA460}.container.border-berry{border:1px solid #9C216E}.text{margin:0;padding-left:4px;font-style:normal;font-weight:600;font-size:1rem;line-height:1.25rem;display:inline;color:#1D1D1D}.dot{display:inline-block;width:8px;height:8px;border-radius:9999px}.dot.orange{background-color:#E16B25}.dot.ocean{background-color:#0A8276}.dot.grey{background-color:#575352}.dot.light-grey{background-color:#BFBBBB}.dot.red{background-color:#CD002F}.dot.green{background-color:#4CA460}.dot.berry{background-color:#9C216E}";

const Status = /*@__PURE__*/ proxyCustomElement(class Status extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.label = undefined;
    this.border = false;
    this.color = 'orange';
  }
  render() {
    const containerClass = this.border ? `container border-${this.color}` : 'container no-border';
    return (h("div", { "aria-label": "a status indicator", "aria-value": this.label, class: containerClass }, h("span", { class: `dot ${this.color}` }), h("p", { class: "text" }, this.label)));
  }
  static get style() { return statusCss; }
}, [1, "ifx-status", {
    "label": [1],
    "border": [4],
    "color": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-status"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-status":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Status);
      }
      break;
  } });
}

const IfxStatus = Status;
const defineCustomElement = defineCustomElement$1;

export { IfxStatus, defineCustomElement };

//# sourceMappingURL=ifx-status.js.map