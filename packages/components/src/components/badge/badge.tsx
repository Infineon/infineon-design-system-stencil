import { Component, h } from '@stencil/core';

@Component({
  tag: 'ifx-badge',
  styleUrl: 'badge.scss',
  shadow: true
})
export class Badge {

  render() {
    return (
      <div class="badge__container">
        <slot />
      </div>
    );
  }
}