import { Component, h, Prop, State, Element, Listen, Event, EventEmitter, Watch } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';

@Component({
  tag: 'ifx-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})
export class IfxTabs {
  @Element() el: HTMLElement;

  @Prop() orientation: string = "horizontal";
  @Prop({ mutable: true }) activeTabIndex: number = 0;
  @Prop() fullWidth: boolean = false;

  @State() internalOrientation: string;
  @State() internalActiveTabIndex: number = 0;
  @State() internalFocusedTabIndex: number = 0;
  @State() tabRefs: HTMLElement[] = [];
  @State() tabHeaderRefs: HTMLElement[] = [];
  @State() disabledTabs: string[] = [];
  @State() tabObjects: any[] = [];

  @Event() ifxChange: EventEmitter;

  @Listen('resize', {target: 'window'})
  updateBorderOnWindowResize() {
    this.updateBorderAndFocus();
  }

  setActiveAndFocusedTab(index: number) {
    if (index >= this.tabObjects.length) {
      index = this.tabObjects.length - 1;
    }
    if (index < 0) {
      index = 0;
    }
    if (!this.tabObjects[index]?.disabled) {
      this.internalActiveTabIndex = index;
      this.internalFocusedTabIndex = index;
    }
  }

  @Listen('tabHeaderChange')
  handleTabHeaderChange(e) { 
    const tabIndex = e.target.getAttribute('slot').replace('tab-', '');
    this.tabObjects[tabIndex].header = e.detail;
    this.tabObjects = [...this.tabObjects]; 
  }
  

  @Watch('activeTabIndex')
  activeTabIndexChanged(newValue: number, oldValue: number) {
    if (newValue !== oldValue) {
      this.setActiveAndFocusedTab(newValue);
    }
  }

  componentWillLoad() {
    if(!isNestedInIfxComponent(this.el)) { 
      trackComponent('ifx-tabs')
    }
    this.internalOrientation = this.orientation.toLowerCase() === 'vertical' ? 'vertical' : 'horizontal';
    if (this.internalActiveTabIndex !== this.activeTabIndex) {
      this.ifxChange.emit({ previousTab: this.internalActiveTabIndex, currentTab: this.activeTabIndex });
    };
    this.onSlotChange();
    this.setActiveAndFocusedTab(this.activeTabIndex);
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
        disabled: tab?.disabled === true,
        icon: tab?.icon,
        iconPosition: tab?.iconPosition
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
    this.updateBorderAndFocus();
    // Add keyboard event listeners for each tab header
    this.tabHeaderRefs.forEach((tab, index) => {
      tab.addEventListener('focus', this.onTabFocus(index));
    });

  }

  onTabFocus(index) {
    return () => {
      this.internalFocusedTabIndex = index;
    };
  }

  disconnectedCallback() {
    // Remove keyboard event listeners when component is unmounted
    this.tabHeaderRefs.forEach((tab, index) => {
      tab.removeEventListener('focus', this.onTabFocus(index));
    });
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
    if (nextIndex >= 0 && nextIndex < this.tabHeaderRefs.length) {
      this.internalFocusedTabIndex = nextIndex;
      this.tabHeaderRefs[nextIndex].focus();
    }
  }

  private focusPreviousTab() {
    let prevIndex = this.internalFocusedTabIndex - 1;
    while ((prevIndex >= 0) && (this.tabObjects[prevIndex].disabled)) {
      prevIndex--;
    }
    if ((prevIndex >= 0) && (prevIndex < this.tabHeaderRefs.length)) {
      this.internalFocusedTabIndex = prevIndex;
      this.tabHeaderRefs[prevIndex].focus();
    }
  }


  private getTabItemClass(index: number) {
    const isActive = index === this.internalActiveTabIndex && !this.tabObjects[index].disabled;
    const isDisabled = this.tabObjects[index].disabled;
    const iconPosition = this.tabObjects[index].iconPosition
    return `tab-item ${this.fullWidth ? 'full-width' : ""} ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''} ${'icon__'+iconPosition}`;
  }

  private handleClick(tab, index) {
    this.ifxChange.emit({ previousTab: this.internalActiveTabIndex, currentTab: index })
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
      const path = ev.composedPath();
      const isTabHeader = path.some(el => this.tabHeaderRefs.includes(el as HTMLElement));
      if (!isTabHeader) {
        return;
      }
      
      if (this.internalFocusedTabIndex !== -1 && !this.tabObjects[this.internalFocusedTabIndex].disabled) {
        const previouslyActiveTabIndex = this.internalActiveTabIndex;
        this.internalActiveTabIndex = this.internalFocusedTabIndex;
        this.ifxChange.emit({ previousTab: previouslyActiveTabIndex, currentTab: this.internalFocusedTabIndex })
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
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => this.handleClick(tab, index)}
              aria-selected={index === this.internalActiveTabIndex ? 'true' : 'false'}
              aria-disabled={tab.disabled ? 'true' : 'false'}
              role="tab"
            > 
              {tab?.icon ? <ifx-icon icon = {tab.icon}></ifx-icon> : ''}
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