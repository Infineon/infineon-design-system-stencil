import type { ICellRendererComp, ICellRendererParams } from "ag-grid-community";
import type { IconButtonInterface } from "./interfaces";

export class IconButtonCellRenderer implements ICellRendererComp {
	eGui!: HTMLDivElement;
	eIconButton!: HTMLElement;
	eventListener!: (event: Event) => void;

	init(params: ICellRendererParams) {
		this.createIconButton(params);
	}

	getGui() {
		return this.eGui;
	}

	refresh(params: ICellRendererParams) {
		this.updateIconButton(params);
		return true;
	}

	private createIconButton(params: ICellRendererParams) {
		const config = params.data[params.colDef.field];
		const options = params.colDef.cellRendererParams || {};

		this.eGui = document.createElement("div");
		this.eIconButton = document.createElement("ifx-icon-button") as HTMLElement;

		if (this.hasRequiredKeys(config)) {
			this.setIconButtonAttributes(config);
			this.eGui.appendChild(this.eIconButton);
			this.attachEventListener(options, params);
		} else {
			this.eGui.textContent = config ? String(config) : "";
		}
	}

	private updateIconButton(params: ICellRendererParams) {
		const config = params.data[params.colDef.field];
		const options = params.colDef.cellRendererParams || {};

		if (this.hasRequiredKeys(config)) {
			this.setIconButtonAttributes(config);
			this.detachEventListener();
			this.attachEventListener(options, params);
		} else {
			this.eGui.textContent = config ? String(config) : "";
		}
	}

	private setIconButtonAttributes(config: IconButtonInterface) {
		this.eIconButton.setAttribute("disabled", config.disabled.toString());
		this.eIconButton.setAttribute("variant", config.variant);
		this.eIconButton.setAttribute("shape", config.shape);
		this.eIconButton.setAttribute("size", config.size);
		this.eIconButton.setAttribute("target", config.target);
		this.eIconButton.setAttribute("href", config.href);
		this.eIconButton.setAttribute("icon", config.icon);
	}

	private attachEventListener(options: any, params: ICellRendererParams) {
		this.eventListener = (event: Event) => {
			if (options.onIconButtonClick) {
				options.onIconButtonClick(params, event);
			}
		};
		this.eIconButton.addEventListener("click", this.eventListener);
	}

	private detachEventListener() {
		if (this.eventListener) {
			this.eIconButton.removeEventListener("click", this.eventListener);
		}
	}

	private hasRequiredKeys(config: IconButtonInterface): boolean {
		return (
			config &&
			config.variant !== "" &&
			config.size !== "" &&
			config.shape !== ""
		);
	}
}
