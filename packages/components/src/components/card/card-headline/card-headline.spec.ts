// src/components/card/card-headline/card-headline.spec.ts
import { newSpecPage } from "jest-stencil-runner";
import { CardHeadline } from "./card-headline";

describe("ifx-card-headline", () => {
	it("should render", async () => {
		const { root } = await newSpecPage({
			components: [CardHeadline],
			html: `<ifx-card-headline></ifx-card-headline>`,
		});

		expect(root).toEqualHtml(`
      <ifx-card-headline>
        <template shadowrootmode="open">
          <div class="card__headline-wrapper">
            <div class="card-headline undefined">
              <slot></slot>
            </div>
          </div>
        </template>
      </ifx-card-headline>
    `);
	});

	it("should display slotted content", async () => {
		const { root } = await newSpecPage({
			components: [CardHeadline],
			html: `<ifx-card-headline>Test content</ifx-card-headline>`,
		});

		const slotElement = root.shadowRoot.querySelector("slot");
		const headlineContent = slotElement.assignedNodes()[0].textContent;
		expect(headlineContent).toBe("Test content");
	});
});
