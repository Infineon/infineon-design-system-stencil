import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'ifx-dropdown-divider',
  styleUrl: './dropdown-divider.scss',
  shadow: true
})

export class DropdownDivider {
  @Element() el;

  render() {
    return (
      <div class="dropdown__divider-container">
        <div class="dropdown__divider-wrapper"></div>
      </div>
    );
  }
}