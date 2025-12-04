import type { ICellRendererComp, ICellRendererParams } from "ag-grid-community";
import type { ButtonInterface } from "./interfaces";

export class ButtonCellRenderer implements ICellRendererComp {
	eGui!: HTMLDivElement;
	eButton!: HTMLElement; // Change to a generic HTMLElement to accommodate custom elements
	eventListener!: (event: Event) => void;

	init(params: ICellRendererParams) {
		this.createButton(params);
	}

	getGui() {
		return this.eGui;
	}

	refresh(params: ICellRendererParams) {
		this.updateButton(params);
		return true;
	}

	private createButton(params: ICellRendererParams) {
		const config = params.data[params.colDef.field];
		const options = params.colDef.cellRendererParams || {};

		this.eGui = document.createElement("div");
		this.eButton = document.createElement("ifx-button") as HTMLElement;

		if (this.hasRequiredKeys(config)) {
			this.setButtonAttributes(config);
			this.eGui.appendChild(this.eButton);
			this.attachEventListener(options, params);
		} else {
			this.eGui.textContent = config ? String(config) : "";
		}
	}

	private updateButton(params: ICellRendererParams) {
		const config = params.data[params.colDef.field];
		const options = params.colDef.cellRendererParams || {};

		if (this.hasRequiredKeys(config)) {
			this.setButtonAttributes(config);
			this.detachEventListener();
			this.attachEventListener(options, params);
		} else {
			this.eGui.textContent = config ? String(config) : "";
		}
	}

	private setButtonAttributes(config: ButtonInterface) {
		this.eButton.setAttribute("disabled", config.disabled.toString());
		this.eButton.setAttribute("variant", config.variant);
		this.eButton.setAttribute("theme", config.theme);
		this.eButton.setAttribute("type", config.type);
		this.eButton.setAttribute("size", config.size);
		this.eButton.setAttribute("full-width", config.fullWidth.toString());
		this.eButton.setAttribute("target", config.target);
		this.eButton.setAttribute("href", config.href);
		this.eButton.textContent = config.text;
	}

	private attachEventListener(options: any, params: ICellRendererParams) {
		this.eventListener = (event: Event) => {
			if (options.onButtonClick) {
				options.onButtonClick(params, event);
			}
		};
		this.eButton.addEventListener("click", this.eventListener);
	}

	private detachEventListener() {
		if (this.eventListener) {
			this.eButton.removeEventListener("click", this.eventListener);
		}
	}

	private hasRequiredKeys(config: ButtonInterface): boolean {
		return (
			config &&
			config.text !== "" &&
			config.variant !== "" &&
			config.size !== "" &&
			config.type !== ""
		);
	}
}
