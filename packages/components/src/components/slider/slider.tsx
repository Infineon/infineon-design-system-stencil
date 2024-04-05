import { Component, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class IfxSlider {
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() value: number = 0;
  @Prop() minValue: number;
  @Prop() maxValue: number;
  @Prop() disabled: boolean = false;
  @Prop() showPercentage: boolean = false;
  @Prop() leftIcon: string;
  @Prop() rightIcon: string;
  @Prop() leftText: string;
  @Prop() rightText: string;
  @Prop() type: 'default' | 'range' = 'default';
  @State() internalValue: number = 0;
  @State() internalMinValue: number = 0;
  @State() internalMaxValue: number = 100;
  @Event() ifxChange: EventEmitter<number>;

  private inputRef: HTMLInputElement;
  private minInputRef: HTMLInputElement;
  private maxInputRef: HTMLInputElement;

  @Watch('value')
  valueChanged(newValue: number) {
    this.internalValue = newValue;
    this.updateValuePercent();
  }

  @Watch('minValue')
  minValueChanged(newValue: number) {
    this.internalMinValue = newValue;
    this.updateValuePercent();
  }
  
  @Watch('maxValue')
  maxValueChanged(newValue: number) {
    this.internalMaxValue = newValue;
    this.updateValuePercent();
  }

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if(this.type === 'range') {
      if(target.id === 'max-slider') {
        this.internalMaxValue = parseInt(target.value);
      } else {
        this.internalMinValue = parseInt(target.value);
      }
    } else {
      this.internalValue = parseInt(target.value);
      this.ifxChange.emit(this.internalValue);
    }
    this.updateValuePercent();
  }

  updateValuePercent() {
    if(this.type === 'range'){
      if (this.minInputRef) {
        const minPercent = ((this.internalMinValue - this.min) / (this.max - this.min)) * 100;
        this.minInputRef.parentElement.style.setProperty('--min-value-percent', `${minPercent}%`);
      }

      if (this.maxInputRef) {
        const maxPercent = ((this.internalMaxValue - this.min) / (this.max - this.min)) * 100;
        this.maxInputRef.parentElement.style.setProperty('--max-value-percent', `${maxPercent}%`);
      }

    } else {

      if (this.inputRef) {
        const percent = ((this.internalValue - this.min) / (this.max - this.min)) * 100;
        this.inputRef.style.setProperty('--value-percent', `${percent}%`);
      }

    }
  }

  componentWillLoad() {
    this.internalValue = this.value;
    if(this.minValue !== undefined) this.internalMinValue = this.minValue;
    else this.internalMinValue = this.min;
    if(this.maxValue !== undefined) this.internalMaxValue = this.maxValue;
    else this.internalMaxValue = this.max;
  }

  componentDidLoad() {
    this.updateValuePercent();
  }


  render() {
    return (
      <div class="ifx-slider">
        {this.leftText && (
          <span class={`left-text`}>
            {this.leftText}
          </span>
        )}
        {this.leftIcon && (
          <ifx-icon icon={this.leftIcon} class={`left-icon${this.disabled ? ' disabled' : ''}`} />
        )}
        {
          (this.type !== 'range') ?
            <input
              type="range"
              min={this.min}
              max={this.max}
              disabled={this.disabled}
              value={this.internalValue}
              ref={(el) => (this.inputRef = el as HTMLInputElement)}
              onInput={(event) => this.handleInputChange(event)}
              aria-label='a slider'
              aria-value={this.value}
              aria-disabled={this.disabled}
              /> 
              :
            <div
              class = 'range-slider__wrapper'
              aria-label='a slider'
              aria-value={this.value}
              aria-disabled={this.disabled}
            >
              <input 
              id='min-slider'
              type='range'
              min={this.min}
              max={this.max}
              value={this.internalMinValue}
              disabled={this.disabled}
              ref={(el) => (this.minInputRef = el as HTMLInputElement)}
              onInput={(event) => this.handleInputChange(event)}
              />
              <input 
              id='max-slider'
              type='range'
              min={this.min}
              max={this.max}
              value={this.internalMaxValue}
              disabled={this.disabled}
              ref={(el) => (this.maxInputRef = el as HTMLInputElement)}
              onInput={(event) => this.handleInputChange(event)}
              />

            </div>
        }
        {this.rightIcon && (
          <ifx-icon icon={this.rightIcon} class={`right-icon${this.disabled ? ' disabled' : ''}`} />
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
            {this.internalValue}%
          </span>
        )}
      </div>
    );
  }
}
