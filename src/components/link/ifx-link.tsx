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
  @Prop() tooltip: string = ""
  @Prop({mutable: true}) tooltipPosition: string;
  @Element() el;


  componentWillLoad() {
    if (this.underline.toUpperCase() !== 'TRUE') {
      this.underline = false;
    } else this.underline = true;

    if(this.tooltipPosition.toLowerCase() === 'right') { 
      this.tooltipPosition = 'right'
      return;
    }
    if(this.tooltipPosition.toLowerCase() === 'bottom') { 
      console.log('its here')
      this.tooltipPosition = 'bottom'
      return;
    }
    if(this.tooltipPosition.toLowerCase() === 'left') { 
      this.tooltipPosition = 'left'
      return;
    }
    if(this.tooltipPosition.toLowerCase() === 'top') { 
      this.tooltipPosition = 'top'
      return;
    } else if(this.tooltip) { 
      this.tooltipPosition = 'right'
    }
  }

  render() {
    return (
      <a href={this.href} target={this.target} class={`ifx-link ${this.color} ${this.bold ? 'bold' : ""} ${this.underline ? 'underline' : ""}`}>
        {this.tooltip && <span class={`${this.tooltipPosition}`}>{this.tooltip}</span>}
        <slot></slot>
      </a>
    )
  }
}