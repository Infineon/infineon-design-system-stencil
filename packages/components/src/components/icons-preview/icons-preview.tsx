import { Component, h, Element, State } from "@stencil/core";
import { icons } from '@infineon/infineon-icons';

@Component({
  tag: 'ifx-icons-preview',
  styleUrl: './icons-preview.scss',
  shadow: true
})

export class IconsPreview {
  @State() iconsArray: string[] = [];
  @State() isCopied: boolean = false;
  @State() copiedIndex: number;
  
  @Element() el;

  handleToolTip(index) {
    this.isCopied = true
    this.copiedIndex = index;
    setTimeout(() => {
      this.isCopied = false
    }, 2000);
  }

  copyIconText(icon, index) { 
    navigator.clipboard.writeText(icon);
    this.handleToolTip(index)
  }

  componentWillLoad() { 
    for(let icon in icons) { 
      this.iconsArray.push(icon)
    }
  }


  render() {
    return (
    <div class="preview__container">
      {this.iconsArray.map((icon, index) => 
      <div class={`preview__container-item ${this.isCopied && this.copiedIndex === index ? 'copied' : ""}`} onClick={() => this.copyIconText(icon, index)}>
        <ifx-icon icon={icon}></ifx-icon>
      </div>)}
    </div>
    )
  }
}