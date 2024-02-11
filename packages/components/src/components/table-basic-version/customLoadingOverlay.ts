import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';

export class CustomLoadingOverlay implements ICellRendererComp {
  eGui!: HTMLElement;

  init(_params: ICellRendererParams & { loadingMessage: string }) {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = `<div class="ag-overlay-loading-center" role="presentation">
<ifx-spinner></ifx-spinner>
            </div>`;
  }

  getGui() {
    return this.eGui;
  }

  refresh(_params: ICellRendererParams): boolean {
    return false;
  }
}