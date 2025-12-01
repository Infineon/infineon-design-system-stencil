// src/components/accordion/accordionItem.spec.ts
import { newSpecPage } from "jest-stencil-runner";
import { AccordionItem } from "./accordionItem";

// Mock ResizeObserver Observes its content container
// E.g: When the accordion opens, measures the content's natural height
global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}));

describe("ifx-accordion-item", () => {
	it("renders", async () => {
		const { root } = await newSpecPage({
			components: [AccordionItem],
			html: `<ifx-accordion-item caption="Test"></ifx-accordion-item>`,
		});

		expect(root).toEqualHtml(`
      <ifx-accordion-item caption="Test">
        <template shadowrootmode="open">
          <div class="accordion-item">
            <div aria-controls="accordion-content" class="accordion-title" role="button" tabindex="0">
              <span aria-hidden="true" aria-level="3" class="accordion-icon" role="heading">
                <ifx-icon icon="chevron-down-16"></ifx-icon>
              </span>
              <span class="accordion-caption" id="accordion-caption">
                Test
              </span>
            </div>
            <div aria-labelledby="accordion-caption" class="accordion-content" id="accordion-content" role="region" style="height: 0; overflow: hidden;">
              <div class="inner-content no-content">
                <slot></slot>
              </div>
            </div>
          </div>
        </template>
      </ifx-accordion-item>
    `);
	});

	it("displays the caption", async () => {
		const { root } = await newSpecPage({
			components: [AccordionItem],
			html: `<ifx-accordion-item caption="Test"></ifx-accordion-item>`,
		});

		const captionElement = root.shadowRoot.querySelector(
			".accordion-caption",
		) as HTMLElement;
		expect(captionElement.innerText).toEqual("Test");
	});

	it("expands and collapses on click", async () => {
		const { root } = await newSpecPage({
			components: [AccordionItem],
			html: `<ifx-accordion-item caption="Test"></ifx-accordion-item>`,
		});

		const titleElement = root.shadowRoot.querySelector(
			".accordion-title",
		) as HTMLElement; // Cast to HTMLElement
		const accordionItem = root as any as HTMLIfxAccordionItemElement;

		expect(accordionItem.open).toBeFalsy();

		titleElement.click();
		await new Promise((resolve) => setTimeout(resolve, 50)); // Wait for state to update

		// Open after first click
		expect(accordionItem.open).toBeTruthy();

		titleElement.click();
		await new Promise((resolve) => setTimeout(resolve, 50)); // Wait for state to update

		// Closed after second click
		expect(accordionItem.open).toBeFalsy();
	});
});
