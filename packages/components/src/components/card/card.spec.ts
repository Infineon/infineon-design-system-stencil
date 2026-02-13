// src/components/card/card.spec.ts
import { newSpecPage } from "jest-stencil-runner";
import { Card } from "./card";
import { CardImage } from "./card-image/card-image";

describe("ifx-card", () => {
	it("should render", async () => {
		const { root } = await newSpecPage({
			components: [Card],
			html: `<ifx-card></ifx-card>`,
		});

		expect(root).toEqualHtml(`
      <ifx-card>
        <template shadowrootmode="open">
          <div class="card noBtns undefined vertical" role="group">
            <div class="vertical">
              <a class="upper__body-wrapper" target="_self">
                <div class="card-img noImage">
                  <slot name="img"></slot>
                </div>
                <div class="upper-body" id="upper-body-content">
                  <slot></slot>
                </div>
              </a>
              <div class='lower__body-wrapper' role="group" aria-labelledby="upper-body-content">
                <slot name="buttons"></slot>
              </div>
            </div>
          </div>
        </template>
      </ifx-card>
    `);
	});

	it("should set correct direction", async () => {
		const { root } = await newSpecPage({
			components: [Card],
			html: `<ifx-card direction="horizontal"></ifx-card>`,
		});

		expect(root.getAttribute("direction")).toBe("horizontal");
	});
});

describe("ifx-card-image", () => {
	it("should set correct position", async () => {
		const { root } = await newSpecPage({
			components: [CardImage],
			html: `<ifx-card-image position="left"></ifx-card-image>`,
		});

		expect(root.getAttribute("position")).toBe("left");
	});
});
