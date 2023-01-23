import { Component, Prop, h, Element } from "@stencil/core";

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
  @Element() el;
  
  
  render() {
    return (
      <div class={`dropdown-menu ${this.icon ? 'showIcon' : ""}`}>
        <slot />
      </div>
    )
  }
}