import { newSpecPage } from "jest-stencil-runner";
import { SelectOption } from "./select-option";

describe("ifx-select-option", () => {
	it("renders with role option", async () => {
		const page = await newSpecPage({
			components: [SelectOption],
			html: `<ifx-select-option value="a">Apple</ifx-select-option>`,
		});
		const option = page.root.shadowRoot.querySelector(".option");
		expect(option).toBeTruthy();
		expect(option.getAttribute("role")).toBe("option");
	});

	it("reflects the selected state and shows the check icon", async () => {
		const page = await newSpecPage({
			components: [SelectOption],
			html: `<ifx-select-option value="a" selected="true">Apple</ifx-select-option>`,
		});
		expect(page.root.getAttribute("selected")).not.toBeNull();
		expect(
			page.root.shadowRoot.querySelector(".option-check"),
		).toBeTruthy();
		expect(
			page.root.shadowRoot
				.querySelector(".option")
				.getAttribute("aria-selected"),
		).toBe("true");
	});

	it("reflects the disabled state", async () => {
		const page = await newSpecPage({
			components: [SelectOption],
			html: `<ifx-select-option value="a" disabled="true">Apple</ifx-select-option>`,
		});
		expect(
			page.root.shadowRoot
				.querySelector(".option")
				.classList.contains("option--disabled"),
		).toBe(true);
	});

	it("emits a bubbling ifx-option-changed on click", async () => {
		const page = await newSpecPage({
			components: [SelectOption],
			html: `<ifx-select-option value="a">Apple</ifx-select-option>`,
		});
		const spy = jest.fn();
		page.root.addEventListener("ifx-option-changed", spy);
		page.root.click();
		await page.waitForChanges();

		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				detail: expect.objectContaining({ value: "a", reason: "selected" }),
			}),
		);
		expect(page.rootInstance.selected).toBe(true);
	});

	it("does not select when disabled", async () => {
		const page = await newSpecPage({
			components: [SelectOption],
			html: `<ifx-select-option value="a" disabled="true">Apple</ifx-select-option>`,
		});
		page.root.click();
		await page.waitForChanges();
		expect(page.rootInstance.selected).toBe(false);
	});

	describe("search (exact substring, incl. numbers)", () => {
		const dispatchSearch = (
			page: Awaited<ReturnType<typeof newSpecPage>>,
			term: string,
		) =>
			page.root.dispatchEvent(
				new CustomEvent("ifx-search-filter", {
					detail: { searchTerm: term, isActive: term !== "" },
				}),
			);

		it("matches an exact numeric query", async () => {
			const page = await newSpecPage({
				components: [SelectOption],
				html: `<ifx-select-option value="y2026">2026</ifx-select-option>`,
			});
			dispatchSearch(page, "2026");
			await page.waitForChanges();
			const option = page.root.shadowRoot.querySelector(".option");
			expect(option.classList.contains("search-match")).toBe(true);
			expect(option.classList.contains("search-hidden")).toBe(false);
		});

		it("does NOT fuzzy-match a different number (2026 must not match 2020)", async () => {
			const page = await newSpecPage({
				components: [SelectOption],
				html: `<ifx-select-option value="y2020">2020</ifx-select-option>`,
			});
			dispatchSearch(page, "2026");
			await page.waitForChanges();
			const option = page.root.shadowRoot.querySelector(".option");
			expect(option.classList.contains("search-hidden")).toBe(true);
			expect(option.classList.contains("search-match")).toBe(false);
		});

		it("matches a numeric substring (202 matches 2020)", async () => {
			const page = await newSpecPage({
				components: [SelectOption],
				html: `<ifx-select-option value="y2020">2020</ifx-select-option>`,
			});
			dispatchSearch(page, "202");
			await page.waitForChanges();
			const option = page.root.shadowRoot.querySelector(".option");
			expect(option.classList.contains("search-match")).toBe(true);
		});

		it("resets classes when the search is cleared", async () => {
			const page = await newSpecPage({
				components: [SelectOption],
				html: `<ifx-select-option value="y2020">2020</ifx-select-option>`,
			});
			dispatchSearch(page, "2026");
			await page.waitForChanges();
			dispatchSearch(page, "");
			await page.waitForChanges();
			const option = page.root.shadowRoot.querySelector(".option");
			expect(option.classList.contains("search-hidden")).toBe(false);
			expect(option.classList.contains("search-match")).toBe(false);
		});
	});
});
