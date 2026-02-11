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
  error = false;
  success = false;
  disabled = false;
  required = false;

  size = "s";
  sizes = ["s", "l"];
  sizeIndex = 0;

  type = "date";
  types = ["date", "datetime-local"];
  typeIndex = 0;

  toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }

  toggleType() {
    this.typeIndex = (this.typeIndex + 1) % this.types.length;
    this.type = this.types[this.typeIndex];
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  toggleSuccess() {
    this.success = !this.success;
  }

  toggleError() {
    this.error = !this.error;
  }

  toggleRequired() {
    this.required = !this.required;
  }
}
