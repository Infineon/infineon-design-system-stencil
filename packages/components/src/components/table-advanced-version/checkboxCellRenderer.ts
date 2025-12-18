import type { ICellRendererComp, ICellRendererParams } from "ag-grid-community";
import type { CheckboxInterface } from "./interfaces";

export class CheckboxCellRenderer implements ICellRendererComp {
	eGui!: HTMLDivElement;
	eCheckbox!: HTMLElement;
	eventListener!: (event: Event) => void;

	init(params: ICellRendererParams) {
		this.createCheckbox(params);
	}

	getGui() {
		return this.eGui;
	}

	refresh(params: ICellRendererParams) {
		this.updateCheckbox(params);
		return true;
	}

	private createCheckbox(params: ICellRendererParams) {
		const config = params.data[params.colDef.field];
		const options = params.colDef.cellRendererParams || {};
		this.eGui = document.createElement("div");
		this.eGui.style.display = "flex";
		this.eGui.style.alignItems = "center";
		this.eGui.style.justifyContent = "center";
		this.eCheckbox = document.createElement("ifx-checkbox") as HTMLElement;

		if (this.hasRequiredKeys(config)) {
			this.setCheckboxAttributes(config);
			this.eGui.appendChild(this.eCheckbox);
			this.attachEventListener(options, params);
		} else {
			this.eGui.textContent = config ? String(config) : "No checkbox data";
		}
	}

	private updateCheckbox(params: ICellRendererParams) {
		const config = params.data[params.colDef.field];
		const options = params.colDef.cellRendererParams || {};

		if (this.hasRequiredKeys(config)) {
			this.setCheckboxAttributes(config);
			this.detachEventListener();
			this.attachEventListener(options, params);
		} else {
			this.eGui.textContent = config ? String(config) : "";
		}
	}

	private setCheckboxAttributes(config: CheckboxInterface) {
		this.eCheckbox.setAttribute("disabled", config.disabled.toString());
		this.eCheckbox.setAttribute("error", config.error.toString());
		this.eCheckbox.setAttribute("size", config.size);
		this.eCheckbox.setAttribute("checked", config.checked.toString());
		this.eCheckbox.setAttribute(
			"indeterminate",
			config.indeterminate.toString(),
		);
	}

	private attachEventListener(options: any, params: ICellRendererParams) {
		this.eventListener = (event: Event) => {
			if (options.onCheckboxClick) {
				options.onCheckboxClick(params, event);
			}
		};
		this.eCheckbox.addEventListener("click", this.eventListener);
	}

	private detachEventListener() {
		if (this.eventListener) {
			this.eCheckbox.removeEventListener("click", this.eventListener);
		}
	}

	private hasRequiredKeys(config: CheckboxInterface): boolean {
		return config && config.size !== "";
	}
}
