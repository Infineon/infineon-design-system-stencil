import { Component, Prop, h, Element } from "@stencil/core";

@Component({
  tag: 'ifx-link',
  styleUrl: '../../index.scss',
  shadow: true
})

export class Link {
  @Prop() href: string
  @Prop() target: string = '_self';
  @Prop() color: string = 'black';
  @Prop() bold: boolean = true;
  @Prop({mutable: true}) underline: any = ""
  @Element() el;


  componentWillLoad() {
    if (this.underline.toUpperCase() !== 'TRUE') {
      this.underline = false;
    } else this.underline = true;
  }

  render() {
    return (
      <a href={this.href} target={this.target} class={`ifx-link ${this.color} ${this.bold ? 'bold' : ""} ${this.underline ? 'underline' : ""}`}>
        <slot></slot>
      </a>
    )
  }
}