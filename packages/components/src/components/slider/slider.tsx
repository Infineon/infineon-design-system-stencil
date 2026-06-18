import {
	AttachInternals,
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Prop,
	State,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-slider",
	styleUrl: "slider.scss",
	shadow: true,
	formAssociated: true,
})
export class IfxSlider {
/** Minimum value allowed for the slider. */
@Prop() readonly min: number = 0;
/** Maximum value allowed for the slider. */
@Prop() readonly max: number = 100;
/** Increment step when changing the value. */
@Prop() readonly step: number = 1;
/** Current value for a single-handle slider. */
@Prop({ mutable: true }) value: number;
/** Initial value of the left handle for a double slider. */
@Prop() readonly minValueHandle: number;
/** Initial value of the right handle for a double slider. */
@Prop() readonly maxValueHandle: number;
/** If true, the slider is disabled and not interactive. */
@Prop() readonly disabled: boolean = false;
/** If true, shows the current value as a percentage. */
@Prop() readonly showPercentage: boolean = false;
/** Optional icon displayed on the left side of the slider. */
@Prop() readonly leftIcon: string;
/** Optional icon displayed on the right side of the slider. */
@Prop() readonly rightIcon: string;
/** Optional text label shown on the left side of the slider. */
@Prop() readonly leftText: string;
/** Optional text label shown on the right side of the slider. */
@Prop() readonly rightText: string;
/** Slider type: single handle or double handle (range). */
@Prop() readonly type: "single" | "double" = "single";
/** Accessible label for screen readers. */
@Prop() readonly ariaLabelText: string | null;

/** Optional name used when submitting the slider in a form. */
@Prop() readonly name: string = "";

@State() internalValue: number = 0;
@State() percentage: number = 0;
@State() internalMinValue: number = 0;
@State() internalMaxValue: number = 100;

/** Fired when the slider value (or values) change. */
@Event() ifxChange: EventEmitter;

	@Element() el: HTMLIfxSliderElement;

	@AttachInternals() internals: ElementInternals;

	private inputRef: HTMLInputElement;
	private minInputRef: HTMLInputElement;
	private maxInputRef: HTMLInputElement;
	private hasInitializedSingleValue = false;
	private initialInternalValue: number = 0;
	private initialInternalMinValue: number = 0;
	private initialInternalMaxValue: number = 0;

	private getSafeMin(): number {
		const parsedMin = Number(this.min);
		return Number.isFinite(parsedMin) ? parsedMin : 0;
	}

	private getSafeMax(): number {
		const parsedMax = Number(this.max);
		return Number.isFinite(parsedMax) ? parsedMax : this.getSafeMin();
	}

	private normalizeSingleValue(value: unknown): number {
		const numericValue = Number(value);
		const safeMin = this.getSafeMin();
		const safeMax = this.getSafeMax();

		if (!Number.isFinite(numericValue)) {
			return safeMin;
		}

		return Math.max(safeMin, Math.min(safeMax, numericValue));
	}

	private getSynchronizedSingleValue(): number {
		const hasExternalValue = Number.isFinite(Number(this.value));
		const sourceValue = hasExternalValue ? this.value : this.internalValue;
		return this.normalizeSingleValue(sourceValue);
	}

	@Watch("value")
	valueChanged(newValue: number) {
		this.internalValue = this.normalizeSingleValue(newValue);
		this.value = this.internalValue;
		this.calculatePercentageValue();
		this.updateValuePercent();
		this.updateFormValue();
	}

	@Watch("minValueHandle")
	minValueChanged(newValue: number) {
		this.internalMinValue = newValue;
		this.updateValuePercent();
		this.updateFormValue();
	}

	@Watch("maxValueHandle")
	maxValueChanged(newValue: number) {
		this.internalMaxValue = newValue;
		this.updateValuePercent();
		this.updateFormValue();
	}

	@Watch("min")
	minChanged() {
		this.reconcileBoundsChange();
	}

	@Watch("max")
	maxChanged() {
		this.reconcileBoundsChange();
	}

	private reconcileBoundsChange() {
		if (this.type !== "double" && !this.hasInitializedSingleValue) {
			return;
		}

		this.internalValue = this.getSynchronizedSingleValue();
		this.value = this.internalValue;
		this.calculatePercentageValue();
		this.updateValuePercent();
		this.updateFormValue();
	}

	@Watch("step")
	stepChanged() {
		this.updateValuePercent();
	}

	private updateFormValue() {
		if (this.type === "double") {
			this.internals.setFormValue(
				JSON.stringify({
					min: this.internalMinValue,
					max: this.internalMaxValue,
				}),
			);
			return;
		}

		this.internals.setFormValue(String(this.internalValue));
	}

	private getRangeSliderWrapper() {
		const rangeSliderWrapper = this.el.shadowRoot.querySelector(
			".range-slider__wrapper",
		);
		return rangeSliderWrapper;
	}

