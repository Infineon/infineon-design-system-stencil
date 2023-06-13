import { Component, h, Host, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'ifx-card',
  styleUrl: 'card.scss',
  shadow: true,
})

export class Card {
  @Element() el;
  @State() hasBtn: boolean;
  @Prop() direction: 'horizontal' | 'vertical' = 'vertical';
  @Prop() alignment: string;
  @State() hasDesc: boolean;
  @Prop({ mutable: true }) hasAll: boolean;
  @Prop({ mutable: true }) largeSize: boolean;
  @Prop({ mutable: true }) smallSize: boolean;

  componentWillLoad() {
    const desc = this.el.querySelector('ifx-card-text')
    const overline = this.el.querySelector('ifx-card-overline')
    const headline = this.el.querySelector('ifx-card-headline')
    const link = this.el.querySelector('ifx-link')

    if (desc) {
      this.hasDesc = true;
    }

    if (overline && headline && desc && link) {
      this.hasAll = true;
    } else if (this.hasDesc || (overline && headline && link)) {
      this.largeSize = true
    } else {
      this.smallSize = true
    }
  }



  render() {
    return (
      <Host>
        <div class={
          `card 
          ${this.direction} 
          ${this.alignment} 
          ${this.largeSize ? 'largeSize' : ""} 
          ${this.smallSize ? 'smallSize' : ""} 
          ${this.hasAll ? 'hasAll' : ""}`
        }>
          <div class="card-img">
            <slot name="img" />
          </div>


          <div class='card-body'>
            <slot name='overline' />
            <slot name='headline' />
            <slot name='text' />
            <slot name="btn" />
          </div>
        </div>
      </Host>
    );
  }
}
