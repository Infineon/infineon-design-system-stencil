import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {

  @Prop() text: string;

  render() {
    return (
      <a href="javascript:void(null);" class={`container`}>
        <p class="text">{this.text}</p>
      </a>
    );
  }
}