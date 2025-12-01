import { newSpecPage } from "jest-stencil-runner";
import { Status } from "./status";

describe("ifx-status", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Status],
			html: `<ifx-status></ifx-status>`,
		});

		const container = page.root.shadowRoot.querySelector(".container");
		expect(container).toBeTruthy();
		expect(container.classList.contains("no-border")).toBeTruthy();

		const dot = page.root.shadowRoot.querySelector(".dot");
		expect(dot.classList.contains("orange-500")).toBeTruthy();
	});

	it("renders with custom label", async () => {
		const page = await newSpecPage({
			components: [Status],
			html: `<ifx-status label="Active"></ifx-status>`,
		});

		const text = page.root.shadowRoot.querySelector(".text");
		expect(text.textContent).toBe("Active");
	});

	it("renders with border and custom color", async () => {
		const page = await newSpecPage({
			components: [Status],
			html: `<ifx-status border="true" color="green-500"></ifx-status>`,
		});

		const container = page.root.shadowRoot.querySelector(".container");
		expect(container.classList.contains("border-green-500")).toBeTruthy();

		const dot = page.root.shadowRoot.querySelector(".dot");
		expect(dot.classList.contains("green-500")).toBeTruthy();
	});

	it("uses default color when color is empty", async () => {
		const page = await newSpecPage({
			components: [Status],
			html: `<ifx-status color=""></ifx-status>`,
		});

		const dot = page.root.shadowRoot.querySelector(".dot");
		expect(dot.classList.contains("orange-500")).toBeTruthy();
	});
});
