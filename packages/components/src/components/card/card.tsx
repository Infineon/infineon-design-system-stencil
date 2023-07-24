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
  @State() isHovered: boolean = false;

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

  handleHover() { 
    if(!this.isHovered) {
      this.isHovered = true;
    } else this.isHovered = false;
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
        <div class={
          `card 
          ${this.hasBtn ? 'hasBtn' : ""}
          ${!this.hasImg ? 'onlyBody' : ""}
          ${this.direction} 
          ${this.alignment} 
          ${this.largeSize ? 'largeSize' : ""} 
          ${this.smallSize ? 'smallSize' : ""} 
          ${this.hasAll ? 'hasAll' : ""}`
        }>
         
        {/* {this.direction === 'horizontal' &&
           <div class="horizontal">
              <div class={`card-img ${!this.hasImg ? 'noImage' : ""}`}>
                <slot name="img" />
              </div>

              <div class='lower-body'>
                <div class='upper-body'>
                    <slot />
                </div>
                <slot name='buttons' />
              </div>
         </div>} */}

          <div class={`card-img ${!this.hasImg ? 'noImage' : ""}`}>
            <slot name="img" />
          </div>

          <div class='card-body'>
            <slot />
            <slot name='buttons' />
          </div>

         {/* <div class={`card-img ${!this.hasImg ? 'noImage' : ""}`}>
            <slot name="img" />
          </div> */}

         {/* {this.direction === 'vertical' && 
          <div class="vertical">
            <a class='upper__body-wrapper' href={this.href} target={this.target}>
              <div class={`card-img ${!this.hasImg ? 'noImage' : ""}`}>
                <slot name="img" />
              </div>

              <div class='upper-body'>
                <slot />
              </div>
            </a>

            <div class='lower-body'>
              <slot name='buttons' />
            </div>
          </div>} */}
        </div>
      </Host>
    );
  }
}
