import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'ifx-footer-column',
  styleUrl: './footer-column.scss',
  shadow: true,
})

export class Card {
  @Element() el;
 

  render() {
    return (
      <div class="col">
        <slot name="title" />
        <slot name="link" />
      </div>
    );
  }
}
