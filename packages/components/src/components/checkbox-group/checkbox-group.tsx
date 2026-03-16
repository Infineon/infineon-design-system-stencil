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
	tag: "ifx-checkbox-group",
	styleUrl: "checkbox-group.scss",
	shadow: true,
	// formAssociated: true
})
export class CheckboxGroup {
	private errorStates: Map<HTMLElement, boolean> = new Map();

	@Element() el: HTMLIfxCheckboxGroupElement;
	/** Layout direction of the radio group */
	@Prop() readonly alignment: "horizontal" | "vertical" = "vertical";
	/** Size of the radio group */
	@Prop() readonly size: string;
	/** Wether to show the group label. */
	@Prop() readonly showGroupLabel: boolean;
	/** Text used for the group label. */
	@Prop() readonly groupLabelText: string = "Group Label Text";
	/** Wether to show a caption under the group. */
	@Prop() readonly showCaption: boolean;
	/** Text used for the caption. */
	@Prop() readonly captionText: string;
	/** Wether to show an icon next to the caption. */
	@Prop() readonly showCaptionIcon: boolean;
	/** Wether selecting an option is required. */
	@Prop() readonly required: boolean = false;
	@State() hasErrors: boolean = false;

	@Listen("ifxError")
	handleCheckboxError(event: CustomEvent) {
		const checkbox = event.target as HTMLElement;
		if (checkbox.tagName.toLowerCase() === "ifx-checkbox") {
			this.errorStates.set(checkbox, event.detail);
			this.updateHasErrors();
		}
	}

	/** Method to set the error state of all checkboxes in the group. */
	@Method()
	async setGroupError(error: boolean) {
		const checkboxes = Array.from(this.el.querySelectorAll("ifx-checkbox"));
		checkboxes.forEach((checkbox) => {
			(checkbox as any).error = error;
		});
	}

	componentWillLoad() {
		this.initializeState();
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-checkbox-group", await framework);
		}
	}

	private handleSlotChange = () => {
		this.initializeState();
	};

	private initializeState() {
		this.errorStates.clear();
		const checkboxes = Array.from(
			this.el.querySelectorAll<HTMLElement>("ifx-checkbox"),
		);
		checkboxes.forEach((checkbox) => {
			if (!this.errorStates.has(checkbox)) {
				this.errorStates.set(checkbox, (checkbox as any).error || false);
			}
		});
		this.updateHasErrors();
	}

	private updateHasErrors() {
		this.hasErrors = Array.from(this.errorStates.values()).some(
			(error) => error,
		);
	}

	render() {
		return (
			<div class="checkbox-group-container">
				{this.showGroupLabel && (
					<div class="group-label">
						{this.groupLabelText}
						{this.required && (
							<span class={`required ${this.hasErrors ? "error" : ""}`}>*</span>
						)}
					</div>
				)}
				<div class={`checkbox-group ${this.alignment} ${this.size}`}>
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
