import { Component, h } from '@stencil/core';

@Component({
  tag: 'ifx-sidebar-item',
  styleUrl: '../../index.scss',
  shadow: true
})
export class SidebarItem {
 

  render() {
    return (
      <div class='sidebar__nav-item'>
        <div class="sidebar__nav-item-icon-wrapper">
          <ifx-icon icon='image-16'></ifx-icon>
        </div>
        <div class="sidebar__nav-item-label">Menu Item</div>
        <div class="sidebar__nav-item-number">
          <ifx-number-indicator>7</ifx-number-indicator>
        </div>
      </div>
    );
  }
}