import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community'; 
import { TooltipInterface } from './interfaces';

export class TooltipCellRenderer implements ICellRendererComp {
  private eGui!: HTMLDivElement;
  private eTooltip!: HTMLElement;

  init(params: ICellRendererParams): void {
    this.createTooltip(params);
  }

  getGui(): HTMLElement {
    return this.eGui;
  }

  refresh(params: ICellRendererParams): boolean {
    this.updateTooltip(params);
    return true;
  }

  private createTooltip(params: ICellRendererParams) {
    const field = params.colDef?.field as string | undefined;
    const config = (params.value ?? params.data?.[field]) as TooltipInterface;

    this.eGui = document.createElement('div');

    if (!this.hasRequiredKeys(config)) {
      this.eGui.textContent = config ? String(config) : '';
      return;
    }

    this.eTooltip = document.createElement('ifx-tooltip') as HTMLElement;
    this.setTooltipAttributes(config);

    // reference content
    this.eTooltip.textContent = config.value || '';

    this.eGui.appendChild(this.eTooltip);
  }

  private updateTooltip(params: ICellRendererParams) {
    const field = params.colDef?.field as string | undefined;
    const config = (params.value ?? params.data?.[field]) as TooltipInterface;

    if (!this.hasRequiredKeys(config)) {
      this.eGui.textContent = config ? String(config) : '';
      return;
    }

    this.setTooltipAttributes(config);
    this.eTooltip.textContent = config.value || '';
  }

  private setTooltipAttributes(config: TooltipInterface) {
    this.eTooltip.setAttribute('text', config.text);

    if (config.variant) {
      this.eTooltip.setAttribute('variant', config.variant);
    }

    if (config.position) {
      this.eTooltip.setAttribute('position', config.position);
    }

    if (config.icon) {
      this.eTooltip.setAttribute('icon', config.icon);
    }

    if (config.ariaLabel) {
      this.eTooltip.setAttribute('aria-label', config.ariaLabel);
    }
  }

  private hasRequiredKeys(config: TooltipInterface): boolean {
    return !!(config && config.text);
  }
}
