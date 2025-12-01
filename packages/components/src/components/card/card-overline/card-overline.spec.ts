// src/components/card/card-overline/card-overline.spec.ts
import { newSpecPage } from "jest-stencil-runner";
import { CardOverline } from "./card-overline";

describe("ifx-card-overline", () => {
	it("should render", async () => {
		const { root } = await newSpecPage({
			components: [CardOverline],
			html: `<ifx-card-overline></ifx-card-overline>`,
		});

		expect(root).toEqualHtml(`
      <ifx-card-overline>
        <template shadowrootmode="open">
          <div class="card-overline">
            <slot></slot>
          </div>
        </template>
      </ifx-card-overline>
    `);
	});

	it("should display slotted content", async () => {
		const { root } = await newSpecPage({
			components: [CardOverline],
			html: `<ifx-card-overline>Card Overline</ifx-card-overline>`,
		});

		const slotElement = root.shadowRoot.querySelector("slot");
		const cardOverlineText = slotElement.assignedNodes()[0].textContent;
		expect(cardOverlineText).toBe("Card Overline");
	});
});
