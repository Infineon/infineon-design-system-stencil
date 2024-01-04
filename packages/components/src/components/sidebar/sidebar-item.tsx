import { Component, h, Prop, Element, State, Listen, Watch, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'ifx-sidebar-item',
  styleUrl: 'sidebar-item.scss',
  shadow: true
})
export class SidebarItem {
  @Element() el;
  @Prop() icon: string = ""
  @State() hasIcon: boolean = false;
  @State() hasIconWrapper: boolean = false;
  @Prop() href: string = "";
  @State() internalHref: string = "";
  @Prop() target: string = "_self";
  @State() isExpandable: boolean = false;
  @State() isNested: boolean = true;
  @Prop() numberIndicator: number;
  @Prop() active: boolean = false; // set to true manually or by clicking on a navigation item
  @Prop() isActionItem: boolean = false; // if an item is an action item, it can not become active

  @State() internalActiveState: boolean = false;
  @Event() ifxSidebarItem: EventEmitter;
  @Event() ifxSidebarNavigationItem: EventEmitter;
  @Event() ifxSidebarActionItem: EventEmitter;

  @Prop() value: string = ""
  @Prop() handleItemClick: (item: HTMLElement) => void;


  @Watch('active')
  handleActiveChange(newValue: boolean, oldValue: boolean) {
    // If the item is an action item, ignore the active prop
    if (this.isActionItem) {
      this.internalActiveState = false;
      return;
    }
    this.internalActiveState = newValue;
    if (newValue !== oldValue) {
      let labelElement = this.getNavItem(this.el.shadowRoot)
      if (!this.isExpandable && !newValue) {
        this.handleClassList(labelElement, 'remove', 'active');
      }
      if (!this.isExpandable && newValue) {
        this.handleClassList(labelElement, 'add', 'active');
      }
    }
  }



  @Listen('consoleError')
  handleConsoleError(event: CustomEvent<boolean>) {
    if (event.detail) {
      this.hasIcon = false;
    } else {
      this.hasIcon = true;
    }
  }

  handleEventEmission() {
    // Get the active item section
    this.ifxSidebarItem.emit(this.el)
  }

  handleClassList(el, type, className) {
    el.classList[type](className)
    if (type === 'contains') {
      return el.classList.contains(className)
    }
  }

  getExpandableMenu() {
    const expandableSubmenu = this.el.shadowRoot.querySelector('.expandable__submenu')
    return expandableSubmenu
  }

  getNavItem(el) {
    return el?.querySelector('.sidebar__nav-item')
  }



  getSidebarMenuItems(el = this.el) {
    const sidebarItems = el.querySelectorAll('ifx-sidebar-item');
    if (sidebarItems.length === 0) {
      return el.shadowRoot.querySelectorAll('ifx-sidebar-item');
    }
    return sidebarItems;
  }

  getSidebarMenuItem() {
    const sidebarItem = this.el.shadowRoot.querySelector('.sidebar__nav-item')
    return sidebarItem;
  }

  toggleSubmenu() {
    if (this.isExpandable) {
      const menuItem = this.getSidebarMenuItem();
      const expandableMenu = this.getExpandableMenu();
      this.handleClassList(expandableMenu, 'toggle', 'open');
      this.handleClassList(menuItem, 'toggle', 'open');

    } else {
      // If the sidebar item is not expandable, it's a leaf item without a submenu.
      // Emit an event to the parent `ifx-sidebar` component to notify it that a leaf item has been clicked.
      if (this.isActionItem) { //its an action item that eg opens an overlay etc and should not influence the active state of the item
        this.ifxSidebarActionItem.emit(this.el); // emit new event if isActionItem is true
        return;
      } else { //its a navigation item which becomes active after clicking it
        this.handleActiveChange(true, this.internalActiveState)
        this.ifxSidebarNavigationItem.emit(this.el);
        // If the sidebar item is selectable (not expandable), then call the handler function with the current element.
        if (this.handleItemClick) {
          this.handleItemClick(this.el);
        }
      }

    }
    // Emit an event with the current component
    this.handleEventEmission();
  }



  handleExpandableMenu(sidebarItems) {
    const sidebarExpandableMenu = this.getExpandableMenu();
    sidebarItems.forEach((el: HTMLElement) => {
      const li = document.createElement('li')
      li.appendChild(el)
      sidebarExpandableMenu.appendChild(li)
    })
  }

  parentElementIsSidebar() {
    const parentElement = this.el.parentElement;
    if (parentElement.tagName.toUpperCase() === 'IFX-SIDEBAR') {
      return true;
    } else return false;
  }

