// dropdown-item.tsx
import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: 'ifx-navbar-menu-item',
  styleUrl: 'navbar-menu-item.scss',
  shadow: true
})

export class NavbarMenuItem {

  @Prop() href: string = ""
  @Prop() target: string = "_self"
  @Prop() hide: boolean = false;

  
  render() {
    let hrefAttr = this.href ? { href: this.href, target: this.target } : {};
    return (
      <a {...hrefAttr} class={`navbar__menu-item  ${this.hide ? 'hide' : ""}`}>
        <span>
          <slot />
        </span>
      </a>
    );
  }
}