import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { StatusInterface } from './interfaces';

export class StatusCellRenderer implements ICellRendererComp {
  eGui!: HTMLDivElement;
  eStatus!: HTMLElement;
  eventListener!: (event: Event) => void;

  init(params: ICellRendererParams) {
    this.createStatus(params);
  }

  getGui() {
    return this.eGui;
  }

  refresh(params: ICellRendererParams) {
    this.updateStatus(params);
    return true;
  }

  private createStatus(params: ICellRendererParams) {
    const config = params.data.status;

    this.eGui = document.createElement('div');
    this.eStatus = document.createElement('ifx-status') as HTMLElement;
    
    if (this.hasRequiredKeys(config)) {
      this.setStatusAttributes(config);
      this.eGui.appendChild(this.eStatus);
    } else {
      this.eGui.innerHTML = `<span>${config}</span>`;
    }
  }

  private updateStatus(params: ICellRendererParams) {
    const config = params.data.status;
    if (this.hasRequiredKeys(config)) {
      this.setStatusAttributes(config);
    } else {
      this.eGui.innerHTML = `<span>${config}</span>`;
    }
  }

  private setStatusAttributes(config: StatusInterface) {
    this.eStatus.setAttribute('border', config.border.toString());
    this.eStatus.setAttribute('color', config.color);
    this.eStatus.setAttribute('label', config.label);
  }

  private hasRequiredKeys(config: StatusInterface): boolean {
    return config && config.label !== '';
  }
}
