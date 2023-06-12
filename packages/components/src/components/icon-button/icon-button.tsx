import { Component, Prop, h, Host, Method, Element } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ifx-icon-button',
  styleUrl: 'icon-button.scss',
  shadow: true,
})

export class IconButton {
  @Prop() variant: 'solid' | 'outline' | 'outline-text';
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  @Prop() size: string;
  @Prop() disabled: boolean;
  @Prop() icon: string;
  @Prop() href: string;
  @Prop() target: string = '_self';
  @Prop() shape: string = 'round';
  @Element() el;

  private focusableElement: HTMLElement;

  @Method()
  async setFocus() {
    this.focusableElement.focus();
  }

  componentWillLoad() {
    if (this.shape === '') {
      this.shape = 'round';
    }
  }

  render() {
    return (
      <Host>
        {this.href ? (
          <a
            ref={(el) => (this.focusableElement = el)}
            class={this.getClassNames()}
            href={!this.disabled ? this.href : undefined}
            target={this.target}
            rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
          >
            <ifx-icon icon={this.icon}></ifx-icon>
          </a>
        ) : (
          <button
            class={this.getClassNames()}
            type="button"
          >
            <ifx-icon icon={this.icon}></ifx-icon>
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
      ? "s"
      : "";
  }

  getClassNames() {
    return classNames(
      'btn icon-button',
      `btn-${this.shape}`,
      this.size && `btn-${this.getSizeClass()}`,
      `btn-${this.getVariantClass()}`,
      this.disabled ? 'disabled' : ''
    );
  }
}