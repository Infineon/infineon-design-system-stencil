import { defineCustomElements } from "@infineon/infineon-design-system-stencil/loader";
import type { Plugin } from "vue";

export const ComponentLibrary: Plugin = {
	async install() {
		defineCustomElements();
	},
};
