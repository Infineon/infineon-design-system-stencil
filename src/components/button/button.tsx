import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ifx-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class Button {
  @Prop() label: string;
  @Prop() color: 'btn-primary' | 'btn-secondary' |  'btn-success' | 'btn-danger' | 'btn-warning';
  @Prop() icon: boolean;

  render() {
    return (
      <button class={`btn ${this.color}`} type="button">
        {this.icon ? 'icon' : ''}
        {this.label}
      </button>
    );
  }
}
