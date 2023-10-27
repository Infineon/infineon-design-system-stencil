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
  @State() noImg: boolean;
  @Prop() href: string = "";
  @Prop() target: string = "_self";

  @Listen('imgPosition')
  setImgPosition(event) {
    this.alignment = event.detail
  }

  handleComponentAdjustment() {
    const image = this.el.querySelector('ifx-card-image')
    const links = this.el.querySelector('ifx-card-links')

    if (!image) {
      this.noImg = true;
    } else this.noImg = false;

    if (!links) {
      this.noBtns = true;
    } else this.noBtns = false;

    if(this.href.trim() === "") { 
      this.href = undefined;
    }
  }

  handleHovering() {
    const card = this.el.shadowRoot.querySelector('.card')
    card.addEventListener('mouseover', (ev) => {
      this.el.querySelector('ifx-card-headline').isHovered = true;
      if (ev.target.nodeName === 'IFX-CARD-LINKS' || ev.target.nodeName === 'IFX-BUTTON') {
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
    this.handleHovering();
    this.addEventListenersToHandleCustomFocusState();

  }


  private addEventListenersToHandleCustomFocusState() {
    const element = this.el.shadowRoot;
    if (!element) {
      console.error('element not found');
      return;
    }
    const upperBodyWrapper = element.querySelector('.upper__body-wrapper');
    if (!upperBodyWrapper) {
      console.error('upper body wrapper not found');
      return;
    }

    element.tabIndex = -1;
    upperBodyWrapper.tabIndex = -1;

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
          ${this.direction} 
          ${this.alignment}`
        }>

          {this.direction === 'horizontal' &&
            <div class="horizontal">
              <a class={`card-img ${this.noImg ? 'noImage' : ""}`} href={this.href}>
                <slot name="img" />
              </a>

              <div class='lower__body-wrapper'>
                <a class='upper-body' href={this.href}>
                  <slot />
                </a>
                <div>
                  <slot name='buttons' />
                </div>
              </div>
            </div>}

          {this.direction === 'vertical' &&
            <div class="vertical">
              <a class='upper__body-wrapper' href={this.href} target={this.target}>
                <div class={`card-img ${this.noImg ? 'noImage' : ""}`}>
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
