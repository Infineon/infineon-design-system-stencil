import { Component, Prop, h, Element, State } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-menu',
  styleUrl: '../../index.scss',
  shadow: true
})

export class DropdownMenu {

  @Prop() label: string;
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: boolean = false;
  @Prop() search: boolean = false;
  @Prop() filter: boolean = false;
  @State() isShown: boolean = true;
  @Element() el;

  componentWillRender() {
    const isInsideDropdown = this.el.closest('ifx-dropdown')
    if (isInsideDropdown) {
      this.isShown = false;
    }
  }


  render() {
    return (
      <div class={`dropdown-menu ${this.isShown ? 'show nested' : ""} ${this.icon ? 'showIcon' : ""}`}>
        <slot />
      </div>
    )
  }
}