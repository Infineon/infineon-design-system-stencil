// dropdown-menu.tsx
import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-menu',
  styleUrl: 'dropdown-menu.scss',
  shadow: true
})

export class DropdownMenu {
  @Prop() isOpen: boolean = false;
  render() {
    return (
      <div class={`dropdown-menu${this.isOpen ? ' show' : ''}`}>
        <slot />
      </div >
    );
  }
}