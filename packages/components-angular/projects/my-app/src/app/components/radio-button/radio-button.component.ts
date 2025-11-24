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
  radioBtnError = false;
  radioBtnDisabled = false;
  radioBtnChecked = false;

  radioBtnSize = "s";
  radioBtnSizes = ["s", "m"];
  radioBtnSizeIndex = 0;

  toggleRadioBtnDisabled() {
    this.radioBtnDisabled = !this.radioBtnDisabled;
  }
  toggleRadioBtnError() {
    this.radioBtnError = !this.radioBtnError;
  }
  toggleRadioBtnChecked() {
    this.radioBtnChecked = !this.radioBtnChecked;
  }

  toggleRadioBtnSize() {
    this.radioBtnSizeIndex = (this.radioBtnSizeIndex + 1) % this.radioBtnSizes.length;
    this.radioBtnSize = this.radioBtnSizes[this.radioBtnSizeIndex];
  }

}