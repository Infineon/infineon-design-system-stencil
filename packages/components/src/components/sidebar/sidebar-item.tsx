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
  @Prop() active: boolean = false;
  @State() internalActiveState: boolean = false;
  @Event() ifxSidebarItem: EventEmitter;
  @Event() ifxSidebarActiveItem: EventEmitter;
  @Prop() value: string = ""

  @Watch('active')
  handleActiveChange(newValue: boolean, oldValue: boolean) { 
    this.internalActiveState = this.active;
    if(newValue !== oldValue) { 
      let labelElement = this.getNavItemLabel(this.el.shadowRoot)
      if(!this.isExpandable && !newValue) {
        this.handleClassList(labelElement, 'remove', 'active')
      }
      if(!this.isExpandable && newValue) {   
        this.ifxSidebarActiveItem.emit(this.el)
        this.handleClassList(labelElement, 'add', 'active')
      }
    }
  }

  @Listen('consoleError')
  handleConsoleError(event: CustomEvent<boolean>) { 
    if(event.detail) { 
      this.hasIcon = false;
    } else { 
      this.hasIcon = true;
    }
  }

  handleEventEmission() { 
    this.ifxSidebarItem.emit({value: this.value, component: this.el})
  }

  handleClassList(el, type, className) {
    el.classList[type](className)
    if(type === 'contains') { 
      return el.classList.contains(className)
    }
  }

  getExpandableMenu() { 
    const expandableSubmenu = this.el.shadowRoot.querySelector('.expandable__submenu')
    return expandableSubmenu
  }

  getNavItemLabel(el) { 
    return el?.querySelector('.sidebar__nav-item-label')
  }

  getSidebarMenuItems(el = this.el) { 
    const sidebarItems = el.querySelectorAll('ifx-sidebar-item');
    if(sidebarItems.length === 0) { 
      return el.shadowRoot.querySelectorAll('ifx-sidebar-item');
    }
    return sidebarItems;
  }

  getSidebarMenuItem() { 
    const sidebarItem = this.el.shadowRoot.querySelector('.sidebar__nav-item')
    return sidebarItem;
  }

  toggleSubmenu() { 
    this.handleEventEmission()
    if(this.isExpandable) { 
      const menuItem = this.getSidebarMenuItem()
      const expandableMenu = this.getExpandableMenu()
      this.handleClassList(expandableMenu, 'toggle', 'open')
      this.handleClassList(menuItem, 'toggle', 'open')
      const toggledComponentIsHeader = this.parentElementIsSidebar()
      if(toggledComponentIsHeader) { 
        this.handleBorderIndicatorDisplacement(menuItem)
      }
    }
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
    if(parentElement.tagName.toUpperCase() === 'IFX-SIDEBAR') { 
      return true;
    } else return false;
  }

  checkIfMenuItemIsNested() { 
    const parentIsSidebar = this.parentElementIsSidebar()
    if(parentIsSidebar) { 
      this.isNested = false;
    }
  }

  isActive(iteratedComponent) { 
    const activeAttributeValue = iteratedComponent.getAttribute('active');
    const isActive = activeAttributeValue === 'true';
    return isActive
  }

  handleBorderIndicatorDisplacement(menuItem) { 
    if(!this.internalActiveState) { 
      const sideBarItemChildren = this.getSidebarMenuItems()
      sideBarItemChildren.forEach((item) => { 
          const subChildren = this.getSidebarMenuItems(item)
          if(subChildren.length !== 0) { 
            subChildren.forEach((subItem) => {
              const isActive = this.isActive(subItem)
              if(isActive) { 
                const isOpen = this.handleClassList(menuItem, 'contains', 'open')
                const activeMenuItemSection = this.getActiveItemSection()
                if(!isOpen) { 
                  this.handleClassList(activeMenuItemSection, 'add', 'active-section')
                } else { 
                  this.handleClassList(activeMenuItemSection, 'remove', 'active-section')
                }
              }
            })
          }
      })
    }
  }

  setHref() { 
    if(this.href.toLowerCase().trim() === "") { 
      this.internalHref = undefined;
    } else this.internalHref = this.href;
  }

  getActiveItemSection() { 
    const parentIsSidebar = this.parentElementIsSidebar()
    if(parentIsSidebar) { 
      const labelElement = this.getNavItemLabel(this.el.shadowRoot)
      return labelElement;
    } else { 
      const labelElement = this.getNavItemLabel(this.el.parentElement.shadowRoot)
      return labelElement;
    }
  }

  @Method()
  async setActiveClasses(activeSection = null) { 
     const activeMenuItemSection = this.getActiveItemSection()
     const activeMenuItem = this.getNavItemLabel(this.el.shadowRoot)
     if(activeMenuItemSection) { 
       this.handleClassList(activeMenuItemSection, 'add', 'active-section')
     } else if(activeSection) { 
      const labelElement = this.getNavItemLabel(activeSection.shadowRoot)
      this.handleClassList(labelElement, 'add', 'active-section')
     }
     this.handleClassList(activeMenuItem, 'add', 'active')
  }

  handleActiveState() { 
    if(this.internalActiveState) { 
      this.setActiveClasses()
    }
  }

  componentDidLoad() { 
    const toggledComponentIsHeader = this.parentElementIsSidebar()
    if(toggledComponentIsHeader) { 
      const menuItem = this.getSidebarMenuItem()
      this.handleBorderIndicatorDisplacement(menuItem)
    }

    this.handleActiveState()
    if(this.isExpandable) { 
      const sidebarItems = this.getSidebarMenuItems();
      this.handleExpandableMenu(sidebarItems)
    }
  }

  componentWillLoad() { 
    this.internalActiveState = this.active;
    this.checkIfMenuItemIsNested()
    this.setHref()
    const sidebarItems = this.getSidebarMenuItems();
    if(sidebarItems.length !== 0) { 
      this.isExpandable = true;
    } else { 
      this.isExpandable = false;
    }
  }

  render() {
    return (
      <div>
        <a href={this.internalHref} onClick={() => this.toggleSubmenu()} target={this.target} class={`sidebar__nav-item ${!this.isNested && this.isExpandable ? 'header__section' : ""}`}>
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