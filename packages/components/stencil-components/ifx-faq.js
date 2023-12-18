import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './accordion.js';
import { d as defineCustomElement$3 } from './accordionItem.js';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';

const faqCss = ".container{padding-top:10px}";

const Faq = /*@__PURE__*/ proxyCustomElement(class Faq extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: 'container' }, h("ifx-accordion", null, h("ifx-accordion-item", { caption: "What is the Infineon DDS?" }, "The Infineon Digital Design System consists of code components, design principles, tools and guidelines as well as a dedicated interdisciplinary team. Its purpose is to support internal and external colleagues create digital user interfaces with a high level of usability as well as a consistent expression of the Infineon brand. The DDS does not focus on the content of a web application but it describes how the design of the application\u2019s structure should be."), h("ifx-accordion-item", { caption: "How do I get access to the DDS?" }, "You can use the provided Figma file as a foundation for mockups and prototypes, use Storybook to view what UI components and variants are available and use code components provided via Storybook or Github."), h("ifx-accordion-item", { caption: "Can I integrate the Infineon DDS into my project?" }, "Yes, you can. We are happy to discuss with you which point in time and which scope of integration is bestsuited for updating your interface to the Infineon DDS. (To avoid that users get confused by a mixture of UI components, we recommend choosing larger updates or technology changes as opportunity to integrate the Infineon DDS.)"), h("ifx-accordion-item", { caption: "Are Infineon DDS components accessable?" }, "We have taken WCAG 2.0 Level AA as baseline level for all design decisions inside the Infineon Digital Design System. To make an online experience truly accessible you have to implement the specific code, content, and visual design according to the accessibility standard. Find an introduction to this topic here."), h("ifx-accordion-item", { caption: "How to request a new component?" }, "Please contact us like described in the contribution section! We are planning to expand the number of components continually. If your component is also usable for multiple other projects, there is a good chance we might work together with you."))));
  }
  static get style() { return faqCss; }
}, [1, "ifx-faq"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-faq", "ifx-accordion", "ifx-accordion-item", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-faq":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Faq);
      }
      break;
    case "ifx-accordion":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ifx-accordion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxFaq = Faq;
const defineCustomElement = defineCustomElement$1;

export { IfxFaq, defineCustomElement };

//# sourceMappingURL=ifx-faq.js.map