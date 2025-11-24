import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  datePickerError = false;
  datePickerSuccess = false;
  datePickerDisabled = false;

  datePickerSize = "s";
  datePickerSizes = ["s", "l"];
  datePickerSizeIndex = 0;

  datePickerType= "date";
  datePickerTypes = ["date", "datetime-local"];
  datePickerTypeIndex = 0;

  toggleDatePickerSize() {
    this.datePickerSizeIndex = (this.datePickerSizeIndex + 1) % this.datePickerSizes.length;
    this.datePickerSize = this.datePickerSizes[this.datePickerSizeIndex];
  }

  toggleDatePickerType() {
    this.datePickerTypeIndex = (this.datePickerTypeIndex + 1) % this.datePickerTypes.length;
    this.datePickerType = this.datePickerTypes[this.datePickerTypeIndex];
  }

  toggleDatePickerDisabled() {
    this.datePickerDisabled = !this.datePickerDisabled;
  }

  toggleDatePickerSuccess() {
    this.datePickerSuccess = !this.datePickerSuccess;
  }

  toggleDatePickerError() {
    this.datePickerError = !this.datePickerError;
  }
}