	private handleInputChangeOfRangeSlider(event: Event) {
		const target = event.target as HTMLInputElement;
		if (
			parseFloat(this.maxInputRef.value) - parseFloat(this.minInputRef.value) <=
			0
		) {
			if (target.id === "max-slider") {
				this.maxInputRef.value = this.minInputRef.value;
			} else {
				this.minInputRef.value = this.maxInputRef.value;
			}
		}
		if (target.id === "max-slider") {
			this.internalMaxValue = parseFloat(this.maxInputRef.value);
		} else {
			this.internalMinValue = parseFloat(this.minInputRef.value);
		}
		this.ifxChange.emit({
			minVal: this.internalMinValue,
			maxVal: this.internalMaxValue,
		});
		this.updateFormValue();
		this.updateValuePercent();
		this.updateZIndexIfRangeSlider(target.id);
	}

	private handleOnMouseLeaveOfRangeSlider(event: Event) {
		const target = event.target as HTMLInputElement;
		const sliderWrapper = this.getRangeSliderWrapper();
		if (target.id === "max-slider") {
			sliderWrapper.insertBefore(this.maxInputRef, this.minInputRef);
		} else {
			sliderWrapper.insertBefore(this.minInputRef, this.maxInputRef);
		}
	}

	private calculatePercentageValue() {
		const parsedInternalValue = Number(this.internalValue);
		const safeMin = this.getSafeMin();
		const safeMax = this.getSafeMax();
		const den = safeMax - safeMin;

		if (den <= 0 || !Number.isFinite(parsedInternalValue)) {
			this.percentage = 0;
			return;
		}

		const num = (parsedInternalValue - safeMin) * 1.0;
		this.percentage = +parseFloat(String((num / den) * 100)).toFixed(2);
	}

