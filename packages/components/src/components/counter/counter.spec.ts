import { newSpecPage } from "jest-stencil-runner";
import { Counter } from "./counter";

describe("ifx-counter", () => {
	const getValue = (page: any) =>
		page.root.shadowRoot.querySelector(".counter__value-inner").textContent;

	const getDecrementButton = (page: any) =>
		page.root.shadowRoot.querySelector(
			".counter__btn--minus",
		) as HTMLElement;

	const getIncrementButton = (page: any) =>
		page.root.shadowRoot.querySelector(
			".counter__btn--plus",
		) as HTMLButtonElement;

	it("renders with default value and disabled decrement button", async () => {
		const page = await newSpecPage({
			components: [Counter],
			html: `<ifx-counter></ifx-counter>`,
		});

		expect(getValue(page)).toBe("0");
		expect(getDecrementButton(page).hasAttribute("disabled")).toBe(true);
	});

	it("renders with the provided value", async () => {
		const page = await newSpecPage({
			components: [Counter],
			html: `<ifx-counter value="3"></ifx-counter>`,
		});

		expect(getValue(page)).toBe("3");
		expect(getDecrementButton(page).hasAttribute("disabled")).toBe(false);
	});

	it("keeps the value at zero when the provided value is negative", async () => {
		const page = await newSpecPage({
			components: [Counter],
			html: `<ifx-counter value="-1"></ifx-counter>`,
		});

		expect(getValue(page)).toBe("0");
		expect(getDecrementButton(page).hasAttribute("disabled")).toBe(true);
	});

	it("increments the value and emits ifxChange", async () => {
		const page = await newSpecPage({
			components: [Counter],
			html: `<ifx-counter></ifx-counter>`,
		});
		const ifxChangeSpy = jest.fn();
		page.root!.addEventListener("ifxChange", ifxChangeSpy);

		getIncrementButton(page).click();
		await page.waitForChanges();

		expect(getValue(page)).toBe("1");
		expect(getDecrementButton(page).hasAttribute("disabled")).toBe(false);
		expect(ifxChangeSpy).toHaveBeenCalledTimes(1);
		expect(ifxChangeSpy.mock.calls[0][0].detail).toBe(1);
	});

	it("decrements the value and emits ifxChange", async () => {
		const page = await newSpecPage({
			components: [Counter],
			html: `<ifx-counter value="2"></ifx-counter>`,
		});
		const ifxChangeSpy = jest.fn();
		page.root!.addEventListener("ifxChange", ifxChangeSpy);

		getDecrementButton(page).click();
		await page.waitForChanges();

		expect(getValue(page)).toBe("1");
		expect(ifxChangeSpy).toHaveBeenCalledTimes(1);
		expect(ifxChangeSpy.mock.calls[0][0].detail).toBe(1);
	});

	it("does not decrement below zero or emit ifxChange at zero", async () => {
		const page = await newSpecPage({
			components: [Counter],
			html: `<ifx-counter></ifx-counter>`,
		});
		const ifxChangeSpy = jest.fn();
		page.root!.addEventListener("ifxChange", ifxChangeSpy);

		getDecrementButton(page).click();
		await page.waitForChanges();

		expect(getValue(page)).toBe("0");
		expect(getDecrementButton(page).hasAttribute("disabled")).toBe(true);
		expect(ifxChangeSpy).not.toHaveBeenCalled();
	});

	it("updates the value when the value prop changes", async () => {
		const page = await newSpecPage({
			components: [Counter],
			html: `<ifx-counter value="1"></ifx-counter>`,
		});

		page.root!.value = 4;
		await page.waitForChanges();

		expect(getValue(page)).toBe("4");
	});
});