import { Component, h } from '@stencil/core';

@Component({
  tag: 'ifx-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb {
 
  render() {
    return (
      <nav aria-label="Page navigation breadcrumb">
        <ol class="breadcrumb">
          <slot />
        </ol>
      </nav>
    );
  }
}
