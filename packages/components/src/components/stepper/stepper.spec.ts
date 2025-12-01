import { newSpecPage } from "jest-stencil-runner";
import { Stepper } from "./stepper";

describe("ifx-stepper", () => {
	it("renders with basic structure", async () => {
		const page = await newSpecPage({
			components: [Stepper],
			html: `
        <ifx-stepper>
          <ifx-step>Step 1</ifx-step>
          <ifx-step>Step 2</ifx-step>
          <ifx-step>Step 3</ifx-step>
        </ifx-stepper>
      `,
		});

		// Basic rendering check
		expect(page.root).toBeTruthy();
		expect(page.root.shadowRoot).toBeTruthy();

		// Check default props
		expect(page.rootInstance.activeStep).toBe(1);
		expect(page.rootInstance.indicatorPosition).toBe("left");
		expect(page.rootInstance.variant).toBe("default");

		// Check that the stepper wrapper is rendered
		const wrapper = page.root.shadowRoot.querySelector(".stepper-wrapper");
		expect(wrapper).toBeTruthy();
	});
});
