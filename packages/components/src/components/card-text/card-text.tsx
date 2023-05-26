import { Component, h, Element, Prop} from '@stencil/core';

@Component({
  tag: 'ifx-card-text',
  styleUrl: './card-text.scss',
  shadow: true,
})

export class CardText {
  @Element() el;
  @Prop({mutable: true}) hasBtn: boolean;

  componentWillLoad() { 
    const link = this.el.closest('ifx-card').querySelector('ifx-link');
    if(link) { 
      this.hasBtn = true;
    }
  }

  render() {
    return (
      <div class={`card__text-wrapper ${this.hasBtn ? 'hasBtn' : ""}`}>
        <div class={`card-text`}>
          <slot />
        </div>
      </div>
    );
  }
}
