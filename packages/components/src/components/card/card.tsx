import { Component, h, Host, Element, Prop, State, Listen } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';

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
  @Prop() ariaLabel: string | null;

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


  componentWillLoad() {
    this.handleComponentAdjustment()
    if(!isNestedInIfxComponent(this.el)) { 
      const framework = detectFramework();
      trackComponent('ifx-card', { framework })
    }
  }

  componentWillUpdate() {
    this.handleComponentAdjustment()
  }

render() {
    return (
      <Host>
        <div aria-label={this.ariaLabel} class={
          `card 
          ${this.noBtns ? 'noBtns' : ""}
          ${this.direction} 
          ${this.alignment}`
        }
        role="region">

          {this.direction === 'horizontal' &&
            <div class="horizontal">
              <a class={`card-img ${this.noImg ? 'noImage' : ""} ${this.internalHref ? 'card-href' : ''}`} href={this.internalHref}>
                <slot name="img" />
              </a>

              <div class='lower__body-wrapper'>
                <a class={`upper-body ${this.internalHref ? 'card-href' : ''}`} href={this.internalHref}>
                  <slot />
                </a>
                <div>
                  <slot name='buttons' />
                </div>
              </div>
            </div>}

          {this.direction === 'vertical' &&
            <div class="vertical">
              <a class={`upper__body-wrapper ${this.internalHref ? 'card-href' : ''}`} href={this.internalHref} target={this.target}>
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