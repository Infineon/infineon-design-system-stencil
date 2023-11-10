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
    const menuItem = this.getSidebarMenuItem()
    const expandableMenu = this.getExpandableMenu()
    expandableMenu.classList.toggle('open')
    menuItem.classList.toggle('open')
  }

  handleExpandableMenu(sidebarItems) { 
      const sidebarExpandableMenu = this.getExpandableMenu();
      sidebarItems.forEach((el: HTMLElement) => { 
          const li = document.createElement('li')
          li.appendChild(el)
          sidebarExpandableMenu.appendChild(li)
        })
  }

  checkMenuItemLayer() { 
    const parentElement = this.el.parentElement;
    if(parentElement.tagName.toUpperCase() === 'IFX-SIDEBAR') { 
      this.isNested = false;
    }
  }

  componentDidLoad() { 
    const sidebarItems = this.getSidebarMenuItems();
    if(this.isExpandable) { 
      this.handleExpandableMenu(sidebarItems)
    }
  }

  componentWillLoad() { 
    this.checkMenuItemLayer()
    this.internalHref = this.href;
    const sidebarItems = this.getSidebarMenuItems();
    if(sidebarItems.length !== 0) { 
      this.isExpandable = true;
      this.internalHref = undefined;
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