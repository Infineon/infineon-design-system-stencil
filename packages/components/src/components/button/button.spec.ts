// src/components/button/button.spec.ts
import { newSpecPage } from "jest-stencil-runner";
import { Button } from "./button";

describe("ifx-button", () => {
	it("should render", async () => {
		const { root } = await newSpecPage({
			components: [Button],
			html: `<ifx-button></ifx-button>`,
		});

		expect(root).toEqualHtml(`
      <ifx-button style="--bw: fit-content;">
        <template shadowrootmode="open">
          <a class="btn btn- btn-default" role="button" tabindex="0" target="_self">
            <slot></slot>
          </a>
        </template>
      </ifx-button>
    `);
	});

	it("should display slotted content", async () => {
		const { root } = await newSpecPage({
			components: [Button],
			html: `<ifx-button>Button Text</ifx-button>`,
		});

		const slotElement = root.shadowRoot.querySelector("slot");
		const buttonText = slotElement.assignedNodes()[0].textContent;
		expect(buttonText).toBe("Button Text");
	});

	it("should set correct variant", async () => {
		const { root } = await newSpecPage({
			components: [Button],
			html: `<ifx-button variant="secondary"></ifx-button>`,
		});

		expect(root.getAttribute("variant")).toBe("secondary");
	});

	it("should set correct theme", async () => {
		const { root } = await newSpecPage({
			components: [Button],
			html: `<ifx-button theme="danger"></ifx-button>`,
		});

		expect(root.getAttribute("theme")).toBe("danger");
	});

	it("should set correct size", async () => {
		const { root } = await newSpecPage({
			components: [Button],
			html: `<ifx-button size="s"></ifx-button>`,
		});

		expect(root.getAttribute("size")).toBe("s");
	});
});
