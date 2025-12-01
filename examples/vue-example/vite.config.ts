import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
	base: "./",
	plugins: [
		vue({
			template: {
				compilerOptions: {
					// treat all tags that start with "ifx-" as custom elements
					isCustomElement: (tag) => tag.includes("ifx-"),
				},
			},
		}),
		vueDevTools(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
