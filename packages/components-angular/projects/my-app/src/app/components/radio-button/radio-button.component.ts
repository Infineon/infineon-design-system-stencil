import { Component } from '@angular/core';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [
    ComponentLibraryModule
  ],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  radioError = false;
  radioDisabled = false;
  radioChecked = false;
  radioButtonValue = false;

  handleRadioButtonChange(event: any) {
    console.log('Radio button value: ', event.detail);
    this.radioButtonValue = event.detail;
  }

  toggleRadioBtnDisabled() {
    this.radioDisabled = !this.radioDisabled;
  }
  toggleRadioBtnError() {
    this.radioError = !this.radioError;
  }
  toggleRadioBtnValue() {
    console.log("checkbox value change")
    this.radioChecked = !this.radioChecked;
  }

}
