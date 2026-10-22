import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";
import { getDisplayVersion } from "../../scripts/display-version.mjs";

// https://vite.dev/config/
export default defineConfig({
	define: {
		"import.meta.env.VITE_PACKAGE_VERSION":
			JSON.stringify(getDisplayVersion()) ?? "undefined",
	},
	base: "./",
	plugins: [
		vue(),
		vueDevTools(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	clearScreen: false,
});
