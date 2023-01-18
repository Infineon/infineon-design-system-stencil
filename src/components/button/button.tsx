import { Component, Prop, h } from '@stencil/core';
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
  @Prop({ reflect: true }) iconPosition: 'before' | 'after' = 'before';
  @Prop() href: string;


  render() {
    return (
      <button class={this.getClassNames()}
        type="button"
      >
        <slot></slot>

      </button>
    );
  }


  getVariantClass() {
    return `${this.variant}` === "outline"
      ? `outline-${this.color}`
      : `${this.variant}` === 'outline-text'
        ? 'outline-text'
        : `${this.color}`;
  }

  getSizeClass() {
    return `${this.size}` === "s"
      ? "small"
      : "";
  }

  getClassNames() {
    return classNames(
      'btn',
      this.size && `btn--size-${this.getSizeClass()}`,
      this.variant && `btn--${this.getVariantClass()}`,
      this.iconOnly && `btn--icon-only`,
      !this.iconOnly &&
      this.iconPosition &&
      `btn--icon-${this.iconPosition}`,
      this.disabled && !this.href && `btn--disabled`
    );
  }
}
