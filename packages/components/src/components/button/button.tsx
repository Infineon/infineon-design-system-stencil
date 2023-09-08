import { Component, Prop, h, Host, Method, Element, Watch, State } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ifx-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class Button {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';
  @Prop() size: string = 'm';
  @Prop() disabled: boolean = false;
  @State() internalHref: string;
  @Prop() href: string;
  @Prop() target: string = '_self';
  @Element() el;

  private focusableElement: HTMLElement;
  private nativeButton: HTMLButtonElement;

  @Watch('href')
  setInternalHref(newValue: string) {
    this.internalHref = newValue;
  }

  @Method()
  async setFocus() {
    this.focusableElement.focus();
  }

  componentWillLoad() {
    if (this.el.closest('form')) {
      if (this.el.href) {
        this.el.internalHref = undefined;
      }
      this.nativeButton = document.createElement('button');
      this.nativeButton.type = 'submit';
      this.nativeButton.style.display = 'none';
      this.el.closest('form').appendChild(this.nativeButton);
    } else {
      this.internalHref = this.href;
    }
  }

  handleClick() {
    if (this.nativeButton) {
      this.nativeButton.click();
    }
  }


  render() {
    return (
      <Host>
        <a
          ref={(el) => (this.focusableElement = el)}
          class={this.getClassNames()}
          href={!this.disabled ? this.internalHref : undefined}
          target={this.target}
          onClick={this.handleClick.bind(this)}
          rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          <slot></slot>
        </a>
      </Host>
    );
  }


  getVariantClass() {
    return `${this.variant}` === "secondary"
      ? `secondary-${this.color}`
      : `${this.variant}` === 'tertiary'
        ? `${this.color}-tertiary`
        : `${this.color}`;
  }

  getSizeClass() {
    if (`${this.size}` === "xs") {
      return "xs"
    }
    else if (`${this.size}` === "s") {
      return "s"
    }
    else if (`${this.size}` === "l") {
      return "l"
    }
    else return "";
  }

  getClassNames() {
    return classNames(
      'btn',
      this.size && `btn-${this.getSizeClass()}`,
      `btn-${this.getVariantClass()}`,
      this.disabled ? 'disabled' : '',

    );
  }
}