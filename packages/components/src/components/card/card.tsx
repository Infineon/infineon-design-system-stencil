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
	@Element() el!: HTMLIfxCardElement;
	@State() noBtns: boolean;
	/** Layout direction of the card. */
	@Prop() readonly direction: "horizontal" | "vertical" = "vertical";
	@State() alignment: string;
	@State() noImg: boolean;
	/** Link the card should navigate to when clicked. */
	@Prop() readonly href: string = "";
	@State() internalHref: string = "";
	/** Where to open the link. */
	@Prop() readonly target: string = "_self";
	/** Accessible label for screen readers. */
	@Prop() readonly ariaLabelText: string | null = "";
	/** If true, Card stretches to fill the available width. */
	@Prop() readonly fullWidth: boolean = false;

	@Listen("imgPosition")
	setImgPosition(event: any) {
		this.alignment = event.detail;
	}

	private handleComponentAdjustment() {
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
			<Host class={this.fullWidth ? 'full-width' : ''}>
				<div
					aria-label={this.ariaLabelText || undefined}
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
