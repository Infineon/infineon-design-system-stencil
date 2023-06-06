import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'ifx-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb {
  @Element() el;

  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <slot />
        </ol>
      </nav>
    );
  }
}
