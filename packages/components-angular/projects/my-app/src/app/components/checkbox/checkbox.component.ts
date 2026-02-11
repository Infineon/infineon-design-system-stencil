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
  error = false;
  disabled = false;
  indeterminate = false;

  size = "m";
  sizes = ["m", "s"];
  sizeIndex = 0;

  toggleDisabled() {
    this.disabled = !this.disabled;
  }
  toggleError() {
    this.error = !this.error;
  }
  toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }
  toggleIndeterminate() {
    this.indeterminate = !this.indeterminate;
  }
}
