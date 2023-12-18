import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const listGroupCss = ":host{display:inline-flex}.list-group-container{display:inline-flex;flex-direction:column;gap:3px}";

const ListGroup = /*@__PURE__*/ proxyCustomElement(class ListGroup extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.flush = false;
    this.bulletpoint = false;
    this.notification = false;
  }
  render() {
    return (h(Host, null, h("div", { class: `list-group-container 
        ${this.flush ? 'flush' : ""} 
        ${this.bulletpoint ? 'bulletpoint' : ""}` }, h("slot", { name: 'list-item' }), h("slot", { name: "list-notification" }))));
  }
  get el() { return this; }
  static get style() { return listGroupCss; }
}, [1, "ifx-list-group", {
    "flush": [4],
    "bulletpoint": [4],
    "notification": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-list-group"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-list-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ListGroup);
      }
      break;
  } });
}

const IfxListGroup = ListGroup;
const defineCustomElement = defineCustomElement$1;

export { IfxListGroup, defineCustomElement };

//# sourceMappingURL=ifx-list-group.js.map