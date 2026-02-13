import { Component, Element, h, Prop, State } from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-indicator",
	styleUrl: "indicator.scss",
	shadow: true,
})
export class Indicator {
	@Element() el;
	@State() filteredNumber: string | number;
	@Prop() inverted: boolean = false;
	@Prop() ariaLabel: string | null;
	@Prop() variant: string = "number";
	@Prop() number: number = 0;

	handleNumber() {
		this.filteredNumber =
			!isNaN(this.number) && this.number > 99 ? "99+" : this.number;
	}

	componentWillLoad() {
		this.handleNumber();
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-indicator", await framework);
		}
	}

	componentWillUpdate() {
		this.handleNumber();
	}

	render() {
		return (
			<div aria-label={this.ariaLabel} class="indicator__container">
				{this.variant === "number" && (
					<div class={`number__container ${this.inverted ? "inverted" : ""}`}>
						<div class="number__wrapper">{this.filteredNumber}</div>
					</div>
				)}
				{this.variant === "dot" && <div class="dot__wrapper"></div>}
			</div>
		);
	}
}
