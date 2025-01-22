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
  @State() htmlTag: string = '<ifx-icon icon="calendar-16"></ifx-icon>';
  @State() iconName: string = `"c-info-24"`;
  @Element() el;

  handleCopiedText() { 
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false
    }, 2000);
  }

  copyIconText(icon) { 
    this.htmlTag = `<ifx-icon icon="${icon}"></ifx-icon>`;
    this.iconName = `"${icon}"`
  }

  copyHtmlString() { 
    const copiedTag = `<ifx-icon icon=${this.iconName}></ifx-icon>`;
    navigator.clipboard.writeText(copiedTag);
    this.handleCopiedText()
  }

  componentWillLoad() { 
    for(let icon in icons) { 
      this.iconsArray.push(icon)
    }
  }

  render() {
    return (
      <div class='container'>
        <div class="alert__wrapper">
          <ifx-alert aria-live="assertive" variant="primary" icon="c-info-24" closable={false}>
            You can also find the UI icons in Figma for use in mockups. <ifx-link href="https://www.figma.com/design/yWwaLoqsWLWygDxXfvdym9/Infineon-DDS-%7C-UI-icon-library?node-id=13284-1289&p=f&t=SD6EdmXaSufsjPCv-0" target="_blank" size="m" variant="bold">FIGMA icon library <ifx-icon icon="arrow-right-16"></ifx-icon></ifx-link>
            </ifx-alert>
        </div>
        <div class='html-wrapper'>
          <span class="html-tag">&lt;</span>
          <span class="component-name">ifx-icon</span>
          <span class="attribute-name"> icon</span>=<span class="attribute-value">{this.iconName}</span>
          <span class="html-tag">&gt;</span>
          <span class="html-tag">&lt;/</span>
          <span class="component-name">ifx-icon</span>
          <span class="html-tag">&gt;</span>
          <button onClick={() => this.copyHtmlString()}>{this.isCopied ? 'Copied' : 'Copy'}</button>
        </div>
        <div class="preview__container">
          {this.iconsArray.map((icon, index) => 
          <div class={`preview__container-item ${this.isCopied && this.copiedIndex === index ? 'copied' : ""}`} onClick={() => this.copyIconText(icon)}>
            <ifx-icon icon={icon}></ifx-icon>
          </div>)}
        </div>
      </div>
    )
  }
}