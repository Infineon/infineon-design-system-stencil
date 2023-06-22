import { Component, h, Host, Element, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'ifx-card',
  styleUrl: 'card.scss',
  shadow: true,
})

export class Card {
  @Element() el;
  @State() hasBtn: boolean;
  @Prop() direction: 'horizontal' | 'vertical' = 'vertical';
  @State() alignment: string;
  @State() hasDesc: boolean;
  @State() hasAll: boolean;
  @State() largeSize: boolean;
  @State() smallSize: boolean;
  @State() hasImg: boolean;
  @Prop() href: string = "";
  @Prop() target: string = "_self";

  @Listen('imgPosition')
  setImgPosition(event) { 
    this.alignment = event.detail
  }


  handleComponentAdjustment() { 
    const img = this.el.querySelector('ifx-card-image')
    const desc = this.el.querySelector('ifx-card-text')
    const overline = this.el.querySelector('ifx-card-overline')
    const headline = this.el.querySelector('ifx-card-headline')
    const button = this.el.querySelector('ifx-link') || this.el.querySelector('ifx-button')
 
    if(!img) { 
      this.hasImg = false;
    } else this.hasImg = true;

    if (desc) {
      this.hasDesc = true;
    }

    if(button) { 
      this.hasBtn = true;
    } else this.hasBtn = false;

    if (overline && headline && desc && button) {
      this.hasAll = true;
    } else if (this.hasDesc || (overline && headline && button)) {
      this.largeSize = true
    } else {
      this.smallSize = true
    }


  }

  componentWillLoad() {
    this.handleComponentAdjustment()
  }

  componentWillUpdate() { 
    this.handleComponentAdjustment()
  }


  render() {
    return (
      <Host>
        <a href={!this.hasBtn ? this.href : undefined} target={this.target} class={
          `card 
          ${this.hasBtn ? 'hasBtn' : ""}
          ${!this.hasImg ? 'onlyBody' : ""}
          ${this.direction} 
          ${this.alignment} 
          ${this.largeSize ? 'largeSize' : ""} 
          ${this.smallSize ? 'smallSize' : ""} 
          ${this.hasAll ? 'hasAll' : ""}`
        }>
          <div class={`card-img ${!this.hasImg ? 'noImage' : ""}`}>
            <slot name="img" />
          </div>

          <div class='card-body'>
            <slot />
          </div>
        </a>
      </Host>
    );
  }
}
