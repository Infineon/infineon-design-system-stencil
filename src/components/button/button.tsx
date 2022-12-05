import { Component, Prop, h } from '@stencil/core';

import library from '@infineon/infineon-icons/library';

//here, library is empty again, as the plugin config in infineonIcons.ts is not applied correctly
//importing an icon only works, if added again right here in the component

import {
  arrowTriangleHorizontal16,
} from '@infineon/infineon-icons';

library.add(
  arrowTriangleHorizontal16,
);
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

    const ifxIcon2 = library.getIcon('arrowTriangleHorizontal16');
    const height = ifxIcon2.height;
    const width = ifxIcon2.width;
    const pathD = ifxIcon2.svgContent.substring(ifxIcon2.svgContent.indexOf('d=') + 3).split("\"/>")[0];
    console.log("icon2", ifxIcon2);

    return (
      <div>
        <div><svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path fill="currentColor" d={pathD} />
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
