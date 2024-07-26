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
  @State() internalHref: string = ""
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

    if (this.href.trim() === "") {
      this.internalHref = undefined;
    } else this.internalHref = this.href;
  }

  handleClassList(el, type, className) {
    el.classList[type](className)
  }

  handleHovering() {
    const card = this.el.shadowRoot.querySelector('.card')
    let cardHeadline = this.el.querySelector('ifx-card-headline');

    if (this.href) {
      card.addEventListener('mouseover', (ev) => {

        // const target = ev.target;
        // const relatedTarget = ev.relatedTarget;

        // if (relatedTarget && relatedTarget !== target && !target.contains(relatedTarget)) {
        //   this.handleClassList(card, 'add', 'borderHovered')
        // }

        if (ev.target.nodeName === 'IFX-CARD-LINKS' || ev.target.nodeName === 'IFX-BUTTON') {
          this.handleClassList(card, 'add', 'linkHovered')
        } else {
          this.handleClassList(card, 'add', 'cardHovered')
          if (cardHeadline) {
            cardHeadline.isHovered = true;
          }
        }
      })

      card.addEventListener('mouseout', () => {
        if (cardHeadline) {
          cardHeadline.isHovered = false;
        }
        //this.handleClassList(card, 'remove', 'borderHovered')
        this.handleClassList(card, 'remove', 'cardHovered')
        this.handleClassList(card, 'add', 'linkHovered')
      })
    }
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
        <div aria-labelledby="label" class={
          `card 
          ${this.noBtns ? 'noBtns' : ""}
          ${this.direction} 
          ${this.alignment}`
        }>

          {this.direction === 'horizontal' &&
            <div class="horizontal">
              <a class={`card-img ${this.noImg ? 'noImage' : ""}`} href={this.internalHref}>
                <slot name="img" />
              </a>

              <div class='lower__body-wrapper'>
                <a class='upper-body' href={this.internalHref}>
                  <slot />
                </a>
                <div>
                  <slot name='buttons' />
                </div>
              </div>
            </div>}

          {this.direction === 'vertical' &&
            <div class="vertical">
              <a class='upper__body-wrapper' href={this.internalHref} target={this.target}>
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