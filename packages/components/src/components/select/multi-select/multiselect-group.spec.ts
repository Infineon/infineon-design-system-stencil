import { newSpecPage } from "jest-stencil-runner";
import { MultiselectGroup } from "./multiselect-group";

describe("ifx-multiselect-group", () => {
	it("renders its heading", async () => {
		const page = await newSpecPage({
			components: [MultiselectGroup],
			html: `<ifx-multiselect-group label="Revenue"></ifx-multiselect-group>`,
		});

		expect(page.root.shadowRoot.querySelector(".group-heading").textContent).toBe(
			"Revenue",
		);
	});

	it("exposes group semantics", async () => {
		const page = await newSpecPage({
			components: [MultiselectGroup],
			html: `<ifx-multiselect-group label="Revenue"></ifx-multiselect-group>`,
		});

		expect(page.root.getAttribute("role")).toBe("group");
		expect(page.root.getAttribute("aria-label")).toBe("Revenue");
	});
});