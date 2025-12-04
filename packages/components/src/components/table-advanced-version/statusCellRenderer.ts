// statusCellRenderer.ts
import type { ICellRendererComp, ICellRendererParams } from "ag-grid-community";

type StatusConfig = {
	label: string;
	color?: string;
	border?: boolean;
};

export class StatusCellRenderer implements ICellRendererComp {
	private eGui!: HTMLDivElement;

	init(params: ICellRendererParams) {
		this.eGui = document.createElement("div");
		this.render(params);
	}

	getGui() {
		return this.eGui;
	}

	refresh(params: ICellRendererParams) {
		this.render(params);
		return true;
	}

	private render(params: ICellRendererParams) {
		const field = params.colDef?.field as string | undefined;
		const cfg = (params.value ?? params.data?.[field]) as
			| StatusConfig
			| string
			| undefined;

		this.eGui.textContent = "";

		if (cfg && typeof cfg === "object" && "label" in cfg) {
			const el = document.createElement("ifx-status") as any;
			el.label = cfg.label;
			if (cfg.color != null) el.color = cfg.color;
			el.border = !!(cfg as StatusConfig).border;
			this.eGui.appendChild(el);
		} else if (cfg != null) {
			this.eGui.textContent = String(cfg);
		}
	}
}