  checkIfMenuItemIsNested() {
    const parentIsSidebar = this.parentElementIsSidebar()
    if (parentIsSidebar) {
      this.isNested = false;
    }
  }

  isActive(iteratedComponent) {
    const activeAttributeValue = iteratedComponent.getAttribute('active');
    const isActive = activeAttributeValue === 'true';
    return isActive
  }

  getParentSection(el: HTMLElement) {
    let parentElement = el.parentElement;

    while (parentElement && parentElement.tagName.toUpperCase() !== 'IFX-SIDEBAR') {
      if (parentElement.tagName.toUpperCase() === 'IFX-SIDEBAR-ITEM') {
        return parentElement;
      }
      parentElement = parentElement.parentElement;
    }

    return null;
  }



  handleBorderIndicatorDisplacement(menuItem) {
    // Recursive function to handle each item
    const handleItem = (item, menuItem) => {
      const isActive = this.isActive(item);
      if (isActive) {
        const isOpen = this.handleClassList(menuItem, 'contains', 'open');
        const activeMenuItemSection = this.getActiveItemSection();
        if (!isOpen) {
          this.handleClassList(activeMenuItemSection, 'add', 'active-section');
        } else {
          this.handleClassList(activeMenuItemSection, 'remove', 'active-section');
        }
      }

      // Process each child item
      const children = this.getSidebarMenuItems(item);
      children.forEach((child) => handleItem(child, menuItem));
    }

    // Start with the top-level items
    const topLevelItems = this.getSidebarMenuItems();
    topLevelItems.forEach((item) => handleItem(item, menuItem));
  }


  setHref() {
    if (this.href.toLowerCase().trim() === "") {
      this.internalHref = undefined;
    } else this.internalHref = this.href;
  }

  getActiveItemSection() {
    const parentIsSidebar = this.parentElementIsSidebar()
    if (parentIsSidebar) {
      const labelElement = this.getNavItem(this.el.shadowRoot)
      return labelElement;
    } else {
      const labelElement = this.getNavItem(this.el.shadowRoot)
      return labelElement;
    }
  }

  @Method()
  async setActiveClasses() {
    const activeMenuItem = this.getNavItem(this.el.shadowRoot)
    this.handleClassList(activeMenuItem, 'add', 'active')
  }

  handleActiveState() {
    if (this.internalActiveState) {
      this.setActiveClasses()
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.toggleSubmenu()
    }
  }

  componentDidLoad() {
    this.handleActiveState();
    if (this.isExpandable) {
      const sidebarItems = this.getSidebarMenuItems();
      this.handleExpandableMenu(sidebarItems)
    }
  }

  componentWillLoad() {
    this.internalActiveState = this.active;
    this.checkIfMenuItemIsNested();
    this.setHref()
    const sidebarItems = this.getSidebarMenuItems();
    if (sidebarItems.length !== 0) {
      this.isExpandable = true;
    } else {
      this.isExpandable = false;
    }
  }

  componentWillUpdate() {
    // If the active prop has been set to true and the internalActiveState has not been set to true yet
    if (this.active && !this.internalActiveState) {
      // Set the internal active state to true
      this.internalActiveState = this.active;

      // Emit the event to notify the parent Sidebar
      this.ifxSidebarNavigationItem.emit(this.el);
    }
  }


  render() {
    return (
      <div>
        <a tabIndex={1} onKeyDown={(event) => this.handleKeyDown(event)} href={this.internalHref} onClick={() => this.toggleSubmenu()} target={this.target} class={`sidebar__nav-item ${!this.isNested && this.isExpandable ? 'header__section' : ""}`}>
          {this.icon &&
            <div class={`sidebar__nav-item-icon-wrapper ${!this.hasIcon ? 'noIcon' : ""}`}>
              <ifx-icon icon={this.icon}></ifx-icon>
            </div>}
          <div class="sidebar__nav-item-label">
            <slot />
          </div>
          <div class="sidebar__nav-item-indicator">
            {this.isExpandable &&
              <span class='item__arrow-wrapper'>
                <ifx-icon icon="chevron-down-12" />
              </span>
            }

            {!this.isExpandable && !this.isNested &&
              <span class='item__number-indicator'>
                <ifx-number-indicator>{this.numberIndicator}</ifx-number-indicator>
              </span>}

          </div>
        </a>
        {this.isExpandable && <ul class='expandable__submenu'></ul>}

      </div>
    );
  }
}
