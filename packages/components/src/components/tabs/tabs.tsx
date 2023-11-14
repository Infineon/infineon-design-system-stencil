//ifxTabs.tsx
import { Component, h, Prop, State, Element, Listen, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})

export class IfxTabs {
  @Element() el: HTMLElement;
  @Prop() tabs: string[] = [];
  @Prop() orientation: string = ""
  @State() internalOrientation: string;
  @State() activeTabIndex: number = 0;
  @State() tabRefs: HTMLElement[] = [];
  @State() tabHeaderRefs: HTMLElement[] = [];
  @State() tabTitles: string[] = [];
  @State() disabledTabs: string[] = [];
  @State() tabObjects: any[] = [];
  @Event() ifxTabIndex: EventEmitter;

  // changing tab
  setActiveTab(index: number) {
    if (index < 0 || index >= this.tabHeaderRefs.length) {
      return;
    } else {
      const currentActiveTab = this.tabRefs[this.activeTabIndex] as HTMLIfxTabElement;
      if (currentActiveTab) {
        this.emitEvent(currentActiveTab, 'tabBecameInactive');
      }


      this.ifxTabIndex.emit({ previousTab: this.activeTabIndex, currentTab: index });
      this.activeTabIndex = index;

      const newActiveTab = this.tabRefs[index] as HTMLIfxTabElement;
      if (newActiveTab) {
        this.emitEvent(newActiveTab, 'tabBecameActive');
      }
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
    if (borderElement && this.tabHeaderRefs[this.activeTabIndex]) {
      if (this.orientation === 'horizontal') {

        borderElement.style.left = `${this.tabHeaderRefs[this.activeTabIndex].offsetLeft}px`;
        borderElement.style.width = `${this.tabHeaderRefs[this.activeTabIndex].offsetWidth}px`;
        borderElement.style.top = '';
        borderElement.style.height = '';
      } else {
        borderElement.style.top = `${this.tabHeaderRefs[this.activeTabIndex].offsetTop}px`;
        borderElement.style.height = `${this.tabHeaderRefs[this.activeTabIndex].offsetHeight}px`;
        borderElement.style.left = '';
        borderElement.style.width = '';
      }
    }
  }

  @Watch('orientation')
  onOrientationChange() {
    this.reRenderBorder()
  }

  // when a slot is removed / added
  @Listen('slotchange')
  onSlotChange() {
    const tabs = this.el.querySelectorAll('ifx-tab');
    this.tabTitles = Array.from(tabs).map((tab) => tab.getAttribute('header'));
    this.disabledTabs = Array.from(tabs).map((tab) => tab.getAttribute('disabled'));

    this.tabObjects = this.tabTitles.map((header, index) => {
      return {
        header: header,
        disabled: (this.disabledTabs[index] === 'true') // set disabled property based on the corresponding value in the disabledTabs array
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
          {this.tabObjects.map((tab, index) => (
            <li
              class={`tab-item ${index === this.activeTabIndex ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}`}
              ref={(el) => (this.tabHeaderRefs[index] = el)}
              onClick={() => this.setActiveTab(index)}
            >
              {tab.header}
            </li>
          ))}
          <div class="active-border"></div>
        </ul>
        <div class="tab-content">
          {Array.from(this.tabTitles).map((_, index) => (
            <div style={{ display: index === this.activeTabIndex ? 'block' : 'none' }}>
              <slot name={`tab-${index}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}