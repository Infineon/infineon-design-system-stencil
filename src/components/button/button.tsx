import { Component, Prop, h, Host, Method, Element } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ifx-button',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class Button {
  @Prop() variant: 'solid' | 'outline' | 'outline-text';
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  @Prop() size: string;
  @Prop() disabled: boolean;
  @Prop() icon: string;
  @Prop({ mutable: true }) position: string = 'left'

  @Prop() href: string;
  @Prop() target: string = '_self';

  @Prop() tooltip: string = ""
  @Prop({mutable: true}) tooltipPosition: string;
  @Element() el;

  private focusableElement: HTMLElement;

  @Method()
  async setFocus() {
    this.focusableElement.focus();
  }

  componentWillLoad() {
    if (this.position.toUpperCase() !== "LEFT") {
      this.position = 'right';
    }

    if(this.tooltipPosition.toLowerCase() === 'right') { 
      this.tooltipPosition = 'right'
    }
    if(this.tooltipPosition.toLowerCase() === 'bottom') { 
      this.tooltipPosition = 'bottom'
    }
    if(this.tooltipPosition.toLowerCase() === 'left') { 
      this.tooltipPosition = 'left'
    }
    if(this.tooltipPosition.toLowerCase() === 'top') { 
      this.tooltipPosition = 'top'
    } else if(this.tooltip) { 
      this.tooltipPosition = 'right'
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
            {this.icon && this.position.toUpperCase() === "LEFT" && <ifx-icon icon={this.icon}></ifx-icon>}
            <slot></slot>
            {this.icon && this.position.toUpperCase() === "RIGHT" && <ifx-icon icon={this.icon}></ifx-icon>}

          </a>
        ) : (
          <button
            class={this.getClassNames()}
            type="button"
          >
            {this.tooltip && <span class={`${this.tooltipPosition}`}>{this.tooltip}</span>}
            {this.icon && this.position.toUpperCase() === "LEFT" && <ifx-icon icon={this.icon}></ifx-icon>}
            <slot></slot>
            {this.icon && this.position.toUpperCase() === "RIGHT" && <ifx-icon icon={this.icon}></ifx-icon>}
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