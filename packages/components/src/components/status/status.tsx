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
	@Element() el;
	@Prop() label: string;
	@Prop() border: boolean = false;
	@Prop() color: string = "orange-500";

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
