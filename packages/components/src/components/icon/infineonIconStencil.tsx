import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { getIcon } from '@infineon/infineon-icons'
 


@Component({
  tag: 'ifx-icon',
  styleUrl: './infineonIconStencil.scss'
})

export class InfineonIconStencil {
  @Prop({ mutable: true }) icon: string = ""
  @Prop({ mutable: true }) ifxIcon: any;
  @Event() consoleError: EventEmitter<boolean>;
 
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
    return <svg class="inline-svg" width={this.ifxIcon.width} height={this.ifxIcon.height} xmlns="http://www.w3.org/2000/svg" fill={this.ifxIcon.fill} viewBox={this.ifxIcon.viewBox}>{...svgPath}</svg>
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

  componentWillLoad() {
    const removeHyphen = (str) => str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr);
    this.ifxIcon = getIcon(removeHyphen(this.icon));
  }

  render() {
    return (
      <Host>
      {this.constructIcon()}
      </Host>
    );
  }
}