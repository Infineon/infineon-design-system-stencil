import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const tagCss = "*{font-family:\"Source Sans 3\"}:host{display:inline-flex}.container{display:inline-flex;align-items:center;padding:4px 16px;border:1px solid #BFBBBB;border-radius:9999px;background-color:#FFFFFF;gap:8px}.container:hover{cursor:pointer;border-color:#8D8786}.container:active,.container.active{border-color:#1D1D1D}.container:focus:not(:active,.active){outline:none;border-color:#1D1D1D}.container .label-wrapper{text-decoration:none}.container .label-wrapper .label{margin:0;font-weight:400;font-size:1rem;font-family:\"Source Sans 3\";line-height:20px;color:#1D1D1D}";

const Tag = /*@__PURE__*/ proxyCustomElement(class Tag extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = undefined;
  }
  render() {
    return (h("div", { "aria-label": "a tag", class: "container" }, this.icon && (h("ifx-icon", { icon: this.icon })), h("a", { href: "javascript:void(null);", class: "label-wrapper" }, h("p", { class: "label" }, h("slot", null)))));
  }
  static get style() { return tagCss; }
}, [1, "ifx-tag", {
    "icon": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-tag", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-tag":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tag);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxTag = Tag;
const defineCustomElement = defineCustomElement$1;

export { IfxTag, defineCustomElement };

//# sourceMappingURL=ifx-tag.js.map