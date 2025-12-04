import { Component, Element, h, Listen, Prop } from "@stencil/core";
import { isNestedInIfxComponent } from "../../shared/utils/dom-utils";
import { detectFramework } from "../../shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-accordion",
	styleUrl: "accordion.scss",
	shadow: { delegatesFocus: true },
})
export class Accordion {
	@Element() el: HTMLElement;
	@Prop() autoCollapse: boolean = false;

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-accordion", await framework);
		}
	}

	@Listen("ifxOpen")
	async onItemOpen(event: CustomEvent) {
		if (this.autoCollapse) {
			const items = Array.from(this.el.querySelectorAll("ifx-accordion-item"));
			for (const item of items) {
				const itemElement = item as HTMLIfxAccordionItemElement;
				if (itemElement !== event.target && (await itemElement.open)) {
					itemElement.open = false;
				}
			}
		}
	}

	render() {
		return (
			<div class="accordion-wrapper">
				<slot />
			</div>
		);
	}
}
