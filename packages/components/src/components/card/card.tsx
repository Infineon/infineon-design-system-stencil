import { Component, h, Host, Element, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'ifx-card',
  styleUrl: 'card.scss',
  shadow: true,
})

export class Card {
  @Element() el;
  @State() noBtns: boolean;
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
    const links = this.el.querySelector('ifx-card-links')
 
    if(!img) { 
      this.hasImg = false;
    } else this.hasImg = true;

    if (desc) {
      this.hasDesc = true;
    }

    // if(button) { 
    //   this.hasBtn = true;
    // } else this.hasBtn = false;

    if (overline && headline && desc && button) {
      this.hasAll = true;
    } else if (this.hasDesc || (overline && headline && button)) {
      this.largeSize = true
    } else {
      this.smallSize = true
    }

    if(!links) { 
      this.noBtns = true;
    } else this.noBtns = false;
  }

  handleHovering() { 
    const card = this.el.shadowRoot.querySelector('.card')
    card.addEventListener('mouseover', (ev) => { 
      this.el.querySelector('ifx-card-headline').isHovered = true;
      if(ev.target.nodeName === 'IFX-CARD-LINKS' || ev.target.nodeName === 'IFX-BUTTON') { 
        this.el.shadowRoot.querySelector('.card').style.borderColor = '#ebe9e9';
        this.el.querySelector('ifx-card-headline').isHovered = false;
      } else this.el.shadowRoot.querySelector('.card').style.borderColor = '#0A8276';
    })

    card.addEventListener('mouseout', () => { 
      this.el.querySelector('ifx-card-headline').isHovered = false;
      this.el.shadowRoot.querySelector('.card').style.borderColor = '#ebe9e9';
    })
  }
  
  componentWillLoad() {
    this.handleComponentAdjustment()
  }

  componentDidLoad() { 
    this.handleHovering()
  }

  componentWillUpdate() { 
    this.handleComponentAdjustment()
  }

  render() {
    return (
      <Host>
        <div class={
          `card 
          ${this.noBtns ? 'noBtns' : ""}
          ${!this.hasImg ? 'onlyBody' : ""}
          ${this.direction} 
          ${this.alignment} 
          ${this.largeSize ? 'largeSize' : ""} 
          ${this.smallSize ? 'smallSize' : ""} 
          ${this.hasAll ? 'hasAll' : ""}`
        }>
         
        {this.direction === 'horizontal' &&
           <div class="horizontal">
              <a class={`card-img ${!this.hasImg ? 'noImage' : ""}`} href={this.href}>
                <slot name="img" />
              </a>

              <div class='lower__body-wrapper'>
                <a class='upper-body' href={this.href}>
                    <slot />
                </a>
                <slot name='buttons' />
              </div>
         </div>}

         {this.direction === 'vertical' && 
          <div class="vertical">
            <a class='upper__body-wrapper' href={this.href} target={this.target}>
              <div class={`card-img ${!this.hasImg ? 'noImage' : ""}`}>
                <slot name="img" />
              </div>

              <div class='upper-body'>
                <slot />
              </div>
            </a>

            <div class='lower__body-wrapper'>
              <slot name='buttons' />
            </div>
          </div>}
        </div>
      </Host>
    );
  }
}
