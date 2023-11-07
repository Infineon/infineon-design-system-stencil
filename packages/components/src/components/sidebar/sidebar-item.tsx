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
  @Prop() href: string = ""
  @Prop() target: string = "_self"
  @State() expandable: boolean = false;

  @Listen('consoleError')
  handleConsoleError(event: CustomEvent<boolean>) { 
    if(event.detail) { 
      this.hasIcon = false;
    } else { 
      this.hasIcon = true;
    }
  }

  toggleSubmenu() { 
    const sidebarExpandableMenu = this.el.shadowRoot.querySelector('.expandable__submenu')
    sidebarExpandableMenu.classList.toggle('open')
  }

  handleExpandableMenu(sidebarItems) { 
      const sidebarExpandableMenu = this.el.shadowRoot.querySelector('.expandable__submenu')
      sidebarItems.forEach((el: HTMLElement) => { 
          const li = document.createElement('li')
          li.appendChild(el)
          sidebarExpandableMenu.appendChild(li)
        })
  }

  componentDidLoad() { 
    const sidebarItems = Array.from(this.el.querySelectorAll('ifx-sidebar-item'));
    if(this.expandable) { 
      this.handleExpandableMenu(sidebarItems)
    }
  }

  componentWillLoad() { 
    const sidebarItems = Array.from(this.el.querySelectorAll('ifx-sidebar-item'));
    if(sidebarItems.length !== 0) { 
      this.expandable = true;
      this.href = undefined;
    } else { 
      this.expandable = false;
    }
  }

  render() {
    return (
      <div>
        <a href={this.href} target={this.target} class='sidebar__nav-item'>
          {this.icon &&
            <div class={`sidebar__nav-item-icon-wrapper ${!this.hasIcon ? 'noIcon' : ""}`}>
              <ifx-icon icon={this.icon}></ifx-icon>
            </div>}
          <div class="sidebar__nav-item-label" onClick={() => this.toggleSubmenu()}>
            <slot />
          </div>
          <div class="sidebar__nav-item-arrow">
            <ifx-icon icon="chevron-down-12" />
          </div>
        </a>
        {this.expandable && 
        <ul class='expandable__submenu'>

        </ul> }
        
      </div>
    );
  }
}