import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-status',
  styleUrl: 'status.scss',
  shadow: true
})

export class Status {

  @Prop() label: string;
  @Prop() border: boolean = false;
  @Prop() color: 'orange' | 'ocean' | 'grey' | 'light-grey' | 'red' | 'green' | 'berry' = 'orange';

  render() {
    const borderClass = this.border ? `border-${this.color}` : '';

    return (
      <div aria-label="a status indicator" aria-value={this.label} class={`container ${borderClass}`}>
        <span class={`dot ${this.color}`}></span>
        <p class="text">{this.label}</p>
      </div>
    );
  }
}