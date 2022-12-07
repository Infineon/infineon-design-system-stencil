import { Component, Prop, h } from '@stencil/core';

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

  render() {
    const variantClass =
      `${this.variant}` === "outline"
        ? `outline-${this.color}`
        : `${this.variant}` === 'outline-text'
          ? 'outline-text'
          : `${this.color}`;

    const sizeClass =
      `${this.size}` === "s"
        ? "btn-s"
        : "";

    return (
      <button class={
        `btn
        btn-${variantClass}
        ${sizeClass}
        ${this.disabled ? 'disabled' : ''}`
      }
        type="button"
      >

        {this.icon ? 'icon' : ''}
        {this.label}
      </button>
    );
  }
}
