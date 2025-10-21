import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { LinkInterface } from './interfaces';

export class LinkCellRenderer implements ICellRendererComp {
  eGui!: HTMLDivElement;
  eLink!: HTMLElement; 
  eventListener!: (event: Event) => void;

  init(params: ICellRendererParams) {
    this.createLink(params);
  }

  getGui() {
    return this.eGui;
  }

  refresh(params: ICellRendererParams) {
    this.updateLink(params);
    return true;
  }

  private createLink(params: ICellRendererParams) {
    const config = params.data.link;
    
    this.eGui = document.createElement('div');
    this.eLink = document.createElement('ifx-link') as unknown as HTMLElement;
    
    if (this.hasRequiredKeys(config)) {
      this.setLinkAttributes(config);
      this.eGui.appendChild(this.eLink);
    } else {
      this.eGui.innerHTML = `<span>${config}</span>`;
    }
  }

  private updateLink(params: ICellRendererParams) {
    const config = params.data.link;

    if (this.hasRequiredKeys(config)) {
      this.setLinkAttributes(config);
    } else {
      this.eGui.innerHTML = `<span>${config}</span>`;
    }
  }

  private setLinkAttributes(config: LinkInterface) {
    this.eLink.setAttribute('disabled', config.disabled.toString());
    this.eLink.setAttribute('variant', config.variant);
    this.eLink.setAttribute('size', config.size);
    this.eLink.setAttribute('target', config.target);
    this.eLink.setAttribute('href', config.href);
    this.eLink.setAttribute('download', config.download);
    this.eLink.textContent = config.text;
  }

  private hasRequiredKeys(config: LinkInterface): boolean {
    return config && config.text !== '' && config.variant !== '' && config.size !== '';
  }
}
