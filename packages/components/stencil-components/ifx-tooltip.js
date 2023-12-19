import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './infineonIconStencil.js';
import { c as createPopper } from './popper.js';

const tooltipCss = "*{font-family:\"Source Sans 3\"}:host{display:inline-flex}.tooltip__container{display:inline-flex;flex-direction:column;position:relative}.tooltip-extended,.tooltip-compact,.tooltip-dismissible{background-color:#1D1D1D;border:1px solid black;z-index:1;display:none;transition:opacity 0.3s;position:relative;font-family:Source Sans 3;font-size:14px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF}.visible.tooltip-extended,.visible.tooltip-compact,.visible.tooltip-dismissible{display:flex !important;align-items:center}.tooltip-dismissible{min-width:110px;width:auto}.tooltip-dismissible .close-button{cursor:pointer;position:relative;top:0px;order:2;padding-right:12px}.tooltip-dismissible .tooltip-dismissible-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-dismissible .tooltip-dismissible-header,.tooltip-dismissible .tooltip-dismissible-body{font-family:\"Source Sans 3\";font-size:14px;font-style:normal;line-height:20px}.tooltip-dismissible .tooltip-dismissible-header{font-weight:600}.tooltip-dismissible .tooltip-dismissible-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-extended{min-width:100px;width:auto;align-items:center;padding:12px;gap:10px}.tooltip-extended .extended_icon{display:flex;align-self:flex-start;align-items:center;cursor:pointer}.tooltip-extended .tooltip-extended-content{display:flex;flex-direction:column;gap:12px;flex-grow:1;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere}.tooltip-extended .tooltip-extended-header,.tooltip-extended .tooltip-extended-body{font-family:\"Source Sans 3\";font-size:14px;font-style:normal;line-height:20px}.tooltip-extended .tooltip-extended-header{font-weight:600}.tooltip-extended .tooltip-extended-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-extended>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;left:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;right:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-8px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-8px;left:10px}[data-placement=bottom-end].tooltip-extended>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-8px;right:10px}[data-placement=left].tooltip-extended>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-4px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-extended>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissible>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-4px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}";

