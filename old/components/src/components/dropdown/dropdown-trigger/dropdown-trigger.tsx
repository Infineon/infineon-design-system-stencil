// dropdown-trigger-button.tsx
import { Component, Prop, h } from "@stencil/core";
import { IOpenable } from '../IOpenable';

@Component({
  tag: 'ifx-dropdown-trigger',
  styleUrl: 'dropdown-trigger.scss',
  shadow: true
})

export class DropdownItem implements IOpenable {
  @Prop() isOpen: boolean = false;

  render() {
    return (
      <slot />
    )
  }
}