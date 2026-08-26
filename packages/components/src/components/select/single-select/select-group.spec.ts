import { newSpecPage } from "jest-stencil-runner";
import { SelectGroup } from "./select-group";
import { SelectOption } from "./select-option";

describe("ifx-select-group", () => {
	it("renders a group role with the label heading", async () => {
		const page = await newSpecPage({
			components: [SelectGroup],
			html: `<ifx-select-group label="Fruits"></ifx-select-group>`,
		});
		expect(page.root.getAttribute("role")).toBe("group");
		expect(page.root.getAttribute("aria-label")).toBe("Fruits");
		const heading = page.root.shadowRoot.querySelector(".group-heading");
		expect(heading.textContent).toContain("Fruits");
		expect(heading.getAttribute("aria-hidden")).toBe("true");
	});

	it("disables all contained options when the group is disabled", async () => {
		const page = await newSpecPage({
			components: [SelectGroup, SelectOption],
			html: `<ifx-select-group label="Fruits" disabled="true">
				<ifx-select-option value="a">Apple</ifx-select-option>
				<ifx-select-option value="b">Banana</ifx-select-option>
			</ifx-select-group>`,
		});
		await page.waitForChanges();
		const options = page.root.querySelectorAll("ifx-select-option");
		options.forEach((opt) => {
			expect((opt as HTMLIfxSelectOptionElement).disabled).toBe(true);
		});
	});
});
