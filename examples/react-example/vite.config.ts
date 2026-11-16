import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { getDisplayVersion } from "../../scripts/display-version.mjs";

// https://vite.dev/config/
export default defineConfig({
	define: {
		"import.meta.env.VITE_PACKAGE_VERSION":
			JSON.stringify(getDisplayVersion()) ?? "undefined",
	},
	base: "./",
	plugins: [react()],
	clearScreen: false,
});
