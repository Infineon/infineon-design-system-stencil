//ifxTabs.tsx
import { Component, h, Prop, State, Element } from '@stencil/core';

export type TabOrientation = 'horizontal' | 'vertical';


@Component({
  tag: 'ifx-tabs',
  styleUrl: 'ifxTabs.scss',
  shadow: true
})

export class IfxTabs {
  @Element() el: HTMLElement;
  @Prop() tabs: string[] = [];
  @Prop() orientation: TabOrientation = 'horizontal';
  @Prop() small: boolean = false;
  @State() activeTabIndex: number = 0;

  tabRefs: HTMLElement[] = [];

  setActiveTab(index: number) {
    this.activeTabIndex = index;
    const borderElement = this.el.shadowRoot.querySelector('.active-border') as HTMLElement;

    if (borderElement) {
      if (this.orientation === 'horizontal') {
        borderElement.style.left = `${this.tabRefs[index].offsetLeft}px`;
        borderElement.style.width = `${this.tabRefs[index].offsetWidth}px`;
        borderElement.style.top = '';
        borderElement.style.height = '';
      } else {
        borderElement.style.top = `${this.tabRefs[index].offsetTop}px`;
        borderElement.style.height = `${this.tabRefs[index].offsetHeight}px`;
        borderElement.style.left = '';
        borderElement.style.width = '';
      }
    }
  }

  componentDidLoad() {
    this.setActiveTab(this.activeTabIndex);
  }

  render() {
    return (
      <div class={`tabs ${this.orientation} ${this.small ? 'small' : ''}`}>
        <ul class="tabs-list">
          {this.tabs.map((tab, index) => (
            <li
              ref={(el) => (this.tabRefs[index] = el as HTMLElement)}
              class={`tab-item ${index === this.activeTabIndex ? 'active' : ''}`}
              onClick={() => this.setActiveTab(index)}
            >
              {tab}
            </li>
          ))}
          <div class="active-border"></div>
        </ul>
        <div class="tab-content">
          {this.tabs.map((_, index) => (
            <div style={{ display: index === this.activeTabIndex ? 'block' : 'none' }}>
              <slot name={`tab-content-${index}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}