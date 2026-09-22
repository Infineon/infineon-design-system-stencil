import {
	AttachInternals,
	Component,
	Event,
	type EventEmitter,
	h,
	Prop,
	Watch,
} from "@stencil/core";

@Component({
	tag: "ifx-counter",
	styleUrl: "counter.scss",
	shadow: true,
	formAssociated: true,
})
export class Counter {
	private initialValue = 0;

	/** The current value of the counter. Must be a non-negative number. */
	@Prop({ mutable: true }) value: number = 0;
	/** Used as the form field name when the counter is in a form. */
	@Prop() readonly name: string = "";
	@AttachInternals() internals!: ElementInternals;
	/** Emitted when the counter value changes. Returns the new value as a number. */
	@Event({ eventName: "ifxChange" }) ifxChange!: EventEmitter<number>;

	@Watch("value")
	protected valueChanged(value: number) {
		const nextValue = Math.max(0, value);
		if (nextValue !== value) {
			this.value = nextValue;
			return;
		}
		this.updateFormValue();
	}

	componentWillLoad() {
		this.value = Math.max(0, this.value);
		this.initialValue = this.value;
		this.updateFormValue();
	}

	formResetCallback() {
		this.value = this.initialValue;
		this.updateFormValue();
	}

	private updateValue(value: number) {
		const nextValue = Math.max(0, value);

		if (nextValue === this.value) {
			return;
		}

		this.value = nextValue;
		this.ifxChange.emit(this.value);
	}

	private updateFormValue() {
		this.internals.setFormValue(String(this.value));
	}

	private increment = () => {
		this.updateValue(this.value + 1);
	};

	private decrement = () => {
		this.updateValue(this.value - 1);
	};

	render() {
		const isDecrementDisabled = this.value === 0;

		return (
			<div class="counter">
				<button
					class="counter__btn counter__btn--minus"
					type="button"
					aria-label="Decrease value"
					disabled={isDecrementDisabled}
					onClick={this.decrement}
				>
					<ifx-icon icon="minus-16"></ifx-icon>
				</button>
				<output class="counter__value" aria-label="Counter value">
					<span class="counter__value-inner">{this.value}</span>
				</output>
				<button
					class="counter__btn counter__btn--plus"
					type="button"
					aria-label="Increase value"
					onClick={this.increment}
				>
					<ifx-icon icon="plus-16"></ifx-icon>
				</button>
			</div>
		);
	}
}
