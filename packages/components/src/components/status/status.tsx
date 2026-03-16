import { Component, Element, h, Prop } from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-status",
	styleUrl: "status.scss",
	shadow: true,
})
export class Status {
	@Element() el: HTMLIfxStatusElement;
	/** Text label displayed inside the status component. */
	@Prop() readonly label: string;
	/** If true, shows a border around the status. */
	@Prop() readonly border: boolean = false;
	/** Color token used for the status (e.g. orange-500). */
	@Prop() readonly color: string = "orange-500";

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-status", await framework);
		}
	}

	render() {
		const effectiveColor = this.color?.trim() ? this.color : "orange-500";
		const containerClass = this.border
			? `container border-${effectiveColor}`
			: "container no-border";

		return (
			<div role="status" class={containerClass}>
				<span class={`dot ${effectiveColor}`}></span>
				<p class="text">{this.label}</p>
			</div>
		);
	}
}
