import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@infineon/infineon-design-system-angular';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [
    ComponentLibraryModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {

  variant = "primary";
  variants = ["primary", "secondary", "tertiary"];
  variantIndex = 0;

  size = "m";
  sizes = ["s", "m", "l"];
  sizeIndex = 1;

  disabled = false;

  shape = "round";
  shapes = ["round", "square"];
  shapeIndex = 0;

  toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variants.length;
    this.variant = this.variants[this.variantIndex];
  }
  toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizes.length;
    this.size = this.sizes[this.sizeIndex];
  }
  toggleDisabled() {
    this.disabled = !this.disabled;
  }
  toggleShape() {
    this.shapeIndex = (this.shapeIndex + 1) % this.shapes.length;
    this.shape = this.shapes[this.shapeIndex];
  }

}
