// dropdown-menu.tsx
import { Component, h, Element, State, Listen } from "@stencil/core";

@Component({
  tag: 'ifx-navbar-menu',
  styleUrl: 'navbar-menu.scss',
  shadow: true
})

export class NavbarMenu {
  @Element() el;
  @State() isOpen: boolean = true;
  @State() menu: HTMLElement;

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const path = event.composedPath();
    const menu = this.el.closest('ifx-navbar').shadowRoot.querySelector('.navbar__container-left-content-navigation-dropdown-menu');
    console.log(path === menu) //why?
    if (!path.includes(this.el)) {
      //this.isOpen = false;
    }
  }

  render() {
    return (
      <div class={`navbar-menu ${this.isOpen ? 'show' : ''} `}>
        <slot />
      </div >
    );
  }
}