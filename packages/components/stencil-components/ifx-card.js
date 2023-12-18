import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cardCss = "*{font-family:\"Source Sans 3\"}:host{display:inline-flex}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#FFFFFF;background-clip:border-box;border:1px solid #EEEDED;border-radius:1px;width:350px;height:auto}.card.linkHovered{border-color:#EEEDED}.card.cardHovered{border-color:#0A8276}.card.noBtns .vertical .lower__body-wrapper{padding-bottom:24px}.card.noBtns .horizontal .lower__body-wrapper{padding-bottom:24px}.card:hover{cursor:pointer}.card .horizontal{display:flex;flex-direction:row;min-height:218px}.card .horizontal .card-img{flex:1;text-decoration:none}.card .horizontal .card-img.noImage{display:none}.card .horizontal .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .horizontal .lower__body-wrapper{flex:1;display:grid;grid-template-rows:1fr auto}.card .horizontal .lower__body-wrapper .upper-body{display:flex;flex-direction:column;text-decoration:none;color:#1D1D1D;padding:24px 24px 0px 24px}.card .vertical .upper__body-wrapper{text-decoration:none;color:#1D1D1D}.card .vertical .upper__body-wrapper .card-img{height:190px}.card .vertical .upper__body-wrapper .card-img.noImage{display:none}.card .vertical .upper__body-wrapper .upper-body{padding:24px 24px 0px 24px}.card .vertical .lower__body-wrapper:hover{border-color:#EEEDED}.card.horizontal{flex-direction:row;width:538px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.left .horizontal .card-img{order:1}.card.horizontal.left .horizontal .lower__body-wrapper{order:2}.card:focus,.card:focus-visible,.focus{outline:none;border-color:#0A8276 !important}";

const Card = /*@__PURE__*/ proxyCustomElement(class Card extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.noBtns = undefined;
    this.direction = 'vertical';
    this.alignment = undefined;
    this.noImg = undefined;
    this.href = "";
    this.target = "_self";
  }
  setImgPosition(event) {
    this.alignment = event.detail;
  }
  handleComponentAdjustment() {
    var _a;
    const image = this.el.querySelector('ifx-card-image');
    const links = this.el.querySelector('ifx-card-links');
    if (!image) {
      this.noImg = true;
    }
    else
      this.noImg = false;
    if (!links) {
      this.noBtns = true;
    }
    else
      this.noBtns = false;
    if (this.href && ((_a = this.href) === null || _a === void 0 ? void 0 : _a.trim()) === "") {
      this.href = undefined;
    }
  }
  handleClassList(el, type, className) {
    el.classList[type](className);
  }
  handleHovering() {
    const card = this.el.shadowRoot.querySelector('.card');
    let cardHeadline = this.el.querySelector('ifx-card-headline');
    card.addEventListener('mouseover', (ev) => {
      // const target = ev.target;
      // const relatedTarget = ev.relatedTarget;
      // if (relatedTarget && relatedTarget !== target && !target.contains(relatedTarget)) {
      //   this.handleClassList(card, 'add', 'borderHovered')
      // }
      if (ev.target.nodeName === 'IFX-CARD-LINKS' || ev.target.nodeName === 'IFX-BUTTON') {
        this.handleClassList(card, 'add', 'linkHovered');
      }
      else {
        this.handleClassList(card, 'add', 'cardHovered');
        if (cardHeadline) {
          cardHeadline.isHovered = true;
        }
      }
    });
    card.addEventListener('mouseout', () => {
      if (cardHeadline) {
        cardHeadline.isHovered = false;
      }
      //this.handleClassList(card, 'remove', 'borderHovered')
      this.handleClassList(card, 'remove', 'cardHovered');
      this.handleClassList(card, 'add', 'linkHovered');
    });
  }
  componentWillLoad() {
    this.handleComponentAdjustment();
  }
  componentDidLoad() {
    this.handleHovering();
    this.addEventListenersToHandleCustomFocusState();
  }
  addEventListenersToHandleCustomFocusState() {
    const element = this.el.shadowRoot;
    if (!element) {
      console.error('element not found');
      return;
    }
    const upperBodyWrapper = element.querySelector('.upper__body-wrapper');
    if (!upperBodyWrapper) {
      console.error('upper body wrapper not found');
      return;
    }
    element.tabIndex = -1;
    upperBodyWrapper.tabIndex = -1;
  }
  componentWillUpdate() {
    this.handleComponentAdjustment();
  }
  render() {
    return (h(Host, null, h("div", { "aria-labelledby": "label", class: `card 
          ${this.noBtns ? 'noBtns' : ""}
          ${this.direction} 
          ${this.alignment}` }, this.direction === 'horizontal' &&
      h("div", { class: "horizontal" }, h("a", { class: `card-img ${this.noImg ? 'noImage' : ""}`, href: this.href }, h("slot", { name: "img" })), h("div", { class: 'lower__body-wrapper' }, h("a", { class: 'upper-body', href: this.href }, h("slot", null)), h("div", null, h("slot", { name: 'buttons' })))), this.direction === 'vertical' &&
      h("div", { class: "vertical" }, h("a", { class: 'upper__body-wrapper', href: this.href, target: this.target }, h("div", { class: `card-img ${this.noImg ? 'noImage' : ""}` }, h("slot", { name: "img" })), h("div", { class: 'upper-body' }, h("slot", null))), h("div", { class: 'lower__body-wrapper' }, h("slot", { name: 'buttons' }))))));
  }
  get el() { return this; }
  static get style() { return cardCss; }
}, [1, "ifx-card", {
    "direction": [1],
    "href": [1],
    "target": [1],
    "noBtns": [32],
    "alignment": [32],
    "noImg": [32]
  }, [[0, "imgPosition", "setImgPosition"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-card"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Card);
      }
      break;
  } });
}

const IfxCard = Card;
const defineCustomElement = defineCustomElement$1;

export { IfxCard, defineCustomElement };

//# sourceMappingURL=ifx-card.js.map