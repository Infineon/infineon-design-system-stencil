//ifxTabs.tsx
import { Component, h, Prop, State, Element, Listen, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'ifx-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})
export class IfxTabs {
  @Element() el: HTMLElement;

  @Prop() tabs: { header: string, disabled?: boolean }[] = [];
  @Prop() orientation: string = "horizontal";
  @Prop({ mutable: true }) activeTabIndex: number = 0;

  @State() internalOrientation: string;
  @State() internalActiveTabIndex: number = 0;
  @State() internalFocusedTabIndex: number = 0;
  @State() tabRefs: HTMLElement[] = [];
  @State() tabHeaderRefs: HTMLElement[] = [];
  @State() disabledTabs: string[] = [];
  @State() tabObjects: any[] = [];

  @Event() ifxTabChange: EventEmitter;

  componentWillLoad() {
    this.internalOrientation = this.orientation.toLowerCase() === 'vertical' ? 'vertical' : 'horizontal';
    if (this.internalActiveTabIndex !== this.activeTabIndex) {
      this.ifxTabChange.emit({ previousTab: this.internalActiveTabIndex, currentTab: this.activeTabIndex });
    };
    this.internalActiveTabIndex = this.activeTabIndex;
    this.internalFocusedTabIndex = this.internalActiveTabIndex;
    this.updateTabStyles();
  }

  updateTabStyles() {
    this.tabHeaderRefs.forEach((tab, index) => {
      tab.classList.toggle('active', index === this.internalActiveTabIndex);
      tab.setAttribute('aria-selected', index === this.internalActiveTabIndex ? 'true' : 'false')
    });
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


  // when a slot is removed / added
  @Listen('slotchange')
  onSlotChange() {
    const tabs = this.el.querySelectorAll('ifx-tab');
    this.tabObjects = Array.from(tabs).map((tab) => {
      return {
        header: tab?.header,
        disabled: tab?.disabled === true
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

  componentDidLoad() {
    this.onSlotChange();
    this.updateBorderAndFocus();
  }

  componentDidUpdate() {
    this.updateBorderAndFocus();
  }

  private updateBorderAndFocus() {
    this.reRenderBorder()
    this.updateTabFocusability();
  }

  private updateTabFocusability() {
    this.tabHeaderRefs.forEach((tab, index) => {
      tab.tabIndex = index === this.internalActiveTabIndex ? 0 : -1;
    })
  }


  private focusNextTab() {
    let nextIndex = this.internalFocusedTabIndex + 1;
    while (nextIndex < this.tabHeaderRefs.length && this.tabObjects[nextIndex].disabled) {
      nextIndex++;
    }
    this.internalFocusedTabIndex = nextIndex;
    if (nextIndex >= 0 && nextIndex < this.tabHeaderRefs.length) {
      this.tabHeaderRefs[nextIndex].focus();
    }
  }

  private focusPreviousTab() {
    let prevIndex = this.internalFocusedTabIndex - 1;
    while ((prevIndex >= 0) && (this.tabObjects[prevIndex].disabled)) {
      prevIndex--;
    }
    this.internalFocusedTabIndex = prevIndex;
    if ((prevIndex >= 0) && (prevIndex < this.tabHeaderRefs.length)) {
      this.tabHeaderRefs[prevIndex].focus();
    }
  }

  private getTabItemClass(index: number) {
    const isActive = index === this.internalActiveTabIndex && !this.tabObjects[index].disabled;
    const isDisabled = this.tabObjects[index].disabled;
    return `tab-item ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`;
  }

  private handleClick(tab, index) {
    this.ifxTabChange.emit({ previousTab: this.internalActiveTabIndex, currentTab: index })
    if (!tab.disabled) this.internalActiveTabIndex = index;

  }



  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Tab') {
      if (ev.shiftKey) {
        // Shift + Tab
        if (this.internalFocusedTabIndex === 0) {
          // Allow default behavior to move focus out of component
          return;
        } else {
          ev.preventDefault();
          this.focusPreviousTab();
        }
      } else {
        // Tab
        if (this.internalFocusedTabIndex === this.tabHeaderRefs.length - 1) {
          // Allow default behavior to move focus out of component
          return;
        } else {
          ev.preventDefault();
          this.focusNextTab();
        }
      }
    } else if (ev.key === 'Enter') {
      if (this.internalFocusedTabIndex !== -1 && !this.tabObjects[this.internalFocusedTabIndex].disabled) {
        const previouslyActiveTabIndex = this.internalActiveTabIndex;
        this.internalActiveTabIndex = this.internalFocusedTabIndex;
        this.ifxTabChange.emit({ previousTab: previouslyActiveTabIndex, currentTab: this.internalFocusedTabIndex })
      }
    }
  }


  render() {
    return (
      <div aria-label="navigation tabs" class={`tabs ${this.internalOrientation}`}>
        <ul role="tablist" class="tabs-list">
          {this.tabObjects?.map((tab, index) => (
            <li
              class={this.getTabItemClass(index)}
              ref={(el) => (this.tabHeaderRefs[index] = el)}
              tabindex="0"
              onClick={() => this.handleClick(tab, index)}
              aria-selected={index === this.internalActiveTabIndex ? 'true' : 'false'}
              aria-disabled={tab.disabled ? 'true' : 'false'}
              role="tab"
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