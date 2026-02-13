import {
	Component,
	Element,
	Host,
	h,
	Listen,
	Prop,
	State,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-card",
	styleUrl: "card.scss",
	shadow: true,
})
export class Card {
	@Element() el;
	@State() noBtns: boolean;
	@Prop() direction: "horizontal" | "vertical" = "vertical";
	@State() alignment: string;
	@State() noImg: boolean;
	@Prop() href: string = "";
	@State() internalHref: string = "";
	@Prop() target: string = "_self";
	@Prop() ariaLabel: string | null;

	@Listen("imgPosition")
	setImgPosition(event) {
		this.alignment = event.detail;
	}

	handleComponentAdjustment() {
		const image = this.el.querySelector("ifx-card-image");
		const links = this.el.querySelector("ifx-card-links");

		this.noImg = !image;
		this.noBtns = !links;

		if (this.href.trim() === "") {
			this.internalHref = undefined;
		} else {
			this.internalHref = this.href;
		}
	}

	componentWillLoad() {
		this.handleComponentAdjustment();
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-card", await framework);
		}
	}

	componentWillUpdate() {
		this.handleComponentAdjustment();
	}

	render() {
		return (
			<Host>
				<div
					aria-label={this.ariaLabel}
					class={`card 
            ${this.noBtns ? "noBtns" : ""}
            ${this.direction} 
            ${this.alignment}`}
					role="group"
				>
					{this.direction === "horizontal" && (
						<div class="horizontal">
							<a
								class={`card-img ${this.noImg ? "noImage" : ""} ${this.internalHref ? "card-href" : ""}`}
								href={this.internalHref}
							>
								<slot name="img" />
							</a>

							<div class="lower__body-wrapper">
								<a
									class={`upper-body ${this.internalHref ? "card-href" : ""}`}
									href={this.internalHref}
									id="upper-body-content"
								>
									<slot />
								</a>
								<div>
									<slot name="buttons" />
								</div>
							</div>
						</div>
					)}

					{this.direction === "vertical" && (
						<div class="vertical">
							<a
								class={`upper__body-wrapper ${this.internalHref ? "card-href" : ""}`}
								href={this.internalHref}
								target={this.target}
							>
								<div class={`card-img ${this.noImg ? "noImage" : ""}`}>
									<slot name="img" />
								</div>

								<div class="upper-body" id="upper-body-content">
									<slot />
								</div>
							</a>

							<div
								class="lower__body-wrapper"
								role="group"
								aria-labelledby="upper-body-content"
							>
								<slot name="buttons" />
							</div>
						</div>
					)}
				</div>
			</Host>
		);
	}
}
