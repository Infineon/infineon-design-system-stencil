import { newSpecPage } from "jest-stencil-runner";
import { MultiselectGroup } from "./multiselect-group";
import { MultiselectOption } from "./multiselect-option";

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

	it("blocks child interaction while disabled and restores enabled children", async () => {
		const page = await newSpecPage({
			components: [MultiselectGroup, MultiselectOption],
			html: `
				<ifx-multiselect-group label="Revenue" disabled>
					<ifx-multiselect-option value="total">Total</ifx-multiselect-option>
				</ifx-multiselect-group>
			`,
		});
		const option = page.root.querySelector("ifx-multiselect-option");

		option.dispatchEvent(new Event("click", { bubbles: true }));
		await page.waitForChanges();
		expect(option.selected).toBe(false);

		(page.root as HTMLIfxMultiselectGroupElement).disabled = false;
		await page.waitForChanges();
		option.dispatchEvent(new Event("click", { bubbles: true }));
		await page.waitForChanges();

		expect(option.selected).toBe(true);
		expect(option.disabled).toBe(false);
	});

	it("preserves an individually disabled child when the group is enabled", async () => {
		const page = await newSpecPage({
			components: [MultiselectGroup, MultiselectOption],
			html: `
				<ifx-multiselect-group label="Revenue" disabled>
					<ifx-multiselect-option value="total" disabled>Total</ifx-multiselect-option>
				</ifx-multiselect-group>
			`,
		});
		const option = page.root.querySelector("ifx-multiselect-option");

		(page.root as HTMLIfxMultiselectGroupElement).disabled = false;
		await page.waitForChanges();
		option.dispatchEvent(new Event("click", { bubbles: true }));
		await page.waitForChanges();

		expect(option.disabled).toBe(true);
		expect(option.selected).toBe(false);
	});
});