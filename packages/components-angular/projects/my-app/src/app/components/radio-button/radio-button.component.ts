import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
