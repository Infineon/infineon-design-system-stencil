import { Component, Element, h } from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-breadcrumb",
	styleUrl: "breadcrumb.scss",
	shadow: true,
})
export class Breadcrumb {
	@Element() el;

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-breadcrumb", await framework);
		}
		const element = this.el.shadowRoot.firstChild;
		this.validateBreadcrumbItemStructure(element);
	}

	private validateBreadcrumbItemStructure(element: HTMLElement) {
		if (!element) {
			console.error("element not found");
			return;
		}

		const slot = element.querySelector("slot");
		if (slot) {
			const assignedNodes = slot.assignedNodes();

			for (let i = 0; i < assignedNodes.length; i++) {
				const node = assignedNodes[i];
				if (node.nodeName === "IFX-BREADCRUMB-ITEM") {
					const breadcrumbItem = node as HTMLIfxBreadcrumbItemElement;
					const breadcrumbItemLabel = breadcrumbItem.querySelector(
						"ifx-breadcrumb-item-label",
					);
					const breadcrumbDropdown =
						breadcrumbItem.querySelector("ifx-dropdown-menu");
					if (breadcrumbItemLabel.hasAttribute("href") && breadcrumbDropdown) {
						throw new Error(
							"ifx-breadcrumb-item cannot have both a href and a dropdown menu.",
						);
					}
				}
			}
		}
	}

	render() {
		return (
			<nav aria-label="Page navigation breadcrumb">
				<ol class="breadcrumb">
					<slot />
				</ol>
			</nav>
		);
	}
}
