import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { ButtonInterface, ButtonKeys } from './interfaces';

export class ButtonCellRenderer implements ICellRendererComp {
  eGui!: HTMLDivElement;
  eValue: any;
  cellValue: any;
  eventListener!: () => void;

  // gets called once before the renderer is used
  init(params: ICellRendererParams) {

    const config = params.data.button;
    this.eGui = document.createElement('div');

    if (this.hasRequiredKeys(config)) {
      // create the cell
      this.eGui.innerHTML = `
        <span>
          <ifx-button
          disabled=${config.disabled}
          variant=${config.variant}
          size=${config.size}
          target=${config.target}
          color=${config.color}>
          ${config.text}
        </ifx-button>
        </span>
       `;

    }
    else {
      this.eGui.innerHTML = `
      <span>
        ${config}
      </span>
     `;
    }
  }


  getGui() {
    return this.eGui;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams) {
    // set value into cell again
    const config = params.data.button;
    this.eGui = document.createElement('div');
    if (this.hasRequiredKeys(config)) {
      // create the cell
      this.eGui.innerHTML = `
        <span>
          <ifx-button
          disabled=${config.disabled}
          variant=${config.variant}
          size=${config.size}
          target=${config.target}
          color=${config.color}>
          ${config.text}
        </ifx-button>
        </span>
       `;

    }

    else {
      this.eGui.innerHTML = `
      <span>
        ${config}
      </span>
     `;
    }
    // return true to tell the grid we refreshed successfully
    return true;
  }


  getFieldValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

  isObject(value: any): value is Object {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  hasRequiredKeys(obj: any): obj is ButtonInterface {
    if (!this.isObject(obj)) return false;
    return ButtonKeys.every(key => key in obj);
  }


}