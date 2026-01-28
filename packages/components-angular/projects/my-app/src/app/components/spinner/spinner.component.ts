import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  spinnerInverted = false;

  spinnerVariant = "default";
  spinnerVariants = ["default", "brand"];
  spinnerVariantIndex = 0;

  spinnerSize = "m";
  spinnerSizes = ["s", "m"];
  spinnerSizeIndex = 1;

  toggleSpinnerInverted() {
    this.spinnerInverted = !this.spinnerInverted;
  }

  toggleSpinnerVariant() {
    this.spinnerVariantIndex = (this.spinnerVariantIndex + 1) % this.spinnerVariants.length;
    this.spinnerVariant = this.spinnerVariants[this.spinnerVariantIndex];
  }

  toggleSpinnerSize() {
    this.spinnerSizeIndex = (this.spinnerSizeIndex + 1) % this.spinnerSizes.length;
    this.spinnerSize = this.spinnerSizes[this.spinnerSizeIndex];
  }
}
