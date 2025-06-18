import { Component, Prop, h, Host, Event, EventEmitter, Watch, State } from '@stencil/core';
import { getIcon } from '@infineon/infineon-icons'
 


@Component({
  tag: 'ifx-icon',
  styleUrl: './infineonIconStencil.scss'
})

export class InfineonIconStencil {
  @Prop({ mutable: true }) icon: string = ""
  @Prop({ mutable: true }) ifxIcon: any;
  @State() internalIcon: string;
  @Event() consoleError: EventEmitter<boolean>;

   @Watch('icon')
    updateIcon(newIcon: string) { 
      this.internalIcon = newIcon;
      this.setIcon()
    }

  convertStringToHtml(htmlString) { 
    const div = document.createElement('div')
    div.innerHTML = htmlString
    return div.firstChild
  }

  convertHtmlToObject(htmlElement) { 
    let pathToObject = Array
      .from(htmlElement.attributes, ({ name, value }) => ({ name, value }))
      .reduce((acc, current) => {
        acc[current.name] = current.value
        return acc
      }, {})

    return pathToObject
  }

  convertPathsToVnode(htmlPath) { 
    let svgPaths = []
    const parentPath = this.convertHtmlToObject(htmlPath);
    const parentPathToVnode = h("path", parentPath);
    svgPaths.push(parentPathToVnode)
    if(htmlPath.firstChild) { 
      const paths = htmlPath.querySelectorAll('path');
      const pathLength = htmlPath.querySelectorAll('path').length;
      for(let i = 0; i < pathLength; i++) { 
        let pathToObject = this.convertHtmlToObject(paths[i])
        let objToVnode = h("path", pathToObject)
        svgPaths.push(objToVnode)
      }      
    }
    return svgPaths
  }

  getSVG(svgPath) {
    const htmlPath = this.convertStringToHtml(this.ifxIcon) as SVGElement;
    const width = htmlPath.getAttribute('width');
    const height = htmlPath.getAttribute('height');
    const fill = htmlPath.getAttribute('fill');
    const viewBox = htmlPath.getAttribute('viewBox');
    
    return <svg class="inline-svg" width={width} height={height} xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox={viewBox}>{...svgPath}</svg>
  }

  constructIcon() {
    if(this.ifxIcon) {
      const htmlPath = this.convertStringToHtml(this.ifxIcon)
      const svgPath = this.convertPathsToVnode(htmlPath)
      const SVG = this.getSVG(svgPath)
      return SVG;
    } else if(this.icon !== "") {
      console.error('Icon not found!')
      this.consoleError.emit(true)
      return;
    }  else { 
      return;
    }
  }

  setIcon() { 
    const removeHyphen = (str) => str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr);
    this.ifxIcon = getIcon(removeHyphen(this.internalIcon));
  }

  componentWillLoad() {
    this.internalIcon = this.icon;
    this.setIcon()
  }

  render() {
    return (
      <Host>
      {this.constructIcon()}
      </Host>
    );
  }
}