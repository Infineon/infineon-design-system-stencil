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
  error = false;
  disabled = false;

  size = "s";
  sizes = ["s", "m"];
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

}