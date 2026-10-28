import { newSpecPage } from "jest-stencil-runner";
import { Chip } from "./chip";
import { ChipItem } from "./chip-item/chip-item";

describe("chip selection labels", () => {
	it.each([
		"single",
		"multi",
	])("keeps labels after %s selection and preserves event values", async (variant) => {
		const page = await newSpecPage({
			components: [Chip, ChipItem],
			html: `<ifx-chip variant="${variant}"><ifx-chip-item value="internal-id">Display label</ifx-chip-item></ifx-chip>`,
		});
		const change = jest.fn();
		page.root.addEventListener("ifxChange", change);
		page.rootInstance.updateSelectedOptions(
			new CustomEvent("ifxChipItemSelect", {
				detail: {
					value: "internal-id",
					label: "Display label",
					selected: true,
					key: 0,
					emitIfxChange: true,
				},
			}),
		);
		await page.waitForChanges();
		expect(
			page.root.shadowRoot.querySelector(".label__selected-options")
				.textContent,
		).toBe("Display label");
		expect(page.root.value).toEqual(
			variant === "multi" ? ["internal-id"] : "internal-id",
		);
		expect(change).toHaveBeenCalledTimes(1);
		expect(change.mock.calls[0][0].detail.currentSelection[0]).toMatchObject({
			value: "internal-id",
			label: "Display label",
		});
	});

	it("resolves an initial value from slotted item text", async () => {
		const page = await newSpecPage({
			components: [Chip, ChipItem],
			html: `<ifx-chip value="internal-id"><ifx-chip-item value="internal-id">Display label</ifx-chip-item></ifx-chip>`,
		});
		expect(
			page.root.shadowRoot.querySelector(".label__selected-options")
				.textContent,
		).toBe("Display label");
	});

	it("resolves programmatic multi values, keeps order, and clears selection", async () => {
		const page = await newSpecPage({
			components: [Chip, ChipItem],
			html: `<ifx-chip variant="multi"><ifx-chip-item value="one">First label</ifx-chip-item><ifx-chip-item value="two">Second label</ifx-chip-item></ifx-chip>`,
		});
		page.root.value = ["two", "one"];
		await page.waitForChanges();
		expect(
			page.root.shadowRoot.querySelector(".label__selected-options")
				.textContent,
		).toBe("Second label, First label");
		expect(page.root.value).toEqual(["two", "one"]);
		page.root.value = [];
		await page.waitForChanges();
		expect(
			page.root.shadowRoot.querySelector(".label__selected-options"),
		).toBeNull();
	});

	it("retains the value fallback when there is no matching item", async () => {
		const page = await newSpecPage({
			components: [Chip],
			html: `<ifx-chip value="unlisted"></ifx-chip>`,
		});
		expect(
			page.root.shadowRoot.querySelector(".label__selected-options")
				.textContent,
		).toBe("unlisted");
	});
});
