import { Component, h, Prop, Element, State, Listen } from '@stencil/core';

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

  @Listen('consoleError')
  handleConsoleError(event: CustomEvent<boolean>) { 
    if(event.detail) { 
      this.hasIcon = false;
    } else { 
      this.hasIcon = true;
    }
  }

  getExpandableMenu() { 
    const expandableSubmenu = this.el.shadowRoot.querySelector('.expandable__submenu')
    return expandableSubmenu
  }

  getSidebarMenuItems() { 
    const sidebarItems = this.el.querySelectorAll('ifx-sidebar-item');
    return sidebarItems;
  }

  getSidebarMenuItem() { 
    const sidebarItem = this.el.shadowRoot.querySelector('.sidebar__nav-item')
    return sidebarItem;
  }

  toggleSubmenu() { 
    if(this.isExpandable) { 
      //this.handleActiveState()
      const menuItem = this.getSidebarMenuItem()
      const expandableMenu = this.getExpandableMenu()
      expandableMenu.classList.toggle('open')
      menuItem.classList.toggle('open')
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

  checkMenuItemLayer() { 
    const parentIsSidebar = this.parentElementIsSidebar()
    if(parentIsSidebar) { 
      this.isNested = false;
    }
  }

  handleBorderIndicatorDisplacement(menuItem) { 
    const sidebarItem = this.el.closest('ifx-sidebar-item')
    const sideBarItemChildren = sidebarItem.shadowRoot.querySelectorAll('ifx-sidebar-item')
  
    sideBarItemChildren.forEach((item) => { 
      const activeAttribute = item.getAttribute('active')
      const isActive = activeAttribute === 'true';
      if(isActive) { 
        const isOpen = menuItem.classList.contains('open')
        if(!isOpen) { 
          //this is empty?
        }
      } else {
        const subChildren = item.shadowRoot.querySelectorAll('ifx-sidebar-item')
        if(subChildren.length !== 0)
        subChildren.forEach((subItem) => { 
          const activeAttribute = subItem.getAttribute('active')
          const isActive = activeAttribute === 'true';
          if(isActive) { 
            const isOpen = menuItem.classList.contains('open')
            const activeMenuItemSection = this.getActiveItemSection()
            if(!isOpen) { 
              activeMenuItemSection.classList.add('active-section')
            } else { 
              activeMenuItemSection.classList.remove('active-section')
            }
          }
        })
      }
   
    })

  }

  setHref() { 
    if(this.href.toLowerCase().trim() === "") { 
      this.internalHref = undefined;
    } else this.internalHref = this.href;
  }

  getActiveItemSection() { 
    //grab parent wrapper, if not, return current
    const parentIsSidebar = this.parentElementIsSidebar()

    if(parentIsSidebar) { 
      const labelElement = this.el.shadowRoot.querySelector('.sidebar__nav-item-label')
      return labelElement;
    } else { 
      const labelElement = this.el.parentElement.shadowRoot.querySelector('.sidebar__nav-item-label')
      return labelElement;
    }
  }

  getActiveItem() { 
    const sidebar = this.el.closest('ifx-sidebar')
    const sidebarItems = Array.from(sidebar.querySelectorAll('ifx-sidebar-item'))
 
    for(let i = 0; i < sidebarItems.length; i++) { 
      let component = sidebarItems[i] as HTMLElement;
      const activeAttribute = component.getAttribute('active')
      const isActive = activeAttribute === 'true';
      if(isActive) { 
        let labelElement = component.shadowRoot.querySelector('.sidebar__nav-item-label');
        return labelElement;
      }
    }
  }

  setActiveClasses() { 
     const activeMenuItemSection = this.getActiveItemSection()
     const activeMenuItem = this.getActiveItem()
     activeMenuItemSection.classList.add('active-section')
     activeMenuItem.classList.add('active')
  }

  handleActiveState() { 
    if(this.active) { 
      this.setActiveClasses()
    }
  }

  componentWillUpdate() { 

  }

  componentDidLoad() { 
    this.handleActiveState()
    const sidebarItems = this.getSidebarMenuItems();
    if(this.isExpandable) { 
      this.handleExpandableMenu(sidebarItems)
    }
  }

  componentWillLoad() { 
    //this.handleActiveState()
    this.checkMenuItemLayer()
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
        <a href={this.internalHref} target={this.target} class={`sidebar__nav-item ${!this.isNested && this.isExpandable ? 'header__section' : ""}`}>
          {this.icon &&
            <div class={`sidebar__nav-item-icon-wrapper ${!this.hasIcon ? 'noIcon' : ""}`}>
              <ifx-icon icon={this.icon}></ifx-icon>
            </div>}
          <div class="sidebar__nav-item-label" onClick={() => this.toggleSubmenu()}>
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