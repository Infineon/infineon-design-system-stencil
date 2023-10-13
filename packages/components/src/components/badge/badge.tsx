import { Component, h } from '@stencil/core';

@Component({
  tag: 'ifx-badge',
  styleUrl: 'badge.scss',
  shadow: true
})
export class Badge {

  render() {
    return (
      <div aria-label='badge' class="badge__container">
        <span>
          <slot />
        </span>
      </div>
    );
  }
}