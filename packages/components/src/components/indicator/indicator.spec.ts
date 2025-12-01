import { newSpecPage } from "jest-stencil-runner";
import { Indicator } from "./indicator";

describe("ifx-indicator", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Indicator],
			html: `<ifx-indicator></ifx-indicator>`,
		});

		expect(page.root).toBeTruthy();
		const container = page.root.shadowRoot.querySelector(".number__container");
		expect(container).toBeTruthy();

		const numberWrapper = container.querySelector(".number__wrapper");
		expect(numberWrapper.textContent).toBe("0");
	});

	it("renders dot variant correctly", async () => {
		const page = await newSpecPage({
			components: [Indicator],
			html: `<ifx-indicator variant="dot"></ifx-indicator>`,
		});

		const dotWrapper = page.root.shadowRoot.querySelector(".dot__wrapper");
		expect(dotWrapper).toBeTruthy();

		const numberContainer =
			page.root.shadowRoot.querySelector(".number__container");
		expect(numberContainer).toBeFalsy();
	});

	it("displays the provided number value", async () => {
		const page = await newSpecPage({
			components: [Indicator],
			html: `<ifx-indicator number="42"></ifx-indicator>`,
		});

		const numberWrapper =
			page.root.shadowRoot.querySelector(".number__wrapper");
		expect(numberWrapper.textContent).toBe("42");
	});

	it("applies inverted class when inverted is true", async () => {
		const page = await newSpecPage({
			components: [Indicator],
			html: `<ifx-indicator inverted="true"></ifx-indicator>`,
		});

		const container = page.root.shadowRoot.querySelector(".number__container");
		expect(container.classList.contains("inverted")).toBeTruthy();
	});

	it('displays "99+" when number exceeds 99', async () => {
		const page = await newSpecPage({
			components: [Indicator],
			html: `<ifx-indicator number="150"></ifx-indicator>`,
		});

		const numberWrapper =
			page.root.shadowRoot.querySelector(".number__wrapper");
		expect(numberWrapper.textContent).toBe("99+");
	});

	it("sets aria-label attribute correctly", async () => {
		const page = await newSpecPage({
			components: [Indicator],
			html: `<ifx-indicator aria-label="Notification indicator"></ifx-indicator>`,
		});

		const container = page.root.shadowRoot.querySelector(
			".indicator__container",
		);
		expect(container.getAttribute("aria-label")).toBe("Notification indicator");
	});

	it("updates display when number property changes", async () => {
		const page = await newSpecPage({
			components: [Indicator],
			html: `<ifx-indicator number="5"></ifx-indicator>`,
		});

		let numberWrapper = page.root.shadowRoot.querySelector(".number__wrapper");
		expect(numberWrapper.textContent).toBe("5");

		page.root.number = 10;
		await page.waitForChanges();

		numberWrapper = page.root.shadowRoot.querySelector(".number__wrapper");
		expect(numberWrapper.textContent).toBe("10");
	});

	it("changes from number to dot variant correctly", async () => {
		const page = await newSpecPage({
			components: [Indicator],
			html: `<ifx-indicator variant="number" number="5"></ifx-indicator>`,
		});

		let numberContainer =
			page.root.shadowRoot.querySelector(".number__container");
		expect(numberContainer).toBeTruthy();

		page.root.variant = "dot";
		await page.waitForChanges();

		numberContainer = page.root.shadowRoot.querySelector(".number__container");
		expect(numberContainer).toBeFalsy();

		const dotWrapper = page.root.shadowRoot.querySelector(".dot__wrapper");
		expect(dotWrapper).toBeTruthy();
	});
});
