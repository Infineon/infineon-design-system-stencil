import { AttachInternals } from '@stencil/core';
import { Component, Prop, h, Element, Event, EventEmitter } from '@stencil/core';
 

@Component({
  tag: 'ifx-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true,
  formAssociated: true,
})

export class DatePicker {
  private inputId: string = `ifx-date-picker-${++datePickerId}`;

  @Element() el: HTMLElement;
  @Prop() size: string = 's';
  @Prop() error: boolean = false;
  @Prop() success: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() AriaLabel: string;
  @Prop() value: string;
  @Prop() max: string;
  @Prop() min: string;
  @Prop() required: boolean = false;
  @Prop() label: string;
  @Prop() caption: string;

  @AttachInternals() internals: ElementInternals;

  @Event() ifxDate: EventEmitter;

  getDate(e) { 
    const inputValue = e.target.value;
    const selectedDate = new Date(inputValue);
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1; 
    const year = selectedDate.getFullYear();

    if (!inputValue) {
      this.internals.setFormValue(null);
      this.ifxDate.emit({day, month, year});
      return;
    }

    this.internals.setFormValue(selectedDate.toISOString().substring(0,10))
    this.ifxDate.emit({day, month, year})
  }

  handleInputFocusOnIconClick() { 
    const input = this.el.shadowRoot.querySelector('.date__picker-input') as HTMLInputElement;
    if(input) { 
      input.focus()
    }
  }

 getBrowser() {
    if( navigator.userAgent.indexOf("Chrome") != -1 ) {
      return "Chrome";
    } else if( navigator.userAgent.indexOf("Opera") != -1 ) {
      return "Opera";
    } else if( navigator.userAgent.indexOf("MSIE") != -1 ) {
      return "IE";
    } else if( navigator.userAgent.indexOf("Firefox") != -1 ) {
      return "Firefox";
    } else {
      return "unknown";
    }
  }

  setFireFoxClasses() { 
    const browser = this.getBrowser()
    const input = this.el.shadowRoot.querySelector('.date__picker-input');

    if(browser === 'Firefox') { 
      input.classList.add('firefox__classes')
    } else if(input.classList.contains('firefox__classes')) { 
      input.classList.remove('firefox__classes')
    }
  }

  componentDidLoad() { 
    this.setFireFoxClasses()
  }

  formResetCallback() {
    this.internals.setFormValue(null);
  }

  render() {
    return (
      <div class={`date__picker-container ${this.error ? 'error' : ''} ${this.disabled ? 'disabled': ''}`}>

        <label class='label__wrapper' htmlFor={ this.inputId }>
        { this.label?.trim() }
        </label>

        <div class={`input__wrapper ${this.size === 'l' ? 'large' : 'small'} ${this.disabled ? 'disabled' : undefined}`}>
          <input
          type="date"
          class={`date__picker-input ${this.error ? 'error' : ""} ${this.success ? "success" : ""}`}
          disabled={this.disabled ? true : undefined}
          aria-invalid={this.error}
          aria-label={this.AriaLabel}
          max={this.max}
          min={this.min}
          value={this.value}
          required={this.required}
          onChange={(e) => this.getDate(e)} />
          <div class="icon__wrapper" role="button" onClick={() => this.handleInputFocusOnIconClick()}>
            <ifx-icon icon='calendar16'></ifx-icon>
          </div>
        </div>

        { this.caption?.trim() && (
            <div class='caption__wrapper'>
              { this.caption.trim() }
            </div> 
          )}
      </div>
    )
  }
}

let datePickerId = 0;