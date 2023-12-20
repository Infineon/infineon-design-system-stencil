import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './number-indicator.js';

const listGroupItemCss = "@charset \"UTF-8\";.list-group-item{display:flex;align-items:center;justify-content:space-between;height:40px;width:350px;padding:8px 16px;background-color:#FFFFFF;border:1px solid #EEEDED;border-radius:1px 1px 0px 0px;font-style:normal;font-weight:400;font-size:1rem;line-height:1.5rem}.list-group-item.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-item.flush.bulletpoint{padding:8px}.list-group-item.bulletpoint .list-group-item-content::before{content:\"•\";display:inline-block;font-size:1.125rem;padding-right:10px}.list-group-item:hover:not(.show){background-color:#EEEDED}.list-group-item:active:not(.show){background-color:#0A8276;color:#FFFFFF}.list-group-item.show{display:block;height:88px;padding:16px}";

const ListGroupItem = /*@__PURE__*/ proxyCustomElement(class ListGroupItem extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.isFlush = false;
    this.hasBulletpoint = false;
    this.badge = false;
    this.badgeValue = 0;
  }
  componentWillLoad() {
    const ifxListGroup = this.el.closest('ifx-list-group');
    if (ifxListGroup.flush) {
      this.isFlush = true;
    }
    else
      this.isFlush = false;
    if (ifxListGroup.bulletpoint && !this.badge) {
      this.hasBulletpoint = true;
    }
    else
      this.hasBulletpoint = false;
  }
  render() {
    return (h("div", { class: `list-group-item 
        ${this.isFlush ? 'flush' : ""}
        ${this.hasBulletpoint ? 'bulletpoint' : ""}` }, h("div", { class: "list-group-item-content" }, h("slot", null)), this.badge && h("ifx-number-indicator", null, this.badgeValue)));
  }
  get el() { return this; }
  static get style() { return listGroupItemCss; }
}, [1, "ifx-list-item", {
    "isFlush": [1028, "is-flush"],
    "badge": [4],
    "badgeValue": [2, "badge-value"],
    "hasBulletpoint": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-list-item", "ifx-number-indicator"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListGroupItem);
      }
      break;
    case "ifx-number-indicator":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxListItem = ListGroupItem;
const defineCustomElement = defineCustomElement$1;

export { IfxListItem, defineCustomElement };

//# sourceMappingURL=ifx-list-item.js.map