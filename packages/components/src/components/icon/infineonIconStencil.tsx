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
  const toCamelCase = str =>
    str
      .replace(/[-_]+(.)/g, (_, chr) => chr.toUpperCase()) // handle - and _ to uppercase
      .replace(/^(.)/, (m) => m.toLowerCase()); // ensure first letter is lowercase

  const iconName = toCamelCase(this.internalIcon);
  this.ifxIcon = getIcon(iconName);
}

 initalizeTracking() { 
    (function (t, r, kk, n, pp) {
      if (typeof window.btntConfig !== "object") {
        window.btntConfig = {
        domain: "https://ssgtm.infineon.com",
        withCookies: true,
        maxBatchSize: 10
        };
      }

      if (window["btnt"]) return;

      window["btnt"] = function (z) {
        if (typeof z !== "object") {
          z = {};
        }
        if (typeof window.btntQueue !== "object") {
          window.btntQueue = [];
        }
        window.btntQueue.push(z);
      };

      n = t.createElement(r);
      pp = t.getElementsByTagName(r)[0];
      n.async = 1;
      n.src = window.btntConfig.domain + "/btnt.js";
      pp.parentNode.insertBefore(n, pp);
      
    })(document, "script", );

    window.btnt({
    event_name: "component_initialized",
    component_name: 'ifx-icon',
    })
  }

  componentWillLoad() {
    this.internalIcon = this.icon;
    this.setIcon()
    this.initalizeTracking()
  }

  render() {
    return (
      <Host>
      {this.constructIcon()}
      </Host>
    );
  }
}