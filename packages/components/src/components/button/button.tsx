import { Component, Prop, h, Host, Method, Element, Watch, State } from '@stencil/core';
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

  protected componentDidLoad() {
    this.addEventListenersToHandleCustomFocusAndActiveState();
  }

  private addEventListenersToHandleCustomFocusAndActiveState() {
    const element = this.el.shadowRoot.firstChild;

    if (!element) {
      console.error('element not found');
      return;
    }

    element.tabIndex = 0;

    element.addEventListener('focus', () => {
      if (!this.disabled) {
        element.classList.add('focus');
      }
    });

    element.addEventListener('blur', () => {
      element.classList.remove('focus');
    });
  }

  componentWillLoad() {
    if (this.el.closest('form')) {
      if (this.el.href) {
        this.el.internalHref = undefined;
      }
      this.nativeButton = document.createElement('button');
      this.nativeButton.type = this.type;
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

  // handleFocus(event: FocusEvent) { // the anchor element should not be focusable when it's disabled
  //   if (this.disabled) {
  //     event.preventDefault();
  //     this.focusableElement.blur();
  //   }
  // }


  handleFocus(event: FocusEvent) {
    // the anchor element should not be focusable when it's disabled
    if (this.disabled) {
      event.preventDefault();
      this.focusableElement.blur();
    } else {
      this.focusableElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          this.handleClick();
        }
      });
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
          onFocus={(event) => this.handleFocus(event)}

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

    );
  }
}