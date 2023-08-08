// dropdown-menu.tsx
import { Component, h, Element, State } from "@stencil/core";

@Component({
  tag: 'ifx-navbar-menu',
  styleUrl: 'navbar-menu.scss',
  shadow: true
})

export class NavbarMenu {
  @Element() el;
  @State() menu: HTMLElement;

  render() {
    return (
      <div class='navbar-menu'>
        <slot />
      </div >
    );
  }
}