import { Component, Prop, h, Element } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-option',
  styleUrl: '../../index.scss',
  shadow: true
})

export class DropdownOption {

  @Prop() label: string;
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: boolean = false;
  @Prop() search: boolean = false;
  @Prop() filter: boolean = false;
  @Element() el;


  render() {

    return  (
      <option>
        <slot />
      </option>
    )
  }
}