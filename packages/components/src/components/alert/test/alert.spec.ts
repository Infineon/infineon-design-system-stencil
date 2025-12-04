import { newSpecPage } from "jest-stencil-runner";
import { Alert } from "../alert";

describe("ifx-alert", () => {
	it("should render", async () => {
		const { root } = await newSpecPage({
			components: [Alert],
			html: `<ifx-alert></ifx-alert>`,
		});

		const alertElement = root.shadowRoot.querySelector(".alert");
		expect(alertElement).toBeDefined();
	});

	it("should set the correct variant", async () => {
		const { root } = await newSpecPage({
			components: [Alert],
			html: `<ifx-alert variant="primary"></ifx-alert>`,
		});

		expect(root.getAttribute("variant")).toBe("primary");
	});

	it("should set the correct icon", async () => {
		const { root } = await newSpecPage({
			components: [Alert],
			html: `<ifx-alert icon="c-info-16"></ifx-alert>`,
		});

		expect(root.getAttribute("icon")).toBe("c-info-16");
	});

	it("should display the correct icon", async () => {
		const { root } = await newSpecPage({
			components: [Alert],
			html: `<ifx-alert icon="c-info-16"></ifx-alert>`,
		});

		const iconElement = root.shadowRoot.querySelector(
			".close-icon-wrapper > button > ifx-icon",
		);
		expect(iconElement.getAttribute("icon")).toBe("cross-16");
	});
});
