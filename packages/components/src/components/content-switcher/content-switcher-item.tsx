import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-content-switcher-item',
  styleUrl: './content-switcher-item.scss',
  shadow: true,
})
export class ContentSwitcherItem {
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host>
        <button class={'ifx-content-switcher-item' + (this.selected ? ' selected' : '')}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
