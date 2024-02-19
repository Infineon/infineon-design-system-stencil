import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { ButtonInterface, ButtonKeys } from './interfaces';

export class ButtonCellRenderer implements ICellRendererComp {
  eGui!: HTMLDivElement;
  eButton: any;
  eValue: any;
  cellValue: any;
  eventListener!: () => void;

  // gets called once before the renderer is used
  init(params: ICellRendererParams) {
    console.log("render cell")

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

      // get references to the elements we want
      this.eButton = this.eGui.querySelector('ifx-button');
    }
    // // add event listener to button
    // this.eventListener = () => alert('Button clicked!');
    // this.eButton?.addEventListener('click', this.eventListener);
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

      // get references to the elements we want
      this.eButton = this.eGui.querySelector('ifx-button');
    }
    // // add event listener to button
    // this.eventListener = () => alert('Button clicked!');
    // this.eButton?.addEventListener('click', this.eventListener);
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

  // gets called when the cell is removed from the grid
  destroy() {
    // do cleanup, remove event listener from button
    if (this.eButton) {
      // check that the button element exists as destroy() can be called before getGui()
      this.eButton.removeEventListener('click', this.eventListener);
    }
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