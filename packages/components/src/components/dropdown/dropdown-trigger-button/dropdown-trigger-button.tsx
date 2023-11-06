// dropdown-trigger-button.tsx
import { Component, Prop, h } from "@stencil/core";
import { IOpenable } from '../IOpenable';

@Component({
  tag: 'ifx-dropdown-trigger-button',
  styleUrl: 'dropdown-trigger-button.scss',
  shadow: true
})

export class DropdownItem implements IOpenable {
  @Prop() isOpen: boolean = false;

  @Prop() theme: 'default' | 'danger' | 'inverse' = 'default';
  @Prop() variant: 'primary';
  @Prop() size: 's' | 'm' = 'm';
  @Prop() disabled: boolean;
  @Prop() hideArrow: boolean = false;

  render() {
    return (
      <ifx-button
        variant={this.variant}
        theme={this.theme}
        size={this.size}
        disabled={this.disabled}
        class="dropdown-trigger-button"
      >
        <slot />
        {!this.hideArrow &&
          <ifx-icon icon="chevron-down-12" class={`icon${this.isOpen ? ' rotate' : ''}`} />
        }
      </ifx-button>
    )
  }
}