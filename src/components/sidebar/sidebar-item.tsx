import { Component, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'ifx-sidebar-item',
  styleUrl: '../../index.scss',
  shadow: true
})
export class SidebarItem {
  @Element() el;
  @Prop() icon: string = ""
  @State() hasIcon: boolean = false;

  componentDidLoad() { 
    //sidebar__nav-item-icon-wrapper
    const iconWrapper = this.el.shadowRoot.querySelector('.sidebar__nav-item-icon-wrapper')
    if(!iconWrapper) { 
      //no icon
      this.hasIcon = false;
    } else this.hasIcon = true;
  }

  render() {
    return (
      <div class='sidebar__nav-item'>
       {this.icon && 
        <div class="sidebar__nav-item-icon-wrapper">
        <ifx-icon icon={this.icon}></ifx-icon>
      </div>}
        <div class="sidebar__nav-item-label">
          <slot />
        </div>
        {/* <div class="sidebar__nav-item-number">
          <ifx-number-indicator>7</ifx-number-indicator>
        </div> */}
      </div>
    );
  }
}