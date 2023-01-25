import { Component, Prop, h, Host, Method } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ifx-button',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class Button {
  @Prop() label: string;
  @Prop() variant: 'solid' | 'outline' | 'outline-text';
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: boolean;

  @Prop() iconOnly: boolean = false;
  @Prop({ reflect: true }) iconPosition: 'left' | 'right' = 'left';
  @Prop() href: string;
  @Prop() target: string = '_self';

  private focusableElement: HTMLElement;

  @Method()
  async setFocus() {
    this.focusableElement.focus();
  }

  render() {
    return (
      <Host>
        {this.href ? (
          <a
            ref={(el) => (this.focusableElement = el)}
            class={this.getClassNames()}
            href={this.href}
            target={this.target}
            rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
          >
            <slot />
          </a>
        ) : (
          <button class={this.getClassNames()}
            type="button"
          >
            <slot></slot>
          </button>
        )}
      </Host>



    );
  }



  getVariantClass() {
    return `${this.variant}` === "outline"
      ? `outline-${this.color}`
      : `${this.variant}` === 'outline-text'
        ? `${this.color}-outline-text`
        : `${this.color}`;
  }

  getSizeClass() {
    return `${this.size}` === "s"
      ? "btn--size-small"
      : "";
  }

  getClassNames() {
    return classNames(
      'btn',
      this.size && `${this.getSizeClass()}`,
      this.variant && `btn--${this.getVariantClass()}`,
      this.icon && this.iconOnly && `btn--icon-only`,
      !this.iconOnly &&
      this.iconPosition &&
      `btn--icon-${this.iconPosition}`,
      this.disabled ? 'disabled' : ''

    );
  }
}