import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const linkCss = "*{font-family:\"Source Sans 3\"}:host{display:inline-flex}.link{display:inline-flex;align-items:center;font-weight:400;font-size:1rem;text-decoration:none;color:#0A8276;gap:8px;line-height:1.6}.link:focus{outline-width:2px;outline-style:solid;outline-color:#0A8276;outline-offset:2px;border-radius:3px}.link.bold{font-weight:600}.link.bold:hover{text-decoration:underline}.link.bold:active{color:#08665C;font-style:normal;font-weight:600;text-decoration:underline}.link.underlined{text-decoration:underline;text-decoration-color:#0A8276;color:#1D1D1D}.link.underlined:hover{color:#0A8276}.link.underlined:active{color:#0A8276}.link.title{text-decoration:none;font-weight:600;color:#1D1D1D}.link.title:hover{color:#0A8276}.link.title:active{color:#08665C}.link.menu{font-weight:400;font-style:normal;line-height:26px;color:#1D1D1D}.link.menu:hover{color:#0A8276}.link.menu:active{color:#08665C}.link.small{font-size:0.875rem}.link.medium{font-size:1rem}.link.large{font-size:1.125rem}.link.extraLarge{font-size:1.25rem}.link.underline{text-decoration:underline}";

const Link = /*@__PURE__*/ proxyCustomElement(class Link extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.href = undefined;
    this.target = '_self';
    this.size = undefined;
    this.variant = 'bold';
  }
  render() {
    return (h("a", { "aria-label": 'a navigation link button', href: this.href, target: this.target, class: this.linkClassNames() }, h("slot", null)));
  }
  getSizeClass() {
    const small = this.size === 's' ? 'small' : null;
    const medium = this.size === 'm' ? 'medium' : null;
    const large = this.size === 'l' ? 'large' : null;
    const extraLarge = this.size === 'xl' ? 'extraLarge' : null;
    if (small) {
      return small;
    }
    else if (medium) {
      return medium;
    }
    else if (large) {
      return large;
    }
    else if (extraLarge && this.variant === 'underlined') {
      return 'large';
    }
    else if (extraLarge && this.variant !== 'underlined') {
      return extraLarge;
    }
    else
      return "";
  }
  getVariantClass() {
    const bold = this.variant === 'bold' ? 'bold' : null;
    const title = this.variant === 'title' ? 'title' : null;
    const underlined = this.variant === 'underlined' ? 'underlined' : null;
    const menu = this.variant === 'menu' ? 'menu' : null;
    if (bold) {
      return bold;
    }
    else if (title) {
      return title;
    }
    else if (underlined) {
      return underlined;
    }
    else if (menu) {
      return menu;
    }
    else
      return bold;
  }
  linkClassNames() {
    return classnames('link', 'primary', this.getVariantClass(), this.getSizeClass());
  }
  static get style() { return linkCss; }
}, [1, "ifx-link", {
    "href": [1],
    "target": [1],
    "size": [1],
    "variant": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-link"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Link);
      }
      break;
  } });
}

const IfxLink = Link;
const defineCustomElement = defineCustomElement$1;

export { IfxLink, defineCustomElement };

//# sourceMappingURL=ifx-link.js.map