const Tooltip = /*@__PURE__*/ proxyCustomElement(class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.popperInstance = null;
    this.onMouseEnter = () => {
      var _a, _b;
      // Enable the event listeners immediately
      (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.setOptions((options) => (Object.assign(Object.assign({}, options), { modifiers: [
          ...options.modifiers,
          { name: 'eventListeners', enabled: true },
        ] })));
      // Initialize the popper instance
      this.initializePopper();
      // Make the tooltip visible
      this.tooltipVisible = true;
      this.tooltipEl.style.display = 'block';
      // Update the popper instance immediately after initialization
      (_b = this.popperInstance) === null || _b === void 0 ? void 0 : _b.update();
    };
    this.onMouseLeave = () => {
      this.tooltipVisible = false;
      this.tooltipEl.style.display = 'none';
    };
    this.onClick = () => {
      var _a;
      if (this.variant.toLowerCase() === 'dismissible') {
        this.initializePopper();
        this.tooltipVisible = !this.tooltipVisible;
        this.tooltipEl.style.display = this.tooltipVisible ? 'block' : 'none';
        (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.update();
      }
    };
    this.tooltipVisible = false;
    this.header = '';
    this.text = '';
    this.position = 'auto';
    this.internalPosition = 'auto';
    this.variant = 'compact';
    this.icon = undefined;
  }
  componentWillLoad() {
    if (this.variant.toLowerCase().trim() === "") {
      this.variant = 'compact';
    }
  }
  initializePopper() {
    if (this.popperInstance)
      return;
    this.referenceEl = this.el;
    if (this.variant.toLowerCase() === 'compact') {
      this.tooltipEl = this.el.shadowRoot.querySelector('.tooltip-compact');
    }
    else if (this.variant.toLowerCase() === 'dismissible') {
      this.tooltipEl = this.el.shadowRoot.querySelector('.tooltip-dismissible');
    }
    else {
      this.tooltipEl = this.el.shadowRoot.querySelector('.tooltip-extended');
    }
    const effectivePosition = this.position === 'auto' ? this.determineBestPosition() : this.position;
    // Set the internalPosition
    this.internalPosition = effectivePosition;
    if (this.tooltipEl && this.referenceEl) {
      this.popperInstance = createPopper(this.referenceEl, this.tooltipEl, {
        placement: this.internalPosition,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8] // this offset should be adjusted to ensure the tooltip doesn't overlap its reference element
            }
          },
          {
            name: 'arrow',
            options: {
              element: '.tooltip-arrow-svg'
            }
          }
        ]
      });
    }
    // Add this line to set the 'data-placement' attribute on the tooltip
    this.tooltipEl.setAttribute('data-placement', effectivePosition);
  }
  determineBestPosition() {
    // This is a simplified version, you can enhance this based on available viewport space.
    const rect = this.referenceEl.getBoundingClientRect();
    const yOffset = window.scrollY; // Get current scroll position
    const xOffset = window.scrollX; // Get current horizontal scroll position
    const verticalHalfwayPoint = rect.top + yOffset + rect.height / 2;
    const horizontalHalfwayPoint = rect.left + xOffset + rect.width / 2;
    if (this.position === 'auto') {
      if (verticalHalfwayPoint > window.innerHeight / 2) {
        if (horizontalHalfwayPoint > window.innerWidth / 2) {
          return 'top-end';
        }
        else {
          return 'top-start';
        }
      }
      else {
        if (horizontalHalfwayPoint > window.innerWidth / 2) {
          return 'bottom-end';
        }
        else {
          return 'bottom-start';
        }
      }
    }
    else {
      return this.position;
    }
  }
  positionChanged(newVal) {
    var _a;
    this.internalPosition = newVal;
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    this.popperInstance = null; // Force re-initialization on next mouse enter
  }
  disconnectedCallback() {
    var _a;
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  render() {
    const tooltipDismissible = {
      'tooltip-dismissible': true,
      'visible': this.tooltipVisible,
    };
    const tooltipCompact = {
      'tooltip-compact': true,
      'visible': this.tooltipVisible,
    };
    const tooltipExtended = {
      'tooltip-extended': true,
      'visible': this.tooltipVisible,
    };
    const eventHandlers = this.variant.toLowerCase() === 'compact' || this.variant.toLowerCase() === 'extended' ? {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
    } : {
      onClick: this.onClick,
    };
    return (h("div", Object.assign({ "aria-label": "a tooltip showing important information", "aria-value": this.header, class: "tooltip__container" }, eventHandlers), h("slot", null), this.variant.toLowerCase() === 'dismissible' && h("div", { class: tooltipDismissible }, h("ifx-icon", { icon: "cross16", class: "close-button" }), h("div", { class: "tooltip-dismissible-content" }, this.header && h("div", { class: "tooltip-dismissible-header" }, this.header), h("div", { class: "tooltip-dismissible-body" }, this.text)), h("svg", { class: "tooltip-arrow-svg", width: "12", height: "8", viewBox: "0 0 12 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { id: "Indicator", d: "M6 0L12 8L0 8L6 0Z", fill: "#1D1D1D" }))), this.variant.toLowerCase() === 'compact' &&
      h("div", { class: tooltipCompact }, this.text, h("svg", { class: "tooltip-arrow-svg", width: "12", height: "8", viewBox: "0 0 12 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { id: "Indicator", d: "M6 0L12 8L0 8L6 0Z", fill: "#1D1D1D" }))), this.variant.toLowerCase() === 'extended' &&
      h("div", { class: tooltipExtended }, h("slot", { name: "icon" }, this.icon ? h("div", { class: "extended_icon" }, h("ifx-icon", { icon: this.icon })) :
        h("svg", { class: "extended_icon", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24" }, h("path", { stroke: "#fff", "stroke-linecap": "round", "stroke-linejoin": "round", d: "M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z" }), h("path", { stroke: "#fff", d: "M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z" }), h("path", { fill: "#fff", d: "M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" }))), h("div", { class: "tooltip-extended-content" }, this.header && h("div", { class: "tooltip-extended-header" }, this.header), h("div", { class: "tooltip-extended-body" }, this.text)), h("svg", { class: "tooltip-arrow-svg", width: "12", height: "8", viewBox: "0 0 12 8", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { id: "Indicator", d: "M6 0L12 8L0 8L6 0Z", fill: "#1D1D1D" })))));
  }
  get el() { return this; }
  static get watchers() { return {
    "position": ["positionChanged"]
  }; }
  static get style() { return tooltipCss; }
}, [1, "ifx-tooltip", {
    "header": [1],
    "text": [1],
    "position": [1],
    "variant": [1],
    "icon": [1],
    "tooltipVisible": [32],
    "internalPosition": [32]
  }, undefined, {
    "position": ["positionChanged"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-tooltip", "ifx-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-tooltip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tooltip);
      }
      break;
    case "ifx-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IfxTooltip = Tooltip;
const defineCustomElement = defineCustomElement$1;

export { IfxTooltip, defineCustomElement };

//# sourceMappingURL=ifx-tooltip.js.map