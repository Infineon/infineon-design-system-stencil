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

globalThis.Prism = Prism;

// Import version information
import packageJson from "../package.json";

const declaredVersion =
	packageJson.dependencies["@infineon/infineon-design-system-stencil"];

// Display version information
document.addEventListener("DOMContentLoaded", () => {
	const versionDisplay = document.getElementById("version-display");
	const form = document.getElementById("form-associated-demo");
	const formOutput = document.getElementById("form-associated-output");
	const scheduleFormStateRender = () => {
		requestAnimationFrame(() => {
			renderFormState();
		});
	};
	if (versionDisplay) {
		const displayVersion = declaredVersion.includes("workspace")
			? "workspace"
			: declaredVersion.replace(/^[\^~]/, "");
		versionDisplay.textContent = `@infineon/infineon-design-system-stencil@${displayVersion}`;
	}

	const serializeFormData = (formData) => {
		const result = {};
		for (const [key, value] of formData.entries()) {
			if (key in result) {
				result[key] = Array.isArray(result[key])
					? [...result[key], value]
					: [result[key], value];
			} else {
				result[key] = value;
			}
		}
		return result;
	};

	const renderFormState = () => {
		if (!form || !formOutput) {
			return;
		}
		const values = serializeFormData(new FormData(form));
		formOutput.textContent = Object.keys(values).length
			? JSON.stringify(values, null, 2)
			: "{}";
	};

	if (form && formOutput) {
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			renderFormState();
		});

		form.addEventListener("reset", scheduleFormStateRender);
		form.addEventListener("input", scheduleFormStateRender);
		form.addEventListener("change", scheduleFormStateRender);
		form.addEventListener("ifxInput", scheduleFormStateRender);
		form.addEventListener("ifxChange", scheduleFormStateRender);

		renderFormState();
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
