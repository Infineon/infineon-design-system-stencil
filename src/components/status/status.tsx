import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-status',
  styleUrl: 'status.scss',
  shadow: true
})
export class Status {

  @Prop() text: string;
  @Prop() border: boolean = false;
  @Prop() color: 'orange' | 'ocean'| 'grey'| 'grey-200'| 'red'| 'green'| 'berry' = 'orange';

  render() {
    const borderClass = this.border ? `border-${this.color}` : '';

    return (
      <div class={`container ${borderClass}`}>
        <span class={`dot ${this.color}`}></span>
        <p class="text">{this.text}</p>
      </div>
    );
  }
}