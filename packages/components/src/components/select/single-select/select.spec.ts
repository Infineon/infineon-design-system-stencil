import { newSpecPage } from "jest-stencil-runner";
import { Select } from "./select";
import { SelectGroup } from "./select-group";
import { SelectOption } from "./select-option";

const withOptions = `<ifx-select>
	<ifx-select-option value="a">Apple</ifx-select-option>
	<ifx-select-option value="b">Banana</ifx-select-option>
</ifx-select>`;

const selectOption = (
	page: Awaited<ReturnType<typeof newSpecPage>>,
	value: string,
) => {
	const option = Array.from(
		page.root.querySelectorAll("ifx-select-option"),
	).find((o) => o.getAttribute("value") === value);
	option?.dispatchEvent(
		new CustomEvent("ifx-option-changed", {
			bubbles: true,
			detail: { value, reason: "selected" },
		}),
	);
};

describe("ifx-select", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Select],
			html: `<ifx-select></ifx-select>`,
		});
		expect(page.root).toBeTruthy();
		expect(
			page.root.shadowRoot.querySelector(".ifx-select-wrapper"),
		).toBeTruthy();
	});

	it("shows the placeholder when nothing is selected", async () => {
		const page = await newSpecPage({
			components: [Select],
			html: `<ifx-select placeholder-value="Pick one"></ifx-select>`,
		});
		const input = page.root.shadowRoot.querySelector(".ifx-select-input");
		expect(input.textContent).toContain("Pick one");
		expect(input.classList.contains("placeholder")).toBe(true);
	});

	it("renders the label and the required asterisk", async () => {
		const page = await newSpecPage({
			components: [Select],
			html: `<ifx-select label="Country" required="true"></ifx-select>`,
		});
		expect(
			page.root.shadowRoot.querySelector(".wrapper-label").textContent,
		).toContain("Country");
		expect(page.root.shadowRoot.querySelector(".required")).toBeTruthy();
	});

	it("applies the size class", async () => {
		const page = await newSpecPage({
			components: [Select],
			html: `<ifx-select size="s"></ifx-select>`,
		});
		expect(page.root.shadowRoot.querySelector(".small-select")).toBeTruthy();
	});

	it("opens and closes the dropdown via methods", async () => {
		const page = await newSpecPage({
			components: [Select, SelectOption],
			html: withOptions,
		});
		await page.rootInstance.showDropdown();
		await page.waitForChanges();
		expect(
			page.root.shadowRoot.querySelector(".ifx-select-dropdown-menu"),
		).toBeTruthy();

		await page.rootInstance.hideDropdown();
		await page.waitForChanges();
		expect(
			page.root.shadowRoot.querySelector(".ifx-select-dropdown-menu"),
		).toBeFalsy();
	});

	it("commits a single selection and emits ifxSelect with { value, label }", async () => {
		const page = await newSpecPage({
			components: [Select, SelectOption],
			html: withOptions,
		});
		await page.waitForChanges();
		const spy = jest.fn();
		page.root.addEventListener("ifxSelect", spy);

		selectOption(page, "b");
		await page.waitForChanges();

		expect(page.root.value).toBe("b");
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({ detail: { value: "b", label: "Banana" } }),
		);
		const options = page.root.querySelectorAll("ifx-select-option");
		expect((options[0] as HTMLIfxSelectOptionElement).selected).toBe(false);
		expect((options[1] as HTMLIfxSelectOptionElement).selected).toBe(true);
	});

	it("setValue / getValue reflect the selection", async () => {
		const page = await newSpecPage({
			components: [Select, SelectOption],
			html: withOptions,
		});
		await page.waitForChanges();
		await page.rootInstance.setValue("a");
		await page.waitForChanges();
		expect(await page.rootInstance.getValue()).toBe("a");
		expect(page.root.shadowRoot.querySelector(".ifx-select-input").textContent).toContain(
			"Apple",
		);
	});

	it("clearSelection resets the value and emits null", async () => {
		const page = await newSpecPage({
			components: [Select, SelectOption],
			html: withOptions,
		});
		await page.waitForChanges();
		await page.rootInstance.setValue("a");
		await page.waitForChanges();

		const spy = jest.fn();
		page.root.addEventListener("ifxSelect", spy);
		await page.rootInstance.clearSelection();
		await page.waitForChanges();

		expect(page.root.value).toBeFalsy();
		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({ detail: null }),
		);
	});

	it("adopts an initially selected option as the value", async () => {
		const page = await newSpecPage({
			components: [Select, SelectOption],
			html: `<ifx-select>
				<ifx-select-option value="a">Apple</ifx-select-option>
				<ifx-select-option value="b" selected="true">Banana</ifx-select-option>
			</ifx-select>`,
		});
		await page.waitForChanges();
		expect(page.root.value).toBe("b");
	});

	it("renders group options via ifx-select-group", async () => {
		const page = await newSpecPage({
			components: [Select, SelectOption, SelectGroup],
			html: `<ifx-select>
				<ifx-select-group label="Fruits">
					<ifx-select-option value="a">Apple</ifx-select-option>
				</ifx-select-group>
			</ifx-select>`,
		});
		await page.waitForChanges();
		expect(page.root.querySelector("ifx-select-group")).toBeTruthy();
		// The parent discovers options nested inside a group.
		expect(page.root.querySelectorAll("ifx-select-option").length).toBe(1);
	});

	describe("a11y labelling", () => {
		const combobox = (page: Awaited<ReturnType<typeof newSpecPage>>) =>
			page.root.shadowRoot.querySelector('[role="combobox"]');

		it("links the visible label via aria-labelledby (no aria-label)", async () => {
			const page = await newSpecPage({
				components: [Select],
				html: `<ifx-select label="Country"></ifx-select>`,
			});
			const box = combobox(page);
			const labelledBy = box.getAttribute("aria-labelledby");
			expect(labelledBy).toBeTruthy();
			expect(box.getAttribute("aria-label")).toBeNull();
			expect(
				page.root.shadowRoot.querySelector(`#${labelledBy}`),
			).toBeTruthy();
		});

		it("falls back to ariaSelectLabel when there is no visible label", async () => {
			const page = await newSpecPage({
				components: [Select],
				html: `<ifx-select></ifx-select>`,
			});
			expect(combobox(page).getAttribute("aria-label")).toBe("Select");
			expect(combobox(page).getAttribute("aria-labelledby")).toBeFalsy();
		});

		it("links the caption via aria-describedby", async () => {
			const page = await newSpecPage({
				components: [Select],
				html: `<ifx-select caption="Helper text"></ifx-select>`,
			});
			const describedBy = combobox(page).getAttribute("aria-describedby");
			expect(describedBy).toBeTruthy();
			expect(
				page.root.shadowRoot.querySelector(`#${describedBy}`),
			).toBeTruthy();
		});

		it("honours an external ariaSelectLabelledBy", async () => {
			const page = await newSpecPage({
				components: [Select],
				html: `<ifx-select label="Country" aria-select-labelled-by="ext-id"></ifx-select>`,
			});
			expect(combobox(page).getAttribute("aria-labelledby")).toBe("ext-id");
		});
	});
});
