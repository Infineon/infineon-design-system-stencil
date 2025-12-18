import { newSpecPage } from "jest-stencil-runner";
import { TextField } from "./text-field";

// Mock the AttachInternals decorator rather than ElementInternals class
jest.mock("@stencil/core", () => {
	const originalModule = jest.requireActual("@stencil/core");
	return {
		...originalModule,
		AttachInternals: () => ({
			// This creates a decorator function that sets up a mock internals object
			descriptor: {
				get() {
					return {
						//setFormValue: jest.fn(),
						//setValidity: jest.fn(),
						// Add other methods if needed
					};
				},
			},
		}),
	};
});

describe("ifx-text-field", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [TextField],
			html: `<ifx-text-field>Label Text</ifx-text-field>`,
		});

		// Basic rendering check
		expect(page.root).toBeTruthy();
		expect(page.root.shadowRoot).toBeTruthy();

		// Check container and attributes
		const container = page.root.shadowRoot.querySelector(
			".textInput__container",
		);
		expect(container).toBeTruthy();
		expect(container.getAttribute("aria-label")).toBe(
			"a text field for user input",
		);
		expect(container.getAttribute("aria-disabled")).toBe(null);

		// Check input element
		const input = page.root.shadowRoot.querySelector("input");
		expect(input).toBeTruthy();
		expect(input.getAttribute("placeholder")).toBe("Placeholder");
		expect(input.getAttribute("type")).toBe("text");
		expect(input.disabled).toBe(false);

		// Check that no error or success classes exist
		expect(input.classList.contains("error")).toBe(false);
		expect(input.classList.contains("success")).toBe(false);

		// No icon should be present by default
		const icon = page.root.shadowRoot.querySelector(".input-icon");
		expect(icon).toBeFalsy();

		// No caption should be present by default
		const caption = page.root.shadowRoot.querySelector(
			".textInput__bottom-wrapper-caption",
		);
		expect(caption).toBeFalsy();
	});

	// Rest of tests remain the same
	it("renders with icon", async () => {
		const page = await newSpecPage({
			components: [TextField],
			html: `<ifx-text-field icon="test-icon">Label with Icon</ifx-text-field>`,
		});

		// Check icon is rendered
		const icon = page.root.shadowRoot.querySelector(".input-icon");
		expect(icon).toBeTruthy();
		expect(icon.getAttribute("icon")).toBe("test-icon");

		// Input should have the icon class
		const input = page.root.shadowRoot.querySelector("input");
		expect(input.classList.contains("icon")).toBe(true);
	});
});
