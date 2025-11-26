import { IHeaderComp, IHeaderParams } from 'ag-grid-community';

export class CheckboxHeaderRenderer implements IHeaderComp {
  eGui!: HTMLDivElement;
  eCheckbox!: HTMLElement;
  params!: IHeaderParams & { onSelectAll?: (checked: boolean) => void };

  init(params: IHeaderParams & { onSelectAll?: (checked: boolean) => void }) {
    this.params = params;
    this.createHeader();
  }

  getGui() {
    return this.eGui;
  }

  refresh(params: IHeaderParams): boolean {
    this.params = { ...this.params, ...params };
    return true;
  }

  private createHeader() {
    this.eGui = document.createElement('div');
    this.eGui.style.display = 'flex';
    this.eGui.style.alignItems = 'center';
    this.eGui.style.justifyContent = 'center';

    this.eCheckbox = document.createElement('ifx-checkbox');
    this.eCheckbox.setAttribute('size', 's');
    this.eCheckbox.setAttribute('checked', 'false');

    // Listen for the appropriate event from your ifx-checkbox component
    this.eCheckbox.addEventListener('ifxChange', (event: any) => {
      console.log('event.detail', event.detail)
      console.log('event.target', event.target)
      const checked = event.detail;
      if (this.params.onSelectAll) {
        this.params.onSelectAll(checked);
      }
    });

    this.eGui.appendChild(this.eCheckbox);
  }
}
