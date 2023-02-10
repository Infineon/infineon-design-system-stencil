import { Component, Prop, h } from '@stencil/core';
import { getIcon } from '@infineon/infineon-icons'


@Component({
  tag: 'ifx-icon',
})

export class InfineonIconStencil {
  @Prop({ mutable: true }) icon: any;
  @Prop({ mutable: true }) ifxIcon: any;

  componentWillLoad() {
    this.ifxIcon = getIcon(this.icon);
  }

  render() {
    return (
      <div class="svg-wrapper">
       {this.ifxIcon &&
        <svg class="inline-svg" width={this.ifxIcon.width} height={this.ifxIcon.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path stroke={this.ifxIcon.stroke} stroke-linecap={this.ifxIcon.strokeLinecap} stroke-linejoin={this.ifxIcon.strokeLineJoin} d={this.ifxIcon.d} />
        </svg>
       }
      </div>
    );
  }
}
