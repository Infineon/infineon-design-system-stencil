import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {

  @Prop() text: string;
  @Prop() color: 'primary' | 'secondary' | 'warning' = 'primary';

  render() {
    return (
      <div class="container">
        <span class="dot"></span>
        <p class="text">{this.text}</p>
      </div>
    );
  }
}