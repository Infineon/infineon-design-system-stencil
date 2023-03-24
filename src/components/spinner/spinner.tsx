import { Component, h, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ifx-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {
  @Prop() size: string;

  render() {
    return (
      <div class={this.getClassNames()}
      >
        <div class="border"></div>
      </div>
    );
  }

  getSizeClass() {
    return `${this.size}` === "s"
      ? "s"
      : "";
  }

  getClassNames() {
    return classNames(
      'spinner',
      this.size && `spinner ${this.getSizeClass()}`,
    );
  }
}
