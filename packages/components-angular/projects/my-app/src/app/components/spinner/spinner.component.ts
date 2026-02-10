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
  inverted = false;

  variant = "default";
  variants = ["default", "brand"];
  variantIndex = 0;

  size = "m";
  sizes = ["s", "m"];
  sizeIndex = 1;

  toggleInverted() {
    this.inverted = !this.inverted;
  }

  toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variants.length;
    this.variant = this.variants[this.variantIndex];
  }

  toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }
}
