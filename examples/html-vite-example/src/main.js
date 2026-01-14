import "@infineon/infineon-design-system-stencil";
import "@infineon/infineon-design-system-stencil/styles.css";

// Below is specific for this example project. It is not required when using the design system in your own project.

// Import Prism.js for syntax highlighting
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";

// Import version information
import packageJson from "../package.json";

const declaredVersion =
	packageJson.dependencies["@infineon/infineon-design-system-stencil"];

// Display version information
document.addEventListener("DOMContentLoaded", () => {
	const versionDisplay = document.getElementById("version-display");
	if (versionDisplay) {
		const displayVersion = declaredVersion.includes("workspace")
			? "workspace"
			: declaredVersion.replace(/^[\^~]/, "");
		versionDisplay.textContent = `@infineon/infineon-design-system-stencil@${displayVersion}`;
	}

	// Initialize Prism syntax highlighting
	Prism.highlightAll();
});

// Re-highlight when details elements are opened
document.addEventListener(
	"toggle",
	(event) => {
		if (event.target.tagName === "DETAILS" && event.target.open) {
			const codeBlocks = event.target.querySelectorAll("code");
			codeBlocks.forEach((block) => {
				Prism.highlightElement(block);
			});
		}
	},
	true,
);
