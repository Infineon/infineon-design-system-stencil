import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {
  @Prop() size: string;

  render() {
    return (
      <div class="spinner" style={{ width: this.getSize(), height: this.getSize() }}>
        <div class="border"></div>
      </div>
    );
  }

  getSize() {
    return `${this.size}` === "s"
      ? "24px"
      : "40px";
  }
}
