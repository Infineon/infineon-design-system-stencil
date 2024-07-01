import { AttachInternals } from '@stencil/core';
import { Component, Prop, h, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true,
  formAssociated: true,
})

export class DatePicker {
  @Element() el: HTMLElement;
  @Prop() size: string = 's';
  @Prop() error: boolean = false;
  @Prop() success: boolean = false;
  @Prop() disabled: boolean = false;

  @AttachInternals() internals: ElementInternals;

  @Event() ifxDate: EventEmitter;

  getDate(e) { 
    const selectedDate = new Date(e.target.value);
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1; 
    const year = selectedDate.getFullYear();

    if(day && month && year) { 
      this.internals.setFormValue(selectedDate.toISOString().substring(0,10))
      this.ifxDate.emit({day, month, year})
    }
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

  /**
   * Callback for form association.
   * Called whenever the form is reset.
   */
  formResetCallback() {
    this.internals.setFormValue(null);
  }

  render() {
    return (
      <div class={`input__wrapper ${this.size === 'l' ? 'large' : 'small'} ${this.disabled ? 'disabled' : ""}`} >
        <input 
        class={`date__picker-input ${this.error ? 'error' : ""} ${this.success ? "success" : ""}`} type="date" 
        disabled={this.disabled}
        onChange={(e) => this.getDate(e)} />
        <div class="icon__wrapper" onClick={() => this.handleInputFocusOnIconClick()}>
          <ifx-icon icon='calendar16'></ifx-icon>
        </div>
      </div>
    )
  }
}
