//ifxTabs.tsx
import { Component, h, Prop, State, Element, Listen, Watch, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'ifx-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})

export class IfxTabs {
  @Element() el: HTMLElement;
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
  @Event() ifxTabChange: EventEmitter;


  @Watch('activeTabIndex')
  onActiveTabIndexChange(newIndex: number, oldIndex: number) {
    this.internalPrevActiveTabIndex = oldIndex;
    this.internalActiveTabIndex = newIndex;
  }


  // changing tab
  @Method()
  async setActiveTab(index: number) {
    const prevActiveTab = this.internalActiveTabIndex;
    this.internalActiveTabIndex = index;

    if (this.tabObjects[this.internalActiveTabIndex]?.disabled) {

      // Reset to previously active tab
      if (!this.tabObjects[prevActiveTab]?.disabled) {
        this.internalActiveTabIndex = prevActiveTab;
        this.activeTabIndex = prevActiveTab;
        return;
      }
    }

    if (this.internalActiveTabIndex < 0 || this.internalActiveTabIndex >= this.tabHeaderRefs.length) {
      return;
    } else {
      this.ifxTabChange.emit({ previousTab: prevActiveTab, currentTab: this.internalActiveTabIndex });
      this.internalActiveTabIndex = this.internalActiveTabIndex;
    }
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
    this.addEventListenersToHandleCustomFocusAndActiveState();
    this.updateTabFocusability();
  }

  componentDidUpdate() {
    this.reRenderBorder();
    this.updateTabFocusability();
  }

  private updateTabFocusability() {
    this.tabHeaderRefs.forEach((tab, index) => {
      tab.tabIndex = index === this.internalActiveTabIndex ? 0 : -1;
    })
  }

  private addEventListenersToHandleCustomFocusAndActiveState() {
    const element = this.el.shadowRoot?.querySelector('.tabs-list') as HTMLElement;
    if (!element) {
      console.error('Tabs list not found');
      return;
    }


    element.addEventListener('keydown', (event: KeyboardEvent) => {
      const key = event.key;
      switch (key) {
        case 'ArrowLeft':
          this.focusPreviousTab();
          break;
        case 'ArrowRight':
          this.focusNextTab();
          break;
        case 'Tab':
          this.handleTabKeyPress(event);
          break;
        case 'Home':
          event.preventDefault();
          this.setActiveTab(0);
          const firstTab = this.tabHeaderRefs[0];
          firstTab.focus();
          break;
        case 'End':
          event.preventDefault();
          this.setActiveTab(this.tabHeaderRefs.length - 1);
          const lastTab = this.tabHeaderRefs[this.tabHeaderRefs.length - 1];
          lastTab.focus();
          break;
        default:
          break;
      }

    });

  }

  private focusNextTab() {
    let nextIndex = this.internalActiveTabIndex + 1;
    while (nextIndex < this.tabHeaderRefs.length && this.tabObjects[nextIndex].disabled) {
      nextIndex++;
    }
    if (nextIndex < this.tabHeaderRefs.length) {
      this.setActiveTab(nextIndex);
      this.tabHeaderRefs[nextIndex].focus();
    }
  }

  private focusPreviousTab() {
    let prevIndex = this.internalActiveTabIndex - 1;
    while (prevIndex >= 0 && this.tabObjects[prevIndex].disabled) {
      prevIndex--;
    }
    if (prevIndex >= 0) {
      this.setActiveTab(prevIndex);
      this.tabHeaderRefs[prevIndex].focus();
    }
  }

  private handleTabKeyPress(event: KeyboardEvent) {
    if (!event.shiftKey) {
      event.preventDefault() //prevent default tabbing behavior
      const activeContent = this.el.shadowRoot?.querySelector(`.tab-content > div:nth-child(${this.internalActiveTabIndex + 1})`) as HTMLElement;
      if (activeContent) {
        activeContent.setAttribute('tabIndex', '0'); //ensure tab content ia focusable
        activeContent.focus(); //focus on the content of the active tab
      }
    }
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
              onKeyUp={event => {
                if (event.key === 'Enter') {
                  this.setActiveTab(index);
                }
              }}
              tabindex="0"
              aria-selected={index === this.internalActiveTabIndex ? 'true' : 'false'}
              aria-disabled={tab.disabled ? 'true' : 'false'}
              // onFocus={(event) => console.log("focussing, ", event.target)}

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