	private handleInputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		this.internalValue = this.normalizeSingleValue(target.value);
		this.value = this.internalValue;
		this.ifxChange.emit(this.internalValue);
		this.updateFormValue();
		this.calculatePercentageValue();
		this.updateValuePercent();
	}

	private roundToValidStep(value: number) {
		const safeMin = this.getSafeMin();
		const safeStep = Number.isFinite(Number(this.step)) && Number(this.step) > 0 ? Number(this.step) : 1;
		const relativeValue = value - safeMin;
		const remainder = relativeValue % safeStep;
		if (remainder >= safeStep / 2) {
			return safeMin + relativeValue + (safeStep - remainder);
		} else {
			return safeMin + relativeValue - remainder;
		}
	}

	private updateValuePercent() {
		const safeMin = this.getSafeMin();
		const safeMax = this.getSafeMax();
		const den = safeMax - safeMin;

		if (den <= 0) {
			if (this.inputRef) {
				this.inputRef.style.setProperty("--value-percent", "0%");
			}
			return;
		}

		if (this.type === "double") {
			if (this.minInputRef) {
				const num =
					(this.roundToValidStep(this.internalMinValue) - safeMin) * 1.0;
				const minPercent = (num / den) * 100;
				this.minInputRef.parentElement.style.setProperty(
					"--min-value-percent",
					`${minPercent}%`,
				);
			}

			if (this.maxInputRef) {
				const num =
					(this.roundToValidStep(this.internalMaxValue) - safeMin) * 1.0;
				const maxPercent = (num / den) * 100;
				this.maxInputRef.parentElement.style.setProperty(
					"--max-value-percent",
					`${maxPercent}%`,
				);
			}
		} else {
			if (this.inputRef) {
				const num =
					(this.roundToValidStep(this.internalValue) - safeMin) * 1.0;
				const percentage = (num / den) * 100;
				this.inputRef.style.setProperty("--value-percent", `${percentage}%`);
			}
		}
	}

	// Ensures that the last used slider thumb stays on top of the other thumb in order to handle correct overlapping
	// if min and max thumbs take the same value.
	private updateZIndexIfRangeSlider(targetId: string = "") {
		if (targetId === "max-slider") {
			this.minInputRef.style.zIndex = "1";
			this.maxInputRef.style.zIndex = "2";
		} else {
			this.minInputRef.style.zIndex = "2";
			this.maxInputRef.style.zIndex = "1";
		}
	}

	componentWillLoad() {
		const safeMin = this.getSafeMin();
		const safeMax = this.getSafeMax();
		const midPoint = (safeMax - safeMin) / 2 + safeMin;

		if (this.value === undefined || this.value === null) {
			this.internalValue = this.normalizeSingleValue(midPoint);
			this.value = this.internalValue;
		} else {
			this.internalValue = this.normalizeSingleValue(this.value);
			this.value = this.internalValue;
		}

		this.calculatePercentageValue();

		if (this.minValueHandle !== undefined)
			this.internalMinValue = this.minValueHandle;
		else this.internalMinValue = this.min;
		if (this.maxValueHandle !== undefined)
			this.internalMaxValue = this.maxValueHandle;
		else this.internalMaxValue = this.max;

		this.initialInternalValue = this.internalValue;
		this.initialInternalMinValue = this.internalMinValue;
		this.initialInternalMaxValue = this.internalMaxValue;
		this.hasInitializedSingleValue = true;
		this.updateFormValue();
	}

	formResetCallback() {
		this.internalValue = this.initialInternalValue;
		this.internalMinValue = this.initialInternalMinValue;
		this.internalMaxValue = this.initialInternalMaxValue;

		this.calculatePercentageValue();
		this.updateValuePercent();
		this.updateFormValue();
	}

	formStateRestoreCallback(
		state: string | null,
		_mode: "restore" | "autocomplete",
	) {
		if (!state) {
			return;
		}

		if (this.type === "double") {
			try {
				const parsedState = JSON.parse(state) as {
					min?: number;
					max?: number;
				};

				if (typeof parsedState.min === "number") {
					this.internalMinValue = parsedState.min;
				}

				if (typeof parsedState.max === "number") {
					this.internalMaxValue = parsedState.max;
				}
			} catch {
				// Ignore invalid state payloads restored by the browser.
			}
		} else {
			const parsedState = Number(state);
			if (!Number.isNaN(parsedState)) {
				this.internalValue = parsedState;
				this.calculatePercentageValue();
			}
		}

		this.updateValuePercent();
		this.updateFormValue();
	}

	private syncSingleValueState(): boolean {
		if (this.type === "double") {
			return false;
		}

		const normalizedValue = this.getSynchronizedSingleValue();
		if (normalizedValue === this.internalValue) {
			return false;
		}

		this.internalValue = normalizedValue;
		this.value = normalizedValue;
		this.calculatePercentageValue();
		this.updateFormValue();
		return true;
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-slider", await framework);
		}

		// Angular/ngModel can set `value` before custom-element upgrade.
		// Re-sync once after load so internal state and displayed percentage match.
		this.syncSingleValueState();
		this.updateValuePercent();
	}

	render() {
		return (
			<div class="ifx-slider">
				{this.leftText && <span class={`left-text`}>{this.leftText}</span>}
				{this.leftIcon && (
					<ifx-icon
						icon={this.leftIcon}
						class={`left-icon${this.disabled ? " disabled" : ""}`}
					/>
				)}
				{this.type !== "double" ? (
					<input
						type="range"
						min={this.min}
						max={this.max}
						step={this.step}
						value={this.internalValue}
						disabled={this.disabled}
						ref={(el) => (this.inputRef = el as HTMLInputElement)}
						onInput={(event) => this.handleInputChange(event)}
						aria-label="Slider"
						aria-valuemin={this.min}
						aria-valuemax={this.max}
						aria-valuenow={this.internalValue}
						aria-disabled={this.disabled ? "true" : "false"}
					/>
				) : (
					<div
						class="range-slider__wrapper"
						aria-label={this.ariaLabelText}
						role="group"
					>
						<input
							id="min-slider"
							type="range"
							min={this.min}
							max={this.max}
							step={this.step}
							value={this.internalMinValue}
							disabled={this.disabled}
							ref={(el) => (this.minInputRef = el as HTMLInputElement)}
							onInput={(event) => this.handleInputChangeOfRangeSlider(event)}
							onMouseUp={(event) => this.handleOnMouseLeaveOfRangeSlider(event)}
							aria-label="Minimum value slider"
							aria-valuemin={this.min}
							aria-valuemax={this.max}
							aria-valuenow={this.internalMinValue}
							aria-disabled={this.disabled ? "true" : "false"}
						/>
						<input
							id="max-slider"
							type="range"
							min={this.min}
							max={this.max}
							step={this.step}
							value={this.internalMaxValue}
							disabled={this.disabled}
							ref={(el) => (this.maxInputRef = el as HTMLInputElement)}
							onInput={(event) => this.handleInputChangeOfRangeSlider(event)}
							onMouseUp={(event) => this.handleOnMouseLeaveOfRangeSlider(event)}
							aria-label="Maximum value slider"
							aria-valuemin={this.min}
							aria-valuemax={this.max}
							aria-valuenow={this.internalMaxValue}
							aria-disabled={this.disabled ? "true" : "false"}
						/>
					</div>
				)}
				{this.rightIcon && (
					<ifx-icon
						icon={this.rightIcon}
						class={`right-icon${this.disabled ? " disabled" : ""}`}
					/>
				)}
				{this.rightText && (
					<span class={`right-text${this.disabled ? " disabled" : ""}`}>
						{this.rightText}
					</span>
				)}

				{this.showPercentage && this.type !== "double" && (
					<span class={`percentage-display${this.disabled ? " disabled" : ""}`}>
						{this.percentage}%
					</span>
				)}
			</div>
		);
	}
}
