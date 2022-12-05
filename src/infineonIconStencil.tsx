import { Component, Prop, h } from '@stencil/core';

import library from '@infineon/infineon-icons/library';

@Component({
  tag: 'infineon-icon-stencil',
})

export class InfineonIconStencil {
  @Prop() config: any;

  // componentWillLoad() {
  //   // This component will get access
  //   // to config if slotted inside root.
  //   console.log("child component config: ", this.config);
  // }

  render() {

    const iconObj = library.getIcon(this.config.data.icon);

    const height = iconObj.height;
    const width = iconObj.width;
    const path = iconObj.svgContent.substring(iconObj.svgContent.indexOf('d=') + 3).split("\"/>")[0];
    const viewbox = `0 0 ${height} ${width}`;


    return (
      <div><svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox={viewbox}>
        <path fill="currentColor" d={path} />
      </svg></div>

    );
  }
}
