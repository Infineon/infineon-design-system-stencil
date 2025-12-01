import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Listen,
	Prop,
	State,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";
import type { StepperState } from "./interfaces";

@Component({
	tag: "ifx-stepper",
	styleUrl: "stepper.scss",
	shadow: true,
})
export class Stepper {
	@Element() el: HTMLElement;

	@Event() ifxChange: EventEmitter;

	@Prop({ mutable: true }) activeStep: number = 1;
	@Prop() indicatorPosition?: "left" | "right" = "left";
	@Prop() showStepNumber?: boolean = false;
	@Prop() variant?: "default" | "compact" | "vertical" = "default";
	@Prop() ariaLabel: string | null;
	@Prop() ariaCurrent: string | null;

	@State() stepsCount: number;
	@State() shouldEmitEvent: boolean = true;
	@State() emittedByClick: boolean = false;

	@Listen("ifxChange")
	onStepChange(event: CustomEvent) {
		const steps = this.getSteps();
		const previousActiveStep = steps[event.detail.previousActiveStep - 1];
		if (previousActiveStep && !previousActiveStep.complete) {
			previousActiveStep.setAttribute("error", "true");
		}
	}

	@Watch("activeStep")
	handleActiveStep(newStep: number, oldStep: number) {
		const steps = this.getSteps();
		if (!this.shouldEmitEvent) {
			this.shouldEmitEvent = true;
			return;
		}
		// Skipping until the enabled step is found
		if (steps[newStep - 1]) {
			if (!steps[newStep - 1].disabled) {
				this.emitIfxChange(newStep, oldStep);
			} else {
				// If coming from higher step number to the lower step number
				if (newStep < oldStep) {
					let i = newStep;
					this.shouldEmitEvent = false;
					while (i >= 1 && steps[i - 1].disabled) i--;
					// if all the steps are disabled no change.
					if (i < 1) {
						this.activeStep = oldStep;
					} else {
						this.emitIfxChange(i, oldStep);
						this.activeStep = i;
					}
				}
				// If coming from lower step number to the higher step number
				else {
					let i = newStep;
					this.shouldEmitEvent = false;
					while (i <= this.stepsCount && steps[i - 1].disabled) i++;
					if (i > this.stepsCount) {
						this.activeStep = oldStep;
					} else {
						this.emitIfxChange(i, oldStep);
						this.activeStep = i;
					}
				}
			}
		}
	}

	emitIfxChange(activeStep: number, previousActiveStep: number) {
		this.ifxChange.emit({
			activeStep: activeStep,
			previousActiveStep: previousActiveStep,
			totalSteps: this.stepsCount,
			emittedByClick: this.emittedByClick,
		});
		this.emittedByClick = false;
	}

	getSteps() {
		const steps: NodeListOf<HTMLIfxStepElement> =
			this.el.querySelectorAll("ifx-step");
		return steps;
	}

	addStepIdsToStepsAndCountSteps() {
		const steps = this.getSteps();
		steps[steps.length - 1].lastStep = true;
		for (let i = 0; i < steps.length; i++) {
			steps[i].stepId = i + 1;
		}
		this.stepsCount = steps.length;
	}

	setActiveStep(stepId: number, setByClick: boolean = false) {
		this.emittedByClick = setByClick;
		this.activeStep = stepId;
	}

	setStepsBeforeActiveToComplete() {
		const steps = this.getSteps();
		steps.forEach((step, stepId) => {
			if (stepId + 1 < this.activeStep) step.complete = true;
		});
	}

	syncIfxSteps() {
		const steps = this.getSteps();
		for (let i = 0; i < steps.length; i++) {
			const stepperState: StepperState = {
				activeStep: this.activeStep,
				indicatorPosition:
					this.indicatorPosition !== "right" ? "left" : "right",
				showStepNumber: this.showStepNumber,
				variant:
					this.variant !== "compact" && this.variant !== "vertical"
						? "default"
						: this.variant,
				setActiveStep: this.setActiveStep.bind(this),
			};
			steps[i].stepperState = stepperState;
		}
	}

	setInitialActiveStep() {
		this.activeStep = Math.max(
			1,
			Math.min(
				this.stepsCount + (this.variant !== "compact" ? 1 : 0),
				this.activeStep,
			),
		);
	}

	componentWillLoad() {
		this.addStepIdsToStepsAndCountSteps();
		this.setInitialActiveStep();
		this.setStepsBeforeActiveToComplete();
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-stepper", await framework);
		}
		this.syncIfxSteps();
	}

	componentWillUpdate() {
		this.syncIfxSteps();
	}

	render() {
		return (
			<div
				aria-label={this.ariaLabel}
				aria-current={this.ariaCurrent}
				role="navigation"
				class={`stepper ${this.variant !== "compact" && this.variant !== "vertical" ? "default" : this.variant} ${this.variant === "compact" ? "compact-" + this.indicatorPosition : ""}`}
			>
				{
					/* Progress bar for compact variant. */
					this.variant === "compact" && (
						<div class="stepper-progress">
							<div class="progress-detail">
								{`${Math.min(this.activeStep, this.stepsCount)} of ${this.stepsCount}`}
							</div>
						</div>
					)
				}

				{/* Slot for ifx-steps. */}
				<div class={`stepper-wrapper`}>
					<slot />
				</div>
			</div>
		);
	}

	componentDidRender() {
		/* Updating progress bar in compact version. */
		if (this.variant == "compact") {
			const progressBar: HTMLElement =
				this.el.shadowRoot.querySelector(".stepper-progress");
			progressBar.style.setProperty(
				"--pb",
				`${(this.activeStep / this.stepsCount) * 100}%`,
			);
		}
	}
}
