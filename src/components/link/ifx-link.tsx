import { Component, Prop, h, Element } from "@stencil/core";

@Component({
  tag: 'ifx-link',
  styleUrl: '../../index.scss',
  shadow: true
})

export class Link {
  @Prop() href: string
  @Prop() target: string = '_self';
  @Prop({mutable: true}) icon: any = "";
  @Prop({mutable: true}) position: string = 'right'
  @Prop({mutable: true}) underline: any = ""
  @Element() el;


  componentWillLoad() {
    if (this.icon.toUpperCase() !== 'TRUE') {
      this.icon = false;
    } else this.icon = true;

    if (this.position.toUpperCase() !== "LEFT") {
      this.position = 'right';
    }

    if (this.underline.toUpperCase() !== 'TRUE') {
      this.underline = false;
    } else this.underline = true;
  }

  render() {
    return (
      <a href={this.href} target={this.target} class={`ifx-link ${this.underline ? 'underline' : ""}`}>
        {this.icon && this.position.toUpperCase() === "LEFT" && <ifx-icon icon="arrow-right-16"></ifx-icon>}
        <slot></slot>
        {this.icon && this.position.toUpperCase() === "RIGHT" && <ifx-icon icon="arrow-right-16"></ifx-icon>}
      </a>
    )
  }
}