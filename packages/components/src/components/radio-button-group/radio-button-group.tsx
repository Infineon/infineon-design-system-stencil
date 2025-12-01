import {
	Component,
	Element,
	h,
	Listen,
	Method,
	Prop,
	State,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-radio-button-group",
	styleUrl: "radio-button-group.scss",
	shadow: true,
	// formAssociated: true
})
export class RadioButtonGroup {
	private errorStates: Map<HTMLElement, boolean> = new Map();

	@Element() el: HTMLElement;
	@Prop() alignment: "horizontal" | "vertical" = "vertical";
	@Prop() size: string;
	@Prop() showGroupLabel: boolean;
	@Prop() groupLabelText: string = "Group Label Text";
	@Prop() showCaption: boolean;
	@Prop() captionText: string;
	@Prop() showCaptionIcon: boolean;
	@Prop() required: boolean = false;
	@State() hasErrors: boolean = false;

	@Listen("ifxError")
	handleRadioButtonError(event: CustomEvent) {
		const radioButton = event.target as HTMLElement;
		if (radioButton.tagName.toLowerCase() === "ifx-radio-button") {
			this.errorStates.set(radioButton, event.detail);
			this.updateHasErrors();
		}
	}

	// Method to set the error state of all radio-butttons in the group
	@Method()
	async setGroupError(error: boolean) {
		const radioButtons = Array.from(
			this.el.querySelectorAll("ifx-radio-button"),
		);
		radioButtons.forEach((radioButton) => {
			(radioButton as any).error = error;
		});
	}

	componentWillLoad() {
		this.initializeState();
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-radio-button-group", await framework);
		}
	}

	handleSlotChange = () => {
		this.initializeState();
	};

	private initializeState() {
		this.errorStates.clear();
		const radioButtons = Array.from(
			this.el.querySelectorAll<HTMLElement>("ifx-radio-button"),
		);
		radioButtons.forEach((radioButton) => {
			if (!this.errorStates.has(radioButton)) {
				this.errorStates.set(radioButton, (radioButton as any).error || false);
			}
		});
		this.updateHasErrors();
	}

	private updateHasErrors() {
		console.log("here");
		this.hasErrors = Array.from(this.errorStates.values()).some(
			(error) => error,
		);
	}

	render() {
		return (
			<div class="radio-button-group-container">
				{this.showGroupLabel && (
					<div class="group-label">
						{this.groupLabelText}
						{this.required && (
							<span class={`required ${this.hasErrors ? "error" : ""}`}>*</span>
						)}
					</div>
				)}
				<div class={`radio-button-group ${this.alignment} ${this.size}`}>
					<slot onSlotchange={this.handleSlotChange}></slot>
				</div>
				{this.showCaption ? (
					<div class={`caption ${this.hasErrors ? "error" : "default"}`}>
						{this.showCaptionIcon ? (
							<div class="caption-icon">
								<ifx-icon icon="c-info-16"></ifx-icon>
							</div>
						) : (
							""
						)}
						<div class="caption-text">{this.captionText}</div>
					</div>
				) : (
					""
				)}
			</div>
		);
	}
}
