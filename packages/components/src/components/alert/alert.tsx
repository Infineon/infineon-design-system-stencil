import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Prop,
	State,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../../shared/utils/dom-utils";
import { detectFramework } from "../../shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-alert",
	styleUrl: "alert.scss",
	shadow: true,
})
export class Alert {
	@Element() el: HTMLElement;
	@Prop() variant: "primary" | "success" | "danger" | "warning" | "info" =
		"primary";
	@Prop() icon: string;
	@Event() ifxClose: EventEmitter;
	@Prop() closable: boolean = true;
	@Prop() AriaLive = "assertive";
	@State() uniqueId: string;

	alertTypeDescription = {
		primary: "Neutral alert",
		success: "Success Alert",
		danger: "Error Alert",
		warning: "Warning Alert",
		info: "Neutral alert",
	};

	handleClose() {
		this.ifxClose.emit();
	}

	renderCloseButton() {
		return (
			<div class="close-icon-wrapper">
				<button
					onClick={this.handleClose.bind(this)}
					aria-label="Dismiss alert"
				>
					<ifx-icon icon="cross-16" />
				</button>
			</div>
		);
	}

	generateUniqueId(prefix = "id") {
		return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
	}

	componentWillLoad() {
		if (!this.uniqueId) {
			this.uniqueId = this.generateUniqueId("alert");
		}
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = await detectFramework();
			trackComponent("ifx-alert", framework);
		}
	}

	render() {
		return this.variant === "info" ? (
			<div
				class="alert__info-wrapper"
				role="alert"
				aria-live={this.AriaLive}
				aria-describedby={this.alertTypeDescription[this.variant]}
				aria-labelledby="alert-text alert-description"
			>
				<div class="info__text-wrapper">
					<div class="info__headline-wrapper">
						<slot name="headline" />
					</div>
					<div
						id={`alert-description-${this.uniqueId}`}
						class="info__description-wrapper"
					>
						<slot name="desc" />
					</div>
				</div>
				{this.closable ? this.renderCloseButton() : null}
			</div>
		) : (
			<div class={`alert ${this.variant}`} role="alert">
				{this.icon && (
					<div class="icon-wrapper">
						<ifx-icon icon={this.icon} />
					</div>
				)}
				<div class="alert-text" id={`alert-text-${this.uniqueId}`}>
					<slot />
				</div>
				{this.closable ? this.renderCloseButton() : null}
			</div>
		);
	}
}
