// src/components/accordion/accordion.spec.ts
import { newSpecPage } from "jest-stencil-runner";
import { Accordion } from "./accordion";

describe("ifx-accordion", () => {
	it("renders with correct structure", async () => {
		const { root } = await newSpecPage({
			components: [Accordion],
			html: `<ifx-accordion></ifx-accordion>`,
		});

		expect(root).toMatchSnapshot();
	});
});
