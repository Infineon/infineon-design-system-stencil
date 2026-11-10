import { defineConfig } from "vite";
import { getDisplayVersion } from "../../scripts/display-version.mjs";

export default defineConfig({
	define: {
		"import.meta.env.VITE_PACKAGE_VERSION":
			JSON.stringify(getDisplayVersion()) ?? "undefined",
	},
	base: "./",
	root: "./src",
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		sourcemap: true,
	},
	clearScreen: false,
});
