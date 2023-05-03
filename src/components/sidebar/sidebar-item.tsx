import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-sidebar-item',
  styleUrl: '../../index.scss',
  shadow: true
})
export class SidebarItem {
  @Prop() icon: string = ""

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