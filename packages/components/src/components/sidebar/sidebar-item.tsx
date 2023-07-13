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

  @Listen('consoleError')
  handleConsoleError(event: CustomEvent<boolean>) { 
    if(event.detail) { 
      this.hasIcon = false;
    } else { 
      this.hasIcon = true;
    }
  }

  render() {
    return (
      <a href={this.href} target={this.target} class='sidebar__nav-item'>
        {this.icon &&
          <div class={`sidebar__nav-item-icon-wrapper ${!this.hasIcon ? 'noIcon' : ""}`}>
            <ifx-icon icon={this.icon}></ifx-icon>
          </div>}
        <div class="sidebar__nav-item-label">
          <slot />
        </div>
        {/* <div class="sidebar__nav-item-number">
          <ifx-number-indicator>7</ifx-number-indicator>
        </div> */}
      </a>
    );
  }
}