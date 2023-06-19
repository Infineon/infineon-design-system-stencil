import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-card-headline',
  styleUrl: 'card-headline.scss',
  shadow: true,
})

export class CardHeadline {
  @Element() el;
  @Prop({ mutable: true }) direction: string;
  @Prop({ mutable: true }) hasDesc: boolean;

  componentWillLoad() {
    const cardElement = this.el.closest('ifx-card');

    if (cardElement) {
      const cardClass = cardElement.shadowRoot.querySelector('.card')?.className;

      if (cardClass && cardClass.includes('horizontal')) {
        this.direction = 'horizontal'
      }

      const desc = cardElement.querySelector('ifx-card-text');
      if (desc) {
        this.hasDesc = true;
      }
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
