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
    const containerClass = this.border ? `container border-${this.color}` : 'container no-border';

    return (
      <div aria-label="a status indicator" aria-value={this.label} class={containerClass}>
        <span class={`dot ${this.color}`}></span>
        <p class="text">{this.label}</p>
      </div>
    );
  }
}