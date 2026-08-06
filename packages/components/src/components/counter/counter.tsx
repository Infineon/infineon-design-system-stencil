import {
	Component,
	Event,
	type EventEmitter,
	h,
	Prop,
	State,
	Watch,
} from "@stencil/core";

@Component({
	tag: "ifx-counter",
	styleUrl: "counter.scss",
	shadow: true,
})
export class Counter {
	@Prop() value: number = 0;

	@State() internalValue: number = Math.max(0, this.value);

	@Event({ eventName: "ifxChange" }) ifxChange!: EventEmitter<number>;

	@Watch("value")
	protected valueChanged(value: number) {
		this.internalValue = Math.max(0, value);
	}

	private updateValue(value: number) {
		const nextValue = Math.max(0, value);

		if (nextValue === this.internalValue) {
			return;
		}

		this.internalValue = nextValue;
		this.ifxChange.emit(this.internalValue);
	}

	private increment = () => {
		this.updateValue(this.internalValue + 1);
	};

	private decrement = () => {
		this.updateValue(this.internalValue - 1);
	};

	render() {
		const isDecrementDisabled = this.internalValue === 0;

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
					<span class="counter__value-inner">{this.internalValue}</span>
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
