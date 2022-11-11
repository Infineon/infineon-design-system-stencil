import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ifx-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class Button {
  @Prop() label: string;
  @Prop() gradient: 'purple' | 'green' | 'orange';
  @Prop() icon: boolean;

  render() {
    return (
      <button class={`btn ${this.gradient}`} type="button">
        {this.icon ? 'icon' : ''}
        {this.label}
      </button>
    );
  }
}
