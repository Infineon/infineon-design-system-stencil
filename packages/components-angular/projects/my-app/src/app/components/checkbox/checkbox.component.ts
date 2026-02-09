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
  error = false;
  disabled = false;
  checkboxIndeterminate = false;

  checkboxSize = "m";
  checkboxSizes = ["m", "s"];
  checkboxSizeIndex = 0;

  toggleDisabled() {
    this.disabled = !this.disabled;
  }
  toggleError() {
    this.error = !this.error;
  }
  toggleSize() {
    this.checkboxSizeIndex = (this.checkboxSizeIndex + 1) % this.checkboxSizes.length;
    this.checkboxSize = this.checkboxSizes[this.checkboxSizeIndex];
  }
  toggleIndeterminate() {
    this.checkboxIndeterminate = !this.checkboxIndeterminate;
  }
}
