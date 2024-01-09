import { Component, Prop, h, Host, Method, Element, Watch, State, Listen } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ifx-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class Button {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Prop() theme: 'default' | 'danger' | 'inverse' = 'default';
  @Prop() size: string = 'm';
  @Prop() disabled: boolean = false;
  @State() internalHref: string;
  @Prop() href: string;
  @Prop() target: string = '_self';
  @Prop() type: "button" | "submit" | "reset" = "button";
  @Prop() fullWidth: boolean = false;
  @Element() el;

  private focusableElement: HTMLElement;
  private nativeButton: HTMLButtonElement | HTMLInputElement;

  @Watch('href')
  setInternalHref(newValue: string) {
    this.internalHref = newValue;
  }

  @Method()
  async setFocus() {
    this.focusableElement.focus();
  }

  insertNativeButton() { 
    this.nativeButton = document.createElement('button');
    this.nativeButton.type = this.type;
    this.nativeButton.style.display = 'none';
    this.el.closest('form').appendChild(this.nativeButton);
  }

  handleFormAndInternalHref() { 
    if (this.el.closest('form')) {
      if (this.el.href) {
        this.el.internalHref = undefined;
      }
      this.insertNativeButton()
    } else {
      this.internalHref = this.href;
    }
  }

  componentWillLoad() {
   this.handleFormAndInternalHref()
  }

  handleClick() {
    if (!this.disabled) {
      if (this.nativeButton) {
        if (this.type === 'reset') {
          this.resetClickHandler(); //this will reset all ifx-text-fields within a form
        }
        this.nativeButton.click(); //clicking the nativeButton on type reset will include standard input type text as well
      }
    }
  }

  resetClickHandler() {
    const formElement = this.el.closest('form');
    const customElements = formElement.querySelectorAll('ifx-text-field');
    customElements.forEach(element => {
      element.reset();
    });
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      this.handleClick();
    }
  }

  handleFocus(event: FocusEvent) {
    // the anchor element should not be focusable when it's disabled
    if (this.disabled) {
      event.preventDefault();
      this.focusableElement.blur();
    }
  }

  render() {
    return (
      <Host>
        <a
          tabIndex={0}
          ref={(el) => (this.focusableElement = el)}
          class={this.getClassNames()}
          href={!this.disabled ? this.internalHref : undefined}
          target={this.target}
          onClick={this.handleClick.bind(this)}
          rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
          onFocus={(event) => this.handleFocus(event)}
          aria-disabled={this.disabled}
          aria-labelledby="label"
        >
          <slot></slot>
        </a>
      </Host>
    );
  }


  getVariantClass() {
    return `${this.variant}` === "secondary"
      ? `secondary-${this.theme}`
      : `${this.variant}` === 'tertiary'
        ? `tertiary-${this.theme}`
        : `${this.theme}`;
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
      this.fullWidth ? 'fullwidth': ''
    );
  }
}