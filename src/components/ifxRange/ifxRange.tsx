import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-range',
  styleUrl: 'ifxRange.scss',
  shadow: true,
})
export class IfxRange {
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop({ mutable: true }) value: number = 0;
  @Prop() disabled: boolean = false;
  @Prop() showPercentage: boolean = false; // New property for toggleable percentage display
  @Prop() leftIcon: string;
  @Prop() rightIcon: string;
  @Prop() leftText: string;
  @Prop() rightText: string;
  @Event() valueChanged: EventEmitter<number>;

  private inputRef: HTMLInputElement;

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = parseInt(target.value);
    this.valueChanged.emit(this.value);
    this.updateValuePercent();
  }

  updateValuePercent() {
    if (this.inputRef) {
      const percent = ((this.value - this.min) / (this.max - this.min)) * 100;
      this.inputRef.style.setProperty('--value-percent', `${percent}%`);
    }
  }

  componentDidLoad() {
    this.updateValuePercent();
  }


  render() {
    return (
      <div class="ifx-range">
        {this.leftText && (
          <span class={`left-text${this.disabled ? ' disabled' : ''}`}>
            {this.leftText}
          </span>
        )}
        {this.leftIcon && (
          <i class={`left-icon${this.disabled ? ' disabled' : ''}`}>
            {this.leftIcon}
          </i>
        )}

        <input
          type="range"
          min={this.min}
          max={this.max}
          disabled={this.disabled}
          value={this.value}
          ref={(el) => (this.inputRef = el as HTMLInputElement)}
          onInput={(event) => this.handleInputChange(event)}
        />
        {this.rightIcon && (
          <i class={`right-icon${this.disabled ? ' disabled' : ''}`}>
            {this.rightIcon}
          </i>
        )}
        {this.rightText && (
          <span class={`right-text${this.disabled ? ' disabled' : ''}`}>
            {this.rightText}
          </span>
        )}

        {this.showPercentage && (
          <span
            class={`percentage-display${this.disabled ? ' disabled' : ''}`}
          >
            {this.value}%
          </span>
        )}
      </div>
    );
  }
}
