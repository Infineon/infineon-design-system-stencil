import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ifx-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class Button {
  @Prop() label: string;
  @Prop() variant: 'solid' | 'outline' |  'outline-text';
  @Prop() color: 'primary' | 'secondary' |  'success' | 'danger' | 'warning';
  @Prop() icon: boolean;

  render() {
    return (
      <button class={`btn btn-${this.color} btn-${this.variant}-${this.color}`} type="button">
        {this.icon ? 'icon' : ''}
        {this.label}
      </button>
    );
  }
}
