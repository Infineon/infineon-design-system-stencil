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
  @Prop() size: 's' | 'm';
  @Prop() icon: boolean;

  render() {
    if (this.variant == "solid") {
      return (
        <button class={
          `btn btn-${this.color}
          btn-${this.size}`}
          type="button"
        >
  
          {this.icon ? 'icon' : ''}
          {this.label}
        </button>
      )
    };

    if (this.size == "m") {
      return (
        <button class={
          `btn-${this.variant}-${this.color}
          btn btn-${this.color}`}
          type="button"
        >
  
          {this.icon ? 'icon' : ''}
          {this.label}
        </button>
      )
    };

    return (
      <button class={
        `btn-${this.variant}-${this.color}
        btn btn-${this.color}
        btn-${this.size}`}
        type="button"
      >

        {this.icon ? 'icon' : ''}
        {this.label}
      </button>
    );
  }
}
