import { Component, Prop, h } from '@stencil/core';

import library from '@infineon/infineon-icons/library';

@Component({
  tag: 'ifx-button',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class Button {
  @Prop() label: string;
  @Prop() variant: 'solid' | 'outline' | 'outline-text';
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: boolean;

  render() {
    const variantClass =
      `${this.variant}` === "outline"
        ? `outline-${this.color}`
        : `${this.variant}` === 'outline-text'
          ? 'outline-text'
          : `${this.color}`;

    const sizeClass =
      `${this.size}` === "s"
        ? "btn-s"
        : "";

    const arrowTriangleHorizontal = library.getIcon('arrowTriangleHorizontal16');
    const arrowTriangleHorizontalHeight = arrowTriangleHorizontal.height;
    const arrowTriangleHorizontalWidth = arrowTriangleHorizontal.width;
    const arrowTriangleHorizontalPath = arrowTriangleHorizontal.svgContent.substring(arrowTriangleHorizontal.svgContent.indexOf('d=') + 3).split("\"/>")[0];
    console.log("arrowTriangleHorizontal", arrowTriangleHorizontal);
    const cogwheel = library.getIcon('cogwheel24')
    const cogwheelHeight = cogwheel.height;
    const cogwheelWidth = cogwheel.width;
    const cogwheelViewbox = `0 0 ${cogwheelHeight} ${cogwheelWidth}`;
    const cogwheelPath = cogwheel.svgContent.substring(cogwheel.svgContent.indexOf('d=') + 3).split("\"/>")[0];
    console.log("cogwheel", cogwheel);


    return (
      <div>
        <div><svg width={arrowTriangleHorizontalWidth} height={arrowTriangleHorizontalHeight} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path fill="currentColor" d={arrowTriangleHorizontalPath} />
        </svg></div>
        <div><svg width={cogwheelWidth} height={cogwheelHeight} xmlns="http://www.w3.org/2000/svg" viewBox={cogwheelViewbox}>
          <path fill="currentColor" d={cogwheelPath} />
        </svg></div>
        <button class={
          `btn
        btn-${variantClass}
        ${sizeClass}
        ${this.disabled ? 'disabled' : ''}`
        }
          type="button"
        >
          {this.icon ? 'icon' : ''}
          {this.label}
        </button>
      </div >
    );
  }
}
