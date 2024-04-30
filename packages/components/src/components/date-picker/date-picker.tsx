import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ifx-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true,
})

export class DatePicker {
  @Element() el: HTMLElement;
  @Prop() size: string = 's';
  @Prop() error: boolean = false;
  @Prop() success: boolean = false;
  @Prop() disabled: boolean = false;

  getDate(e) { 
    const selectedDate = new Date(e.target.value);
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1; 
    const year = selectedDate.getFullYear();

    console.log('Day: ' + day);
    console.log('Month: ' + month);
    console.log('Year: ' + year);
  }

  handleInputFocusOnIconClick() { 
    const input = this.el.shadowRoot.querySelector('.date__picker-input') as HTMLInputElement;
    if(input) { 
      input.focus()
    }
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
