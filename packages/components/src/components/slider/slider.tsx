import { Component, h, Prop, Event, EventEmitter, State, Watch, Element } from '@stencil/core';
 

@Component({
  tag: 'ifx-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class IfxSlider {
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() step: number = 1;
  @Prop() value: number;
  @Prop() minValueHandle: number;
  @Prop() maxValueHandle: number;
  @Prop() disabled: boolean = false;
  @Prop() showPercentage: boolean = false;
  @Prop() leftIcon: string;
  @Prop() rightIcon: string;
  @Prop() leftText: string;
  @Prop() rightText: string;
  @Prop() type: 'single' | 'double' = 'single';
  @State() internalValue: number = 0;
  @State() percentage: number = 0;
  @State() internalMinValue: number = 0;
  @State() internalMaxValue: number = 100;
  @Event() ifxChange: EventEmitter;

  @Element() el;

  private inputRef: HTMLInputElement;
  private minInputRef: HTMLInputElement;
  private maxInputRef: HTMLInputElement;
                                             
  @Watch('value')
  valueChanged(newValue: number) {
    this.internalValue = newValue;
    this.updateValuePercent();
  }

  @Watch('minValueHandle')
  minValueChanged(newValue: number) {
    this.internalMinValue = newValue;
    this.updateValuePercent();
  }
  
  @Watch('maxValueHandle')
  maxValueChanged(newValue: number) {
    this.internalMaxValue = newValue;
    this.updateValuePercent();
  }

  getRangeSliderWrapper() {
    const rangeSliderWrapper = this.el.shadowRoot.querySelector('.range-slider__wrapper');
    return rangeSliderWrapper;
  }

  handleInputChangeOfRangeSlider(event: Event) {
    const target = event.target as HTMLInputElement;
    if(parseFloat(this.maxInputRef.value) - parseFloat(this.minInputRef.value) <= 0) {
      if(target.id === 'max-slider') {
        this.maxInputRef.value = this.minInputRef.value;
      }else{
        this.minInputRef.value = this.maxInputRef.value;
      }
    }
    if(target.id === 'max-slider') {
      this.internalMaxValue = parseFloat(this.maxInputRef.value);
    } else {
      this.internalMinValue = parseFloat(this.minInputRef.value);
    }
    this.ifxChange.emit({minVal: this.internalMinValue, maxVal: this.internalMaxValue});
    this.updateValuePercent();
  }
  
  handleOnMouseLeaveOfRangeSlider(event: Event) {
    const target = event.target as HTMLInputElement;
    const sliderWrapper = this.getRangeSliderWrapper();
    if(target.id === 'max-slider') {
      sliderWrapper.insertBefore(this.maxInputRef, this.minInputRef);
    } else {
      sliderWrapper.insertBefore(this.minInputRef, this.maxInputRef);
    }
  }

  calculatePercentageValue() {
    const num = (this.internalValue - this.min) * 1.0;
    const den = this.max - this.min;
    this.percentage = +parseFloat(String((num/den)*100)).toFixed(2);
  }

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.internalValue = parseFloat(target.value);
    this.ifxChange.emit(this.internalValue);
    this.calculatePercentageValue();
    this.updateValuePercent();
  }

  private roundToValidStep(value: number) {
    const relativeValue = value - this.min;
    const remainder = relativeValue % this.step;
    if (remainder >= this.step / 2) {
      return this.min + relativeValue + (this.step - remainder);
    } else {
      return this.min + relativeValue - remainder;
    }
  }

  updateValuePercent() {
    const den = this.max - this.min;
    if(this.type === 'double'){
      if (this.minInputRef) {
        const num = (this.roundToValidStep(this.internalMinValue) - this.min) * 1.0;
        const minPercent = (num/den) * 100;
        this.minInputRef.parentElement.style.setProperty('--min-value-percent', `${minPercent}%`);
      }

      if (this.maxInputRef) {
        const num = (this.roundToValidStep(this.internalMaxValue) - this.min) * 1.0;
        const maxPercent = (num/den) * 100;
        this.maxInputRef.parentElement.style.setProperty('--max-value-percent', `${maxPercent}%`);
      }

    } else {

      if (this.inputRef) {
        const num = (this.roundToValidStep(this.internalValue) - this.min) * 1.0;
        const den = this.max - this.min;
        const percentage = (num/den) * 100;
        this.inputRef.style.setProperty('--value-percent', `${percentage}%`);
      }

    }
  }

  componentWillLoad() {
    if(this.value === undefined) {
      this.internalValue = (this.max-this.min) / 2;
    } else {
      this.internalValue = Math.max(this.min, Math.min(this.max, this.value));
    }

    this.calculatePercentageValue();

    if(this.minValueHandle !== undefined) this.internalMinValue = this.minValueHandle;
    else this.internalMinValue = this.min;
    if(this.maxValueHandle !== undefined) this.internalMaxValue = this.maxValueHandle;
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
          (this.type !== 'double') ?
            <input
              type="range"
              min={this.min}
              max={this.max}
              step={this.step}
              value={this.internalValue}
              disabled={this.disabled}
              ref={(el) => (this.inputRef = el as HTMLInputElement)}
              onInput={(event) => this.handleInputChange(event)}
              aria-label='a slider'
              aria-value={this.value}
              aria-disabled={this.disabled}
              /> 
              :
            <div class = 'range-slider__wrapper' aria-label='a range slider' aria-value={this.value} aria-disabled={this.disabled} >
              <input 
                id='min-slider'
                type='range'
                min={this.min}
                max={this.max}
                step={this.step}
                value={this.internalMinValue}
                disabled={this.disabled}
                ref={(el) => (this.minInputRef = el as HTMLInputElement)}
                onInput={(event) => this.handleInputChangeOfRangeSlider(event)}
                onMouseUp={(event) => this.handleOnMouseLeaveOfRangeSlider(event)}
              />
              <input 
                id='max-slider'
                type='range'
                min={this.min}
                max={this.max}
                step={this.step}
                value={this.internalMaxValue}
                disabled={this.disabled}
                ref={(el) => (this.maxInputRef = el as HTMLInputElement)}
                onInput={(event) => this.handleInputChangeOfRangeSlider(event)}
                onMouseUp={(event) => this.handleOnMouseLeaveOfRangeSlider(event)}
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

        {this.showPercentage && (this.type !== "double") && (
          <span
            class={`percentage-display${this.disabled ? ' disabled' : ''}`}
          >
            {this.percentage}%
          </span>
        )}
      </div>
    );
  }
}