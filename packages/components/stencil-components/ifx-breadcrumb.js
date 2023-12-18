import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const breadcrumbCss = "*{font-family:\"Source Sans 3\"}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:\"Source Sans 3\";font-size:0.875rem;align-items:flex-start}";

const Breadcrumb = /*@__PURE__*/ proxyCustomElement(class Breadcrumb extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  componentDidLoad() {
    const element = this.el.shadowRoot.firstChild;
    this.addEventListenersToHandleCustomFocusState(element);
  }
  addEventListenersToHandleCustomFocusState(element) {
    if (!element) {
      console.error('element not found');
      return;
    }
    element.tabIndex = -1;
    const slot = element.querySelector('slot');
    if (slot) {
      const assignedNodes = slot.assignedNodes();
      for (let i = 0; i < assignedNodes.length; i++) {
        const node = assignedNodes[i];
        if (node.nodeName === 'IFX-BREADCRUMB-ITEM') {
          const breadcrumbLabel = node;
          if (!breadcrumbLabel.hasAttribute('url')) {
            breadcrumbLabel.tabIndex = -1;
            breadcrumbLabel.addEventListener('focus', () => {
              if (breadcrumbLabel.hasAttribute('url')) {
                breadcrumbLabel.blur();
              }
            });
          }
        }
      }
    }
  }
  render() {
    return (h("nav", { "aria-label": "Page navigation breadcrumb" }, h("ol", { class: "breadcrumb" }, h("slot", null))));
  }
  get el() { return this; }
  static get style() { return breadcrumbCss; }
}, [1, "ifx-breadcrumb"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-breadcrumb"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-breadcrumb":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Breadcrumb);
      }
      break;
  } });
}

const IfxBreadcrumb = Breadcrumb;
const defineCustomElement = defineCustomElement$1;

export { IfxBreadcrumb, defineCustomElement };

//# sourceMappingURL=ifx-breadcrumb.js.map