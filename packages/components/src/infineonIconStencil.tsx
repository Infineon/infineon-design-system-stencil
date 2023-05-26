import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'infineon-icon-stencil',
})

export class InfineonIconStencil {
  @Prop() icon: any;
  @State() path: HTMLCollection;
  @State() svgWidth: number;
  @State() svgHeight: number;
  @State() pathD: string;
  @State() svgStroke: any;
  @State() svgStrokeLinecap: any;
  @State() svgLineJoin: any;

  parseHTML(html) {
    let el = document.createElement("div");
    el.innerHTML = html;
    return el.children;
  }

  componentWillLoad() {
    this.path = this.parseHTML(this.icon.svgContent);
    this.svgWidth = this.icon.width;
    this.svgHeight = this.icon.height;
    this.pathD = this.path[0].attributes[3].nodeValue;
    this.svgStroke = this.path[0].attributes[0].nodeValue;
    this.svgStrokeLinecap = this.path[0].attributes[1].nodeValue;
    this.svgLineJoin = this.path[0].attributes[2].nodeValue;
  }

  render() {
    return (
      <div class="svg-wrapper">
        <svg class="inline-svg" width={this.svgWidth} height={this.svgHeight} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path stroke={this.svgStroke} stroke-linecap={this.svgStrokeLinecap} stroke-linejoin={this.svgLineJoin} d={this.pathD} />
        </svg>
      </div>
    );
  }
}
