import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';

export class CustomNoRowsOverlay implements ICellRendererComp {
  eGui!: HTMLElement;

  init(params: ICellRendererParams & { noRowsMessageFunc: () => string }) {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = `
            <div role="presentation" class="ag-overlay-loading-center" >
               ${params.noRowsMessageFunc()}
            </div>
        `;
  }

  getGui() {
    return this.eGui;
  }

  refresh(_params: ICellRendererParams): boolean {
    return false;
  }
}