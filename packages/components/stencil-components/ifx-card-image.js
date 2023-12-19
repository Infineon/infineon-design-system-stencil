import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const cardImageCss = ".card-image{width:100%;height:100%;vertical-align:bottom;object-fit:cover}";

const CardImage = /*@__PURE__*/ proxyCustomElement(class CardImage extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.imgPosition = createEvent(this, "imgPosition", 7);
    this.src = undefined;
    this.alt = undefined;
    this.position = undefined;
  }
  handlePosition(position) {
    this.imgPosition.emit(position);
  }
  componentWillLoad() {
    this.handlePosition(this.position);
  }
  componentDidUpdate() {
    this.handlePosition(this.position);
  }
  render() {
    return (h("img", { src: this.src, alt: this.alt, class: "card-image" }));
  }
  static get style() { return cardImageCss; }
}, [1, "ifx-card-image", {
    "src": [1],
    "alt": [1],
    "position": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-card-image"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-card-image":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CardImage);
      }
      break;
  } });
}

const IfxCardImage = CardImage;
const defineCustomElement = defineCustomElement$1;

export { IfxCardImage, defineCustomElement };

//# sourceMappingURL=ifx-card-image.js.map