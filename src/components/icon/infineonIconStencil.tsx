import { Component, Prop, h, Host } from '@stencil/core';
import { getIcon } from '@infineon/infineon-icons'


@Component({
  tag: 'ifx-icon',
  styleUrl: './infineonIconStencil.scss'
})

export class InfineonIconStencil {
  @Prop({ mutable: true }) icon: any = "";
  @Prop({ mutable: true }) ifxIcon: any;
 
  convertStringToHtml(htmlString) { 
    const div = document.createElement('div')
    div.innerHTML = htmlString
    return div.firstElementChild
  }

  convertPathToVnode(pathString) { 
    const pathToObject = Array
    .from(pathString.attributes, ({ name, value }) => ({ name, value }))
    .reduce((acc, current) => {
      acc[current.name] = current.value
      return acc
    }, {})
    const objToVnode = h("path", pathToObject)
    return objToVnode
  }

  getSVG(svgPath) {
    return <svg class="inline-svg" width={this.ifxIcon.width} height={this.ifxIcon.height} xmlns="http://www.w3.org/2000/svg" fill={this.ifxIcon.fill} viewBox={this.ifxIcon.viewBox}>{svgPath}</svg>
  }

  constructIcon() {
    if(this.ifxIcon) {
      const htmlPath = this.convertStringToHtml(this.ifxIcon.svgContent)
      const svgPath = this.convertPathToVnode(htmlPath)
      const SVG = this.getSVG(svgPath)
      return SVG;
    } else {
      console.error('Icon not found!')
      return ""
    }
}
  
  componentWillLoad() {
    console.log('icon', this.icon)
    this.ifxIcon = getIcon(this.icon);
  }

  render() {
    return (
      <Host>
      {this.constructIcon()}
      </Host>
    );
  }
}
