import type { IHeaderComp, IHeaderParams } from "ag-grid-community";

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
		this.eGui = document.createElement("div");
		this.eGui.style.display = "flex";
		this.eGui.style.alignItems = "center";
		this.eGui.style.justifyContent = "center";

		this.eCheckbox = document.createElement("ifx-checkbox");
		this.eCheckbox.setAttribute("size", "s");
		this.eCheckbox.setAttribute("checked", "false");

		this.eCheckbox.addEventListener("ifxChange", (event: any) => {
			const checked = event.detail;
			if (this.params.onSelectAll) {
				this.params.onSelectAll(checked);
			}
		});

		this.eGui.appendChild(this.eCheckbox);
	}
}
