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
    //console.log(e.target.value)
    var selectedDate = new Date(e.target.value);

    // Extracting day, month, and year separately
    var day = selectedDate.getDate();
    var month = selectedDate.getMonth() + 1; // Adding 1 to get 1-12 range
    var year = selectedDate.getFullYear();

    console.log('Day: ' + day);
    console.log('Month: ' + month);
    console.log('Year: ' + year);
  }

  handleClick() { 
    const input = this.el.shadowRoot.querySelector('.date__picker-input') as HTMLInputElement;
    if(input) { 
      input.focus()
      input.click()
    }
  }

  render() {
    return (
      <div tabindex="0" class={`input__wrapper ${this.size === 'l' ? 'large' : 'small'}`} onClick={() => this.handleClick()}>
        <input class='date__picker-input' type="date" onChange={(e) => this.getDate(e)} />
        <div class="icon__wrapper">
          <ifx-icon icon='calendar16'></ifx-icon>
        </div>
      </div>
    )
  }
}
