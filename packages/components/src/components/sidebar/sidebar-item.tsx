import { Component, h, Prop, Element, State, Listen, Watch, Event, EventEmitter } from '@stencil/core';

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
    console.log('invoked')
    if(newValue !== oldValue) { 
      //console.log('active changed', this.el)
      //this.internalActiveState = newValue;
      let labelElement = this.el.shadowRoot.querySelector('.sidebar__nav-item-label');
      if(!this.isExpandable && !this.active) { //this I don't understand. Why? What we need to do is if the clicked element is not expandable and if it's not active, then you make it active, and then make every other component not active. This is for when a new item is clicked, and all existing ones are iterated 
        //over inside the parent, and turned 'false'
        labelElement.classList.remove('active')
        //this.internalActiveState = false  
      }

      if(!this.isExpandable && newValue) {   
        this.ifxSidebarActiveItem.emit(this.el)
        //console.log('active changed', this.el)
        //this.handleActiveState()
        //let labelElement = this.el.shadowRoot.querySelector('.sidebar__nav-item-label');
        labelElement.classList.add('active')
        //console.log('labelElement', labelElement)
      }
  
    }
    
   
    //console.log('internal active state', this.internalActiveState)
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
    if(this.isExpandable) { 
      //this.handleActiveState()
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

  handleBorderIndicatorDisplacement(menuItem) { 
  
    if(!this.internalActiveState) { 
      const sideBarItemChildren = this.getSidebarMenuItems()
      sideBarItemChildren.forEach((item) => { 
          const subChildren = this.getSidebarMenuItems(item)
          if(subChildren.length !== 0) { 
            subChildren.forEach((subItem) => {
              const activeAttribute = subItem.getAttribute('active')
              const isActive = activeAttribute === 'true';
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
      const labelElement = this.el.shadowRoot.querySelector('.sidebar__nav-item-label')
      return labelElement;
    } else { 
      //console.log('this.el.parentElement', this.el.parentElement)
      const labelElement = this.el.parentElement.shadowRoot.querySelector('.sidebar__nav-item-label')
      return labelElement;
    }
  }

  getActiveItem() { 
    let labelElement = this.el.shadowRoot.querySelector('.sidebar__nav-item-label');
    return labelElement;
  }

  setActiveClasses() { 
     const activeMenuItemSection = this.getActiveItemSection()
     const activeMenuItem = this.getActiveItem()
     this.handleClassList(activeMenuItemSection, 'add', 'active-section')
     this.handleClassList(activeMenuItem, 'add', 'active')
  }

  handleActiveState() { 
    if(this.internalActiveState) { 
      //console.log('internal active state', this.internalActiveState)
      //console.log('this el', this.el)
      this.setActiveClasses()
    }
  }

  componentWillUpdate() { 
    
    //console.log('invoked now')
    //this.handleActiveState()
    //this.handleActiveState()
    //console.log('active', this.active)
  }

  componentDidLoad() { 
    const toggledComponentIsHeader = this.parentElementIsSidebar()
    if(toggledComponentIsHeader) { 
      const menuItem = this.getSidebarMenuItem()
      this.handleBorderIndicatorDisplacement(menuItem)
    }

    this.handleActiveState()
    const sidebarItems = this.getSidebarMenuItems();
    if(this.isExpandable) { 
      this.handleExpandableMenu(sidebarItems)
    }
  }

  componentWillLoad() { 
    //this.handleActiveState()
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
        <a href={this.internalHref} onClick={() => this.handleEventEmission()} target={this.target} class={`sidebar__nav-item ${!this.isNested && this.isExpandable ? 'header__section' : ""}`}>
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