import { Component, h } from '@stencil/core';

@Component({
  tag: 'ifx-badge',
  styleUrl: '../../index.scss',
  shadow: true
})
export class Badge {

  render() {
    return (
      <div class="badge__container">
        <span>
          <slot/>
        </span>
      </div>
    );
  }
}