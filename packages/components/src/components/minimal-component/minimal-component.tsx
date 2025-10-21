import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'minimal-component',
  styleUrl: 'minimal-component.scss',
  shadow: true,
})
export class MinimalComponent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
