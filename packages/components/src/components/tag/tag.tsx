import { Component, h } from '@stencil/core';

@Component({
  tag: 'ifx-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {

  render() {
    return (
      <a href="javascript:void(null);" class="container">
        <p class="label">
          <slot />
        </p>
      </a>
    );
  }
}