import { defineCustomElements } from "@infineon/infineon-design-system-stencil/loader";
import type { Plugin } from "vue";

import "@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.css";

export const ComponentLibrary: Plugin = {
	async install() {
		defineCustomElements();
	},
};
