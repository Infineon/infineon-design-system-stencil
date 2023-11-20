//ifxTabs.tsx
import { Component, h, Prop, State, Element, Listen, Watch, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'ifx-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})

export class IfxTabs {
  @Element() el: HTMLElement;
  // @Prop() tabs: string[] = [];
  @Prop() tabs: { header: string, disabled?: boolean }[] = [];
  @Prop() orientation: string = ""
  @State() internalOrientation: string;
  @Prop() activeTabIndex: number = 0;
  @State() internalPrevActiveTabIndex: number = 0;
  @State() internalActiveTabIndex: number = 0;
  @State() tabRefs: HTMLElement[] = [];
  @State() tabHeaderRefs: HTMLElement[] = [];
  @State() tabTitles: string[] = [];
  @State() disabledTabs: string[] = [];
  @State() tabObjects: any[] = [];
  @Event() ifxTabIndex: EventEmitter;


  @Watch('activeTabIndex')
  onActiveTabIndexChange(newIndex: number, oldIndex: number) {
    // console.log(`watching activeTabIndex - change from ${oldIndex} to ${newIndex}`);
    this.internalPrevActiveTabIndex = oldIndex;
    this.internalActiveTabIndex = newIndex;
    this.activeTabIndex = this.internalActiveTabIndex;
  }


  // changing tab
  @Method()
  async setActiveTab(index: number) {
    const prevActiveTab = this.activeTabIndex;
    const nextActiveTab = index;

    if (this.tabObjects[nextActiveTab]?.disabled) {
      // console.log("current tab is disabled, stay on previous tab: ", prevActiveTab);

      // Reset to previously active tab
      if (!this.tabObjects[prevActiveTab]?.disabled) {
        this.internalActiveTabIndex = prevActiveTab;
        this.activeTabIndex = prevActiveTab;
        return;
      }
    }

    if (nextActiveTab < 0 || nextActiveTab >= this.tabHeaderRefs.length) {
      return;
    } else {
      this.ifxTabIndex.emit({ previousTab: prevActiveTab, currentTab: nextActiveTab });
      this.internalActiveTabIndex = nextActiveTab;
      this.activeTabIndex = nextActiveTab;
    }
  }
  // Helper method to emit events
  emitEvent(element: HTMLElement, eventName: string) {
    const event = new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
    });
    element.dispatchEvent(event);
  }

  // needed for smooth border transition
  reRenderBorder() {
    const borderElement = this.el.shadowRoot.querySelector('.active-border') as HTMLElement;
    if (borderElement && this.tabHeaderRefs[this.internalActiveTabIndex]) {
      if (this.orientation === 'horizontal') {

        borderElement.style.left = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetLeft}px`;
        borderElement.style.width = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetWidth}px`;
        borderElement.style.top = '';
        borderElement.style.height = '';
      } else {
        borderElement.style.top = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetTop}px`;
        borderElement.style.height = `${this.tabHeaderRefs[this.internalActiveTabIndex].offsetHeight}px`;
        borderElement.style.left = '';
        borderElement.style.width = '';
      }
    }
  }

  // @Watch('orientation') //not firing
  // onOrientationChange() {
  //   this.reRenderBorder()
  // }

  // when a slot is removed / added
  @Listen('slotchange')
  onSlotChange() {
    const tabs = this.el.querySelectorAll('ifx-tab');
    // console.log("slot change ")
    this.tabObjects = Array.from(tabs).map((tab) => {
      return {
        header: tab?.header === null ? tab?.getAttribute('header') !== null : tab.header,
        disabled: tab?.disabled === true // (tab.getAttribute('disabled') === 'true')
      }
    });

    this.tabRefs = Array.from(tabs);
    this.tabRefs.forEach((tab, index) => {
      tab.setAttribute('slot', `tab-${index}`);
    });
  }

  setDefaultOrientation() {
    const validOrientations = ['horizontal', 'vertical'];
    const lowercaseOrientation = this.orientation.toLowerCase();

    if (!validOrientations.includes(lowercaseOrientation)) {
      this.internalOrientation = 'horizontal';
    } else this.internalOrientation = this.orientation;
  }

  componentWillLoad() {
    this.setDefaultOrientation()
    this.onSlotChange();
  }

  componentDidLoad() {
    this.reRenderBorder()
  }

  componentDidUpdate() {
    this.reRenderBorder()
  }

  render() {
    return (
      <div aria-label="navigation tabs" class={`tabs ${this.internalOrientation}`}>
        <ul class="tabs-list">
          {this.tabObjects?.map((tab, index) => (
            <li
              class={`tab-item ${index === this.internalActiveTabIndex && !tab.disabled ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}`}
              ref={(el) => (this.tabHeaderRefs[index] = el)}
              onClick={() => this.setActiveTab(index)}
            >
              {tab?.header}
            </li>
          ))}
          <div class="active-border"></div>
        </ul>
        <div class="tab-content">
          {Array.from(this.tabObjects).map((_, index) => (
            <div style={{ display: index === this.internalActiveTabIndex ? 'block' : 'none' }}>
              <slot name={`tab-${index}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }

}