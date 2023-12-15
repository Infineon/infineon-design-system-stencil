import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const tabsCss = "*{font-family:\"Source Sans 3\"}:host{display:flex}.tabs{display:flex;font-family:\"Source Sans 3\"}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.tabs-list:focus-within .active-border{display:none}.active-border{content:\"\";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#0A8276}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tabs.vertical .tab-content{padding-top:0px;padding-left:32px}.tab-item{padding:8px 16px;cursor:pointer;position:relative}.tab-item:hover{color:#0A8276}.tab-item:active,.tab-item.active{color:#0A8276}.tab-item:focus,.tab-item.focus{outline:none;border-radius:1px;box-shadow:0 0 0 2px #FFFFFF, 0 0 0 4px #0A8276}.tab-item:focus+.active-border,.tab-item.focus+.active-border{display:none}.tab-item.disabled{color:#BFBBBB;pointer-events:none}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#0A8276}.tab-content{padding-top:24px;padding-left:0px;flex-grow:1}.tabs.small .tab-item{font-size:0.875rem}";

const IfxTabs$1 = /*@__PURE__*/ proxyCustomElement(class IfxTabs extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ifxTabChange = createEvent(this, "ifxTabChange", 7);
    this.tabs = [];
    this.orientation = "horizontal";
    this.activeTabIndex = 0;
    this.internalOrientation = undefined;
    this.internalActiveTabIndex = 0;
    this.internalFocusedTabIndex = 0;
    this.tabRefs = [];
    this.tabHeaderRefs = [];
    this.disabledTabs = [];
    this.tabObjects = [];
  }
  componentWillLoad() {
    this.internalOrientation = this.orientation.toLowerCase() === 'vertical' ? 'vertical' : 'horizontal';
    this.internalActiveTabIndex = this.activeTabIndex;
    this.internalFocusedTabIndex = this.internalActiveTabIndex;
  }
  activeTabIndexChanged(newValue, oldValue) {
    console.log('ACTIVE TAB INDEX');
    if (newValue !== oldValue) {
      this.internalActiveTabIndex = newValue;
      this.ifxTabChange.emit({ previousTab: oldValue, currentTab: newValue });
      this.updateTabStyles();
    }
  }
  updateTabStyles() {
    console.log("updating style");
    this.tabHeaderRefs.forEach((tab, index) => {
      tab.classList.toggle('active', index === this.internalActiveTabIndex);
      tab.setAttribute('aria-selected', index === this.internalActiveTabIndex ? 'true' : 'false');
    });
  }
  // needed for smooth border transition
  reRenderBorder() {
    const borderElement = this.el.shadowRoot.querySelector('.active-border');
    if (borderElement && this.tabHeaderRefs[this.internalActiveTabIndex]) {
      if (this.orientation === 'horizontal') {
        borderElement.style.left = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetLeft}px`;
        borderElement.style.width = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetWidth}px`;
        borderElement.style.top = '';
        borderElement.style.height = '';
      }
      else {
        borderElement.style.top = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetTop}px`;
        borderElement.style.height = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetHeight}px`;
        borderElement.style.left = '';
        borderElement.style.width = '';
      }
    }
  }
  // when a slot is removed / added
  onSlotChange() {
    const tabs = this.el.querySelectorAll('ifx-tab');
    this.tabObjects = Array.from(tabs).map((tab) => {
      return {
        header: tab === null || tab === void 0 ? void 0 : tab.header,
        disabled: (tab === null || tab === void 0 ? void 0 : tab.disabled) === true
      };
    });
    this.tabRefs = Array.from(tabs);
    this.tabRefs.forEach((tab, index) => {
      tab.setAttribute('slot', `tab-${index}`);
      tab.tabIndex = index === this.internalActiveTabIndex ? 0 : -1;
    });
  }
  setDefaultOrientation() {
    const validOrientations = ['horizontal', 'vertical'];
    const lowercaseOrientation = this.orientation.toLowerCase();
    if (!validOrientations.includes(lowercaseOrientation)) {
      this.internalOrientation = 'horizontal';
    }
    else
      this.internalOrientation = this.orientation;
  }
  componentDidLoad() {
    this.onSlotChange();
    this.updateBorderAndFocus();
  }
  componentDidUpdate() {
    this.updateBorderAndFocus();
  }
  updateBorderAndFocus() {
    this.reRenderBorder();
    this.updateTabFocusability();
  }
  updateTabFocusability() {
    this.tabHeaderRefs.forEach((tab, index) => {
      tab.tabIndex = index === this.internalActiveTabIndex ? 0 : -1;
    });
  }
  focusNextTab() {
    let nextIndex = this.internalFocusedTabIndex + 1;
    while (nextIndex < this.tabHeaderRefs.length && this.tabObjects[nextIndex].disabled) {
      nextIndex++;
    }
    this.internalFocusedTabIndex = nextIndex;
    if (nextIndex >= 0 && nextIndex < this.tabHeaderRefs.length) {
      this.tabHeaderRefs[nextIndex].focus();
    }
  }
  focusPreviousTab() {
    let prevIndex = this.internalFocusedTabIndex - 1;
    while ((prevIndex >= 0) && (this.tabObjects[prevIndex].disabled)) {
      prevIndex--;
    }
    this.internalFocusedTabIndex = prevIndex;
    if ((prevIndex >= 0) && (prevIndex < this.tabHeaderRefs.length)) {
      this.tabHeaderRefs[prevIndex].focus();
    }
  }
  getTabItemClass(index) {
    const isActive = index === this.internalActiveTabIndex && !this.tabObjects[index].disabled;
    const isDisabled = this.tabObjects[index].disabled;
    return `tab-item ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`;
  }
  handleKeyDown(ev) {
    if (ev.key === 'Tab') {
      if (ev.shiftKey) {
        // Shift + Tab
        if (this.internalFocusedTabIndex === 0) {
          // Allow default behavior to move focus out of component
          return;
        }
        else {
          ev.preventDefault();
          this.focusPreviousTab();
        }
      }
      else {
        // Tab
        if (this.internalFocusedTabIndex === this.tabHeaderRefs.length - 1) {
          // Allow default behavior to move focus out of component
          return;
        }
        else {
          ev.preventDefault();
          this.focusNextTab();
        }
      }
    }
    else if (ev.key === 'Enter') {
      if (this.internalFocusedTabIndex !== -1 && !this.tabObjects[this.internalFocusedTabIndex].disabled) {
        const previouslyActiveTabIndex = this.internalActiveTabIndex;
        this.internalActiveTabIndex = this.internalFocusedTabIndex;
        this.ifxTabChange.emit({ previousTab: previouslyActiveTabIndex, currentTab: this.internalFocusedTabIndex });
      }
    }
  }
  render() {
    var _a;
    return (h("div", { "aria-label": "navigation tabs", class: `tabs ${this.internalOrientation} selected#${this.internalActiveTabIndex}` }, h("ul", { role: "tablist", class: "tabs-list" }, (_a = this.tabObjects) === null || _a === void 0 ? void 0 :
      _a.map((tab, index) => (h("li", { class: this.getTabItemClass(index), ref: (el) => (this.tabHeaderRefs[index] = el), tabindex: "0", onClick: () => {
          if (!tab.disabled)
            this.internalActiveTabIndex = index;
        }, "aria-selected": index === this.internalActiveTabIndex ? 'true' : 'false', "aria-disabled": tab.disabled ? 'true' : 'false', role: "tab" }, tab === null || tab === void 0 ? void 0 : tab.header))), h("div", { class: "active-border" })), h("div", { class: "tab-content" }, Array.from(this.tabObjects).map((_, index) => (h("div", { style: { display: index === this.internalActiveTabIndex ? 'block' : 'none' } }, h("slot", { name: `tab-${index}` })))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "activeTabIndex": ["activeTabIndexChanged"]
  }; }
  static get style() { return tabsCss; }
}, [1, "ifx-tabs", {
    "tabs": [16],
    "orientation": [1],
    "activeTabIndex": [1026, "active-tab-index"],
    "internalOrientation": [32],
    "internalActiveTabIndex": [32],
    "internalFocusedTabIndex": [32],
    "tabRefs": [32],
    "tabHeaderRefs": [32],
    "disabledTabs": [32],
    "tabObjects": [32]
  }, [[0, "slotchange", "onSlotChange"], [0, "keydown", "handleKeyDown"]], {
    "activeTabIndex": ["activeTabIndexChanged"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ifx-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "ifx-tabs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IfxTabs$1);
      }
      break;
  } });
}

const IfxTabs = IfxTabs$1;
const defineCustomElement = defineCustomElement$1;

export { IfxTabs, defineCustomElement };

//# sourceMappingURL=ifx-tabs.js.map