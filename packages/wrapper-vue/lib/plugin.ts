import { defineCustomElements } from "@infineon/design-system/loader";
import type { Plugin } from "vue";

export const ComponentLibrary: Plugin = {
	async install() {
		defineCustomElements();
	},
};
