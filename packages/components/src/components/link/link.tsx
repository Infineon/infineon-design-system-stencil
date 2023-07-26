import { Component, Prop, h } from "@stencil/core";
import { mainColors } from '../../global/colorNames';
import classNames from 'classnames';

@Component({
  tag: 'ifx-link',
  styleUrl: 'link.scss',
  shadow: true
})

export class Link {
  @Prop() href: string
  @Prop() target: string = '_self';
  @Prop() color: mainColors = undefined;
  @Prop() bold: boolean = true;
  @Prop() underline: boolean = true

  render() {
    return (
      <a href={this.href} target={this.target} class={this.linkClassNames()}>
        <slot></slot>
      </a>
    )
  }

  linkClassNames() {
    return classNames(
      'link',
      this.color,
      this.bold && 'bold',
      this.underline && 'underline',
    );
  }
}