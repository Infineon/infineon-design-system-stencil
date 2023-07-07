import { Component, Prop, h, Host, Method, Element, Watch, State } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ifx-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class Button {
  @Prop() variant: 'solid' | 'outline' | 'outline-text' = 'solid';
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';
  @Prop() size: string = 'm';
  @Prop() disabled: boolean = false;
  @Prop() icon: string;
  @Prop() position: string = 'left'
  @State() internalPosition: string;
  @Prop() href: string;
  @Prop() target: string = '_self';
  @Element() el;
  @Prop() type: string = 'button'; // handle buttons of type button and of type submit

  private focusableElement: HTMLElement;
  private nativeButton: HTMLButtonElement;

  @Watch('position')
  reassignPosition(newValue: string) {
    if (newValue && newValue !== this.internalPosition) {
      if (newValue.toUpperCase() === "LEFT" || newValue.toUpperCase() === "RIGHT")
        this.internalPosition = newValue;
    }
  }

  @Method()
  async setFocus() {
    this.focusableElement.focus();
  }

  componentWillLoad() {
    if (this.position.toUpperCase() !== "LEFT") {
      this.internalPosition = 'left';
    } else this.internalPosition = this.position;
  }


  componentDidLoad() {
    if (this.type === 'submit' && this.el.closest('form')) {
      this.nativeButton = document.createElement('button');
      this.nativeButton.type = 'submit';
      this.nativeButton.style.display = 'none';
      this.el.closest('form').appendChild(this.nativeButton);
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
        {this.href ? (
          <a
            ref={(el) => (this.focusableElement = el)}
            class={this.getClassNames()}
            href={!this.disabled ? this.href : undefined}
            target={this.target}
            rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
          >
            {this.icon && this.internalPosition.toUpperCase() === "LEFT" && <ifx-icon icon={this.icon}></ifx-icon>}
            <slot></slot>
            {this.icon && this.internalPosition.toUpperCase() === "RIGHT" && <ifx-icon icon={this.icon}></ifx-icon>}

          </a>
        ) : (
          <button
            class={this.getClassNames()}
            type="button"
            onClick={this.handleClick.bind(this)} // Add click handler

          >
            {this.icon && this.internalPosition.toUpperCase() === "LEFT" && <ifx-icon icon={this.icon}></ifx-icon>}
            <slot></slot>
            {this.icon && this.internalPosition.toUpperCase() === "RIGHT" && <ifx-icon icon={this.icon}></ifx-icon>}
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
      'btn',
      this.size && `btn-${this.getSizeClass()}`,
      `btn-${this.getVariantClass()}`,
      this.disabled ? 'disabled' : ''
    );
  }
}