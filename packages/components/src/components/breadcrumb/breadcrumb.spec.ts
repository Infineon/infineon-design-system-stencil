// src/components/breadcrumb/breadcrumb.spec.ts
import { newSpecPage } from "jest-stencil-runner";
import { DropdownItem } from "../dropdown/dropdown-item/dropdown-item";
import { DropdownMenu } from "../dropdown/dropdown-menu/dropdown-menu";
import { Breadcrumb } from "./breadcrumb";
import { BreadcrumbItem } from "./breadcrumb-item";
import { BreadcrumbItemLabel } from "./breadcrumb-item-label";

describe("ifx-breadcrumb", () => {
	it("should render", async () => {
		const { root } = await newSpecPage({
			components: [
				Breadcrumb,
				BreadcrumbItem,
				BreadcrumbItemLabel,
				DropdownMenu,
				DropdownItem,
			],
			html: `<ifx-breadcrumb></ifx-breadcrumb>`,
		});

		expect(root).toEqualHtml(`
      <ifx-breadcrumb>
        <template shadowrootmode="open">
          <nav aria-label="Page navigation breadcrumb">
            <ol class="breadcrumb">
              <slot></slot>
            </ol>
          </nav>
        </template>
      </ifx-breadcrumb>
    `);
	});

	it("should display breadcrumb items", async () => {
		const { root } = await newSpecPage({
			components: [
				Breadcrumb,
				BreadcrumbItem,
				BreadcrumbItemLabel,
				DropdownMenu,
				DropdownItem,
			],
			html: `
        <ifx-breadcrumb>
          <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label icon="home" href="/">Home</ifx-breadcrumb-item-label>
          </ifx-breadcrumb-item>
          <ifx-breadcrumb-item>
            <ifx-breadcrumb-item-label icon="chevron-right" href="/about">About</ifx-breadcrumb-item-label>
          </ifx-breadcrumb-item>
        </ifx-breadcrumb>
      `,
		});

		const breadcrumbItems = root.querySelectorAll("ifx-breadcrumb-item");
		expect(breadcrumbItems.length).toBe(2);
	});
});
