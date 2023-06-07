import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Prop() label: string;

  render() {
    return (
      <a href="javascript:void(null);" class="container">
        <p class="label">{this.label}</p>
      </a>
    );
  }
}