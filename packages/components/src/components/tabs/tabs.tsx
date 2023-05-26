//ifxTabs.tsx
import { Component, h, Prop, State, Element, Listen, Watch, Event, EventEmitter } from '@stencil/core';

export type TabOrientation = 'horizontal' | 'vertical';


@Component({
  tag: 'ifx-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})

export class IfxTabs {
  @Element() el: HTMLElement;
  @Prop() tabs: string[] = [];
  @Prop() orientation: TabOrientation = 'horizontal';
  @Prop() small: boolean = false;
  @State() activeTabIndex: number = 0;

  @State()
  tabRefs: HTMLElement[] = [];
  @State()
  tabHeaderRefs: HTMLElement[] = [];
  @State()
  tabTitles: string[] = [];


  @Event() tabChange: EventEmitter;

  // changing tab
  setActiveTab(index: number) {
    if (index < 0 || index >= this.tabHeaderRefs.length) {
      return;
    } else {
      const currentActiveTab = this.tabRefs[this.activeTabIndex] as HTMLIfxTabElement;
      if (currentActiveTab) {
        this.emitEvent(currentActiveTab, 'tabBecameInactive');
      }


      this.tabChange.emit({ oldTabIndex: this.activeTabIndex, newTabIndex: index });
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
    this.tabRefs = Array.from(tabs);
    this.tabRefs.forEach((tab, index) => {
      tab.setAttribute('slot', `tab-${index}`);
    });
  }

  // initially get all the slots
  componentDidLoad() {
    this.onSlotChange();
  }

  componentDidRender() {
    this.reRenderBorder()
  }

  render() {
    return (
      <div class={`tabs ${this.orientation} ${this.small ? 'small' : ''}`}>
        <ul class="tabs-list">
          {this.tabTitles.map((tabTitle, index) => (
            <li
              class={`tab-item ${index === this.activeTabIndex ? 'active' : ''}`}
              ref={(el) => (this.tabHeaderRefs[index] = el)}
              onClick={() => this.setActiveTab(index)}
            >
              {tabTitle}
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