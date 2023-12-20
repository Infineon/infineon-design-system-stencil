import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const switchCss = "*{font-family:\"Source Sans 3\"}:host{display:inline-block;user-select:none}.container{padding:4px;display:flex;align-items:center;position:relative;width:40px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:20px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.container:focus{outline:4px solid #0A8276;outline-offset:2px}.container:focus:not(:focus-visible){outline:none}.container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.container.disabled{cursor:default}.switch_label-wrapper{margin-left:46px}.switch_label-wrapper label:hover{cursor:pointer}.switch_label-wrapper.disabled{color:#BFBBBB}.switch_checkbox-wrapper .switch{width:16px;height:16px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease}.switch_checkbox-wrapper .switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.switch_checkbox-wrapper .switch.checked{transform:translateX(20px);background-color:#FFFFFF}.switch_checkbox-wrapper .switch.checked.disabled{cursor:default}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.container.checked{background-color:#0A8276;border-color:#0A8276}.container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}";

const Switch = /*@__PURE__*/ proxyCustomElement(class Switch extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxChange = createEvent(this, "ifxChange", 7);
    this.value = false;
    this.name = '';
    this.disabled = false;
    this.internalValue = false;
  }
  componentWillLoad() {
    this.internalValue = this.value;
  }
  valueChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.internalValue = newValue;
    }
  }
  toggle() {
    if (this.disabled)
      return;
    this.internalValue = !this.internalValue;
    this.ifxChange.emit(this.internalValue);
  }
  handleKeyDown(event) {
    if (this.disabled)
      return;
    // If the pressed key is either 'Enter' or 'Space' 
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggle();
    }
  }
  render() {
    return (h("div", { class: `container ${this.internalValue ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}`, role: "switch", tabindex: "0", "aria-checked": this.internalValue ? 'true' : 'false', "aria-label": this.name, onClick: () => this.toggle(), onKeyDown: (event) => this.handleKeyDown(event) }, h("div", { class: "switch_checkbox-wrapper" }, h("input", { type: "checkbox", hidden: true, name: this.name, disabled: this.disabled, value: `${this.internalValue}` }), h("div", { class: `switch ${this.internalValue ? 'checked' : ''} ${this.disabled ? 'disabled' : ''}` })), h("div", { class: `switch_label-wrapper ${this.disabled ? 'disabled' : ''}` }, h("label", { htmlFor: "switch" }, h("slot", null)))));
  }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
  static get style() { return switchCss; }
}, [1, "ifx-switch", {
    "value": [4],
    "name": [1],
    "disabled": [4],
    "internalValue": [32]
  }, undefined, {
    "value": ["valueChanged"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-switch"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-switch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Switch);
      }
      break;
  } });
}

const IfxSwitch = Switch;
const defineCustomElement = defineCustomElement$1;

export { IfxSwitch, defineCustomElement };

//# sourceMappingURL=ifx-switch.js.map