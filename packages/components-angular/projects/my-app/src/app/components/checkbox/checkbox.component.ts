import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  checkboxChecked = false;
  checkboxError = false;
  checkboxDisabled = false;
  checkboxIndeterminate = false;

  checkboxSize = "m";
  checkboxSizes = ["m", "s"];
  checkboxSizeIndex = 0;

  handleSubmit() {
    console.log('Form submitted. Checkbox value:', this.checkboxChecked);
  }
  toggleCheckboxDisabled() {
    this.checkboxDisabled = !this.checkboxDisabled;
  }
  toggleCheckboxError() {
    this.checkboxError = !this.checkboxError;
  }
  toggleCheckboxSize() {
    this.checkboxSizeIndex = (this.checkboxSizeIndex + 1) % this.checkboxSizes.length;
    this.checkboxSize = this.checkboxSizes[this.checkboxSizeIndex];
  }
  toggleIndeterminate() {
    this.checkboxIndeterminate = !this.checkboxIndeterminate;
  }
  toggleCheckboxValue() {
    console.log("checkbox value change")
    this.checkboxChecked = !this.checkboxChecked;
  }
}
