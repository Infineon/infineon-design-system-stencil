// dropdown-trigger-button.tsx
import { Component, Prop, h } from "@stencil/core";
import { IOpenable } from '../IOpenable';

@Component({
  tag: 'ifx-dropdown-trigger-button',
  styleUrl: 'dropdown-trigger-button.scss',
  shadow: true
})

export class DropdownItem implements IOpenable {
  @Prop() icon: string;
  @Prop() isOpen: boolean = false;
  @Prop() variant: 'solid' | 'outline' | 'outline-text' = 'solid';
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';
  @Prop() size: 's' | 'm' = 'm';
  @Prop() disabled: boolean;
  @Prop() hideArrow: boolean = false;

  render() {
    return (
      <ifx-button icon={this.icon}
        variant={this.variant}
        color={this.color}
        size={this.size}
        disabled={this.disabled}
        class="dropdown-trigger-button"
      >
        <slot />
        {!this.hideArrow &&
          <ifx-icon icon="chevron-right-12" class={`icon${this.isOpen ? ' rotate' : ''}`} />
        }
      </ifx-button>
    )
  }
}