import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'ifx-download',
  styleUrl: './download.scss',
  shadow: true
})
export class Download {
  @Prop() tokens: 'css' | 'scss' = 'css';

  render() {
    const fileName = `infineon-tokens.${this.tokens}`;
    
    return (
      <a 
        href={`/tokens/${fileName}`} 
        download={fileName}
        class="download__wrapper"
      >
        <slot />
      </a>
    );
  }
}