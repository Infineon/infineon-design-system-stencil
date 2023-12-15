import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { i as icons, d as defineCustomElement$2 } from './infineonIconStencil.js';

const iconsPreviewCss = ".container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:relative}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:\"Nunito Sans\";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:10000;content:\"copied!\";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}";

const IconsPreview = /*@__PURE__*/ proxyCustomElement(class IconsPreview extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.iconsArray = [];
    this.isCopied = false;
    this.copiedIndex = undefined;
    this.htmlTag = '<ifx-icon icon="calendar-16"></ifx-icon>';
    this.iconName = `"c-info-24"`;
  }
  handleCopiedText() {
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }
  copyIconText(icon) {
    this.htmlTag = `<ifx-icon icon="${icon}"></ifx-icon>`;
    this.iconName = `"${icon}"`;
  }
  copyHtmlString() {
    const copiedTag = `<ifx-icon icon=${this.iconName}></ifx-icon>`;
    navigator.clipboard.writeText(copiedTag);
    this.handleCopiedText();
  }
  componentWillLoad() {
    for (let icon in icons) {
      this.iconsArray.push(icon);
    }
  }
  render() {
    return (h("div", { class: 'container' }, h("div", { class: 'html-wrapper' }, h("span", { class: "html-tag" }, "<"), h("span", { class: "component-name" }, "ifx-icon"), h("span", { class: "attribute-name" }, " icon"), "=", h("span", { class: "attribute-value" }, this.iconName), h("span", { class: "html-tag" }, ">"), h("span", { class: "html-tag" }, "</"), h("span", { class: "component-name" }, "ifx-icon"), h("span", { class: "html-tag" }, ">"), h("button", { onClick: () => this.copyHtmlString() }, this.isCopied ? 'Copied' : 'Copy')), h("div", { class: "preview__container" }, this.iconsArray.map((icon, index) => h("div", { class: `preview__container-item ${this.isCopied && this.copiedIndex === index ? 'copied' : ""}`, onClick: () => this.copyIconText(icon) }, h("ifx-icon", { icon: icon }))))));
  }
  get el() { return this; }
  static get style() { return iconsPreviewCss; }
}, [1, "ifx-icons-preview", {
    "iconsArray": [32],
    "isCopied": [32],
    "copiedIndex": [32],
    "htmlTag": [32],
    "iconName": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-icons-preview", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-icons-preview":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IconsPreview);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxIconsPreview = IconsPreview;
const defineCustomElement = defineCustomElement$1;

export { IfxIconsPreview, defineCustomElement };

//# sourceMappingURL=ifx-icons-preview.js.map