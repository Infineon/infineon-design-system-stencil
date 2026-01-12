import { Component, h, Listen, Prop, State, Watch } from "@stencil/core";
import type { StepperState } from "../interfaces";

@Component({
	tag: "ifx-step",
	styleUrl: "step.scss",
	shadow: true,
})
export class Step {
	@Prop() complete?: boolean = false;
	@Prop() disabled?: boolean = false;
	@Prop({ mutable: true }) error?: boolean = false;
	@Prop({ reflect: false }) lastStep: boolean = false;
	@Prop() stepId: number = 1;
	@Prop({ reflect: false }) stepperState: StepperState = {
		activeStep: 1,
		showStepNumber: false,
		variant: "default",
		indicatorPosition: "left",
	};

	@State() active: boolean;
	@State() clickable: boolean = false;

	@Listen("ifxChange", { target: "document" })
	onStepChange(event: CustomEvent) {
		const previousActiveStep = event.detail.previousActiveStep;
		if (previousActiveStep === this.stepId && this.error) {
			this.clickable = true;
		}
	}

	@Watch("stepperState")
	updateCurrentStep(newStepperState) {
		this.active = newStepperState.activeStep === this.stepId;
	}

	@Watch("active")
	updateErrorState() {
		if (this.active) {
			this.error = false;
		}
	}

	handleStepClick() {
		if (
			!this.disabled &&
			this.stepperState.variant !== "compact" &&
			(this.clickable || this.complete)
		) {
			this.stepperState.setActiveStep(this.stepId, true);
		}
	}

	handleStepKeyDown(event: KeyboardEvent) {
		if (
			!this.disabled &&
			this.stepperState.variant !== "compact" &&
			(this.clickable || this.complete) &&
			event.key === "Enter"
		) {
			this.stepperState.setActiveStep(this.stepId, true);
		}
	}

	stopOnClickPropogation(event: Event) {
		if (this.disabled) {
			event.stopPropagation();
		}
	}

	render() {
		return (
			<div
				aria-current={this.active ? "step" : false}
				aria-disabled={this.active || this.complete ? false : true}
				onClick={(e) => this.stopOnClickPropogation(e)}
				class={`step-wrapper ${this.stepId === 1 ? "first-step" : ""} 
                        ${this.error ? "error" : ""}
                        ${this.stepperState.variant}
                        ${this.complete ? "complete" : ""}
                        ${this.lastStep ? "last-step" : ""}
                        indicator-${this.stepperState.indicatorPosition}
                        ${this.active ? "active" : ""}
                        ${this.clickable ? "clickable" : ""}
                        ${this.disabled ? "disabled" : ""}`}
			>
				<div class="step-icon-wrapper">
					{/* Left connector */}
					{this.stepperState.variant !== "compact" && (
						<span class="step-connector-l" />
					)}

					{this.stepperState.variant !== "compact" &&
						(!this.error || (this.error && this.active)) && (
							<div class="step-icon">
								{this.stepperState.showStepNumber &&
								!this.complete &&
								!this.active
									? this.stepId
									: ""}
								{this.complete && !this.active && (
									<ifx-icon icon="check16"></ifx-icon>
								)}
								{this.active && <span class="active-indic"></span>}
							</div>
						)}

					{this.stepperState.variant !== "compact" &&
						this.error &&
						!this.active && (
							<ifx-icon class="error-icon" icon="warningF16"></ifx-icon>
						)}

					{/* Right connector */}
					{this.stepperState.variant !== "compact" && (
						<span class={`step-connector-r ${this.active ? "active" : ""}`} />
					)}
				</div>

				{
					/* Step labels */
					(this.stepperState.variant !== "compact" ||
						(this.stepperState.variant === "compact" &&
							(this.active ||
								this.stepId === this.stepperState.activeStep + 1))) && (
						<div
							tabIndex={
								!this.disabled && this.complete && !this.active ? 0 : -1
							}
							class={`step-label ${this.stepperState.variant === "compact" ? (this.active ? "curr-label" : "next-label") : ""}`}
							onClick={() => {
								this.handleStepClick();
							}}
							onKeyDown={(e) => {
								this.handleStepKeyDown(e);
							}}
						>
							{this.stepperState.variant !== "compact" && <slot />}

							{this.stepperState.variant === "compact" && !this.active
								? "Next: "
								: ""}
							{this.stepperState.variant === "compact" && <slot />}
						</div>
					)
				}
			</div>
		);
	}
}
