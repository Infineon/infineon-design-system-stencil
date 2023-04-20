import { Component, h, Element } from "@stencil/core";

@Component({
  tag: 'ifx-navbar-menu-item',
  styleUrl: '../../index.scss',
  shadow: true
})

export class NavbarMenuItem {

  @Element() el;




  render() {
    return (
      <div class="navbar__container-left-content-navigation-item">
        <a href="javascript:void(0)">Menu Item</a>
      </div>
    )
  }
}