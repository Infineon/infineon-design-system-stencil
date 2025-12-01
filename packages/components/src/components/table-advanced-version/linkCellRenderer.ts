import type { ICellRendererComp, ICellRendererParams } from "ag-grid-community";
import type { LinkInterface } from "./interfaces";

export class LinkCellRenderer implements ICellRendererComp {
	eGui!: HTMLDivElement;
	eLink!: HTMLElement;

	init(params: ICellRendererParams) {
		this.createLink(params);
	}

	getGui() {
		return this.eGui;
	}

	refresh(params: ICellRendererParams) {
		this.updateLink(params);
		return true;
	}

	private createLink(params: ICellRendererParams) {
		const field = params.colDef?.field as string | undefined;
		const config = (params.value ?? params.data?.[field]) as any;

		this.eGui = document.createElement("div");
		this.eLink = document.createElement("ifx-link") as HTMLElement;

		if (this.hasRequiredKeys(config)) {
			this.setLinkAttributes(config);
			this.eGui.appendChild(this.eLink);
		} else {
			this.eGui.textContent = config ? String(config) : "";
		}
	}

	private updateLink(params: ICellRendererParams) {
		const field = params.colDef?.field as string | undefined;
		const config = (params.value ?? params.data?.[field]) as any;

		if (this.hasRequiredKeys(config)) {
			this.setLinkAttributes(config);
		} else {
			this.eGui.textContent = config ? String(config) : "";
		}
	}

	private setLinkAttributes(config: LinkInterface) {
		this.eLink.setAttribute("disabled", config.disabled?.toString());
		this.eLink.setAttribute("variant", config.variant);
		this.eLink.setAttribute("size", config.size);
		this.eLink.setAttribute("target", config.target);
		this.eLink.setAttribute("href", config.href);
		if (config.download) this.eLink.setAttribute("download", config.download);
		this.eLink.textContent = config.text || "";
	}

	private hasRequiredKeys(config: LinkInterface): boolean {
		return !!(config && config.text && config.variant && config.size);
	}
}
