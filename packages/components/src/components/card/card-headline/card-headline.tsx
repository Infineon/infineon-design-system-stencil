import { Component, h, Element, State } from '@stencil/core';

@Component({
  tag: 'ifx-card-headline',
  styleUrl: 'card-headline.scss',
  shadow: true,
})

export class CardHeadline {
  @Element() el;
  @State() direction: string;
  @State() hasDesc: boolean;

  componentWillLoad() {
    const isHorizontal = this.el.closest('ifx-card').shadowRoot.querySelector('.card').className.includes('horizontal')
    if (isHorizontal) {
      this.direction = 'horizontal'
    }

    let desc = this.el.closest('ifx-card').querySelector('ifx-card-text')
    if (desc) {
      this.hasDesc = true;
    }
  }

  render() {
    return (
      <div class={`card__headline-wrapper ${this.hasDesc ? 'withDesc' : ""}`}>
        <div class={`card-headline ${this.direction}`}>
          <slot />
        </div>
      </div>
    )
  }
}
